<!--
title: 更新下拉列表设置
id: 6943917246700322818
fullPath: /ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/datavalidation/update-datavalidation
updatedAt: 1755243175000
source: https://open.feishu.cn/document/server-docs/docs/sheets-v3/datavalidation/update-datavalidation
-->
# 更新下拉列表设置

更新电子表格工作表中单个下拉列表的设置，支持更新下拉列表的选项和属性，包括是否支持多选、下拉选项的样式等。


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
      <md-td>https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/:spreadsheetToken/dataValidation/:sheetId</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>PUT</md-td>
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
      <md-td>spreadsheetToken</md-td>
       <md-td>string</md-td>
       <md-td>电子表格的 token。可通过以下两种方式获取。了解更多，参考[电子表格概述](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)。
-  电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==
- 调用[获取文件夹中的文件清单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/list)</md-td>

**示例值**："Iow7sNNEphp3WbtnbCscPqabcef"
    </md-tr>

    <md-tr>
      <md-td>sheetId</md-td>
       <md-td>string</md-td>
       <md-td>电子表格工作表的 ID。调用[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query)获取 ID。
</md-td>

**示例值**："BzY8T5"
    </md-tr>
</md-tbody>
</md-table>
::: 

### 请求体
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 20%;">名称</md-dt-th>
      <md-dt-th style="width: 20%;">类型</md-dt-th>
      <md-dt-th style="width: 10%;">必填</md-dt-th>
      <md-dt-th style="width: 50%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>
   
    <md-dt-tr level="0">
        <md-dt-td>ranges</md-dt-td>
        <md-dt-td>array&lt;string&gt;</md-dt-td>
        <md-dt-td>是</md-dt-td>
        <md-dt-td>更新的范围。格式为 `<sheetId>!<开始位置>:<结束位置>`。其中：
- `sheetId` 为工作表 ID，通过[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query) 获取
- `<开始位置>:<结束位置>` 为工作表中单元格的范围，数字表示行索引，字母表示列索引。如 `A2:B2` 表示该工作表第 2 行的 A 列到 B 列。`range`支持四种写法，详情参考[电子表格概述](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)

注意：如果该范围没有设置下拉列表，更新实际上会转换为设置下拉列表。
       </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="0">
        <md-dt-td>dataValidationType</md-dt-td>
        <md-dt-td>string</md-dt-td>
        <md-dt-td>是</md-dt-td>
        <md-dt-td>数据验证的类型。支持下拉列表，请填写 "list"。</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="0">
        <md-dt-td>dataValidation</md-dt-td>
        <md-dt-td>/</md-dt-td>
        <md-dt-td>是</md-dt-td>
        <md-dt-td>下拉列表规则属性</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
        <md-dt-td>conditionValues</md-dt-td>
        <md-dt-td>array&lt;string&gt;</md-dt-td>
        <md-dt-td>是</md-dt-td>
        <md-dt-td>下拉列表选项的值
          
**数据校验规则**：
- 单个值需为字符串类型且不能包含 ","
- 单个值的长度不可超过 100 字节
- 选项值的个数不可超过 500 个
      
**示例值**：["2", "89", "3","2"]
      </md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
        <md-dt-td>options</md-dt-td>
        <md-dt-td>/</md-dt-td>
        <md-dt-td>否</md-dt-td>
        <md-dt-td>下拉选项其它配置，包括是否支持多选、是否设置下拉选项样式等。</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
        <md-dt-td>multipleValues</md-dt-td>
        <md-dt-td>bool</md-dt-td>
        <md-dt-td>否</md-dt-td>
        <md-dt-td>是否支持多选选项。可选值：
          
- false：不支持多选
- true：支持多选
          
**默认值**：false，即不支持多选选项</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
        <md-dt-td>highlightValidData</md-dt-td>
        <md-dt-td>bool</md-dt-td>
        <md-dt-td>否</md-dt-td>
        <md-dt-td>是否为下拉选项设置颜色。可选值：
          
- false：不设置颜色
- true：为下拉选项设置颜色。需进一步配置 colors 参数
          
**默认值**：false，即不设置颜色</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
        <md-dt-td>colors</md-dt-td>
        <md-dt-td>array&lt;string&gt;</md-dt-td>
        <md-dt-td>否</md-dt-td>
        <md-dt-td>指定下拉选项的颜色。格式为 RGB 十六进制，如 "#fffd00"。当 `highlightValidData` 为 true 时，该参数必填。颜色将与 conditionValues 中的值按顺序一一对应。

**示例值**：["#1FB6C1", "#F006C2", "#FB16C3","#FFB6C1"]
      </md-dt-td>
    </md-dt-tr>
  </md-dt-tbody>
</md-dt-table>

:::
### 请求体示例

```json
{
    "ranges":["BzY8T5!A1:A2", "BzY8T5!B1:B1"],
    "dataValidationType":"list",
    "dataValidation":{
        "conditionValues":["1", "2", "4","2"],
        "options":{
            "multipleValues":false,
            "highlightValidData":true,
            "colors":["#1FB6C1", "#1006C2", "#FB16C3","#FFB6C1"]
        }
    }
}
```
###  cURL 请求示例
  ```bash
  curl --location --request PUT 'https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/shtcngNygNfuqhxTBf588jwgWbJ/dataValidation' \
--header 'Authorization: Bearer t-5be16bd570d0437444c40d5e6b5584109e61b0b1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "ranges":["BzY8T5!A1:A2", "BzY8T5!B1:B1"],
    "dataValidationType":"list",
    "dataValidation":{
        "conditionValues":["1", "2", "4"],
        "options":{
            "multipleValues":false,
            "highlightValidData":true,
            "colors":["#1FB6C1", "#1006C2", "#FB16C3"]
        }
    }
}'
  ```
 ## 响应

### 响应体


:::html
<md-dt-table>
<md-dt-thead>
<md-dt-tr>
<md-dt-th style="width: 40%;">参数</md-dt-th>
<md-dt-th style="width: 20%;">类型</md-dt-th>
<md-dt-th style="width: 30%;">说明</md-dt-th>
</md-dt-tr>
</md-dt-thead>
<md-dt-tbody>
<md-dt-tr level="0">
<md-dt-td>code</md-dt-td>
<md-dt-td>int</md-dt-td>
<md-dt-td>状态码，0 代表成功</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>msg</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>状态信息</md-dt-td>
</md-dt-tr>

<md-dt-tr level="0">
<md-dt-td>data</md-dt-td>
<md-dt-td>/</md-dt-td>
<md-dt-td>返回数据</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>spreadsheetToken</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>电子表格的 token</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>sheetId</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>工作表的 ID </md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>dataValidation</md-dt-td>
<md-dt-td>/</md-dt-td>
<md-dt-td>下拉列表规则的属性</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>dataValidationType</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>数据验证的类型。下拉列表为 "list"。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>conditionValues</md-dt-td>
<md-dt-td>array&lt;string&gt;</md-dt-td>
<md-dt-td>下拉列表选项的值</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>options</md-dt-td>
<md-dt-td>/</md-dt-td>
<md-dt-td>
下拉选项其它配置，包括是否支持多选、是否设置下拉选项样式等。</md-dt-td>
</md-dt-tr>

<md-dt-tr level="3">
<md-dt-td>multipleValues</md-dt-td>
<md-dt-td>bool</md-dt-td>
<md-dt-td>是否支持多选选项。可选值：
- false：不支持多选
- true：支持多选</md-dt-td>
</md-dt-tr>

<md-dt-tr level="3">
<md-dt-td>highlightValidData</md-dt-td>
<md-dt-td>bool</md-dt-td>
<md-dt-td>是否为下拉选项设置颜色。可选值：
- false：不设置颜色
- true：为下拉选项设置颜色
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="3">
<md-dt-td>colorValueMap</md-dt-td>
<md-dt-td>map&lt;string,string&gt;</md-dt-td>
<md-dt-td>
指定的下拉选项的颜色。格式为 RGB 十六进制，如 "#fffd00"。颜色将与 conditionValues 中的值按顺序一一对应。</md-dt-td>
</md-dt-tr>
</md-dt-tbody>
</md-dt-table>
:::

  
### 响应体示例  

```json
{
    "code": 0,
    "data": {
        "dataValidation": {
            "conditionValues": [
                "1",
                "2",
                "4"
            ],
            "dataValidationType": "list",
            "options": {
                "colorValueMap": {
                    "1": "#1FB6C1",
                    "2": "#1006C2",
                    "4": "#FB16C3"
                },
                "highlightValidData": true,
                "multipleValues": false
            }
        },
        "sheetId": "yuNGtr",
        "spreadsheetToken": "shtbckBcolBlRfkcMVZbolMdADe"
    },
    "msg": "Success"
}
```  
  
### 错误码

具体可参考：[服务端错误码说明](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)