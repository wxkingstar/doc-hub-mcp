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
