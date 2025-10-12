<!--
title: 打开机器人会话
id: 6986995291975630852
fullPath: /uAjLw4CM/uYjL24iN/applink-protocol/supported-protocol/open-a-bot
updatedAt: 1651824945000
source: https://open.feishu.cn/document/common-capabilities/applink-protocol/supported-protocol/open-a-bot
-->
# 打开机器人会话
::: note 
从飞书 3.40.0 版本开始支持。
:::
## 使用场景
打开一个机器人的聊天窗。
如果访问用户没有机器人的可用性，将看到相关的引导提示。

## 协议
`https://applink.feishu.cn/client/bot/open`

##  参数

| 字段         | 必填           | 说明        | 
| --------- | --------------- | -------   | 
|**appId** |    是      | 机器人的appId | 

##  使用示例
打开一个机器人的聊天页面

`https://applink.feishu.cn/client/bot/open?appId=cli_9c21a4767c305107`