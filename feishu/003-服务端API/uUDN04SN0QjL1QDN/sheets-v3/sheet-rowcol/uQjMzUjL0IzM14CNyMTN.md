<!--
title: 插入行列
id: 6907569743420194818
fullPath: /ukTMukTMukTM/uQjMzUjL0IzM14CNyMTN
updatedAt: 1723618537000
source: https://open.feishu.cn/document/server-docs/docs/sheets-v3/sheet-rowcol/insert-rows-or-columns
-->
# 插入行列

该接口用于在电子表格的指定位置插入空白行或列。
## 使用限制

单次调用该接口，最多支持插入 5000 行或列。

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
      <md-td>https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/:spreadsheetToken/insert_dimension_range  </md-td>
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
      <md-th>描述</md-th>
  </md-tr>  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>spreadsheetToken</md-td>
       <md-td>string</md-td>
       <md-td>电子表格的 token。可通过以下两种方式获取。了解更多，参考[电子表格概述](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/overview)。
-  电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==
- 调用[获取文件夹中的文件清单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/list)</md-td>
      </md-tr>
  </md-tbody>

</md-table>
::: 


### 请求体  
|名称|类型|必须|描述|
|--|-----|--|----|
|dimension||是|需要插入行列的维度信息| 
|&emsp;∟sheetId|string|是|电子表格工作表的 ID。调用[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query)获取 ID。| 
|&emsp;∟majorDimension|string|是|要更新的维度。可选值：<br>- `ROWS`：行 <br>- `COLUMNS`：列| 
|&emsp;∟startIndex|int|是|插入的行或列的起始位置。从 0 开始计数。若 `startIndex` 为 3，则从第 4 行或列开始插入空行或列。包含第 4 行或列。|
|&emsp;∟endIndex|int|是|插入的行或列结束的位置。从 0 开始计数。若 `endIndex` 为 7，则从第 8 行结束插入行。第 8 行不再插入空行。<br>示例：当 `majorDimension`为 `ROWS`、 `startIndex` 为 3、`endIndex ` 为 7 时，则在第 4、5、6、7 行插入空白行，共插入 4 行。|
|inheritStyle|string|否|插入的空白行或列是否继承表中的单元格样式。不填或设置为空即不继承任何样式，为默认空白样式。可选值：<br>- `BEFORE`：继承起始位置的单元格的样式 <br>- `AFTER`：继承结束位置的单元格的样式| 

### 请求体示例  
```json
{
    "dimension":{
        "sheetId":"2jm6f6",
        "majorDimension":"ROWS",
        "startIndex":3,
        "endIndex":7
    },
    "inheritStyle":"BEFORE"
}
```
### cURL 请求示例
```
curl --location --request POST 'https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/shtcngNygNfuqhxTBf588jwgWbJ/insert_dimension_range' \
--header 'Authorization: Bearer t-e346617a4acfc3a11d4ed24dca0d0c0fc8e0067e' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dimension":{
        "sheetId":"2jm6f6",
        "majorDimension":"ROWS",
        "startIndex":3,
        "endIndex":7
    },
    "inheritStyle":"BEFORE"
}'
```
## 响应  

### 响应体示例    

```json
{
    "code": 0,
    "msg": "Success",
    "data": {}
}
```

### 错误码

具体可参考：[服务端错误码说明](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)


