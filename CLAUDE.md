# doc-hub-mcp 项目规则

## 发布流程

### 1. 版本发布（GitHub Release + npm publish）

```bash
# 1) 更新 package.json 版本号
# 2) 提交版本号变更
git add package.json
git commit -m "1.0.x"

# 3) 打 tag 并推送
git tag v1.0.x
git push --tags && git push

# 4) 创建 GitHub Release
gh release create v1.0.x --title "v1.0.x" --notes "## Changes
- 变更说明"

# 5) 发布到 npm
npm publish
```

### 2. npm 认证配置

- npm 账户已启用 2FA（Security Key / Touch ID 方式）
- 发布使用 **Granular Access Token**（需勾选 bypass 2FA），token 已保存在全局 `~/.npmrc` 中，直接 `npm publish` 即可
- 如果 token 过期导致发布失败，需到 https://www.npmjs.com/settings/~/tokens 重新创建，然后执行：
  ```bash
  npm config set //registry.npmjs.org/:_authToken <新token>
  ```
- `.npmrc` 已加入 `.gitignore`，避免 token 泄露

### 3. SSH 配置

GitHub SSH 连接使用 443 端口（端口 22 被封），配置位于 `~/.ssh/config`：

```
Host github.com
  HostName ssh.github.com
  Port 443
  User git
  IdentityFile ~/.ssh/id_rsa
```

如果推送失败，先检查：
- SSH key 是否加载：`ssh-add -l`，未加载则执行 `ssh-add ~/.ssh/id_rsa`
- SSH 连接是否正常：`ssh -T git@github.com`

## 项目运维

### 系统要求

- Node.js ≥ 20.18（满足 `cheerio@1.1.2` 的引擎要求）

### 本地启动

```bash
npm install
npm run mcp:server --silent
```

- `--silent` 屏蔽 npm 输出，避免干扰 STDIO 通信
- 自定义文档目录：`DOC_ROOT=/path/to/docs npm run mcp:server --silent`

### 通过 npx 运行

```bash
npx -y doc-hub-mcp
```

- 私有部署：`npm publish --access restricted` 发布到私有 registry
- 本地分发：`npm pack` 生成 tgz，目标机器执行 `npx --yes --package ./doc-hub-mcp-1.0.x.tgz doc-hub-mcp`

### MCP Inspector 调试

```bash
npx @modelcontextprotocol/inspector -s "npm run mcp:server --silent"
```

若端口冲突提示 `PORT IS IN USE at port 6277`，关闭已有 Inspector 实例或修改代理端口。

### 文档抓取

```bash
npm run scrape:wecom                   # 企业微信全量抓取
npm run scrape:feishu                  # 飞书全量抓取
npm run scrape:wecom -- --limit 20     # 仅抓取 20 篇验证
```

当前文档覆盖至 2026-01-19，如需更新请重新运行抓取脚本。

### 环境变量

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| `DOC_ROOT` | Markdown 文档根目录绝对路径 | 依次搜索运行目录与包内的 `docs/`、`wecom/`、`feishu/` |
| `DOC_NAMESPACE` | 资源命名空间，对应 `doc://<namespace>/...` | `local-docs` |
| `MCP_SERVER_NAME` | MCP 服务在客户端中显示的名称 | `doc-hub` |

### 故障排查

- **依赖缺失**：确认已执行 `npm install` 且无报错
- **文档目录不存在**：服务依次尝试运行目录与包内的 `docs/`、`wecom/`、`feishu/`；若需其他目录，设置 `DOC_ROOT`
- **客户端不显示工具**：检查配置文件格式、确认客户端允许执行 `npx`、重启 IDE 或重新加载 MCP 连接
- **首次加载缓慢**：首次通过 `npx` 拉取需下载 100+ MB 内容，等待 2-5 分钟，后续使用缓存
