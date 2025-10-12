<!--
title: 工单消息内容
id: 6907569744333897729
fullPath: /ukTMukTMukTM/ukDO2YjL5gjN24SO4YjN
updatedAt: 1660810486000
source: https://open.feishu.cn/document/server-docs/helpdesk-v1/ticket-management/ticket-message/ticket-message-content
-->
# 工单消息内容

**message_type: 支持text，post, image, 不支持其他消息类型. content字段取决于类型**<br> 
text's content:
|参数|说明|
|--|--|
|content|消息内容
|&emsp;∟msg_type|text
|&emsp;∟content|text content
post's content:
|参数|说明|
|--|--|
|content|消息内容
|&emsp;∟msg_type|post 
|&emsp;∟content|post content
|&emsp;∟image_keys|post message image keys
image's content:
|参数|说明|
|--|--|
|content|消息内容
|&emsp;∟msg_type|image 
|&emsp;∟image_key|image key


