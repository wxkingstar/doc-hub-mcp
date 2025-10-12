<!--
title: 实现思路
id: 7457433042430492676
fullPath: /uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/develop-a-card-interactive-bot/development-steps
updatedAt: 1741693953000
source: https://open.feishu.cn/document/develop-a-card-interactive-bot/development-steps
-->
# 实现思路

如果你已成功开发卡片交互机器人，你可参考本文档了解开发该应用的实现思路。

:::html
<md-alert type="tip">
要调研如何实现你的开发场景，你可通过 AI 搜索快速找到实现思路，提升开发效率，点击 [立即体验](https://open.feishu.cn/search?from=header&lang=zh-CN&page=1&pageSize=10&q=%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%8D%A1%E7%89%87%E4%BA%A4%E4%BA%92%E6%9C%BA%E5%99%A8%E4%BA%BA%EF%BC%8C%E7%94%A8%E6%88%B7%E5%8F%AF%E4%BB%A5%E5%9F%BA%E4%BA%8E%E5%8D%A1%E7%89%87%E6%8F%90%E4%BA%A4%E6%95%B0%E6%8D%AE%E5%B9%B6%E6%9B%B4%E6%96%B0%E5%8D%A1%E7%89%87&topicFilter=)。
</md-alert>
:::

要开发一个卡片交互机器人，如下流程图，该机器人需要实现以下核心功能：

1. 订阅 [用户进入与机器人的会话](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-access_event/events/bot_p2p_chat_entered)（`im.chat.access_event.bot_p2p_chat_entered_v1`）事件。用户进入与机器人单聊会话后会触发该事件。之后飞书会将事件体推送到你的服务端。你可在事件体中获取用户 ID 等参数。

3. 订阅 [接收消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive) (`im.message.receive_v1`) 事件。用户向机器人发送消息、在群聊中 @ 机器人时会触发该事件，之后飞书会将事件体推送到你的服务端，你可在事件体中获取用户 ID、群组 ID 等参数。
3. 订阅 [机器人自定义菜单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/application-v6/bot/events/menu)（`application.bot.menu_v6`）事件。当用户点击机器人菜单时触发该事件，之后飞书会将事件体推送到你的服务端，你可在事件体中获取用户 ID 等参数。
4. 订阅[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)（card.action.trigger）回调。用户与卡片交互后会触发该回调，之后飞书会将回调推送到你的服务端。你可在回调中获取用户提交的数据、回调发生的时间等信息。



	
	
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f85d50db961044ebeee7b5fe3d93b676_2QnLReayUo.png?height=1764&lazyload=true&width=4062)