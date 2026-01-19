---
title: "MCP 概述"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/mcp_integration/mcp_introduction
last_remote_update: 2026-01-19
last_remote_update_timestamp: 1768791829000
---
最后更新于 2026-01-19

# 概述

飞书开放平台推出了 MCP（Model Context Protocol） 能力，在原有 OpenAPI 基础上进行了面向 AI 场景的封装与优化，将传统接口调用升级为更适合大模型理解和执行的“工具化能力”，让大模型调用更准确、速度更快、效果更好。通过 MCP，AI 可以更自然地理解业务语义，并以更低的接入成本完成数据读取、写入与业务操作。
当前支持「**云文档**」场景，查看[支持的 MCP 工具集](https://open.larkoffice.com/document/mcp_open_tools/supported-tools)，后续会开放更多场景（如多维表格、日历）。欢迎[反馈](https://bytedance.larkoffice.com/share/base/form/shrcnGy0YNaviYYLjAX8zMqIW3f)您的使用场景 🥳

## 使用场景

用户类型 | 核心目标 | 调用模式 | 如何使用
--- | --- | --- | ---
个人用户 | 通过自然语言，在自己常用的 AI 工具（如 TRAE、Cursor 等）中轻松调用飞书的强大能力，实现文档创作、信息检索、内容管理等多种场景的自动化。 | **远程调用模式（推荐）**：通过个人授权的方式，让 AI 拥有操作自己飞书账户内信息的权限。  
**注意事项**：当前支持「**云文档**」场景，后续会开放更多工具。 | [个人使用飞书远程 MCP 服务](https://open.larkoffice.com/document/mcp_open_tools/end-user-call-remote-mcp-server)
开发者 | 通过编写代码，在自己构建的 AI Agent 中，深度集成飞书的开放能力，希望将 agent 提供给其他人使用。 | **远程调用模式（推荐）**：以应用或个人身份，在自己开发的程序或服务中集成和调用飞书 MCP 能力。  
**注意事项**：当前支持「**云文档**」场景，后续会开放更多工具。 | [开发者调用远程 MCP 服务](https://open.feishu.cn/document/mcp_open_tools/developers-call-remote-mcp-server)
开发者 | 通过编写代码，在自己构建的 AI Agent 中，深度集成飞书的开放能力，希望将 agent 提供给其他人使用。 | **本地调用模式（不推荐）**：以应用或个人身份，在自己开发的服务中集成和调用飞书 MCP 能力。  
**注意事项**：- 支持全部飞书服务端 OpenAPI 能力，参考[飞书 MCP 工具列表](https://github.com/larksuite/lark-openapi-mcp/blob/main/docs/reference/tool-presets/tools-zh.md)。  
- 需开发者自行部署飞书 MCP 服务。 | [本地接入 OpenAPI MCP 概述](https://open.larkoffice.com/document/mcp_open_tools/mcp-overview)

## 云文档场景示例

云文档场景赋予 AI 全面的文档驾驭能力，打通“搜、读、写”链路，让 AI 从单纯的对话者升级为高效的文档协作专家，极大提升知识沉淀与管理的效率。

示例场景 | 实际效果 | 运行记录
--- | --- | ---
调研今日的 AI 大事件，生成一篇云文档，需要附上要闻的原始链接。 | ![image (3).png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/83588342447f8247293bb5fb252054f3_OzLkDhLFV8.png?height=1470&lazyload=true&maxWidth=210&width=598) | ![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/d7baaf473665c6869d99e16cf1a6bc11_tiVb2Sz8Yf.png?height=1928&lazyload=true&maxWidth=300&width=1618)
根据我的模板 [每周工作总结模板](https://example.com) ，结合本周的 mcp 文档内容生成一份本周工作和回顾的云文档。 | ![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/667436059e79b9ad1fb4e1c1fe119a60_KrWLpSxqtb.png?height=1842&lazyload=true&maxWidth=280&width=962) | ![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/42a73b2e88fd9745847d0b172660ed9d_ckXaQ51OUd.png?height=1928&lazyload=true&maxWidth=300&width=1602)
根据当前的代码项目生成一个完整的技术方案，并且需要增加一个时序图和流程图。 | ![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/871115529f245b28065a459fd4cc9044_aP4o4DLPqU.png?height=1848&lazyload=true&maxWidth=260&width=876) | ![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/3e1c36a551586c6ca13192ed833ccb44_WB8Q5amv2A.png?height=1914&lazyload=true&maxWidth=300&width=1636)
