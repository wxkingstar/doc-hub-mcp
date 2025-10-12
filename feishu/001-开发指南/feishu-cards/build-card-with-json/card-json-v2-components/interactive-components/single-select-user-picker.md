<!--
title: 人员选择-单选
id: 7453075757222772738
fullPath: /uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-components/interactive-components/single-select-user-picker
updatedAt: 1749785885000
source: https://open.feishu.cn/document/feishu-cards/card-json-v2-components/interactive-components/single-select-user-picker
-->
# 人员选择-单选组件

人员选择-单选组件支持添加指定人员作为单选选项，是一种交互组件。

:::html
<md-alert type="tip">
本文档介绍人员选择-单选组件的 JSON 2.0 结构，要查看历史 JSON 1.0 结构，参考[人员选择-单选](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-components/interactive-components/single-select-user-picker)。
</md-alert>
:::
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d85b31ecc22aac31e96f03611c115c30_JTuavGnynE.png?height=195&lazyload=true&maxWidth=500&width=819)


## 嵌套规则

- 人员选择-单选组件支持嵌套在分栏、表单容器、折叠面板、循环容器、交互容器中使用。
- 搭建工具中，人员选择-单选组件暂不支持嵌套在交互容器中。

## 组件属性

### JSON 结构

人员选择-单选组件的完整 JSON 2.0 结构如下所示：
```json
{
    "schema": "2.0",
    "body": {
        "elements": [
            {
                "tag": "select_person", // 组件的标签。
                "element_id": "custom_id", // 操作组件的唯一标识。用于在调用组件相关接口中指定组件。需开发者自定义。
                "margin": "0px 0px 0px 0px", // 组件的外边距，默认值 "0"，支持范围 [-99,99]px。
                "type": "text", // 组件边框样式。默认值为 default。
                "required": true, // 选项是否必填。
                "disabled": false, // 选项是否禁用。
                "initial_option": "ou_48d0958ee4b2ab3eaf0b5f6c968xxxxx", // 选项展示的初始内容。默认为空。
                "placeholder": {
                    // 人员选择组件内的占位文本
                    "tag": "plain_text",
                    "content": "默认提示文本"
                },
                "width": "default", // 人员选择组件的宽度
                "behaviors": [
                    { // 为组件配置回传交互。
                        "type": "callback",
                        "value": {
                            // 回传交互数据。支持 object 数据类型。开放平台 SDK 仅支持 object 类型的回传交互数据。
                            "key_1": "value_1"
                        }
                    }
                ],
                "options": [
                    // 选项配置，仅支持添加候选用户的 open_id。
                    {
                        "value": "ou_48d0958ee4b2ab3eaf0b5f6c968xxxxx" // 候选用户的 open_id
                    },
                    {
                        "value": "ou_f9d24af786a14340721288cda6axxxxx" // 候选用户的 open_id
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
        ]
    }
}
```

### 字段说明

人员选择-单选组件的字段说明如下表。
:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width: 15%;">字段</md-th>
<md-th style="width: 15%;">必填</md-th>
<md-th style="width: 15%;">类型</md-th>
<md-th style="width: 15%;">默认值</md-th>
<md-th style="width: 50%;">说明</md-th>
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
组件的标签。人员选择-单选组件取固定值 `select_person`。
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
<md-td>
required
</md-td>
<md-td>否</md-td>
<md-td>Boolean</md-td>
<md-td>false</md-td>
<md-td>
单选组件的内容是否必选。当组件内嵌在表单容器中时，该属性生效。可取值：
- true：单选组件必选。当用户点击表单容器的“提交”时，未填写单选组件，则前端提示“有必填项未填写”，不会向开发者的服务端发起回传请求。
- false：单选组件选填。当用户点击表单容器的“提交”时，未填写单选组件，仍提交表单容器中的数据。
</md-td>
</md-tr>
<md-tr>
<md-td>disabled</md-td>
<md-td>否</md-td>
<md-td>Boolean</md-td>
<md-td>false</md-td>
<md-td>
是否禁用该单选组件。可选值：
- true：禁用单选组件组件
- false：单选组件组件保持可用状态
</md-td>
</md-tr>
  
<md-tr>
<md-td>initial_option</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>空</md-td>
<md-td>
选项展示的初始人员的 open_id。open_id 的值需要和 `options` 中某个候选用户的 open_id 一致，否则该选项不生效。
  
**注意**：卡片搭建工具上暂时不支持 `initial_option` 属性。
</md-td>
</md-tr>
  
  
<md-tr>
<md-td>
placeholder
</md-td>
<md-td>否</md-td>
<md-td>object</md-td>
<md-td>/</md-td>
<md-td>
人员选择组件内的占位文本。
</md-td>
</md-tr>
<md-tr>
<md-td>
└ tag
</md-td>
<md-td>是</md-td>
<md-td>string</md-td>
<md-td>plain_text</md-td>
<md-td>
占位提示标签。固定值为 plain_text。
</md-td>
</md-tr>
<md-tr>
<md-td>
└ content
</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>/</md-td>
<md-td>
占位文本的内容，最多支持 100 个字符。
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
人员选择组件的宽度。支持以下枚举值：
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
选项值配置。按选项数组的顺序展示选项内容。
</md-td>
</md-tr>
<md-tr>
<md-td>
└ value
</md-td>
<md-td>否</md-td>
<md-td>String</md-td>
<md-td>空</md-td>
<md-td>
选项配置，仅支持添加候选用户的 open_id。了解更多，参考[如何获取不同的用户 ID](/ssl:ttdoc/home/user-identity-introduction/open-id)。
  
**注意**：当 options 数组为空，或 value 的值全部无效时，候选项展示为卡片所在会话中所有成员选项。
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
</md-tbody>
</md-table>
:::
## 回调示例

人员选择-单选组件默认拥有交互能力。当用户提交选项后，你在开发者后台配置的请求地址将会收到回调数据。

:::html
<md-alert type="tip">
人员选择-单选组件一般包含多个选项，因此你需配置自定义回传参数，以区分用户提交的是哪个选项。详情参考[配置卡片交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/configuring-card-interactions)。
</md-alert>
:::


- 如果你添加的是新版卡片回传交互回调(`card.action.trigger`)，卡片将默认将回传如下所示的交互事件。详情参考[卡片回传交互回调](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)。

- 如果你添加的是旧版卡片回传交互回调(`card.action.trigger_v1`)，可参考[消息卡片回传交互（旧）](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/configuring-card-callbacks/card-callback-structure)了解回调结构。

新版卡片回传交互(`card.action.trigger`)人员选择-单选组件回调示例：


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
        "action": { // 用户操作人员选择-单选组件后回传的数据
            "value": { // 如果人员选择-单选组件中配置了 value （历史属性）或 behaviors 属性，则在此处返回自定义的回传交互参数
                "key_1": "value_1"
            },
            "tag": "select_person", // 人员选择-单选组件的标签。表示用户是在人员选择-单选中完成的交互
            "option": "ou_b9600a00cda86b8fad2378eafe3abcef" // 人员选择-单选组件内用户提交的选项的回传数据。需开发者通过 options.value 自定义该值，仅支持候选用户的 open_id
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

以下 JSON 2.0 结构的示例代码可实现如下图所示的卡片效果。你需填入实际的用户的 user_id、union_id 或 open_id。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d85b31ecc22aac31e96f03611c115c30_q5kjDHzs72.png?height=195&lazyload=true&maxWidth=500&width=819)
```json
{
    "schema": "2.0",
    "body": {
        "direction": "vertical",
        "padding": "12px 12px 12px 12px",
        "elements": [
            {
                "tag": "select_person",
                "placeholder": {
                    "tag": "plain_text",
                    "content": "请选择"
                },
                "options": [
                    {
                        "value": "ou_449b53ad6aee526f7ed311b216aabcef"
                    },
                    {
                        "value": "ou_449b53ad6aee526f7ed311b216aabcef"
                    }
                ],
                "width": "default",
                "type": "default",
                "disabled": false,
                "behaviors": [
                    {
                        "type": "callback",
                        "value": {
                            "select_static": "click"
                        }
                    }
                ],
                "margin": "0px 0px 0px 0px"
            }
        ]
    }
}
```