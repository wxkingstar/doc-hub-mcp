<!--
title: 筛选视图的筛选条件指南
id: 6970504825797656579
fullPath: /ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/filter-view-condition-user-guide
updatedAt: 1719483725000
source: https://open.feishu.cn/document/server-docs/docs/sheets-v3/spreadsheet-sheet-filter_view/spreadsheet-sheet-filter_view-condition/filter-view-condition-user-guide
-->
# 筛选视图的筛选条件指南

筛选视图允许用户在独立界面按特定筛选条件筛选数据，查看筛选结果，不影响其他协作者的操作。筛选范围内的每一列都可以设置筛选条件。
本文档介绍电子表格筛选视图中筛选条件的相关参数和方法列表。
本文档介绍电子表格筛选视图中的筛选条件说明，要了解直接在工作表中创建、获取筛选等能力，参考[筛选指南](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter/filter-user-guide)。

## 注意事项

- 筛选范围内的第一行不参与筛选。
- 单个筛选视图仅可指定一个筛选范围。

## 筛选条件参数

### 筛选视图 ID **filter_view_id**

`filter_view_id` 是一个筛选视图的唯一标识。可以通过以下方式获取：
- 通过[查询筛选视图](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view/query)接口获取
- 在电子表格中进入一个筛选视图后，从链接地址中获取。如下图所示，该视图的筛选视图 ID 为 `ZnwY6af6dP`

	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/7dfc5150be99cc383140b956129e125b_tx9g91RaPp.png?height=613&lazyload=true&maxWidth=700&width=1626)

### 筛选条件 condition

筛选视图的筛选条件 `condition` 用于指定列的筛选条件信息，结构如下所示。
```json
{
  "condition_id": "E", // 指定列的字母编号。
  "filter_type": "number", // 筛选类型。枚举值参考下文。
  "compare_type": "less", // 比较类型。枚举值由 filter_type 决定。具体可参考下文。
  "expected": [ // 筛选值。具体可参考下文。
    "6"
  ]
}
```
筛选条件 `condition` 中的筛选类型 `filter_type` 参数支持以下四种。每种筛选类型需要填写对应的比较类型（compare_type）和比较的值（expected）。具体说明如下所示。

#### ***隐藏值筛选 hiddenValue***

隐藏值筛选用于筛选除隐藏值外的数据。当筛选类型为隐藏值时：
- compare_type：不填
- expected：要隐藏的值。数组类型，数组长度需大于 0 且小于筛选范围的行数。每个值的字符长度不得超过 50,000。
示例代码如下所示：
```json
{
  "condition_id": "E",
  "filter_type": "hiddenValue",
  "expected": [
    "100",
    "200",
    "300"
  ]
}
```

#### ***数字筛选 number***

数字筛选指筛选符合特定数值条件的数据。当筛选类型为数字时，比较类型 compare_type 参数的枚举和对应的 expected 限制如下表所示。
| compare_type 枚举 | 描述   | expected 数组长度限制 |
| --------------- | ---- | --------------- |
| equal           | 等于   | 1               |
| notEqual        | 不等于  | 1               |
| greater         | 大于   | 1               |
| greaterOrEqual  | 大于等于 | 1               |
| less            | 小于   | 1               |
| lessOrEqual     | 小于等于 | 1               |
| between         | 介于   | 2               |
| notBetween      | 不介于  | 2               |
```json
{
  "condition_id": "E",
  "filter_type": "number",
  "compare_type": "between",
  "expected": [
    "100",
    "200"
  ]
}
```

#### *文本筛选* ***text***

文本筛选指筛选符合特定文本条件的数据。当筛选类型为文本时：
- expected：文本字符。数组类型，数组长度为 1。文本字符的长度不得超过 1,000。
- compare_type 参数的枚举如下所示：

| compare_type 枚举 | 描述   |
| --------------- | ---- |
| beginsWith      | 开头是  |
| notBeginsWith   | 开头不是 |
| endsWith        | 结尾是  |
| notEndsWith     | 结尾不是 |
| contains        | 包含   |
| notContains     | 不包含  |
```json
{
  "condition_id": "E",
  "filter_type": "text",
  "compare_type": "contains",
  "expected": [
    "已完成"
  ]
}
```

#### ***颜色筛选 color***

颜色筛选指筛选具有特定颜色属性的数据。当筛选类型为颜色时：
- expected：颜色的十六进制代码，如 ["#ffffff"]。数组类型，数组长度为 1。

- 比较类型 compare_type 参数的枚举如下表所示。

| compare_type 枚举 | 描述    |
| --------------- | ----- |
| backColor       | 单元格颜色 |
| foreColor       | 字体颜色  |

```json
{
  "condition_id": "E",
  "filter_type": "color",
  "compare_type": "backColor",
  "expected": [
    "#ffffff"
  ]
}
```

## 方法列表

以下为筛选条件的方法列表。其中，“商店”代表应用商店应用；“自建”代表企业自建应用，了解更多应用相关信息，参考[应用类型简介](/ssl:ttdoc/home/app-types-introduction/overview)。了解调用服务端 API 的流程，参考[流程概述](/ssl:ttdoc/uMzNwEjLzcDMx4yM3ATM/ugzNwEjL4cDMx4CO3ATM)。
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
<md-text type="field-name">`POST` [创建筛选条件](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/create)/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions</md-text>
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
<md-text type="field-name">`PUT` [更新筛选条件](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/update) /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions/:condition_id</md-text>
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
<md-text type="field-name">`GET` [查询筛选条件](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/query) /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions/query</md-text>
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
<md-text type="field-name">`GET` [获取筛选条件](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/get)/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions/:condition_id</md-text>
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
<md-text type="field-name">`DELETE` [删除筛选条件](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/delete) /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions/:condition_id</md-text>
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

:::
