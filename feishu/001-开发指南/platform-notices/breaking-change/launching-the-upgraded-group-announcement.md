<!--
title: 新版群公告上线说明
id: 7473758182609829907
fullPath: /uAjLw4CM/ugTN1YjL4UTN24CO1UjN/breaking-change/launching-the-upgraded-group-announcement
updatedAt: 1740130368000
source: https://open.feishu.cn/document/platform-notices/breaking-change/launching-the-upgraded-group-announcement
-->
# 新版群公告上线说明

## 变更事项

为了提升产品体验并充分利用云文档的优势，飞书群组上线了新版群公告，该功能将于 **2025 年 5 月 27 日**全面启用。届时，新群组的群公告将自动切换为新版，应用需接入新版群公告 OpenAPI，方可操作新建的群公告。[了解什么是新、旧版群公告](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/group/upgraded-group-announcement/group-announcement-version-changes)

## 潜在影响

**2025 年 5 月 27 日**起，新建群组中的群公告将切换为新版群公告。若应用未接入新版群公告 OpenAPI，则无法操作后续新建的群公告。存量群组中的群公告保持不变，仍为旧版群公告，应用仍需要使用旧版接口进行操作。

## 解决方案

应用操作群公告前，可通过调用[获取群公告基本信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement/get)接口，依据接口返回的`announcement_type`字段来区分群公告版本，`announcement_type`枚举如下：
| **announcement_type** | **群公告类别** | **概述文档**                                                                                                                           |
| ----------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------ |
| docx              | 新版群公告 | [新版群公告概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/group/upgraded-group-announcement/group-announcement-overview) |
| doc               | 旧版群公告 | [旧版群公告概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/im-v1/chat/chat-announcement/intro)|
若`announcement_type`为`docx`，则当前群公告为新版群公告，需调用新版群公告 OpenAPI 操作该群公告，新旧群公告的能力对应如下：
| **能力** | **新版接口（docx）** | **旧版接口（doc）** |
|---|---|---|
| 获取群公告基本信息 |[获取群公告基本信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement/get)<br>| [获取群公告信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-announcement/get)  |
| 编辑群公告内容 | [在群公告中创建块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block-children/create) <br> [批量更新群公告块的内容](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block/batch_update) <br> [删除群公告中的块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block-children/batch_delete)| [更新群公告信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-announcement/patch) |
| 获取群公告富文本内容 | [获取群公告所有块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block/list)<br>[获取群公告块的内容](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block/get)<br>[获取所有子块](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/chat-announcement-block-children/get) | [获取群公告信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-announcement/get) |
若`announcement_type`为`doc`，则当前群公告为旧版群公告。此时，应用需按原流程继续操作群公告。

更多帮助文档见：
- [新旧版本说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/group/upgraded-group-announcement/group-announcement-version-changes)
- [新版群公告概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/group/upgraded-group-announcement/group-announcement-overview)
- [群公告常见问题](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/group/upgraded-group-announcement/group-announcement-faqs)

**请务必及时确认以上信息。若应用需要操作后续新群组中的群公告，请及时接入新版群公告 OpenAPI 完成适配。若未在此前完成适配，应用的相关功能会受到影响。**

## 联系方式

如需适配协助，请联系开放平台技术支持。