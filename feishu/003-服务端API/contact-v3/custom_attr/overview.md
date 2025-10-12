<!--
title: 自定义用户字段资源介绍
id: 6998437186321186844
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/contact-v3/custom_attr/overview
updatedAt: 1720168771000
source: https://open.feishu.cn/document/server-docs/contact-v3/custom_attr/overview
-->
# 自定义用户字段资源介绍

自定义用户字段的作用是方便企业基于自身的管理诉求，灵活设计用户信息。当用户默认包含的属性字段不满足企业管理组织架构所需时，企业可以为用户添加自定义字段。

## 资源类型

自定义用户字段分为多种类型，各类型说明如下表所示。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:25%">类型</md-th>
<md-th style="width:75%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>文本类型</md-td>
<md-td>纯文本的用户属性。</md-td>
</md-tr>

<md-tr>
<md-td>网页类型</md-td>
<md-td>包含文本和跳转链接的用户属性，设置该类型的用户属性时，需要设置网页标题（文本）和网页地址（URL），其中支持为桌面端设置独立的网页地址。</md-td>
</md-tr>
  
<md-tr>
<md-td>枚举类型</md-td>
<md-td>包含一个或多个选项的用户属性，例如 **员工类型** 字段，可以设置正式、外包、顾问等企业成员类型枚举值。当为用户设置属性时，可以在这些枚举值中选择。</md-td>
</md-tr>
  
<md-tr>
<md-td>图片类型</md-td>
<md-td>该类型与枚举类型相似，不同的是对应的选项数据必须是图片数据，用于在成员名片页展示其对应的图片。例如展示用户获取的勋章图标等。
<md-alert type="tip" icon="none">**说明**：图片类型内测中，如需了解可咨询开放平台技术支持。</md-alert>
</md-td>
</md-tr>
  
<md-tr>
<md-td>用户类型</md-td>
<md-td>该类型主要用于在成员名片页展示对企业其他人员的引用信息，从而实现成员名片页之间的跳转。例如将 **张三** 的 HRBP 字段展示为 **李四**，并支持点击跳转至李四的名片页。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

## 使用说明

目前，通讯录 API 仅支持查询企业自定义用户字段。如需管理企业的自定义字段，则需要企业管理员登录[管理后台](https://feishu.cn/admin/index)，在 **组织架构** > **字段管理** 页面进行管理操作。相关操作说明，可参见[配置自定义字段](https://www.feishu.cn/hc/zh-CN/articles/973209819304#tabs0|lineguid-78X2n)。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c0388a9af3234b6ac1531eb6f46f4fbb_m8CqrT4KOK.png?height=960&lazyload=true&maxWidth=600&width=2392)

如果在调用通讯录 API 时需要使用到自定义用户字段，则需要企业管理员登录[管理后台](https://feishu.cn/admin/index)，在 **组织架构** > **字段管理** 页面，进入 **字段设置** > **自定义字段** 页签内，点击 **API 调用设置**，并开启 **允许开放平台通讯录 API 调用** 开关。


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b0f2cc6e7bafff8fa7a6f4253fb1c6b5_GOcpzfLLw7.png?height=948&lazyload=true&maxWidth=600&width=2404)

##  字段说明
:::html
<md-table>
  <md-thead>
      <md-tr>
      <md-th style="width: 35%;">名称</md-th>
      <md-th style="width: 25%;">类型</md-th>
      <md-th style="width: 50%;">描述</md-th>
      </md-tr>
  </md-thead>
  <md-tbody>

<md-tr>
	<md-td>
	<md-text type="field-name" >items</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >custom_attr\[\]</md-text>
	</md-td>
	<md-td>
	自定义字段信息。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	自定义字段 ID。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >type</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	自定义字段类型。可选值有:
- `TEXT`：文本类型
- `HREF`：网页类型
- `ENUMERATION`：枚举类型
- `GENERIC_USER`：用户类型
- `PICTURE_ENUM`：图片类型
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >options</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >custom_attr_options</md-text>
	</md-td>
	<md-td>
	选项定义，当 type 取值为 `ENUMERATION` 或者 `PICTURE_ENUM` 时此项有值，用于列举所有可选项。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;&emsp;&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >default_option_id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	默认选项 ID。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;&emsp;&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >option_type</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	选项类型。可选值有：
- `TEXT`：文本选项
- `PICTURE`：图片选项
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;&emsp;&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >options</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >custom_attr_option\[\]</md-text>
	</md-td>
	<md-td>
	选项列表
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;&emsp;&emsp;&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	枚举类型选项 ID。 
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;&emsp;&emsp;&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >value</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	选项值。
      
- 当 option_type 为 `TEXT` 时，取值为文本值。
- 当 option_type 为 `PICTURE` 时，取值为图片链接。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;&emsp;&emsp;&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >name</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	图片名称，仅 option_type 为 `PICTURE`时有值。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >i18n_name</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >i18n_content\[\]</md-text>
	</md-td>
	<md-td>
	自定义字段的字段名称。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;&emsp;&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >locale</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	语言版本。
	</md-td>
</md-tr>


<md-tr>
	<md-td>
	&emsp;&emsp;&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >value</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	字段名。
	</md-td>
</md-tr>




  </md-tbody>
</md-table>
:::

##  数据示例
```json
 "items": [
     {
		"id": "C-6965457429001748507",
		"type": "TEXT",
		"options": {
			"default_option_id": "qasdefgr",
			"option_type": "TEXT",
			"options": [
				{
					"id": "qasdefgr",
					"value": "Option",
					"name": "Name"
				}
			]
		},
		"i18n_name": [
			{
				"locale": "zh_cn",
				"value": "专家"
			}
		]
    }
]
```