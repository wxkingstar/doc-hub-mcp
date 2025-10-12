<!--
title: 获取应用管理员管理范围
id: 6907569742384971778
fullPath: /ukTMukTMukTM/uMzN3QjLzczN04yM3cDN
updatedAt: 1646131512000
source: https://open.feishu.cn/document/server-docs/application-v6/admin/obtain-an-app-admin’s-management-permissions
-->
# 获取应用管理员的管理范围
该接口用于获取应用管理员的管理范围，即该应用管理员能够管理哪些部门。  

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
      <md-td>https://open.feishu.cn/open-apis/contact/v1/user/admin_scope/get</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
    </md-tr>

   <md-tr>
     <md-th>支持的应用类型</md-th>
      <md-td>
	  <md-app-support types="custom"></md-app-support>
      </md-td>
   </md-tr>


    <md-tr>
      <md-th>
 权限要求
 <md-tooltip type="info">调用该 API 所需的权限。开启其中任意一项权限即可调用</md-tooltip>
</md-th>
      <md-td>
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
|-|-|-|-|-|
|employee_id、open_id|string|是|支持通过 open_id 或者 employee_id 查询，不支持混合两种 ID 进行查询，其中 employee_id 同通讯录 v3 版本中的 user_id|

## 响应
### 响应体
|参数|说明|
|-|-|
|code|返回码，非 0 表示失败|
|msg|返回码的描述|
|data|返回业务数据|
|&emsp;∟is_all|是否管理所有部门|
|&emsp;∟department_list|管理的部门列表，当 is_all 为 true 时，不返回该字段|

### 响应示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "is_all":false,
        "departments_list":[
            "od-a140b4eeb892b90a0ab3e616fc2054d6",
            "od-a140b4eeb892b90a0ab3e616fc205477"
        ]
    }
}
```
