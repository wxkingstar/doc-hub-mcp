# 使用 Node.js 20.18 Alpine 镜像作为基础镜像
FROM node:20.18-alpine

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖（仅生产依赖）
RUN npm ci --only=production

# 复制应用代码
COPY mcp ./mcp
COPY wecom ./wecom
COPY feishu ./feishu

# 确保入口文件有执行权限
RUN chmod +x mcp/doc-server.js

# 设置环境变量
ENV NODE_ENV=production

# 启动 MCP 服务器
CMD ["node", "mcp/doc-server.js"]
