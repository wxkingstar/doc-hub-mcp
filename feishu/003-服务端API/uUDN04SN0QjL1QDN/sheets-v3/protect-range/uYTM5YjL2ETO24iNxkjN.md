<!--
title: 删除保护范围
id: 6923123667871629340
fullPath: /ukTMukTMukTM/uYTM5YjL2ETO24iNxkjN
updatedAt: 1732796999000
source: https://open.feishu.cn/document/server-docs/docs/sheets-v3/protect-range/delete-protection-scopes
-->
# 删除保护范围

根据保护范围 ID 删除保护范围。

## 注意事项
单次调用该接口，最多支持删除 10 个保护范围。
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
      <md-td>https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/:spreadsheetToken/protected_range_batch_del  </md-td>
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
<md-text type="field-name" >protectIds</md-text>
</md-dt-td>
<md-dt-td>
<md-text type="field-type" >array&lt;string&gt;</md-text>
</md-dt-td>
<md-dt-td>
是
</md-dt-td>
<md-dt-td>
要删除的保护范围 ID，可通过[获取表格元数据](/ssl:ttdoc/ukTMukTMukTM/uETMzUjLxEzM14SMxMTN) 获取。最多支持传入 10 个保护范围 ID。
</md-dt-td>
</md-dt-tr>

</md-dt-tbody>
</md-dt-table>
:::


### 请求体示例

```json
{
    "protectIds": ["6947942538267541505"]
}
```
###  cURL 请求示例
```bash
curl --location --request DELETE 'https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/shtcngNygNfuqhxTBf588jwgWbJ/protected_range_batch_del' \
--header 'Authorization: Bearer t-e346617a4acfc3a11d4ed24dca0d0c0fc8e0067e' \
--header 'Content-Type: application/json' \
--data-raw '{
    "protectIds": ["6947942538267541505","6946456074476339204"]
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
  <md-text type="field-name">delProtectIds</md-text>
</md-dt-td>
<md-dt-td>
  <md-text type="field-type">array&lt;string&gt;</md-text>
</md-dt-td>
<md-dt-td>
  成功删除的保护范围 ID
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
        "delProtectIds": [
            "6947942538267541505"
        ]
    }
}
```

### 错误码

具体可参考：[服务端错误码说明](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)