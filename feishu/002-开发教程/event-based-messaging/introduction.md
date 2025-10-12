<!--
title: 简介
id: 6999971130074447900
fullPath: /home/event-based-messaging/introduction
updatedAt: 1720776160000
source: https://open.feishu.cn/document/event-based-messaging/introduction
-->
# 简介

飞书的事件订阅能力可以帮助你及时感知系统中的数据变化，并快速响应事件。本教程以新员工入群场景为例，介绍如何在新员工入群时发送欢迎消息。关于事件订阅的更多信息，参见[事件订阅概述](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)。

## 实现效果

当新人加入群聊后，群会自动推送如下图所示的欢迎消息。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a6d369cffc485c52f4301c302e45120f_FpQjmHkG82.png?height=1000&lazyload=true&maxWidth=700&width=1640)

## 实现原理

基于事件的消息发送实现原理如下图所示。创建一个企业自建应用并配置事件订阅服务，在有用户入群时，应用发送订阅的事件至本地服务端请求地址，服务端接收数据后，获取用户、群相关的信息，然后通过消息服务向目标群发送欢迎消息。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fc4bcf68d133d9c7165b317270b4915c_jKcfJYJmaS.png?height=843&lazyload=true&maxWidth=700&width=1640)

## 使用到的 API 与事件

### OpenAPI

:::html
<md-table>
<md-thead>
<tr>

<md-th style="width: 40%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
<md-th style="width: 30%;">权限要求（满足任一）</md-th>
<md-th style="width: 30%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)**</md-td></md-th>

</tr>

</md-thead>
<md-tbody>

<md-tr>

<md-td>
<md-text type="field-name" >[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)

`POST` https://open.feishu.cn/open-apis/im/v1/messages

</md-text>
</md-td>

<md-td>
<md-perm name="im:message:send_as_bot" desc="以应用的身份发消息" tags="">以应用的身份发消息</md-perm>
<md-perm name="im:message" desc="获取与发送单聊、群组消息" tags="">获取与发送单聊、群组消息</md-perm>
<md-perm name="im:message:send" desc="发送消息V2" support_app_types="custom,isv" tags="history,offline">发送消息V2</md-perm>
</md-td> 

<md-td>
<md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>
</md-td>

</md-tr>

</md-tbody>
</md-table>
:::

### 事件

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width: 40%;"><md-td>**[事件](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)**</md-td></md-th>
<md-th style="width: 60%;">权限要求<md-tooltip type="info">订阅该事件所需的权限，开启其中任意一项权限即可订阅</md-tooltip></md-th>
</md-tr>
</md-thead>
<md-tbody>
<md-tr>
<md-td>
<md-text type="field-name" >[用户进群](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-member-user/events/added)

`im.chat.member.user.added_v1`</md-text>
</md-td>
<md-td>
<md-perm name="im:chat.members:read" desc="查看群成员" support_app_types="custom,isv" tags="">查看群成员</md-perm>
<md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
<md-perm name="im:chat:readonly" desc="获取群组信息" support_app_types="custom,isv" tags="">获取群组信息</md-perm>
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::