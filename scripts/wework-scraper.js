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

const ROOT_OUTPUT = path.resolve('wework');
const BASE_REFERER = 'https://developer.work.weixin.qq.com/document/path/90664';
const BASE_URL = 'https://developer.work.weixin.qq.com';
const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36';

const args = process.argv.slice(2);
const limitIndex = args.indexOf('--limit');
const limitValue = limitIndex >= 0 ? Number(args[limitIndex + 1]) : Number.NaN;
const DOC_LIMIT = Number.isFinite(limitValue) && limitValue > 0 ? Math.floor(limitValue) : null;

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

const COOKIE_FILE = path.resolve('.wework_cookies.json');

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

importCookiesFromEnv(process.env.WEWORK_COOKIES || '');
importCookiesFromFile(COOKIE_FILE);

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
    if (attempt === 0) {
      await axiosInstance.get(`/document/path/${docId}`, { headers: { Referer: BASE_REFERER } });
      await delay(500);
    }
    const response = await axiosInstance.post('/docFetch/fetchCnt', body, { headers });
    const payload = response.data;
    if (payload?.data) {
      return payload.data;
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
  await fs.emptyDir(ROOT_OUTPUT);
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

  const tasksToProcess = DOC_LIMIT ? docTasks.slice(0, DOC_LIMIT) : docTasks;
  if (DOC_LIMIT && docTasks.length > DOC_LIMIT) {
    console.log(`Processing limited subset ${DOC_LIMIT}/${docTasks.length} docs (use --limit to adjust).`);
  }
  const queue = new PQueue({ concurrency: 1, intervalCap: 1, interval: 1200 });
  let completed = 0;
  const humanCheckDocs = new Set();

  await queue.addAll(
    tasksToProcess.map(({ node, filePath }) => async () => {
      try {
        const doc = await fetchDocContent(node.doc_id);
        const rawHtml = doc.content_html_v2 || doc.content_html || '';
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
          source_url: `${BASE_URL}/document/path/${node.doc_id}`
        });
        const cleanedMarkdown = cleanupMarkdown(markdownBody);
        const finalContent = `${frontMatter}${cleanedMarkdown}
`;
        await fs.outputFile(filePath, finalContent, 'utf8');
        completed += 1;
        if (completed % 50 === 0 || completed === tasksToProcess.length) {
          console.log(`Converted ${completed}/${tasksToProcess.length}`);
        }
      } catch (error) {
        const message = error?.message || '';
        if (message.includes('500003') || message.includes('人机验证')) {
          humanCheckDocs.add(node.doc_id);
        }
        console.error(`Failed to process doc ${node.doc_id} (${node.title}):`, message);
      }
    })
  );

  console.log('Conversion complete. Total docs:', completed);
  if (humanCheckDocs.size > 0) {
    console.warn(`
需要人工完成验证码的人机验证文档数量：${humanCheckDocs.size}`);
    console.warn('请在浏览器中访问任意失败的文档链接完成验证码，然后复制最新的 Cookies。');
    console.warn('将 Cookies 写入 .wework_cookies.json (数组或字符串) 或设置 WEWORK_COOKIES 环境变量后重新运行脚本。');
    console.warn('例如:');
    console.warn('  WEWORK_COOKIES="wwrtx.sid=...; wwrtx.sid2=...; wwrtx.ltype=..." npm run scrape:wework');
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}
