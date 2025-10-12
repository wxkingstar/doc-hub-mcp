<!--
title: 如何解决 200732 或 200737 错误
id: 7497808330695311361
fullPath: /uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-fix-200732-or-200737-error
updatedAt: 1748592215000
source: https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-fix-200732-or-200737-error
-->
# 如何解决 200732 或 200737 错误

在调用发送卡片相关 API （如发送消息）或使用飞书卡片搭建工具时，如果你遇到 200732 或 200737 错误，你可参考文本档，查看报错信息中具体变量类型的 Schema 结构和支持参数，以排查问题。

:::html
<md-table>
    <md-thead>
        <md-tr>

            <md-th style="width: 10%;">错误码</md-th>
            <md-th style="width: 30%;">错误信息</md-th>
            <md-th style="width: 30%;">排查建议</md-th>
        </md-tr>
    </md-thead>
  <md-tbody>

<md-tr>
  <md-td>200732</md-td>
  <md-td>Failed to create card content, ext=ErrCode: 200732; ErrMsg: the actual type of the variable is inconsistent with the specified type in the template. Please check the type of the variable; ErrorValue:  %v, specifiedType:  %v, actualType:  %v</md-td>
  <md-td>卡片变量类型错误。请检查发送模版卡片时使用的变量的数据类型与构造该模版时指定的变量数据类型是否一致。对于新版卡片（JSON 2.0 结构），建议你将 errMsg 错误信息发送给[智能助手](https://open.feishu.cn/search?from=header&page=1&pageSize=10&q=Failed+to+create+card+content%2C+ext%3DErrCode%3A+200732%3B+ErrMsg%3A+the+actual+type+of+the+variable+is+inconsistent+with+the+expected+type+in+the+template.+please+check+the+type+of+the+variable%3B+ErrorValue%3A+varName%3A+text_var_1%2C+expectType%3A+string%2C+actualType%3A+bool%3B&topicFilter=)，针对具体错误变量，获得针对性的建议。</md-td>
</md-tr>

<md-tr>
  <md-td>200737</md-td>
  <md-td>Failed to create card content, ext=ErrCode: 200737; ErrMsg: the format of the variable is incorrect. Please check the format of the variable; ErrorValue: %v, specifiedFormat: %v, actualFormat: %v</md-td>
  <md-td>卡片变量格式错误。建议你将 errMsg 错误信息发送给[智能助手](https://open.feishu.cn/search?from=header&page=1&pageSize=10&q=Failed+to+create+card+content%2C+ext%3DErrCode%3A+200737%3B+ErrMsg%3A+the+format+of+the+variable+is+incorrect.+please+check+the+format+of+the+variable%3B+ErrorValue%3A+varName%3A+text_var_1%2C+specifiedFormat%3A+yyyy-MM-dd%2C+actualFormat%3A+yyyy&topicFilter=)，针对具体错误变量，获得针对性的建议。</md-td>
</md-tr>
 </md-tbody>
</md-table>
:::


## 新版卡片支持的变量

如果你使用的是新版卡片（JSON 2.0 结构），你可参考本小节中的变量说明排查问题。


### 普通文本（Text）

一段字符串变量，赋值时可以输入任意文本。

#### **适用组件**


文本、富文本内容；按钮、图片、选项等组件的文本属性；标题组件的[主题样式](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/content-components/title#6056191b)属性

#### **Schema 结构**

```json
{
  "type": "string"
}
```

#### **支持参数**

无

#### **变量示例**

```json
"示例文本"
```

### 整数（Integer）

整数变量，赋值时仅可输入整数数值。

#### **适用组件**

组件内数值类型的属性。

#### **Schema 结构**

```json
{
  "anyOf": [
    {
      "type": "number"
    },
    {
      "type": "string",
      "pattern": "^-?\d+$"
    }
  ]
}
```

#### **支持参数**

无

#### **变量示例**

```json
1
```

### 图片（Image）

图片变量，赋值时需要输入图片的 image_key。

#### **适用组件**

图片组件。

#### **Schema 结构**

```json
{
  "type": "object",
  "properties": {
    "img_key": {
      "type": "string"
    }
  },
  "required": ["img_key"],
}
```

#### **支持参数**

| **名称**  | **类型** | **必填** | **描述**                                                                                                                                                                                                       |
| ------- | ------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| img_key | string | 是      | 图片的 image_key。为确保安全合规，飞书卡片内的图片必须先上传到飞书服务，获取到 image_key 后再使用。你可以调用[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口，将用于发送消息的图片上传到飞书服务，并在返回结果中获取图片的 image_key。 |

#### **变量示例**

```json
{
    "img_key": "img_v3_02er_196d133d-aa22-4021-9b79-c11105223e4j",
    "i18n_img_key": {
        "zh_cn": "img_v3_02er_196d133d-aa22-4021-9b79-c11105223e4j"
    }
}
```

### 日期（Date）

日期变量，赋值格式为 yyyy-MM-dd。

#### **适用组件**

[日期选择器](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/interactive-components/date-picker)的 **默认选项配置** 属性

#### **Schema 结构**

```json
{
  "type": "string",
  "pattern": "^(\d{4})-(\d{2})-(\d{2})$"
}
```

#### **支持参数**

无

#### **变量示例**

```
2024-11-06
```

### 时间（Time）

时间变量，赋值格式 hh:mm。

#### **适用组件**

[时间选择器](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/interactive-components/time-selector)的 **默认选项配置** 属性

#### **Schema 结构**

```json
{
  "type": "string",
  "pattern": "^((20|21|22|23|[0-1]\d):[0-5][0-9])$"
}
```

#### **支持参数**

无

#### **变量示例**

```
10:16
```

### 日期时间（Datetime）

日期时间变量，赋值格式 yyyy-MM-dd hh:mm。

#### **适用组件**

[日期时间选择器](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/interactive-components/date-time-picker)的 **默认选项配置** 属性

#### **Schema 结构**

```json
{
  "type": "string",
  "pattern": "^(\d{4})-(\d{2})-(\d{2}) ((20|21|22|23|[0-1]\d):[0-5][0-9])$"
}
```

#### **支持参数**

无

#### **变量示例**

```
2024-11-06 10:16
```

### 分端差异化链接（URL）

链接变量，用于设置跳转交互的跳转地址。支持配置差异化跳转，即分别为桌面端、安卓端、iOS 端配置不同的跳转链接。

#### **适用组件**

支持跳转交互的组件

#### **Schema 结构**

```json
{
  "type": "object",
  "properties": {
    "pc_url": {
      "type": ["string", "null"],
      "description": "PC端链接。如果提供，必须是字符串。允许为空字符串或null。"
    },
    "android_url": {
      "type": ["string", "null"],
      "description": "Android端链接。如果提供，必须是字符串。允许为空字符串或null。"
    },
    "ios_url": {
      "type": ["string", "null"],
      "description": "iOS端链接。如果提供，必须是字符串。允许为空字符串或null。"
    },
    "url": {
      "type": ["string", "null"],
      "description": "默认链接。如果提供，必须是字符串。允许为空字符串或null。"
    }
  },
  "additionalProperties": true,
  "description": "表示一个多端链接对象。对象本身可以为空，但如果提供了任何 *_url 字段，其值必须是字符串或者是null。"
}
```

#### **支持参数**

| **名称**        | **类型**       | **必填** | **描述**                   |
| ------------- | ------------ | ------ | ------------------------ |
| pc_url        | string, null | 否      | PC 端链接。如果提供，必须是字符串。      |
| android_url   | string, null | 否      | Android 端链接。如果提供，必须是字符串。 |
| ios_url       | string, null | 否      | iOS 端链接。如果提供，必须是字符串。     |
| url           | string, null | 否      | 默认链接。如果提供，必须是字符串。        |
| 任何 *_url 字段 | string, null | 否      | 其它端链接。如果提供，必须是字符串。       |

#### **变量示例**

```json
{
  "pc_url": "",
  "android_url": "",
  "ios_url": "",
  "url": "https://open.feishu.cn"
}
```

### 按钮组（Button）

数组型变量，用于描述一组按钮属性。每项子属性包含以下配置：
- 按钮文案
- 按钮交互属性配置：链接跳转、交互事件

#### **适用组件**

[折叠按钮组](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/interactive-components/overflow)

#### **Schema 结构**

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "required": [
      "text"
    ],
    "properties": {
      "text": {
        "type": "string"
      },
      "type": {
        "type": "string",
        "enum": [
          "default",
          "primary",
          "danger",
          "text",
          "primary_text",
          "danger_text",
          "primary_filled",
          "danger_filled",
          "laser"
        ],
        "nullable": true
      },
      "value": {
        "type": "string",
        "nullable": true
      },
      "multi_url": {
        "type": "object",
        "properties": {
          "pc_url": {
            "type": [
              "string",
              "null"
            ],
            "description": "PC端链接。如果提供，必须是字符串。允许为空字符串或null。"
          },
          "android_url": {
            "type": [
              "string",
              "null"
            ],
            "description": "Android端链接。如果提供，必须是字符串。允许为空字符串或null。"
          },
          "ios_url": {
            "type": [
              "string",
              "null"
            ],
            "description": "iOS端链接。如果提供，必须是字符串。允许为空字符串或null。"
          },
          "url": {
            "type": [
              "string",
              "null"
            ],
            "description": "默认链接。如果提供，必须是字符串。允许为空字符串或null。"
          }
        },
        "additionalProperties": true,
        "description": "表示一个多端链接对象。对象本身可以为空，但如果提供了任何 *_url 字段，其值必须是字符串或者是null。"
      }
    }
  }
}
```

#### **支持参数**
:::html
<md-dt-table>
<md-dt-thead>
<md-dt-tr>
<md-dt-th style="width: 20%;">名称</md-dt-th>
<md-dt-th style="width: 15%;">类型</md-dt-th>
<md-dt-th style="width: 10%;">必填</md-dt-th>
<md-dt-th>描述</md-dt-th>
</md-dt-tr>
</md-dt-thead>
<md-dt-tbody>
<md-dt-tr level="0">
<md-dt-td>text</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>按钮上的文本。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="0">
<md-dt-td>type</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>按钮的类型。可选值：
-   default：黑色字体按钮，有边框
- primary：蓝色字体按钮，有边框
- danger：红色字体按钮，有边框
- text：黑色字体按钮，无边框
- primary_text：蓝色字体按钮，无边框
- danger_text：红色字体按钮，无边框
- primary_filled：蓝底白字按钮
- danger_filled：红底白字按钮
- laser：镭射按钮</md-dt-td>
</md-dt-tr>
<md-dt-tr level="0">
<md-dt-td>value</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>用户点击按钮对应回传的值。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="0">
<md-dt-td>multi_url</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>多端链接对象。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>pc_url</md-dt-td>
<md-dt-td>string, null</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>PC 端链接。如果提供，必须是字符串。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>android_url</md-dt-td>
<md-dt-td>string, null</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>Android 端链接。如果提供，必须是字符串。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>ios_url</md-dt-td>
<md-dt-td>string, null</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>iOS 端链接。如果提供，必须是字符串。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>url</md-dt-td>
<md-dt-td>string, null</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>默认链接。如果提供，必须是字符串。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>任何 *_url 字段</md-dt-td>
<md-dt-td>string, null</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>其它端链接。如果提供，必须是字符串。</md-dt-td>
</md-dt-tr>
</md-dt-tbody>
</md-dt-table>
:::
#### **变量示例**

```json
[
  {
    "text": "button1", //按钮文本
    "type": "default", //按钮样式
    "multi_url": { //跳转交互的参数配置
      "url": "https://open.feishu.cn",
      "pc_url": "",
      "android_url": "",
      "ios_url": ""
    },
    "value": "callback1"//回传交互的回传参数配置
  },
  {
    "text": "button2",
    "type": "default",
    "multi_url": {
      "url": "https://open.feishu.cn",
      "pc_url": "",
      "android_url": "",
      "ios_url": ""
    },
    "value": "callback2"
  }
]
```

### 选项数组（OptionArray）

绑定在下拉选择组件上的特有变量，用于定义每次发送卡片时可变的选项内容。

#### **适用组件**

- [下拉选择-单选](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/interactive-components/single-select-dropdown-menu)
- [下拉选择-多选](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/interactive-components/multi-select-dropdown-menu)

#### **Schema 结构**

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "text": {
        "type": "string"
      },
      "value": {
        "type": "string"
      },
      "icon": {
        "type": "object",
        "nullable": true,
        "properties": {
          "tag": {
            "type": "string",
            "enum": [
              "custom_icon",
              "standard_icon"
            ]
          },
          "token": {
            "type": "string",
            "nullable": true
          },
          "img_key": {
            "type": "string",
            "nullable": true
          }
        },
        "required": [
          "tag"
        ]
      },
      "selected": {
        "type": "boolean",
        "nullable": true
      }
    },
    "required": [
      "text",
      "value"
    ],
    "additionalProperties": false
  }
}
```

#### **支持参数**
:::html
<md-dt-table>
<md-dt-thead>
<md-dt-tr>
<md-dt-th style="width: 20%;">名称</md-dt-th>
<md-dt-th style="width: 15%;">类型</md-dt-th>
<md-dt-th style="width: 10%;">必填</md-dt-th>
<md-dt-th>描述</md-dt-th>
</md-dt-tr>
</md-dt-thead>
<md-dt-tbody>
<md-dt-tr level="0">
<md-dt-td>text</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>选项文本。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="0">
<md-dt-td>value</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>用户点击该选项对应回传的值。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="0">
<md-dt-td>icon</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>选项前缀图标。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>tag</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>图标类型的标签。可取值：
-   `standard_icon`：使用图标库中的图标。
- `custom_icon`：使用用自定义图片作为图标。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>token</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>图标库中图标的 token。当 `tag` 为 `standard_icon` 时生效。枚举值参见[图标库](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/enumerations-for-icons)。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>img_key</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>自定义前缀图标的图片 key。当 `tag` 为 `custom_icon` 时生效。图标 key 的获取方式：调用[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口，上传用于发送消息的图片，并在返回值中获取图片的 image_key。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="0">
<md-dt-td>selected</md-dt-td>
<md-dt-td>boolean</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>选择组件是否默认选中该选项：
-   `true` ：选择组件默认选中该选项
- `false` ：选择组件默认不选中该选项**注意**：对于单选组件，如果对多个选项配置了 `"selected": true`，仅有第一个选项的配置生效。</md-dt-td>
</md-dt-tr>
</md-dt-tbody>
</md-dt-table>
:::

#### **变量示例**

```json
[
  {
    "text": "选项 1",
    "value": "1",
    "selected": true,
    "icon": {
      "tag": "standard_icon",
      "token": "chat-forbidden_outlined"
    },
    "i18n_text": {
      "zh_cn": "选项 1"
    }
  },
  {
    "text": "选项 2",
    "value": "2",
    "icon": {
      "tag": "custom_icon",
      "img_key": "img_v3_02er_196d133d-aa22-4021-9b79-c11105223e4j"
    },
    "i18n_text": {
      "zh_cn": "选项 2"
    }
  },
  {
    "text": "选项 3",
    "value": "3",
    "i18n_text": {
      "zh_cn": "选项 3"
    }
  }
]
```

### 对象数组（ObjectArray）

数组类型的抽象变量，变量支持添加多个子变量。

#### **适用组件**

[循环容器](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/containers/recycling-container)


#### **变量示例**

```json
[
  {
   "name": "xxx"
  }
]
```

### 图片数组（ImageArray）

由图片组成的数组型变量，每个图片在赋值时需要输入图片的 image_key。

#### **适用组件**

[多图混排](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/content-components/multi-image-laylout)

#### **Schema 结构**

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "img_key": {
        "type": "string",
        "description": "图像资源的标识符"
      }
    },
    "required": ["img_key"],
    "description": "数组中的每个元素代表一个图像对象"
  },
}
```

#### **支持参数**

| **名称**  | **类型** | **必填** | **描述**                                                                                                                                                                                                       |
| ------- | ------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| img_key | string | 是      | 图片的 image_key。为确保安全合规，飞书卡片内的图片必须先上传到飞书服务，获取到 image_key 后再使用。你可以调用[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口，将用于发送消息的图片上传到飞书服务，并在返回结果中获取图片的 image_key。 |

#### **变量示例**

```json
[
    {
        "img_key": "img_v3_02er_196d133d-aa22-4021-9b79-c11105223e4j",
        "i18n_img_key": {
            "zh_cn": "img_v3_02er_196d133d-aa22-4021-9b79-c11105223e4j"
        }
    },
    {
        "img_key": "img_v3_02er_196d133d-aa22-4021-9b79-c11105223e4j",
        "i18n_img_key": {
            "zh_cn": "img_v3_02er_196d133d-aa22-4021-9b79-c11105223e4j"
        }
    }
]
```

### 对象（Object）

对象类型的抽象变量。

#### **适用组件**

回传交互的回传值中，允许绑定对象变量，回传一段数据结构给开发者的服务器。

#### **Schema 结构**

```json
{
  "type": "object"
}
```

#### **支持参数**

无

#### **变量示例**

```json
{
  "name": "xxx"
}
```

### 人员（Person）

人员变量。

#### **适用组件**

[人员](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/content-components/user-profile)组件

#### **Schema 结构**

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1 // 确保 id 不是空字符串
    }
  },
  "required": ["id"], // id 字段是必需的
}
```

#### **支持参数**

| **名称** | **类型** | **必填** | **描述**                                                                                                                                        |
| ------ | ------ | ------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| id     | string | 是      | 用户 ID，支持 Open ID、Union ID 和 User ID。了解如何获取 ID，参考[如何获取不同的用户 ID](/ssl:ttdoc/home/user-identity-introduction/open-id)。 |

#### **变量示例**

```json
{
  "id": "ou_c99c5f35d542efc7ee492afe11af19ef"
}
```

### 人员数组（PersonArray）

人员数组变量。

#### **适用组件**

- [人员列表](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/content-components/user-list)
- [人员选择-单选](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/interactive-components/single-select-user-picker)组件的选项列表属性
- [人员选择-多选](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/interactive-components/multi-select-user-picker)组件的选项列表属性

#### **Schema 结构**

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string",
        "minLength": 1 // 确保 id 不是空字符串
      },
      "selected": {
        "type": "boolean",
        "description": "表示选择组件是否默认选中该选项",
        "nullable": true
      }
    },
    "required": ["id"], // id 字段是必需的
  }
}
```

#### **支持参数**
:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width: 10%;">名称</md-th>
<md-th style="width: 10%;">类型</md-th>
<md-th style="width: 10%;">必填</md-th>
<md-th style="width: 40%;">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>
<md-tr>
<md-td>id</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>可传入多个用户 ID，支持 Open ID、Union ID 和 User ID。了解如何获取 ID，参考[如何获取不同的用户 ID](/ssl:ttdoc/home/user-identity-introduction/open-id)。</md-td>
</md-tr>
<md-tr>
<md-td>selected</md-td>
<md-td>boolean</md-td>
<md-td>否</md-td>
<md-td>选择组件是否默认选中该选项：
  -   `true` ：选择组件默认选中该选项
- `false` ：选择组件默认不选中该选项**注意**：对于单选组件，如果对多个选项配置了 `"selected": true`，仅有第一个选项的配置生效。</md-td>
</md-tr>
</md-tbody>
</md-table>
:::

#### **变量示例**

```json
[
  {
    "id": "ou_c99c5f35d542efc7ee492afe11af19ef",
    "selected": true
  },
  {
    "id": "ou_c99c5f35d542efc7ee492afe11af19ef"
  }
]
```

### 表格行数据（tableRowArray）

绑定在表格组件上的特有变量，用于定义多行每次发送卡片时可变的表格数据。仅支持表格自动生成。

#### **适用组件**

[表格](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-cardkit/components/table)组件


#### **变量示例**

```json
[
  {
    "customer_name": "飞书科技有限公司",
    "customer_scale": [
      {
        "text": "S2",
        "color": "blue"
      }
    ],
    "customer_arr": 16800
  },
  {
    "customer_name": "飞书科技有限公司",
    "customer_scale": [
      {
        "text": "S2",
        "color": "green"
      }
    ],
    "customer_arr": 168.23
  }
]
```

### 布尔（Boolean）

布尔变量。

#### **适用组件**

所有交互类组件中，禁用设置的变量。

#### **Schema 结构**

```json
{
  "type": "boolean"
}
```

#### **支持参数**

无

#### **变量示例**

```
false
```

### 图表（Chart）

绑定在图表组件上的特有变量，对应图表定义（`chart_spec` 参数）的数据。

#### **适用组件**

[图表](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/feishu-card-cardkit/components/chart)组件

#### **变量示例**

```json
{
  "type": "bar",
  "title": {
    "text": "柱状图"
  },
  "data": {
    "values": [
      {
        "type": "foo",
        "year": "1930",
        "value": 129
      },
      {
        "type": "foo",
        "year": "1940",
        "value": 133
      },
      {
        "type": "foo",
        "year": "1950",
        "value": 130
      },
      {
        "type": "foo",
        "year": "1960",
        "value": 126
      },
      {
        "type": "foo",
        "year": "1970",
        "value": 117
      },
      {
        "type": "foo",
        "year": "1980",
        "value": 114
      },
      {
        "type": "bar",
        "year": "1930",
        "value": 22
      },
      {
        "type": "bar",
        "year": "1940",
        "value": 13
      },
      {
        "type": "bar",
        "year": "1950",
        "value": 25
      },
      {
        "type": "bar",
        "year": "1960",
        "value": 29
      },
      {
        "type": "bar",
        "year": "1970",
        "value": 38
      },
      {
        "type": "bar",
        "year": "1980",
        "value": 41
      },
      {
        "type": "baz",
        "year": "1930",
        "value": 73
      },
      {
        "type": "baz",
        "year": "1940",
        "value": 84
      },
      {
        "type": "baz",
        "year": "1950",
        "value": 100
      },
      {
        "type": "baz",
        "year": "1960",
        "value": 85
      },
      {
        "type": "baz",
        "year": "1970",
        "value": 92
      },
      {
        "type": "baz",
        "year": "1980",
        "value": 123
      }
    ]
  },
  "xField": [
    "year",
    "type"
  ],
  "yField": "value",
  "seriesField": "type",
  "legends": {
    "visible": true,
    "orient": "bottom"
  }
}
```

## 旧版卡片支持的变量

如果你使用的是旧版卡片（JSON 1.0 结构），你可参考本小节中的变量说明排查问题。

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 10%;">变量类型</md-th>
      <md-th style="width: 50%;">描述</md-th>
      <md-th style="width: 25%;">适用组件和属性</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>文本</md-td>
      <md-td>一段字符串变量，赋值时可以输入任意文本。</md-td>
      <md-td>文本、富文本内容；按钮、图片、选项等组件的文本属性；标题组件的[主题样式](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/content-components/title#6056191b)属性。</md-td>
    </md-tr>
    <md-tr>
      <md-td>富文本</md-td>
      <md-td>Markdown 格式的字符串变量，赋值时可以输入 Markdown 标签文本，渲染时按对应的富文本样式渲染。支持的 Markdown 语法可参考[富文本组件](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/content-components/rich-text)。</md-td>
      <md-td>文本、富文本内容；按钮、图片、选项等组件的文本属性</md-td>
    </md-tr>
    <md-tr>
      <md-td>整数</md-td>
      <md-td>整数变量，赋值时仅可输入整数数值。</md-td>
      <md-td>组件内数值类型的属性</md-td>
    </md-tr>
    <md-tr>
      <md-td>图片</md-td>
      <md-td>图片变量，赋值时需要输入图片的 image_key。为确保安全合规，飞书卡片内的图片必须先上传到飞书服务，获取到 image_key 后再使用。

你可以调用[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口，将用于发送消息的图片上传到飞书服务，并在返回结果中获取图片的 image_key。</md-td>
      <md-td>图片类型组件</md-td>
    </md-tr>
    <md-tr>
      <md-td>分端差异化链接</md-td>
      <md-td>链接变量，用于设置跳转交互的跳转地址。支持配置差异化跳转，即分别为桌面端、安卓端、iOS 端配置不同的跳转链接。</md-td>
      <md-td>支持跳转交互的属性</md-td>
    </md-tr>
    <md-tr>
      <md-td>日期</md-td>
      <md-td>日期变量，赋值格式 yyyy-MM-dd。</md-td>
      <md-td>[日期选择器组件](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/interactive-components/date-picker)的 **默认选项配置** 属性</md-td>
    </md-tr>
    <md-tr>
      <md-td>时间</md-td>
      <md-td>时间变量，赋值格式 hh:mm。</md-td>
      <md-td>[时间选择器组件](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/interactive-components/time-selector)的 **默认选项配置** 属性</md-td>
    </md-tr>
    <md-tr>
      <md-td>日期时间</md-td>
      <md-td>日期时间变量，赋值格式 yyyy-MM-dd hh:mm。</md-td>
      <md-td>[日期时间选择器组件](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/interactive-components/date-time-picker)的 **默认选项配置** 属性</md-td>
    </md-tr>
    <md-tr>
      <md-td>按钮组</md-td>
      <md-td>数组型变量，用于描述一组按钮属性。每项子属性包含以下配置：
- 按钮文案
- 按钮交互属性配置：链接跳转、交互事件。

数组子项内容要严格按以下格式声明：
```json
[
  {
    "text": "button1", //按钮文本
    "type": "default", //按钮样式
    "multi_url": { //跳转交互的参数配置
      "url": "https://open.feishu.cn",
      "pc_url": "",
      "android_url": "",
      "ios_url": ""
    },
    "value": "callback1"//回传交互的回传参数配置
  },
  {
    "text": "button2",
    "type": "default",
    "multi_url": {
      "url": "https://open.feishu.cn",
      "pc_url": "",
      "android_url": "",
      "ios_url": ""
    },
    "value": "callback2"
  }
]
```
      </md-td>
      <md-td>[折叠按钮组组件](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/interactive-components/overflow)</md-td>
    </md-tr>
    <md-tr>
      <md-td>文本数组</md-td>
      <md-td>由字符串组成的数组型变量，数组每一项为一个字符串。</md-td>
      <md-td>[人员选择-单选组件](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/interactive-components/single-select-user-picker)和[人员选择-多选组件](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/interactive-components/multi-select-user-picker)</md-td>
    </md-tr>
    <md-tr>
      <md-td>选项数组</md-td>
      <md-td>
绑定在下拉选择组件上的特有变量，用于定义每次发送卡片时可变的选项内容。

数组子项内容要严格按以下格式声明：
```json
[
  {
    "text": "option1", //选项文本
    "value": "callback1" //选项的回传参数值
  },
  {
    "text": "option2",
    "value": "callback2"
  }
]
```
      </md-td>
      <md-td>[下拉选择-单选组件](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/interactive-components/single-select-dropdown-menu)和[下拉选择-多选组件](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/interactive-components/multi-select-dropdown-menu)</md-td>
    </md-tr>
    <md-tr>
      <md-td>对象数组</md-td>
      <md-td>数组类型的抽象变量，变量支持添加多个子变量。</md-td>
      <md-td>[循环容器](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/containers/recycling-container)</md-td>
    </md-tr>
    <md-tr>
      <md-td>图片数组</md-td>
      <md-td>由图片组成的数组型变量，每个图片在赋值时需要输入图片的 image_key。</md-td>
      <md-td>[多图混排组件](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/content-components/multi-image-laylout)</md-td>
    </md-tr>
    <md-tr>
      <md-td>对象</md-td>
      <md-td>对象类型的抽象变量。</md-td>
      <md-td>回传交互的回传值中，允许绑定对象变量，回传一段数据结构给开发者的服务器。</md-td>
    </md-tr>
    
    <md-tr>
      <md-td>图表</md-td>
      <md-td>绑定在图表组件上的特有变量，对应图表定义（`chart_spec` 参数）的数据。
```json
{
  "type": "bar",
  "title": {
    "text": "柱状图"
  },
  "data": {
    "values": [
      {
        "type": "foo",
        "year": "1930",
        "value": 129
      },
      {
        "type": "foo",
        "year": "1940",
        "value": 133
      },
      {
        "type": "foo",
        "year": "1950",
        "value": 130
      },
      {
        "type": "foo",
        "year": "1960",
        "value": 126
      },
      {
        "type": "foo",
        "year": "1970",
        "value": 117
      },
      {
        "type": "foo",
        "year": "1980",
        "value": 114
      },
      {
        "type": "bar",
        "year": "1930",
        "value": 22
      },
      {
        "type": "bar",
        "year": "1940",
        "value": 13
      },
      {
        "type": "bar",
        "year": "1950",
        "value": 25
      },
      {
        "type": "bar",
        "year": "1960",
        "value": 29
      },
      {
        "type": "bar",
        "year": "1970",
        "value": 38
      },
      {
        "type": "bar",
        "year": "1980",
        "value": 41
      },
      {
        "type": "baz",
        "year": "1930",
        "value": 73
      },
      {
        "type": "baz",
        "year": "1940",
        "value": 84
      },
      {
        "type": "baz",
        "year": "1950",
        "value": 100
      },
      {
        "type": "baz",
        "year": "1960",
        "value": 85
      },
      {
        "type": "baz",
        "year": "1970",
        "value": 92
      },
      {
        "type": "baz",
        "year": "1980",
        "value": 123
      }
    ]
  },
  "xField": [
    "year",
    "type"
  ],
  "yField": "value",
  "seriesField": "type",
  "legends": {
    "visible": true,
    "orient": "bottom"
  }
}
```
      </md-td>
      <md-td>
图表组件
      </md-td>
    </md-tr> 
    
    
  </md-tbody>
</md-table>
:::