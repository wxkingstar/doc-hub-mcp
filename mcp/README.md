# 文档检索 MCP 服务

> 提供离线、本地的企业微信开发文档检索能力，可直接接入支持 Model Context Protocol (MCP) 的 IDE、Agent 或调试工具。

## 目录

1. [项目简介](#项目简介)  
2. [功能特性](#功能特性)  
3. [系统要求](#系统要求)  
4. [快速开始](#快速开始)  
   - [安装依赖](#安装依赖)  
   - [启动服务](#启动服务)  
   - [本地自检（可选）](#本地自检可选)  
5. [配置说明](#配置说明)  
   - [环境变量](#环境变量)  
   - [Cursor 集成示例](#cursor-集成示例)  
6. [使用方法](#使用方法)  
7. [故障排查](#故障排查)

## 项目简介

本项目基于 `@modelcontextprotocol/sdk` 构建 `STDIO` 传输模式的 MCP 服务。通过本地抓取的企业微信开发文档，向客户端提供检索工具与文档资源读取能力，适用于离线检索、知识库增强等场景。

## 功能特性

- **关键字检索**：`search-docs` 工具支持按关键词匹配标题与正文，返回排序后的候选列表。  
- **全文获取**：`doc://wework/{+path}` 资源允许客户端直接通过 `resources/read` 获取 Markdown 原文。  
- **自定义文档根目录**：支持通过 `DOC_ROOT` 指定任意 Markdown 文档目录，方便复用。  
- **标准 MCP 兼容**：可在 Cursor、MCP Inspector 等支持 MCP 的客户端中直接使用。

## 系统要求

- Node.js ≥ 18（建议与项目主开发环境保持一致）  
- 已同步的企业微信 Markdown 文档，默认存放于仓库内 `wework/` 目录

## 快速开始

### 安装依赖

```bash
npm install
```

首次克隆仓库后执行一次即可，后续依赖更新时再重新安装。

### 启动服务

```bash
npm run mcp:server --silent
```

- `--silent` 用于屏蔽 npm 输出，避免干扰 STDIO 通信。  
- 需要自定义文档目录时，可在命令前添加 `DOC_ROOT`：

```bash
DOC_ROOT=/path/to/docs npm run mcp:server --silent
```

进程将常驻前台并接管 STDIO，直到客户端结束连接。

### 本地自检（可选）

```bash
npx @modelcontextprotocol/inspector -s "npm run mcp:server --silent"
```

若在 MCP Inspector 中能看到 `search-docs` 工具和 `doc://wework/...` 资源，即表示服务工作正常。

## 配置说明

### 环境变量

| 变量名     | 说明                               | 默认值     |
| ---------- | ---------------------------------- | ---------- |
| `DOC_ROOT` | 指定 Markdown 文档根目录的绝对路径 | `wework/` |

### Cursor 集成示例

在 `~/.cursor/mcp.json` 中添加（或更新）如下配置，并使用绝对路径：

```json
"search-docs": {
  "command": "node",
  "args": [
    "/Users/<user>/Documents/work/docs/openapi/mcp/doc-server.js"
  ],
  "env": {
    "DOC_ROOT": "/Users/<user>/Documents/work/docs/openapi/wework"
  }
}
```

保存配置后，打开 Cursor 的 MCP 面板重新连接，若状态指示灯由红变绿即表示加载成功。  
若无需自定义文档目录，可省略 `env` 字段。

## 使用方法

1. 在客户端调用 `search-docs` 工具，传入 `query`（必填）与可选 `limit`：  

   ```json
   {
     "query": "外部联系人 同步",
     "limit": 5
   }
   ```

2. 记录响应中返回的 `resourceUri`（形如 `doc://wework/001-企业内部开发/...`）。  
3. 使用客户端提供的 `resources/read` 接口读取该 URI，即可获取完整 Markdown 文档内容。

## 故障排查

- **依赖缺失**：确认已执行 `npm install` 且无报错。  
- **文档目录不存在**：检查 `wework/` 或 `DOC_ROOT` 指定路径是否存在、权限是否正确。  
- **端口冲突**：使用 MCP Inspector 时若提示 `Proxy Server PORT IS IN USE at port 6277`，需关闭已有 Inspector 实例或修改其代理端口。  
- **客户端不显示工具**：确保 Cursor 配置中的 `command`、`args` 均为绝对路径，并已重新连接 MCP。
