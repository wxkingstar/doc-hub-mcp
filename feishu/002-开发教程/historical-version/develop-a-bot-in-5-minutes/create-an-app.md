<!--
title: 概览
id: 6975811364980637698
fullPath: /home/develop-a-bot-in-5-minutes/create-an-app
updatedAt: 1735895777000
source: https://open.feishu.cn/document/historical-version/develop-a-bot-in-5-minutes/create-an-app
-->
# 概览
  
:::warning
由于历史迭代，本教程已不再更新，推荐使用最新的教程 [开发一个回声机器人](/ssl:ttdoc/uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/develop-an-echo-bot/introduction)。
:::

本文介绍如何快速开发一个简单的应用机器人，基于飞书开放平台的 [事件订阅](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM) 能力，完成对 [接收消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive) 事件的订阅及处理，实现在机器人单聊界面接收并自动回复用户消息。通过该教程，您可以了解开发及发布应用的完整流程，并理解事件订阅的基本原理。

## 什么是机器人?

  
机器人（bot）是一种可以与用户在聊天中交互的应用，可以用拟人化的身份自动推送消息，或在聊天里与你进行简单的交互。借助机器人能力，你可以将企业系统接入飞书，实现**自动拉群报警**、**公司重要事项通知**、**信息收集**、**数据日报推送**等功能，无需切换多个系统，一站式高效处理。也可以与（云文档、多维表格、任务、日历等）丰富的飞书服务端能力自由组合，实现**周报管理、最佳会议时间推荐**等工作流自动化。
更多介绍信息，参考[机器人介绍](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/bot-v3/bot-overview)。

## 操作流程
  
本文涉及的操作流程如下图：

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9009db0d7151750d87f0b77659690d3d_J0MxDDQbfS.png?height=208&lazyload=true&width=733)

## 实现效果

  
按照本教程操作最终可以实现如下图的示意效果。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/3148b6f220a9dd1afd87a41ed45406e8_vL6Nf3lD27.png?height=1048&lazyload=true&maxWidth=750&width=1600)