<!--
title: 简介
id: 6999971130074595356
fullPath: /home/interactive-session-based-robot/introduction
updatedAt: 1736394869000
source: https://open.feishu.cn/document/historical-version/interactive-session-based-robot/introduction
-->
# 简介

本教程介绍如何通过开放平台的应用能力配置一个飞书互动机器人，该机器人可以基于用户会话内容回复匹配的消息，适用于企业百科、IT 服务台等业务场景。
:::warning
由于历史迭代，本教程已不再更新，推荐参考最新教程[开发一个卡片交互机器人](/ssl:ttdoc/uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/develop-a-card-interactive-bot/introduction)。
:::
## 实现效果

以企业百科场景为例，如下图所示，用户向机器人发送关键词后，机器人会匹配到关键词相关的百科并进行回复。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d72ad5bc3276f880fe6d15d460e7e0e4_KFA5Bx09du.png?height=1000&lazyload=true&maxWidth=700&width=1640)


## 实现原理

开放平台的企业自建应用提供了机器人、事件订阅相关能力。通过配置事件订阅，使开放平台在收到会话消息时可以向服务端请求地址发送事件回调数据，服务端接收数据后通过预设的业务逻辑处理会话信息，并通过消息服务发送回应消息。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/dfd4fde746c02438bd077451a03e7821_3blD3aK6tg.png?height=1078&lazyload=true&maxWidth=700&width=1640)


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
<md-text type="field-name" >[回复消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/reply)

   `POST` https://open.feishu.cn/open-apis/im/v1/messages/:message_id/reply
  
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
<md-text type="field-name" >[接收消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive)

`im.message.receive_v1`</md-text>
            </md-td>
            <md-td>
<md-perm name="im:message.group_at_msg:readonly" desc="接收群聊中@机器人消息事件" support_app_types="custom,isv" tags="">接收群聊中@机器人消息事件</md-perm>
<md-perm name="im:message.group_msg" desc="获取群组中所有消息（敏感权限）" support_app_types="custom,isv" tags="">获取群组中所有消息（敏感权限）</md-perm>
<md-perm name="im:message.p2p_msg:readonly" desc="读取用户发给机器人的单聊消息" support_app_types="custom,isv" tags="">读取用户发给机器人的单聊消息</md-perm>
<md-perm name="im:message.p2p_msg" desc="获取用户发给机器人的单聊消息（历史版本）" support_app_types="custom,isv"  tags="history,offline">获取用户发给机器人的单聊消息（历史版本）</md-perm>
<md-perm name="im:message.group_at_msg" desc="获取用户在群组中@机器人的消息（历史版本）" support_app_types="custom,isv"  tags="history,offline">获取用户在群组中@机器人的消息（历史版本）</md-perm>
<md-perm name="im:message.group_msg:readonly" desc="获取群聊中所有的用户聊天消息" support_app_types="custom" tags="history,offline">获取群聊中所有的用户聊天消息</md-perm>
            </md-td>
        </md-tr>

    </md-tbody>
</md-table>
:::