<!--
title: 导出云文档概述
id: 7089034521211224066
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/drive-v1/export_task/export-user-guide
updatedAt: 1729508238000
source: https://open.feishu.cn/document/server-docs/docs/drive-v1/export_task/export-user-guide
-->
# 导出云文档概述

导出云文档指将飞书文档、电子表格、多维表格导出为本地文件，包括 Word、Excel、PDF、CSV 格式。本文档介绍导出云文档的完整步骤。

## 注意事项

你需及时下载导出的文件。在导出任务结束 10 分钟后，导出的文件将被删除，导致无法下载。

## 启用水印说明

当企业内部启用水印时：
- 使用应用身份（tenant_access_token）进行导出，将会使用应用 ID 作为水印，比如 `cli_a2c2xxxxxxxxd01b`；
- 使用用户身份（user_access_token）进行导出，将会使用用户标识作为水印。

## 支持导出的文件类型

OpenAPI 支持将以下飞书云文档导出为以下文件类型。
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 50%;">飞书云文档</md-th>
      <md-th>支持导出的文件类型</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>
-   [新版在线文档](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-overview)（docx）
- [旧版在线文档](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/docs/upgraded-docs-access-guide/upgraded-docs-openapi-access-guide)（doc）（历史版本，已不推荐使用）
      </md-td>
      <md-td>
- 扩展名为 docx 的 Microsoft Word 文档
<md-alert type="tip">导出为 Microsoft Word 文档时，文档内资源大小总计不可超过 1 GB，否则将导出失败。</md-alert>
        
- 扩展名为 pdf 的文件
<md-alert type="tip">导出为 PDF 文件时，文档内资源大小总计不可超过 128 MB，否则将导出失败。
</md-alert>
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>
- [多维表格](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/bitable-overview)<br>
- [电子表格](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)
      </md-td>
      <md-td>
- 扩展名为 xlsx 的 Microsoft Excel 表格<br>
- 扩展名为 csv 的文件
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

## 导出步骤

### 步骤一：创建导出任务

调用[创建导出任务](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/export_task/create)接口，创建导出云文档的任务并获取导出 ID。

:::html
<md-alert type="tip">
如果要导出类型为知识库（`wiki`）的文档，你需要先通过[获取知识空间节点信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/get_node)得到节点对应的`obj_token`（文档 Token）和`obj_type`（文档类型），然后再创建导出任务。
</md-alert>
:::


### 步骤二：查询导出任务结果

调用[查询导出任务结果](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/export_task/get)接口，根据步骤一返回的导出任务 ID（`ticket`）获取导出结果和导出文件信息。

### 步骤三：下载导出文件

调用[下载导出文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/export_task/download)接口，根据步骤二返回的导出文件的 `token` 下载导出文件。

:::html
<md-alert type="warn">
你需及时下载导出的文件。在导出任务结束 10 分钟后，导出的文件将被删除，导致无法下载。
</md-alert>
:::
