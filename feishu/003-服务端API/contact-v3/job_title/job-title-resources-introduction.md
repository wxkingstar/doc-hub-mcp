<!--
title: 职务资源介绍
id: 7388062632412692482
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_title/job-title-resources-introduction
updatedAt: 1720167803000
source: https://open.feishu.cn/document/contact-v3/job_title/job-title-resources-introduction
-->
# 职务资源介绍

职务是用户属性之一，通过职务 API 仅支持查询职务信息。如需管理职务，则需要由企业管理员登录 [管理后台](https://feishu.cn/admin)，在 **组织架构** > **字段管理** > **字段设置** 中找到 **职务** 字段，在职务字段详情页中进行管理。


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f01b909faeabf541eac35ae9c6ee78fc_AcsVugZqnw.png?height=936&lazyload=true&maxWidth=600&width=2872)

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
<md-td>job_title_id</md-td>
<md-td>string</md-td>
<md-td>职务 ID。</md-td>
</md-tr>

<md-tr>
<md-td>name</md-td>
<md-td>string</md-td>
<md-td>职务名称。</md-td>
</md-tr>
  
<md-tr>
<md-td>i18n_name</md-td>
<md-td>i18n_content[]</md-td>
<md-td>多语言职务名称。</md-td>
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
<md-td>多语言版本对应的值。</md-td>
</md-tr>

<md-tr>
<md-td>status</md-td>
<md-td>boolean</md-td>
<md-td>是否启用职务。只有已启用的职务可以生效于用户的职务属性中。

**可选值有**：
  
- true：启用
- false：禁用
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

## 数据示例

```json
{
	"job_title_id": "b5565c46b749",
	"name": "高级工程师",
	"i18n_name": [{
		"locale": "zh_cn",
		"value": "专家"
	}],
	"status": true
}
```