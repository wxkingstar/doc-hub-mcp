<!--
title: 下拉选择-单选
id: 7343499772501295108
fullPath: /uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/interactive-components/single-select-dropdown-menu
updatedAt: 1735814913000
source: https://open.feishu.cn/document/feishu-cards/card-components/interactive-components/single-select-dropdown-menu
-->
# 下拉选择-单选组件

下拉选择-单选组件支持自定义单选菜单的选项文本、图标和回传参数，是一种交互组件。本文档介绍下拉选择-单选组件的 JSON 结构和相关属性。

本文档介绍下拉选择-单选组件的 JSON 1.0 结构，要查看新版 JSON 2.0 结构，参考[下拉选择-单选](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/interactive-components/single-select-dropdown-menu)。



![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/13ce9b48fa13821486eefd0dcb0b74e9_SIX5GpBGRj.png?height=339&lazyload=true&maxWidth=400&width=667)

## 注意事项

- 下拉选择-单选组件最低支持的飞书版本为 V3.7.0。如果低于该版本，用户使用该组件时会提示 **当前版本不支持查看此消息**。
- 在卡片 JSON 代码中，若下拉选择-单选组件直接位于卡片根节点，而非嵌套在其它组件中，你需将其 JSON 数据配置在[交互模块](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/component-list/common-components-and-elements)（`"tag": "action"`）的 `actions` 字段中使用。

## 嵌套规则

下拉选择-单选组件支持嵌套在分栏、表单容器、折叠面板、循环容器中使用。

## 组件属性

### JSON 结构

下拉选择-单选组件的结构如下所示：
```json
{
    "tag": "select_static", // 下拉选择-单选组件的标签。
    "type": "text", // 组件边框样式。默认值 default。
    "name": "select_static1", // 下拉选择-单选组件的唯一标识。当下拉选择-单选组件内嵌在表单容器时，该属性生效，用于识别用户提交的文本属于哪个下拉选择-单选组件。
    "required": false, // 下拉选择-单选组件的内容是否必填。默认值 false。当下拉选择-单选组件内嵌在表单容器时，该属性可用。其它情况将报错或不生效。
    "disabled": false, // 是否禁用该单选组件。默认值 false。
    "initial_option": "选项1", // 选项展示的初始内容。默认为空。
    "placeholder": {
        // 下拉选择组件内的占位文本。
        "tag": "plain_text",
        "content": "默认提示文本"
    },
    "width": "default", // 下拉选择组件的宽度。
    "behaviors": [
        { // 为下拉选择组件配置回传交互。
            "type": "callback",
            "value": {
                // 回传交互数据。支持 string 或 object 数据类型。开放平台 SDK 仅支持 object 类型的回传交互数据。
                "key": "value"
            }
        }
    ],
    "options": [
        // 选项配置
        {
            "text": {
                // 选项名称
                "tag": "plain_text",
                "content": "我是交互组件"
            },
            "icon": {
                // 添加图标作为选项前缀图标。支持自定义或使用图标库中的图标。
                "tag": "standard_icon", // 图标类型。
                "token": "chat-forbidden_outlined", // 图标的 token。仅在 tag 为 standard_icon 时生效。
                "color": "orange", // 图标颜色。仅在 tag 为 standard_icon 时生效。
                "img_key": "img_v2_38811724" // 图片的 key。仅在 tag 为 custom_icon 时生效。
            },
            "value": "selectDemo1" // 选项回调值，支持 string 类型数据。
        }
    ],
    "confirm": {
        // 二次确认弹窗配置
        "title": {
            "tag": "plain_text",
            "content": "弹窗标题"
        },
        "text": {
            "tag": "plain_text",
            "content": "弹窗正文文案"
        }
    }
}
```

### 字段说明

下拉选择-单选组件的字段说明如下表。
:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width: 18%;">字段</md-th>
<md-th style="width: 10%;">是否必填</md-th>
<md-th style="width: 15%;">类型</md-th>
<md-th style="width: 15%;">默认值</md-th>
<md-th>说明</md-th>
</md-tr>
</md-thead>
<md-tbody>
<md-tr>
<md-td>
tag
</md-td>
<md-td>是</md-td>
<md-td>string</md-td>
<md-td>/</md-td>
<md-td>
组件的标签。下拉选择-单选组件取固定值 `select_static`。
</md-td>
</md-tr>
<md-tr>
<md-td>
type
</md-td>
<md-td>否</md-td>
<md-td>string</md-td>
<md-td>default</md-td>
<md-td>
组件边框样式。可选值：
- default：带边框样式
- text：不带边框的纯文本样式
</md-td>
</md-tr>
<md-tr>
      <md-td>name</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      <md-td>
        单选组件的唯一标识。当单选组件内嵌在表单容器时，该属性生效，用于识别用户提交的文本属于哪个单选组件。

**注意**：当单选组件嵌套在表单容器中时，该字段必填且需在卡片全局内唯一。
      </md-td>
    </md-tr>
<md-tr>
<md-td>
required
</md-td>
<md-td>否</md-td>
<md-td>Boolean</md-td>
<md-td>false</md-td>
<md-td>
单选组件的内容是否必选。当组件内嵌在表单容器中时，该属性可用。其它情况将报错或不生效。可取值：
- true：单选组件必选。当用户点击表单容器的“提交”时，未填写单选组件，则前端提示“有必填项未填写”，不会向开发者的服务端发起回传请求。
- false：单选组件选填。当用户点击表单容器的“提交”时，未填写单选组件，仍提交表单容器中的数据。
</md-td>
</md-tr>
<md-tr>
<md-td>
disabled
</md-td>
<md-td>否</md-td>
<md-td>Boolean</md-td>
<md-td>false</md-td>
<md-td>
是否禁用该单选组件。该属性仅支持飞书 V7.4 及以上版本的客户端。可选值：
- true：禁用单选组件组件
- false：单选组件组件保持可用状态
</md-td>
</md-tr>
</md-tr>
   <md-tr>
      <md-td>initial_option</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      <md-td>下拉选择组件的初始选项的内容。该配置将会覆盖 `placeholder` 配置的占位文本。</md-td>
    </md-tr>
<md-tr>
<md-td>
placeholder
</md-td>
<md-td>否</md-td>
<md-td>Object</md-td>
<md-td>/</md-td>
<md-td>
下拉选择组件内的占位文本。
</md-td>
</md-tr>
<md-tr>
<md-td>
└ tag
</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>plain_text</md-td>
<md-td>
占位提示标签。固定值为 `plain_text`。
</md-td>
</md-tr>
<md-tr>
<md-td>
└ content
</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>空</md-td>
<md-td>
占位文本的内容。
</md-td>
</md-tr>
<md-tr>
<md-td>
width
</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>default</md-td>
<md-td>
单选组件的宽度。支持以下枚举值：
- default：默认宽度
- fill：卡片最大支持宽度
- [100,∞)px：自定义宽度。超出卡片宽度时将按最大支持宽度展示
</md-td>
</md-tr>
  
 <md-tr>
      <md-td>behaviors</md-td>
      <md-td>是</md-td>
      <md-td>Struct</md-td>
      <md-td>/</md-td>
      <md-td>配置交互类型和具体交互行为。详情参考[配置卡片交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/configuring-card-interactions)中 behaviors 的字段说明。</md-td>
    </md-tr>
  
  
  
  
  
<md-tr>
<md-td>
options
</md-td>
<md-td>否</md-td>
<md-td>Array of objects</md-td>
<md-td>/</md-td>
<md-td>
选项的配置。
</md-td>
</md-tr>
<md-tr>
<md-td>
└ text
</md-td>
<md-td>是</md-td>
<md-td>Object</md-td>
<md-td>/</md-td>
<md-td>
选项的名称。
</md-td>
</md-tr>
<md-tr>
<md-td>
└ └ tag
</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>plain_text</md-td>
<md-td>
选项名称的标签。固定值为 `plain_text`。
</md-td>
</md-tr>
<md-tr>
<md-td>
└ └ content
</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>空</md-td>
<md-td>
选项名称的文本。
</md-td>
</md-tr>
<md-tr>
<md-td>└ icon</md-td>
<md-td>否</md-td>
<md-td>Object</md-td>
<md-td>/</md-td>
<md-td>添加图标作为文本前缀图标。支持自定义或使用图标库中的图标。</md-td>
</md-tr>
<md-tr>
<md-td>└└  tag</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>/</md-td>
<md-td>图标类型的标签。可取值：
- `standard_icon`：使用图标库中的图标。
- `custom_icon`：使用用自定义图片作为图标。</md-td>
</md-tr>
<md-tr>
<md-td>└└  token</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>/</md-td>
<md-td>图标库中图标的 token。当 `tag` 为 `standard_icon` 时生效。枚举值参见[图标库](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/enumerations-for-icons)。</md-td>
</md-tr>
<md-tr>
<md-td>└└  color</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>/</md-td>
<md-td>图标的颜色。支持设置线性和面性图标（即 token 末尾为 `outlined` 或 `filled` 的图标）的颜色。当 `tag` 为 `standard_icon` 时生效。枚举值参见[颜色枚举值](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/enumerations-for-fields-related-to-color)。</md-td>
</md-tr>
<md-tr>
<md-td>└└  img_key</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>/</md-td>
<md-td>自定义前缀图标的图片 key。当 `tag` 为 `custom_icon` 时生效。
  
图标 key 的获取方式：调用[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口，上传用于发送消息的图片，并在返回值中获取图片的 image_key。</md-td>
</md-tr>
<md-tr>
  <md-td>
    └ value
  </md-td>
  <md-td>是</md-td>
  <md-td>String</md-td>
  <md-td>/</md-td>
  <md-td>
    自定义选项回调值。当用户点击交互组件的选项后，会将 value 的值返回给接收回调数据的服务器。后续你可以通过服务器接收的 value 值进行业务处理。
    
**注意**：同一个选择组件内，各选项的 value 值不可重复，**否则将导致用户侧交互异常**，且服务器无法识别用户点击的是哪个选项。
  </md-td>
</md-tr>
<md-tr>
<md-td>confirm</md-td>
<md-td>否</md-td>
<md-td>Struct</md-td>
<md-td>默认不生效此属性。</md-td>
<md-td>
二次确认弹窗配置。指在用户提交时弹出二次确认弹窗提示；只有用户点击确认后，才提交输入的内容。该字段默认提供了确认和取消按钮，你只需要配置弹窗的标题与内容即可。
  
<strong>注意</strong>：<code>confirm</code> 字段仅在用户点击包含提交属性的按钮时才会触发二次确认弹窗。
</md-td>
</md-tr>
<md-tr>
<md-td>confirm.title</md-td>
<md-td>是</md-td>
<md-td>Struct</md-td>
<md-td>/</md-td>
<md-td>二次确认弹窗标题。</md-td>
</md-tr>
<md-tr>
<md-td>confirm.title.tag</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>plain_text</md-td>
<md-td>二次确认弹窗标题文本的标签。固定取值为 `plain_text`。</md-td>
</md-tr>
<md-tr>
<md-td>confirm.title.content</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>/</md-td>
<md-td>二次确认弹窗标题的内容。</md-td>
</md-tr>
<md-tr>
<md-td>confirm.text</md-td>
<md-td>是</md-td>
<md-td>Struct</md-td>
<md-td>/</md-td>
<md-td>二次确认弹窗的文本内容。</md-td>
</md-tr>
<md-tr>
<md-td>confirm.text.tag</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>plain_text</md-td>
<md-td>二次确认弹窗文本的标签。固定取值为 `plain_text`。</md-td>
</md-tr>
<md-tr>
<md-td>confirm.text.content</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>/</md-td>
<md-td>二次确认弹窗文本的具体内容。</md-td>
</md-tr>
</md-tbody>
</md-table>

:::

### 回调结构

为组件成功配置交互后，用户基于组件进行交互时，你在开发者后台配置的请求地址将会收到回调数据。
- 如果你添加的是新版卡片回传交互回调(`card.action.trigger`)，可参考[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)了解回调结构。
- 如果你添加的是旧版卡片回传交互回调(`card.action.trigger_v1`)，可参考[消息卡片回传交互（旧）](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/configuring-card-callbacks/card-callback-structure)了解回调结构。

## 示例代码

以下的 JSON 示例代码可实现如下图所示的卡片效果：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/13ce9b48fa13821486eefd0dcb0b74e9_Rk1KRWMzeC.png?height=339&lazyload=true&maxWidth=400&width=667)

```json
{
  "i18n_elements": {
    "zh_cn": [
      {
        "tag": "action",
        "actions": [
          {
            "tag": "select_static",
            "placeholder": {
              "tag": "plain_text",
              "content": "请选择"
            },
            "options": [
              {
                "text": {
                  "tag": "plain_text",
                  "content": "选项1"
                },
                "value": "1",
                "icon": {
                  "tag": "standard_icon",
                  "token": "signature_outlined"
                }
              },
              {
                "text": {
                  "tag": "plain_text",
                  "content": "选项2"
                },
                "value": "2",
                "icon": {
                  "tag": "standard_icon",
                  "token": "signature_outlined"
                }
              }
            ],
            "type": "default",
            "width": "default",
            "initial_option": "选项1"
          }
        ]
      }
    ]
  }
}
```