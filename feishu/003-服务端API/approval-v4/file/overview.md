<!--
title: 原生审批文件概述
id: 7125425410599813124
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/approval-v4/file/overview
updatedAt: 1745206977000
source: https://open.feishu.cn/document/server-docs/approval-v4/file/overview
-->
# 原生审批文件概述

原生审批文件提供的 API 主要用于上传审批表单控件内的文件。当审批表单中有图片或者附件控件时，开发者需要在调用[创建审批实例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/create)前，将传入图片或附件控件的文件上传到审批系统，系统会返回文件的 code，该 code 用于创建审批实例时为图片或附件控件赋值。

例如，以下是创建审批实例时，图片控件值示例，其中的 value 为图片 code。

```json
{
    "id":"widget1",
    "type":"image",
    "value": ["D93653C3-2609-4EE0-8041-61DC1D84F0B5"]
}
```

## 字段说明

:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: ;">名称</md-dt-th>
      <md-dt-th style="width: ;">类型</md-dt-th>
      <md-dt-th style="width: ;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	文件名（需包含文件扩展名）

**示例值**："文件.doc"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>

	<md-dt-td>
	文件类型

**示例值**："attachment"

**可选值有**：
<md-enum>
<md-enum-item key="attachment" >附件</md-enum-item>
<md-enum-item key="image" >图片</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >content</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >file</md-text>
	</md-dt-td>

	<md-dt-td>
	文件

**示例值**：123.doc
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::

## 数据示例
```json
{
	"name":"123.doc",
	"type":"attachment",
	"content":123.doc
}
```