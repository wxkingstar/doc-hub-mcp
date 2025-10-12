# 文档检索 MCP 服务

> 提供离线、本地的 Markdown 文档检索能力，可直接接入支持 Model Context Protocol (MCP) 的 IDE、Agent 或调试工具。目前支持**企业微信**和**飞书**，文档更新时间：2025-10-12

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
   - [IDE / AI 编程助手集成示例](#ide--ai-编程助手集成示例)  
6. [使用方法](#使用方法)  
7. [故障排查](#故障排查)

## 项目简介

本项目基于 `@modelcontextprotocol/sdk` 构建 `STDIO` 传输模式的 MCP 服务。通过本地存储的 Markdown 文档向客户端提供检索工具与资源读取能力，适用于离线知识库、企业内部文档、私有 API 文档等场景。

主要聚合了**企业微信**和**飞书开放平台**的完整开发者文档，方便在 AI 编程助手中快速检索和查阅接口文档。

> **特别说明**
> 1. 本 MCP 包含约 100 MB 以上的内容，首次接入（无缓存）需等待数分钟完成安装与加载。
> 2. 当前文档抓取覆盖至 2025-10-12，如需更细粒度更新时间，请自行运行最新的抓取脚本。

## 功能特性

- **关键字检索**：`doc-hub` 工具支持按关键词匹配标题与正文，返回排序后的候选列表。  
- **全文获取**：默认使用 `doc://local-docs/{+path}` 资源，可通过 `resources/read` 获取 Markdown 原文。  
- **可配置命名空间**：通过环境变量可自定义资源命名空间与服务名称，利于多知识库并行。  
- **自定义文档根目录**：默认依次查找运行目录与包内的 `docs/`、`wecom/`、`feishu/`，也可通过 `DOC_ROOT` 指定任意路径。  
- **标准 MCP 兼容**：可在 Cursor、Claude Code、Codex、MCP Inspector 等支持 MCP 的客户端中直接使用。

## 系统要求

- Node.js ≥ 20.18（满足 `cheerio@1.1.2` 的引擎要求）
- 本地 Markdown 文档目录；若文档放在默认的 `docs/`、`wecom/` 或 `feishu/`（无论位于项目根目录还是包内），无需额外配置
- 支持 MCP 协议的 AI 编程助手（见下方列表）

### 支持的 AI 编程助手

本 MCP 服务兼容所有支持 Model Context Protocol 的工具，包括但不限于：

- ✅ **Cursor** - AI-first 代码编辑器
- ✅ **Claude Code** - Anthropic 官方 CLI 工具
- ✅ **Codex** - AI 编程助手
- ✅ **MCP Inspector** - MCP 协议调试工具
- ✅ 其他支持 MCP 协议的工具

配置方式基本相同，只需在对应工具的 MCP 配置文件中添加服务配置即可。

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

若在 MCP Inspector 中能看到 `doc-hub` 工具和 `doc://local-docs/...`（或自定义命名空间）资源，即表示服务工作正常。

### 直接通过 `npx` 使用

发布或打包后，终端可以直接拉取 npm 包运行，无需手动克隆仓库：

```bash
npx -y doc-hub-mcp
```

常见场景：

- **私有部署**：通过 `npm publish --access restricted` 发布到私有 registry，使用时将 `npm` 配置指向该 registry。  
- **本地分发**：运行 `npm pack` 生成 `doc-hub-mcp-1.0.1.tgz`，在目标机器执行  
  `npx --yes --package ./doc-hub-mcp-1.0.1.tgz doc-hub-mcp`。

执行命令时若需自定义目录或命名空间，可以追加环境变量，例如：

```bash
DOC_ROOT=/data/docs DOC_NAMESPACE=internal-docs npx -y doc-hub-mcp
```

## 配置说明

### 环境变量

| 变量名             | 说明                                            | 默认值                          |
| ------------------ | ----------------------------------------------- | ------------------------------- |
| `DOC_ROOT`         | 指定 Markdown 文档根目录的绝对路径              | 依次搜索运行目录与包内的 `docs/`、`wecom/`、`feishu/` |
| `DOC_NAMESPACE`    | 资源命名空间名称，对应 `doc://<namespace>/...` | `local-docs`                    |
| `MCP_SERVER_NAME`  | MCP 服务在客户端中显示的名称                    | `doc-hub`                       |

### IDE / AI 编程助手集成示例

#### Cursor 配置

在 `~/.cursor/mcp.json` 中添加（或更新）如下配置：

```json
{
  "mcpServers": {
    "doc-hub": {
      "command": "npx",
      "args": ["-y", "doc-hub-mcp@latest"]
    }
  }
}
```

保存配置后，打开 Cursor 的 MCP 面板重新连接，若状态指示灯由红变绿即表示加载成功。

#### Claude Code 配置

在 `~/.config/claude-code/mcp.json` (Linux/macOS) 或 `%APPDATA%\claude-code\mcp.json` (Windows) 中添加：

```json
{
  "mcpServers": {
    "doc-hub": {
      "command": "npx",
      "args": ["-y", "doc-hub-mcp@latest"]
    }
  }
}
```

#### Codex 配置

配置方式与 Cursor、Claude Code 相同，在对应的 MCP 配置文件中添加上述配置即可。

#### 自定义环境变量

若需切换自定义目录或命名空间，可在配置中添加 `env` 字段：

```json
{
  "mcpServers": {
    "doc-hub": {
      "command": "npx",
      "args": ["-y", "doc-hub-mcp@latest"]
    }
  }
}
```

## 使用方法

配置完成后，在支持 MCP 的 AI 编程助手中，可以通过以下方式使用：

1. **直接对话查询**：直接询问相关问题，AI 助手会自动调用 `doc-hub` 工具进行检索。例如：
   - "企业微信如何获取外部联系人列表？"
   - "飞书如何发送消息？"

2. **手动调用工具**（如在 MCP Inspector 中）：

   ```json
   {
     "query": "外部联系人 同步",
     "limit": 5,
     "source": "wecom"
   }
   ```

   参数说明：
   - `query`：必填，搜索关键词
   - `limit`：可选，返回结果数量（默认 8，最多 20）
   - `source`：可选，指定文档来源（`wecom` 或 `feishu`）

3. 检索结果会返回 `resourceUri`（形如 `doc://local-docs/wecom/...`），AI 助手会自动读取完整文档内容并提供答案。

## 数据抓取（可选）

- 企业微信文档：

  ```bash
  npm run scrape:wecom -- --limit 20     # 仅抓取 20 篇做快速验证
  npm run scrape:wecom                   # 全量抓取
  ```

- 飞书开放平台文档：

  ```bash
  npm run scrape:feishu -- --limit 20    # 仅抓取 20 篇做快速验证
  npm run scrape:feishu                  # 全量抓取
  ```

> 使用 `--limit` 可以控制抓取数量，便于先做增量验证。去掉该参数即执行全量抓取。

## 故障排查

- **依赖缺失**：确认已执行 `npm install` 且无报错。
- **文档目录不存在**：服务会依次尝试运行目录与包内的 `docs/`、`wecom/`、`feishu/`；若需其他目录，设置 `DOC_ROOT` 并确保路径可访问。
- **端口冲突**：使用 MCP Inspector 时若提示 `Proxy Server PORT IS IN USE at port 6277`，需关闭已有 Inspector 实例或修改其代理端口。
- **客户端不显示工具**：
  - 确认配置文件格式正确，JSON 无语法错误
  - 检查客户端（Cursor、Claude Code 等）是否允许执行 `npx`
  - 必要时可改为使用本地脚本绝对路径或显式安装 npm 包
  - 重启 IDE 或重新加载 MCP 连接
- **首次加载缓慢**：首次通过 `npx` 拉取包时需要下载 100+ MB 内容，请耐心等待 2-5 分钟。后续加载会使用缓存，速度会快很多。
