<!--
title: 更新行列
id: 6907569742383562754
fullPath: /ukTMukTMukTM/uYjMzUjL2IzM14iNyMTN
updatedAt: 1732796977000
source: https://open.feishu.cn/document/server-docs/docs/sheets-v3/sheet-rowcol/update-rows-or-columns
-->
# 更新行列

该接口用于更新设置电子表格中行列的属性，包括是否隐藏行列和设置行高列宽。

## 使用限制
单次调用该接口，最多支持设置 5000 行或列。

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
      <md-td>https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/:spreadsheetToken/dimension_range     </md-td>
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
应用调用 API 时，需要通过访问凭证（access_token）进行身份鉴权，参考[选择并获取访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM#5aa2e490)。

**值格式**："Bearer `access_token`"
          
可选值如下：
- <md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>：
          
	以应用身份调用 API，可读写的数据范围由应用自身的[数据权限范围](/ssl:ttdoc/home/introduction-to-scope-and-authorization/configure-app-data-permissions)决定。参考[自建应用获取 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal)或[商店应用获取 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token)。**示例值**："Bearer t-g1044qeGEDXTB6NDJOGV4JQCYDGHRBARFTGT1234"
          
- <md-tag mode="inline" type="token-user">user_access_token</md-tag>：
          
    以用户身份调用 API，可读写的数据范围由用户的的数据权限范围决定。参考[获取 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/get-user-access-token)。**示例值**："Bearer u-cjz1eKCEx289x1TXEiQJqAh5171B4gDHPq00l0GE1234"
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
      <md-th style="width: 15%;">名称</md-th>
      <md-th style="width: 15%;">类型</md-th>
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

:::html

<md-dt-table>
  <md-dt-thead>
    <md-dt-tr>
      <md-dt-th style="width: 25%;">名称</md-dt-th>
      <md-dt-th style="width: 15%;">类型</md-dt-th>
      <md-dt-th style="width: 12%;">必填</md-dt-th>
      <md-dt-th>描述</md-dt-th>
    </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>
    <md-dt-tr level="0">
      <md-dt-td>dimension</md-dt-td>
      <md-dt-td>/</md-dt-td>
      <md-dt-td>是</md-dt-td>
      <md-dt-td>需要更新行列的维度信息</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>sheetId</md-dt-td>
      <md-dt-td>string</md-dt-td>
      <md-dt-td>是</md-dt-td>
      <md-dt-td>工作表的 ID。调用[获取工作表](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/query)获取 ID</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>majorDimension</md-dt-td>
      <md-dt-td>string</md-dt-td>
      <md-dt-td>是</md-dt-td>
      <md-dt-td>更新的维度。可选值：
- `ROWS`：行
- `COLUMNS`：列</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>startIndex</md-dt-td>
      <md-dt-td>int</md-dt-td>
      <md-dt-td>是</md-dt-td>
      <md-dt-td>要更新的行或列的起始位置。从 1 开始计数。若 `startIndex` 为 3，则从第 3 行或列开始更新属性。包含第 3 行或列。</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>endIndex</md-dt-td>
      <md-dt-td>int</md-dt-td>
      <md-dt-td>是</md-dt-td>
      <md-dt-td>要更新的行或列结束的位置。从 1 开始计数。若 `endIndex` 为 7，则更新至第 7 行结束。包含第 7 行。

**示例**：当 `majorDimension`为 `ROWS`、 `startIndex` 为 3、`endIndex ` 为 7 时，则更新第 3、4、5、6、7 行的属性，共更新 5 行。</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="0">
      <md-dt-td>dimensionProperties</md-dt-td>
      <md-dt-td>/</md-dt-td>
      <md-dt-td>是</md-dt-td>
      <md-dt-td>更新行或列的属性。至少写入以下参数之一</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>visible</md-dt-td>
      <md-dt-td>bool</md-dt-td>
      <md-dt-td>否</md-dt-td>
      <md-dt-td>是否显示行或列。可选值：
- true：显示行或列
- false：隐藏行或列</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>fixedSize</md-dt-td>
      <md-dt-td>int</md-dt-td>
      <md-dt-td>否</md-dt-td>
      <md-dt-td>行高或列宽。单位为像素。`fixedSize` 为 0 时，等价于隐藏行或列。</md-dt-td>
    </md-dt-tr>
  </md-dt-tbody>
</md-dt-table>

:::
### 请求体示例    
```json
{
    "dimension":{
        "sheetId":"2jm6f6",
        "majorDimension":"ROWS",
        "startIndex":1,
        "endIndex":3
    },
    "dimensionProperties":{
        "visible":true,
        "fixedSize":50
    }
}
```
###  cURL 请求示例
```BASH
curl --location --request PUT 'https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/shtcngNygNfuqhxTBf588jwgWbJ/dimension_range' \
--header 'Authorization: Bearer t-e346617a4acfc3a11d4ed24dca0d0c0fc8e0067e' \
--header 'Content-Type: application/json' \
--data-raw '{
    "dimension":{
        "sheetId":"2jm6f6",
        "majorDimension":"ROWS",
        "startIndex":1,
        "endIndex":3
    },
    "dimensionProperties":{
        "visible":true,
        "fixedSize":50
    }
}'
```

## 响应  

 ### 响应体示例    
```json
{
    "code": 0,
    "data": {},
    "msg": "Success"
}
```

### 错误码

具体可参考：[服务端错误码说明](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)
