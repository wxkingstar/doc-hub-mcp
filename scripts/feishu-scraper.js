#!/usr/bin/env node
import axios from 'axios';
import fs from 'fs-extra';
import path from 'path';
import PQueue from 'p-queue';
import sanitize from 'sanitize-filename';

const OUTPUT_ROOT = path.resolve('feishu');
const USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36';

const ROOT_CONFIGS = [
  { fullPath: '/uAjLw4CM/ukzMukzMukzM', title: '开发指南', dir: '001-开发指南' },
  { fullPath: '/uAjLw4CM/uMzNwEjLzcDMx4yM3ATM', title: '开发教程', dir: '002-开发教程' },
  { fullPath: '/uAjLw4CM/ukTMukTMukTM', title: '服务端 API', dir: '003-服务端API' },
  { fullPath: '/uAjLw4CM/uYjL24iN', title: '客户端 API', dir: '004-客户端API' },
  { fullPath: '/mcp_open_tools', title: 'MCP', dir: '005-MCP' }
];

const DIRECTORY_URL = 'https://open.feishu.cn/api/tools/docment/directory_list';
const URI_MAP_URL = 'https://open.feishu.cn/document_portal/v1/document_portal/v1/document/uri/mapping?lang=zh-CN';
const DOCUMENT_DETAIL_URL = 'https://open.feishu.cn/api/tools/document/detail';

const args = process.argv.slice(2);

function readNumericOption(name, defaultValue = null) {
  const dashed = `--${name}`;
  const eqArg = args.find((value) => value.startsWith(`${dashed}=`));
  if (eqArg) {
    const parsed = Number(eqArg.split('=')[1]);
    if (Number.isFinite(parsed) && parsed > 0) return Math.floor(parsed);
  }
  const spacedIndex = args.indexOf(dashed);
  if (spacedIndex >= 0 && args[spacedIndex + 1] !== undefined) {
    const parsed = Number(args[spacedIndex + 1]);
    if (Number.isFinite(parsed) && parsed > 0) return Math.floor(parsed);
  }
  const npmValue = Number(process.env[`npm_config_${name}`]);
  if (Number.isFinite(npmValue) && npmValue > 0) {
    return Math.floor(npmValue);
  }
  return defaultValue;
}

const MAX_DOCS = readNumericOption('limit');
const concurrencyRaw = readNumericOption('concurrency');
const CONCURRENCY = concurrencyRaw ? Math.min(concurrencyRaw, 16) : 6;

const axiosInstance = axios.create({
  headers: {
    'User-Agent': USER_AGENT,
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9'
  },
  timeout: 20000
});

const RETRY_LIMIT = 3;
const RETRY_DELAY_MS = 1200;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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
  return `${year}-${month}-${day}`;
}

function extractUpdatedDateFromMarkdown(markdown) {
  if (!markdown) return null;
  const updateLineMatch = markdown.match(/^最后更新于\s+(\d{4})[-/](\d{1,2})[-/](\d{1,2})/m);
  if (updateLineMatch) {
    const [_, y, m, d] = updateLineMatch;
    const year = Number(y);
    const month = Number(m);
    const day = Number(d);
    if ([year, month, day].every(Number.isFinite)) {
      const date = new Date(Date.UTC(year, month - 1, day));
      if (!Number.isNaN(date.getTime())) {
        return date;
      }
    }
  }
  const metaMatch = markdown.match(/updatedAt:\s*(\d{10,})/);
  if (metaMatch) {
    const fromTimestamp = timestampToDate(Number(metaMatch[1]));
    if (fromTimestamp) return fromTimestamp;
  }
  return null;
}

const DOC_BASE_URL = 'https://open.feishu.cn/document';

const PRIMARY_TRANSFORMERS = [
  (input) => input.replace(/<strong>([\s\S]+?)<\/strong>/g, '**$1**'),
  (input) => input.replace(/<a[\s\S]+?href="([^"]+)">([\s\S]+?)<\/a>/g, (_m, href, text) => `[${text}](${href})`),
  (input) => input.replace(/<md-text[^>]*>([\s\S]+?)<\/md-text>/g, '$1'),
  (input) => input.replace(/<md-enum-item[\s]*([\S\s]*?)[\s]*>([\s\S]+?)<\/md-enum-item>/g, (_m, attrs, text) => {
    const keyMatch = attrs ? attrs.match(/key="([^"]+)"/) : null;
    const key = keyMatch ? keyMatch[1] : '';
    return key ? `- ${key}：${text}` : `- ${text}`;
  }),
  (input) => input.replace(/<md-enum[\s\S]*?>([\s\S]+?)<\/md-enum>/g, '$1'),
  (input) => input.replace(/<md-version[^>]*>([\s\S]+?)<\/md-version>/g, '$1'),
  (input) => input.replace(/<md-tooltip[\s\S]*?>([\s\S]+?)<\/md-tooltip>/g, '**$1**'),
  (input) => input.replace(/<div[\s\S]+?>([\s\S]+?)<\/div>/g, '$1\n'),
  (input) => input.replace(/<b>([\s\S]+?)<\/b>/g, '**$1**'),
  (input) => input.replace(/<span[^>]*>([\s\S]+?)<\/span>/g, '$1'),
  (input) => input.replace(/<\/br>/g, '\n'),
  (input) => input.replace(/<font[\s\S]*?>([\s\S]+?)<\/font>/g, '$1'),
  (input) => input.replace(/<p[^>]*>([\s\S]+?)<\/p>/g, '$1\n'),
  (input) => input.replace(/<md-perm[^>]*>([\s\S]+?)<\/md-perm>/g, (match, inner) => {
    const nameMatch = match.match(/name="([^"]+)"/);
    return nameMatch ? `${inner}(${nameMatch[1]})` : inner;
  }),
  (input, locale) => input.replace(/<md-app-support[^>]*>[\s\S]*?<\/md-app-support>/g, (match) => {
    const parts = [];
    const isZh = locale.startsWith('zh');
    if (match.includes('custom')) {
      parts.push(isZh ? '自建应用' : 'Custom App');
    }
    if (match.includes('isv')) {
      parts.push(isZh ? '商店应用' : 'Store App');
    }
    return parts.join('、');
  }),
  (input) => input.replace(/<md-tag[^>]*>([\s\S]*?)<\/md-tag>/g, (match, text) => {
    const hrefMatch = match.match(/href="([^"]+)"/);
    return hrefMatch ? `[${text}](${hrefMatch[1]})` : `\`${text}\``;
  }),
  (input) => input.split('\n').map((line) => line.replace(/^[\s\r\t]+$/, '')).join('\n'),
  (input) => input.replace(/<\/md-enum-item>/g, ''),
  (input) => input.replace(/<\/md-alert>/g, ''),
  (input) => input.replace(/<\/md-code.*?>/g, ''),
  (input) => input.replace(/<md-code.*?>/g, ''),
  (input) => input.replace(/<md-td.*?>/g, ''),
  (input) => input.replace(/<\/md-td>/g, '')
];

const TABLE_OUTER_PATTERNS = [
  /<md-table[\s\S]*?>/g,
  /<\/md-table>/g,
  /<table[\s\S]*?>/g,
  /<\/table>/g,
  /<md-dt-table[\s\S]*?>/g,
  /<\/md-dt-table>/g,
  /<thead[\s\S]*?>/g,
  /<\/thead>/g,
  /<md-thead[\s\S]*?>/g,
  /<\/md-thead>/g,
  /<md-dt-thead[\s\S]*?>/g,
  /<\/md-dt-thead>/g,
  /<tbody[\s\S]*?>/g,
  /<\/tbody>/g,
  /<md-tbody[\s\S]*?>/g,
  /<\/md-tbody>/g,
  /<md-dt-tbody[\s\S]*?>/g,
  /<\/md-dt-tbody>/g,
  /<colgroup[\s\S]*?>[\s\S]+?<\/colgroup>/g
];

const TABLE_ROW_PATTERNS = [
  /<tr[\s\S]*?>/g,
  /<md-tr[\s\S]*?>/g,
  /<md-dt-tr[\s\S]*?>/g
];

const TABLE_CELL_PATTERNS = [
  /<td[\s\S]*?>/g,
  /<md-td[\s\S]*?>/g,
  /<md-dt-td[\s\S]*?>/g,
  /<md-th[\s\S]*?>/g,
  /<th[\s\S]*?>/g,
  /<md-dt-th[\s\S]*?>/g
];

const SECONDARY_TRANSFORMERS = [
  (input) => input.replace(/\n?<!--.*?-->/g, ''),
  (input) => input.replace(/\n\s*:::\s*note?/g, ''),
  (input) => input.replace(/\n\s*:::\s*html/g, '').replace(/\n\s*:::/g, ''),
  (input) => input.replace(/<md-video[^>]*>[\s\S]+?<\/md-video>/g, ''),
  (input) => input.replace(/<img[^>]*>/g, ''),
  (input, locale) => input.replace(/<md-alert[\s\S]+?>([\s\S]*?)<\/md-alert>/g, (_match, inner) => {
    const text = inner.trim();
    if (!text) return text;
    const label = locale.startsWith('zh') ? '注意事项' : 'Notice';
    return `**${label}**：${text}`;
  }),
  (input) => input.replace(/<md-code-json[^>]*>([\s\S]*?)<\/md-code-json>/g, (_m, inner) => `\`\`\`json\n${inner.trim()}\n\`\`\`\n`),
  (input) => input.replace(/<md-block-api[^>]*>([\s\S]*?)<\/md-block-api>/g, (_m, inner) => `\`\`\`json\n${inner.trim()}\n\`\`\`\n`),
  (input) => input.replace(/\{(尝试一下|使用示例|Try it)\}\(url=\/api\/tools\/api_explore\/api_explore_config\?.*?\)/g, ''),
  (input) => input.replace(/<md-preview-app[\s\S]*?>([\s\S]+?)<\/md-preview-app>/g, (match, inner) => {
    const appIdMatch = match.match(/appId="([^"]+)"/);
    const pathMatch = match.match(/path="([^"]+)"/);
    const typeMatch = match.match(/type="([^"]+)"/);
    if (!appIdMatch || !pathMatch || !typeMatch) return inner;
    const appId = appIdMatch[1];
    const path = encodeURIComponent(pathMatch[1]);
    if (typeMatch[1] === 'webApp') {
      return `[${inner}](https://applink.feishu.cn/client/web_app/open?appId=${appId}&path=${path})`;
    }
    return `[${inner}](https://applink.feishu.cn/client/mini_program/open?appId=${appId}&path=${path})`;
  }),
  (input, locale) => input.replace(/<md-table[\s\S]*?>([\s\S]+?)<\/md-table>|<table[\s\S]*?>([\s\S]+?)<\/table>|<md-dt-table[\s\S]*?>([\s\S]+?)<\/md-dt-table>/g, (match) => convertMdTable(match, locale)),
  (input, locale) => input.replace(/<md-table[\s\S]*?>[\s\S]+|<table[\s\S]*?>[\s\S]+|<md-dt-table[\s\S]*?>[\s\S]+/g, (match) => convertMdTable(match, locale))
];

function applyTransformers(transformers, input, locale) {
  return transformers.reduce((acc, fn) => fn(acc, locale), input);
}

function convertMdTable(html, locale) {
  let content = html;
  for (const pattern of TABLE_OUTER_PATTERNS) {
    content = content.replace(pattern, '');
  }
  const rawRows = content
    .split(/<\/tr>\s*|<\/md-tr>\s*|<\/md-dt-tr>\s*/i)
    .map((row) => row.trim())
    .filter(Boolean);
  const rows = rawRows.map((row) => {
    let cleanedRow = row;
    for (const pattern of TABLE_ROW_PATTERNS) {
      cleanedRow = cleanedRow.replace(pattern, '');
    }
    const rawCells = cleanedRow
      .split(/<\/md-td>\s*|<\/td>\s*|<\/md-dt-td>\s*|<\/md-th>\s*|<\/th>\s*|<\/md-dt-th>\s*/i)
      .map((cell) => cell.trim())
      .filter(Boolean);
    const processedCells = rawCells.map((cell) => {
      let text = cell;
      for (const pattern of TABLE_CELL_PATTERNS) {
        text = text.replace(pattern, '');
      }
      text = applyTransformers(PRIMARY_TRANSFORMERS, text, locale);
      text = text.replace(/<br\s*\/?>/gi, '\n');
      text = text.replace(/^[\s\n]+/g, '').replace(/[\s\n]+$/g, '');
      text = text.replace(/\n{2,}/g, '\n');
      return text.replace(/\n/g, '<br>');
    });
    if (!processedCells.length) {
      return '';
    }
    if (processedCells.length === 1) {
      return processedCells[0];
    }
    return processedCells;
  }).filter((row) => row !== '');

  if (!rows.length) {
    return '';
  }

  const lines = [];
  const firstRow = rows[0];
  if (Array.isArray(firstRow)) {
    const header = firstRow.map((cell) => cell.replace(/<br>/g, '<br>'));
    const headerLine = header.join(' | ').replace(/<br>/g, '<br>');
    const separator = header.map(() => '---').join(' | ');
    lines.push(headerLine);
    lines.push(separator);
    for (let i = 1; i < rows.length; i += 1) {
      const row = rows[i];
      if (Array.isArray(row)) {
        lines.push(row.map((cell) => cell.replace(/<br>/g, '<br>')).join(' | ').replace(/<br>/g, '<br>'));
      } else {
        lines.push(String(row).replace(/<br>/g, '<br>'));
      }
    }
  } else {
    rows.forEach((row) => {
      lines.push(Array.isArray(row) ? row.join(' | ') : String(row));
    });
  }

  const markdownTable = `\n\n${lines.join('\n').replace(/<br>/g, '  \n')}\n\n`;
  return markdownTable;
}

function transformContent(raw, locale) {
  if (!raw) return '';
  let result = raw.replace(/\/ssl:ttdoc/g, `${DOC_BASE_URL}`);
  result = applyTransformers(SECONDARY_TRANSFORMERS, result, locale);
  result = applyTransformers(PRIMARY_TRANSFORMERS, result, locale);
  result = result.replace(/\n\s*\n[\s]+/g, '\n\n');
  result = result.replace(/(!?\[[^\]]*\]\()\/\//g, '$1https://');
  result = result.replace(/^\s*基本\s*\|\s*\r?\n\s*---\s*\|\s*---(\r?\n?)/gm, (_match, newline) => `名称 | 值\n---|---${newline || ''}`);
  return result.trim();
}

function detectLocale(fullPath, aliasPath, docName) {
  if (docName && /[\u4e00-\u9fff]/.test(docName)) {
    return 'zh';
  }
  const candidates = [fullPath, aliasPath].filter(Boolean).map((item) => item.toLowerCase()).join(' ');
  if (candidates.includes('zh')) return 'zh';
  if (candidates.includes('en')) return 'en';
  return 'en';
}

async function fetchDirectoryTree() {
  const response = await axiosInstance.get(DIRECTORY_URL);
  if (!response.data || response.data.code !== 0) {
    throw new Error(`目录接口返回异常: ${JSON.stringify(response.data)}`);
  }
  return response.data.data?.items || [];
}

async function fetchUriMap() {
  const response = await axiosInstance.get(URI_MAP_URL);
  if (!response.data || response.data.code !== 0) {
    throw new Error(`URI 映射接口返回异常: ${JSON.stringify(response.data)}`);
  }
  const map = new Map();
  const uriMap = response.data.data?.uriMap || {};
  for (const [source, alias] of Object.entries(uriMap)) {
    if (typeof source === 'string' && typeof alias === 'string') {
      map.set(source, alias);
    }
  }
  return map;
}

function indexTree(nodes, parentId = null, mapById = new Map(), mapByFullPath = new Map(), parents = new Map()) {
  for (const node of nodes) {
    if (!node || !node.id) continue;
    mapById.set(node.id, node);
    if (node.fullPath) {
      mapByFullPath.set(node.fullPath, node);
    }
    if (parentId) {
      parents.set(node.id, parentId);
    }
    if (Array.isArray(node.items) && node.items.length > 0) {
      indexTree(node.items, node.id, mapById, mapByFullPath, parents);
    }
  }
  return { mapById, mapByFullPath, parents };
}

function createSegment(raw, fallback) {
  const trimmed = (raw || '').trim();
  let segment = trimmed ? trimmed.replace(/[\\/:"*?<>|]+/g, '-').replace(/\s+/g, '-') : '';
  segment = sanitize(segment);
  if (!segment && fallback) {
    segment = sanitize(String(fallback).replace(/[\\/:"*?<>|]+/g, '-').replace(/\s+/g, '-'));
  }
  if (!segment) {
    segment = Math.random().toString(36).slice(2, 10);
  }
  return segment;
}

function getNodeSegment(node) {
  const nameSegment = createSegment(node.name || '', node.id);
  if (nameSegment) {
    return nameSegment;
  }
  const fullPath = typeof node.fullPath === 'string' ? node.fullPath : '';
  const parts = fullPath.split('/').filter(Boolean);
  const candidate = parts.length ? parts[parts.length - 1] : '';
  return createSegment(candidate, node.id);
}

function getDocumentUrl(fullPath, aliasMap) {
  const mapped = aliasMap.get(fullPath);
  const pathPart = mapped || fullPath;
  return `https://open.feishu.cn/document${pathPart.startsWith('/') ? pathPart : `/${pathPart}`}`;
}

async function fetchMarkdown(fullPath, attempt = 1) {
  try {
    const response = await axiosInstance.get(DOCUMENT_DETAIL_URL, {
      params: { fullPath }
    });
    if (!response.data || response.data.code !== 0) {
      throw new Error(`文档接口返回异常: ${JSON.stringify(response.data)}`);
    }
    const doc = response.data.data?.document;
    if (!doc || !doc.content) {
      throw new Error(`未获取到 Markdown 内容: ${fullPath}`);
    }
    return doc;
  } catch (error) {
    const status = error?.response?.status;
    const retriable = !status || status >= 500 || status === 429;
    if (attempt < RETRY_LIMIT && retriable) {
      await delay(RETRY_DELAY_MS * attempt);
      return fetchMarkdown(fullPath, attempt + 1);
    }
    throw error;
  }
}

async function main() {
  console.log('正在拉取目录与映射信息...');
  const [tree, aliasMap] = await Promise.all([
    fetchDirectoryTree(),
    fetchUriMap()
  ]);

  const { mapByFullPath } = indexTree(tree);

  await fs.ensureDir(OUTPUT_ROOT);

  const queue = new PQueue({ concurrency: CONCURRENCY, intervalCap: 12, interval: 1000 });
  let processedDocs = 0;
  const failures = [];
  let createdCount = 0;
  let updatedCount = 0;
  let skippedCount = 0;

  for (const rootConfig of ROOT_CONFIGS) {
    const rootNode = mapByFullPath.get(rootConfig.fullPath);
    if (!rootNode) {
      console.warn(`未找到根节点: ${rootConfig.title} (${rootConfig.fullPath})，跳过。`);
      continue;
    }

    const baseDir = path.join(OUTPUT_ROOT, rootConfig.dir);
    await fs.emptyDir(baseDir);
    console.log(`开始处理【${rootConfig.title}】，输出目录：${baseDir}`);

    const usedSegments = new Map();

    const processChildren = async (children, parentSegments = []) => {
      if (MAX_DOCS && processedDocs >= MAX_DOCS) {
        return;
      }
      for (const child of children || []) {
        if (MAX_DOCS && processedDocs >= MAX_DOCS) {
          return;
        }
        if (!child) continue;
        const segment = getNodeSegment(child);
        const parentKey = parentSegments.join('/') || '__root__';
        if (!usedSegments.has(parentKey)) {
          usedSegments.set(parentKey, new Map());
        }
        const siblingMap = usedSegments.get(parentKey);
        let uniqueSegment = segment;
        let counter = 1;
        while (siblingMap.has(uniqueSegment) && siblingMap.get(uniqueSegment) !== child.id) {
          uniqueSegment = `${segment}-${counter++}`;
        }
        siblingMap.set(uniqueSegment, child.id);

        if (child.type === 'DirectoryType') {
          const nextSegments = [...parentSegments, uniqueSegment];
          const dirPath = path.join(baseDir, ...nextSegments);
          await fs.ensureDir(dirPath);
          await processChildren(child.items || [], nextSegments);
        } else if (child.type === 'DocumentType') {
          if (MAX_DOCS && processedDocs >= MAX_DOCS) {
            return;
          }
          const fileSegments = [...parentSegments];
          const fileName = `${uniqueSegment || child.id}.md`;
          const filePath = path.join(baseDir, ...fileSegments, fileName);
          const sourcePath = child.fullPath;
          const title = child.name || '';
          const url = getDocumentUrl(sourcePath, aliasMap);
          queue.add(async () => {
            try {
              const doc = await fetchMarkdown(sourcePath);
              const remoteDate = doc.updateTime ? timestampToDate(doc.updateTime) : null;
              const remoteDateStr = remoteDate ? formatDate(remoteDate) : '';
              const aliasPath = aliasMap.get(sourcePath) || '';
              const locale = detectLocale(sourcePath, aliasPath, title);
              const fileExists = await fs.pathExists(filePath);
              let localDate = null;
              let localContent = '';
              if (fileExists) {
                try {
                  localContent = await fs.readFile(filePath, 'utf8');
                  localDate = extractUpdatedDateFromMarkdown(localContent);
                } catch (readErr) {
                  console.warn(`读取本地文档失败：${filePath} —— ${readErr.message}`);
                }
              }
              const localDateStr = localDate ? formatDate(localDate) : '';
              const needsMigration = fileExists && localContent.trimStart().startsWith('<!--');
              if (!needsMigration && remoteDateStr && localDateStr && remoteDateStr === localDateStr) {
                skippedCount += 1;
                console.log(`跳过：${title} —— 远端 ${remoteDateStr} —— 本地 ${localDateStr} —— ${url}`);
                return;
              }
              const updateLine = remoteDateStr ? `最后更新于 ${remoteDateStr}` : '最后更新于 未知';
              const transformedBody = transformContent(doc.content || '', locale);
              const frontMatter = [
                '---',
                `title: "${title.replace(/"/g, '\\"')}"`,
                `source_url: ${url}`,
                '---',
                ''
              ].join('\n');
              const finalContent = `${frontMatter}${updateLine}\n\n${transformedBody}\n`;
              await fs.outputFile(filePath, finalContent, 'utf8');
              if (fileExists) {
                updatedCount += 1;
                const parts = [`更新：${title}`];
                if (remoteDateStr) parts.push(`远端 ${remoteDateStr}`);
                if (localDateStr) parts.push(`原有 ${localDateStr}`);
                parts.push(url);
                console.log(parts.join(' —— '));
              } else {
                createdCount += 1;
                const parts = [`新增：${title}`];
                if (remoteDateStr) parts.push(`远端 ${remoteDateStr}`);
                parts.push(url);
                console.log(parts.join(' —— '));
              }
            } catch (error) {
              failures.push({ path: sourcePath, error: error.message });
              console.error(`抓取失败：${sourcePath}`, error.message);
            }
          });
          processedDocs += 1;
          if (MAX_DOCS && processedDocs >= MAX_DOCS) {
            return;
          }
        } else {
          if (Array.isArray(child.items) && child.items.length) {
            await processChildren(child.items, [...parentSegments, uniqueSegment]);
          }
        }
      }
    };

    await processChildren(rootNode.items || [], []);
    if (MAX_DOCS && processedDocs >= MAX_DOCS) {
      break;
    }
  }

  await queue.onIdle();

  console.log(`抓取完成，已保存文档数：${processedDocs}`);
  console.log(
    `Summary: created ${createdCount}, updated ${updatedCount}, skipped ${skippedCount}, total processed ${createdCount + updatedCount + skippedCount}.`
  );
  if (failures.length) {
    console.warn('以下文档抓取失败:');
    failures.forEach((item) => {
      console.warn(`- ${item.path}: ${item.error}`);
    });
  }
}

main().catch((error) => {
  console.error('执行失败：', error);
  process.exitCode = 1;
});
