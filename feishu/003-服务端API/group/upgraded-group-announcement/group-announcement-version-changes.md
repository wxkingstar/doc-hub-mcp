<!--
title: 新旧版本说明
id: 7472290559531220995
fullPath: /uAjLw4CM/ukTMukTMukTM/group/upgraded-group-announcement/group-announcement-version-changes
updatedAt: 1739793657000
source: https://open.feishu.cn/document/group/upgraded-group-announcement/group-announcement-version-changes
-->
# 新旧版本说明

飞书开放平台于 2024 年 12 月开放了新版群公告接口。本文介绍如何区分新旧版群公告，以及新旧版群公告所支持开放能力的差异。

## 新旧群公告区分

你可以通过调用[获取群公告基本信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement/get)接口，并根据接口返回的`announcement_type`字段对群公告版本进行区分。

| **群公告类别** | **群公告类型相关字段** | **概述文档** |
| -------- | ------------ | ----------|
| 新版群公告     | docx         | [新版群公告概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/group/upgraded-group-announcement/group-announcement-overview)|
| 旧版群公告     | doc          |[旧版群公告概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/im-v1/chat/chat-announcement/intro)|


## 新旧群公告接口区分

对于以下跟群公告内容相关的能力，新版群公告跟旧版群公告接口不同，不能混用。

| **能力** | **新版接口** | **旧版接口** |
|---|---|---|
| 获取群公告基本信息 |[获取群公告基本信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement/get)<br>| [获取群公告信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-announcement/get)  |
| 编辑群公告内容 | [在群公告中创建块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block-children/create) <br> [批量更新群公告块的内容](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block/batch_update) <br> [删除群公告中的块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block-children/batch_delete)| [更新群公告信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-announcement/patch) |
| 获取群公告富文本内容 | [获取群公告所有块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block/list)<br>[获取群公告块的内容](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block/get)<br>[获取所有子块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block-children/get) | [获取群公告信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-announcement/get) |



## 常见问题

### 1. 为什么不在旧版群公告 OpenAPI 基础上兼容新版群公告？

旧版群公告和新版群公告的底层格式和相关协议存在完全的差异，原来的数据结构和接口协议都无法实现兼容，因此需对接到新版群公告的接口。

### 2. 新版群公告是否同旧版群公告一样，使用 Location 来标记位置？

旧版群公告数据结构与旧版云文档数据结构相同，使用 Location 来标记位置，详情参考[旧版文档数据结构概述](/ssl:ttdoc/ukTMukTMukTM/uAzM5YjLwMTO24CMzkjN)。
在新版群公告 OpenAPI 中，没有 Location 的概念，这也是新版和旧版底层数据结构主要区别之一。新版群公告是基于 BlockID 及其 Parent Block ID 来定位的，可以将其看成是一棵 Block 树。
