<!--
title: 向单个范围写入数据
id: 6907569745298980866
fullPath: /ukTMukTMukTM/uAjMzUjLwIzM14CMyMTN
updatedAt: 1742457358000
source: https://open.feishu.cn/document/server-docs/docs/sheets-v3/data-operation/write-data-to-a-single-range
-->
# 向单个范围写入数据

向电子表格某个工作表的单个指定范围中写入数据。若指定范围内已有数据，将被新写入的数据覆盖。

## 使用限制
- 单次写入数据不得超过 5000 行、100列。
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
      <md-td>https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/:spreadsheetToken/values</md-td>
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
- <md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>：        租户授权凭证。应用代表租户（即企业或团队）执行对应操作。示例值："Bearer t-7f1bcd13fc57d46bac21793aabcef"
          
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
<md-text type="field-type" >/</md-text>
</md-dt-td>
<md-dt-td>
是
</md-dt-td>
<md-dt-td>
指定工作表的范围和写入的数据。
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
写入数据的范围。格式为 `<sheetId>!<开始位置>:<结束位置>`。其中：
- `sheetId` 为工作表 ID，通过[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query) 获取。
- `<开始位置>:<结束位置>` 为工作表中单元格的范围，数字表示行索引，字母表示列索引。如 `A2:B2` 表示该工作表第 2 行的 A 列到 B 列。`range`支持四种写法，详情参考[电子表格概述](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)。

  **注意**：`range` 所指定的范围需要大于等于写入的数据所占用的范围。<br>
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
写入的数据。如要写入公式、超链接、email、@人等，可参考[电子表格支持写入的数据类型](/ssl:ttdoc/ukTMukTMukTM/ugjN1UjL4YTN14CO2UTN)。
</md-dt-td>
</md-dt-tr>

</md-dt-tbody>
</md-dt-table>

:::
### 请求体示例
```json
{
    "valueRange":{
        "range": "1QXD0s!A1:B2",
        "values": [
        [
            "Hello", 1
        ],
        [
            "World", 1
        ]
        ]
    }
}
```
  
###  cURL 请求示例
```BASH
curl --location --request PUT 'https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/shtcngNygNfuqhxTBf588jabcef/values' \
--header 'Authorization: Bearer t-e346617a4acfc3a11d4ed24dca0d0c0fc8e0067e' \
--header 'Content-Type: application/json' \
--data-raw '{
"valueRange":{
    "range": "Q7PlXT!A1:B2",
    "values": [
      [
        "Hello", 1
      ],
      [
        "World", 1
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
  <md-text type="field-name">updatedRange</md-text>
</md-dt-td>
<md-dt-td>
  <md-text type="field-type">string</md-text>
</md-dt-td>
<md-dt-td>
写入数据的范围
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>
  <md-text type="field-name">updatedRows</md-text>
</md-dt-td>
<md-dt-td>
  <md-text type="field-type">int</md-text>
</md-dt-td>
<md-dt-td>
  写入的行数
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>
  <md-text type="field-name">updatedColumns</md-text>
</md-dt-td>
<md-dt-td>
  <md-text type="field-type">int</md-text>
</md-dt-td>
<md-dt-td>
  写入的列数
</md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
  <md-dt-td>
<md-text type="field-name">updatedCells</md-text>
  </md-dt-td>
  <md-dt-td>
<md-text type="field-type">int</md-text>
  </md-dt-td>
  <md-dt-td>
写入的单元格总数
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
        "revision": 84,
        "spreadsheetToken": "shtcngNygNfuqhxTBf588jabcef",
        "updatedCells": 4,
        "updatedColumns": 2,
        "updatedRange": "1QXD0s!A1:B2",
        "updatedRows": 2
    },
    "msg": "success"
}
```
### 错误码

具体可参考：[服务端错误码说明](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)
