<!--
title: 修改保护范围
id: 6923123667871612956
fullPath: /ukTMukTMukTM/uUTM5YjL1ETO24SNxkjN
updatedAt: 1721123433000
source: https://open.feishu.cn/document/server-docs/docs/sheets-v3/protect-range/modify-protection-scopes
-->
# 修改保护范围

修改电子表格工作表中指定的保护范围。

## 使用限制
单次调用该接口，最多支持修改 10 个保护范围。

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
      <md-td>https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/:spreadsheetToken/protected_range_batch_update</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
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
      <md-td>spreadsheetToken</md-td>
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
<md-text type="field-name" >requests</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >/</md-text>
</md-dt-td>
<md-dt-td>
是
</md-dt-td>
<md-dt-td>
需要增加保护范围的维度信息。支持传入多个维度信息。
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
是
</md-dt-td>
<md-dt-td>
保护范围 ID，可通过[获取表格元数据](/ssl:ttdoc/ukTMukTMukTM/uETMzUjLxEzM14SMxMTN) 获取。
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
否
</md-dt-td>
<md-dt-td>
要保护的行或列
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
电子表格工作表的 ID。调用[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query)获取。
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
是
</md-dt-td>
<md-dt-td>
保护范围的维度。可选值：
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
<md-text type="field-type" >array<int64></md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
增加或删除可编辑保护范围的用户 ID 列表
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >addEditors</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" ></md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
增加的用户 ID 列表，用户需要有文档的编辑权限。
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name" >memberType</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
是
</md-dt-td>
<md-dt-td>
用户 ID 类型，可选值：
- userId：标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。详情参考[如何获取 User ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)
- openId：标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。详情参考[如何获取 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)
- unionId：标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。详情参考[如何获取 Union ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name" >memberId</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
是
</md-dt-td>
<md-dt-td>
用户 ID，类型由 `memberType` 决定。
</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >delEditors</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" ></md-text>
</md-dt-td>
<md-dt-td>
否
</md-dt-td>
<md-dt-td>
需要删除的用户的列表
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name" >memberType</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
是
</md-dt-td>
<md-dt-td>
用户 ID 类型，可选值：
- userId：标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。详情参考[如何获取 User ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)
- openId：标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。详情参考[如何获取 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)
- unionId：标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。详情参考[如何获取 Union ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)
</md-dt-td>
</md-dt-tr>

<md-dt-tr level="3">
<md-dt-td>
<md-text type="field-name" >memberId</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
是
</md-dt-td>
<md-dt-td>
用户 ID，类型由 `memberType` 决定。
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
    "requests": [
        {
            "protectId": "6947942538267541505",
            "dimension": {
                "majorDimension": "ROWS",
                "sheetId": "Q7PlXT",
                "startIndex": 2,
                "endIndex": 4
            },
            "editors": {
                "addEditors": [
                    {
                        "memberType": "userId",
                        "memberId": "667338922291111404"
                    }
                ],
                "delEditors": [
                    {
                        "memberType": "userId",
                        "memberId": "667338922291122404"
                    }
                ]
            },
            "lockInfo": "备注信息"
        }
    ]
}
```
### cURL 请求示例
```bash
curl --location --request POST 'https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/shtcngNygNfuqhxTBf588jwgWbJ/protected_range_batch_update' \
--header 'Authorization: Bearer t-e346617a4acfc3a11d4ed24dca0d0c0fc8e0067e' \
--header 'Content-Type: application/json' \
--data-raw '{
    "requests": [
        {
            "protectId": "6947942538267541505",
            "dimension": {
                "majorDimension": "ROWS",
                "sheetId": "Q7PlXT",
                "startIndex": 2,
                "endIndex": 4
            },
            "editors": {
                "addEditors": [
                    {
                        "memberType": "userId",
                        "memberId": "667338922291111404"
                    }
                ],
                "delEditors": [
                    {
                        "memberType": "userId",
                        "memberId": "667338922291122404"
                    }
                ]
            },
            "lockInfo": "备注信息"
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
      <md-dt-td><md-text type="field-name">replies</md-text></md-dt-td>
      <md-dt-td><md-text type="field-type">array&lt;interface&gt;</md-text></md-dt-td>
      <md-dt-td>修改后的保护范围的信息</md-dt-td>
    </md-dt-tr>
    
    
    
    
<md-dt-tr level="2">
<md-dt-td>
<md-text type="field-name" >protectId</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >string</md-text>
</md-dt-td>
<md-dt-td>
保护范围 ID
</md-dt-td>
</md-dt-tr>
    
    <md-dt-tr level="2">
      <md-dt-td><md-text type="field-name">sheetId</md-text></md-dt-td>
      <md-dt-td><md-text type="field-type">string</md-text></md-dt-td>
      <md-dt-td>工作表 ID</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td><md-text type="field-name">dimension</md-text></md-dt-td>
      <md-dt-td><md-text type="field-type">/</md-text></md-dt-td>
      <md-dt-td>保护的行或列</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="3">
      <md-dt-td><md-text type="field-name">sheetId</md-text></md-dt-td>
      <md-dt-td><md-text type="field-type">string</md-text></md-dt-td>
      <md-dt-td>电子表格工作表的 ID</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="3">
      <md-dt-td><md-text type="field-name">startIndex</md-text></md-dt-td>
      <md-dt-td><md-text type="field-type">int</md-text></md-dt-td>
      <md-dt-td>
开始的行或列的索引。从 1 开始计数。若 startIndex 为 3，则从第 3 行或列开始保护。包含第 3 行或列。</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="3">
      <md-dt-td><md-text type="field-name">endIndex</md-text></md-dt-td>
      <md-dt-td><md-text type="field-type">int</md-text></md-dt-td>
      <md-dt-td>结束的行或列的索引。从 1 开始计数。若 endIndex 为 7，则保护到第 7 行或列。包含第 7 行或列。</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="3">
      <md-dt-td><md-text type="field-name">majorDimension</md-text></md-dt-td>
      <md-dt-td><md-text type="field-type">string</md-dt-td>
      <md-dt-td>
保护范围的维度。枚举值：
- ROWS：行
- COLUMNS：列</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td><md-text type="field-name">editors</md-text></md-dt-td>
      <md-dt-td><md-text type="field-type">/</md-text></md-dt-td>
      <md-dt-td>增加或删除的可编辑保护范围的用户 ID 列表</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="3">
      <md-dt-td><md-text type="field-name">addEditors</md-text></md-dt-td>
      <md-dt-td><md-text type="field-type">array&lt;interface&gt;</md-text></md-dt-td>
      <md-dt-td>增加的用户 ID 列表</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="4">
      <md-dt-td><md-text type="field-name">memberType</md-text></md-dt-td>
      <md-dt-td><md-text type="field-type">string</md-text></md-dt-td>
      <md-dt-td>用户 ID 类型</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="4">
      <md-dt-td><md-text type="field-name">memberId</md-text></md-dt-td>
      <md-dt-td><md-text type="field-type">string</md-text></md-dt-td>
      <md-dt-td>用户 ID，类型由 memberType 决定。</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="3">
      <md-dt-td><md-text type="field-name">delEditors</md-text></md-dt-td>
      <md-dt-td><md-text type="field-type">array&lt;interface&gt;</md-text></md-dt-td>
      <md-dt-td>删除的用户的列表</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="4">
      <md-dt-td><md-text type="field-name">memberType</md-text></md-dt-td>
      <md-dt-td><md-text type="field-type">string</md-text></md-dt-td>
      <md-dt-td>用户 ID 类型</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="4">
      <md-dt-td><md-text type="field-name">memberId</md-text></md-dt-td>
      <md-dt-td><md-text type="field-type">string</md-text></md-dt-td>
      <md-dt-td>用户 ID，类型由 memberType 决定。</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td><md-text type="field-name">lockInfo</md-text></md-dt-td>
      <md-dt-td><md-text type="field-type">string</md-text></md-dt-td>
      <md-dt-td>修改的备注信息</md-dt-td>
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
                "protectId": "6947942538267541505",
                "dimension": {
                    "sheetId": "Q7PlXT",
                    "startIndex": 2,
                    "endIndex": 4,
                    "majorDimension": "ROWS"
                },
                "editors": {
                    "addEditors": [
                        {
                            "memberType": "userId",
                            "memberId": "667338922291111404"
                        }
                    ],
                    "delEditors": []
                },
                "lockInfo": "备注信息",
                "sheetId": "Q7PlXT"
            }
        ]
    }
}
```

### 错误码

具体可参考：[服务端错误码说明](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)