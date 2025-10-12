<!--
title: 卡片回传交互回调
id: 7343499772501344260
fullPath: /uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication
updatedAt: 1756707977000
source: https://open.feishu.cn/document/feishu-cards/card-callback-communication
-->
# 卡片回传交互回调

**卡片回传交互**作用于飞书卡片的 **请求回调** 交互组件。当终端用户点击飞书卡片上的回传交互组件后，你在开发者后台应用内注册的回调请求地址将会收到 **卡片回传交互** 回调。该回调包含了用户与卡片之间的交互信息。

你的业务服务器接收到回调请求后，需要在 3 秒内响应回调请求，声明通过弹出 Toast 提示、更新卡片、保持原内容不变等方式响应用户交互。了解详细的操作步骤，参考[处理卡片回调](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/handle-card-callbacks)。

卡片回调和服务端响应回调的结构体参考下文。

:::html
<md-alert type="tip">
- 本文档提供新版本的卡片回调结构和响应示例。开放平台 SDK 已全量支持新版卡片回调。
- 了解旧版回调的 SDK 调用，参考[消息卡片回传交互（旧）](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/configuring-card-callbacks/card-callback-structure)。
</md-alert>
:::

## 回调

:::html
<md-table>
  <md-thead>
  <tr>
      <md-th>基本信息</md-th>
      <md-th></md-th>
  </tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-th>回调类型</md-th>
      <md-td>card.action.trigger</md-td>
    </md-tr>
    <md-tr>
      <md-th>支持的应用类型</md-th>
      <md-td>
      <md-app-support types="custom,isv"></md-app-support>
      </md-td>
    </md-tr>
    <md-tr>
    <md-th>
            权限要求
            <md-tooltip type="info">订阅该事件所需的权限，开启其中任意一项权限即可订阅</md-tooltip>
            
            <div style="color: rgb(100, 106, 115);font-size: 12px;line-height: 20px;white-space: pre-line;font-weight: 500;padding-top: 4px;">开启任一权限即可</div>
            
    </md-th>
      <md-td>
暂无
      </md-td>
    </md-tr>
      <md-tr>
      <md-th>
          字段权限要求
      </md-th>
      <md-td>
<md-alert type="tip" icon="none">
        事件结构体中存在 `user_id` 敏感字段，仅当应用开启“获取用户 user ID”权限后才会返回。
        </md-alert>
        <md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>推送方式</md-th>
      <md-td>
            <md-tag mode="inline" type="push-webhook" href="/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM" >Webhook</md-tag>
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

## 回调结构体

:::html
<md-dt-table>
<md-dt-thead>
<md-dt-tr>
<md-dt-th>字段</md-dt-th>
<md-dt-th>数据类型</md-dt-th>
<md-dt-th>描述</md-dt-th>
</md-dt-tr>
</md-dt-thead>
<md-dt-tbody>

<md-dt-tr level="0">
<md-dt-td>schema</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>回调的版本。固定取值为 `2.0`，为最新版本回调。了解旧版本回调，参考[消息卡片回传交互（旧）](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/configuring-card-callbacks/card-callback-structure)。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>header</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>回调基本信息。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>event_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>回调的唯一标识。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>token</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>应用的 Verification Token。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>create_time</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>回调发送的时间，接近回调发生的时间。微秒级时间戳。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>event_type</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>回调类型。卡片交互场景中，固定为 `"card.action.trigger"`。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>tenant_key</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>应用归属的 tenant key，即租户唯一标识。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>app_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>应用的 App ID。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>event</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>回调的详细信息。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>operator</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>回调触发者信息。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>tenant_key</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>回调触发者的 tenant key，即租户唯一标识。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>user_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>回调触发者的 user_id。了解不同的用户 ID，参见[用户身份概述](/ssl:ttdoc/home/user-identity-introduction/introduction)。</md-dt-td>
</md-dt-tr>

  
<md-dt-tr level="2">
<md-dt-td>union_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>回调触发者的 union_id。</md-dt-td>
</md-dt-tr>
  
<md-dt-tr level="2">
<md-dt-td>open_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>回调触发者的 open_id。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>token</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>[更新卡片](/ssl:ttdoc/ukTMukTMukTM/uMDO1YjLzgTN24yM4UjN)用的凭证，有效期为 30 分钟，最多可更新 2 次。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>action</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>交互信息。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>value</md-dt-td>
<md-dt-td>object/ string</md-dt-td>
<md-dt-td>交互组件绑定的开发者自定义回传数据，对应组件中的 value 属性。类型为 string 或 object，可由开发者指定。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>tag</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>交互组件的标签。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>timezone</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>用户当前所在地区的时区。当用户操作日期选择器、时间选择器、或日期时间选择器时返回。</md-dt-td>
</md-dt-tr>
  
<md-dt-tr level="2">
<md-dt-td>name</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>组件的自定义唯一标识，用于识别内嵌在表单容器中的某个组件。</md-dt-td>
</md-dt-tr>
  
<md-dt-tr level="2">
<md-dt-td>form_value</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>表单容器内用户提交的数据。示例值：
```JSON
{
  "field name 1": [ // 表单容器内某多选组件的 name 和 value
    "selectDemo1",
    "selectDemo2"
  ], 
  "field name 2": "value 2", // 表单容器内某交互组件的 name 和 value
  "field name 3": "value 3", // 表单容器内某交互组件的 name 和 value
}
```
 </md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
<md-dt-td>input_value</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>当输入框组件未内嵌在表单容器中时，用户在输入框中提交的数据。
 </md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
<md-dt-td>option</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>当折叠按钮组、下拉选择-单选、人员选择-单选、日期选择器、时间选择器、日期时间选择器组件未内嵌在表单容器中时，用户选择该类组件某个选项时，组件返回的选项回调值。</md-dt-td>
</md-dt-tr>

</md-dt-tr>
<md-dt-tr level="2">
<md-dt-td>options</md-dt-td>
<md-dt-td>string[]</md-dt-td>
<md-dt-td>当下拉选择-多选组件和人员选择-多选组件未内嵌在表单容器中时，用户选择该类组件某个选项时，组件返回的选项回调值。</md-dt-td>
</md-dt-tr>
  
</md-dt-tr>
<md-dt-tr level="2">
<md-dt-td>checked</md-dt-td>
<md-dt-td>bool</md-dt-td>
<md-dt-td>当勾选器组件未内嵌在表单容器中时，勾选器组件的回调数据。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>host</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>卡片展示场景。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>delivery_type</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>卡片分发类型，固定取值为 `url_preview`，表示链接预览卡片。仅链接预览卡片有此字段。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>context</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>展示场景上下文。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>url</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>链接地址（适用于链接预览场景）。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>preview_token</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>链接预览的 token（适用于链接预览场景）。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>open_message_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>消息 ID。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>open_chat_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>会话 ID。</md-dt-td>
</md-dt-tr>

</md-dt-tbody>
</md-dt-table>
:::

## 回调结构体示例

```json
{
    "schema": "2.0", // 回调的版本
    "header": { // 回调基本信息
        "event_id": "f7984f25108f8137722bb63c*****", // 回调的唯一标识
        "token": "066zT6pS4QCbgj5Do145GfDbbag*****", // 应用的 Verification Token
        "create_time": "1603977298000000",  // 回调发送的时间，接近回调发生的时间。微秒级时间戳
        "event_type": "card.action.trigger", // 回调类型卡片交互场景中，固定为 "card.action.trigger"
        "tenant_key": "2df73991750*****", // 应用归属的 tenant key，即租户唯一标识
        "app_id": "cli_a5fb0ae6a4******" // 应用的 App ID
    },
    "event": { // 回调的详细信息
        "operator": {   // 回调触发者信息
            "tenant_key": "2df73991750*****", // 回调触发者的 tenant key，即租户唯一标识
            "user_id": "867*****", // 回调触发者的 user ID。当应用开启“获取用户 user ID”权限后，该参数返回
            "open_id": "ou_3c14f3a59eaf2825dbe25359f15*****", // 回调触发者的 Open ID
            "union_id": "on_cad4860e7af114fb4ff6c5d496d*****" // 回调触发者的 Union ID
        },
        "token": "c-295ee57216a5dc9de90fefd0aadb4b1d7d******", // 更新卡片用的凭证，有效期为 30 分钟，最多可更新 2 次
        "action": { // 用户操作交互组件回传的数据
            "value": { // 交互组件绑定的开发者自定义回传数据，对应组件中的 value 属性。类型为 string 或 object，可由开发者指定。
                "key": "value"
            },
            "tag": "button", // 交互组件的标签
            "timezone": "Asia/Shanghai", // 用户当前所在地区的时区。当用户操作日期选择器、时间选择器、或日期时间选择器时返回
            "form_value": { // 表单容器内用户提交的数据
                "field name1": [ // 表单容器内某多选组件的 name 和 value
                    "selectDemo1",
                    "selectDemo2"
                ],
                "field name2": "value2", // 表单容器内某交互组件的 name 和 value
                "DatePicker_bpqdq5puvn4": "2024-04-01 +0800", // 表单容器内日期选择器组件的 name 和 value
                "DateTimePicker_ihz2d7a74i": "2024-04-29 07:07 +0800", // 表单容器内日期时间选择器组件的 name 和 value
                "Input_lf4fmxwfrd9": "1234", // 表单容器内输入框组件的 name 和 value
                "PersonSelect_2ejys7ype7m": "ou_3c14f3a59eaf2825dbe25359f15*****", // 表单容器内人员选择-单选组件的 name 和 value
                "Select_a2d5b7l3zd": "1", // 表单容器内下拉选择-单选组件的 name 和 value
                "TimePicker_7ecsf6xkqsq": "00:00 +0800" // 表单容器内时间选择器组件的 name 和 value
            },
            "name": "Button_lvkepfu3" // 用户操作交互组件的名称，由开发者自定义
        },
        "host": "im_message", // 卡片展示场景
        "delivery_type": "url_preview", // 卡片分发类型，固定取值为 url_preview，表示链接预览卡片仅链接预览卡片有此字段
        "context": { //  卡片展示场景相关信息
            "url": "xxx", // 链接地址（适用于链接预览场景）
            "preview_token": "xxx", // 链接预览的 token（适用于链接预览场景）
            "open_message_id": "om_574d639e4a44e4dd646eaf628e2*****", // 卡片所在的消息 ID
            "open_chat_id": "oc_e4d2605ca917e695f54f11aaf56*****" // 卡片所在的会话 ID
        }
    }
}
```

## 响应回调的结构体

你的业务服务器接收到回调请求后，需要在 3 秒内响应回调请求，声明通过弹出 Toast 提示、更新卡片、保持原内容不变等方式响应用户交互。以下为使用卡片 JSON 代码和卡片模板响应的字段说明。要了解响应方式，参考[处理卡片回调](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/handle-card-callbacks)。


:::warning
业务服务端不可使用重定向状态码（`HTTP 3xx`）来响应卡片的回调请求，否则用户端将会出现交互请求错误。
:::

### 使用卡片 JSON 代码响应
:::html
<md-dt-table>
<md-dt-thead>
<md-dt-tr>
<md-dt-th>字段</md-dt-th>
<md-dt-th>数据类型</md-dt-th>
<md-dt-th>是否必填</md-dt-th>
<md-dt-th>描述</md-dt-th>
</md-dt-tr>
</md-dt-thead>
<md-dt-tbody>

<md-dt-tr level="0">
<md-dt-td>toast</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>客户端的 Toast 弹窗提示。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>type</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>弹窗提示的类型。可选值有：info、success、error、和 warning。

  不同的值的展示效果如下图所示：
![img_v3_02ao_9fdce3f7-5ba1-4f86-941f-2e5e7f6fd4eg.jpg](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e62145dca9a372b1b51f0ea2e2629160_y1gPzFePcx.jpg?height=844&lazyload=true&width=1280)
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>content</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>单语言提示文案。要配置多语言提示文案，请使用 `i18n` 字段。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>i18n</md-dt-td>
<md-dt-td>Map</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>多语言提示文案。示例配置：
```json
{
  "i18n": {
    "zh_cn": "更新成功！",
    "en_us": "Successful update"
  }
}
```</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>key</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>语言。可选值：
- `zh_cn`: 简体中文
- `en_us`: 英文
- `zh_hk`: 繁体中文（香港）
- `zh_tw`: 繁体中文（台湾）
- `ja_jp`: 日语
- `id_id`: 印尼语
- `vi_vn`: 越南语
- `th_th`: 泰语
- `pt_br`: 葡萄牙语
- `es_es`: 西班牙语
- `ko_kr`: 韩语
- `de_de`: 德语
- `fr_fr`: 法语
- `it_it`: 意大利语
- `ru_ru`: 俄语
- `ms_my`: 马来语

</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
<md-dt-td>value</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>语言对应的文案。</md-dt-td></md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>card</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>卡片数据。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>type</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>卡片类型。可选值：
- `template`：搭建工具构建的卡片，可视为一个卡片模板
- `raw`：由 JSON 构建的卡片
  
要使用卡片 JSON 代码响应，请选择 `raw`。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>data</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>卡片的 JSON 数据。 
  
  - 若发送卡片时，卡片 JSON 结构为 1.0 版本，那么你需传入卡片 JSON 1.0 数据。详情参考[卡片 JSON 1.0 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-structure)
  - 若发送卡片时，卡片 JSON 结构为 2.0 版本，那么你需传入卡片 JSON 2.0 数据。详情参考[卡片 JSON 2.0 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-structure)</md-dt-td>
</md-dt-tr>

</md-dt-tbody>
</md-dt-table>
:::


	

响应回调的结构体示例（以 JSON 2.0 结构为例）

```json
{
    "toast": {
        "type": "info",
        "content": "卡片交互成功",
        "i18n": {
            "zh_cn": "卡片交互成功",
            "en_us": "card action success"
        }
    },
    "card": {
        "type": "raw",
        "data": {
            "schema": "2.0",
            "config": {
                "update_multi": true,
                "style": {
                    "text_size": {
                        "normal_v2": {
                            "default": "normal",
                            "pc": "normal",
                            "mobile": "heading"
                        }
                    }
                }
            },
            "body": {
                "direction": "vertical",
                "padding": "12px 12px 12px 12px",
                "elements": [
                    {
                        "tag": "div",
                        "text": {
                            "tag": "plain_text",
                            "content": "示例文本",
                            "text_size": "normal_v2",
                            "text_align": "left",
                            "text_color": "default"
                        },
                        "margin": "0px 0px 0px 0px"
                    }
                ]
            },
            "header": {
                "title": {
                    "tag": "plain_text",
                    "content": "示例标题"
                },
                "subtitle": {
                    "tag": "plain_text",
                    "content": "示例文本"
                },
                "template": "blue",
                "padding": "12px 12px 12px 12px"
            }
        }
    }
}
```

### 使用卡片模板响应


:::html
<md-dt-table>
<md-dt-thead>
<md-dt-tr>
<md-dt-th>字段</md-dt-th>
<md-dt-th>数据类型</md-dt-th>
<md-dt-th>是否必填</md-dt-th>
<md-dt-th>描述</md-dt-th>
</md-dt-tr>
</md-dt-thead>
<md-dt-tbody>

<md-dt-tr level="0">
<md-dt-td>toast</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>客户端的 Toast 弹窗提示。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>type</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>弹窗提示的类型。可选值有：info、success、error、和 warning。

  不同的值的展示效果如下图所示：
![img_v3_02ao_9fdce3f7-5ba1-4f86-941f-2e5e7f6fd4eg.jpg](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e62145dca9a372b1b51f0ea2e2629160_y1gPzFePcx.jpg?height=844&lazyload=true&width=1280)
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>content</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>单语言提示文案。要配置多语言提示文案，请使用 `i18n` 字段。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>i18n</md-dt-td>
<md-dt-td>Map</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>多语言提示文案。示例配置：
```json
{
  "i18n": {
    "zh_cn": "更新成功！",
    "en_us": "Successful update"
  }
}
```</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>key</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>语言。可选值：
- `zh_cn`: 简体中文
- `en_us`: 英文
- `zh_hk`: 繁体中文（香港）
- `zh_tw`: 繁体中文（台湾）
- `ja_jp`: 日语
- `id_id`: 印尼语
- `vi_vn`: 越南语
- `th_th`: 泰语
- `pt_br`: 葡萄牙语
- `es_es`: 西班牙语
- `ko_kr`: 韩语
- `de_de`: 德语
- `fr_fr`: 法语
- `it_it`: 意大利语
- `ru_ru`: 俄语
- `ms_my`: 马来语

</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
<md-dt-td>value</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>语言对应的文案。</md-dt-td></md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>card</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>卡片数据。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>type</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>卡片类型。可选值：
- `template`：搭建工具构建的卡片，可视为一个卡片模板
- `raw`：由 JSON 构建的卡片
  
要使用卡片模板响应，请选择 `template`。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>data</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>卡片模板的数据。</md-dt-td>
</md-dt-tr>

 <md-dt-tr level="2">
  <md-dt-td>template_id</md-dt-td>
  <md-dt-td>string</md-dt-td>
  <md-dt-td>是</md-dt-td>
  <md-dt-td>搭建工具中创建的卡片（也称卡片模板）的 ID，如 AAqigYkzabcef。可在搭建工具中通过复制卡片模板 ID 获取。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8bf97ff2bceed633b28f5ce2d2ec0270_zPTWqjljT8.png?height=329&lazyload=true&maxWidth=500&width=1574)</md-dt-td>
  </md-dt-tr>

  <md-dt-tr level="2">
  <md-dt-td>template_variable</md-dt-td>
  <md-dt-td>object</md-dt-td>
  <md-dt-td>否</md-dt-td>
  <md-dt-td>若卡片绑定了变量，你需在该字段中传入实际变量数据的值。示例：如果变量名称在搭建工具中被定义为 open_id，则此处需要对 open_id 变量传入值。以“ou_d506829e8b6a17607e56bcd6b1aabcef”为示例：

```json
{
    "open_id": "ou_d506829e8b6a17607e56bcd6b1aabcef"
}
```
</md-dt-td>
  </md-dt-tr>

  <md-dt-tr level="2">
  <md-dt-td>template_version_name</md-dt-td>
  <md-dt-td>string</md-dt-td>
  <md-dt-td>否</md-dt-td>
  <md-dt-td>搭建工具中创建的卡片的版本号，如 1.0.0。卡片发布后，将生成版本号。可在搭建工具 **版本管理** 处获取。


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b3e96c8ca7c5c029bdbce6c0ca1ba413_aoV0ao7VUo.png?height=384&lazyload=true&maxWidth=500&width=1459)</md-dt-td>
  </md-dt-tr>
  
  
</md-dt-tbody>
</md-dt-table>
:::

响应回调的结构体示例

```json
{
    "toast": {
        "type": "info",
        "content": "卡片交互成功",
        "i18n": {
            "zh_cn": "卡片交互成功",
            "en_us": "card action success"
        }
    },
    "card": {
        "type": "template",
        "data": {
            "template_id": "AAqi6xJ8rabcd",
            "template_version_name": "1.0.0",
            "template_variable": {
                "open_id": "ou_d506829e8b6a17607e56bcd6b1aabcef"
            }
        }
    }
}
```
## 错误码

在飞书客户端进行卡片交互时，若交互出错，将返回如下图对应的错误码。错误码说明及解决方案如下表所示。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/29558d328f22a099dc8ce5c66bf4e5ba_DD7lIR8Lxk.png?height=64&lazyload=true&width=285)
:::note
错误码仅支持飞书客户端 7.28 及以上版本。若未返回错误码，请升级飞书客户端后重试。
:::
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 10%;">错误码</md-th>
      <md-th style="width: 20%;">描述</md-th>
      <md-th style="width: 30%;">解决方案</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>200340</md-td>
      <md-td>应用未配置飞书卡片回调地址或配置的请求地址无效。

若应用已配置，请确保你已创建并发布了最新的应用版本使修改生效。      
      </md-td>
      <md-td>
1. 前往[开发者后台](https://open.feishu.cn/app)，点击目标应用，选择 <strong>开发配置</strong> > <strong>事件与回调</strong>。<br>
 2. 在 <strong>事件与回调</strong> 页面 <strong>回调配置</strong> 页签下，填写正确有效的请求地址并保存。
        
	<img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f014fb193c475cf0a335fcac883e3e82_fqr82G8RrO.png" alt="回调配置">

3. 在 **已订阅的回调** 项中，确保已添加卡片回传交互回调。

        
    <img src="//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1f1daabce2053bd9d94b828a6172aedd_QJM06G0lYC.png" alt="回调配置"><br>
        
**提示**：你也可以选择使用长连接接收回调。了解更多，参考[配置回调订阅方式](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/event-subscription-guide/callback-subscription/configure-callback-request-address)。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>200341</md-td>
      <md-td>所请求的卡片回调服务未在规定时间内响应飞书卡片服务端。</md-td>
      <md-td>请确保配置的回调地址能够在 3 秒内响应卡片回调请求。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>200342</md-td>
      <md-td>飞书卡片服务端无法与该卡片回调地址建立 TCP 连接。</md-td>
      <md-td>请检查并确保配置的回调地址可以正常访问。</md-td>
    </md-tr>
    <md-tr>
      <md-td>200343</md-td>
      <md-td>飞书卡片服务端解析该卡片回调地址的 DNS 失败。</md-td>
      <md-td>请检查并确保配置的回调地址的域名正确。</md-td>
    </md-tr>
     <md-tr>
      <md-td>200530</md-td>
      <md-td>在表单容器中的交互组件的 name （表单项标识）属性为空。   
      </md-td>
      <md-td>
`name` 是表单容器内组件的唯一标识，用于识别用户提交的数据属于哪个组件，在单张卡片内不可为空、不可重复。
- 如果你使用卡片 JSON 搭建卡片，请确保所有的 name 属性的值不为空。`name` 数据类型为字符串。

- 如果你使用卡片搭建工具搭建卡片：
   
  1. 在卡片编辑页面，选中表单内的交互组件，在右侧属性页签下，确保 **表单项标识** 已填写。
      
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/93894aaf05f60f3576e64cb5a0f22569_62E0goGKeA.png?height=482&lazyload=true&width=1547)
   2. 点击右上角的 **保存**，然后点击 **发布**，确保修改生效。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b704b7552c24d7956b402092c7c38775_c3K900pZqf.png?height=557&lazyload=true&width=1557) 
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>200080</md-td>
      <md-td>飞书卡片服务端请求该卡片回调地址时发生错误。</md-td>
      <md-td>请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)进行处理。</md-td>
    </md-tr>
    <md-tr>
      <md-td>200671</md-td>
      <md-td>请求的卡片回调服务返回了非 `HTTP 200` 的状态码，导致无法进行正常的卡片交互。</md-td>
      <md-td>请检查并确保接口代码逻辑正常，确保不会返回异常状态码。</md-td>
    </md-tr>
    <md-tr>
      <md-td>200672</md-td>
      <md-td>请求的卡片回调服务返回了错误的响应体格式。</md-td>
      <md-td>- 如果你添加的是新版卡片回传交互(`card.action.trigger`)回调，请参考[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication#65787609)检查响应回调的结构体的格式是否有误。
- 如果你添加的是旧版卡片回传交互(`card.action.trigger_v1`)回调，请参考[消息卡片回传交互（旧）](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/configuring-card-callbacks/card-callback-structure)检查响应回调的结构体的格式是否有误。
- 如果你同时添加了新版和旧版卡片回传交互回调，响应其中任一回调即为成功响应。建议你删除多余的请求方式。
      
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>200673</md-td>
      <md-td>请求的卡片回调服务返回了错误的卡片。</md-td>
      <md-td>
- 如果你添加的是新版卡片回传交互(`card.action.trigger`)回调，请参考[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication#65787609)检查响应回调的结构体中 `card` 部分是否有误。
- 如果你添加的是旧版卡片回传交互(`card.action.trigger_v1`)回调，请参考[消息卡片回传交互（旧）](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/configuring-card-callbacks/card-callback-structure)检查响应回调的结构体中除 `toast` 外的其它部分是否有误。
      
      
      </md-td>
    </md-tr>
    
    <md-tr>
      <md-td>200830</md-td>
      <md-td>JSON 2.0 结构的卡片无法更新为 JSON 1.0 结构卡片。</md-td>
      <md-td>
如果交互前卡片的结构为[卡片 JSON 2.0 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-v2-structure)，交互后的卡片结构仍必须为 2.0 结构。
      
      
      </md-td>
    </md-tr>
      <md-tr>
      <md-td>300000</md-td>
      <md-td>服务内部错误。</md-td>
      <md-td>
请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)。
      
      
      </md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::

