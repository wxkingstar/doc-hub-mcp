<!--
title: 批量删除条件格式
id: 6939784115499859996
fullPath: /ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-delete
updatedAt: 1723186046000
source: https://open.feishu.cn/document/server-docs/docs/sheets-v3/conditionformat/condition-format-delete
-->
# 删除条件格式

删除已有的条件格式。支持跨工作表删除多个条件格式。


## 使用限制
单次调用该接口，最多支持删除 10 个条件格式。


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
      <md-td>https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/:spreadsheet_token/condition_formats/batch_delete  </md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>DELETE</md-td>
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
<md-dt-th style="width: 40%;">参数</md-dt-th>
<md-dt-th style="width: 20%;">类型</md-dt-th>
<md-dt-th style="width: 30%;">说明</md-dt-th>
</md-dt-tr>
</md-dt-thead>
<md-dt-tbody>
<md-dt-tr level="0">
<md-dt-td>
<md-text type="field-name" >sheet_cf_ids
</md-text>

<md-text type="field-type" >
</md-text>
</md-dt-td>
<md-dt-td>
array
</md-dt-td>
<md-dt-td>
要删除的电子表格条件格式的 ID。最多可删除 10 个条件格式。

**注意**：

响应体中将返回每个条件格式的删除结果，包括成功或具体的失败信息。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >sheet_id
</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string
</md-text>
</md-dt-td>

<md-dt-td>
电子表格工作表的 ID。调用[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query)获取 ID。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >cf_id
</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string
</md-text>
</md-dt-td>
<md-dt-td>
条件格式的 ID。调用[获取条件格式](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/conditionformat/condition-format-get)获取 ID。
</md-dt-td>
</md-dt-tr>
</md-dt-tbody>
</md-dt-table>
:::
### 请求体示例
```json
{
    "sheet_cf_ids": [
        {
            "sheet_id": "40a7b0",
            "cf_id": "6hP6Dj6gsd"
        }
    ]
}
```
###  cURL 请求示例
```bash
curl --location --request DELETE 'https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/shtcngNygNfuqhxTBf588jwgWbJ/condition_formats/batch_delete' \
--header 'Authorization: Bearer t-e346617a4acfc3a11d4ed24dca0d0c0fc8e0067e' \
--header 'Content-Type: application/json' \
--data-raw '{
    "sheet_cf_ids": [
        {
            "sheet_id": "Q7PlXT",
            "cf_id": "KjRm0JyS1P"
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
<md-dt-td>删除的条件格式的 ID</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name">res_code</md-dt-td>
<md-dt-td>
<md-text type="field-type">int</md-dt-td>
<md-dt-td>条件格式删除的状态码。0 表示成功创建，非 0 表示失败。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name">res_msg</md-dt-td>
<md-dt-td>
<md-text type="field-type">string</md-dt-td>
<md-dt-td>删除当前条件格式返回的状态信息，success 表示成功，非 success 将返回失败原因。</md-dt-td>
</md-dt-tr>
</md-dt-tbody>
</md-dt-table>
  
:::
### 响应体示例
```json
{
    "code": 0,
    "data": {
        "responses": [
            {
                "cf_id": "6hP6Dj6gsd",
                "res_code": 555554047,
                "res_msg": "cfId not exist",
                "sheet_id": "40a7b0"
            }
        ]
    },
    "msg": "Success"
}
```
### 错误码

具体可参考：[服务端错误码说明](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)