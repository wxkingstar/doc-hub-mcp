<!--
title: 附件功能概述
id: 7297183031634444291
fullPath: /uAjLw4CM/ukTMukTMukTM/task-v2/attachment/attachment-feature-overview
updatedAt: 1699248264000
source: https://open.feishu.cn/document/task-v2/attachment/attachment-feature-overview
-->
# 附件功能概述
任务可以拥有附件。一个附件可以是任意类型的文件，如图片，PDF文档，zip文件等。附件不可以单独存在，必须与某种资源产生关联关系。目前支持关联附件的资源类型只有任务。因为附件不可单独存在，因此为新任务添加附件时，必须先调用[创建任务](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/task/create)接口，完成任务创建，再调用[上传附件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/attachment/upload)接口上传文件，并关联到新建的任务上。

* 使用[上传附件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/attachment/upload)可以一次性上传1个或多个附件并关联到某个资源上。
* 使用[列取附件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/attachment/list)可以列取一个资源的所有附件（支持分页）。
* 使用[获取附件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/attachment/get)可以获取一个具体的附件信息。
* 使用[删除附件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/attachment/delete)可以彻底删除一个附件。删除后的数据不可恢复。

附件依靠所关联的任务来鉴权：

* 如果调用身份对任务具有可读权限，则可以获取和下载附件；
* 如果调用身份对任务具有可编辑权限，可以上传附件并关联到该任务；
* 如果调用身份对任务具有可编辑权限，或者调用身份就是附件的上传者，则可以删除附件。

关于任务的权限可以参考[任务功能概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/task-v2/task/overview)种的“任务是如何鉴权的？”章节。