<!--
title: 工作城市资源介绍
id: 7388063981457555460
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/contact-v3/work_city/work-city-resources-introduction
updatedAt: 1720167885000
source: https://open.feishu.cn/document/contact-v3/work_city/work-city-resources-introduction
-->
# 工作城市资源介绍

工作城市是用户属性之一，通过工作城市 API 仅支持查询工作城市信息。如需管理工作城市，则需要由企业管理员登录 [管理后台](https://feishu.cn/admin)，在 **组织架构** > **字段管理** > **字段设置** 中找到 **工作城市** 字段，在工作城市字段详情页中进行管理。


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e22e0532c19076860f27b5ca0e9449e9_0PVDZ9D0Vq.png?height=698&lazyload=true&maxWidth=600&width=2882)

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
<md-td>work_city_id</md-td>
<md-td>string</md-td>
<md-td>工作城市 ID。</md-td>
</md-tr>

<md-tr>
<md-td>name</md-td>
<md-td>string</md-td>
<md-td>工作城市名称。</md-td>
</md-tr>
  
<md-tr>
<md-td>i18n_name</md-td>
<md-td>i18n_content[]</md-td>
<md-td>多语言工作城市名称。</md-td>
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
<md-td>	
多语言版本对应的值。</md-td>
</md-tr>

<md-tr>
<md-td>status</md-td>
<md-td>boolean</md-td>
<md-td>是否启用工作城市。只有已启用的工作城市可以生效于用户的工作城市属性中。

**可选值有**：

- true：启用
- false：禁用</md-td>
</md-tr>

</md-tbody>
</md-table>
:::


## 数据示例

```json
{
	"work_city_id": "0dd1ec95f021",
	"name": "北京",
	"i18n_name": [{
		"locale": "zh_cn",
		"value": "北京"
	}],
	"status": true
}
```