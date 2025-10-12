<!--
title: 打开任务详情页
id: 7033372732280979459
fullPath: /uAjLw4CM/uYjL24iN/applink-protocol/supported-protocol/open-todo/open-the-task-details-page
updatedAt: 1723603332000
source: https://open.feishu.cn/document/common-capabilities/applink-protocol/supported-protocol/open-todo/open-the-task-details-page
-->
# 打开任务详情页
::: note 
从飞书 4.1.0 版本开始支持。
:::

## 使用场景
唤起任务详情页。

**什么是「任务」**：[任务](https://www.feishu.cn/hc/zh-CN/articles/798052212434)是一个轻量级的团队任务管理工具，可有效帮助成员：集中管理任务、追踪任务进度、推进团队协作。
## 协议
[https://applink.feishu.cn/client/todo/detail](https://applink.feishu.cn/client/todo/detail)

##  参数
| 字段         | 必填           | 说明        | 
| --------- | --------------- | -------   | 
|guid|是         |全局唯一的 taskId（global unique ID）,通过[飞书任务的 OpenAPI](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/task/get) 获取
|mode|否         |打开模式，未填写时默认在 IM 场景打开详情页面。枚举值包括：<br>- `app`：在任务 tab 中打开详情页面。<br>|

## 使用示例
####  1. 打开 guid=xxx 且 mode=app 的任务

`https://applink.feishu.cn/client/todo/detail?guid=xxx&mode=app`


