<!--
title: 批量更新条件格式
id: 6939784115499925532
fullPath: /ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-update
updatedAt: 1723186022000
source: https://open.feishu.cn/document/server-docs/docs/sheets-v3/conditionformat/condition-format-update
-->
# 更新条件格式

更新已有的条件格式。支持跨工作表更新多个条件格式。该接口为全量更新接口，若非必填参数不传值，将改变原有配置。

## 使用限制

单次调用该接口，最多支持更新 10 个条件格式。

## 请求
:::html
<md-table>
  <md-thead>
  <tr>
      <md-th>基本</md-th>
      <md-th></md-th>
  </tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-th>HTTP URL</md-th>
      <md-td>https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/:spreadsheet_token/condition_formats/batch_update</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
    </md-tr>
   <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[100 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
 <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
<div style="color: rgb(100, 106, 115);font-size: 12px;line-height: 20px;white-space: pre-line;font-weight: 500;padding-top: 4px;">开启任一权限即可</div>
</md-th>
      <md-td>
<md-perm name="drive:drive" desc="查看、评论、编辑和管理云空间中所有文件" support_app_types="custom,isv" tags="">查看、评论、编辑和管理云空间中所有文件</md-perm>
<md-perm name="sheets:spreadsheet" desc="查看、评论、编辑和管理电子表格" support_app_types="custom,isv" tags="">查看、评论、编辑和管理电子表格</md-perm>
</md-td>
    </md-tr>
    
  </md-tbody>
</md-table>
:::
### 请求头
:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th style="width: 18%;">名称</md-th>  
      <md-th style="width: 15%;">类型</md-th>  
       <md-th style="width: 15%;">必填</md-th>  
      <md-th>描述</md-th> 
    </md-tr> 
  </md-thead>  
  <md-tbody> 
    <md-tr> 
      <md-td>Authorization</md-td>  
      <md-td>string</md-td>  
      <md-td> 是 </md-td> 
      	<md-td>
通过访问凭证（access_token）对调用者身份进行鉴权。可选值：
- <md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>：	租户授权凭证。应用代表租户（即企业或团队）执行对应操作。示例值："Bearer t-7f1bcd13fc57d46bac21793aabcef"

- <md-tag mode="inline" type="token-user">user_access_token</md-tag>：用户授权凭证。应用代表用户执行对应操作。示例值："Bearer u-7f1bcd13fc57d46bac21793aabcef"
了解更多，参考[获取访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)。

	</md-td>
</md-tr>
     <md-tr> 
      <md-td>Content-Type</md-td>  
      <md-td>string</md-td>  
      <md-td> 是 </md-td> 
     <md-td>**固定值**："application/json; charset=utf-8"</md-td>
</md-tr>
   
  </md-tbody> 
</md-table>
:::
### 路径参数
:::html
<md-table>
  <md-thead>
  <md-tr>
      <md-th>名称</md-th>
      <md-th>类型</md-th>
      <md-th style="width: 50%;">描述</md-th>
  </md-tr>  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>spreadsheet_token</md-td>
       <md-td>string</md-td>
       <md-td>电子表格的 token。可通过以下两种方式获取。了解更多，参考[电子表格概述](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)。
-  电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==
- 调用[获取文件夹中的文件清单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/list)</md-td>

**示例值**："Iow7sNNEphp3WbtnbCscPqabcef"
    </md-tr>
</md-tbody>
</md-table>
::: 
### 请求体

:::html
  
<md-dt-table>
<md-dt-thead>
<md-dt-tr>
<md-dt-th style="width: 30%;">参数</md-dt-th>
<md-dt-th style="width: 20%;">类型</md-dt-th>
<md-dt-th style="width: 10%;">是否必填</md-dt-th>
<md-dt-th style="width: 40%;">说明</md-dt-th>
</md-dt-tr>
</md-dt-thead>
<md-dt-tbody>
<md-dt-tr level="0">
<md-dt-td>
<md-text type="field-name">sheet_condition_formats</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type">array&lt;interface&gt;</md-text>
</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>要更新的条件格式的信息。支持更新最多 10 个条件格式。
  
**注意**：

响应体中将返回每个条件格式的更新结果，包括成功或具体的失败信息。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name">sheet_id</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type">string</md-text>
</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>电子表格工作表的 ID。调用[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query)获取 ID。
</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name">condition_format</md-text>
</md-dt-td>
<md-dt-td>/</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>条件格式的详细信息</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name">cf_id</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type">string</md-text>
</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>需要更新的条件格式的 ID。可通过[获取条件格式](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-get)获取。
</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name">ranges</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type">array&lt;string&gt;</md-text>
</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>条件格式应用的范围，支持以下五种写法，了解更多，参考[条件格式指南](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-guide)。

- `sheetId`：填写工作表 ID，表示将条件格式应用于整表
- `sheetId!{开始行索引}:{结束行索引}`：填写工作表 ID 和行数区间，表示将条件格式应用于整行
- `sheetId!{开始列索引}:{结束列索引}`：填写工作表 ID 和列的区间，表示将条件格式应用于整列
- `sheetId!{开始单元格}:{结束单元格}`：填写工作表 ID 和单元格区间，表示将条件格式应用于单元格选定的区域中
- `sheetId!{开始单元格}:{结束列索引}`：填写工作表 ID、起始单元格和结束列，表示省略结束行，使用表格的最后行作为结束行

**注意**：
- 每个范围的区间不可超过表格的行总数和列总数
- 每个范围的 sheetId 的值必须与 `sheet_id` 参数的值一致
  
**示例值**：["40a7b0!C3:C3"]
  </md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name">rule_type</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type">string</md-text>
</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>更新条件时的规则类型。可选值：
- containsBlanks：为空
- notContainsBlanks：不为空
- duplicateValues：重复值
- uniqueValues：唯一值
- cellIs：限定值范围
- containsText：包含内容
- timePeriod：日期</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name">attrs</md-text>
</md-dt-td>
<md-dt-td><md-text type="field-type">array&lt;object&gt;</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>`rule_type` 参数对应的具体属性信息。

**注意**：

当 `rule_type` 为 containsBlanks（为空）、notContainsBlanks（不为空）、duplicateValues（重复值）或 uniqueValues（唯一值）时，无需传入 `attrs` 参数。了解更多，参考[条件格式指南](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-guide)。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name">operator</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type">string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>操作方法。了解更多，参考[条件格式指南](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-guide)。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name">time_period</md-dt-td>
<md-dt-td>
<md-text type="field-type">string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>时间范围。当 `rule_type` 为 `timePeriod` 时，该参数必填，且 `operator` 参数仅支持 `is`。可选值：
  
- yesterday：昨天
- today：今天
- tomorrow：明天
- last7Days：最近 7 天

  
  
  
  </md-dt-td>
</md-dt-tr>
<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name">formula</md-dt-td>
<md-dt-td>
<md-text type="field-type">array&lt;string&gt;</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>公式。当 `rule_type` 为 `cellIs` 时，该参数必填。
  
**注意**：
  
- 当 `operator` 为 `between` 或 `notBetween` 时，需要填写两个元素，其他情况下只需填一个元素，值为用户自定义。
- 填写的值若是数字类型，需填写为如 `"1"` 的格式；若是文本类型，需填写为 `"\"aaaaa\""` 格式。即文本需要用 "" 包裹并转义。了解更多示例，请参考[条件格式指南](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-guide)。</md-dt-td>
</md-dt-td>
</md-dt-tr>
<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name">text</md-dt-td>
<md-dt-td>
<md-text type="field-type">string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>文本。当 `rule_type` 为 `containsText` 时，该参数必填。值为用户自定义。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name">style</md-dt-td>
<md-dt-td>/</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>条件格式的样式。支持设置字体样式、文本装饰、字体颜色和背景颜色。
  
**注意**：
`style` 不可设置为 `""`。默认不传该值，即不设置样式。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name">font</md-dt-td>
<md-dt-td>/</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>符合条件的数据的字体样式</md-dt-td>
</md-dt-tr>
<md-dt-tr level="4">
<md-dt-td>
<md-text type="field-name">bold</md-dt-td>
<md-dt-td>
<md-text type="field-type">bool</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>字体是否加粗</md-dt-td>
</md-dt-tr>
<md-dt-tr level="4">
<md-dt-td>
<md-text type="field-name">italic</md-dt-td>
<md-dt-td>
<md-text type="field-type">bool</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>字体是否为斜体</md-dt-td>
</md-dt-tr>
<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name">text_decoration</md-dt-td>
<md-dt-td>
<md-text type="field-type">int</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>文本装饰。为文本设置下划线或删除线。可选值：
- 0：无下划线和删除线
- 1：下划线
- 2：删除线
- 3：同时设置下划线和删除线</md-dt-td>
</md-dt-tr>
<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name">fore_color</md-dt-td>
<md-dt-td>
<md-text type="field-type">string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>设置字体颜色。需填写字体颜色的十六进制代码。如 #faf1d1。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name">back_color</md-dt-td>
<md-dt-td>
<md-text type="field-type">string</md-dt-td>
<md-dt-td>否</md-dt-td>
<md-dt-td>设置背景颜色。需填写背景颜色的十六进制代码。如 #faf1d1。</md-dt-td>
</md-dt-tr>
</md-dt-tbody>
</md-dt-table>
:::
### 请求体示例

```json
{
    "sheet_condition_formats": [
        {
            "sheet_id": "40a7b0",
            "condition_format": {
                "cf_id": "r9sYuhgAl6",
                "rule_type": "timePeriod",
                "attrs": [
                    {
                        "operator": "is",
                        "time_period": "today", //ruleType为timePeriod时必填
                        "formula": [], //ruleType为cellIs时必填
                        "text": "" //ruleType为containsText时必填
                    }
                ],
                "ranges": [
                    "40a7b0!C3:C3"
                ],
                "style": {
                    "font": {
                        "bold": true,
                        "italic": true
                    },
                    "fore_color": "#faf1d1",
                    "back_color": "#d9f5d6",
                    "text_decoration": 3
                }
            }
        }
    ]
}
```
###  cURL 请求示例
```
curl --location --request POST 'https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/shtcngNygNfuqhxTBf588jwgWbJ/condition_formats/batch_update' \
--header 'Authorization: Bearer t-e346617a4acfc3a11d4ed24dca0d0c0fc8e0067e' \
--header 'Content-Type: application/json' \
--data-raw '{
    "sheet_condition_formats": [
        {
            "sheet_id": "Q7PlXT",
            "condition_format": {
                "cf_id": "BlG0MpOkHn",
                "rule_type": "uniqueValues",
                "ranges": [
                    "Q7PlXT!C3:D9"
                ],
                "style": {
                    "font": {
                        "bold": true,
                        "italic": true
                    },
                    "fore_color": "#faf1f2",
                    "back_color": "#46f5d6",
                    "text_decoration": 2
                }
            }
        }
    ]
}'
```
## 响应
### 响应体


:::html
  
<md-dt-table>
<md-dt-thead>
<md-dt-tr>
<md-dt-th style="width: 30%;">参数</md-dt-th>
<md-dt-th style="width: 20%;">类型</md-dt-th>
<md-dt-th style="width: 50%;">说明</md-dt-th>
</md-dt-tr>
</md-dt-thead>
<md-dt-tbody>
<md-dt-tr level="0">
<md-dt-td>
<md-text type="field-name">code</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type">int</md-text>
</md-dt-td>
<md-dt-td>错误码，非 0 表示失败。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="0">
<md-dt-td>
<md-text type="field-name">msg</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type">string</md-dt-td>
<md-dt-td>错误描述</md-dt-td>
</md-dt-tr>
<md-dt-tr level="0">
<md-dt-td>
<md-text type="field-name">data</md-text>
</md-dt-td>
<md-dt-td>/</md-dt-td>
<md-dt-td>/</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name">responses</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type">array&lt;interface&gt;</md-dt-td>
<md-dt-td>响应信息</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name">sheet_id</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type">string</md-dt-td>
<md-dt-td>工作表的 ID</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name">cf_id</md-dt-td>
<md-dt-td>
<md-text type="field-type">string</md-dt-td>
<md-dt-td>更新的条件格式的 ID</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name">res_code</md-dt-td>
<md-dt-td>
<md-text type="field-type">int</md-dt-td>
<md-dt-td>条件格式更新的状态码。0 表示成功创建，非 0 表示失败。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name">res_msg</md-dt-td>
<md-dt-td>
<md-text type="field-type">string</md-dt-td>
<md-dt-td>条件格式更新返回的状态信息，success 表示成功，非 success 将返回失败原因。</md-dt-td>
</md-dt-tr>
</md-dt-tbody>
</md-dt-table>
:::
### 响应体示例

```json
{
    "code": 0,
    "msg": "Success",
    "data": {
        "responses": [
            {
                "cf_id": "1gJelvenW9",
                "res_code": 0,
                "res_msg": "success",
                "sheet_id": "40a7b0"
            }
        ]
    }
}
```
### 错误码

具体可参考：[服务端错误码说明](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)