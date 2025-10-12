---
title: "历史版本的发送消息 OpenAPIs 不再支持机器人不在群回复用户@消息"
source_url: https://open.feishu.cn/document/platform-notices/breaking-change/reply-to-mentioned-messages-when-not-in-the-group
---
最后更新于 2024-08-20

# 历史版本的发送消息 OpenAPIs 不再支持机器人不在群回复用户@消息
### 变更事项
为保障产品功能体验的一致性，以下两个历史版本的发送消息接口将不再支持机器人不在群回复用户的@消息。
- v3版本：`/open-apis/message/v3/send`
- v4版本：`/open-apis/message/v4/send`

> 是否跟随客户端版本：不跟版<br> 
> 预计生效时间：2024-08-21<br> 

### 潜在影响
若发送消息时不在群中，将收到`10030`错误码。

### 解决方案
可在客户端或使用[将用户或机器人拉入群聊](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-members/create) 接口将机器人拉入对应的群聊。

<br>

若你未能及时确认并调整，管控生效后，可能会导致相关场景受损。<br>
开放平台预计在 **2024年08月21日** 完成升级，请于 **2024年08月21日前** 确认以上信息，并根据情况做好相应适配。<br>
<br> 如需适配协助，请联系开放平台技术支持。
