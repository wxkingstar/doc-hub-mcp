# 文档检索 MCP 服务

> 提供离线、本地的 Markdown 文档检索能力，可直接接入支持 Model Context Protocol (MCP) 的 IDE、Agent 或调试工具。

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

本项目基于 `@modelcontextprotocol/sdk` 构建 `STDIO` 传输模式的 MCP 服务。通过本地存储的 Markdown 文档向客户端提供检索工具与资源读取能力，适用于离线知识库、企业内部文档、私有 API 文档等场景。

## 功能特性

- **关键字检索**：`search-docs` 工具支持按关键词匹配标题与正文，返回排序后的候选列表。  
- **全文获取**：默认使用 `doc://local-docs/{+path}` 资源，可通过 `resources/read` 获取 Markdown 原文。  
- **可配置命名空间**：通过环境变量可自定义资源命名空间与服务名称，利于多知识库并行。  
- **自定义文档根目录**：默认依次查找运行目录与包内的 `docs/`、`wework/`，也可通过 `DOC_ROOT` 指定任意路径。  
- **标准 MCP 兼容**：可在 Cursor、MCP Inspector 等支持 MCP 的客户端中直接使用。

## 系统要求

- Node.js ≥ 18（建议与项目主开发环境保持一致）  
- 本地 Markdown 文档目录；若文档放在默认的 `docs/` 或 `wework/`（无论位于项目根目录还是包内），无需额外配置。

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
- 如果文档位于默认目录之外（或需覆盖包内文档），可在命令前添加环境变量：

```bash
DOC_ROOT=/path/to/docs DOC_NAMESPACE=my-docs npm run mcp:server --silent
```

进程将常驻前台并接管 STDIO，直到客户端结束连接。

### 本地自检（可选）

```bash
npx @modelcontextprotocol/inspector -s "npm run mcp:server --silent"
```

若在 MCP Inspector 中能看到 `search-docs` 工具和 `doc://local-docs/...`（或自定义命名空间）资源，即表示服务工作正常。

### 直接通过 `npx` 使用

发布或打包后，终端可以直接拉取 npm 包运行，无需手动克隆仓库：

```bash
npx -y doc-hub-mcp
```

常见场景：

- **私有部署**：通过 `npm publish --access restricted` 发布到私有 registry，使用时将 `npm` 配置指向该 registry。  
- **本地分发**：运行 `npm pack` 生成 `doc-hub-mcp-1.0.0.tgz`，在目标机器执行  
  `npx --yes --package ./doc-hub-mcp-1.0.0.tgz doc-hub-mcp`。

执行命令时若需自定义目录或命名空间，可以追加环境变量，例如：

```bash
DOC_ROOT=/data/docs DOC_NAMESPACE=internal-docs npx -y doc-hub-mcp
```

## 配置说明

### 环境变量

| 变量名             | 说明                                            | 默认值                          |
| ------------------ | ----------------------------------------------- | ------------------------------- |
| `DOC_ROOT`         | 指定 Markdown 文档根目录的绝对路径              | 依次搜索运行目录与包内的 `docs/`、`wework/` |
| `DOC_NAMESPACE`    | 资源命名空间名称，对应 `doc://<namespace>/...` | `local-docs`                    |
| `MCP_SERVER_NAME`  | MCP 服务在客户端中显示的名称                    | `local-docs-mcp`                |

### Cursor 集成示例

在 `~/.cursor/mcp.json` 中添加（或更新）如下配置，通过 `npx` 直接运行：

```json
"search-docs": {
  "command": "npx",
  "args": [
    "-y",
    "doc-hub-mcp"
  ]
}
```

保存配置后，打开 Cursor 的 MCP 面板重新连接，若状态指示灯由红变绿即表示加载成功。若需切换自定义目录，再在 `env` 中补充 `DOC_ROOT`、`DOC_NAMESPACE` 等变量。

## 使用方法

1. 在客户端调用 `search-docs` 工具，传入 `query`（必填）与可选 `limit`：  

   ```json
   {
     "query": "外部联系人 同步",
     "limit": 5
   }
   ```

2. 记录响应中返回的 `resourceUri`（形如 `doc://local-docs/001-getting-started/...`）。  
3. 使用客户端提供的 `resources/read` 接口读取该 URI，即可获取完整 Markdown 文档内容。

## 故障排查

- **依赖缺失**：确认已执行 `npm install` 且无报错。  
- **文档目录不存在**：服务会依次尝试运行目录与包内的 `docs/`、`wework/`；若需其他目录，设置 `DOC_ROOT` 并确保路径可访问。  
- **端口冲突**：使用 MCP Inspector 时若提示 `Proxy Server PORT IS IN USE at port 6277`，需关闭已有 Inspector 实例或修改其代理端口。  
- **客户端不显示工具**：确保 Cursor 配置中的 `command`、`args` 均为绝对路径，并已重新连接 MCP。
