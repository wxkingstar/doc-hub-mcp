<!--
title: 追加数据
id: 6907569524100857857
fullPath: /ukTMukTMukTM/uMjMzUjLzIzM14yMyMTN
updatedAt: 1751892606000
source: https://open.feishu.cn/document/server-docs/docs/sheets-v3/data-operation/append-data
-->
# 追加数据

在电子表格工作表的指定范围中，在空白位置中追加数据。例如，若指定范围参数 `range` 为 `6e5ed3!A1:B2`，该接口将会依次寻找 A1、A2、A3...单元格，在找到的第一个空白位置中写入数据。

## 使用限制

- 单次写入范围不可超过 5,000 行、100 列。
- 每个单元格不超过 50,000 字符，由于服务端会增加控制字符，因此推荐每个单元格不超过 40,000 字符。
## 前提条件

调用此接口前，请确保当前调用身份（tenant_access_token 或 user_access_token）已有电子表格的阅读、编辑等文档权限，否则接口将返回 HTTP 403 或 400 状态码。了解更多，参考[如何为应用或用户开通文档权限](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#16c6475a)。
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
      <md-td>https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/:spreadsheetToken/values_append </md-td>
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
- <md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>：        租户授权凭证。应用代表租户（即企业或团队）执行对应操作。示例值："Bearer t-7f1bcd13fc57d46bac21793aabcef"
          
- <md-tag mode="inline" type="token-user">user_access_token</md-tag>：用户授权凭证。应用代表用户执行对应操作。示例值："Bearer u-7f1bcd13fc57d46bac21793aabcef"
了解更多，参考[获取访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)。
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
        <tr>
            <md-th style="width: 20%;">名称</md-th>
            <md-th style="width: 20%;">类型</md-th>
            <md-th style="width: 10%;">必填</md-th>
            <md-th style="width: 50%;">描述</md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>spreadsheetToken</md-td>
            <md-td>string</md-td>
            <md-td>是</md-td>
            <md-td>电子表格的 token。可通过以下两种方式获取。了解更多，参考[电子表格概述](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)。
- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==
- 调用[获取文件夹中的文件清单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/list)
          
**示例值**："Iow7sNNEphp3WbtnbCscPqabcef"
          </md-td>
        </md-tr>
    </md-tbody>
</md-table>
:::


### 查询参数

:::html
<md-table>
    <md-thead>
        <tr>
            <md-th style="width: 20%;">名称</md-th>
            <md-th style="width: 10%;">类型</md-th>
            <md-th style="width: 10%;">必填</md-th>
            <md-th style="width: 50%;">描述</md-th>
        </tr>
    </md-thead>
    <md-tbody>
        <md-tr>
            <md-td>insertDataOption</md-td>
            <md-td>string</md-td>
            <md-td>否</md-td>
            <md-td>指定追加数据的方式，默认值为 OVERWRITE，即若空行数量小于追加数据的行数，则会覆盖已有数据。可选值：
- OVERWRITE：若空行的数量小于追加数据的行数，则会覆盖已有数据
- INSERT_ROWS：插入足够数量的行后再进行数据追加</md-td>
        </md-tr>
    </md-tbody>
</md-table>

:::
### 请求体 
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
  <md-dt-th style="width: 30%;">名称</md-dt-th>
  <md-dt-th style="width: 20%;">类型</md-dt-th>
  <md-dt-th style="width: 10%;">必填</md-dt-th>
  <md-dt-th style="width: 40%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
<md-dt-td>
<md-text type="field-name" >valueRange</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >object</md-text>
</md-dt-td>
<md-dt-td>
是
</md-dt-td>
<md-dt-td>
指定工作表中的范围和追加的数据。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >range</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
是
</md-dt-td>
<md-dt-td>
追加数据的范围。格式为 `<sheetId>!<开始位置>:<结束位置>`。其中：
- `sheetId` 为工作表 ID，通过[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query) 获取
- `<开始位置>:<结束位置>` 为工作表中单元格的范围，数字表示行索引，字母表示列索引。如 `A2:B2` 表示该工作表第 2 行的 A 列到 B 列。`range`支持四种写法，详情参考[电子表格概述](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)

  **注意**：`range` 所指定的范围需要大于等于追加的数据所占用的范围。<br>
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >values</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >array<array<interface>></md-text>
</md-dt-td>
<md-dt-td>
是
</md-dt-td>
<md-dt-td>
追加的数据。如要写入公式、超链接、email、@人等，可参考[支持写入数据类型](/ssl:ttdoc/ukTMukTMukTM/ugjN1UjL4YTN14CO2UTN)。
</md-dt-td>
</md-dt-tr>

</md-dt-tbody>
</md-dt-table>

:::
  
### 请求体示例  
```json
{
    "valueRange": {
        "range": "Q7PlXT!A1:B4",
        "values": [
            [
                "===",
                "https://open.feishu.cn"
            ],
            [
                "Hello",
                "https://open.feishu.cn"
            ],
            [
                "World",
                "https://open.feishu.cn"
            ],
            [
                "===",
                "https://open.feishu.cn"
            ]
        ]
    }
}
```
  
### cURL 请求示例
```bash
curl --location --request POST 'https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/shtcngNygNfuqhxTBf588jwgWbJ/values_append?insertDataOption=OVERWRITE' \
--header 'Authorization: Bearer t-e346617a4acfc3a11d4ed24dca0d0c0fc8e0067e' \
--header 'Content-Type: application/json' \
--data-raw '{
  "valueRange": {
    "range": "Q7PlXT!A1:B4",
    "values": [
      [
        "===",
        "https://open.feishu.cn"
      ],
      [
        "Hello",
        "https://open.feishu.cn"
      ],
      [
        "World",
        "https://open.feishu.cn"
      ],
      [
        "===",
        "https://open.feishu.cn"
      ]
    ]
  }
}'
```
  
## 响应  
### 响应体
:::html
<md-dt-table>
  <md-dt-thead>
    <md-dt-tr>
<md-dt-th style="width: 35%;">名称</md-dt-th>
<md-dt-th style="width: 13%;">类型</md-dt-th>
<md-dt-th style="width: 52%;">描述</md-dt-th>
    </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

    
<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	错误码，非 0 表示失败
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >msg</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	错误描述
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >data</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >\-</md-text>
	</md-dt-td>
	<md-dt-td>
	\-
	</md-dt-td>
</md-dt-tr>
    <md-dt-tr level="1">
<md-dt-td>
  <md-text type="field-name">spreadsheetToken</md-text>
</md-dt-td>
<md-dt-td>
  <md-text type="field-type">string</md-text>
</md-dt-td>
<md-dt-td>
  电子表格的 token
</md-dt-td>
    </md-dt-tr>

    <md-dt-tr level="1">
<md-dt-td>
  <md-text type="field-name">tableRange</md-text>
</md-dt-td>
<md-dt-td>
  <md-text type="field-type">string</md-text>
</md-dt-td>
<md-dt-td>
  追加数据的范围
</md-dt-td>
    </md-dt-tr>

    <md-dt-tr level="1">
<md-dt-td>
  <md-text type="field-name">revision</md-text>
</md-dt-td>
<md-dt-td>
  <md-text type="field-type">int</md-text>
</md-dt-td>
<md-dt-td>
  工作表的版本号。从 0 开始计数，更新一次版本号加一。
</md-dt-td>
    </md-dt-tr>

    <md-dt-tr level="1">
<md-dt-td>
  <md-text type="field-name">updates</md-text>
</md-dt-td>
<md-dt-td>
  <md-text type="field-type">object</md-text>
</md-dt-td>
<md-dt-td>
  追加数据的范围、更新的行列总数等
</md-dt-td>
    </md-dt-tr>

    <md-dt-tr level="2">
<md-dt-td>
  <md-text type="field-name">spreadsheetToken</md-text>
</md-dt-td>
<md-dt-td>
  <md-text type="field-type">string</md-text>
</md-dt-td>
<md-dt-td>
  电子表格的 token
</md-dt-td>
    </md-dt-tr>

    <md-dt-tr level="2">
<md-dt-td>
  <md-text type="field-name">updatedRange</md-text>
</md-dt-td>
<md-dt-td>
  <md-text type="field-type">string</md-text>
</md-dt-td>
<md-dt-td>
  追加数据的范围
</md-dt-td>
    </md-dt-tr>

    <md-dt-tr level="2">
<md-dt-td>
  <md-text type="field-name">updatedRows</md-text>
</md-dt-td>
<md-dt-td>
  <md-text type="field-type">int</md-text>
</md-dt-td>
<md-dt-td>
  更新的行总数
</md-dt-td>
    </md-dt-tr>

    <md-dt-tr level="2">
<md-dt-td>
  <md-text type="field-name">updatedColumns</md-text>
</md-dt-td>
<md-dt-td>
  <md-text type="field-type">int</md-text>
</md-dt-td>
<md-dt-td>
  更新的列总数
</md-dt-td>
    </md-dt-tr>

    <md-dt-tr level="2">
<md-dt-td>
  <md-text type="field-name">updatedCells</md-text>
</md-dt-td>
<md-dt-td>
  <md-text type="field-type">int</md-text>
</md-dt-td>
<md-dt-td>
  更新的单元格总数
</md-dt-td>
    </md-dt-tr>

    <md-dt-tr level="2">
<md-dt-td>
  <md-text type="field-name">revision</md-text>
</md-dt-td>
<md-dt-td>
  <md-text type="field-type">int</md-text>
</md-dt-td>
<md-dt-td>
  工作表的版本号。从 0 开始计数，更新一次版本号加一。
</md-dt-td>
    </md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::

 
 ### 响应体示例  
```json
{
  "code": 0,
  "data": {
    "revision": 18,
    "spreadsheetToken": "GQJHsEgcoh2qDHtSxeKcJCabcef",
    "tableRange": "6e5ed3!A1:C1",
    "updates": {
      "revision": 18,
      "spreadsheetToken": "GQJHsEgcoh2qDHtSxeKcJCabcef",
      "updatedCells": 3,
      "updatedColumns": 3,
      "updatedRange": "6e5ed3!A1:C1",
      "updatedRows": 1
    }
  },
  "msg": "success"
}
```
### 错误码

具体可参考：[服务端错误码说明](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)