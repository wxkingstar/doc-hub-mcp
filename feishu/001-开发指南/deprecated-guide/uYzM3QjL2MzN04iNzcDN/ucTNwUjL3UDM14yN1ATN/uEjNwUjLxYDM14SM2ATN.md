<!--
title: 了解卡片结构
id: 6907569742387691522
fullPath: /ukTMukTMukTM/uEjNwUjLxYDM14SM2ATN
updatedAt: 1731382032000
source: https://open.feishu.cn/document/common-capabilities/message-card/message-cards-content/card-structure/card-content
-->
# 了解卡片结构

飞书开放平台为消息卡片定义了结构化的组件与样式。你可以通过 JSON 描述定义样式精美、可交互的卡片内容，在消息卡片的 JSON 描述中，主要由卡片标题 `header`、卡片内容 `elements｜i18n_elements` 、卡片属性 `config` 以及卡片跳转链接 `card_link` 四种参数组成。本文主要介绍这些用于定义卡片结构的参数信息。


:::warning
该文档为历史消息卡片文档，已不再维护。了解对应新版文档，参考[卡片 JSON 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-structure)。
:::

## 参数说明

消息卡片 JSON 描述包含的参数说明如下：

:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width:15%">参数</md-th>
            <md-th style="width:15%">是否必填</md-th>
            <md-th style="width:35%">示例值</md-th>
            <md-th style="width:35%">说明</md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>
                header
            </md-td>
            <md-td>
                否
            </md-td>
            <md-td>
```json
{
    "header": {
        "title": {
            "tag": "plain_text",
            "content": "This is header"
        },
        "template": "red"
    }
}
```
            </md-td>
            <md-td>用于配置卡片的标题。关于标题组件的详情，可参见[标题](/ssl:ttdoc/ukTMukTMukTM/ukTNwUjL5UDM14SO1ATN)。</md-td>
        </md-tr>
        <md-tr>
            <md-td>
                elements<br>i18n_elements
            </md-td>
            <md-td>
                是
            </md-td>
            <md-td>
```json
{
    "elements": [
        {
            "tag": "div",
            "text": {
                "tag": "lark_md",
                "content": "**🗳工单来源：**\n报事报修"
            }
        },
        {
            "tag": "div",
            "text": {
                "content": "这是一段普通文本😄",
                "tag": "plain_text"
            }
        },
        {
            "tag": "hr"
        },
        {
            "tag": "img",
            "img_key": "img_v2_041b28e3-5680-48c2-9af2-497ace79333g",
            "alt": {
                "tag": "plain_text",
                "content": ""
            },
            "mode": "fit_horizontal",
            "preview": true
        },
        {
            "tag": "markdown",
            "content": "markdown文字"
        },
        {
            "tag": "note",
            "elements": [
                {
                    "tag": "plain_text",
                    "content": "备注信息"
                }
            ]
        },
        {
            "tag": "column_set",
            "flex_mode": "none",
            "background_style": "grey",
            "columns": [
                {
                    "tag": "column",
                    "width": "weighted",
                    "weight": 1,
                    "vertical_align": "top",
                    "elements": []
                }
            ]
        }
    ]
}
```
            </md-td>
            <md-td>
卡片的正文内容，支持配置多语言。如果需要配置多语言环境时，需要将 `elements` 替换为 `i18n_elements`，并且还需要同时对卡片标题进行多语言配置。详情可参见[配置多语言内容](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/configure-multilingual-content)。
              
在卡片的正文内容中，支持添加以下属性：
              
* **column_set**：多列布局，可以横向排布多个列容器，在列内纵向自由组合图文内容，解决多列内容对齐问题，并实现了灵活的图文混排。详情参见[多列布局](/ssl:ttdoc/ukTMukTMukTM/ucTNwUjL3UDM14yN1ATN/column-set)。
* **div**：内容模块，以格式化的文本为主体，支持混合图片、交互组件的富文本内容。详情参见[内容模块](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/common-components-and-elements#6bdb3f37)。
* **markdown**：使用 Markdown 标签构造富文本内容。详情参见 [Markdown](/ssl:ttdoc/ukTMukTMukTM/uADOwUjLwgDM14CM4ATN)。
* **hr**：模块之间的分割线。详情参见[分割线](/ssl:ttdoc/ukTMukTMukTM/uQjNwUjL0YDM14CN2ATN)。
* **img**：用于展示图片的组件。详情参见[图片](/ssl:ttdoc/ukTMukTMukTM/uUjNwUjL1YDM14SN2ATN)。
* **note**：备注组件，用于展示卡片内的次要信息。详情参见[备注](/ssl:ttdoc/ukTMukTMukTM/ucjNwUjL3YDM14yN2ATN)。
* **actions**：交互模块。使用交互组件可以实现消息卡片与用户之间的信息交互。详情参见[交互模块](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/common-components-and-elements#60ddc64e)。
            </md-td>
        </md-tr>
        <md-tr>
            <md-td>
                config
            </md-td>
            <md-td>
                否
            </md-td>
            <md-td>
```json
{
    "config": {
        "enable_forward": true,
        "update_multi":true
    }
}
```
            </md-td>
            <md-td>
                用于配置卡片的属性，包括是否允许被转发、是否为共享卡片等。详情参见[配置卡片属性](/ssl:ttdoc/ukTMukTMukTM/uAjNwUjLwYDM14CM2ATN)。
            </md-td>
        </md-tr>
              <md-tr>
            <md-td>
                card_link
            </md-td>
            <md-td>
                否
            </md-td>
            <md-td>
```json
{
  "card_link": { 
      "url": "https://www.baidu.com",
      "android_url": "https://developer.android.com/",
      "ios_url": "https://developer.apple.com/",
      "pc_url": "https://www.windows.com"
  }
}
```
            </md-td>
            <md-td>
                用于指定卡片整体的跳转链接。详情参见[消息卡片跳转链接](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/common-components-and-elements#7bfe6950)。
            </md-td>
        </md-tr>
    </md-tbody>
</md-table>
:::

## 卡片示例

以下提供了包含 `header`、`elements`、`config` 和 `card_link` 参数的消息卡片 JSON 示例配置。

:::note
以下配置仅作为示例。在实际使用过程中，需注意将内容修改为实际值。例如，image 元素的 `img_key` 字段。
:::

```json
{
  "config": {
    "enable_forward": true
  },
  "card_link": {
    "url": "https://www.baidu.com",
    "android_url": "https://developer.android.com/",
    "ios_url": "https://developer.apple.com/",
    "pc_url": "https://www.windows.com"
  },
  "header": {
    "title": {
      "tag": "plain_text",
      "content": "Title"
    },
    "template": "blue"
  },
  "elements": [
    {
      "tag": "div",
      "text": {
        "tag": "plain_text",
        "content": "This is a text."
      }
    },
    {
      "tag": "note",
      "elements": [
        {
          "tag": "img",
          "img_key": "img_v2_041b28e3-5680-48c2-9af2-497ac1234",
          "alt": {
            "tag": "plain_text",
            "content": ""
          }
        },
        {
          "tag": "plain_text",
          "content": "Click on the card to jump"
        }
      ]
    }
  ]
}
```

对应的卡片内容图示如下：

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/066ef2eba9be583b44c844483594bdb0_JVQHzu4obX.png?height=254&lazyload=true&maxWidth=400&width=788)