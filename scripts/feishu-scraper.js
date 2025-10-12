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
const limitIndex = args.indexOf('--limit');
const limit = limitIndex >= 0 ? Number(args[limitIndex + 1]) : NaN;
const MAX_DOCS = Number.isFinite(limit) && limit > 0 ? Math.floor(limit) : null;

const concurrencyIndex = args.indexOf('--concurrency');
const concurrencyValue = concurrencyIndex >= 0 ? Number(args[concurrencyIndex + 1]) : NaN;
const CONCURRENCY = Number.isFinite(concurrencyValue) && concurrencyValue > 0 ? Math.min(Math.floor(concurrencyValue), 16) : 6;

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
  let segment = trimmed.replace(/\s+/g, '-');
  segment = sanitize(segment);
  if (!segment && fallback) {
    segment = sanitize(fallback.replace(/\s+/g, '-'));
  }
  if (!segment) {
    segment = fallback ? String(fallback) : '';
  }
  if (!segment) {
    segment = Math.random().toString(36).slice(2, 10);
  }
  return segment;
}

function getNodeSegment(node) {
  const fullPath = typeof node.fullPath === 'string' ? node.fullPath : '';
  const parts = fullPath.split('/').filter(Boolean);
  const candidate = parts.length ? parts[parts.length - 1] : '';
  return createSegment(candidate, node.name || node.id);
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
      for (const child of children || []) {
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
              const metaLines = [
                '<!--',
                `title: ${title}`,
                `id: ${doc.id || child.id}`,
                `fullPath: ${sourcePath}`,
                `updatedAt: ${doc.updateTime || ''}`,
                `source: ${url}`,
                '-->',
                ''
              ];
              await fs.outputFile(filePath, `${metaLines.join('\n')}${doc.content}`, 'utf8');
            } catch (error) {
              failures.push({ path: sourcePath, error: error.message });
              console.error(`抓取失败：${sourcePath}`, error.message);
              const metaLines = [
                '<!--',
                `title: ${title}`,
                `id: ${child.id}`,
                `fullPath: ${sourcePath}`,
                `updatedAt: `,
                `source: ${url}`,
                '-->',
                ''
              ];
              const placeholder = [
                ...metaLines,
                `> ⚠️ 无法从飞书开放平台获取该文档内容。`,
                `> 错误信息：${error?.message || '未知错误'}`,
                ''
              ].join('\n');
              await fs.outputFile(filePath, placeholder, 'utf8');
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
