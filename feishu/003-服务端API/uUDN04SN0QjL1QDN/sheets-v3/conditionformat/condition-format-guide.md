<!--
title: 条件格式概述
id: 6939784115499876380
fullPath: /ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-guide
updatedAt: 1723185998000
source: https://open.feishu.cn/document/server-docs/docs/sheets-v3/conditionformat/condition-format-guide
-->
# 条件格式概述


条件格式用于根据指定的条件更改单元格的外观格式。本文档介绍电子表格中条件格式能力的相关参数和方法列表。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d946ddff68a20fbfd3c894ad73ea72fc_Tot8va2lk6.png?height=456&lazyload=true&maxWidth=500&width=799)

## 使用限制

- 单个工作表中最多支持设置 20 个条件格式。
- 调用条件格式相关接口时，单次最多支持操作 10 个条件格式。

## 条件格式参数

本小节介绍条件格式能力中涉及的主要参数。

### 应用范围 ranges

`ranges` 用于设置条件格式的应用范围，支持以下五种写法。
- sheetId：填写实际的工作表 ID，表示将条件格式应用于整表。如 `8fe9d6`。
- sheetId!{开始行索引}:{结束行索引}：填写工作表 ID 和行数区间，表示将条件格式应用于整行。如 `8fe9d6!1:2`。
- sheetId!{开始列索引}:{结束列索引}：填写工作表 ID 和列的区间，表示将条件格式应用于整列。如`8fe9d6!A:B`。
- sheetId!{开始单元格}:{结束单元格}：填写工作表 ID 和单元格区间，表示将条件格式应用于单元格选定的区域中。如 `8fe9d6!A1:B2`。
- sheetId!{开始单元格}:{结束列索引}：填写工作表 ID、起始单元格和结束列，表示省略结束行，使用表格的最后行作为结束行。如 `8fe9d6!A1:C`。

### 样式 style

样式 `style` 参数用于设置条件格式的样式。支持设置字体样式、文本装饰、字体颜色和背景颜色。结构如下所示。
```json
{
  "style": {
    "font": {
      "bold": true, // 字体是否加粗
      "italic": true //  字体是否为斜体
    },
    "fore_color": "#faf1d1", // 设置字体颜色。需填写字体颜色的十六进制代码
    "back_color": "#d9f5d6", // 设置背景颜色。需填写背景颜色的十六进制代码
    "text_decoration": 3 // 为文本设置下划线或删除线。0：无下划线和删除线   1：下划线   2：删除线   3：同时设置下划线和删除线
  }
}
```

### 规则类型 rule_type 与属性 attrs

条件格式的不同规则类型对属性参数 attrs 的定义与要求不同。
当 `rule_type` 为以下四种类型时，无需传入 `attrs` 参数。
- containsBlanks：为空
- notContainsBlanks：不为空
- duplicateValues：重复值
- uniqueValues：唯一值

当 `rule_type` 为以下三种类型时，`attrs` 参数定义和取值不同，具体参考下文。

- cellIs：限定值范围
- containsText：包含内容
- timePeriod：日期

#### 规则类型为 cellIs 时

当 `rule_type` 为 `cellIs` 时，表示基于对值范围的限定规则，创建条件格式。此时，`attrs` 参数为数组，需传入一组 `operator` 和 `formula` 参数。其中，`formula` 的值为用户自定义，`operator` 的可选值和对应的规则含义如下所示：

:::note
formula 为 string 数组类型。填写的值若是数字类型，需填写为如 `"1"` 的格式；若是文本类型，需填写为 `"\"aaaaa\""` 格式。即文本需要用 "" 包裹并转义。
:::
:::html
<md-dt-table>
<md-dt-thead>
<md-dt-tr>
<md-dt-th style="width: 22%;">operator 取值</md-dt-th>
<md-dt-th style="width: 10%;">formula 取值</md-dt-th>
<md-dt-th style="width: 20%;">规则描述</md-dt-th>
<md-dt-th>attrs 参数示例</md-dt-th>
</md-dt-tr>
</md-dt-thead>
<md-dt-tbody>
<md-dt-tr level="0">
<md-dt-td>
<md-text type="field-name" >equal
</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >一个元素
</md-text>
</md-dt-td>

<md-dt-td>
等于 formula 中的元素
</md-dt-td>
<md-dt-td>
```json
{
  "attrs": [
    {
      "operator": "equal",
      "formula": [
        "\"aaaaa\"" // 文本需要用 "" 包裹并转义
      ]
    }
  ]
}
```

</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>
<md-text type="field-name" >notEqual
</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >一个元素
</md-text>
</md-dt-td>

<md-dt-td>
不等于 formula 中的元素
</md-dt-td>
<md-dt-td>

```json
{
  "attrs": [
    {
      "operator": "notEqual",
      "formula": [
        "\"aaaaa\"" // 文本需要用 "" 包裹并转义
      ]
    }
  ]
}
```

</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>
<md-text type="field-name" >greaterThan
</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >一个元素
</md-text>
</md-dt-td>

<md-dt-td>
大于 formula 中的元素
</md-dt-td>
<md-dt-td>
```json
{
  "attrs": [
    {
      "operator": "greaterThan",
      "formula": [
        "100"
      ]
    }
  ]
}
```
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>
<md-text type="field-name" >greaterThanOrEqual
</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >一个元素
</md-text>
</md-dt-td>

<md-dt-td>
大于或等于 formula 中的元素
</md-dt-td>
<md-dt-td>
```json
{
  "attrs": [
    {
      "operator": "greaterThanOrEqual",
      "formula": [
        "100"
      ]
    }
  ]
}
```
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>
<md-text type="field-name" >lessThan
</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >一个元素
</md-text>
</md-dt-td>

<md-dt-td>
小于 formula 中的元素
</md-dt-td>
<md-dt-td>
```json
{
  "attrs": [
    {
      "operator": "lessThan",
      "formula": [
        "100"
      ]
    }
  ]
}
```
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>
<md-text type="field-name" >lessThanOrEqual
</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >一个元素
</md-text>
</md-dt-td>

<md-dt-td>
小于或等于 formula 中的元素
</md-dt-td>
<md-dt-td>
```json
{
  "attrs": [
    {
      "operator": "lessThanOrEqual",
      "formula": [
        "100"
      ]
    }
  ]
}
```
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>
<md-text type="field-name" >between
</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >两个元素
</md-text>
</md-dt-td>


<md-dt-td>
介于 formula 中两个元素之间
</md-dt-td>
<md-dt-td>
```json
{
  "attrs": [
    {
      "operator": "between",
      "formula": [
        "100",
        "200"
      ]
    }
  ]
}
```
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>
<md-text type="field-name" >notBetween
</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >两个元素
</md-text>
</md-dt-td>

<md-dt-td>
未介于 formula 中两个元素之间
</md-dt-td>
<md-dt-td>
```json
{
  "attrs": [
    {
      "operator": "notBetween",
      "formula": [
        "100",
        "200"
      ]
    }
  ]
}
```
</md-dt-td>
</md-dt-tr>
</md-dt-tbody>
</md-dt-table>
:::

代码示例如下：
```json
{
  "condition_format": {
    "rule_type": "cellIs",
    "attrs": [
      {
        "operator": "equal",
        "formula": [
              "\"aaaaa\""  // 文本需要用 "" 包裹并转义
        ]
      }
    ]
  },
  "condition_format": {
    "rule_type": "cellIs",
    "attrs": [
      {
        "operator": "between",
        "formula": [   // 需自定义两个元素，表示介于两者之间
              "1",
              "10"
        ]
      }
    ]
  }
}
```

#### 规则类型为 containsText 时

当 `rule_type` 为 `containsText` 时，表示基于文本规则，创建条件格式。此时，`attrs` 参数为数组，需传入一组 `operator` 和 `text` 参数。其中，`text` 的值为用户自定义，`operator` 的可选值和对应的规则含义如下所示：
| operator 取值  | text 取值 | 规则描述         |
| ------------ | ------- | ------------ |
| containsText | 用户自定义   | 包含以下内容：文本包含  |
| notContains  | 用户自定义   | 包含以下内容：文本不包含 |
| is           | 用户自定义   | 包含以下内容：文本为   |
| beginsWith   | 用户自定义   | 包含以下内容：开头为   |
| endsWith     | 用户自定义   | 包含以下内容：结尾为   |
代码示例如下：
```json
{
  "condition_format": {
    "rule_type": "containsText",
    "attrs": [
      {
        "operator": "is",
        "text": "******"
      }
    ]
  }
}
```

#### 规则类型为 timePeriod 时

当 `rule_type` 为 `timePeriod` 时，表示基于日期，创建条件格式。此时，`attrs` 参数为数组，你需传入一组 `operator` 和 `time_period` 参数。其中，`operator` 仅支持 `is` 参数，`time_period` 参数的可选值和对应的规则含义如下所示：
| operator 取值 | time_period 取值 | 规则描述       |
| ----------- | -------------- | ---------- |
| is          | yesterday      | 日期为：昨天     |
| is          | today          | 日期为：今天     |
| is          | tomorrow       | 日期为：明天     |
| Is          | last7Days      | 日期为：最近 7 天 |
代码示例如下：
```json
{
  "condition_format": {
    "rule_type": "timePeriod",
    "attrs": [
      {
        "operator": "is",
        "time_period": "today"
      }
    ]
  }
}
```

## 方法列表

以下为条件格式的方法列表。其中，“商店”代表应用商店应用；“自建”代表企业自建应用，了解更多应用相关信息，参考[应用类型简介](/ssl:ttdoc/home/app-types-introduction/overview)。了解调用服务端 API 的流程，参考[流程概述](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/ugzNwEjL4cDMx4CO3ATM)。
:::html
<md-table>
    <md-thead>
<tr>
    <md-th style="width: 35%;"><b>方法 (API)</md-th>
    <md-th style="width: 30%;"><b>权限要求（满足任一）</md-th>
    <md-th style="width: 20%;"><b>访问凭证</md-th>
    <md-th style="width: 10%;"><b>商店</md-th>
    <md-th style="width: 10%;"><b>自建</md-th>
</tr>
    </md-thead>
    <md-tbody>
<md-tr>
    <md-td>
<md-text type="field-name">`POST` [创建条件格式](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-set) /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/condition_formats/batch_create</md-text>
    </md-td>
    <md-td>
<md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
<md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>

    </md-td>
    <md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>
    </md-td>
    <md-td>**✓**</md-td>
    <md-td>**✓**</md-td>
</md-tr>
<md-tr>
    <md-td>
<md-text type="field-name">`POST` [更新条件格式](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-update) /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/condition_formats/batch_update</md-text>
    </md-td>
    <md-td>
<md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件
" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
 <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
    </md-td>
    <md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>
    </md-td>
    <md-td>**✓**</md-td>
    <md-td>**✓**</md-td>
</md-tr>



<md-tr>
    <md-td>
<md-text type="field-name">`GET` [获取条件格式](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-get) /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/condition_formats </md-text>
    </md-td>
    <md-td>
<md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
<md-perm name="drive:drive:readonly" desc="查看、评论和下载云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论和下载云空间中所有文件</md-perm>
<md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
<md-perm name="sheets:spreadsheet:readonly" desc="查看、评论和导出电子表格" support_app_types="custom,isv" tags="">查看、评论和导出电子表格</md-perm>
      
    </md-td>
    <md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>
    </md-td>
    <md-td>**✓**</md-td>
    <md-td>**✓**</md-td>
</md-tr>



<md-tr>
    <md-td>
<md-text type="field-name">`DELETE` [删除条件格式](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-delete) /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/condition_formats/batch_delete</md-text>
    </md-td>
    <md-td>
<md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件
" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
 <md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
    </md-td>
    <md-td>
<md-tag type="token-tenant">tenant_access_token</md-tag>
<md-tag type="token-user">user_access_token</md-tag>
    </md-td>
    <md-td>**✓**</md-td>
    <md-td>**✓**</md-td>
</md-tr>




    </md-tbody>
</md-table>