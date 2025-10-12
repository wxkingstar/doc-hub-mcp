<!--
title: 简介
id: 6999971130074431516
fullPath: /home/interactive-message-card-sending/introduction
updatedAt: 1736394890000
source: https://open.feishu.cn/document/historical-version/interactive-message-card-sending/introduction
-->
# 简介

飞书的消息卡片拥有交互能力。如果你的企业涉及内部系统审批流程，则可以将系统与飞书开放平台对接，当审批流创建后可以自动向审批人发送互动型消息卡片，在保障及时通知审批人的同时，审批人也可以直接通过消息卡片完成审批，提升工作效率。通过本教程，你可以了解如何通过互动型消息卡片高效处理业务审批。

:::warning
由于历史迭代，本教程已不再更新，推荐参考最新教程[开发一个卡片交互机器人](/ssl:ttdoc/uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/develop-a-card-interactive-bot/introduction)。

:::
## 实现效果

本教程以企业内部的审批场景为例，当系统产生审批流后，系统会向飞书内的审批人发送互动型消息卡片（如下图所示），审批人通过操作卡片即可高效处理业务审批。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9e55b2a9bfafa14a24c65692f4a6382a_UwXM4gmvun.png?height=1000&lazyload=true&maxWidth=700&width=1640)

## 实现原理

通过飞书开放平台的应用能力、消息服务、消息卡片实现快速处理审批流的能力，实现原理如下图所示。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4c872da874681a136958c9519f829b27_ti2ZoEZ4q1.png?height=1398&lazyload=true&maxWidth=700&width=1640)


## 使用到的 OpenAPI

本教程需要使用以下 OpenAPI 实现消息卡片的发送。

:::html
<md-table>
<md-thead>
<tr>

<md-th style="width: 40%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>
<md-th style="width: 30%;">权限要求（满足任一）</md-th>
<md-th style="width: 30%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>

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