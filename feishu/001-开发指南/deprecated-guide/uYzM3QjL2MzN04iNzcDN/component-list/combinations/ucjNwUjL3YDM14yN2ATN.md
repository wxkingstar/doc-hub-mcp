<!--
title: 备注
id: 6907569742383775746
fullPath: /ukTMukTMukTM/ucjNwUjL3YDM14yN2ATN
updatedAt: 1724163467000
source: https://open.feishu.cn/document/common-capabilities/message-card/message-cards-content/notes-module
-->
# 备注

你可以使用备注组件展示卡片内的一些次要信息，用于辅助说明。备注组件支持设置小尺寸图片以及文本。
:::warning
该文档为历史消息卡片文档，已不再维护。了解对应新版文档，参考[备注](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/content-components/note)。
:::
## 组件展示

在消息卡片搭建工具中，备注效果如下图所示。

- 支持调整小图标以及悬浮提示内容。

	图标 key（示例格式：`img_v2_xxxx`）获取方式：调用[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口，上传用于发送消息的图片并获取 image_key。
    
- 支持修改备注的文本内容。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1e3c6bb4d07e06ffa0d7b92c81a5383f_5jB9BbtoHD.png?height=1414&lazyload=true&maxWidth=600&width=2882)

## 参数说明

备注组件包含的参数说明如下表所示。

:::html
<md-table>
    <md-thead>
    <md-tr>
        <md-th style="width: 15%">参数</md-th>
        <md-th style="width: 15%">是否必填</md-th>
        <md-th style="width: 15%">类型</md-th>
        <md-th style="width: 55%">说明</md-th>
    </md-tr>
    </md-thead>
    <md-tbody>
    <md-tr>
        <md-td>tag</md-td>
        <md-td>是</md-td>
        <md-td>String</md-td>
        <md-td>备注组件的标识。固定取值：note</md-td>
    </md-tr>
    <md-tr>
        <md-td>elements</md-td>
        <md-td>是</md-td>
        <md-td>Struct</md-td>
        <md-td>
备注信息。支持添加：
- 文本组件的数据结构，构成备注信息的文本内容。数据结构参见[文本组件](/ssl:ttdoc/ukTMukTMukTM/uUzNwUjL1cDM14SN3ATN)。
- image 元素的数据结构，构成备注信息的小尺寸图片。数据结构参见 [image](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/common-components-and-elements#a974e363) 元素。
          
示例值：
```json
"elements": [{
		"tag": "img",
		"img_key": "img_v2_041b1234",
		"alt": {
			"tag": "plain_text",
			"content": "image demo"
		}
	},
	{
		"tag": "plain_text",
		"content": "Note module"
	}
]       
```
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

JSON 示例配置：

```json
{
  "elements": [
    {
      "tag": "note",
      "elements": [
        {
          "tag": "img",
          "img_key": "img_v2_041b28e3-5680-48c2-9af2-497ace79333g",
          "alt": {
            "tag": "plain_text",
            "content": "这是备注图片1"
          }
        },
        {
          "tag": "plain_text",
          "content": "备注信息1"
        },
        {
          "tag": "img",
          "img_key": "img_v2_041b28e3-5680-48c2-9af2-497ace79333g",
          "alt": {
            "tag": "plain_text",
            "content": "这是备注图片"
          }
        },
        {
          "tag": "plain_text",
          "content": "备注信息2"
        }
      ]
    }
  ]
}
```

对应的效果：

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b7b454e5b692d0a13850c00c5ea9d1df_FVSc9E9PNh.png?height=90&lazyload=true&maxWidth=400&width=804)