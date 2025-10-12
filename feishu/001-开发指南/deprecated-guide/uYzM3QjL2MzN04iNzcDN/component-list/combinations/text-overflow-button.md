<!--
title: 文本 + 折叠按钮组
id: 7312637705938894850
fullPath: /ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/combinations/text-overflow-button
updatedAt: 1702626986000
source: https://open.feishu.cn/document/deprecated-guide/message-card/component-list/combinations/text-overflow-button
-->
# 文本 + 折叠按钮组

消息卡片搭建工具针对常用的消息推送场景提供了组合模块，便于你在工具内快速构建卡片内容。本文将介绍其中的文本 + 折叠按钮组。

## 模块组件

在消息卡片搭建工具中，文本 + 折叠按钮组模块如下图所示。该组合模块一般用于展示可交互的信息块，折叠按钮组支持配置回传交互或跳转交互。例如，在文本组件中提供功能简介，在按钮组中分别配置功能控制台跳转按钮、帮助文档跳转按钮以及启用功能按钮等。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b7cbb5935de6706ff0e423a0e08d124b_bHwmcAaROv.png?height=1418&lazyload=true&maxWidth=600&width=2882)

## 编辑组件

文本 + 折叠按钮组模块本质是一个内容模块（div），在内容模块中通过 `text` 参数设置文本组件、`extra` 参数设置折叠按钮组。关于内容模块的详细配置说明，可参见[内容模块](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/common-components-and-elements#6bdb3f37)。

JSON 示例配置如下：

```json
// 如需使用该 JSON 示例，则注意需要手动清除 // 开头的注释
{
  "elements": [
    {
      "tag": "div", // 内容模块
      "text": { // 文本组件
        "tag": "lark_md",
        "content": "ISV产品接入及企业自主开发，更好地对接现有系统，满足不同组织的需求。"
      },
      "extra": {
        "tag": "overflow", // 折叠按钮组
        "options": [
          {
            "text": {
              "tag": "plain_text",
              "content": "打开飞书应用目录"
            },
            "value": "appStore",
            "url": "https://app.feishu.cn"
          },
          {
            "text": {
              "tag": "plain_text",
              "content": "打开飞书开发文档"
            },
            "value": "document",
            "url": "https://open.feishu.cn"
          },
          {
            "text": {
              "tag": "plain_text",
              "content": "打开飞书官网"
            },
            "value": "document"
          }
        ]
      }
    }
  ]
}
```

### 文本组件

在搭建工具内选中组合模块的文本组件，在 **编辑卡片** 区域设置文本格式与内容。

:::note
支持在 JSON 配置中调整内容模块中包含的文本组件参数。关于文本组件的参数说明，可参见[文本组件](/ssl:ttdoc/ukTMukTMukTM/uUzNwUjL1cDM14SN3ATN)。
:::

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/13c85914b162c01eb3acdff1483bdfd6_UvKVynxDP4.png?height=1044&lazyload=true&maxWidth=600&width=1678)

### 折叠按钮组

在搭建工具内选中组合模块的折叠按钮组，在 **编辑卡片** 区域设置折叠按钮组的配置项。

:::note
支持在 JSON 配置中调整内容模块所附加的折叠按钮组参数，此外折叠按钮组为交互组件，支持配置回传交互或跳转交互，详细说明可参见[折叠按钮组（overflow）](/ssl:ttdoc/ukTMukTMukTM/uMzNwUjLzcDM14yM3ATN)。
:::

- **配置方式**：
    - **配置固定按钮组**：需要手动配置各个按钮的文本内容、回传参数值以及跳转交互。
        - **回传参数值**：后续当用户选中选项时，应用会向指定的消息卡片请求地址发送 HTTP POST 请求，请求中会包含按钮的回传参数值。
        - **配置跳转交互**：配置点击按钮后的跳转链接。支持开启差异化跳转，分别为 PC 端、Android 端、iOS 端配置不同的跳转链接。
    - **绑定按钮组变量**：需要绑定按钮组变量。关于卡片变量的使用说明，参见[配置卡片变量](/ssl:ttdoc/ukTMukTMukTM/ucTNwUjL3UDM14yN1ATN/configure-card-variables)。
- **配置回传交互**：配置回传参数的名称与值，后续当用户点击按钮后，应用会向指定的消息卡片请求地址发送 HTTP POST 请求，请求中会包含已配置的回传参数数据。关于回传交互的详细配置说明，可参见[配置卡片交互](/ssl:ttdoc/ukTMukTMukTM/uYjNwUjL2YDM14iN2ATN)。
- **二次确认弹窗**：开启后需要配置弹窗的标题与提示信息，当用户点击按钮后需要在弹窗内二次确认。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/bd1a9b8142583d9d74ef0cf601ce20e9_KiUvGByyC5.png?height=1250&lazyload=true&maxWidth=600&width=1666)

## 卡片示例

例如，在功能介绍的消息卡片中，针对功能特性的描述分别设置多篇参考文档。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/eb7c047068d0ab521cff5bd415c5f889_oi4LCHZ2fR.png?height=1164&lazyload=true&maxWidth=600&width=1198)

卡片的 JSON 配置如下：

```json
// 如需使用该 JSON 示例，则注意需要手动清除 // 开头的注释
{
  "elements": [
    { // 文本 + 折叠按钮组
      "tag": "div",
      "text": {
        "tag": "lark_md",
        "content": "**🌟 千人千面** | 满足企业管理、文化宣传、知识管理、效率提升等各类需求"
      },
      "extra": {
        "tag": "overflow",
        "options": [
          {
            "text": {
              "tag": "plain_text",
              "content": "打开飞书应用目录"
            },
            "value": "appStore",
            "url": "https://app.feishu.cn"
          },
          {
            "text": {
              "tag": "plain_text",
              "content": "打开飞书开发文档"
            },
            "value": "document",
            "url": "https://open.feishu.cn"
          },
          {
            "text": {
              "tag": "plain_text",
              "content": "打开飞书官网"
            },
            "value": "document",
            "url": "https://www.feishu.cn"
          }
        ]
      }
    },
    { // 文本 + 折叠按钮组
      "tag": "div",
      "text": {
        "tag": "lark_md",
        "content": "**📲 多端定制** | 适配桌面端、移动端、iPad端使用习惯，打造最佳使用体验"
      },
      "extra": {
        "tag": "overflow",
        "options": [
          {
            "text": {
              "tag": "plain_text",
              "content": "打开飞书应用目录"
            },
            "value": "appStore",
            "url": "https://app.feishu.cn"
          },
          {
            "text": {
              "tag": "plain_text",
              "content": "打开飞书开发文档"
            },
            "value": "document",
            "url": "https://open.feishu.cn"
          },
          {
            "text": {
              "tag": "plain_text",
              "content": "打开飞书官网"
            },
            "value": "document",
            "url": "https://www.feishu.cn"
          }
        ]
      }
    },
    { // 文本 + 折叠按钮组
      "tag": "div",
      "text": {
        "tag": "lark_md",
        "content": "**🎉 丰富多元** | 灵活的通用组件、全面的开发能力，轻松搭建个性化工作台"
      },
      "extra": {
        "tag": "overflow",
        "options": [
          {
            "text": {
              "tag": "plain_text",
              "content": "打开飞书应用目录"
            },
            "value": "appStore",
            "url": "https://app.feishu.cn"
          },
          {
            "text": {
              "tag": "plain_text",
              "content": "打开飞书开发文档"
            },
            "value": "document",
            "url": "https://open.feishu.cn"
          },
          {
            "text": {
              "tag": "plain_text",
              "content": "打开飞书官网"
            },
            "value": "document",
            "url": "https://www.feishu.cn"
          }
        ]
      }
    },
    {
      "alt": {
        "content": "",
        "tag": "plain_text"
      },
      "img_key": "img_v2_9b14e850-3757-43ae-96b4-965ed81e7f8g",
      "tag": "img"
    },
    {
      "tag": "hr"
    },
    {
      "tag": "action",
      "actions": [
        {
          "tag": "button",
          "text": {
            "tag": "plain_text",
            "content": "了解定制工作台详情"
          },
          "type": "primary",
          "url": "https://bytedance.feishu.cn/docx/doxcn8ZCcCeHu4nneLNNncSQEkd"
        },
        {
          "tag": "button",
          "text": {
            "content": "立即开启体验",
            "tag": "plain_text"
          },
          "type": "default",
          "url": "https://www.feishu.cn/admin/appcenter/portal"
        }
      ]
    }
  ],
  "header": {
    "template": "blue",
    "title": {
      "content": "🔥 定制工作台，搭建好看又好用的企业门户",
      "tag": "plain_text"
    }
  }
}
```