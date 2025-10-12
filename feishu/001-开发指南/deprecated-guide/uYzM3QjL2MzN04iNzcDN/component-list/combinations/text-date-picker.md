<!--
title: 文本 + 日期选择器
id: 7312637705938845698
fullPath: /ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/combinations/text-date-picker
updatedAt: 1702626999000
source: https://open.feishu.cn/document/deprecated-guide/message-card/component-list/combinations/text-date-picker
-->
# 文本 + 日期选择器

消息卡片搭建工具针对常用的消息推送场景提供了组合模块，便于你在工具内快速构建卡片内容。本文将介绍其中的文本 + 日期选择器组合。

## 模块展示

在消息卡片搭建工具中，文本 + 日期选择器组合模块如下图所示。该组合模块一般用于展示包含说明的日期交互块，日期选择器仅支持回传交互。例如，设置会议时间、休假时间等。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ce8bc38c7e483c2cbeb3f65fe2b4d754_rX4HGQ6u27.png?height=1418&lazyload=true&maxWidth=600&width=2882)

## 编辑组件

文本 + 日期选择器组合模块本质是一个内容模块（div），在内容模块中通过 `text` 参数设置文本组件、`extra` 参数设置日期选择器组件。关于内容模块的详细配置说明，可参见[内容模块](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/common-components-and-elements#6bdb3f37)。
JSON 示例配置如下：

```json
// 如需使用该 JSON 示例，则注意需要手动清除 // 开头的注释
{
  "elements": [
    {
      "tag": "div", // 内容模块
      "text": { // 文本组件
        "tag": "lark_md",
        "content": "国际权威安全认证与信息安全管理体系，为企业提供全生命周期安全保障。"
      },
      "extra": {
        "tag": "date_picker", // 日期选择器
        "placeholder": {
          "tag": "plain_text",
          "content": "请选择日期"
        },
        "initial_date": "2020-9-20"
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

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/4040663bbe1a8a58d9b2d26e55fac368_jA1RuAQX7C.png?height=1034&lazyload=true&maxWidth=600&width=1670)

### 日期选择器

在搭建工具内选中组合模块的折叠按钮组，在 **编辑卡片** 区域设置折叠按钮组的配置项。

:::note
支持在 JSON 配置中调整内容模块所附加的日期选择器组件参数，此外日期选择器为交互组件，支持配置回传交互，详细说明可参见[日期选择器（datePicker）](/ssl:ttdoc/ukTMukTMukTM/uQzNwUjL0cDM14CN3ATN)。
:::

- **选择器模式** 分为三种：**日期选择器**、**时间选择器**、**日期时间选择器**。
- **默认取值**：设置选择器上默认的时间。
    - 日期选择器的取值格式为 `yyyy-MM-dd`。
    - 时间选择器的取值格式为 `HH:mm`。
    - 日期时间选择器的取值格式为 `yyyy-MM-dd HH:mm`。
- **提示文案**：选择器输入框中的提示文本内容。
- **配置回传交互**：配置回传参数的名称与值，后续当用户选择日期时间后，应用会向指定的消息卡片请求地址发送 HTTP POST 请求，请求中会包含已配置的回传参数数据。关于回传交互的详细配置说明，可参见[配置卡片交互](/ssl:ttdoc/ukTMukTMukTM/uYjNwUjL2YDM14iN2ATN)。
- **二次确认弹窗**：开启后需要配置弹窗的标题与提示信息，当用户选择日期时间后需要在弹窗内二次确认。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5cc8e034c5bb9f9624cbb24e158b8aeb_72rE40sDkw.png?height=1172&lazyload=true&maxWidth=600&width=1674)

## 卡片示例

例如，在休假申请的消息卡片中，设置休假时间段的交互内容。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/682d8a146e23bd055170e99ad6ec7d0b_2Zlc9OWh0v.png?height=482&lazyload=true&maxWidth=600&width=1332)

卡片的 JSON 配置如下：

```json
// 如需使用该 JSON 示例，则注意需要手动清除 // 开头的注释
{
  "elements": [
    { // 文本 + 日期选择器
      "tag": "div",
      "text": {
        "tag": "lark_md",
        "content": "选择休假的开始时间"
      },
      "extra": {
        "tag": "picker_datetime",
        "placeholder": {
          "tag": "plain_text",
          "content": "请选择日期与时间"
        },
        "initial_date": "2020-9-20"
      }
    },
    { // 文本 + 日期选择器
      "tag": "div",
      "text": {
        "tag": "lark_md",
        "content": "选择休假的结束时间"
      },
      "extra": {
        "tag": "picker_datetime",
        "placeholder": {
          "tag": "plain_text",
          "content": "请选择日期与时间"
        },
        "initial_date": "2020-9-20"
      }
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
            "content": "提交"
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
            "content": "取消"
          },
          "type": "default",
          "multi_url": {
            "url": "https://open.feishu.cn/document",
            "android_url": "",
            "ios_url": "",
            "pc_url": ""
          }
        }
      ]
    }
  ],
  "header": {
    "template": "orange",
    "title": {
      "content": "休假申请",
      "tag": "plain_text"
    }
  }
}
```