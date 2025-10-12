<!--
title: 序列资源介绍
id: 7388064118618390529
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_family/job-family-resource-introduction
updatedAt: 1720167723000
source: https://open.feishu.cn/document/contact-v3/job_family/job-family-resource-introduction
-->
# 序列资源介绍

序列是用户属性之一，用来为不同的用户定义不同的工作类型，例如产品、研发、测试、运营。你可以根据企业实际需要添加序列，后续在创建或更新用户时，为用户设置相匹配的序列。通过序列 API，你可以创建、更新、查询、删除序列信息。

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
<md-td>序列名称，当前租户内唯一。取值支持中、英文以及符号。
  
**数据校验规则**：`1` 字符 ~ `100` 字符 
</md-td>
</md-tr>

<md-tr>
<md-td>description</md-td>
<md-td>string</md-td>
<md-td>序列描述。</md-td>
</md-tr>
  
<md-tr>
<md-td>parent_job_family_id</md-td>
<md-td>string</md-td>
<md-td>上级序列 ID。序列支持设置多个层级，即一个序列下可以添加子序列。</md-td>
</md-tr>
  
<md-tr>
<md-td>status</md-td>
<md-td>boolean</md-td>
<md-td>是否启用序列。只有已启用的序列可以设置为用户属性。

**可选值有**：
- true：启用
- false：禁用
</md-td>
</md-tr>
  
<md-tr>
<md-td>i18n_name</md-td>
<md-td>i18n_content[]</md-td>
<md-td>多语言序列名称。</md-td>
</md-tr>
  
<md-tr>
<md-td>└ locale</md-td>
<md-td>string</md-td>
<md-td>语言版本。可选值有：

- zh_cn：中文
- en_us：英语
- ja_jp：日语</md-td>
</md-tr>

<md-tr>
<md-td>└ value</md-td>
<md-td>string</md-td>
<md-td>语言版本对应的值。</md-td>
</md-tr>
  
<md-tr>
<md-td>i18n_description</md-td>
<md-td>i18n_content[]</md-td>
<md-td>多语言序列描述。</md-td>
</md-tr>
  
<md-tr>
<md-td>└ locale</md-td>
<md-td>string</md-td>
<md-td>语言版本。可选值有：

- zh_cn：中文
- en_us：英语
- ja_jp：日语</md-td>
</md-tr>

<md-tr>
<md-td>└ value</md-td>
<md-td>string</md-td>
<md-td>语言版本对应的值。</md-td>
</md-tr>

<md-tr>
<md-td>job_family_id</md-td>
<md-td>string</md-td>
<md-td>序列 ID，即序列在当前租户内的唯一标识。</md-td>
</md-tr>
  

</md-tbody>
</md-table>
:::

## 数据示例

```json
{
	"name": "产品",
	"description": "负责产品策略制定的相关工作",
	"parent_job_family_id": "mga5oa8ayjlpzjq",
	"status": true,
	"i18n_name": [
		{
			"locale": "zh_cn",
			"value": "多语言内容"
		}
	],
	"i18n_description": [
		{
			"locale": "zh_cn",
			"value": "多语言内容"
		}
	],
	"job_family_id": "mga5oa8ayjlpkzy"
}
```