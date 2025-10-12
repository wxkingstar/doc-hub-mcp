<!--
title: 通用组件与元素
id: 7312637705938911234
fullPath: /ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/common-components-and-elements
updatedAt: 1702606336000
source: https://open.feishu.cn/document/deprecated-guide/message-card/component-list/common-components-and-elements
-->
# 通用模块与元素

在消息卡片中，一些模块和元素可以被包含在其他多个组件当中使用，本文汇总了这些通用模块与元素，供你参考了解。

## 交互模块（action）

消息卡片的交互组件包括：按钮（button）、列表选择器（seletMenu）、折叠按钮组（overflow）、日期选择器（datePicker）。以上组件在单独使用时均包含在交互模块中，交互模块的标识为 `"tag": "action"`。

:::note
如果可交互的组件被绑定在内容模块（div）的 `extra` 字段，则无需包含在交互模块（action）中。
:::

交互模块的参数说明如下表所示。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width: 15%">参数</md-th>
<md-th style="width: 15%">是否必须</md-th>
<md-th style="width: 15%">类型</md-th>
<md-th style="width: 55%">说明</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>tag</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>
交互模块的标识。固定取值：action
</md-td>
</md-tr>

<md-tr>
<md-td>actions</md-td>
<md-td>是</md-td>
<md-td>数组</md-td>
<md-td>
添加可交互的组件。支持添加的组件如下，你可以跳转至对应的组件文档查看参数配置详情。
- [按钮（button）](/ssl:ttdoc/ukTMukTMukTM/uEzNwUjLxcDM14SM3ATN)
- [列表选择器（selectMenu）](/ssl:ttdoc/ukTMukTMukTM/uIzNwUjLycDM14iM3ATN)
- [折叠按钮组（overflow）](/ssl:ttdoc/ukTMukTMukTM/uMzNwUjLzcDM14yM3ATN)
- [日期选择器（datePicker）](/ssl:ttdoc/ukTMukTMukTM/uQzNwUjL0cDM14CN3ATN)
</md-td>
</md-tr>

<md-tr>
<md-td>layout</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>
设置窄屏自适应布局方式。取值:
- bisected：二等分布局，每行两列交互元素。
- trisection：三等分布局，每行三列交互元素。
- flow：流式布局，元素会按自身大小横向排列并在空间不够的时候折行。
</md-td>
</md-tr>
</md-tbody>
</md-table>
:::

交互组件配置示例：

```json
{
  "elements": [
    {
      "tag": "action",
      "actions": [
        {
          "tag": "button",
          "text": {
            "tag": "plain_text",
            "content": "primary"
          },
          "type": "primary",
          "multi_url": {
            "url": "https://open.feishu.cn/document",
            "android_url": "",
            "ios_url": "",
            "pc_url": ""
          }
        },
        {
          "tag": "button",
          "text": {
            "tag": "plain_text",
            "content": "default"
          },
          "url": "https://open.feishu.cn/document",
          "type": "default"
        },
        {
          "tag": "button",
          "text": {
            "tag": "plain_text",
            "content": "danger"
          },
          "url": "https://open.feishu.cn/document",
          "type": "danger"
        }
      ]
    }
  ]
}
```

卡片效果展示：

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0e393b3928e49b1c57cf9907f9c32fd2_TlDvcGXBpo.png?height=126&lazyload=true&maxWidth=400&width=770)

## 内容模块（div）

消息卡片的以下组件均包含在内容模块中，内容模块的标识为 `"tag": "div"`。
- 文本
- 双列文本
- 文本 + 按钮
- 文本 + 图片
- 文本 + 列表选择器
- 文本 + 折叠按钮组
- 文本 + 日期选择器

内容模块的参数说明如下表所示。

:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 15%">参数</md-th>
            <md-th style="width: 15%">是否必须</md-th>
            <md-th style="width: 15%">类型</md-th>
            <md-th style="width: 55%">说明</md-th>
        </md-tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>tag</md-td>
            <md-td>是</md-td>
            <md-td>String</md-td>
            <md-td>内容模块的标识。固定取值：div</md-td>
        </md-tr>
        <md-tr>
            <md-td>text</md-td>
            <md-td>是</md-td>
            <md-td>Object</md-td>
            <md-td>
单个文本内容，参数配置详情可参见[文本组件](/ssl:ttdoc/ukTMukTMukTM/uUzNwUjL1cDM14SN3ATN)。

JSON 示例配置：
             
```JSON
{
 "tag": "div",
 "text": {
  "tag": "plain_text",
  "content": "Content module"
 }
}
```
<md-alert type="tip" icon="none">
**说明**：在内容模块中，`text` 和 `fields` 字段需至少设置一个。              
</md-alert>
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>fields</md-td>
            <md-td>否</md-td>
            <md-td>Object</md-td>
            <md-td>多列文本，参数配置详情可参见[双列文本](/ssl:ttdoc/ukTMukTMukTM/uYzNwUjL2cDM14iN3ATN)。
              
JSON 示例配置：
              
```JSON
{
 "tag": "div",
 "fields": [
  {
   "text": {
    "tag": "lark_md",
    "content": "**module:**\nContent module（div）"
   },
   "is_short": true
  },
  {
   "text": {
    "tag": "lark_md",
    "content": "**function:**\nNew function"
   },
   "is_short": true
  }
 ]
}
```
<md-alert type="tip" icon="none">
**说明**：在内容模块中，`text` 和 `fields` 字段需至少设置一个。              
</md-alert>
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>extra</md-td>
            <md-td>否</md-td>
            <md-td>Object</md-td>
            <md-td>
附加元素，添加后展示在文本右侧。支持附加的元素：
- [图片（image）](/ssl:ttdoc/ukTMukTMukTM/uAzNwUjLwcDM14CM3ATN)
- [按钮（button）](/ssl:ttdoc/ukTMukTMukTM/uEzNwUjLxcDM14SM3ATN)
- [列表选择器（selectMenu）](/ssl:ttdoc/ukTMukTMukTM/uIzNwUjLycDM14iM3ATN)
- [折叠按钮组（overflow）](/ssl:ttdoc/ukTMukTMukTM/uMzNwUjLzcDM14yM3ATN)
- [日期选择器（datePicker）](/ssl:ttdoc/ukTMukTMukTM/uQzNwUjL0cDM14CN3ATN)
              
JSON 示例配置：
              
```JSON
// 如需使用该 JSON 示例，则注意需要手动清除 // 开头的注释
{
 "tag": "div",
 "extra": {
  "tag": "img", // 附加一张图片
  "img_key": "f32****5cf7",
   "alt": {
   "tag":
   "plain_text",
   "content": "alt_content"
  }
 }
}
```
            </md-td>
        </md-tr>
    </md-tbody>
</md-table>
:::

在内容模块（div）中通过 `text` 或 `fields` 参数展示文本内容，通过 `extra` 参数附加 `image` 元素或者 `button`、`overflow`、`selectMenu`、`datePicker` 可交互元素。JSON 示例配置如下：

```json
// 如需使用该 JSON 示例，则注意需要手动清除 // 开头的注释
{
    "elements": [
        {
            "text": {
                "tag": "plain_text", // 一行文本
                "content": "Content module"
            },
            "tag": "div",
            "fields": [ // 多行文本（is_short = false）
                {
                    "text": {
                        "tag": "lark_md",
                        "content": "**module:**\nContent module（div）"
                    },
                    "is_short": false
                },
                {
                    "text": {
                        "tag": "lark_md",
                        "content": "**function:**\nNew function"
                    },
                    "is_short": false
                }
            ],
            "extra": { // 附加一张图片
                "tag": "img",
                "img_key": "f32******************5cf7",
                "alt": {
                    "tag": "plain_text",
                    "content": "alt_content"
                }
            }
        }
    ]
}
```

卡片效果展示：

![图片](https://p9-arcosite.byteimg.com/tos-cn-i-goo7wpa0wc/4994428dde36495da7f5876aa3f090b4~tplv-goo7wpa0wc-image.image?height=297&lazyload=true&maxWidth=400&width=606)

## 图片元素（image）

image 是图片元素，可用于内容模块的 `extra` 字段或备注组件的 `elements` 字段中。

:::note
- 放置在内容组件 `extra` 字段的图片尺寸固定为 64 × 64。
- 放置在备注组件 `elements` 字段的图片尺寸固定为 16 × 16。
:::

image 元素的参数说明如下表所示。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width: 15%">参数</md-th>
<md-th style="width: 15%">是否必须</md-th>
<md-th style="width: 15%">类型</md-th>
<md-th style="width: 55%">说明</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>tag</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>
image 元素的标识。固定取值：img
</md-td>
</md-tr>

<md-tr>
<md-td>img_key</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>
图片资源 image_key。你可以调用[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口，上传一张用于发送消息的图片，获取返回值中的 image_key。
</md-td>
</md-tr>

<md-tr>
<md-td>alt</md-td>
<md-td>是</md-td>
<md-td>Struct</md-td>
<md-td>
鼠标悬浮提示文字。文字内容由文本组件构成（仅支持文本组件的 `plain_text` 模式），详细说明可参见[文本组件](/ssl:ttdoc/ukTMukTMukTM/uUzNwUjL1cDM14SN3ATN)。
</md-td>
</md-tr>

<md-tr>
<md-td>preview</md-td>
<md-td>否</md-td>
<md-td>Boolean</md-td>
<md-td>
点击后是否放大图片。
- true（默认）：放大
- false：不放大。如果你的卡片配置了消息卡片跳转链接（card_link），则建议配置为 `preview = false`，使用户点击卡片图片时也能响应 card_link 的跳转链接。
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

使用示例：

```json
// 如需使用该 JSON 示例，则注意需要手动清除 // 开头的注释
{
  "elements": [
    {
      "tag": "div",
      "text": {
        "tag": "plain_text",
        "content": "image element"
      },
      "extra": {
        "tag": "img", // image 元素
        "img_key": "asdfxxxxxxxxx1234", // image_key
        "alt": { // 鼠标悬浮提示文字
          "tag": "plain_text",
          "content": "hover图片后的tips文案"
        }
      }
    },
    {
      "tag": "hr"
    },
    {
      "tag": "note",
      "elements": [
        {
          "tag": "img", // image 元素
          "img_key": "asdfxxxxxxxxx1234", // image_key
          "alt": { // 鼠标悬浮提示文字
            "tag": "plain_text",
            "content": "hover图片后的tips文案"
          }
        },
        {
          "tag": "plain_text",
          "content": "note"
        }
      ]
    }
  ]
}
```

卡片效果展示：

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c3ab380b17ee4d416aa4a8c3d206ac4e_IPujGHGW5I.png?height=270&lazyload=true&maxWidth=400&width=594)

## 消息卡片跳转链接（card_link）

`card_link` 用于指定卡片整体的点击跳转链接，可以配置默认链接，也可以分别为 PC 端、Android 端、iOS 端配置不同的跳转链接。

card_link 的参数说明如下表所示。

:::note
- 如果未配置 `pc_url`、`ios_url`、`android_url`，则默认跳转至 `url`。
- 如果配置了 `pc_url`、`ios_url`、`android_url`，则优先生效各端指定的跳转链接。
:::

| 参数         | 是否必须 | 描述                 |
| ------------ | ---- | -------------------- |
| url         | 是   | 默认的链接地址。       |
| pc_url      | 否   | PC 端的链接地址。      |
| ios_url     | 否   | iOS 端的链接地址。     |
| android_url | 否   | Android 端的链接地址。 |

使用示例：

```json
{
  "elements": [
    {
      "tag": "div",
      "text": {
        "content": "This is a text example",
        "tag": "plain_text"
      }
    }
  ],
  "header": {
    "template": "blue",
    "title": {
      "content": "This is a title",
      "tag": "plain_text"
    }
  },
  "card_link": {
    "url": "https://www.baidu.com",
    "android_url": "https://developer.android.com/",
    "ios_url": "https://developer.apple.com/",
    "pc_url": "https://www.windows.com"
  }
}
```

对应的消息卡片示例如下图所示。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c5fcef1cccc37fcd1c357dc0c7a77953_1HTy3hBxa9.png?height=218&lazyload=true&maxWidth=600&width=1328)

假如在 PC 端点击该示例卡片，会自动跳转到 pc_url 对应的地址。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/9219e7ec55737d0392c88b3dc1c1d5ef_JJ0K6jETNh.png?height=1384&lazyload=true&maxWidth=600&width=2842)

## 二次确认（confirm）

confirm 元素用于交互组件（按钮、列表选择器、折叠按钮组、日期选择器）的二次确认。二次确认的弹窗默认提供了确认和取消按钮，你只需要配置弹窗的标题与内容即可。

confirm 元素的参数说明如下表所示。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width: 15%">参数</md-th>
<md-th style="width: 15%">是否必须</md-th>
<md-th style="width: 15%">类型</md-th>
<md-th style="width: 55%">说明</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>title</md-td>
<md-td>是</md-td>
<md-td>Struct</md-td>
<md-td>
弹窗标题。由文本组件构成（仅支持文本组件的 plain_text 模式），详情参见[文本组件](/ssl:ttdoc/ukTMukTMukTM/uUzNwUjL1cDM14SN3ATN)。
</md-td>
</md-tr>

<md-tr>
<md-td>text</md-td>
<md-td>是</md-td>
<md-td>Struct</md-td>
<md-td>
弹窗内容。由文本组件构成（仅支持文本组件的 plain_text 模式），详情参见[文本组件](/ssl:ttdoc/ukTMukTMukTM/uUzNwUjL1cDM14SN3ATN)。
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

使用示例：

```json
"confirm":{
 	"title":{
 		"tag":"plain_text",
 		"content":"title"
 	},
 	"text":{
 		"tag":"plain_text",
 		"content":"content"
 	}
}
```

二次确认弹框样例：

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e2904de952f30f2d892d9880749f0a77_lq1MYAJKMa.png?height=304&lazyload=true&maxWidth=400&width=836)

## 选项元素（option）

option 是列表选择器（selectMenu）或折叠按钮组（overflow）组件中的选项元素。

option 元素参数说明如下表所示。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width: 15%">参数</md-th>
<md-th style="width: 15%">是否必须</md-th>
<md-th style="width: 15%">类型</md-th>
<md-th style="width: 55%">说明</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>text</md-td>
<md-td>否</md-td>
<md-td>Struct</md-td>
<md-td>
选项显示的内容。

- 基于文本组件的 plain_text 模式设置文本内容，详情参见[文本组件](/ssl:ttdoc/ukTMukTMukTM/uUzNwUjL1cDM14SN3ATN)。
- 当列表选择器（selectMenu）的模式为人员选择器（select_person）时，无需配置 `text` 字段，除此之外，其他场景中 `text` 字段必填。
</md-td>
</md-tr>

<md-tr>
<md-td>value</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>
回传参数值。当选项选中后，应用会将该值返回至消息卡片请求地址。
</md-td>
</md-tr>

<md-tr>
<md-td>url</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>
选项的跳转链接，仅支持在折叠按钮组（overflow）中设置。
<md-alert type="tip" icon="none">
**说明**：`url` 和 `multi_url` 字段必须且仅能填写其中一个。
</md-alert>
</md-td>
</md-tr>

<md-tr>
<md-td>multi_url</md-td>
<md-td>否</md-td>
<md-td>Struct</md-td>
<md-td>
选项的跳转链接,仅支持在折叠按钮组（overflow）中设置。支持按操作系统设置不同的链接，参数配置详情参见 **链接元素（url）**。
<md-alert type="tip" icon="none">
**说明**：`url` 和 `multi_url` 字段必须且仅能填写其中一个。
</md-alert>
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

使用示例：

```json
// 如需使用该 JSON 示例，则注意需要手动清除 // 开头的注释
{
  "elements": [
    {
      "tag": "action",
      "actions": [
        {
          "tag": "select_static",
          "placeholder": {
            "tag": "plain_text",
            "content": "default"
          },
          "value": {
            "key": "value"
          },
          "options": [ // 自定义的文本选项
            {
              "text": {
                "tag": "plain_text",
                "content": "text"
              },
              "value": "value"
            }
          ]
        }
      ]
    }
  ]
}
```

卡片效果展示：

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6e86652804a30c1b289fbe8eef1cd2ba_zNBRrsczCb.png?height=200&lazyload=true&maxWidth=600&width=1312)

## 链接元素（url）

url 元素用于设置默认跳转链接以及多端（支持 PC 端、Android 端、iOS 端）跳转链接。该元素可被添加到：

- [按钮（button）](/ssl:ttdoc/ukTMukTMukTM/uEzNwUjLxcDM14SM3ATN) 组件的 `multi_url` 字段。
- [Markdown](/ssl:ttdoc/ukTMukTMukTM/uADOwUjLwgDM14CM4ATN) 组件的 `href` 字段。此外 `lark_md` 类型的[文本组件](/ssl:ttdoc/ukTMukTMukTM/uUzNwUjL1cDM14SN3ATN)也支持设置 `href` 字段。

url 元素的参数说明如下表所示。

:::warning
**注意：**
<br>
- url 和各端的链接（android_url、ios_url、pc_url）必填其中一个。具体的跳转策略：
	- 只填写 url，未填写 android_url、ios_url、pc_url 时，默认跳转至 url。
	- 如果不填写 url，则必须完整填写 android_url、ios_url、pc_url 三个字段。
	- 如果同时填写了 url 和 android_url、ios_url、pc_url，优先跳转各端 url。

- 如果需要禁止某端进行跳转，可以将对应的参数值配置为 `lark://msgcard/unsupported_action`。
:::

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width: 15%">参数</md-th>
<md-th style="width: 15%">是否必须</md-th>
<md-th style="width: 15%">类型</md-th>
<md-th style="width: 55%">说明</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>url</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>
默认的跳转链接。
</md-td>
</md-tr>

<md-tr>
<md-td>android_url</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>
Android 端的跳转链接。
</md-td>
</md-tr>

<md-tr>
<md-td>ios_url</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>
iOS 端的跳转链接。
</md-td>
</md-tr>

<md-tr>
<md-td>pc_url</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>
PC 端的跳转链接。
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

### 在 button 组件中配置 url

在 button 的 `multi_url` 字段中设置默认 url 和各端的 url，示例配置如下：

```json
{
  "elements": [
    {
      "tag": "action",
      "actions": [
        {
          "tag": "button",
          "text": {
            "tag": "plain_text",
            "content": "demoButton"
          },
          "multi_url": {
            "url": "https://www.baidu.com",
            "android_url": "https://developer.android.com/",
            "ios_url": "https://developer.apple.com/",
            "pc_url": "https://www.windows.com"
          },
          "type": "primary"
        }
      ]
    }
  ]
}
```

### 在 markdown 组件中配置 url

1. 在 `content` 中使用 Markdown 语法定义链接 `[链接名称]($urlVal)`，其中 `$urlVal` 为变量，名称可自定义设置。
2. 在 `href` 字段中指定变量（例如 `urlVal`）对应的 url 元素实现多端跳转。

JSON 示例：

```json
{
  "elements": [
    {
      "tag": "markdown",
      "content": "Demo：[Click to jump]($urlDemo)\n",
      "href": {
        "urlVal": {
          "ios_url": "www.baidu.com",
          "pc_url": "www.baidu.com",
          "android_url": "www.baidu.com",
          "url": "www.baidu.com"
        }
      }
    }
  ]
}
```


### 在 lark_md 模式的文本组件中配置 url

`lark_md` 类型的文本组件支持设置 `href` 字段。配置方式为：

1. 在 `content` 中使用 Markdown 语法定义链接 `[链接名称]($urlVal)`，其中 `$urlVal` 为变量，名称可自定义设置。
2. 在 `href` 字段中指定变量（例如 `urlVal`）对应的 url 元素实现多端跳转。

JSON 示例：

```json
{
  "elements": [
    {
      "tag": "div",
      "text": {
        "tag": "lark_md",
        "content": "Demo: [Click to jump]($urlVal)",
        "href": {
          "urlVal": {
            "url": "https://www.baidu.com",
            "android_url": "https://developer.android.com/",
            "ios_url": "https://developer.apple.com/",
            "pc_url": "https://www.windows.com"
          }
        }
      }
    }
  ]
}
```

