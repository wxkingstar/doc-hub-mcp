#!/usr/bin/env node
import { McpServer, ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { ErrorCode, McpError } from '@modelcontextprotocol/sdk/types.js';
import { z } from 'zod';
import path from 'path';
import { DocIndex, resolveDocRoot } from './doc-index.js';

async function main() {
  const docRoot = resolveDocRoot();
  const rootPaths = Array.isArray(docRoot) ? docRoot : [docRoot];
  const namespace = (process.env.DOC_NAMESPACE ?? 'local-docs').trim() || 'local-docs';
  const serverName = process.env.MCP_SERVER_NAME?.trim() || 'local-docs-mcp';
  const index = new DocIndex(rootPaths, namespace);
  await index.initialize();
  const sourceLabels = index.getSourceLabels();
  const sourceDescription = sourceLabels.length ? sourceLabels.join('、') : '默认目录';
  const rootDisplay = rootPaths
    .map(rootPath => {
      const relative = path.relative(process.cwd(), rootPath);
      return relative && relative !== '' ? relative : rootPath;
    })
    .join('、');

  const server = new McpServer(
    {
      name: serverName,
      version: '1.0.0'
    },
    {
      instructions:
        `使用 search-docs 工具检索本地文档。当前文档库来源：${sourceDescription}，默认包含企业微信与飞书开放平台资料，更新时间截至 2025-10-12。可通过 source 参数（wecom/feishu）指定文档来源以提高检索精确性。检索结果会返回 doc://${namespace}/... 资源链接，可通过 resources/read 获取完整内容。`
    }
  );

  server.registerTool(
    'search-docs',
    {
      title: '文档检索',
      description:
        `根据关键词检索企业微信与飞书开放平台的本地 Markdown 文档（更新至 2025-10-12，源目录：${sourceDescription}）。支持通过 source 参数指定文档来源（wecom/feishu），提高检索精确性。`,
      inputSchema: {
        query: z.string().min(1, '查询内容不能为空').describe('搜索关键词，支持多个关键词空格分隔，会在文档标题和正文中进行匹配'),
        limit: z.number().int().min(1).max(20).optional().describe('可选：返回结果的最大数量，默认为 8 条，最多 20 条'),
        source: z.enum(['wecom', 'feishu']).optional().describe('可选：指定文档来源，wecom=企业微信，feishu=飞书开放平台')
      },
      outputSchema: {
        results: z
          .array(
            z.object({
              title: z.string(),
              path: z.string(),
              resourceUri: z.string(),
              snippet: z.string().optional(),
              score: z.number()
            })
          )
          .default([])
      }
    },
    async ({ query, limit, source }) => {
      if (!index.hasDocuments()) {
        return {
          content: [
            {
              type: 'text',
              text: '当前尚未加载任何文档，无法执行检索。'
            }
          ],
          structuredContent: { results: [] },
          isError: true
        };
      }
      const results = index.search(query, limit, source);
      if (results.length === 0) {
        const sourceHint = source ? `（限定来源：${source === 'wecom' ? '企业微信' : '飞书开放平台'}）` : '';
        return {
          content: [
            {
              type: 'text',
              text: `未找到与「${query}」相关的文档${sourceHint}。`
            }
          ],
          structuredContent: { results: [] }
        };
      }
      const plainText = results
        .map(
          (item, idx) =>
            `${idx + 1}. ${item.title}\n路径：${item.path}\n链接：${item.resourceUri}\n摘要：${item.snippet ?? '（无摘要）'}`
        )
        .join('\n\n');
      return {
        content: [
          {
            type: 'text',
            text: plainText
          }
        ],
        structuredContent: { results }
      };
    }
  );

  const docTemplate = new ResourceTemplate(`doc://${namespace}/{+path}`, {
    list: async () => ({
      resources: index.listResources()
    })
  });

  server.registerResource(
    namespace,
    docTemplate,
    {
      title: '本地文档集合',
      description: `本地文档根目录：${rootDisplay}`,
      mimeType: 'text/markdown'
    },
    async (uri, variables) => {
      const resourcePath = variables?.path;
      if (!resourcePath) {
        throw new McpError(ErrorCode.InvalidParams, '缺少 path 参数');
      }
      const doc = index.findByResourcePath(resourcePath);
      if (!doc) {
        throw new McpError(ErrorCode.InvalidParams, `未找到文档：${resourcePath}`);
      }
      return {
        contents: [
          {
            uri: uri.href,
            mimeType: 'text/markdown',
            text: doc.content
          }
        ]
      };
    }
  );

  const transport = new StdioServerTransport();
  let closing = false;

  const closePromise = new Promise((resolve, reject) => {
    server.onclose = () => resolve();
    server.onerror = error => reject(error);
    transport.onclose = () => resolve();
    transport.onerror = error => reject(error);
  });

  const shutdown = async () => {
    if (closing) return;
    closing = true;
    await server.close().catch(() => {});
    await transport.close().catch(() => {});
  };

  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);

  await server.connect(transport);
  process.stdin.resume();
  const keepAlive = setInterval(() => {}, 1 << 30);
  try {
    await closePromise;
  } finally {
    clearInterval(keepAlive);
    process.stdin.pause();
  }
}

main().catch(error => {
  console.error('MCP 服务启动失败:', error);
  process.exit(1);
});
