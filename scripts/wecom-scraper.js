#!/usr/bin/env node
import axios from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';
import fs from 'fs-extra';
import path from 'path';
import PQueue from 'p-queue';
import converter from 'html-to-markdown';
import { load } from 'cheerio';
import sanitize from 'sanitize-filename';
import { decode } from 'html-entities';
import { chromium } from 'playwright';

const ROOT_OUTPUT = path.resolve('wecom');
const BASE_REFERER = 'https://developer.work.weixin.qq.com/document/path/90664';
const BASE_URL = 'https://developer.work.weixin.qq.com';
const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36';
const LAST_UPDATED_REGEX = /最后更新[:：]\s*(\d{4})[./-](\d{1,2})[./-](\d{1,2})/i;

const args = process.argv.slice(2);
const limitIndex = args.indexOf('--limit');
const limitValue = limitIndex >= 0 ? Number(args[limitIndex + 1]) : Number.NaN;
const DOC_LIMIT = Number.isFinite(limitValue) && limitValue > 0 ? Math.floor(limitValue) : null;

const startIndex = args.indexOf('--start');
const startValue = startIndex >= 0 ? Number(args[startIndex + 1]) : Number.NaN;
const DOC_START = Number.isFinite(startValue) && startValue > 0 ? Math.floor(startValue) : 0;

const jar = new CookieJar();
const axiosInstance = wrapper(axios.create({
  baseURL: BASE_URL,
  headers: {
    'User-Agent': USER_AGENT,
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9'
  },
  timeout: 20000,
  withCredentials: true
}));
axiosInstance.defaults.jar = jar;
axiosInstance.defaults.withCredentials = true;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function parseDateParts(year, month, day) {
  const y = Number(year);
  const m = Number(month);
  const d = Number(day);
  if (!Number.isFinite(y) || !Number.isFinite(m) || !Number.isFinite(d)) {
    return null;
  }
  const date = new Date(Date.UTC(y, m - 1, d));
  if (Number.isNaN(date.getTime())) {
    return null;
  }
  return date;
}

function extractLastUpdatedFromHtml(html) {
  if (!html) return null;
  const $ = load(html);
  const text = $('body').text() || '';
  const match = text.match(LAST_UPDATED_REGEX);
  if (!match) return null;
  return parseDateParts(match[1], match[2], match[3]);
}

function extractLastUpdatedFromMarkdown(markdown) {
  if (!markdown) return null;
  const match = markdown.match(LAST_UPDATED_REGEX);
  if (!match) return null;
  return parseDateParts(match[1], match[2], match[3]);
}

function timestampToDate(value) {
  if (!Number.isFinite(value)) return null;
  const numeric = Number(value);
  if (!Number.isFinite(numeric) || numeric <= 0) return null;
  const millis = numeric > 1e12 ? numeric : numeric * 1000;
  const date = new Date(millis);
  if (Number.isNaN(date.getTime())) return null;
  return date;
}

function formatDate(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    return '';
  }
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  return `${year}/${month}/${day}`;
}

function injectLastUpdated(markdown, date) {
  if (!date) return markdown;
  const formatted = typeof date === 'string' ? date : formatDate(date);
  if (!formatted) return markdown;
  if (/^最后更新：/m.test(markdown)) {
    return markdown.replace(/^最后更新：.*$/m, `最后更新：${formatted}`);
  }
  return `最后更新：${formatted}\n\n${markdown}`;
}

const COOKIE_FILE = path.resolve('.wecom_cookies.json');

function importCookiesFromEnv(cookies) {
  if (!cookies) return;
  cookies.split(';').map((entry) => entry.trim()).filter(Boolean).forEach((entry) => {
    const [name, ...rest] = entry.split('=');
    if (!name || !rest.length) return;
    const value = rest.join('=');
    try {
      jar.setCookieSync(`${name.trim()}=${value}`, BASE_URL);
    } catch (err) {
      console.warn('Failed to set cookie from env:', name.trim(), err.message);
    }
  });
}

function importCookiesFromFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    if (!raw.trim()) return;
    const data = JSON.parse(raw);
    if (Array.isArray(data)) {
      data.forEach((cookie) => {
        if (!cookie || !cookie.name || cookie.value === undefined) return;
        const domain = cookie.domain || '.work.weixin.qq.com';
        const pathValue = cookie.path || '/';
        try {
          jar.setCookieSync(`${cookie.name}=${cookie.value}; Domain=${domain}; Path=${pathValue}`, BASE_URL);
        } catch (err) {
          console.warn('Failed to set cookie from file:', cookie.name, err.message);
        }
      });
    } else if (typeof data === 'string') {
      importCookiesFromEnv(data);
    }
  } catch (error) {
    console.warn('Unable to parse cookie file', filePath, error.message);
  }
}

importCookiesFromEnv(process.env.WECOM_COOKIES || '');
importCookiesFromFile(COOKIE_FILE);

/**
 * 打开浏览器让用户登录，登录成功后自动保存 cookies
 * @param {string} targetUrl - 需要访问的目标页面 URL
 * @returns {Promise<boolean>} - 登录是否成功
 */
async function openBrowserForLogin(targetUrl = `${BASE_URL}/document/path/90664`) {
  console.log('\n🌐 正在打开浏览器进行登录...');
  console.log('请在浏览器中完成登录/验证，完成后页面会自动关闭。\n');

  const browser = await chromium.launch({
    headless: false,
    args: ['--start-maximized']
  });

  const context = await browser.newContext({
    viewport: null,
    userAgent: USER_AGENT
  });

  const page = await context.newPage();

  try {
    await page.goto(targetUrl, { waitUntil: 'networkidle', timeout: 60000 });

    // 等待用户完成登录/验证
    // 检测条件：页面上出现文档内容（表示已登录）或者 cookies 中包含关键登录凭证
    console.log('⏳ 等待登录/验证完成...');

    await page.waitForFunction(() => {
      // 检查是否有文档内容加载（登录成功的标志）
      const docContent = document.querySelector('.doc-content, .markdown-body, [class*="doc-"]');
      const loginForm = document.querySelector('[class*="login"], [class*="captcha"], [class*="verify"]');
      // 如果有文档内容且没有登录/验证表单，说明已登录
      return docContent && !loginForm;
    }, { timeout: 300000 }); // 5分钟超时

    console.log('✅ 检测到登录/验证成功！');

    // 获取所有 cookies
    const cookies = await context.cookies();
    const relevantCookies = cookies.filter(c =>
      c.domain.includes('work.weixin.qq.com') ||
      c.domain.includes('weixin.qq.com')
    );

    if (relevantCookies.length > 0) {
      // 保存 cookies 到文件
      await fs.writeJson(COOKIE_FILE, relevantCookies, { spaces: 2 });
      console.log(`💾 已保存 ${relevantCookies.length} 个 cookies 到 ${COOKIE_FILE}`);

      // 导入 cookies 到 axios jar
      relevantCookies.forEach((cookie) => {
        const domain = cookie.domain.startsWith('.') ? cookie.domain : `.${cookie.domain}`;
        try {
          jar.setCookieSync(
            `${cookie.name}=${cookie.value}; Domain=${domain}; Path=${cookie.path || '/'}`,
            BASE_URL
          );
        } catch (err) {
          // 忽略 cookie 设置错误
        }
      });

      console.log('🔄 已将 cookies 导入到请求客户端\n');
      return true;
    } else {
      console.warn('⚠️ 未获取到有效的 cookies');
      return false;
    }
  } catch (error) {
    if (error.name === 'TimeoutError') {
      console.error('❌ 登录超时（5分钟），请重试');
    } else {
      console.error('❌ 登录过程出错:', error.message);
    }
    return false;
  } finally {
    await browser.close();
  }
}

/**
 * 处理单个文档的抓取
 */
async function processDocument(node, filePath) {
  const doc = await fetchDocContent(node.doc_id);
  const rawHtml = doc.content_html_v2 || doc.content_html || '';
  const remoteUpdatedAt = (() => {
    const preferred = timestampToDate(doc.time);
    if (preferred) {
      return preferred;
    }
    const fromHtml = extractLastUpdatedFromHtml(rawHtml) ?? extractLastUpdatedFromHtml(doc.pageHtml);
    const candidates = [
      fromHtml,
      timestampToDate(doc.extra?.update_time),
      timestampToDate(doc.last_update_time),
      doc.last_update_time_str ? new Date(doc.last_update_time_str) : null
    ].filter(Boolean);
    if (candidates.length === 0) return null;
    return new Date(Math.max(...candidates.map(date => date.getTime())));
  })();
  const docPathId = node.category_id || doc.doc_id || node.doc_id;

  const fileExists = await fs.pathExists(filePath);
  let localUpdatedAt = null;
  if (!remoteUpdatedAt) {
    console.warn(`未在页面中找到最后更新时间：${node.title} —— ${BASE_URL}/document/path/${docPathId}`);
  }
  if (fileExists) {
    try {
      const localContent = await fs.readFile(filePath, 'utf8');
      localUpdatedAt = extractLastUpdatedFromMarkdown(localContent);
    } catch (readError) {
      console.warn(`无法读取本地文档 ${filePath}:`, readError.message);
    }
  }

  const remoteDateStr = remoteUpdatedAt ? formatDate(remoteUpdatedAt) : null;
  const localDateStr = localUpdatedAt ? formatDate(localUpdatedAt) : null;
  if (remoteDateStr && localDateStr && remoteDateStr === localDateStr) {
    return { status: 'skipped', remoteDateStr, localDateStr, docPathId };
  }

  const processedHtml = preprocessHtml(rawHtml);
  let markdownBody;
  if (doc.content_md && doc.content_md.trim()) {
    markdownBody = doc.content_md.trim();
  } else {
    markdownBody = postProcessMarkdown(converter.convert(processedHtml));
  }
  const frontMatter = buildFrontMatter({
    title: JSON.stringify(doc.title || node.title),
    doc_id: node.doc_id,
    category_id: node.category_id,
    source_url: `${BASE_URL}/document/path/${docPathId}`
  });
  let cleanedMarkdown = cleanupMarkdown(markdownBody);
  const effectiveUpdatedAt = remoteDateStr || localDateStr;
  cleanedMarkdown = injectLastUpdated(cleanedMarkdown, effectiveUpdatedAt);
  const finalContent = `${frontMatter}${cleanedMarkdown}\n`;
  await fs.outputFile(filePath, finalContent, 'utf8');

  return {
    status: fileExists ? 'updated' : 'created',
    remoteDateStr,
    localDateStr,
    docPathId
  };
}

async function fetchCategories() {
  const headers = {
    Referer: BASE_REFERER,
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  };
  const response = await axiosInstance.post('/docFetch/categories', {}, { headers });
  const data = response.data;
  if (data?.data?.categories) {
    return data.data.categories;
  }
  if (data?.categories) {
    return data.categories;
  }
  throw new Error('Unexpected categories response');
}

async function fetchDocContent(docId, attempt = 0) {
  const headers = {
    Referer: `${BASE_URL}/document/path/${docId}`,
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Requested-With': 'XMLHttpRequest'
  };
  const body = new URLSearchParams({ doc_id: String(docId) }).toString();
  try {
    let pageHtml = '';
    if (attempt === 0) {
      const pageResponse = await axiosInstance.get(`/document/path/${docId}`, { headers: { Referer: BASE_REFERER } });
      pageHtml = pageResponse?.data ?? '';
      await delay(500);
    }
    const response = await axiosInstance.post('/docFetch/fetchCnt', body, { headers });
    const payload = response.data;
    if (payload?.data) {
      return {
        ...payload.data,
        pageHtml
      };
    }
    if (payload?.result?.errCode === 500003) {
      throw new Error(`Doc ${docId} fetch error: 500003 人机验证`);
    }
    if (payload?.result?.errCode) {
      throw new Error(`Doc ${docId} fetch error: ${payload.result.errCode} ${payload.result.humanMessage || ''}`);
    }
    if (typeof payload === 'string' && payload.includes('showDeveloperCaptcha')) {
      throw new Error(`Doc ${docId} fetch error: 500003 人机验证`);
    }
    return payload;
  } catch (error) {
    const status = error?.response?.status;
    const message = error?.message || '';
    if ((status === 429 || message.includes('429')) && attempt < 5) {
      const waitMs = 1500 * (attempt + 1);
      console.warn(`429 rate limit for doc ${docId}, retrying after ${waitMs}ms (attempt ${attempt + 1})`);
      await delay(waitMs);
      return fetchDocContent(docId, attempt + 1);
    }
    throw error;
  }
}


function preprocessHtml(rawHtml) {
  const $ = load(rawHtml || '', { decodeEntities: false });

  const root = $('body').length ? $('body') : $.root();
  root.find('script, style').remove();
  $('pre').each((_, el) => {
    const $el = $(el);
    const $code = $el.children('code').first();
    let codeText = '';
    let language = '';
    if ($code.length) {
      const classAttr = $code.attr('class') || '';
      const langMatch = classAttr.match(/language-([\w+-]+)/i) || classAttr.match(/lang-([\w+-]+)/i);
      if (langMatch) {
        language = langMatch[1];
      }
      codeText = $code.html() ?? $code.text();
    } else {
      codeText = $el.html() ?? $el.text();
    }
    const textWithLineBreaks = (codeText || '')
      .replace(/<br\s*\/?\s*>/gi, '\n')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&');
    const decoded = decode(textWithLineBreaks);
    const normalized = decoded.replace(/\r\n/g, '\n').replace(/\u00a0/g, ' ');
    const content = normalized.replace(/\n{3,}/g, '\n\n').trimEnd();
    const langLabel = (language || '').trim();
    const fenceHeader = langLabel ? `\`\`\`${langLabel}` : '```';
    const fence = `
${fenceHeader}
${content}
\`\`\`
`;

    $el.replaceWith(fence);
  });

  $('code').each((_, el) => {
    const $el = $(el);
    if ($el.parent().is('pre')) {
      return;
    }
    const text = decode($el.text());
    const escaped = text.replace(/`/g, '\`');
    $el.replaceWith('`' + escaped + '`');
  });

  $('img').each((_, el) => {
    const $el = $(el);
    const src = ($el.attr('src') || '').trim();
    const alt = decode($el.attr('alt') || '');
    const title = decode($el.attr('title') || '');
    if (!src) {
      $el.replaceWith(alt);
      return;
    }
    const titlePart = title ? ` "${escapeMarkdown(title)}"` : '';
    $el.replaceWith(`![${escapeMarkdown(alt)}](${src}${titlePart})`);
  });

  $('br').each((_, el) => {
    $(el).replaceWith('\n');
  });

  $('hr').each((_, el) => {
    $(el).replaceWith('\n\n---\n\n');
  });

  root.find('*').each((_, element) => {
    const $elem = $(element);
    const allowed = new Set(['href', 'src', 'alt', 'title']);
    if (element.attribs) {
      for (const attr of Object.keys(element.attribs)) {
        if (!allowed.has(attr)) {
          $elem.removeAttr(attr);
        }
      }
    }
  });

  return root.html() || rawHtml || '';

}

function escapeMarkdown(text) {
  if (!text) return '';
  return text.replace(/([\\`*_{}\[\]()#+\-.!])/g, '\\$1');
}





function postProcessMarkdown(markdown) {
  let output = markdown;
  output = output.replace(/<a\s+([^>]*?)>([\s\S]*?)<\/a>/gi, (_, attrs, inner) => {
    const hrefMatch = attrs.match(/href\s*=\s*"([^"]+)"/i) || attrs.match(/href\s*=\s*'([^']+)'/i);
    const href = hrefMatch ? hrefMatch[1] : '';
    if (!href) {
      return inner;
    }
    const titleMatch = attrs.match(/title\s*=\s*"([^"]+)"/i) || attrs.match(/title\s*=\s*'([^']+)'/i);
    const title = titleMatch ? titleMatch[1] : '';
    const cleanedInner = inner.replace(/<[^>]+>/g, '');
    const decodedInner = decode(cleanedInner).trim() || href;
    const escapedInner = decodedInner.replace(/\]/g, '\\]');
    const titlePart = title ? ` "${escapeMarkdown(title)}"` : '';
    return `[${escapedInner}](${href}${titlePart})`;
  });
  output = output.replace(/&nbsp;/gi, ' ');
  output = output.replace(/\r\n/g, '\n');
  output = output.replace(/\n{3,}/g, '\n\n');
  return output.trim();
}

function cleanupMarkdown(markdown) {
  return markdown
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<p>\s*<\/p>/gi, '')
    .replace(/<\/?(div|span)[^>]*>/gi, '')
    .replace(/<img\s+[^>]*alt="([^"]*)"[^>]*src="([^"]+)"[^>]*>/gi, '![$1]($2)')
    .replace(/<img\s+[^>]*src="([^"]+)"[^>]*>/gi, '![]($1)')
    .replace(/\s*!\[/g, '\n![')
    .replace(/^!\[/gm, '- ![')
    .replace(/ {2,}/g, ' ')
    .replace(/\t/g, '  ')
    .replace(/\u3000/g, ' ')
    .replace(/\r\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function buildFrontMatter(metadata) {
  const lines = ['---'];
  for (const [key, value] of Object.entries(metadata)) {
    if (value === undefined || value === null || value === '') continue;
    lines.push(`${key}: ${value}`);
  }
  lines.push('---\n');
  return lines.join('\n');
}

function sortChildren(children) {
  return [...children].sort((a, b) => {
    const orderDelta = (a.order_id || 0) - (b.order_id || 0);
    if (orderDelta !== 0) return orderDelta;
    return a.title.localeCompare(b.title, 'zh-Hans-CN');
  });
}

function slugify(title) {
  const sanitized = sanitize(title.replace(/\//g, ' '));
  const collapsed = sanitized.replace(/\s+/g, '-');
  const ascii = collapsed.normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
  const trimmed = ascii.replace(/[^a-zA-Z0-9\-_.\u4e00-\u9fa5]/g, '');
  return trimmed || 'document';
}

function buildTree(categories) {
  const nodes = new Map();
  categories.forEach((item) => {
    nodes.set(item.category_id, { ...item, children: [] });
  });
  const roots = [];
  categories.forEach((item) => {
    if (item.parent_id === 0) {
      roots.push(nodes.get(item.category_id));
    } else {
      const parent = nodes.get(item.parent_id);
      if (parent) {
        parent.children.push(nodes.get(item.category_id));
      }
    }
  });
  const prune = (list) => {
    return sortChildren(
      list.filter((node) => node.status === 2)
    ).map((node) => ({ ...node, children: prune(node.children || []) }));
  };
  return prune(roots);
}

async function main() {
  console.log('Fetching category tree...');
  const categories = await fetchCategories();
  const tree = buildTree(categories);
  await fs.ensureDir(ROOT_OUTPUT);
  console.log('Generating output structure...');
  const docTasks = [];

  function walk(nodes, parentPath, depth = 0) {
    const seen = new Set();
    nodes.forEach((node, index) => {
      const orderPrefix = String(index + 1).padStart(3, '0');
      const baseSlug = slugify(node.title);
      let entryName = `${orderPrefix}-${baseSlug}`;
      if (seen.has(entryName)) {
        entryName = `${entryName}-${node.category_id}`;
      }
      seen.add(entryName);
      if (node.type === 0 || (node.doc_id === 0 && node.children?.length)) {
        const dirPath = path.join(parentPath, entryName);
        fs.ensureDirSync(dirPath);
        walk(node.children || [], dirPath, depth + 1);
      } else if (node.doc_id) {
        const filePath = path.join(parentPath, `${entryName}.md`);
        docTasks.push({ node, filePath });
      }
    });
  }

  walk(tree, ROOT_OUTPUT);

  const totalDocs = docTasks.length;
  const startOffset = Math.min(Math.max(DOC_START, 0), totalDocs);
  const endOffset = DOC_LIMIT ? Math.min(startOffset + DOC_LIMIT, totalDocs) : totalDocs;
  const tasksToProcess = docTasks.slice(startOffset, endOffset);
  if (DOC_LIMIT && DOC_START) {
    console.log(
      `Processing subset ${startOffset + 1}-${endOffset} of ${totalDocs} docs (use --start/--limit to adjust).`
    );
  } else if (DOC_LIMIT) {
    console.log(
      `Processing limited subset ${endOffset}/${totalDocs} docs (use --limit to adjust).`
    );
  } else if (DOC_START) {
    console.log(
      `Processing docs ${startOffset + 1}-${endOffset} of ${totalDocs} (use --start to adjust).`
    );
  }

  // 用于存储需要重试的文档（因 500003 人机验证失败）
  const failedTasks = new Map(); // doc_id -> { node, filePath }
  let processedCount = 0;
  let createdCount = 0;
  let updatedCount = 0;
  let skippedCount = 0;

  /**
   * 处理文档列表
   */
  async function processTasks(tasks, isRetry = false) {
    const queue = new PQueue({ concurrency: 1, intervalCap: 1, interval: 1200 });
    const totalTasks = tasks.length;
    let localProcessed = 0;

    await queue.addAll(
      tasks.map(({ node, filePath }) => async () => {
        try {
          const result = await processDocument(node, filePath);
          const docLink = `${BASE_URL}/document/path/${result.docPathId}`;

          if (result.status === 'skipped') {
            skippedCount += 1;
            console.log(`跳过：${node.title} —— 远端 ${result.remoteDateStr} ，本地 ${result.localDateStr} —— ${docLink}`);
          } else if (result.status === 'updated') {
            updatedCount += 1;
            const msgParts = [`更新：${node.title}`];
            if (result.remoteDateStr) msgParts.push(`远端 ${result.remoteDateStr}`);
            if (result.localDateStr) msgParts.push(`原有 ${result.localDateStr}`);
            msgParts.push(docLink);
            console.log(msgParts.join(' —— '));
          } else if (result.status === 'created') {
            createdCount += 1;
            const msgParts = [`新增：${node.title}`];
            if (result.remoteDateStr) msgParts.push(`远端 ${result.remoteDateStr}`);
            msgParts.push(docLink);
            console.log(msgParts.join(' —— '));
          }

          // 如果是重试成功，从失败列表中移除
          if (isRetry && failedTasks.has(node.doc_id)) {
            failedTasks.delete(node.doc_id);
          }
        } catch (error) {
          const message = error?.message || '';
          if (message.includes('500003') || message.includes('人机验证')) {
            if (!isRetry) {
              failedTasks.set(node.doc_id, { node, filePath });
            }
            console.error(`❌ 人机验证失败：${node.title} (doc_id: ${node.doc_id})`);
          } else {
            console.error(`Failed to process doc ${node.doc_id} (${node.title}):`, message);
          }
        } finally {
          processedCount += 1;
          localProcessed += 1;
          if (localProcessed % 50 === 0 || localProcessed === totalTasks) {
            console.log(`Processed ${localProcessed}/${totalTasks}${isRetry ? ' (重试)' : ''}`);
          }
        }
      })
    );
  }

  // 第一轮：处理所有文档
  console.log('\n📚 开始抓取文档...\n');
  await processTasks(tasksToProcess);

  // 如果有 500003 失败的文档，提示用户登录并重试
  if (failedTasks.size > 0) {
    console.log(`\n⚠️ 有 ${failedTasks.size} 个文档因人机验证失败，需要登录后重试。`);

    // 获取第一个失败文档的 URL 用于登录
    const firstFailed = failedTasks.values().next().value;
    const loginUrl = `${BASE_URL}/document/path/${firstFailed.node.category_id || firstFailed.node.doc_id}`;

    const loginSuccess = await openBrowserForLogin(loginUrl);

    if (loginSuccess) {
      console.log(`\n🔄 开始重试 ${failedTasks.size} 个失败的文档...\n`);
      const retryTasks = Array.from(failedTasks.values());
      processedCount = 0; // 重置计数器用于重试统计
      await processTasks(retryTasks, true);

      if (failedTasks.size > 0) {
        console.warn(`\n⚠️ 仍有 ${failedTasks.size} 个文档抓取失败：`);
        for (const { node } of failedTasks.values()) {
          console.warn(`  - ${node.title} (${BASE_URL}/document/path/${node.category_id || node.doc_id})`);
        }
      }
    } else {
      console.warn('\n❌ 登录失败或取消，跳过重试。');
      console.warn('您可以稍后使用以下命令单独重试失败的文档：');
      console.warn('  npm run scrape:wecom');
    }
  }

  console.log(
    `\n✅ 抓取完成！新增 ${createdCount}，更新 ${updatedCount}，跳过 ${skippedCount}，失败 ${failedTasks.size}。`
  );
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}
