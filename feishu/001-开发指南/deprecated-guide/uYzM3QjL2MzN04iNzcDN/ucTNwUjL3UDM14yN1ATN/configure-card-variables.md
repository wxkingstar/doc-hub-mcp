<!--
title: 配置卡片变量
id: 7312637705938862082
fullPath: /ukTMukTMukTM/ucTNwUjL3UDM14yN1ATN/configure-card-variables
updatedAt: 1724163110000
source: https://open.feishu.cn/document/deprecated-guide/message-card/build-card-content/configure-card-variables
-->
# 配置卡片变量



卡片变量的作用是让静态的、面向单一场景的消息卡片，变得灵活可变、支持多种场景下使用。你可以将卡片变量理解为卡片内容的占位符，在为变量赋值前，卡片是包含了组件样式、内容以及占位符的模板。当需要使用该卡片模板时，根据实际面向的业务场景，动态赋予变量值，即可推送完整的消息卡片。
:::warning
本文档为消息卡片历史文档。要查看最新的飞书卡片变量相关文档，参考[配置卡片变量](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-cardkit/configure-card-variables)。
:::
## 场景示例

例如，企业季度数据报表在样式上可以保持统一，但各季度的数据是动态变化的。使用卡片变量构建消息卡片模板后，你只需要将各季度的数据赋值给模板内匹配的变量，即可快速推送当前季度的数据报表至飞书会话内。

卡片模板与卡片变量的关系如下图，卡片模板是指包含卡片变量的消息卡片，当发送消息卡片时为变量赋予实际值，即可推送完整的消息卡片内容。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/68751aaa9544544273863bcb1ca91c9d_3SvzYZfmTO.png?height=600&lazyload=true&maxWidth=750&width=2052)

## 配置步骤

1. 登录[消息卡片搭建工具](https://open.feishu.cn/tool/cardbuilder)。
2. 新建或打开指定的消息卡片。
3. 在工具右侧 **变量列表** 中，点击 **创建变量**。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/549139d71601012a79950bfeb257b560_br5ng3kaDw.png?height=1416&lazyload=true&maxWidth=600&width=2882)

4. 在 **创建变量** 界面，依次设置 **变量名称**、**变量描述** 和 **变量类型**，然后点击 **确定**。

    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ad844e33c1381c2868cb0061a59b96c3_QfBUZBfw3f.png?height=650&lazyload=true&maxWidth=600&width=2286)

	- **变量名称**：建议使用简洁清晰的名称，后续在组件内绑定变量时，将以该名称作为标识。示例值 `text_value`。

	- **变量描述**：一般用于解释该变量的作用，仅在工具内的变量详情中展示。示例值 `区域变量`。

	- **变量类型**：消息卡片搭建工具提供了文本、图片、链接等多种变量类型，各种类型的详细使用说明，可参见下文 **变量类型** 章节。

5. 在指定的卡片组件中绑定变量。
    
    如下图所示，在文本内容中，绑定一个文本类型的变量。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/eda79e55218e02ed408a9cc12981f96c_buL7EPARPl.png?height=1334&lazyload=true&maxWidth=600&width=2882)

6. 基于工具提供的模拟数据，测试变量是否生效。
    
    1. 在工具右侧点击进入 **模拟数据** 页签。
    2. 在页签内为变量设置测试数据，并点击 **保存并生效**。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/dc9145b3d515f2d68268bb320e441238_AmGOBckODb.png?height=1312&lazyload=true&maxWidth=600&width=2882)
    
    3. 查看 **卡片预览**，变量值已生效。
        
        后续当你发送消息卡片时，可以通过请求体的 `template_variable` 字段为变量赋值。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ea7eeb785dc45611dc122009f2105b71_LykKg0PcyV.png?height=1332&lazyload=true&maxWidth=600&width=2338)

7. （可选）编辑或删除卡片变量。
    
    在搭建工具右侧的变量列表中，支持对存量的卡片变量进行编辑或删除操作。
    
    - 点击编辑图标，即可调整变量名称、描述以及类型。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/49cc51c3d273a3f496cff753ada8d014_BH9r0xZi1D.png?height=490&lazyload=true&maxWidth=600&width=1268)
    
    - 点击删除图标，即可删除变量。变量被删除后，卡片内容已绑定的变量也会失效。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0fd1c696eab3915cde7aa3b8bd1d70db_lBQSgkA9Zx.png?height=506&lazyload=true&maxWidth=600&width=1260)

## 变量类型

目前消息卡片搭建工具支持配置的变量类型包括：文本、图片、链接、整数、日期时间、按钮组、选项组、人员选项组、循环对象数组。各类型变量的使用方式、适用组件不同，你可以通过本章节进行了解。

### 文本变量

文本变量取值为一段字符串内容，用于动态展示文本信息。

#### 支持绑定的组件

- 标题组件的内容。
- 图片组件的鼠标悬浮提示文字。
- text 元素的内容。
- Markdown 组件的内容。
- 按钮的文案。
- 列表选择器的选项内容。
- 日期选择器的提示文案。

#### 使用示例

以内容组件中的 text 元素绑定变量为例，JSON 示例配置如下，其中的 `${text_value}` 为示例变量。

```json
{
  "elements": [
    {
      "tag": "div",
      "text": {
        "content": "今天的天气：${text_value}",
        "tag": "plain_text"
      }
    }
  ]
}
```

### 图片变量

图片变量取值为调用[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口获取到的用于发送消息的图片 image_key，该变量用于动态展示图片。

#### 支持绑定的组件

- Markdown 组件的富文本内容。
    
    在 `![hover_text](image_key)` 图片标签内，可将 `image_key` 替换为图片变量。

- 备注组件的图标 image_key。
- 图片组件的资源 key。

#### 使用示例

以图片组件的资源 key 绑定变量为例，JSON 示例配置如下，其中的 `${img_value}` 为示例变量。

```json
{
  "elements": [
    {
      "tag": "img",
      "img_key": "${img_value}",
      "alt": {
        "tag": "plain_text",
        "content": ""
      },
      "mode": "fit_horizontal",
      "preview": true,
      "compact_width": false
    }
  ]
}
```

### 链接变量

链接变量取值为 HTTP/HTTPS 访问链接，用于动态设置跳转链接。

#### 支持绑定的组件

- 多列布局组件的跳转交互。
- Markdown 组件的差异化跳转交互。
- Markdown 组件的富文本内容。
    - 在 `[name](url)` 标签内可将 `url` 替换为链接变量。
    - 在 `<a href='url'></a>` 标签内可将 `url` 替换为链接变量。
- 按钮组件的跳转交互。

#### 附加属性说明

在搭建工具中创建链接变量时，支持开启多端差异化跳转能力。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a16c0110746844b0711bef8ee00269c1_cdq1Zrs8km.png?height=880&lazyload=true&maxWidth=400&width=828)

- 未开启多端差异化跳转能力的链接变量，结构体如下：
	
	```json
	{
		"url_detail": "https://www.example.com/"
	}
	```

- 开启多端差异化跳转能力的链接变量，结构体如下：

	```json
	{
		"url_detail": {
			"url":"https://www.example.com/",
			"android": "https://www.example.com/",
			"ios": "https://www.example.com/",
			"pc": "https://www.example.com/"
		}
	}
	```

#### 使用示例

以按钮的差异化跳转链接配置为例，JSON 描述如下：

:::note
- 开启多端差异化跳转能力的链接变量，在使用时需要注意同步配置组件的差异化跳转，并在各端 url 中依次配置链接变量。
- 如果你的链接变量配置了多端差异化跳转，但所绑定的跳转交互未配置差异化跳转，则成功发送消息卡片后，仅生效链接变量中的兜底跳转地址（`url` 参数）。
:::

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
            "content": "主按钮"
          },
          "type": "primary",
          "multi_url": { // 在 button 中配置差异化跳转，并在各端 url 中均添加链接变量。
            "url": "${url_value}",
            "pc_url": "${url_value}",
            "android_url": "${url_value}",
            "ios_url": "${url_value}"
          }
        }
      ]
    }
  ]
}
```

### 整数变量

整数变量取值为整数型数据，用于动态展示数字信息。

#### 支持绑定的组件

所有文本内容均支持绑定整数变量，例如标题组件的内容、内容组件的 text 元素、markdown 组件的内容、图片组件的鼠标悬浮提示文字、按钮的文本内容以及选择器的默认提示文本等。

#### 使用示例

以内容组件的 text 元素绑定变量为例，JSON 示例属性如下，其中的 `${num_value}` 为示例变量。

```json
{
  "elements": [
    {
      "tag": "div",
      "text": {
        "content": "当前数字为：${num_value}",
        "tag": "plain_text"
      }
    }
  ]
}
```

### 日期时间变量

日期时间变量主要应用于日期选择器（datePicker）。在搭建工具中创建日期时间变量后，默认提供了当前日期（例如 `2023-11-27`）的模拟数据。你需要针对不同的选择器模式，对应调整模拟数据的值。
- 如果是日期选择器，变量的模拟数据取值格式为 `yyyy-MM-dd`。例如：`2023-11-27`
- 如果是时间选择器，变量的模拟数据取值格式为 `HH:mm`。例如：`10:30`
- 如果是日期时间选择器，变量的模拟数据取值格式为 `yyyy-MM-dd HH:mm`。例如，`2023-11-27 10:30`
- 基于该变量的特殊性，必须设置正确的模拟数据才可以使用该变量。如果设置的模拟数据与选择器模式不匹配，则会报错。
- 模拟数据仅用于在消息卡片搭建工具内调试，实际发送消息时仍需要传入为变量赋值的键值对（key-value）。

#### 支持绑定的组件

日期选择器（datePicker）的默认取值。

#### 使用示例

```json
{
  "elements": [
    {
      "tag": "action",
      "actions": [
        {
          "tag": "date_picker",
          "placeholder": {
            "tag": "plain_text",
            "content": "请选择日期时间"
          },
          "initial_date": "${date_value}"
        }
      ]
    }
  ]
}
```

### 按钮组变量

按钮组变量是一个数组型变量。你可以在模拟数据或实际发送消息时，传入一个或多个按钮的内容与交互属性。

#### 支持绑定的组件

折叠按钮组（overflow）的配置方式。

#### 附加属性说明

在创建按钮组变量时，可选择开启 **支持跳转** 或 **支持回传** 的附加属性。

:::note
两个附加属性不支持同时开启。
:::

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/cd9c6c1d07959f6692cf2d2f15ad7c1b_IwyvhPwAjC.png?height=1040&lazyload=true&maxWidth=400&width=790)

- 如果开启了 **支持跳转**，则变量值的格式为：
    
    关于 url 元素的参数说明，参见 [url](/ssl:ttdoc/ukTMukTMukTM/uczNwUjL3cDM14yN3ATN)。
    	
    ```json
    // 未选中【为桌面端、移动端配置不同的跳转地址】。
    "button_value": [{
            "text": "Option", // 定义按钮名称。
            "url": ""
    }]
    // 选中了【为桌面端、移动端配置不同的跳转地址】。
    "button_value": [{
            "text": "Option", // 定义按钮名称。
            "multi_url": {
                    "url": "",
                    "android_url": "",
                    "ios_url": "",
                    "pc_url": ""
            }
    }]
    ```

- 如果开启了 **支持回传**，则变量值的格式为：

	```json
	"button_value": [{
			"text": "Option-0", // 定义按钮名称。
			"value": "option" // 定义回传参数值。
	}]
	```

- 如果未开启任何附加属性，则变量值的格式为：

	```json
	"button_value": [{
			"text": "Option" // 定义按钮名称。
	}]
	```

#### 使用示例

以按钮组变量中配置了 Option-0、Option-1、Option-2 三个按钮为例，变量格式如下：

```json
"button_value": [
        {
                "text": "Option-0",
                "value": "option0"
        },
        {
                "text": "Option-1",
                "value": "option1"
        },
        {
                "text": "Option-2",
                "value": "option2"
        }
]
```

在折叠按钮组中绑定按钮组变量的示例配置如下：

```json
{
  "elements": [
    {
      "tag": "action",
      "actions": [
        {
          "tag": "overflow",
          "options": "${button_value}"
        }
      ]
    }
  ]
}
```

### 选项组变量

选项组变量是一个数组型变量。你可以在模拟数据或实际发送消息时，传入一个或多个选项的内容与交互属性。

#### 支持绑定的组件

列表选择器（selectMenu）的自定义选项选择器模式。

#### 使用示例

以选项组变量中配置了 Option-0、Option-1、Option-2 三个选项为例，变量格式如下：

```json
{
  "option_value": [
    {
      "text": "Option-0", // 定义选项名称。
      "value": "option0" // 定义回传参数值。
    },
    {
      "text": "Option-1",
      "value": "option1"
    },
    {
      "text": "Option-2",
      "value": "option2"
    }
  ]
}
```

在列表选择器中绑定选项组变量的示例配置如下：

```json
{
  "elements": [
    {
      "tag": "action",
      "actions": [
        {
          "tag": "select_static",
          "placeholder": {
            "tag": "plain_text",
            "content": "默认提示文本"
          },
          "options": "${option_value}"
        }
      ]
    }
  ]
}
```

### 人员选项组变量

人员选项组变量是一个数组型变量。你可以在模拟数据或实际发送消息时，传入一个或多个人员选项。

#### 支持绑定的组件

列表选择器（selectMenu）的人员选择器模式。

#### 使用示例

人员选项组变量通过用户 [open_id](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid) 来指定人员选项。以配置三个人员选项为例，变量格式如下：

```json
{
  "people_value": [
    {
      "value": "ou_3c713ec8db76f46xxxxx0"
    },
    {
      "value": "ou_3c713ec8db76f46xxxxx1"
    },
    {
      "value": "ou_3c713ec8db76f46xxxxx2"
    }
  ]
}
```

在列表选择器中绑定人员选项组变量的示例配置如下：

```json
{
  "elements": [
    {
      "tag": "action",
      "actions": [
        {
          "tag": "select_person",
          "placeholder": {
            "tag": "plain_text",
            "content": "默认提示文本"
          },
          "options": "${people_value}"
        }
      ]
    }
  ]
}
```

### 循环对象数组变量

循环对象数组作用于多列布局（column_set），并且需要与其他变量结合使用。该变量以数组的形式定义一个 column_set 中的所有变量，数组中每新增一个取值，在卡片内原有 column_set 的下方便会新增一个相同结构堆叠的 column_set。循环对象数组变量的示例格式如下所示。该部分代码需在发送卡片时传入。具体参考[使用卡片 ID 发送消息](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/send-message-card/send-message-using-card-id)。

:::note
循环堆叠的多列布局没有上限，但变量替换后的原始请求体有 200 K 的大小上限。
:::

```json
{
  "loop_object_value": [
    { // 定义多列布局第一行的变量，示例值中包含一个文本变量、一个整数变量。
      "text_value": "test-1",
      "num_value": 111111
    },
    { // 使用相同的结构堆叠展示第二行内容。
      "text_value": "test-2",
      "num_value": 222222
    },
    { // 支持循环堆叠该模块，新增第三行、第四行内容。
      "text_value": "test-3",
      "num_value": 333333
    }
  ]
}
```

#### 支持绑定的组件

多列布局。

#### 使用示例

如下图展示了一个循环对象数组包含文本变量、整数变量的使用示例。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d04189347a231ca6776c3bf281c3ac44_ZOrhiEcIza.gif?height=1006&lazyload=true&maxWidth=700&width=2060)

示例卡片对应的 JSON 配置如下：

```json
{
  "elements": [
    {
      "tag": "column_set", // 多列布局，共分为两列，左侧列包含一个文本变量，右侧列包含一个整数变量。
      "flex_mode": "none",
      "background_style": "grey",
      "columns": [
        {
          "tag": "column",
          "width": "weighted",
          "weight": 1,
          "vertical_align": "top",
          "elements": [
            {
              "tag": "div",
              "text": {
                "content": "Data：${text_value}",
                "tag": "plain_text"
              }
            }
          ]
        },
        {
          "tag": "column",
          "width": "weighted",
          "weight": 1,
          "vertical_align": "top",
          "elements": [
            {
              "tag": "div",
              "text": {
                "content": "${num_value}",
                "tag": "plain_text"
              }
            }
          ]
        }
      ],
      "_varloop": "${loop_object_value}" // 绑定循环对象数组变量。
    }
  ]
}
```


## 如何发送包含变量的消息卡片

本文介绍了卡片变量的相关配置信息，当你配置完成需要发送消息卡片时，开放平台的 OpenAPI 支持通过卡片模板 ID（template_id，即卡片 ID）、卡片模板的变量取值（template_variable）来发送消息卡片。具体操作参见[使用卡片 ID 发送消息](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/send-message-card/send-message-using-card-id)。