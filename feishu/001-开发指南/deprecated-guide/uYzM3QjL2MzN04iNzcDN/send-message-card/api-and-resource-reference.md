<!--
title: 支持发送消息卡片的 OpenAPI
id: 6991756415594233858
fullPath: /ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/api-and-resource-reference
updatedAt: 1724163155000
source: https://open.feishu.cn/document/common-capabilities/message-card/api-and-resource-reference
-->
# 支持发送消息卡片的 OpenAPI

当你构建完成消息卡片后，便可通过开放平台提供的 OpenAPI 发送消息卡片至目标会话。通过本文你可以了解哪些 OpenAPI 可以用来发送消息卡片。
:::warning
该文档为历史消息卡片文档，已不再维护。了解对应新版文档，参考[发送卡片](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/send-feishu-card)。
:::
:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width: 25%">OpenAPI</md-th>
<md-th style="width: 25%">类型</md-th>
<md-th style="width: 50%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)</md-td>
<md-td>服务端 API</md-td>
<md-td>
支持向机器人所在的群聊、拥有机器人可用性的用户单聊内发送消息卡片。
</md-td>
</md-tr>

<md-tr>
<md-td>[发送仅特定人可见的消息卡片](/ssl:ttdoc/ukTMukTMukTM/uETOyYjLxkjM24SM5IjN)</md-td>
<md-td>服务端 API</md-td>
<md-td>
用于机器人在群会话中发送仅指定用户可见的消息卡片。卡片上将展示 **仅对你可见** 标识。
</md-td>
</md-tr>

<md-tr>
<md-td>[删除仅特定人可见的消息卡片](/ssl:ttdoc/ukTMukTMukTM/uITOyYjLykjM24iM5IjN)</md-td>
<md-td>服务端 API</md-td>
<md-td>
配合发送临时卡片使用，用于销毁不需要的临时消息。
</md-td>
</md-tr>

<md-tr>
<md-td>[延时更新消息卡片](/ssl:ttdoc/ukTMukTMukTM/uMDO1YjLzgTN24yM4UjN)</md-td>
<md-td>服务端 API</md-td>
<md-td>
用于交互组件的回传交互场景。当用户在卡片上操作交互组件后，如服务端无法在 3s 内返回更新卡片内容，可先返回空值，并在 30 分钟内调用此接口延时更新卡片内容。
</md-td>
</md-tr>

<md-tr>
<md-td>[更新应用发送的消息卡片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/patch)</md-td>
<md-td>服务端 API</md-td>
<md-td>
用于更新已发送的消息卡片内容，可以更新应用发送的 14 天内的消息。

<md-alert type="tip" icon="none">
**注意**：不要与 **延时更新消息卡片** 接口混用。
</md-alert>
</md-td>
</md-tr>

<md-tr>
<md-td>[sendMessageCard](/ssl:ttdoc/uYjL24iN/uUjN5UjL1YTO14SN2kTN)</md-td>
<md-td>客户端 API
  
必须在小程序或网页应用中调用</md-td>
<md-td>
能以登录用户身份向指定会话发送消息卡片。发送前会对登录用户弹出二次确认弹窗，预览待发送的卡片内容。
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

