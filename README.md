# doc-hub-mcp

> **This project has moved / 项目已迁移**
>
> 本项目已停止维护，全新版本已迁移至：**[SpecFusion](https://github.com/wxkingstar/SpecFusion)**
>
> This project is no longer maintained. Please use the new repository: **[SpecFusion](https://github.com/wxkingstar/SpecFusion)**

## 为什么迁移？

doc-hub-mcp 采用 MCP Server + Markdown 文件打包的方案，存在以下问题：

- **架构笨重** — 作为 MCP Server 运行，需要独立进程，配置繁琐
- **包体积过大** — 每次安装需下载 100+ MB 文档数据，首次启动慢
- **平台覆盖有限** — 仅支持企业微信和飞书两个平台
- **检索能力弱** — 基于简单的文件名和内容匹配，缺乏中文分词能力
- **更新不便** — 文档更新需要重新发布 npm 包，用户需重新下载全量数据

## SpecFusion 的改进

新项目 [SpecFusion](https://github.com/wxkingstar/SpecFusion) 从方案到架构做了全面升级，最大的变化是**从 MCP Server 方案转为 Claude Code Skill 方案**：

| | doc-hub-mcp (旧) | SpecFusion (新) |
|---|---|---|
| **方案** | MCP Server（独立进程） | Claude Code Skill（零进程，即装即用） |
| **平台覆盖** | 2 个（企微、飞书） | 15+ 个（企微、飞书、钉钉、淘宝、小红书、抖音、微信小程序、拼多多、支付宝等） |
| **文档规模** | ~3,000 篇 | 26,800+ 篇，17,900+ 个 API 端点 |
| **检索方案** | 文件名 + 内容简单匹配 | jieba 中文分词 + SQLite FTS5 全文索引 |
| **部署方式** | npm 包（文档打包分发） | 云端服务零配置 / Docker 自部署 |
| **更新机制** | 重新发布 npm 包 | 服务端实时更新，客户端无感 |

Skill 相比 MCP Server 的优势在于：无需启动额外进程、无需管理连接状态、安装只需一条命令、提及平台名即可自动触发检索。

---

以下为旧版说明，仅供参考。

---

企业微信 & 飞书开放平台文档检索 MCP 服务。

让 AI 编程助手直接检索企微/飞书的开发者文档，在写代码时随时查阅接口说明，无需切换浏览器。

## 安装

### Claude Code

```bash
claude mcp add doc-hub-mcp -- npx -y doc-hub-mcp@latest
```

### Codex

```bash
codex mcp add doc-hub-mcp -- npx -y doc-hub-mcp@latest
```

### Cursor

打开 Settings → Features → MCP → Add New MCP Server，输入：

- **Type**: stdio
- **Command**: `npx -y doc-hub-mcp@latest`

或直接点击安装：[Install in Cursor](cursor://anysphere.cursor-deeplink/mcp/install?name=doc-hub-mcp&config=eyJ0eXBlIjoic3RkaW8iLCJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImRvYy1odWItbWNwQGxhdGVzdCJdfQ==)

> **提示**：首次安装需下载约 100 MB 文档数据，请耐心等待。后续启动使用缓存，速度会快很多。

## 使用

安装完成后，直接向 AI 提问即可，它会自动调用文档检索：

- "企业微信如何获取外部联系人列表？"
- "飞书如何发送消息卡片？"
- "企微审批流程怎么对接？"

## 配置（可选）

### 环境变量

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| `DOC_ROOT` | 自定义文档根目录 | 包内 `wecom/`、`feishu/` |
| `DOC_NAMESPACE` | 资源命名空间 | `local-docs` |
| `MCP_SERVER_NAME` | 服务显示名称 | `doc-hub` |

带环境变量安装示例（Claude Code）：

```bash
claude mcp add doc-hub-mcp -e DOC_ROOT=/path/to/docs -- npx -y doc-hub-mcp@latest
```

### 手动配置文件

如果需要手动编辑配置文件：

**Claude Code** (`~/.claude.json`)：
```json
{
  "mcpServers": {
    "doc-hub-mcp": {
      "command": "npx",
      "args": ["-y", "doc-hub-mcp@latest"]
    }
  }
}
```

**Codex** (`~/.codex/config.toml`)：
```toml
[mcp_servers.doc-hub-mcp]
command = "npx"
args = ["-y", "doc-hub-mcp@latest"]
```

**Cursor** (`.cursor/mcp.json`)：
```json
{
  "mcpServers": {
    "doc-hub-mcp": {
      "command": "npx",
      "args": ["-y", "doc-hub-mcp@latest"]
    }
  }
}
```

## 支持的文档

- **企业微信** — 服务端 API、客户端 API、应用开发、智慧硬件等
- **飞书开放平台** — 开发指南、服务端 API、消息卡片、小程序等

文档更新时间：2026-01-19

## 故障排查

| 问题 | 解决方案 |
|------|---------|
| 首次加载缓慢 | 正常现象，需下载 100+ MB 文档数据，等待 2-5 分钟 |
| 工具不显示 | 检查配置文件 JSON/TOML 格式是否正确，重启 IDE |
| 文档目录不存在 | 通过 `DOC_ROOT` 环境变量指定正确路径 |

## 本地开发

```bash
npm install
npm run mcp:server --silent

# MCP Inspector 调试
npx @modelcontextprotocol/inspector -s "npm run mcp:server --silent"
```

### 数据抓取

```bash
npm run scrape:wecom                   # 企业微信全量抓取
npm run scrape:feishu                  # 飞书全量抓取
npm run scrape:wecom -- --limit 20     # 仅抓取 20 篇验证
```
