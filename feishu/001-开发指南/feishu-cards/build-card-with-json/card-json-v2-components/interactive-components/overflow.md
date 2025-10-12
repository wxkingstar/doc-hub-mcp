<!--
title: 折叠按钮组
id: 7453076566151659548
fullPath: /uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/interactive-components/overflow
updatedAt: 1749546620000
source: https://open.feishu.cn/document/feishu-cards/card-json-v2-components/interactive-components/overflow
-->
# 折叠按钮组组件

折叠按钮组支持添加多个按钮并将其折叠。点击按钮组将会展示组内所有按钮。适用于按钮数量较多的场景。
:::html
<md-alert type="tip">
本文档介绍折叠按钮组组件的 JSON 2.0 结构和相关属性。了解 1.0 结构和属性，参考[折叠按钮组](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/interactive-components/overflow)。
</md-alert>
:::
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/dded93a79c281088c33102b2af4fea31_ubaZ7yDL26.png?height=206&lazyload=true&maxWidth=500&width=847)

## 嵌套规则

- JSON 2.0 结构中，折叠按钮组组件支持嵌套在表单容器、折叠面板、循环容器、交互容器、分栏组件中使用。
- 搭建工具中，折叠按钮组组件不支持嵌套在交互容器中。

## 组件属性

### JSON 结构

折叠按钮组组件的完整 JSON 2.0 结构如下所示：
```json
{
    "schema": "2.0",
    "body": {
        "elements": [
            {
                "tag": "overflow",
                "element_id": "custom_id", // 操作组件的唯一标识。用于在调用组件相关接口中指定组件。需开发者自定义。
                "margin": "0px 0px 0px 0px", // 组件的外边距，默认值 "0"，支持范围 [-99,99]px。
                "width": "fill", // 折叠按钮组的宽度。默认值为 default。
                "options": [
                    // 在此添加折叠按钮组当中的选项按钮。
                    { // 为按钮添加文本。
                        "text": {
                            "tag": "plain_text", // 文本的标签。固定值为 plain_text。
                            "content": "这是一个链接跳转" // 文本的内容，最多支持 100 个字符。
                        },
                        "multi_url": { // 为按钮添加跳转链接。
                            "url": "https://open.feishu.cn/document/home/index", // 兜底的跳转地址。
                            "pc_url": "",
                            "ios_url": "",
                            "android_url": ""
                        },
                        "value": "document" // 该按钮的回传参数值。当用户点击选项后，应用会将该值回调至卡片请求地址。
                    }
                ],
                "behaviors": [ // 当用户点击折叠按钮组内的任意按钮后，除按钮本身的回传数据以外，还可通过 behaviors 参数回传更多数据。
                    {
                        "type": "callback", // 声明交互类型是回传数据到服务端的回传交互。
                        "value": {
                            // 开发者自定义的回传交互数据。支持 object 数据类型。开放平台 SDK 仅支持 object 类型的回传交互数据。
                            "key_1": "value_1"
                        }
                    }
                ],
                "confirm": {
                    // 二次确认弹窗配置
                    "title": {
                        "tag": "plain_text",
                        "content": "title"
                    },
                    "text": {
                        "tag": "plain_text",
                        "content": "content"
                    }
                }
            }
        ]
    }
}
```

### 字段说明

折叠按钮组组件各字段说明如下表所示：
:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width: 15%;">名称</md-th>
<md-th>必填</md-th>
<md-th>类型</md-th>
<md-th>默认值</md-th>
<md-th style="width: 50%;">说明</md-th>
</md-tr>
</md-thead>
<md-tbody>
<md-tr>
<md-td>tag</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>/</md-td>
<md-td>折叠按钮组的标签。固定值为 `overflow`。</md-td>
</md-tr>
  
  
  
<md-tr>
      <md-td>element_id</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      <md-td>操作组件的唯一标识。JSON 2.0 新增属性。用于在调用[组件相关接口](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/cardkit-v1/card-element/create)中指定组件。在同一张卡片内，该字段的值全局唯一。仅允许使用字母、数字和下划线，必须以字母开头，不得超过 20 字符。</md-td></md-tr>
  
    <md-tr>
      <md-td>margin</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>0</md-td>
      <md-td>组件的外边距。JSON 2.0 新增属性。值的取值范围为 [-99,99]px。可选值：
- 单值，如 "10px"，表示组件的四个外边距都为 10 px。
- 双值，如 "4px 0"，表示组件的上下外边距为 4 px，左右外边距为 0 px。使用空格间隔（边距为 0 时可不加单位）。
- 多值，如 "4px 0 4px 0"，表示组件的上、右、下、左的外边距分别为 4px，12px，4px，12px。使用空格间隔。</md-td>
    </md-tr>  
  
  
  
  
  
  
  
  
  
  
<md-tr>
<md-td>width</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>default</md-td>
<md-td>折叠按钮组的宽度。支持以下枚举值：
- default：默认宽度
- fill：卡片最大支持宽度
- [100,∞)px：自定义宽度。超出卡片宽度时将按最大支持宽度展示</md-td>
</md-tr>
<md-tr>
<md-td>options</md-td>
<md-td>是</md-td>
<md-td>Struct[]</md-td>
<md-td>空</md-td>
<md-td>折叠按钮组当中的选项按钮。详见下文 `options` 字段说明。</md-td>
</md-tr>
<md-tr>
<md-td>behaviors</md-td>
<md-td>否</md-td>
<md-td>Array</md-td>
<md-td>空</md-td>
<md-td>当用户点击折叠按钮组内的任意按钮后，除按钮本身的回传数据以外，还可通过 behaviors 参数回传更多数据。配置示例如下：
  
```json
{
    "behaviors": [
        {
            "type": "callback", // 声明交互类型是回传数据到服务端的请求回调交互。
            "value": {
                // 回传交互数据。支持 object 数据类型。开放平台 SDK 仅支持 object 类型的回传交互数据。
                "key_1": "value_1" // 示例数据。
            }
        }
    ]
}
```
</md-td>
</md-tr>
<md-tr>
<md-td colspan="5" style="text-align: center;">confirm</md-td>
<md-td>否</md-td>
<md-td>Struct</md-td>
<md-td>默认不生效此属性。</md-td>
<md-td>二次确认弹窗配置。指在用户提交时弹出二次确认弹窗。
  
**提示**：该字段默认提供了确认和取消按钮，你只需要配置弹窗的标题与内容即可。

</md-td>
</md-tr>
<md-tr>
<md-td colspan="5" style="text-align: center;">└ title</md-td>
<md-td>是</md-td>
<md-td>Struct</md-td>
<md-td>/</md-td>
<md-td>二次确认弹窗标题。</md-td>
</md-tr>
<md-tr>
<md-td colspan="5" style="text-align: center;">└ └ tag</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>plain_text</md-td>
<md-td>二次确认弹窗标题文本的标签。固定取值为 plain_text。</md-td>
</md-tr>
<md-tr>
<md-td colspan="5" style="text-align: center;">└ └ content</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>/</md-td>
<md-td>二次确认弹窗标题的内容。</md-td>
</md-tr>
<md-tr>
<md-td colspan="5" style="text-align: center;">└ text</md-td>
<md-td>是</md-td>
<md-td>Struct</md-td>
<md-td>/</md-td>
<md-td>二次确认弹窗文本的内容。</md-td>
</md-tr>
<md-tr>
<md-td colspan="5" style="text-align: center;">└ └ tag</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>plain_text</md-td>
<md-td>二次确认弹窗文本的标签。固定取值为 plain_text。</md-td>
</md-tr>
<md-tr>
<md-td colspan="5" style="text-align: center;">└ └ content</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>/</md-td>
<md-td>二次确认弹窗文本的具体内容。</md-td>
</md-tr>
</md-tbody>
</md-table>
:::

#### `options` 字段说明

你可在 `option` 字段中添加并配置多个按钮。相关字段描述如下表所示。
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 20%;">字段名称</md-th>
      <md-th>是否必填</md-th>
      <md-th>类型</md-th>
      <md-th>默认值</md-th>
      <md-th style="width: 40%;">说明</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>text</md-td>
      <md-td>否</md-td>
      <md-td>Struct</md-td>
      <md-td>空</md-td>
      <md-td>按钮上的文本。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ tag</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>plain_text</md-td>
      <md-td>文本的标签。固定值为 `plain_text`。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ content</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>请输入</md-td>
      <md-td>文本的内容。最多支持 100 个字符。</md-td>
    </md-tr>
    <md-tr>
      <md-td>multi_url</md-td>
      <md-td>否</md-td>
      <md-td>Struct</md-td>
      <md-td>空</md-td>
      <md-td>为按钮添加多端的跳转链接。</md-td>
    </md-tr>
     <md-tr>
      <md-td>└ url</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      <md-td>兜底的跳转链接。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ android_url</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      <md-td>Android 端的跳转链接。可配置为 `lark://msgcard/unsupported_action` 声明当前端不允许跳转。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ ios_url</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      <md-td>iOS 端的跳转链接。可配置为 `lark://msgcard/unsupported_action` 声明当前端不允许跳转。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ pc_url</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      <md-td>PC 端的跳转链接。可配置为 `lark://msgcard/unsupported_action` 声明当前端不允许跳转。</md-td>
    </md-tr>
    <md-tr>
      <md-td>value</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>空</md-td>
      <md-td>该按钮的回传参数值。当用户点击选项后，应用会将该值返回至卡片请求地址。</md-td>
    </md-tr>
  </md-tbody>
</md-table>

:::

## 回调示例



折叠按钮组组件默认拥有交互能力。当用户点击折叠按钮组中的按钮后，你在开发者后台配置的请求地址将会收到回调数据。

:::html
<md-alert type="tip">
如果折叠按钮组中包含多个按钮组件，你需配置自定义回传参数，以区分用户点击的是哪个按钮。详情参考[配置卡片交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/configuring-card-interactions)。
</md-alert>
:::

- 如果你添加的是新版卡片回传交互回调(`card.action.trigger`)，卡片将默认将回传如下所示的交互事件。详情参考[卡片回传交互回调](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)。

- 如果你添加的是旧版卡片回传交互回调(`card.action.trigger_v1`)，可参考[消息卡片回传交互（旧）](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/configuring-card-callbacks/card-callback-structure)了解回调结构。

新版卡片回传交互(`card.action.trigger`)折叠按钮组回调示例：


```json
{
    "schema": "2.0", // 回调的版本
    "header": { // 回调基本信息
        "event_id": "f7984f25108f8137722bb63c*****", // 回调的唯一标识
        "token": "066zT6pS4QCbgj5Do145GfDbbag*****", // 应用的 Verification Token
        "create_time": "1603977298000000", // 	回调发送的时间，接近回调发生的时间
        "event_type": "card.action.trigger", // 回调类型卡片交互场景中，固定为 "card.action.trigger"
        "tenant_key": "2df73991750*****", // 应用归属的 tenant key，即租户唯一标识
        "app_id": "cli_a5fb0ae6a4******" // 应用的 App ID
    },
    "event": { // 回调的详细信息
        "operator": { // 回调触发者信息
            "tenant_key": "2df73991750*****", // 回调触发者的 tenant key，即租户唯一标识
            "user_id": "867*****", // 回调触发者的 user ID。当应用开启“获取用户 user ID”权限后，该参数返回
            "open_id": "ou_3c14f3a59eaf2825dbe25359f15*****", // 	回调触发者的 Open ID
	         "union_id": "on_cad4860e7af114fb4ff6c5d496d*****" // 回调触发者的 Union ID
        },
        "token": "c-295ee57216a5dc9de90fefd0aadb4b1d7d******", // 更新卡片用的凭证，有效期为 30 分钟，最多可更新 2 次
        "action": { // 用户操作折叠按钮组内任意按钮回传的数据
            "value": { // 如果折叠按钮组组件中配置了 value（历史属性）或 behaviors 属性，则在此处返回自定义的回传交互参数
                "key_1": "value_1"
            },
            "tag": "overflow", // 折叠按钮组组件的标签。表示用户点击的是折叠按钮组中的按钮
            "option": "button_1" // 折叠按钮组内用户点击的具体按钮的回传数据。需开发者通过 options.value 自定义该值
        },
        "host": "im_message", // 卡片展示场景
        "context": { //  卡片展示场景相关信息
            "open_message_id": "om_574d639e4a44e4dd646eaf628e2*****", // 卡片所在的消息 ID
            "open_chat_id": "oc_e4d2605ca917e695f54f11aaf56*****" // 卡片所在的会话 ID
        }
    }
}
```

## 示例代码

以下 JSON 2.0 结构的示例代码可实现如下图所示的卡片效果。该卡片由三个按钮组件和一个折叠按钮组组件组成，该折叠按钮组中折叠了两个按钮，且分别配置了回传参数 `button_4` 和 `button_5`：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/dded93a79c281088c33102b2af4fea31_UTEbSh584a.png?height=206&lazyload=true&maxWidth=500&width=847)
```json
{
    "schema": "2.0",
    "config": {
        "update_multi": true
    },
    "body": {
        "direction": "horizontal",
        "horizontal_spacing": "8px",
        "vertical_spacing": "8px",
        "horizontal_align": "left",
        "vertical_align": "top",
        "padding": "12px 12px 12px 12px",
        "elements": [
            {
                "tag": "button",
                "text": {
                    "tag": "plain_text",
                    "content": "按钮 1"
                },
                "type": "default",
                "width": "default",
                "size": "medium",
                "margin": "0px 0px 0px 0px"
            },
            {
                "tag": "button",
                "text": {
                    "tag": "plain_text",
                    "content": "按钮 2"
                },
                "type": "default",
                "width": "default",
                "size": "medium",
                "margin": "0px 0px 0px 0px"
            },
            {
                "tag": "button",
                "text": {
                    "tag": "plain_text",
                    "content": "按钮 3"
                },
                "type": "default",
                "width": "default",
                "size": "medium",
                "margin": "0px 0px 0px 0px"
            },
            {
                "tag": "overflow",
                "width": "default",
                "options": [
                    {
                        "text": {
                            "tag": "plain_text",
                            "content": "按钮 4"
                        },
                        "value": "button_4"
                    },
                    {
                        "text": {
                            "tag": "plain_text",
                            "content": "按钮 5"
                        },
                        "value": "button_5"
                    }
                ]
            }
        ]
    }
}
```