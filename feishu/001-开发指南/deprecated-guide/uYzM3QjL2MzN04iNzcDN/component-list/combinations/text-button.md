<!--
title: 文本 + 按钮
id: 7312637705938763778
fullPath: /ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/combinations/text-button
updatedAt: 1702626950000
source: https://open.feishu.cn/document/deprecated-guide/message-card/component-list/combinations/text-button
-->
# 文本 + 按钮

消息卡片搭建工具针对常用的消息推送场景提供了组合模块，便于你在工具内快速构建卡片内容。本文将介绍其中的文本 + 按钮组合。

## 模块展示

在消息卡片搭建工具中，文本 + 按钮组合模块如下图所示。该组合模块一般用于展示可交互的信息块，按钮组件支持配置回传交互或跳转交互。例如，通过文本组件展示产品新功能的关键信息，通过按钮组件跳转到新功能详情页供用户进一步了解。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f435d4e6e964439d9c29d6fb5f3e1df8_ar4IaTygI4.png?height=1416&lazyload=true&maxWidth=600&width=2874)

## 编辑组件

文本 + 按钮组合模块本质是一个内容模块（div），在内容模块中通过 `text` 参数设置文本组件、`extra` 参数设置按钮组件。关于内容模块的详细配置说明，可参见[内容模块](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/common-components-and-elements#6bdb3f37)。

JSON 示例配置如下：

```json
// 如需使用该 JSON 示例，则注意需要手动清除 // 开头的注释
{
  "elements": [
    {
      "tag": "div", // 内容模块
      "text": { // 文本组件
        "tag": "lark_md", 
        "content": "深度整合使用率极高的办公工具，企业成员在一处即可实现高效沟通与协作。"
      },
      "extra": {
        "tag": "button", // 按钮组件
        "text": {
          "tag": "lark_md",
          "content": "查看详情"
        },
        "type": "primary"
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

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/92551d7f8ecafd611ee1898e68a53598_0kjwxOxjZ0.png?height=1020&lazyload=true&maxWidth=600&width=1656)

### 按钮组件

在搭建工具内选中组合模块的按钮组件，在 **编辑卡片** 区域设置按钮配置项。

:::note
支持在 JSON 配置中调整内容模块所附加的按钮组件参数，此外按钮组件为交互组件，支持配置回传交互或跳转交互，详细说明可参见[按钮（button）](/ssl:ttdoc/ukTMukTMukTM/uEzNwUjLxcDM14SM3ATN)。
:::

- **按钮类型**：可选择 **强调样式**、**默认样式**、**警示样式**。
- **按钮文本**：按钮上展示的文本内容。
- **配置跳转交互**：配置点击按钮后的跳转链接。支持开启差异化跳转，分别为 PC 端、Android 端、iOS 端配置不同的跳转链接。
- **配置回传交互**：配置回传参数的名称与值，后续当用户点击按钮后，应用会向指定的消息卡片请求地址发送 HTTP POST 请求，请求中会包含已配置的回传参数数据。关于回传交互的详细配置说明，可参见[配置卡片交互](/ssl:ttdoc/ukTMukTMukTM/uYjNwUjL2YDM14iN2ATN)。
- **二次确认弹窗**：开启后需要配置弹窗的标题与提示信息，当用户点击按钮后需要在弹窗内二次确认。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/20492141a917ffe60c977968c0842f38_9J2bgqNqaV.png?height=1234&lazyload=true&maxWidth=600&width=1658)

## 卡片示例

例如，一个生日祝福消息卡片中，使用文本 + 按钮组合模块构建卡片内容。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a14f181ca0cd57c88c20f3ef50fe8377_fzSaW8nR1k.png?height=936&lazyload=true&maxWidth=600&width=1364)

卡片的 JSON 配置如下：

```json
// 如需使用该 JSON 示例，则注意需要手动清除 // 开头的注释
{
  "elements": [
    {
      "alt": {
        "content": "",
        "tag": "plain_text"
      },
      "img_key": "img_v2_0f521b67-3f83-4893-9a60-e5000f1139dg",
      "tag": "img"
    },
    {
      "tag": "div",
      "text": {
        "content": "**生活因你而更精彩，愿你此后每一天，眼里是阳光，笑里是坦荡！**",
        "tag": "lark_md"
      }
    },
    {
      "tag": "hr"
    },
    { // 文本 + 按钮组合模块
      "extra": {
        "tag": "button",
        "text": {
          "content": "🙋 立刻领取",
          "tag": "lark_md"
        },
        "type": "primary",
        "url": "https://open.feishu.cn/?lang=zh-CN"
      },
      "tag": "div",
      "text": {
        "content": "**🎁 领取专属生日礼物**\n地点：15 楼行政中心\n时间：9:00 - 18:00\n",
        "tag": "lark_md"
      }
    },
    {
      "tag": "hr"
    },
    { // 文本 + 按钮组合模块
      "extra": {
        "tag": "button",
        "text": {
          "content": "👀 查看祝福",
          "tag": "lark_md"
        },
        "type": "primary",
        "url": "https://open.feishu.cn/?lang=zh-CN"
      },
      "tag": "div",
      "text": {
        "content": "**😘 收到的生日祝福**\n王凡、刘子涵、陈怡君......给你送祝福啦",
        "tag": "lark_md"
      }
    }
  ],
  "header": {
    "template": "orange",
    "title": {
      "content": "🎂 亲爱的 陈婷 同学，祝你生日快乐！",
      "tag": "plain_text"
    }
  }
}
```