---
title: "支持发送消息卡片的 OpenAPI"
source_url: https://open.feishu.cn/document/common-capabilities/message-card/api-and-resource-reference
last_remote_update: 2024-08-20
last_remote_update_timestamp: 1724163155000
---
最后更新于 2024-08-20

# 支持发送消息卡片的 OpenAPI

当你构建完成消息卡片后，便可通过开放平台提供的 OpenAPI 发送消息卡片至目标会话。通过本文你可以了解哪些 OpenAPI 可以用来发送消息卡片。warning
该文档为历史消息卡片文档，已不再维护。了解对应新版文档，参考[发送卡片](https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/feishu-cards/send-feishu-card)。

OpenAPI | 类型 | 描述
--- | --- | ---
[发送消息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create) | 服务端 API | 支持向机器人所在的群聊、拥有机器人可用性的用户单聊内发送消息卡片。
[发送仅特定人可见的消息卡片](https://open.feishu.cn/document/ukTMukTMukTM/uETOyYjLxkjM24SM5IjN) | 服务端 API | 用于机器人在群会话中发送仅指定用户可见的消息卡片。卡片上将展示 **仅对你可见** 标识。
[删除仅特定人可见的消息卡片](https://open.feishu.cn/document/ukTMukTMukTM/uITOyYjLykjM24iM5IjN) | 服务端 API | 配合发送临时卡片使用，用于销毁不需要的临时消息。
[延时更新消息卡片](https://open.feishu.cn/document/ukTMukTMukTM/uMDO1YjLzgTN24yM4UjN) | 服务端 API | 用于交互组件的回传交互场景。当用户在卡片上操作交互组件后，如服务端无法在 3s 内返回更新卡片内容，可先返回空值，并在 30 分钟内调用此接口延时更新卡片内容。
[更新应用发送的消息卡片](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/patch) | 服务端 API | 用于更新已发送的消息卡片内容，可以更新应用发送的 14 天内的消息。  
**注意事项**：**注意**：不要与 **延时更新消息卡片** 接口混用。
[sendMessageCard](https://open.feishu.cn/document/uYjL24iN/uUjN5UjL1YTO14SN2kTN) | 客户端 API  
必须在小程序或网页应用中调用 | 能以登录用户身份向指定会话发送消息卡片。发送前会对登录用户弹出二次确认弹窗，预览待发送的卡片内容。
