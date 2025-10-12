<!--
title: 简介
id: 7238450199739432964
fullPath: /home/quickly-develop-interactive-cards/introduction
updatedAt: 1736394827000
source: https://open.feishu.cn/document/historical-version/quickly-develop-interactive-cards/introduction
-->
# 简介

本文介绍如何利用飞书卡片进行消息回复、处理用户在卡片上的操作，以及如何更新已发送的飞书卡片。通过本教程，你可以了解如何快速构建一个简单的交互式飞书卡片，并了解飞书卡片支持的事件回调处理机制。为了方便演示，本教程以一个模拟审批机器人进行交互。
- 提供一个审批机器人，用文字及消息卡片回复用户指令消息。
- 响应用户在卡片上进行的请假、加班操作，并更新飞书卡片。
:::warning
由于历史迭代，本教程已不再更新，推荐参考最新教程[开发一个卡片交互机器人](/ssl:ttdoc/uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/develop-a-card-interactive-bot/introduction)。
:::
## 什么是飞书卡片

飞书卡片是应用的一种能力，包括构建卡片内容所需的组件和发送卡片所需的能力，并提供了可视化搭建工具。飞书卡片能够将结构化的内容以卡片形式嵌入至聊天消息、群置顶消息、链接预览等飞书协作场景中，提升信息传递效率。用户可以在卡片上通过简单交互完成业务处理，让业务系统触手可及。简而言之，飞书卡片可使应用的使用体验从“人找应用”，演变为“应用找人”。更多内容参考[飞书卡片概述](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-overview)。

## 操作流程

本文涉及的操作流程如下图所示：


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/2df2331be23a90a1d2a089ef3f729d86_K5FcTy3K5X.png?height=208&lazyload=true&maxWidth=753&width=853)

## 实现效果

发送「审批」消息后，在自动回复的审批卡片上可点击 **请假** 或 **加班** 按钮，查看卡片回复：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/57d0b6db1e20d5d30d87456f81be8666_5NNyUrDz4v.gif?height=1166&lazyload=true&maxWidth=600&width=1778)
## 使用到的 OpenAPI 列表
:::html
<md-table>

<md-thead>

<tr>

<md-th style="width: 50%;"><md-td>**[方法 (API)](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)**</md-td></md-th>

<md-th style="width: 30%;">权限要求（满足任一）</md-th>

<md-th style="width: 20%;"><md-td>**[访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)（选择其一）**</md-td></md-th>

</tr>

</md-thead>

<md-tbody>

<md-tr>

<md-td>

<md-text type="field-name" > [发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)  
  
  `POST`  /open.feishu.cn/open-apis/im/v1/messages
  </md-text>

</md-td>
  
<md-td>
<md-perm name="im:message:send_as_bot" desc="以应用的身份发消息" tags="">以应用的身份发消息</md-perm>
<md-perm name="im:message" desc="获取与发送单聊、群组消息" tags="">获取与发送单聊、群组消息</md-perm>
<md-perm name="im:message:send" desc="发送消息V2" support_app_types="custom,isv" tags="history,offline">发送消息V2</md-perm>
</md-td>
  
<md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>
</md-td>
</md-tr>
<md-tr>

<md-td>

<md-text type="field-name" > [延时更新消息卡片](/ssl:ttdoc/ukTMukTMukTM/uMDO1YjLzgTN24yM4UjN)  
  
  `POST`  /open-apis/interactive/v1/card/update
  </md-text>

</md-td>
  
<md-td>
  /
</md-td>
  
<md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>
</md-td>
</md-tr>
