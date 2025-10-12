<!--
title: 职级资源介绍
id: 7388063981457063940
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_level/job-level-resources-introduction
updatedAt: 1720167691000
source: https://open.feishu.cn/document/contact-v3/job_level/job-level-resources-introduction
-->
# 职级资源介绍

职级是用户属性之一，你可以根据企业组织架构的需要，添加职级，例如 P1、P2、P3、P4。后续在创建用户或者更新用户时，可以为用户设置指定的职级属性。使用职级 API，你可以创建、更新、删除或查询职级。

## 字段说明

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:30%">名称</md-th>
<md-th style="width:20%">类型</md-th>
<md-th style="width:50%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>name</md-td>
<md-td>string</md-td>
<md-td>职级名称。</md-td>
</md-tr>

<md-tr>
<md-td>description
</md-td>
<md-td>string</md-td>
<md-td>职级描述。</md-td>
</md-tr>
  
<md-tr>
<md-td>order</md-td>
<md-td>int</md-td>
<md-td>职级排序，可设置 100 ~ 100000 的自然数。数值越小，排序越靠前。创建职级时如果不传入该值，则默认职级排在列表最后位（即 order 取值为当前职级列表内的最大值）。
</md-td>
</md-tr>

<md-tr>
<md-td>status</md-td>
<md-td>boolean</md-td>
<md-td>
是否启用职级。
  
**可能值有**：
- true：启用
- false：不启用
</md-td>
</md-tr>
  
<md-tr>
<md-td>job_level_id</md-td>
<md-td>string</md-td>
<md-td>职级 ID。</md-td>
</md-tr>

<md-tr>
<md-td>i18n_name</md-td>
<md-td>i18n_content[]</md-td>
<md-td>多语言职级名称。</md-td>
</md-tr>
  
<md-tr>
<md-td>└ locale</md-td>
<md-td>string</md-td>
<md-td>语言版本。例如：
- zh_cn：中文
- en_us：英语
- ja_jp：日语
</md-td>
</md-tr>

<md-tr>
<md-td>└ value</md-td>
<md-td>string</md-td>
<md-td>语言版本对应的职级名称。</md-td>
</md-tr>
  
<md-tr>
<md-td>i18n_description</md-td>
<md-td>i18n_content[]</md-td>
<md-td>多语言职级描述。</md-td>
</md-tr>

<md-tr>
<md-td>└ locale</md-td>
<md-td>string</md-td>
<md-td>语言版本。例如：
- zh_cn：中文
- en_us：英语
- ja_jp：日语</md-td>
</md-tr>
  
<md-tr>
<md-td>└ value</md-td>
<md-td>string</md-td>
<md-td>语言版本对应的职级描述。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

## 数据示例

```json
{
	"name": "高级专家",
	"description": "公司内部中高级职称，有一定专业技术能力的人员",
	"order": 200,
	"status": true,
	"job_level_id": "mga5oa8ayjlp9rb",
	"i18n_name": [{
		"locale": "zh_cn",
		"value": "中文名称"
	}],
	"i18n_description": [{
		"locale": "zh_cn",
		"value": "中文描述"
	}]
}
```