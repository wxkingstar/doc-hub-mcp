<!--
title: 勾选器
id: 7453075757222723586
fullPath: /uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/interactive-components/checker
updatedAt: 1758769348000
source: https://open.feishu.cn/document/feishu-cards/card-json-v2-components/interactive-components/checker
-->
# 勾选器组件

勾选器是一种交互组件，支持配置回调响应，主要用于任务勾选的场景。

:::html
<md-alert type="tip">
本文档介绍勾选器组件的 JSON 2.0 结构，要查看历史 JSON 1.0 结构，参考[勾选器](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/interactive-components/checker)。
</md-alert>
:::


![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0ef076753a11ee5209a56ec968a323b7_gyCAHMKIuB.png?height=200&lazyload=true&maxWidth=400&width=623)

## 注意事项

- 勾选器仅支持通过撰写卡片 JSON 代码的方式使用，暂不支持在卡片搭建工具上构建使用。
- 勾选器需要开发者自行[配置卡片交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/configuring-card-interactions)，才能触发请求回调。未配置 `behaviors` 时，终端用户可勾选，但仅本地有效。

## 嵌套规则

勾选器组件支持内嵌在表单容器、交互容器、分栏和折叠面板中使用。
## 组件属性

### JSON 结构

勾选器组件的完整 JSON 2.0 结构如下所示：
```json
{
    "schema": "2.0",
    "body": {
        "elements": [
            {
                "tag": "checker", // 组件的标签。勾选器组件的固定值为 checker。
                "element_id": "custom_id", // 操作组件的唯一标识。用于在调用组件相关接口中指定组件。需开发者自定义。
                "name": "check_1", // 勾选器组件的唯一标识。用于识别用户提交的数据属于哪个组件。
                "checked": false, // 勾选器的初始勾选状态。默认值 false。
                "text": { // 勾选器组件内的普通文本信息。
                    "tag": "plain_text", // 文本类型的标签。
                    "content": "", // 文本的内容。当 tag 为 lark_md 时，支持部分 Markdown 语法的文本内容。
                    "text_size": "normal", // 文本大小。默认值 normal。
                    "text_color": "default", // 文本颜色。仅在 tag 为 plain_text 时生效。默认值 default。
                    "text_align": "left" // 文本对齐方式。默认值 left。
                },
                "overall_checkable": true, // 当光标悬浮在勾选器上时，勾选器整体是否有阴影效果。默认值 true。
                "button_area": { // 按钮区的配置。可选。
                    "pc_display_rule": "always", // PC 端勾选器内按钮的展示规则。默认值 always，即始终显示按钮。
                    "buttons": [ // 在勾选器中添加并配置按钮。最多可配置三个按钮。
                        {
                            "tag": "button", // 按钮的标签，取固定值 button。
                            "type": "text", // 按钮的类型。必填。
                            "size": "small", // 按钮的尺寸。默认值 medium。
                            "text": { // 按钮上的文本。
                                "tag": "plain_text",
                                "content": "text按钮"
                            },
                            "icon": { // 添加图标作为按钮文本上的前缀图标。支持自定义或使用图标库中的图标。
                                "tag": "standard_icon", // 图标类型。
                                "token": "chat-forbidden_outlined", // 图标的 token。仅在 tag 为 standard_icon 时生效。
                                "color": "orange", // 图标颜色。仅在 tag 为 standard_icon 时生效。
                                "img_key": "img_v2_38811724" // 图片的 key。仅在 tag 为 custom_icon 时生效。
                            },
                            "disabled": false,
                            "behaviors": []
                        }
                    ]
                },
                "checked_style": { // 勾选状态样式。
                    "show_strikethrough": true, // 是否展示内容区的贯穿式删除线。默认值 false。
                    "opacity": 1 // 内容区的不透明度。默认值 1。
                },
                "margin": "0px", // 组件整体的外边距，支持填写单值或多值。默认值为 0px。
                "padding": "0px", // 组件整体的内边距，支持填写单值或多值。默认值为 0px。
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
                }, // 二次确认弹窗配置。用户点击确定后再执行 behaviors 中声明的交互
                "behaviors": [ // 配置交互类型和具体交互行为。未配置 behaviors 时，终端用户可勾选，但仅本地有效。
                    {
                        "type": "callback", // 声明交互类型。仅支持 callback 请求回调交互。
                        "value": {
                            // 回传交互数据。支持 object 数据类型。
                            "key_1": "value_1"
                        }
                    }
                ],
                "hover_tips": {}, //用户在 PC 端将光标悬浮在勾选器上方时的文案提醒。
                "disabled": false, // 是否禁用该勾选器。默认值 false。
                "disabled_tips": {} // 禁用勾选器后，用户在 PC 端将光标悬浮在勾选器上方时的文案提醒。
            }
        ]
    }
}
```

### 字段说明

勾选器各字段说明如下表所示。
:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width: 20%;">字段</md-th>
<md-th style="width: 10%;">必填</md-th>
<md-th style="width: 10%;">类型</md-th>
<md-th style="width: 15%;">默认值</md-th>
<md-th>描述</md-th>
</md-tr>
</md-thead>
<md-tbody>
<md-tr>
<md-td>tag</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>/</md-td>
<md-td>
组件的标签。勾选器组件的固定值为 `checker`。
</md-td>
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
<md-td>name</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>空</md-td>
<md-td>
勾选器组件的唯一标识。用于识别用户提交的数据属于哪个组件。
  
**注意**：当勾选器组件嵌套在表单容器中时，该字段必填且需在卡片全局内唯一。
</md-td>
</md-tr>
<md-tr>
<md-td>checked</md-td>
<md-td>否</md-td>
<md-td>Boolean</md-td>
<md-td>false</md-td>
<md-td>
勾选器的初始勾选状态。可选值：
- true：已勾选状态
- false：未勾选状态
</md-td>
</md-tr>
<md-tr>
<md-td>
text
</md-td>
<md-td>否</md-td>
<md-td>Object</md-td>
<md-td>/</md-td>
<md-td>
勾选器组件内的普通文本信息。
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
文本类型的标签。可取值：
- `plain_text`：普通文本内容
- `lark_md`：支持部分 Markdown 语法的文本内容。详情参考[lark_md 支持的 Markdown 语法](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/content-components/plain-text)
  
**注意**：飞书卡片搭建工具中仅支持使用 `plain_text` 类型的普通文本组件。你可使用富文本组件添加 Markdown 格式的文本。
</md-td>
</md-tr>
<md-tr>
<md-td>
└ content
</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>/</md-td>
<md-td>
文本内容。当 `tag` 为 `lark_md` 时，支持部分 Markdown 语法的文本内容。详情参考[lark_md 支持的 Markdown 语法](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/content-components/plain-text)
</md-td>
</md-tr>
<md-tr>
<md-td>
└ text_size
</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>normal</md-td>
<md-td>
文本大小。可取值：
- `normal`：正文（14px）
- `heading`：标题（16px）
- `notation`：辅助信息（12px）
</md-td>
</md-tr>
<md-tr>
<md-td>
└ text_color
</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>default</md-td>
<md-td>
文本的颜色。仅在 `tag` 为 `plain_text` 时生效。可取值：
- `default`：客户端浅色主题模式下为黑色；客户端深色主题模式下为白色
- 颜色的枚举值。详情参考[颜色枚举值](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/enumerations-for-fields-related-to-color)
</md-td>
</md-tr>
<md-tr>
<md-td>
└ text_align
</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>left</md-td>
<md-td>
文本对齐方式。可取值：
- `left`：左对齐
- `center`：居中对齐
- `right`：右对齐
</md-td>
</md-tr>
<md-tr>
<md-td>overall_checkable</md-td>
<md-td>否</md-td>
<md-td>Boolean</md-td>
<md-td>true</md-td>
<md-td>
当光标悬浮在勾选器上时，勾选器整体是否有阴影效果。

**注意**：要取消阴影效果，你需确保 `overall_checkable` 为 `false` 且 `pc_display_rule` 不为 `on_hover`。
</md-td>
</md-tr>
<md-tr>
<md-td>button_area</md-td>
<md-td>否</md-td>
<md-td>Object</md-td>
<md-td>/</md-td>
<md-td>
按钮区配置。
</md-td>
</md-tr>
<md-tr>
<md-td>└ pc_display_rule</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>always</md-td>
<md-td>
PC 端勾选器内按钮的展示规则。移动端始终显示按钮。可取值：
- `always`：按钮始终显示。
- `on_hover`：当光标悬浮在勾选器上时，按钮显示且勾选器整体有阴影效果。
</md-td>
</md-tr>
<md-tr>
<md-td>└ buttons</md-td>
<md-td>否</md-td>
<md-td>Array&lt;Object&gt;</md-td>
<md-td>[]</md-td>
<md-td>
在勾选器中添加并配置按钮。最多可配置三个按钮。详情参考[按钮](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/interactive-components/button)。
</md-td>
</md-tr>
<md-tr>
<md-td>checked_style</md-td>
<md-td>否</md-td>
<md-td>Object</md-td>
<md-td>/</md-td>
<md-td>
勾选状态样式。
</md-td>
</md-tr>
<md-tr>
<md-td>└ show_strikethrough</md-td>
<md-td>否</md-td>
<md-td>Boolean</md-td>
<md-td>false</md-td>
<md-td>
是否展示内容区的贯穿式删除线。
</md-td>
</md-tr>
<md-tr>
<md-td>└ opacity</md-td>
<md-td>否</md-td>
<md-td>Number</md-td>
<md-td>1</md-td>
<md-td>
内容区的不透明度。取值范围为 [0,1] 之间的数字，不限小数位数。
</md-td>
</md-tr>


  <md-tr>
      <md-td>padding</md-td>
      <md-td>否</md-td>
      <md-td>String</md-td>
      <md-td>0</md-td>
      <md-td>组件的内边距。JSON 2.0 新增属性。值的取值范围为 [-99,99]px。可选值：
- 单值，如 "10px"，表示组件的四个外边距都为 10 px。
- 双值，如 "4px 0"，表示组件的上下外边距为 4 px，左右外边距为 0 px。使用空格间隔（边距为 0 时可不加单位）。
- 多值，如 "4px 0 4px 0"，表示组件的上、右、下、左的外边距分别为 4px，12px，4px，12px。使用空格间隔。

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
      <md-td>└ title</md-td>
      <md-td>是</md-td>
      <md-td>Struct</md-td>
      <md-td>/</md-td>
      <md-td>二次确认弹窗标题。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ └ tag</md-td>
      <md-td>是</md-td>
      <md-td>String</md-td>
      <md-td>plain_text</md-td>
      <md-td>二次确认弹窗标题文本的标签。固定取值为 `plain_text`。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ └ content</md-td>
      <md-td>是</md-td>
      <md-td>String</md-td>
      <md-td>/</md-td>
      <md-td>二次确认弹窗标题的内容。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ text</md-td>
      <md-td>是</md-td>
      <md-td>Struct</md-td>
      <md-td>/</md-td>
      <md-td>二次确认弹窗的文本内容。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ └ tag</md-td>
      <md-td>是</md-td>
      <md-td>String</md-td>
      <md-td>plain_text</md-td>
      <md-td>二次确认弹窗文本的标签。固定取值为 `plain_text`。</md-td>
    </md-tr>
    <md-tr>
      <md-td>└ └ content</md-td>
      <md-td>是</md-td>
      <md-td>String</md-td>
      <md-td>/</md-td>
      <md-td>二次确认弹窗文本的具体内容。</md-td>
    </md-tr>
<md-tr>
<md-td>behaviors</md-td>
<md-td>否</md-td>
<md-td>Struct</md-td>
<md-td>/</md-td>
<md-td>配置交互类型和具体交互行为。未配置 `behaviors` 时，终端用户可勾选，但仅本地有效。详情参考[配置卡片交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/configuring-card-interactions)。</md-td>
</md-tr>
<md-tr>
<md-td>hover_tips</md-td>
<md-td>否</md-td>
<md-td>Object</md-td>
<md-td>空</md-td>
<md-td>
用户在 PC 端将光标悬浮在勾选器上方时的文案提醒。

**注意**：当同时配置 `hover_tips` 和 `disabled_tips` 时，`disabled_tips` 将生效。
</md-td>
</md-tr>
<md-tr>
<md-td>└ tag</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>plain_text</md-td>
<md-td>
文案提醒的标签。固定值为 `plain_text`。
</md-td>
</md-tr>
<md-tr>
<md-td>└ content</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>空</md-td>
<md-td>
文案提醒的内容。
</md-td>
</md-tr>
<md-tr>
<md-td>disabled</md-td>
<md-td>否</md-td>
<md-td>Boolean</md-td>
<md-td>false</md-td>
<md-td>
是否禁用该勾选器。可选值：
- true：禁用
- false：勾选器组件保持可用状态
</ul>
</md-td>
</md-tr>
<md-tr>
<md-td>disabled_tips</md-td>
<md-td>否</md-td>
<md-td>Object</md-td>
<md-td>空</md-td>
<md-td>
禁用勾选器后，用户在 PC 端将光标悬浮在勾选器上方时的文案提醒。
</md-td>
</md-tr>
<md-tr>
<md-td>└ tag</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>plain_text</md-td>
<md-td>
禁用文案的标签。固定取值为 `plain_text`。
</md-td>
</md-tr>
<md-tr>
<md-td>└ content</md-td>
<md-td>是</md-td>
<md-td>String</md-td>
<md-td>空</md-td>
<md-td>
禁用文案的内容。
</md-td>
</md-tr>
</md-tbody>
</md-table>
:::


## 回调示例


为组件成功配置交互后，用户基于组件进行交互时，你在开发者后台配置的请求地址将会收到回调数据。
- 如果你添加的是新版卡片回传交互回调(`card.action.trigger`)，可参考[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)了解回调结构。
- 如果你添加的是旧版卡片回传交互回调(`card.action.trigger_v1`)，可参考[消息卡片回传交互（旧）](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/configuring-card-callbacks/card-callback-structure)了解回调结构。

新版卡片回传交互(`card.action.trigger`)勾选器回调示例如下所示：

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
        "action": { // 用户点击勾选框后回传的数据
            "value": { // 勾选器 behaviors 属性中自定义的回传交互参数
                "key_1": "value_1"
            },
            "tag": "checker", // 勾选器组件的标签
            "checked": true // 用户点击勾选框后，勾选器的勾选状态。true 表示已勾选
        }
    },
    "host": "im_message", // 卡片展示场景
    "context": { //  卡片展示场景相关信息
        "open_message_id": "om_574d639e4a44e4dd646eaf628e2*****", // 卡片所在的消息 ID
        "open_chat_id": "oc_e4d2605ca917e695f54f11aaf56*****" // 卡片所在的会话 ID
    }
}
```

## 示例代码

以下 JSON 2.0 结构的示例代码可实现如下图所示的卡片效果：

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0ef076753a11ee5209a56ec968a323b7_7boXVti68N.png?height=200&lazyload=true&maxWidth=400&width=623)
```json
{
    "schema": "2.0",
    "header": {
        "template": "blue",
        "title": {
            "tag": "plain_text",
            "content": "勾选组件（依赖端版本 7.9+)"
        }
    },
    "body": {
        "elements": [
            {
                "tag": "column_set",
                "flex_mode": "none",
                "background_style": "default",
                "columns": [
                    {
                        "tag": "column",
                        "width": "weighted",
                        "weight": 1,
                        "vertical_spacing": "1px",
                        "elements": [
                            {
                                "tag": "checker",
                                "name": "check_1",
                                "checked": false,
                                "text": {
                                    "tag": "lark_md",
                                    "content": "完成新品上市计划报告 💬[战略研讨会](https://open.feishu.cn)"
                                },
                                "overall_checkable": false,
                                "button_area": {
                                    "pc_display_rule": "always",
                                    "buttons": [
                                        {
                                            "tag": "button",
                                            "type": "text",
                                            "size": "large",
                                            "text": {
                                                "tag": "plain_text",
                                                "content": ""
                                            },
                                            "icon": {
                                                "tag": "standard_icon",
                                                "token": "forward-com_outlined",
                                                "color": "grey-500"
                                            },
                                            "disabled": false,
                                            "behaviors": [
                                                {
                                                    "type": "callback",
                                                    "value": {
                                                        "key": "btn1"
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "tag": "button",
                                            "type": "text",
                                            "size": "large",
                                            "text": {
                                                "tag": "plain_text",
                                                "content": ""
                                            },
                                            "icon": {
                                                "tag": "standard_icon",
                                                "token": "tab-todo_outlined",
                                                "color": "grey-500"
                                            },
                                            "disabled": false,
                                            "behaviors": [
                                                {
                                                    "type": "open_url",
                                                    "default_url": "https://www.baidu.com",
                                                    "android_url": "https://developer.android.com/",
                                                    "ios_url": "lark://msgcard/unsupported_action",
                                                    "pc_url": "https://www.windows.com"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "checked_style": {
                                    "show_strikethrough": true,
                                    "opacity": 0.5
                                },
                                "padding": "2px 2px 2px 2px",
                                "behaviors": [
                                    {
                                        "type": "callback",
                                        "value": {
                                            "key": "todo1"
                                        }
                                    }
                                ]
                            },
                            {
                                "tag": "checker",
                                "name": "check_2",
                                "checked": false,
                                "text": {
                                    "tag": "lark_md",
                                    "content": "把材料提前给💬[业务数据共享群](https://open.feishu.cn)审阅"
                                },
                                "overall_checkable": true,
                                "button_area": {
                                    "pc_display_rule": "on_hover",
                                    "buttons": [
                                        {
                                            "tag": "button",
                                            "type": "text",
                                            "size": "large",
                                            "text": {
                                                "tag": "plain_text",
                                                "content": ""
                                            },
                                            "icon": {
                                                "tag": "standard_icon",
                                                "token": "forward-com_outlined",
                                                "color": "grey-500"
                                            },
                                            "disabled": false,
                                            "behaviors": [
                                                {
                                                    "type": "callback",
                                                    "value": {
                                                        "key": "btn2"
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "tag": "button",
                                            "type": "text",
                                            "size": "large",
                                            "text": {
                                                "tag": "plain_text",
                                                "content": ""
                                            },
                                            "icon": {
                                                "tag": "standard_icon",
                                                "token": "tab-todo_outlined",
                                                "color": "grey-500"
                                            },
                                            "disabled": false,
                                            "behaviors": [
                                                {
                                                    "type": "open_url",
                                                    "default_url": "https://www.baidu.com",
                                                    "android_url": "https://developer.android.com/",
                                                    "ios_url": "lark://msgcard/unsupported_action",
                                                    "pc_url": "https://www.windows.com"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "checked_style": {
                                    "show_strikethrough": true,
                                    "opacity": 0.5
                                },
                                "padding": "2px 2px 2px 2px",
                                "confirm": {
                                    "title": {
                                        "tag": "plain_text",
                                        "content": "弹窗标题"
                                    },
                                    "text": {
                                        "tag": "plain_text",
                                        "content": "确认提交吗"
                                    }
                                },
                                "behaviors": [
                                    {
                                        "type": "callback",
                                        "value": {
                                            "key": "todo2"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
```