---
title: "消息与群组部分API增加不支持的消息类型校验"
source_url: https://open.feishu.cn/document/faq/breaking-change/unsupported-message-type-verification
---
最后更新于 2022-12-09

# 消息与群组部分API增加不支持的消息类型校验
### 变更事项
为了保证产品体验能力一致：
- 当通过[Pin消息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/pin/create)接口操作**系统消息(system)**、**红包(hongbao)**、**视频通话(video_chat)** 类型的消息时，将返回 230054 错误码；
- 当通过[撤回消息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/delete)接口操作**系统消息(system)**、**红包(hongbao)** 类型的消息时，将返回 230054 错误码；
- 当通过[回复消息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/reply)接口操作**系统消息(system)** 类型的消息时， 将返回 230054 错误码；
- 当通过[添加消息表情回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/create)接口操作**系统消息(system)** 类型的消息时，将返回 231017 错误码。
**系统消息**是由系统发送、用于公共通知的消息，如群组内 "xxx邀请yy加入群聊"、"xxx将群名称a修改为b"。

> 预计生效时间：2022-12-07<br>

### 潜在影响
若应用在此之前调用上述接口时没有针对不支持的消息类型进行过滤，接口将会返回相应的错误码。

### 解决方案
开发者可以根据[消息体](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/intro)中的`msg_type`字段进行过滤，消息类型请详见[接收消息Content](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/im-v1/message/events/message_content)。

<br> 如需适配协助，请洽技术支持。
