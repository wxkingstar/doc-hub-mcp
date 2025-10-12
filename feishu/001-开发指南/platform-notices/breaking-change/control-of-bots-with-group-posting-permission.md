<!--
title: 群发言权限对机器人的管控
id: 7217857336761237532
fullPath: /uAjLw4CM/ugTN1YjL4UTN24CO1UjN/breaking-change/control-of-bots-with-group-posting-permission
updatedAt: 1680575653000
source: https://open.feishu.cn/document/faq/breaking-change/control-of-bots-with-group-posting-permission
-->
# 群发言权限对机器人的管控
### 变更事项
若群聊开启 **仅群主和管理员可发言** 或 **指定群成员可发言**，但机器人不具备发言权限时，发送或回复消息将返回 **230035** 错误码。
### 变更接口
受影响的接口包括：[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)、[回复消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/reply)以及老版本的[发送文本消息](/ssl:ttdoc/ukTMukTMukTM/uUjNz4SN2MjL1YzM)、[发送富文本消息](/ssl:ttdoc/ukTMukTMukTM/uMDMxEjLzATMx4yMwETM)、[发送消息卡片](/ssl:ttdoc/ukTMukTMukTM/uYTNwUjL2UDM14iN1ATN)、[发送图片消息](/ssl:ttdoc/ukTMukTMukTM/uIDMxEjLyATMx4iMwETM)、[发送群名片](/ssl:ttdoc/ukTMukTMukTM/ucjMxEjL3ITMx4yNyETM)。

### 预计生效时间
2023年4月17日

### 潜在影响
若机器人在群中不具备发言权限时，发送消息或回复消息接口将报错。


### 解决方案
1. 联系群主或群管理员将群设置中“谁可以在此群发言”设置为“所有群成员”；
2. 使用群主身份将机器人[指定为群管理员](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-managers/add_managers)；

### 联系方式
如需适配协助，请联系技术支持。