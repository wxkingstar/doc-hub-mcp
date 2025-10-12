<!--
title: 操作工作表
id: 6907569745299439618
fullPath: /ukTMukTMukTM/uYTMzUjL2EzM14iNxMTN
updatedAt: 1732796955000
source: https://open.feishu.cn/document/server-docs/docs/sheets-v3/spreadsheet-sheet/operate-sheets
-->
# 操作工作表


根据电子表格的 token 对工作表进行操作，包括增加工作表、复制工作表、删除工作表。
::: note
该接口和 [更新工作表属性](/ssl:ttdoc/ukTMukTMukTM/ugjMzUjL4IzM14COyMTN) 的请求地址相同，但参数不同，调用前请仔细阅读文档。
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
      <md-td>https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/:spreadsheet_token/sheets_batch_update  </md-td>
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
应用调用 API 时，需要通过访问凭证（access_token）进行身份鉴权，参考[选择并获取访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM#5aa2e490)。

**值格式**："Bearer `access_token`"
          
可选值如下：
- <md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>：
          
	以应用身份调用 API，可读写的数据范围由应用自身的[数据权限范围](/ssl:ttdoc/home/introduction-to-scope-and-authorization/configure-app-data-permissions)决定。参考[自建应用获取 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal)或[商店应用获取 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token)。**示例值**："Bearer t-g1044qeGEDXTB6NDJOGV4JQCYDGHRBARFTGT1234"
          
- <md-tag mode="inline" type="token-user">user_access_token</md-tag>：
          
    以用户身份调用 API，可读写的数据范围由用户的的数据权限范围决定。参考[获取 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/get-user-access-token)。。**示例值**："Bearer u-cjz1eKCEx289x1TXEiQJqAh5171B4gDHPq00l0GE1234"
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
      <md-th>参数</md-th>
      <md-th>类型</md-th>
      <md-th>描述</md-th>
  </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>spreadsheet_token</md-td>
       <md-td>string</md-td>
       <md-td>电子表格的 token。可通过以下两种方式获取。了解更多，参考[电子表格概述](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)。
-  电子表格的 URL：https://sample.feishu.cn/sheets/==Ios7sNNEphp3WbtnbCscPqabcef==
- 调用[获取文件夹中的文件清单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/list)
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
支持增加、复制、和删除工作表。一次请求可以同时进行多个操作。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >addSheet</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >/</md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
增加工作表。
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
<md-text type="field-name" >title</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
是
</md-dt-td>
<md-dt-td>
新增工作表的标题
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
新增工作表的位置。不填默认在工作表的第 0 索引位置增加工作表。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >copySheet</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >/</md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
复制工作表。复制的新工作表位于源工作表索引位置之后。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >source</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >/</md-text>
</md-dt-td>
<md-dt-td>
是
</md-dt-td>
<md-dt-td>
需要复制的工作表资源
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
源工作表的 ID。调用[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query)获取 ID。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >destination</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >/</md-text>
</md-dt-td>
<md-dt-td>
是
</md-dt-td>
<md-dt-td>
新工作表的属性
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
新工作表名称。不填默认为“源工作表名称”+“(副本_源工作表的 `index` 值)”，如 “Sheet1(副本_0)”。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >deleteSheet</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >/</md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
删除工作表。
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
要删除的工作表的 ID。调用[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query)获取 ID。
</md-dt-td>
</md-dt-tr>
</md-dt-tbody>
</md-dt-table>
:::


### 请求体示例  
```json
{
  "requests": [
    {
      "addSheet": {
        "properties": {
          "title": "new_sheet",
          "index": 1
        }
      }
    },
    {
      "copySheet": {
        "source": {
          "sheetId": "2jm6f7"
        },
        "destination": {
          "title": "sheet_copy"
        }
      }
    },
    {
      "deleteSheet": {
        "sheetId": "l8Gdub"
      }
    }
  ]
}

```
### cURL 请求示例
```bash
curl --location --request POST 'https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/Ios7sNNEphp3WbtnbCscPqabcef/sheets_batch_update' \
--header 'Authorization: Bearer t-e346617a4acfc3a11d4ed24dca0d0c0fc8e0067e' \
--header 'Content-Type: application/json' \
--data-raw '{
  "requests": [
    {
      "addSheet": {
        "properties": {
          "title": "new_sheet",
          "index": 1
        }
      }
    },
    {
      "copySheet": {
        "source": {
          "sheetId": "2jm6f7"
        },
        "destination": {
          "title": "sheet_copy"
        }
      }
    },
    {
      "deleteSheet": {
        "sheetId": "l8Gdub"
      }
    }
  ]
}
'
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
<md-text type="field-name" >addSheet</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >/</md-text>
</md-dt-td>
<md-dt-td>
增加工作表的结果
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
新增工作表的属性
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
新增工作表的 `sheetId`
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
新增工作表的标题
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
新增工作表的位置
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >copySheet</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >/</md-text>
</md-dt-td>
<md-dt-td>
复制工作表的结果
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
复制的工作表的属性
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
复制工作表的 `sheetId`
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
复制工作表的标题
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
复制的工作表的位置
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>
<md-text type="field-name" >deleteSheet</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >/</md-text>
</md-dt-td>
<md-dt-td>
删除工作表的结果
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >result</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >bool</md-text>
</md-dt-td>
<md-dt-td>
删除工作表是否成功
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
被删除的工作表的 ID
</md-dt-td>
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
        "addSheet": {
          "properties": {
            "sheetId": "l8Gddg",
            "title": "new_sheet",
            "index": 1
          }
        },
        "copySheet": {
          "properties": {
            "sheetId": "dso4jn",
            "title": "sheet_copy",
            "index": 0
          }
        },
        "deleteSheet": {
          "result": true,
          "sheetId": "l8Gdub"
        }
      }
    ]
  }
}
```
### 错误码

具体可参考：[服务端错误码说明](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)  



