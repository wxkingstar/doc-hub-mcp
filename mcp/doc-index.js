import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const DEFAULT_MAX_RESULTS = 8;
const DEFAULT_NAMESPACE = 'local-docs';
const MODULE_DIR = path.dirname(fileURLToPath(import.meta.url));
const PACKAGE_ROOT = path.resolve(MODULE_DIR, '..');

function isMarkdownFile(fileName) {
  return fileName.toLowerCase().endsWith('.md');
}

function toPlainText(markdown) {
  if (!markdown) return '';
  const withoutCodeFence = markdown.replace(/```[\s\S]*?```/g, match => ` ${match} `);
  const withoutLinks = withoutCodeFence.replace(/\[([^\]]+)]\([^)]+\)/g, '$1');
  const withoutImages = withoutLinks.replace(/!\[([^\]]*)]\([^)]+\)/g, '$1');
  const withoutFormatting = withoutImages.replace(/[#>*`_~\-]/g, ' ');
  return withoutFormatting.replace(/\s+/g, ' ').trim();
}

function countMatches(haystack, needle) {
  if (!haystack || !needle) return 0;
  let count = 0;
  let index = haystack.indexOf(needle);
  while (index !== -1) {
    count += 1;
    index = haystack.indexOf(needle, index + needle.length);
  }
  return count;
}

function tokenize(query) {
  return query
    .toLowerCase()
    .split(/\s+/)
    .map(token => token.trim())
    .filter(Boolean);
}

function encodeResourcePath(relativePath) {
  return relativePath.split(path.sep).map(encodeURIComponent).join('/');
}

function decodeResourcePath(uriPath) {
  return uriPath
    .split('/')
    .map(segment => decodeURIComponent(segment))
    .join(path.sep);
}

function clampLimit(limit) {
  if (!Number.isFinite(limit)) {
    return DEFAULT_MAX_RESULTS;
  }
  return Math.min(Math.max(1, Math.floor(limit)), DEFAULT_MAX_RESULTS);
}

export class DocIndex {
  constructor(rootDir, namespace = DEFAULT_NAMESPACE) {
    this.rootDir = rootDir;
    this.namespace = namespace;
    this.docs = [];
    this.docByPath = new Map();
  }

  async initialize() {
    const files = await this.collectMarkdownFiles(this.rootDir);
    const docs = [];
    for (const filePath of files) {
      const relativePath = path.relative(this.rootDir, filePath);
      try {
        const raw = await fs.promises.readFile(filePath, 'utf8');
        const plain = toPlainText(raw);
        const lowered = plain.toLowerCase();
        const titleMatch = raw.match(/^#\s+(.+)$/m);
        const title = titleMatch ? titleMatch[1].trim() : path.basename(relativePath, path.extname(relativePath));
        const description = plain.slice(0, 160);
        const resourcePath = encodeResourcePath(relativePath);
        const doc = {
          relativePath,
          resourcePath,
          absolutePath: filePath,
          title,
          description,
          content: raw,
          plainText: plain,
          plainLower: lowered
        };
        docs.push(doc);
        this.docByPath.set(relativePath, doc);
        this.docByPath.set(resourcePath.replace(/\//g, path.sep), doc);
      } catch (error) {
        console.warn(`无法加载文档 ${filePath}: ${error.message}`);
      }
    }
    this.docs = docs;
  }

  async collectMarkdownFiles(dirPath) {
    const stack = [dirPath];
    const results = [];
    while (stack.length > 0) {
      const current = stack.pop();
      if (!current) continue;
      let entries;
      try {
        entries = await fs.promises.readdir(current, { withFileTypes: true });
      } catch (error) {
        console.warn(`无法读取目录 ${current}: ${error.message}`);
        continue;
      }
      for (const entry of entries) {
        const entryPath = path.join(current, entry.name);
        if (entry.isDirectory()) {
          stack.push(entryPath);
        } else if (entry.isFile() && isMarkdownFile(entry.name)) {
          results.push(entryPath);
        }
      }
    }
    return results;
  }

  hasDocuments() {
    return this.docs.length > 0;
  }

  listResources() {
    return this.docs.map(doc => ({
      uri: this.buildResourceUri(doc.resourcePath),
      name: doc.title,
      description: doc.description,
      mimeType: 'text/markdown'
    }));
  }

  findByResourcePath(resourcePath) {
    const normalized = decodeResourcePath(resourcePath);
    return this.docByPath.get(normalized);
  }

  search(query, limit = DEFAULT_MAX_RESULTS) {
    const terms = tokenize(query);
    if (terms.length === 0) return [];
    const maxResults = clampLimit(limit);
    const results = [];
    for (const doc of this.docs) {
      let score = 0;
      for (const term of terms) {
        const titleLower = doc.title.toLowerCase();
        const titleMatches = countMatches(titleLower, term);
        const contentMatches = countMatches(doc.plainLower, term);
        if (titleMatches === 0 && contentMatches === 0) continue;
        score += titleMatches * 5 + contentMatches;
      }
      if (score > 0) {
        results.push({
          doc,
          score
        });
      }
    }
    results.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.doc.title.localeCompare(b.doc.title, 'zh');
    });
    return results.slice(0, maxResults).map(({ doc, score }) => ({
      title: doc.title,
      path: doc.relativePath,
      resourceUri: this.buildResourceUri(doc.resourcePath),
      snippet: this.buildSnippet(doc, terms),
      score
    }));
  }

  buildSnippet(doc, terms) {
    if (!doc.plainText) return '';
    let index = Number.POSITIVE_INFINITY;
    for (const term of terms) {
      const pos = doc.plainLower.indexOf(term);
      if (pos !== -1 && pos < index) {
        index = pos;
      }
    }
    if (!Number.isFinite(index)) {
      return doc.plainText.slice(0, 180);
    }
    const start = Math.max(0, index - 80);
    const end = Math.min(doc.plainText.length, index + 160);
    const snippet = doc.plainText.slice(start, end).trim();
    return `${start > 0 ? '…' : ''}${snippet}${end < doc.plainText.length ? '…' : ''}`;
  }

  buildResourceUri(resourcePath) {
    return `doc://${this.namespace}/${resourcePath}`;
  }
}

export function resolveDocRoot() {
  const customRoot = process.env.DOC_ROOT;
  if (customRoot) {
    return path.resolve(customRoot);
  }
  const candidates = [
    path.resolve('docs'),
    path.resolve('wecom'),
    path.join(PACKAGE_ROOT, 'docs'),
    path.join(PACKAGE_ROOT, 'wecom')
  ];
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }
  throw new Error(
    '无法定位文档目录。请通过 DOC_ROOT 环境变量指定 Markdown 文档根路径。'
  );
}
