<!--
title: 实现思路
id: 7468198364433072131
fullPath: /uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/develop-an-echo-bot/development-steps
updatedAt: 1751546486000
source: https://open.feishu.cn/document/develop-an-echo-bot/development-steps
-->
# 实现思路

如果你已成功开发自动回复机器人，你可参考本文档了解开发该应用的实现思路。

:::note

要调研如何实现你的开发场景，你可通过 AI 搜索快速找到实现思路，提升开发效率，点击 [立即体验](https://open.feishu.cn/search?from=header&page=1&pageSize=10&q=%E6%88%91%E7%BB%99%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%8F%91%E6%B6%88%E6%81%AF%E5%90%8E%EF%BC%8C%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%BB%99%E6%88%91%E5%9B%9E%E5%A4%8D%E7%9B%B8%E5%90%8C%E7%9A%84%E6%B6%88%E6%81%AF&topicFilter=)。
:::
要开发一个自动回复机器人，如下流程图，该机器人需要实现以下核心功能：


1. 订阅 [接收消息事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive) (`im.message.receive_v1`) 。订阅接收消息事件后，用户向机器人发送消息会触发该事件，之后飞书会将消息内容推送到你的服务端，你可在事件体中获取用户发送的消息内容、 `message.message_id` 和 `message.chat_type` 等参数。
1. 根据返回事件体的 `message.chat_type` 参数，判断当前的消息类型是单聊还是群聊：
    - 如果是单聊，则调用[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create) 接口，将用户发送的消息内容原样返回；
    - 如果是群聊，则基于 `message.message_id` 调用[回复消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/reply)接口，将消息内容原样回复。



	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a94f8a890001e040676b63a1343bd621_E0Kk9k2ZN1.png?height=1324&lazyload=true&maxWidth=500&width=1210)