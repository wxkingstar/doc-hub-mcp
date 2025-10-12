<!--
title: 删除下拉列表设置
id: 6943917246700257282
fullPath: /ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/datavalidation/delete-datavalidation
updatedAt: 1755243220000
source: https://open.feishu.cn/document/server-docs/docs/sheets-v3/datavalidation/delete-datavalidation
-->
# 删除下拉列表设置
删除电子表格工作表指定范围中下拉列表的设置，但仍保留选项文本。

## 使用限制
单次删除请求可指定多个范围，单个范围指定的单元格不可超过 5,000 个，范围的总数不可超过 100 个。


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
      <md-td>https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/:spreadsheetToken/dataValidation</md-td>
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
      <md-td>spreadsheetToken</md-td>
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
<md-dt-th style="width: 10%;">必须</md-dt-th>
<md-dt-th style="width: 30%;">说明</md-dt-th>
</md-dt-tr>
</md-dt-thead>
<md-dt-tbody>
<md-dt-tr level="0">
<md-dt-td>dataValidationRanges</md-dt-td>
<md-dt-td>array</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>指定要删除的下拉列表的范围。可指定多个范围。
  
**注意**：
- 删除某个范围失败不影响其它范围的执行。响应体中将返回每个范围的执行结果。
- 单个范围指定的单元格不可超过 5,000 个，范围的总数不可超过 100 个。
  
  </md-dt-td>
</md-dt-tr>
<md-dt-tr level="1">
<md-dt-td>range</md-dt-td>
<md-dt-td>string</md-dt-td>
<md-dt-td>是</md-dt-td>
<md-dt-td>要删除的下拉列表的范围。格式为 `<sheetId>!<开始位置>:<结束位置>`。其中：
- `sheetId` 为工作表 ID，通过[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query) 获取
- `<开始位置>:<结束位置>` 为工作表中单元格的范围，数字表示行索引，字母表示列索引。如 `A2:B2` 表示该工作表第 2 行的 A 列到 B 列。`range`支持四种写法，详情参考[电子表格概述](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)
</md-dt-td>
</md-dt-tr>
  
</md-dt-tbody>
</md-dt-table>
:::

### 请求体示例

```json
{
    "dataValidationRanges":[
        {
            "range": "4d30c6!A10:C10"
        }
    ]
}
```
### cURL 请求示例
  ```bash
  curl --location --request DELETE 'https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/shtcngNygNfuqhxTBf588jwgWbJ/dataValidation' \
--header 'Authorization: Bearer t-ce3540c5f02ac074535f1f14d64fa90fa49621c0' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dataValidationRanges":[
        {
            "range": "BzY8T5!A1:A1"
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
<md-dt-td>响应数据</md-dt-td>
</md-dt-tr>

<md-dt-tr level="1">
<md-dt-td>rangeResults</md-dt-td>
<md-dt-td>array</md-dt-td>
<md-dt-td>删除下拉列表设置的结果</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
<md-dt-td>range</md-dt-td>
<md-dt-td>string</md-dt-td>

<md-dt-td>要删除的范围，与请求参数中 range 的值对应。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
<md-dt-td>msg</md-dt-td>
<md-dt-td>string</md-dt-td>

<md-dt-td>结果信息</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
<md-dt-td>success</md-dt-td>
<md-dt-td>bool</md-dt-td>

<md-dt-td>是否成功删除该范围中的下拉列表设置。</md-dt-td>
</md-dt-tr>
<md-dt-tr level="2">
<md-dt-td>updatedCells</md-dt-td>
<md-dt-td>int</md-dt-td>

<md-dt-td>影响的单元格总数</md-dt-td>
</md-dt-tr>
</md-dt-tbody>
</md-dt-table>
:::

  
### 响应体示例  

```json
{
    "code": 0,
    "data": {
        "rangeResults": [
            {
                "msg": "",
                "range": "4d30c6!A10:C10",
                "success": true,
                "updatedCells": 3
            }
        ]
    },
    "msg": "Success"
}
```  
  
### 错误码

具体可参考：[服务端错误码说明](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)