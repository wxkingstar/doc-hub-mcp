<!--
title: 更新工作表属性
id: 6907569743419473922
fullPath: /ukTMukTMukTM/ugjMzUjL4IzM14COyMTN
updatedAt: 1746601157000
source: https://open.feishu.cn/document/server-docs/docs/sheets-v3/spreadsheet-sheet/update-sheet-properties
-->
# 更新工作表属性

更新电子表格中的工作表。支持更新工作表的标题、位置，和隐藏、冻结、保护等属性。
::: note
该接口和 [操作工作表](/ssl:ttdoc/ukTMukTMukTM/uYTMzUjL2EzM14iNxMTN) 的请求地址相同，但参数不同，调用前请仔细阅读文档。
:::


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
      <md-td>https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/:spreadsheet_token/sheets_batch_update   </md-td>
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
用户 ID 类型。默认为 `lark_id`，建议选择 `open_id` 或 `union_id`。了解更多，参考[用户身份概述](/ssl:ttdoc/home/user-identity-introduction/introduction)。可选值：
- `open_id`：标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。了解更多：[如何获取 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)

- `union_id`：标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。了解更多：[如何获取 Union ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)
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
<md-dt-th style="width: 40%;">名称</md-dt-th>
<md-dt-th style="width: 20%;">类型</md-dt-th>
<md-dt-th style="width: 10%;">必填</md-dt-th>
<md-dt-th style="width: 30%;">描述</md-dt-th>
</md-dt-tr>
</md-dt-thead>
<md-dt-tbody>

<md-dt-tr level="0">
<md-dt-td>
<md-text type="field-name" >requests</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >/</md-text>
</md-dt-td>
<md-dt-td>
是
</md-dt-td>
<md-dt-td>
更新工作表属性的请求。一次请求可以进行多次更新操作。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >updateSheet</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >/</md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
更新工作表。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >properties</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >/</md-text>
</md-dt-td>
<md-dt-td>
是
</md-dt-td>
<md-dt-td>
工作表属性
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="3">
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
要更新的工作表的 ID。调用[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query)获取 ID。
</md-dt-td>
</md-dt-tr>
  

<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name" >title</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
工作表的标题。更新的标题需符合以下规则：

- 长度不超过 100 个字符
- 不包含这些特殊字符：`/ \ ? * [ ] :`
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name" >index</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >int</md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
工作表的位置。从 0 开始计数。
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name" >hidden</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >bool</md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
是否要隐藏表格。默认值为 false。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name" >frozenRowCount</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >int</md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
要冻结至指定行的行索引。若填 3，表示从第一行冻结至第三行。小于或等于工作表的最大行数，0 表示取消冻结行。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name" >frozenColCount</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >int</md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
要冻结至指定列的列索引。若填 3，表示从第一列冻结至第三列。小于等于工作表的最大列数，0 表示取消冻结列。

</md-dt-td>
</md-dt-tr>

<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name" >protect</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >/</md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
是否要保护该工作表。</md-dt-td>
</md-dt-tr>
  
<md-dt-tr level="4">
<md-dt-td>
<md-text type="field-name" >lock</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
是
</md-dt-td>
<md-dt-td>
是否要保护该工作表。可选值：
- LOCK：保护
- UNLOCK：取消保护 </md-dt-td>
</md-dt-tr>  
  

<md-dt-tr level="4">
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
保护工作表的备注信息
  </md-dt-td>
</md-dt-tr>  
  
<md-dt-tr level="4">
<md-dt-td>
<md-text type="field-name" >userIDs</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >array<string></md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
添加除操作用户与所有者外其他用户的 ID，为其开通保护范围的编辑权限。ID 类型由查询参数 `user_id_type` 决定。`user_id_type` 不为空时，该字段生效。</md-dt-td>
</md-dt-tr>  
    
</md-dt-tr>  
</md-dt-tbody>
</md-dt-table>
:::
  
### 请求体示例    
```json
{
  "requests": [
    {
      "updateSheet": {
        "properties": {
          "sheetId": "1SW8ik",
          "title": "Sales sheet",
          "index": 3,
          "hidden": true,
          "frozenColCount": 8,
          "frozenRowCount": 2,
          "protect": {
            "lock": "LOCK",
            "lockInfo": "privacy info",
            "userIDs": [
              "ou_48d0958ee4b2ab3eaf0b5f6c968abcef"
            ]
          }
        }
      }
    }
  ]
}
```
  ### cURL 请求示例
```bash
curl --location --request POST 'https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/shtcngNygNfuqhxTBf588jwgWbJ/sheets_batch_update?user_id_type=open_id' \
--header 'Authorization: Bearer t-e346617a4acfc3a11d4ed24dca0d0c0fc8e0067e' \
--header 'Content-Type: application/json' \
--data-raw '{
  "requests": [
    {
      "updateSheet": {
        "properties": {
          "sheetId": "zajIJ",
          "title": "Sales sheet",
          "index": 3,
          "hidden": true,
          "frozenColCount": 8,
          "frozenRowCount": 2,
          "protect": {
            "lock": "LOCK",
            "lockInfo": "privacy info"
            "userIDs": [
               "ou_48d0958ee4b2ab3eaf0b5f6c968abcef"
            ]
          }
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
<md-dt-th style="width: 40%;">名称</md-dt-th>
<md-dt-th style="width: 20%;">类型</md-dt-th>
<md-dt-th style="width: 30%;">描述</md-dt-th>
</md-dt-tr>
</md-dt-thead>
<md-dt-tbody>

<md-dt-tr level="0">
<md-dt-td>
<md-text type="field-name" >replies</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >/</md-text>
</md-dt-td>
<md-dt-td>
本次操作工作表的结果
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >updateSheet</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >/</md-text>
</md-dt-td>
<md-dt-td>
更新工作表的结果
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >properties</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >/</md-text>
</md-dt-td>
<md-dt-td>
工作表属性
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name" >sheetId</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
更新的工作表的 ID
</md-dt-td>
</md-dt-tr>
  

<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name" >title</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
更新的工作表的标题
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name" >index</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >int</md-text>
</md-dt-td>
<md-dt-td>
移动的工作表的位置
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name" >hidden</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >bool</md-text>
</md-dt-td>
<md-dt-td>
是否隐藏表格
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name" >frozen RowCount</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >int</md-text>
</md-dt-td>
<md-dt-td>
冻结至指定行的行索引
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name" >frozen ColCount</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >int</md-text>
</md-dt-td>

<md-dt-td>
冻结至指定列的列索引

</md-dt-td>
</md-dt-tr>

<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name" >protect</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >/</md-text>
</md-dt-td>
<md-dt-td>
保护工作表的属性</md-dt-td>
</md-dt-tr>
  
<md-dt-tr level="4">
<md-dt-td>
<md-text type="field-name" >lock</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
是否要保护该工作表。可选值：
- LOCK：保护
- UNLOCK：取消保护 </md-dt-td>
</md-dt-tr>  
  

<md-dt-tr level="4">
<md-dt-td>
<md-text type="field-name" >lockInfo</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
保护工作表的备注信息
  </md-dt-td>
</md-dt-tr>  
  
<md-dt-tr level="4">
<md-dt-td>
<md-text type="field-name" >userIDs</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >array<string></md-text>
</md-dt-td>
<md-dt-td>
除了本人与所有者外，其他拥有保护范围编辑权限的人员 ID。ID 类型由查询参数 `user_id_type` 决定。</md-dt-td>
</md-dt-tr>  
    
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
    "replies": [
      {
        "updateSheet": {
          "properties": {
            "sheetId": "1SW8ik",
            "title": "Sales sheet",
            "index": 3,
            "hidden": true,
            "frozenColCount": 2,
            "frozenRowCount": 8,
            "protect": {
              "lock": "LOCK",
              "lockInfo": "privacy info",
              "userIDs": [
                "ou_48d0958ee4b2ab3eaf0b5f6c968abcef"
              ]
            }
          }
        }
      }
    ]
  }
}
```
### 错误码

具体可参考：[服务端错误码说明](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)
  