<!--
title: 校验应用管理员
id: 6907569524100022273
fullPath: /ukTMukTMukTM/uITN1EjLyUTNx4iM1UTM
updatedAt: 1647332683000
source: https://open.feishu.cn/document/server-docs/application-v6/admin/verify-app-admin
-->
# 获取某个用户是否有应用管理权限

该接口用于查询用户是否为应用管理员。
> 此处应用管理员是指可以进入企业管理后台对应用进行审核和管理的企业管理员，并不是应用的开发者。

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
      <md-td>https://open.feishu.cn/open-apis/application/v3/is_user_admin</md-td>
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
<md-perm name="admin:app.admin:check" desc="校验用户是否为应用管理员" support_app_types="custom,isv" tags="">校验用户是否为应用管理员</md-perm>
<md-perm name="admin:app.admin:readonly" desc="获取应用管理员 ID、管理范围等信息" support_app_types="custom" tags="">获取应用管理员 ID、管理范围等信息</md-perm>
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
<md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>
 
**值格式**："Bearer `access_token`"

**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"
          
 [了解更多：如何选择与获取 access token](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)
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

### 请求参数
|参数|类型|必须|说明|
|--|-----|--|----|
|open_id|string|否|用户 open_id，open_id 和 employee_id 两个参数必须包含其一，若同时传入取 open_id|
|employee_id|string|否|用户 employee_id（同通讯录 v3 版本中的 user_id），open_id 和 employee_id 两个参数必须包含其一，若同时传入取 open_id|

## 响应

### 响应体
|参数|说明|
|--|--|
|code|返回码，非 0 表示失败|
|msg|返回码的描述|
|data|返回的业务信息|
|&emsp;∟is_app_admin|用户是否为管理员，true 为是，false 为否|

### 响应示例
```json
{ 
    "code": 0, 
    "msg": "ok", 
    "data": { 
        "is_app_admin": false
    } 
}
```
