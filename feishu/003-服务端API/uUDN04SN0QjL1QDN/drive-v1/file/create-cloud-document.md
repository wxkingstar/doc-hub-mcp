<!--
title: 创建云文档
id: 7428499239353237507
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/create-cloud-document
updatedAt: 1729589863000
source: https://open.feishu.cn/document/docs/drive-v1/file/create-cloud-document
-->
# 创建云文档
云文档是飞书在线文档、电子表格、多维表格、知识库、云空间等产品的统称。你可参考以下接口文档创建目标云文档类型。

## 创建文档

:::html
<md-table>
<md-thead>
<tr>
<md-th style="width: 20%;">操作</md-th>
<md-th style="width: 80%;">文档地址</md-th>
</tr>
</md-thead>
<md-tbody>
  
<md-tr>
<md-td>
创建文档（docx）
</md-td>
<md-td>
[https://open.feishu.cn/document/server-docs/docs/docs/docx-v1/document/create](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-v1/document/create)
</md-td>
</md-tr>

<md-tr>
<md-td>
基于模板创建文档
</md-td>
<md-td>
[https://open.feishu.cn/document/server-docs/docs/drive-v1/file/copy](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/copy)
</md-td>
</md-tr>

</md-tbody>

</md-table>
:::

## 创建电子表格

:::html
<md-table>
<md-thead>
<tr>
<md-th style="width: 20%;">操作</md-th>
<md-th style="width: 80%;">文档地址</md-th>
</tr>
</md-thead>
<md-tbody>
  
<md-tr>
<md-td>
创建电子表格（sheet）
</md-td>
<md-td>
[https://open.feishu.cn/document/server-docs/docs/sheets-v3/spreadsheet/create](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet/create)
</md-td>
</md-tr>

<md-tr>
<md-td>
基于模板创建电子表格
</md-td>
<md-td>
[https://open.feishu.cn/document/server-docs/docs/drive-v1/file/copy](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/copy)
</md-td>
</md-tr>

</md-tbody>

</md-table>
:::

## 创建多维表格

:::html
<md-table>
<md-thead>
<tr>
<md-th style="width: 20%;">操作</md-th>
<md-th style="width: 80%;">文档地址</md-th>
</tr>
</md-thead>
<md-tbody>
  
<md-tr>
<md-td>
创建多维表格（bitable）
</md-td>
<md-td>
[https://open.feishu.cn/document/server-docs/docs/bitable-v1/app/create](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app/create)
</md-td>
</md-tr>

<md-tr>
<md-td>
基于模板创建电子表格
</md-td>
<md-td>
[https://open.feishu.cn/document/server-docs/docs/drive-v1/file/copy](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/copy)
</md-td>
</md-tr>

</md-tbody>

</md-table>
:::


### 常见问题

#### 1. 如何直接通过云文档模板创建云文档？

模板其实也是一篇云文档，可以先通过模板链接获取该模板的 token 作为文件 token，再调用 [复制文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/copy) 接口创建云文档。

示例：如下图，假定「工作周报」该模板的访问链接是 `https://{domain}/docx/ke6jdf477ohCVVxzANnc56abcef`，那么你可通过 `ke6jdf477ohCVVxzANnc56abcef` 这个 `document_id` 作为源文件 token 调用复制文件接口，创建一篇新文档。


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7a3f03605ba97f77371997814f9c38de_Nty18gpw48.png?height=373&lazyload=true&maxWidth=650&width=1272)

