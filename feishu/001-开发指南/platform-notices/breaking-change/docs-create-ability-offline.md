<!--
title: 旧版文档（Docs 1.0）创建能力下线说明
id: 7418794737010409500
fullPath: /uAjLw4CM/ugTN1YjL4UTN24CO1UjN/breaking-change/docs-create-ability-offline
updatedAt: 1728632555000
source: https://open.feishu.cn/document/platform-notices/breaking-change/docs-create-ability-offline
-->
# 旧版文档（Docs 1.0）创建能力下线说明

亲爱的开发者，你好！

飞书开放平台于 2022 年 6 月开放了新版文档接口。经过两年的稳定运行，新版文档接口已经证明了其强大的稳定性和可靠性。与旧版文档接口相比，新版文档接口开放了更多内容元素，可以满足更多复杂的业务需求。目前，大部分应用已经成功切换至新版文档，且反馈良好。

自新版文档接口上线后，旧版文档接口已停止迭代两年。这意味着旧版无法提供新功能和优化，其服务质量也无法持续得到保证。

为了持续提供高质量的服务，保障接口及服务的稳定性，我们决定在 **2024年12月27日** 下线旧版文档的创建能力，推动应用切换至使用新版文档。[了解什么是新、旧版文档](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/docs/upgraded-docs-access-guide/upgraded-docs-openapi-access-guide)

本次变更涉及以下接口：
| 接口名 | 变更事项 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| [创建旧版文档](/ssl:ttdoc/ukTMukTMukTM/ugDM2YjL4AjN24COwYjN)<br>/open-apis/doc/v2/create | 该接口将会下线，应用无法访问该接口继续创建旧版文档，需要切换至使用新版文档的[创建文档](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document/create)接口。 |
| [新建文件](/ssl:ttdoc/ukTMukTMukTM/uQTNzUjL0UzM14CN1MTN) <br>open-apis/drive/explorer/v2/file/:folderToken | 接口入参的`type`将不能填入`doc`来创建旧版文档，需要切换至使用新版文档的[创建文档](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document/create)接口。 |
| [创建知识空间节点](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space-node/create)<br>open-apis/wiki/v2/spaces/:space_id/nodes | 接口入参的`obj_type`将不能填入`doc`来创建旧版文档，需填`docx`创建新版文档。 |
| [复制文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/copy)<br>open-apis/drive/v1/files/:file_token/copy | 接口入参的`type`将不能填入`doc`来创建旧版文档类型的副本。若接口入参的`type`继续为`doc`，则创建的副本将变为新版文档。 |
| [复制文档](/ssl:ttdoc/ukTMukTMukTM/uYTNzUjL2UzM14iN1MTN)<br>open-apis/drive/explorer/v2/file/copy/files/:fileToken | 接口入参的`type`将不能填入`doc`来为旧版文档创建副本，需要切换至使用新版文档的[复制文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/copy)接口。 |
| [创建导入任务](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/import_task/create)<br>open-apis/drive/v1/import_tasks | 接口入参的`type`将不能填入`doc`来导入为旧版文档，需填 `docx`导入为新版文档。 |
请检查你的应用是否使用了上述接口创建旧版文档。如果你的应用仅使用了电子表格、多维表格、新版文档等其他类型云文档的创建接口，则不受此次旧版文档创建功能下线的影响，无需关注本次变更。

## 解决方案

可参照以下方式切换至创建新版文档：
| 使用的接口 | 解决方案 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| [创建旧版文档](/ssl:ttdoc/ukTMukTMukTM/ugDM2YjL4AjN24COwYjN)<br>/open-apis/doc/v2/create | 切换至使用新版文档的[创建文档](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document/create)接口。<br>（不支持带内容创建文档，你可通过导入、创建副本等方式实现带内容创建） |
| [新建文件](/ssl:ttdoc/ukTMukTMukTM/uQTNzUjL0UzM14CN1MTN)<br>open-apis/drive/explorer/v2/file/:folderToken | 切换至使用新版文档的[创建文档](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document/create)接口。 |
| [创建知识空间节点](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space-node/create)<br>open-apis/wiki/v2/spaces/:space_id/nodes | 接口入参的`obj_type`需填`docx`切换至创建新版文档。 |
| [复制文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/copy)<br>open-apis/drive/v1/files/:file_token/copy         | 以下任意一种方式均可：<br> 1. 手动对原旧版文档创建副本，此时副本文档为新版文档，使用复制后的新版文档继续完成后续的复制文件操作。此时，接口入参的`type`需填`docx`切换至复制新版文档。<br> 2. 创建一篇新版文档并将原旧版文档的内容手动复制进入新版文档中，使用新建的新版文档完成后续的复制文件操作。此时，接口入参的`type`需填`docx`切换至复制新版文档。<br> 3. 接口入参的`type`继续填`doc`，当接口返回的`type`为`docx`时，说明已经创建了新版文档类型的副本，此时可以调用[新版文档接口](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-overview)继续对副本文档进行操作。 |
| [复制文档](/ssl:ttdoc/ukTMukTMukTM/uYTNzUjL2UzM14iN1MTN)<br>open-apis/drive/explorer/v2/file/copy/files/:fileToken | 需要切换至使用新版文档的[复制文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/copy)接口。|
| [创建导入任务](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/import_task/create)<br>open-apis/drive/v1/import_tasks | 接口入参的`type`需填 `docx`导入为新版文档。 |
若应用需要查看、编辑新版文档，可参考[新旧文档接口区分](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/docs/upgraded-docs-access-guide/upgraded-docs-openapi-access-guide#d14e87c8)。

若应用需要使用云空间、权限、评论等其他云文档的开放能力，可参考[其它云文档能力对新旧文档的区分](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/docs/upgraded-docs-access-guide/upgraded-docs-openapi-access-guide#3545562e)。

更多帮助文档见：

- [新旧版本说明](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/docs/upgraded-docs-access-guide/upgraded-docs-openapi-access-guide)
- [新版文档接口概述](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-overview)
- [新版文档常见问题](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/faq)

## 时间安排

飞书云文档团队预计在 **2024年12月27日** 下线旧版文档的创建功能，请及时确认以上信息，如果应用使用了创建旧版文档的能力，请及时切换至使用新版文档。若未在此前完成适配，你应用的功能可能会受到影响。

## 联系方式

如需适配协助，请联系开放平台技术支持。