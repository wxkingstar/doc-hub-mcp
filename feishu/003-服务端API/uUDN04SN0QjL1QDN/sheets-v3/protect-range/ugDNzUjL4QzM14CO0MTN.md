<!--
title: 增加保护范围
id: 6907569742383988738
fullPath: /ukTMukTMukTM/ugDNzUjL4QzM14CO0MTN
updatedAt: 1760063200000
source: https://open.feishu.cn/document/server-docs/docs/sheets-v3/protect-range/add-locked-cells
-->
# 增加保护范围

在电子表格工作表中设置多个保护范围，支持对行或列设置保护范围。

## 基本概念
设置保护范围指对工作表中的任意行或列进行保护，并可设置其他协作者是否有权限编辑该数据，有效保障数据信息安全。


## 使用限制

- 单次调用该接口，最多支持为 5,000 行或列设置保护范围。
- 仅支持对行或列设置保护范围，暂不支持对单元格设置保护范围。
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
      <md-td>https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/:spreadsheet_token/protected_dimension</md-td>
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


### 查询参数
:::html
<md-table>
  <md-thead>
  <md-tr>
      <md-th>名称</md-th>
      <md-th>类型</md-th>
      <md-th>必填</md-th>
	  <md-th style="width: 50%;">描述</md-th>
  </md-tr>
      </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>user_id_type</md-td>
       <md-td>string</md-td>
       <md-td>否</md-td>
      <md-td>	
指定请求体中 users 字段对应的用户 ID 类型。可选值如下所示。了解更多，参考[用户身份概述](/ssl:ttdoc/home/user-identity-introduction/introduction)。可选值：
- `open_id`：标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。了解更多：[如何获取 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)

- `union_id`：标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。了解更多：[如何获取 Union ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)
        
**注意**：
若要在请求体中传入 users 参数，user_id_type 参数必填。
</md-td>
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
<md-text type="field-name" >addProtectedDimension</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >/</md-text>
</md-dt-td>
<md-dt-td>
是
</md-dt-td>
<md-dt-td>
需要增加保护范围的维度信息。最多支持传入 50 个维度信息。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >dimension</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >/</md-text>
</md-dt-td>
<md-dt-td>
是
</md-dt-td>
<md-dt-td>
要保护的行或列的信息
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >sheetId</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
是
</md-dt-td>
<md-dt-td>
电子表格工作表的 ID。调用[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query)获取 ID。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >majorDimension</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
更新的维度，默认 ROWS。可选值：
- ROWS：行
- COLUMNS：列
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >startIndex</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >int</md-text>
</md-dt-td>
<md-dt-td>
是
</md-dt-td>
<md-dt-td>
开始的行或列的索引。从 1 开始计数。若 `startIndex` 为 3，则从第 3 行或列开始保护。包含第 3 行或列。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >endIndex</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >int</md-dt-td>
</md-dt-td>
<md-dt-td>
是
</md-dt-td>
<md-dt-td>
结束的行或列的索引。从 1 开始计数。若 `endIndex` 为 7，则保护到第 7 行或列。包含第 7 行或列。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >editors</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >array&lt;int64&gt;</md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
允许编辑保护范围的用户的 `lark_id`。该字段已不推荐使用，你可使用 `users` 参数代替。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >users</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >array&lt;string&gt;</md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
允许编辑保护范围的用户的 ID。ID 类型取决于查询参数 `user_id_type` 的取值。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >lockInfo</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
保护范围的备注信息
</md-dt-td>
</md-dt-tr>

</md-dt-tbody>
</md-dt-table>
:::
### 请求体示例

```json
{
    "addProtectedDimension":[
        {
            "dimension":{
                "sheetId":"Q7PlXT",
                "majorDimension":"COLUMNS",
                "startIndex":10,
                "endIndex":13
            },
            "users":[
                "ou_326f4b0552770f2de069deb256dabcef"
            ],
            "lockInfo":"你能编辑"
        }
    ]
}
```
  
###  cURL 请求示例
```bash
curl --location --request POST 'https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/shtcngNygNfuqhxTBf588jabcef/protected_dimension?user_id_type=open_id' \
--header 'Authorization: Bearer t-e346617a4acfc3a11d4ed24dca0d0c0fc8e0067e' \
--header 'Content-Type: application/json' \
--data-raw '{
    "addProtectedDimension":[
        {
            "dimension":{
                "sheetId":"Q7PlXT",
                "majorDimension":"COLUMNS",
                "startIndex":10,
                "endIndex":13
            },
            "users":[
              "ou_326f4b0552770f2de069deb256dabcef"
            ],
            "lockInfo":"你能编辑"
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
  <md-dt-th style="width: 30%;">名称</md-dt-th>
  <md-dt-th style="width: 20%;">类型</md-dt-th>
  <md-dt-th style="width: 60%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
<md-dt-td>
<md-text type="field-name" >addProtectedDimension</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >array&lt;interface&gt;</md-text>
</md-dt-td>
<md-dt-td>
保护范围的维度信息
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >dimension</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >/</md-text>
</md-dt-td>
<md-dt-td>
保护范围的信息
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >sheetId</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
保护范围所在的工作表的 ID
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >majorDimension</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
保护范围的维度。枚举值：
- ROWS：行
- COLUMNS：列
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >startIndex</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >int</md-text>
</md-dt-td>
<md-dt-td>
保护范围开始的行或列的索引。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >endIndex</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >int</md-text>
</md-dt-td>
<md-dt-td>
保护范围结束的行或列的索引。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >editors</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >array&lt;int64&gt;</md-text>
</md-dt-td>
<md-dt-td>
允许编辑保护范围的用户的 `lark_id`。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >users</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >array&lt;string&gt;</md-text>
</md-dt-td>
<md-dt-td>
允许编辑保护范围的用户的 ID。ID 类型取决于查询参数 `user_id_type`。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >lockInfo</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
保护范围的备注信息
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >protectId</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
保护范围的 ID
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
    "addProtectedDimension": [
      {
        "dimension": {
          "endIndex": 13,
          "majorDimension": "COLUMNS",
          "sheetId": "Q7PlXT",
          "startIndex": 10
        },
        "lockInfo": "你能编辑",
        "protectId": "7379738014546821122",
        "users": [
          "ou_449b53ad6aee526f7ed311b216aabcef"
        ]
      }
    ]
  },
  "msg": "success"
}
```  
  
### 错误码

具体可参考：[服务端错误码说明](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)
