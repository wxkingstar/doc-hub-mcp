<!--
title: 消息卡片回传交互（旧）
id: 7343499772500639748
fullPath: /ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/configuring-card-callbacks/card-callback-structure
updatedAt: 1750838330000
source: https://open.feishu.cn/document/deprecated-guide/message-card/configuring-card-callbacks/card-callback-structure
-->
# 消息卡片回传交互（旧）

**消息卡片回传交互**作用于消息卡片的 **请求回调** 交互组件。当终端用户点击飞书卡片上的回传交互组件后，你在开发者后台应用内注册的回调请求地址将会收到 **卡片回传交互** 回调。该回调包含了用户与卡片之间的交互信息。

你的业务服务器接收到回调请求后，需要在 3 秒内响应回调请求，声明通过弹出 Toast 提示、更新卡片、保持原内容不变等方式响应用户交互。

:::html
<md-alert type="tip">
本文档提供旧版本的消息卡片回调结构和示例。了解最新版本的回调，参考[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)。
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
      <md-td>card.action.trigger_v1</md-td>
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
<md-dt-td>open_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>用户的 open_id。关于用户 open_id、user_id 的介绍，可参见[用户身份概述](/ssl:ttdoc/home/user-identity-introduction/introduction)。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>user_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>用户的 user_id。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>tenant_key</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>租户标识。参数介绍可参见[通用参数](/ssl:ttdoc/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/terminology)。</md-dt-td>
</md-dt-tr>

  <md-dt-tr level="0">
<md-dt-td>token</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>更新卡片用的凭证。</md-dt-td>
</md-dt-tr>
  
<md-dt-tr level="0">
<md-dt-td>open_message_id</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>消息 ID。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>action</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>交互信息。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>value</md-dt-td>
<md-dt-td>object/ string</md-dt-td>
<md-dt-td>交互组件绑定的开发者自定义回传数据，对应组件中的 value 属性。类型为 string 或 object，可由开发者指定。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>tag</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>交互组件的标签。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>timezone</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>用户当前所在地区的时区。当用户操作日期选择器、时间选择器、或日期时间选择器时返回。</md-dt-td>
</md-dt-tr>
  
<md-dt-tr level="1">
<md-dt-td>name</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>组件的自定义唯一标识，用于识别内嵌在表单容器中的某个组件。</md-dt-td>
</md-dt-tr>
  
<md-dt-tr level="1">
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
<md-dt-tr level="1">
<md-dt-td>input_value</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>当输入框组件未内嵌在表单容器中时，用户在输入框中提交的数据。
 </md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>option</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>当折叠按钮组、下拉选择-单选、人员选择-单选、日期选择器、时间选择器、日期时间选择器组件未内嵌在表单容器中时，用户选择该类组件某个选项时，组件返回的选项回调值。</md-dt-td>
</md-dt-tr>

</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>options</md-dt-td>
<md-dt-td>string[]</md-dt-td>
<md-dt-td>当下拉选择-多选组件和人员选择-多选组件未内嵌在表单容器中时，用户选择该类组件某个选项时，组件返回的选项回调值。</md-dt-td>
</md-dt-tr>
  
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>checked</md-dt-td>
<md-dt-td>bool</md-dt-td>
<md-dt-td>当勾选器组件未内嵌在表单容器中时，勾选器组件的回调数据。</md-dt-td>
</md-dt-tr>

</md-dt-tbody>
</md-dt-table>
:::

## 回调结构体示例

```json
{
  "open_id": "ou_sdfimx9948345", // 卡片操作用户的 open_id
  "user_id": "eu_sd923r0sdf5", // 卡片操作用户的 user_id
  "open_message_id": "om_abcdefg1234567890", // 卡片消息的唯一 id
  "tenant_key": "d32004232", // 卡片消息归属的租户id
  "token": "c-xxxxx", // 更新卡片用的 Token（凭证）
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
  }
}
```

## 响应回调的结构体

你的业务服务器接收到回调请求后，需要在 3 秒内响应回调请求，声明通过弹出 Toast 提示、更新卡片、保持原内容不变等方式响应用户交互。以下为使用卡片 JSON 代码和卡片模板响应的字段说明。
### 使用卡片 JSON 代码响应
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
<md-dt-td>toast</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>客户端的 Toast 弹窗提示。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>type</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>提示类型。可选值：
- info
- success
- error
- warning


</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>content</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>单语言提示文案。要配置多语言提示文案，请使用 `i18n` 字段。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>i18n</md-dt-td>
<md-dt-td>Map</md-dt-td>
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
<md-dt-td>语言对应的文案。</md-dt-td>

</md-dt-tr>
<md-dt-tr level="0">
<md-dt-td>header</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>卡片标题。详见[了解卡片结构](/ssl:ttdoc/ukTMukTMukTM/uEjNwUjLxYDM14SM2ATN)。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>elements/i18n_elements</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>卡片正文内容。详见[了解卡片结构](/ssl:ttdoc/ukTMukTMukTM/uEjNwUjLxYDM14SM2ATN)。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>config</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>卡片配置。详见[了解卡片结构](/ssl:ttdoc/ukTMukTMukTM/uEjNwUjLxYDM14SM2ATN)。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>card_link</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>用于指定卡片整体的跳转链接。详见[了解卡片结构](/ssl:ttdoc/ukTMukTMukTM/uEjNwUjLxYDM14SM2ATN)。</md-dt-td>
</md-dt-tr>

</md-dt-tbody>
</md-dt-table>
:::


### 使用卡片模板响应
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
<md-dt-td>toast</md-dt-td>
<md-dt-td>object</md-dt-td>
<md-dt-td>客户端的 Toast 弹窗提示。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>type</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>提示类型。可选值：
- info
- success
- error
- warning


</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>content</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>单语言提示文案。要配置多语言提示文案，请使用 `i18n` 字段。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>i18n</md-dt-td>
<md-dt-td>Map</md-dt-td>
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
<md-dt-td>语言对应的文案。</md-dt-td></md-dt-tr>
  
<md-dt-tr level="0">
  <md-dt-td>type</md-dt-td>
  <md-dt-td>string</md-dt-td>
  <md-dt-td>使用卡片模板 ID 发送卡片消息时该参数必填，且固定取值为 `template`。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="0">
  <md-dt-td>data</md-dt-td>
  <md-dt-td>object</md-dt-td>
  <md-dt-td>卡片模板内的数据。使用卡片模板 ID 发送卡片消息时该参数必填。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
  <md-dt-td>template_id</md-dt-td>
  <md-dt-td>string</md-dt-td>
  <md-dt-td>搭建工具中创建的卡片（也称卡片模板）的 ID，如 ctp_igYkzabcef。可在搭建工具中通过复制卡片 ID 获取。
  
  
  
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
  <md-dt-td>template_variable</md-dt-td>
  <md-dt-td>object</md-dt-td>
  <md-dt-td>
如果卡片模板内设置了变量，则可以在此处为变量名（key）赋值（value）。详情参考[配置卡片变量](/ssl:ttdoc/ukTMukTMukTM/ucTNwUjL3UDM14yN1ATN/configure-card-variables)。
  </md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
  <md-dt-td>template_version_name</md-dt-td>
  <md-dt-td>string</md-dt-td>
  <md-dt-td>
新版搭建工具中创建的卡片的版本号，如 1.0.0。卡片发布后，将生成版本号。可在搭建工具 **版本管理** 处获取。


  </md-dt-td>
</md-dt-tr>
  
</md-dt-tbody>
</md-dt-table>
:::




## 错误码

在飞书客户端（ 7.28 及以上版本）进行卡片交互时，若交互出错，将返回如下图对应的错误码。错误码说明及解决方案请参考[卡片回传交互-错误码](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication#c98c3220)。


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/29558d328f22a099dc8ce5c66bf4e5ba_lAVAomjl4R.png?height=64&lazyload=true&width=285)

## SDK 调用方式说明

你可前往 GtiHub 获取各个语言的卡片回调示例代码：

- [Java](https://github.com/larksuite/oapi-sdk-java#%E5%A4%84%E7%90%86%E5%8D%A1%E7%89%87%E8%A1%8C%E4%B8%BA%E5%9B%9E%E8%B0%83)
- [Python](https://github.com/larksuite/oapi-sdk-python#%E5%A4%84%E7%90%86%E5%8D%A1%E7%89%87%E8%A1%8C%E4%B8%BA%E5%9B%9E%E8%B0%83)
- [Golang](https://github.com/larksuite/oapi-sdk-go#%E5%A4%84%E7%90%86%E5%8D%A1%E7%89%87%E8%A1%8C%E4%B8%BA%E5%9B%9E%E8%B0%83)
- [Node.js](https://github.com/larksuite/node-sdk/blob/main/README.zh.md#%E6%B6%88%E6%81%AF%E5%8D%A1%E7%89%87-1)