<!--
title: 审批定义表单控件参数
id: 7495607730247352321
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/approval-definition-form-control-parameters
updatedAt: 1758716851000
source: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/approval-definition-form-control-parameters
-->
# 审批定义表单控件参数

在[创建审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/create)、[查看指定审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/get)接口内，需要使用 form 参数，即审批定义的表单控件 JSON 数据。本文汇总了各表单控件 JSON 数据中的参数说明，供你参考。

## 审批定义 API 不支持的控件

审批定义 API 未完全支持调用所有的审批表单控件，不支持的控件如下表所示。如果你必须使用 API 不支持的控件，则需前往[飞书审批管理后台](https://www.feishu.cn/approval/admin/approvalList?devMode=on)进进行操作。

**控件名** | **Type**     |
| ------- | ------------ |
| 计算公式    | formula      | 
| 引用多维表格  | mutableGroup |
| 流水号        | serialNumber 			   | 
| 换班控件组    | shiftGroupV2                |
| 加班控件组(仅支持查看)   |  workGroup |
| 请假控件组(仅支持查看)    |  leaveGroup |
| 外出控件组(仅支持查看)    |  outGroup |
| 出差控件组 | tripGroup                   | 


## 通用参数

通用参数是指各控件 JSON 数据中均包含的参数，通过本章节集中说明。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:15%">参数</md-th>
<md-th style="width:15%">类型</md-th>
<md-th style="width:10%">是否必填</md-th>
<md-th style="width:60%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>id</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>控件 ID，同一个审批定义内的控件 ID 不可重复。</md-td>
</md-tr>

<md-tr>
<md-td>name</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>控件名称的国际化文案 Key，必须以 `@i18n@` 开头，与相应接口的 i18n_resources.texts 参数的 key 对应。
  
例如，在创建审批定义时，控件的 name 取值 `@i18n@demo`，则需要在 i18n_resources.texts 参数的 key 传入同样的值 `@i18n@demo`，并通过 key 对应的 value 为 name 赋值。</md-td>
</md-tr>
  
<md-tr>
<md-td>type</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>控件类型。各控件类型取值参考下文控件参数详细说明。</md-td>
</md-tr>

<md-tr>
<md-td>required</md-td>
<md-td>boolean</md-td>
<md-td>是</md-td>
<md-td>当前控件在创建审批实例时，是否为必填、必选控件。
  
**可选值有**：
  
- true：是
- false：否</md-td>
</md-tr>
  
<md-tr>
<md-td>custom_id</md-td>
<md-td>string</md-td>
<md-td>否</md-td>
<md-td>自定义控件 ID。</md-td>
</md-tr>
  
<md-tr>
<md-td>printable</md-td>
<md-td>boolean</md-td>
<md-td>否</md-td>
<md-td>是否可以打印。
  
**可选值有**：
  
- true：是
- false：否
  
**默认值**：false</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

## 不同控件的参数

本章节提供不同控件的 type 参数值、JSON 示例以及非通用参数说明。

:::html
<md-alert>
**单行文本**、**多行文本**、**单选**、**联系人**、**部门** 控件支持在创建审批定义时设置默认值，具体配置说明参考[为控件设置默认值 API 说明](https://feishu.feishu.cn/docx/GTcAdkmPZobyTNxHsIhcs1zhnCb)。
</md-alert>
:::

### 单行文本

控件类型 type 为 input，JSON 示例如下：

```json
{
    "id":"widget123456",
    "name":"@i18n@demo_name",
    "type":"input",
    "required":true
}
```

### 多行文本

控件类型 type 为 textarea，JSON 示例如下：

```json
{
    "id":"widget123456",
    "name":"@i18n@demo_name",
    "type":"textarea",
    "required":true
}
```

### 数字

控件类型 type 为 number，JSON 示例如下：

```json
{
  "id": "widget123456",
  "name": "@i18n@demo_name",
  "type": "number",
  "required": true
}
```

### 图片

控件类型 type 为 image，JSON 示例如下：

```json
{
  "id": "widget123456",
  "name": "@i18n@demo_name",
  "type": "image",
  "required": true
}
```

### 附件

控件类型 type 为 attachmentV2，JSON 示例如下：

```json
{
  "id": "widget123456",
  "name": "@i18n@demo_name",
  "type": "attachmentV2",
  "required": true
}
```

### 金额

控件类型 type 为 amount，JSON 示例如下：

```json
{
  "id": "widget123456",
  "name": "@i18n@demo_name",
  "type": "amount",
  "required": true,
  "value": "CNY",
  "option": {
    "currencyRange": [
      "CNY",
      "USD"
    ]
  }
}
```

非通用参数说明：

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:25%">参数</md-th>
<md-th style="width:15%">类型</md-th>
<md-th style="width:15%">是否必填</md-th>
<md-th style="width:45%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>value</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>金额控件值，包括：

- CNY：人民币
- USD：美元
- EUR：欧元
- JPY：日元
- CAD：加拿大元
- CHF：瑞士法郎
- SGD：新加坡元
- AUD：澳大利亚元
- KBW：韩元
- INR：印度卢比
- TWD：新台币
- HKD：港元
- MOP：澳门元
- THB：泰铢
- IDR：印尼盾
- PHP：菲律宾比索
- MYR：马来西亚令吉</md-td>
</md-tr>

<md-tr>
<md-td>option</md-td>
<md-td>object</md-td>
<md-td>是</md-td>
<md-td>可选项配置。</md-td>
</md-tr>
  
<md-tr>
<md-td>└ currencyRange</md-td>
<md-td>string[]</md-td>
<md-td>是</md-td>
<md-td>货币范围。可选值：

- CNY：人民币
- USD：美元
- EUR：欧元
- JPY：日元
- CAD：加拿大元
- CHF：瑞士法郎
- SGD：新加坡元
- AUD：澳大利亚元
- KBW：韩元
- INR：印度卢比
- TWD：新台币
- HKD：港元
- MOP：澳门元
- THB：泰铢
- IDR：印尼盾
- PHP：菲律宾比索
- MYR：马来西亚令吉</md-td>
</md-tr>
  
<md-tr>
<md-td>└ isCapital</md-td>
<md-td>boolean</md-td>
<md-td>否</md-td>
<md-td>是否显示大写数字，建议币种为人民币时将该参数取值为 true。</md-td>
</md-tr>
  
<md-tr>
<md-td>└ isThousandSeparator</md-td>
<md-td>boolean</md-td>
<md-td>否</md-td>
<md-td>是否显示千位分隔符。</md-td>
</md-tr>
  
<md-tr>
<md-td>└ keepDecimalPlaces</md-td>
<md-td>int</md-td>
<md-td>否</md-td>
<md-td>设置显示的小数位数。例如设置 2 表示显示 2 位小数位数。</md-td>
</md-tr>
  
<md-tr>
<md-td>└ maxValue</md-td>
<md-td>int</md-td>
<md-td>否</md-td>
<md-td>金额范围的最大值。</md-td>
</md-tr>
  
<md-tr>
<md-td>└ minValue</md-td>
<md-td>int</md-td>
<md-td>否</md-td>
<md-td>金额范围的最小值。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

### 说明

控件类型 type 为 text，JSON 示例如下：

```json
{
    "id":"widget123456",
    "name":"@i18n@demo_name",
    "type":"text",
    "required":true,
    "value":"@i18n@text"
}
```

非通用参数说明：

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">参数</md-th>
<md-th style="width:20%">类型</md-th>
<md-th style="width:20%">是否必填</md-th>
<md-th style="width:40%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>value</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>说明内容的国际化文案 Key，必须以 `@i18n@` 开头，需要在相应接口的 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。长度不得少于 9 个字符。
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

### 单选、多选

- 单选控件类型 type 为 radioV2，JSON 示例如下：

	```json
    {
        "id":"widget123456",
        "name":"@i18n@demo_name",
        "type":"radioV2",
        "required":true,
        "value":[{"key":"1","text":"@i18n@choice1"},{"key":"2","text":"@i18n@choice2"}]
    }
	```

- 多选控件类型 type 为 checkboxV2，JSON 示例如下：

    ```json
    {
        "id":"widget123456",
        "name":"@i18n@demo_name",
        "type":"checkboxV2",
        "required":true,
        "value":[{"key":"1","text":"@i18n@choice1"},{"key":"2","text":"@i18n@choice2"}]
    }
    ```

非通用参数说明：

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">参数</md-th>
<md-th style="width:20%">类型</md-th>
<md-th style="width:20%">是否必填</md-th>
<md-th style="width:40%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>value</md-td>
<md-td>object[]</md-td>
<md-td>是</md-td>
<md-td>单选、多选控件的配置项。</md-td>
</md-tr>

<md-tr>
<md-td>└ key</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>选项 Key，不可重复。</md-td>
</md-tr>

<md-tr>
<md-td>└ text</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>选项内容的国际化文案 Key，必须以 `@i18n@` 开头，需要在相应接口的 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

如果公司同时使用多个系统（飞书审批、人事系统、销售管理系统），需要将其他系统数据同步到审批表单中作为选项，此时通过配置外部数据源为单选、多选控件的选项，就不需要在多个系统维护同一份数据。详情参见[关联外部选项说明](/ssl:ttdoc/ukTMukTMukTM/uADM4QjLwADO04CMwgDN)。关联后，单选、多选控件参数也有所变化，JSON 示例如下：

```json
{
    "id":"widget123456",
    "name":"@i18n@demo_name",
    "type":"radioV2",
    "required":true,
    "value":[],
    "externalData":{
        "externalUrl":"https://xxx.xxx.xxx/",
        "token":"t",
        "key":"k",
        "linkageConfigs":[
            {
                "linkageWidgetID":"widget1",
                "key":"linkageWidget1",
                "value":"example"
            }
        ],
        "externalDataLinkage":true
    }
}
```

非通用参数说明：

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">参数</md-th>
<md-th style="width:20%">类型</md-th>
<md-th style="width:20%">是否必填</md-th>
<md-th style="width:40%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>value</md-td>
<md-td>object[]</md-td>
<md-td>否</md-td>
<md-td>固定选项时使用。关联外部选项后需要配置 externalData 参数。</md-td>
</md-tr>

<md-tr>
<md-td>externalData</md-td>
<md-td>object</md-td>
<md-td>是</md-td>
<md-td>关联外部选项的信息。</md-td>
</md-tr>
  
<md-tr>
<md-td>└ externalUrl</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>外部数据源接口 URL。</md-td>
</md-tr>
  
<md-tr>
<md-td>└ token</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>外部数据源接口 Token。</md-td>
</md-tr>
  
<md-tr>
<md-td>└ key</md-td>
<md-td>string</md-td>
<md-td>否</md-td>
<md-td>外部数据源接口 Key。</md-td>
</md-tr>
  
<md-tr>
<md-td>└ linkageConfigs</md-td>
<md-td>object</md-td>
<md-td>否</md-td>
<md-td>联动参数配置。</md-td>
</md-tr>
  
<md-tr>
<md-td>└ └ linkageWidgetID</md-td>
<md-td>string</md-td>
<md-td>否</md-td>
<md-td>联动参数对应的控件 ID。如果包含明细控件，推荐使用对应关联控件的自定义 ID（custom id）。</md-td>
</md-tr>
  
<md-tr>
<md-td>└ └ key</md-td>
<md-td>string</md-td>
<md-td>否</md-td>
<md-td>参数代码。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

### 日期

控件类型 type 为 date，JSON 示例如下：

```json
{
    "id":"widget123456",
    "name":"@i18n@demo_name",
    "type":"date",
    "required":true,
    "value": "YYYY-MM-DD"
}
```

非通用参数说明：

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">参数</md-th>
<md-th style="width:20%">类型</md-th>
<md-th style="width:20%">是否必填</md-th>
<md-th style="width:40%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>value</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>日期格式。可选值有：
  
- YYYY-MM-DD：年-月-日
- YYYY-MM-DD a：年-月-日 上午/下午
- YYYY-MM-DD hh:mm：年-月-日 时:分
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

### 关联审批

控件类型 type 为 connect，JSON 示例如下：

```json
{
    "id":"widget123456",
    "name":"@i18n@demo_name",
    "type":"connect",
    "required":true,
    "value":["code1","code2"]
}
```

非通用参数说明：

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">参数</md-th>
<md-th style="width:20%">类型</md-th>
<md-th style="width:20%">是否必填</md-th>
<md-th style="width:40%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>value</md-td>
<md-td>string[]</md-td>
<md-td>是</md-td>
<md-td>需要关联的审批定义 Code 列表。审批定义 Code 获取方式：

- 调用[创建审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/create)接口后，从响应参数 approval_code 获取。
- 登录审批管理后台，在指定审批定义的 URL 中获取，具体操作参见[什么是 Approval Code](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/overview-of-approval-resources#8151e0ae)。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

### 联系人

控件类型 type 为 contact，JSON 示例如下：

```json
{
    "id":"widget123456",
    "name":"@i18n@demo_name",
    "type":"contact",
    "required":true,
    "value":{
        "ignore": true,
        "multi": false
      }
}
```

非通用参数说明：

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">参数</md-th>
<md-th style="width:20%">类型</md-th>
<md-th style="width:20%">是否必填</md-th>
<md-th style="width:40%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>value</md-td>
<md-td>object</md-td>
<md-td>否</md-td>
<md-td>联系人控件配置项。</md-td>
</md-tr>

<md-tr>
<md-td>└ ignore</md-td>
<md-td>boolean</md-td>
<md-td>否</md-td>
<md-td>是否可选自己作为联系人。默认 false 表示可选自己。</md-td>
</md-tr>

<md-tr>
<md-td>└ multi</md-td>
<md-td>boolean</md-td>
<md-td>否</md-td>
<md-td>是否可选多个联系人。默认 false 表示不可选。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

### 地址

控件类型 type 为 address，JSON 示例如下：

```json
{
    "id":"widget123456",
    "name":"@i18n@demo_name",
    "type":"address",
    "required":true,
    "value":{
        "enableDetailAddress": false,
        "requiredDetailAddress": false,
        "preLocating": false
      }
}
```
非通用参数说明：

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:25%">参数</md-th>
<md-th style="width:20%">类型</md-th>
<md-th style="width:15%">是否必填</md-th>
<md-th style="width:40%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>value</md-td>
<md-td>object</md-td>
<md-td>否</md-td>
<md-td>地址控件的配置项。</md-td>
</md-tr>

<md-tr>
<md-td>└ enableDetailAddress</md-td>
<md-td>boolean</md-td>
<md-td>否</md-td>
<md-td>是否开启详细地址配置项。默认 false 表示不开启。</md-td>
</md-tr>

<md-tr>
<md-td>└ requiredDetailAddress</md-td>
<md-td>boolean</md-td>
<md-td>否</md-td>
<md-td>是否必填详细地址。默认 false 表示非必填。</md-td>
</md-tr>
  
<md-tr>
<md-td>└ preLocating</md-td>
<md-td>boolean</md-td>
<md-td>否</md-td>
<md-td>是否开启自动定位。默认 false 表示不自动定位。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

### 日期区间

控件类型 type 为 dateInterval，JSON 示例如下：

```json
{
    "id":"widget123456",
    "name":"@i18n@demo_name",
    "type":"dateInterval",
    "required":true,
    "value":{
        "format": "YYYY-MM-DD",
        "intervalAllowModify": false,
      }
}
```

非通用参数说明：

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">参数</md-th>
<md-th style="width:20%">类型</md-th>
<md-th style="width:20%">是否必填</md-th>
<md-th style="width:40%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>value</md-td>
<md-td>object</md-td>
<md-td>是</md-td>
<md-td>日期区间控件的配置项。</md-td>
</md-tr>

<md-tr>
<md-td>└ format</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>日期格式。可选值有：
  
- YYYY-MM-DD：年-月-日
- YYYY-MM-DD a：年-月-日 上午/下午
- YYYY-MM-DD hh:mm：年-月-日 时:分</md-td>
</md-tr>

<md-tr>
<md-td>└ intervalAllowModify</md-td>
<md-td>boolean</md-td>
<md-td>否</md-td>
<md-td>用户发起审批时，是否可修改系统自动计算的时长。默认为 false，表示不可以修改。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

### 电话

控件类型 type 为 telephone，JSON 示例如下：

```json
{
    "id":"widget123456",
    "name":"@i18n@demo_name",
    "type":"telephone",
    "required":true,
    "option":{
        "availableType": "FIXED_LINE_OR_MOBILE"
      }
}
```

非通用参数说明：

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">参数</md-th>
<md-th style="width:20%">类型</md-th>
<md-th style="width:20%">是否必填</md-th>
<md-th style="width:40%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>option</md-td>
<md-td>object</md-td>
<md-td>是</md-td>
<md-td>电话控件的配置项。</md-td>
</md-tr>

<md-tr>
<md-td>└ availableType</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>电话可选类型。可选值有：

- MOBILE：移动电话
- FIXED_LINE：固定电话
- FIXED_LINE_OR_MOBILE：移动电话或固定电话
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

### 明细/表格

控件类型 type 为 fieldList，JSON 示例如下：

```json
{
    "id": "widget123456",
    "name": "@i18n@demo_name",
    "type": "fieldList",
    "required": true,
    "value":
    [
        {
            "id": "",
            "name": "",
            "type": "input",
            "required": true
        }
    ],
    "option":
    {
        "inputType": "LIST",
        "printType": "LIST"
    }
}
```
非通用参数说明：

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">参数</md-th>
<md-th style="width:20%">类型</md-th>
<md-th style="width:20%">是否必填</md-th>
<md-th style="width:40%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>value</md-td>
<md-td>object[]</md-td>
<md-td>是</md-td>
<md-td>明细/表格控件内添加的其他控件信息。
  
**注意**：明细中不能套用明细/表格控件、收款账户控件、流水号控件以及所有控件组。</md-td>
</md-tr>

<md-tr>
<md-td>└ id</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>控件 ID，同一个审批定义内的控件 ID 不可重复。</md-td>
</md-tr>

<md-tr>
<md-td>└ name</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>控件名称的国际化文案 Key，必须以 @i18n@ 开头，与相应接口的 i18n_resources.texts 参数的 key 对应。

例如，在创建审批定义时，控件的 name 取值 @i18n@demo，则需要在 i18n_resources.texts 参数的 key 传入同样的值 @i18n@demo，并通过 key 对应的 value 为 name 赋值。</md-td>
</md-tr>

<md-tr>
<md-td>└ type</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>控件类型。</md-td>
</md-tr>

<md-tr>
<md-td>└ required</md-td>
<md-td>boolean</md-td>
<md-td>是</md-td>
<md-td>当前控件在创建审批实例时，是否为必填、必选控件。

**可选值有**：

- true：是
- false：否</md-td>
</md-tr>

<md-tr>
<md-td>option</md-td>
<md-td>object</md-td>
<md-td>是</md-td>
<md-td>明细控件的配置项。</md-td>
</md-tr>  

<md-tr>
<md-td>└ inputType</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>明细控件的填写格式。可选值有：
  
- LIST：纵向填写
- FORM：横向填写</md-td>
</md-tr>

<md-tr>
<md-td>└ printType</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>明细控件的打印格式。可选值有：
  
- LIST：纵向打印
- FORM：横向打印</md-td>
</md-tr>  
  
</md-tbody>
</md-table>
:::

## 控件组
控件组是集合了若干子控件(基础控件，例如单选、文本等)以及大量内置逻辑(比如某个子控件的自动赋值)的特殊控件，定义格式以及使用上会与基础控件有区别，具体可参考控件组参数说明


### 请假控件组
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fd675da7bfe8f7f36b2937a0310647c3_r3ARmNVcXa.png?height=1632&lazyload=true&width=2194)

#### 创建审批定义

==暂不支持通过OpenAPI创建包含请假控件的定义==

#### 查看审批定义

控件类型 type 为 leaveGroupV2，JSON 示例如下：

```json
{
  "id": "widgetLeaveGroupV2",
  "name": "",
  "option": null,
  "printable": true,
  "required": true,
  "type": "leaveGroupV2",
  "value": [{"id":"widgetLeaveGroupType","name":"假期类型","option":[],"printable":true,"required":true,"type":"radioV2","visible":true},{"id":"widgetLeaveGroupStartTime","name":"开始时间","options":{"dateCheckEnd":0,"dateCheckStart":0,"dateCheckType":0},"printable":true,"required":true,"type":"date","value":"YYYY-MM-DD hh:mm","visible":true},{"id":"widgetLeaveGroupEndTime","name":"结束时间","options":{"dateCheckEnd":0,"dateCheckStart":0,"dateCheckType":0},"printable":true,"required":true,"type":"date","value":"YYYY-MM-DD hh:mm","visible":true},{"id":"widgetLeaveGroupInterval","name":"时长","option":[],"printable":true,"required":true,"type":"radioV2","visible":true},{"id":"widgetLeaveGroupReason","name":"请假事由","printable":true,"required":true,"type":"textarea","visible":true},{"id":"widgetLeaveGroupUnit","name":"请假单位","option":[{"value":"DAY","text":"天"},{"value":"HOUR","text":"小时"}],"printable":true,"required":true,"type":"radioV2","visible":true},{"default_value_type":"","display_condition":null,"enable_default_value":false,"id":"widgetLeaveGroupFeedingArrivingLate","name":"上班晚到（分钟）","option":[{"value":"0","text":"0"},{"value":"15","text":"15"},{"value":"30","text":"30"},{"value":"45","text":"45"},{"value":"60","text":"60"},{"value":"75","text":"75"},{"value":"90","text":"90"},{"value":"105","text":"105"},{"value":"120","text":"120"}],"printable":true,"required":false,"type":"radioV2","visible":true},{"id":"widgetLeaveGroupFeedingOffLeaveEarly","name":"下班早走（分钟）","option":[{"value":"0","text":"0"},{"value":"15","text":"15"},{"value":"30","text":"30"},{"value":"45","text":"45"},{"value":"60","text":"60"},{"value":"75","text":"75"},{"value":"90","text":"90"},{"value":"105","text":"105"},{"value":"120","text":"120"}],"printable":true,"required":false,"type":"radioV2","visible":true},{"id":"widgetLeaveGroupFeedingRestDaily","name":"每日休息（小时）","printable":true,"required":false,"type":"input","visible":true},{"id":"widgetLeaveCertification","name":"请假证明","printable":true,"required":false,"type":"image","visible":true}],
  "visible": true
}
```

控件组参数说明：

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">参数</md-th>
<md-th style="width:20%">类型</md-th>
<md-th style="width:40%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>id</md-td>
<md-td>string</md-td>
<md-td>请假控件组ID，id为固定的widgetLeaveGroupV2</md-td>
</md-tr>

<md-tr>
<md-td>type</md-td>
<md-td>string</md-td>
<md-td>请假控件组Type，为固定的leaveGroupV2</md-td>
</md-tr>

<md-tr>
<md-td>value</md-td>
<md-td>object[]</md-td>
<md-td>子控件列表，由基础控件组成，参考子控件参数说明</md-td>
</md-tr>

  
</md-tbody>
</md-table>
:::

子控件参数说明：

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:30%">id</md-th>
<md-th style="width:20%">控件类型</md-th>
<md-th style="width:60%">JSON示例</md-th>
<md-th style="width:40%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>widgetLeaveGroupType</md-td>
<md-td>radioV2</md-td>
<md-td>
```
{
   "id": "widgetLeaveGroupType",
   "name": "假期类型",
   "option": [],
   "printable": true,
   "required": true,
   "type": "radioV2",
   "visible": true
}
```
</md-td>
<md-td>假期类型，单选类型控件，区别于普通单选控件，该控件无预置option，选项来源于假勤管理后台配置</md-td>
</md-tr>
  
<md-tr>
<md-td>widgetLeaveGroupType</md-td>
<md-td>radioV2</md-td>
<md-td>
```
{
  "id": "widgetLeaveGroupStartTime",
  "name": "开始时间",
  "printable": true,
  "required": true,
  "type": "date",
  "value": "YYYY-MM-DD hh:mm",
  "visible": true
}
```
</md-td>
<md-td>开始时间，日期类型控件</md-td>
</md-tr>

<md-tr>
<md-td>widgetLeaveGroupType</md-td>
<md-td>radioV2</md-td>
<md-td>
```
{
  "id": "widgetLeaveGroupEndTime",
  "name": "结束时间",
  "printable": true,
  "required": true,
  "type": "date",
  "value": "YYYY-MM-DD hh:mm",
  "visible": true
}
```
</md-td>
<md-td>结束时间，日期类型控件</md-td>
</md-tr>
  
<md-tr>
<md-td>widgetLeaveGroupType</md-td>
<md-td>radioV2</md-td>
<md-td>
```
{
  "id": "widgetLeaveGroupInterval",
  "name": "时长",
  "option": [],
  "printable": true,
  "required": true,
  "type": "radioV2",
  "visible": true
}
```
</md-td>
<md-td>请假时长，单选类型控件，该控件提单时无需填写，会根据假期类型、开始、结束时间自动计算时长以及单位</md-td>
</md-tr>

<md-tr>
<md-td>widgetLeaveGroupType</md-td>
<md-td>radioV2</md-td>
<md-td>
```
{
  "id": "widgetLeaveGroupReason",
  "name": "请假事由",
  "printable": true,
  "required": true,
  "type": "textarea",
  "visible": true
}
```
</md-td>
<md-td>请假事由，文本类型控件</md-td>
</md-tr>
  
<md-tr>
<md-td>widgetLeaveGroupType</md-td>
<md-td>radioV2</md-td>
<md-td>
```
{
      "id": "widgetLeaveGroupFeedingArrivingLate",
      "name": "上班晚到（分钟）",
      "option": [{"value":"0","text":"0"},{"value":"15","text":"15"},{"value":"30","text":"30"},{"value":"45","text":"45"},{"value":"60","text":"60"},{"value":"75","text":"75"},{"value":"90","text":"90"},{"value":"105","text":"105"},{"value":"120","text":"120"}],
      "printable": true,
      "required": false,
      "type": "radioV2",
      "visible": true
    }
```
</md-td>
<md-td>上班晚到时长，单选类型控件，可选项为内置的时间范围，无法编辑，仅提交哺乳假申请时使用</md-td>
</md-tr>
  
<md-tr>
<md-td>widgetLeaveGroupType</md-td>
<md-td>radioV2</md-td>
<md-td>
```
{
      "id": "widgetLeaveGroupFeedingOffLeaveEarly",
      "name": "下班早走（分钟）",
      "option": [{"value":"0","text":"0"},{"value":"15","text":"15"},{"value":"30","text":"30"},{"value":"45","text":"45"},{"value":"60","text":"60"},{"value":"75","text":"75"},{"value":"90","text":"90"},{"value":"105","text":"105"},{"value":"120","text":"120"}],
      "printable": true,
      "required": false,
      "type": "radioV2",
      "visible": true
    }
```
</md-td>
<md-td>下班早走时长，单选类型控件，可选项为内置的时间范围，无法编辑，仅提交哺乳假申请时使用</md-td>
</md-tr>
  
</md-tbody>
</md-table>
:::

### 加班控件组

关联加班规则时，无加班类型
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/55af2e2a472e491a1565b741c3746de8_0tfT2m3vPV.png?height=1040&lazyload=true&width=2180)

未关联加班规则时可设置加班类型以及关联的假期类型
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/1897098a1b21d23aec626a9d3ab02954_yfOYKSlwJo.png?height=1346&lazyload=true&width=2186)

#### 创建审批定义
==暂不支持通过openapi创建包含加班控件组的定义==

#### 查看审批定义
控件类型 type 为 leaveGroupV2，JSON 示例如下：
```
{
    "id": "widgetWorkGroup",
    "name": "加班",
    "option": {
      "allowInsteadMultiUser": 0,
      "allowMultiTimeRange": 1,
      "isSetRule": 1
    },
    "printable": true,
    "required": true,
    "type": "workGroup",
    "value": [{"id":"widgetWorkGroupType","name":"加班类型","option":[],"printable":true,"required":true,"type":"radioV2","visible":true,"widget_default_value":""},{"children":[{"id":"widgetWorkGroupStartTime","name":"开始时间","options":{"dateCheckEnd":0,"dateCheckStart":0,"dateCheckType":0},"printable":true,"required":true,"type":"date","value":"YYYY-MM-DD hh:mm","visible":true,"widget_default_value":""},{"default_value_type":"","display_condition":null,"enable_default_value":false,"id":"widgetWorkGroupEndTime","name":"结束时间","options":{"dateCheckEnd":0,"dateCheckStart":0,"dateCheckType":0},"printable":true,"required":true,"type":"date","value":"YYYY-MM-DD hh:mm","visible":true,"widget_default_value":""}],"default_value_type":"","display_condition":null,"enable_default_value":false,"id":"widgetWorkGroupTimeRangeFieldList","name":"加班时段","option":{"input_type":"LIST","mobile_detail_type":"CARD","print_type":"LIST"},"printable":true,"required":false,"type":"fieldList","visible":true,"widget_default_value":""},{"id":"widgetWorkGroupInterval","name":"加班时长","printable":true,"required":true,"type":"number","visible":true,"widget_default_value":""},{"id":"widgetWorkGroupReason","name":"加班事由","printable":true,"required":true,"type":"textarea","visible":true,"widget_default_value":""},{"id":"widgetWorkGroupUnit","name":"加班单位","option":[{"value":"HOUR","text":"小时"},{"value":"DAY","text":"天"},{"value":"MINUTE","text":"分钟"}],"printable":true,"required":true,"type":"radioV2","visible":true,"widget_default_value":""},{"id":"widgetWorkGroupRule","name":"加班规则","printable":true,"required":true,"type":"input","visible":true,"widget_default_value":""},{"children":[{"id":"widgetWorkGroupDetailType","name":"加班类型","option":[{"value":"LEAVE","text":"调休假"},{"value":"PAY","text":"加班费"},{"value":"NONE","text":"无"}],"printable":true,"required":true,"type":"radioV2","visible":true,"widget_default_value":""},{"id":"widgetWorkGroupDetailStartTime","name":"开始时间","options":{"dateCheckEnd":0,"dateCheckStart":0,"dateCheckType":0},"printable":true,"required":true,"type":"date","value":"YYYY-MM-DD hh:mm","visible":true,"widget_default_value":""},{"id":"widgetWorkGroupDetailEndTime","name":"结束时间","options":{"dateCheckEnd":0,"dateCheckStart":0,"dateCheckType":0},"printable":true,"required":true,"type":"date","value":"YYYY-MM-DD hh:mm","visible":true,"widget_default_value":""},{"default_value_type":"","display_condition":null,"enable_default_value":false,"id":"widgetWorkGroupDetailInterval","name":"加班时长","option":[],"printable":true,"required":true,"type":"radioV2","visible":true,"widget_default_value":""},{"id":"widgetWorkGroupDetailCategory","name":"日期类型","option":[{"value":"0","text":"无"},{"value":"1","text":"工作日"},{"value":"2","text":"休息日"},{"value":"3","text":"节假日"}],"printable":true,"required":true,"type":"radioV2","visible":true,"widget_default_value":""}],"id":"widgetWorkGroupDetail","name":"加班明细","option":{"input_type":"LIST","mobile_detail_type":"CARD","print_type":"LIST"},"printable":true,"required":true,"type":"fieldList","visible":true,"widget_default_value":""},{"id":"widgetWorkGroupOvertimeWorkers","name":"加班人","printable":true,"required":false,"type":"contact","visible":true,"widget_default_value":""}],
    "visible": true,
    "widget_default_value": ""
}
```

控件组参数说明：

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">参数</md-th>
<md-th style="width:20%">类型</md-th>
<md-th style="width:40%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>id</md-td>
<md-td>string</md-td>
<md-td>加班控件组ID，id为固定的widgetWorkGroup</md-td>
</md-tr>

<md-tr>
<md-td>type</md-td>
<md-td>string</md-td>
<md-td>加班控件组Type，为固定的workGroup</md-td>
</md-tr>

<md-tr>
<md-td>value</md-td>
<md-td>object[]</md-td>
<md-td>子控件列表，由基础控件组成，参考子控件参数说明</md-td>
</md-tr>

<md-tr>
<md-td>option</md-td>
<md-td>object</md-td>
<md-td>控件组属性
  
- allowInsteadMultiUser: 允许代多人提交，仅关联加班规则时可用
- allowMultiTimeRange: 允许提交多个加班时段，仅关联加班规则时可用
- isSetRule: 是否关联了加班规则，1代表关联，否则代表未关联</md-td>
</md-tr>
  
</md-tbody>
</md-table>
:::


子控件参数说明：

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:30%">id</md-th>
<md-th style="width:20%">控件类型</md-th>
<md-th style="width:60%">JSON示例</md-th>
<md-th style="width:40%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>widgetWorkGroupType</md-td>
<md-td>radioV2</md-td>
<md-td>
```
{
  "id": "widgetWorkGroupType",
  "name": "加班类型",
  "option": [
    {
       "value": "-1",
   	   "text": "调休"
    },
  ],
  "printable": true,
  "required": true,
  "type": "radioV2",
  "visible": true,
  "widget_default_value": ""
}
```
</md-td>
<md-td>加班类型，单选控件，如果关联了加班规则，这种情况下定义中则无选项，提单时也无需填写；否则会将选项通过该控件的option返回，这种情况下该控件必填</md-td>
</md-tr>
  
<md-tr>
<md-td>widgetWorkGroupType</md-td>
<md-td>contact</md-td>
<md-td>
```
{
  "id": "widgetWorkGroupOvertimeWorkers",
  "name": "加班人",
  "printable": true,
  "required": true,
  "type": "contact",
  "visible": true,
}
```
</md-td>
<md-td>加班人，联系人控件，如果控件组中允许代多人提交，则提单时需要携带该控件，不可代提时无需携带该控件</md-td>
</md-tr>
  
<md-tr>
<md-td>widgetWorkGroupType</md-td>
<md-td>fieldList</md-td>
<md-td>
```
{
  "id": "widgetWorkGroupTimeRangeFieldList",
  "name": "加班时段",
  "option": {},
  "printable": true,
  "required": false,
  "type": "fieldList",
  "visible": true,
  "children": [{"default_value_type":"","display_condition":null,"enable_default_value":false,"id":"widgetWorkGroupStartTime","name":"开始时间","options":{"dateCheckEnd":0,"dateCheckStart":0,"dateCheckType":0},"printable":true,"required":true,"type":"date","value":"YYYY-MM-DD hh:mm","visible":true,"widget_default_value":""},{"default_value_type":"","display_condition":null,"enable_default_value":false,"id":"widgetWorkGroupEndTime","name":"结束时间","options":{"dateCheckEnd":0,"dateCheckStart":0,"dateCheckType":0},"printable":true,"required":true,"type":"date","value":"YYYY-MM-DD hh:mm","visible":true,"widget_default_value":""}]
}
```
</md-td>
<md-td>加班时段，明细控件，子控件为日期类型的开始、结束时间控件</md-td>
</md-tr>
  
<md-tr>
<md-td>└widgetWorkGroupStartTime</md-td>
<md-td>number</md-td>
<md-td>
```
{
  "id": "widgetWorkGroupStartTime",
  "name": "开始时间",
  "options": {},
  "printable": true,
  "required": true,
  "type": "date",
  "value": "YYYY-MM-DD hh:mm",
  "visible": true,
}
```
</md-td>
<md-td>开始时间，日期类型，加班的开始时间</md-td>
</md-tr>    
  
<md-tr>
<md-td>└widgetWorkGroupEndTime</md-td>
<md-td>number</md-td>
<md-td>
```
{
  "id": "widgetWorkGroupEndTime",
  "name": "结束时间",
  "options": {},
  "printable": true,
  "required": true,
  "type": "date",
  "value": "YYYY-MM-DD hh:mm",
  "visible": true,
}
```
</md-td>
<md-td>开始时间，日期类型，加班的开始时间</md-td>
</md-tr>      
  
<md-tr>
<md-td>widgetWorkGroupInterval</md-td>
<md-td>number</md-td>
<md-td>
```
{
  "id": "widgetWorkGroupInterval",
  "name": "加班时长",
  "printable": true,
  "required": true,
  "type": "number",
  "visible": true,
}
```
</md-td>
<md-td>加班时长，数字控件，根据加班类型(或自动关联的加班规则)、加班开始、结束时间自动计算，提单时无需包含该控件</md-td>
</md-tr>    
  
<md-tr>
<md-td>widgetWorkGroupReason</md-td>
<md-td>textarea</md-td>
<md-td>
```
{
  "id": "widgetWorkGroupReason",
  "name": "加班事由",
  "printable": true,
  "required": true,
  "type": "textarea",
  "visible": true,
}
```
</md-td>
<md-td>加班事由，文本控件，设置中加班事由可见及必填属性分别对应visible和required，不可见时提单则无需携带该控件，否则该控件必填</md-td>
</md-tr>  
  
</md-tbody>
</md-table>
:::

### 外出控件组
设置外出类型
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e9f5dc7e447c378ab2ccf00e2b8f9073_QDCMEHSeBX.png?height=1184&lazyload=true&width=2182)
未设置外出类型
![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0717c9b74ef51a597c749e782767bc70_Zo4DWvjfGw.png?height=1106&lazyload=true&width=2198)

#### 创建审批定义
==暂不支持通过openapi创建包含外出控件组的定义==

#### 查看审批定义
```
{
    "id": "widgetOutGroup",
    "name": "外出控件组",
    "option": {
      "defaultUnit": "DAY",
      "isSetType": 1,
      "unitMap": {
        "meijufjq-iv2c5qrlm1i-0": "DAY",
        "meijuivb-aqhae0ptrt-0": "HOUR",
        "meijuivb-mhca5ofoj8-0": "HALFDAY"
      }
    },
    "printable": true,
    "required": true,
    "type": "outGroup",
    "value": [{"id":"widgetOutGroupType","name":"外出类型","option":[{"value":"meijuivb-aqhae0ptrt-0","text":"小时"},{"value":"meijuivb-mhca5ofoj8-0","text":"半天"},{"value":"meijufjq-iv2c5qrlm1i-0","text":"天"}],"printable":true,"required":true,"type":"radioV2","visible":true},{"id":"widgetOutGroupUnit","name":"外出单位","option":[{"value":"HOUR","text":"小时"},{"value":"DAY","text":"天"}],"printable":true,"required":true,"type":"radioV2","visible":true},{"id":"widgetOutGroupStartTime","name":"开始时间","options":{"dateCheckEnd":0,"dateCheckStart":0,"dateCheckType":0},"printable":true,"required":true,"type":"date","value":"YYYY-MM-DD hh:mm","visible":true},{"id":"widgetOutGroupEndTime","name":"结束时间","options":{"dateCheckEnd":0,"dateCheckStart":0,"dateCheckType":0},"printable":true,"required":true,"type":"date","value":"YYYY-MM-DD hh:mm","visible":true},{"id":"widgetOutGroupInterval","name":"时长","option":[],"printable":true,"required":true,"type":"radioV2","visible":true},{"id":"widgetOutGroupReason","name":"外出事由","printable":true,"required":true,"type":"textarea","visible":true},{"id":"widgetOutGroupImage","name":"外出拍照","printable":true,"required":false,"type":"image","visible":true}]
}
```

控件组参数说明：

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">参数</md-th>
<md-th style="width:20%">类型</md-th>
<md-th style="width:40%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>
  
<md-tr>
<md-td>id</md-td>
<md-td>string</md-td>
<md-td>外出控件组ID，id为固定的widgetOutGroup</md-td>
</md-tr>

<md-tr>
<md-td>type</md-td>
<md-td>string</md-td>
<md-td>外出控件组Type，为固定的outGroup</md-td>
</md-tr>

<md-tr>
<md-td>value</md-td>
<md-td>object[]</md-td>
<md-td>子控件列表，由基础控件组成，参考子控件参数说明</md-td>
</md-tr>

<md-tr>
<md-td>option</md-td>
<md-td>object</md-td>
<md-td>控件组属性
- isSetType: 是否设置了外出类型  
- defaultUnit: 外出时长单位，未设置外出类型时可用
- unitMap: 外出类型与时长单位映射</md-td>
</md-tr>
  
</md-tbody>
</md-table>

子控件参数说明：

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:30%">id</md-th>
<md-th style="width:20%">控件类型</md-th>
<md-th style="width:60%">JSON示例</md-th>
<md-th style="width:40%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>
  
<md-tr>
<md-td>widgetOutGroupType</md-td>
<md-td>radioV2</md-td>
<md-td>
```
{
  "id": "widgetOutGroupType",
  "name": "外出类型",
  "option": [
    {
         "value": "meijuivb-aqhae0ptrt-0",
         "text": "小时"
    },
    {
         "value": "meijuivb-mhca5ofoj8-0",
         "text": "半天"
    },
    {
         "value": "meijufjq-iv2c5qrlm1i-0",
         "text": "天"
    }
  ],
  "printable": true,
  "required": true,
  "type": "radioV2",
  "visible": true
}
```
</md-td>
<md-td>外出类型，单选控件，如果设置了外出类型，则可选外出类型会通过该控件的option返回，否则无可选值，提交时也无需携带该控件</md-td>
</md-tr>  
  
<md-tr>
<md-td>widgetOutGroupStartTime</md-td>
<md-td>date</md-td>
<md-td>
```
{
  "id": "widgetOutGroupStartTime",
  "name": "开始时间",
  "options": {},
  "printable": true,
  "required": true,
  "type": "date",
  "value": "YYYY-MM-DD hh:mm"
}
```
</md-td>
<md-td>外出开始时间，日期控件</md-td>
</md-tr>  
  
<md-tr>
<md-td>widgetOutGroupEndTime</md-td>
<md-td>date</md-td>
<md-td>
```
{
  "id": "widgetOutGroupEndTime",
  "name": "结束时间",
  "options": {},
  "printable": true,
  "required": true,
  "type": "date",
  "value": "YYYY-MM-DD hh:mm"
}
```
</md-td>
<md-td>外出结束时间，日期控件</md-td>
</md-tr>  

<md-tr>
<md-td>widgetOutGroupInterval</md-td>
<md-td>radioV2</md-td>
<md-td>
```
{
  "id": "widgetOutGroupInterval",
  "name": "时长",
  "options": {},
  "printable": true,
  "required": true,
  "type": "radioV2",
  "value": "YYYY-MM-DD hh:mm"
}
```
</md-td>
<md-td>外出时长，单选类型，根据外出开始、结束时间自动计算</md-td>
</md-tr>  
  
<md-tr>
<md-td>widgetOutGroupReason</md-td>
<md-td>textarea</md-td>
<md-td>
```
{
  "id": "widgetOutGroupReason",
  "name": "外出事由",
  "printable": true,
  "required": true,
  "type": "textarea",
  "visible": true
}
```
</md-td>
<md-td>外出事由，文本控件，可见性以及必填性由visible和required字段控制，不可见时则提交无需携带该控件</md-td>
</md-tr>
  
<md-tr>
<md-td>widgetOutGroupImage</md-td>
<md-td>image</md-td>
<md-td>
```
{
  "id": "widgetOutGroupImage",
  "name": "外出拍照",
  "printable": true,
  "required": false,
  "type": "image",
  "visible": true
}
```
</md-td>
<md-td>外出拍照，图片控件，可见性以及必填性由visible和required字段控制，不可见时则提交无需携带该控件</md-td>
</md-tr>
  
</md-tbody>
</md-table>
:::