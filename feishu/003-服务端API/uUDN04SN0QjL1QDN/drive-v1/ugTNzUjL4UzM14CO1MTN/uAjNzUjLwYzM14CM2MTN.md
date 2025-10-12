<!--
title: 获取文件夹元数据
id: 6907569524099989505
fullPath: /ukTMukTMukTM/uAjNzUjLwYzM14CM2MTN
updatedAt: 1732796943000
source: https://open.feishu.cn/document/server-docs/docs/drive-v1/folder/get-folder-meta
-->
# 获取文件夹元数据


该接口用于根据文件夹 token 获取该文件夹的元数据，包括文件夹的 ID、名称、创建者 ID 等。

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
      <md-td>https://open.feishu.cn/open-apis/drive/explorer/v2/folder/:folderToken/meta</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
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
<md-perm name="drive:drive.metadata:readonly" desc="查看云空间中文件元数据" support_app_types="custom,isv" tags="">查看云空间中文件元数据</md-perm>
</md-td> 
      </md-tr>
  </md-tbody>
</md-table>
:::
  
  :::html
<md-alert type="tip">
了解更多权限相关信息，参考[云文档常见问题](/ssl:ttdoc/ukTMukTMukTM/uczNzUjL3czM14yN3MTN)。

</md-alert>
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
      <md-th style="width: 18%;">名称</md-th>  
      <md-th style="width: 15%;">类型</md-th>  
       <md-th style="width: 15%;">必填</md-th>  
      <md-th>描述</md-th> 
    </md-tr> 
  </md-thead>  
  <md-tbody> 
<md-tr>
	<md-td>
	<md-text type="field-name" >folderToken</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	是
	</md-td>

    	<md-td>
    文件夹 token。了解如何获取文件夹 token，参考[文件夹概述](/ssl:ttdoc/ukTMukTMukTM/ugTNzUjL4UzM14CO1MTN/folder-overview)。
	</md-td>

</md-tr>
  </md-tbody>
</md-table>
:::


## 响应
  
### 响应体

:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 15%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 52%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文件夹的 ID
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >name</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
文件夹的标题
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
		文件夹的 token
	</md-dt-td>
</md-dt-tr>
    
    
<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >createUid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	文件夹的创建者 ID
	</md-dt-td>
</md-dt-tr>

    
<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >editUid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
		文件夹的最后编辑者 ID
	</md-dt-td>
</md-dt-tr>
    
    
    <md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >parentId</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
			文件夹的上级目录 ID。“0” 表示当前文件夹无上级目录
	</md-dt-td>
</md-dt-tr>
    
    
    <md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >ownUid</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
		文件夹为个人文件夹时，为文件夹的所有者 ID；文件夹为共享文件夹时，为文件夹树 ID
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
      "id": "7110173013420512356",
      "name": "name",
      "token": "nodbcbHUdOsS613xVzTzFEabcef",
      "createUid": "7103496998321312356",
      "editUid": "7103496998321312356",
      "parentId": "0",
      "ownUid": "7110173013420512356"
    }
}
```
  
### 错误码

以下为本接口相关错误码。了解其它通用错误码，参考[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。
:::html
<md-table> 
  <md-thead> 
    <md-tr> 
      <md-th style="width: 15%;">错误码</md-th>  
      <md-th style="width: 25%;">说明</md-th>  
      <md-th style="width: 60%;">排查建议</md-th>  
    </md-tr> 
  </md-thead>  
  <md-tbody> 
     <md-tr> 
      <md-td>91201</md-td>  
      <md-td>FAILED</md-td>  
      <md-td>处理失败。请稍后重试。</md-td> 
	</md-tr>
     <md-tr> 
      <md-td>91203</md-td>  
      <md-td>not found</md-td>  
      <md-td>参数错误。请检查路径参数是否正确。</md-td> 
	</md-tr>
     <md-tr> 
      <md-td>91204</md-td>  
      <md-td>FORBIDDEN</md-td>  
      <md-td>当前应用或用户没有权限。参考本文档“请求”部分的权限要求为应用或用户开启对应权限。了解更多，参考[云空间常见问题](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/faq)。</md-td> 
	</md-tr>
  </md-tbody> 
</md-table>
:::
