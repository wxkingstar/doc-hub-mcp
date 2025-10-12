<!--
title: 获取应用在企业内的可用范围
id: 6907569523177160705
fullPath: /ukTMukTMukTM/uIjM3UjLyIzN14iMycTN
updatedAt: 1657766576000
source: https://open.feishu.cn/document/server-docs/application-v6/admin/obtain-the-app-availability-in-an-organization
-->
# 获取应用在企业内的可用范围

该接口用于查询应用在该企业内可以被使用的范围，只能被企业自建应用调用。

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
      <md-td>https://open.feishu.cn/open-apis/application/v2/app/visibility</md-td>
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
<md-perm name="admin:app.info:readonly" desc="获取应用信息" support_app_types="custom" tags="">获取应用信息</md-perm>
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
|--|-----|--|----|----|
|app_id|string|是|目标应用的 ID|请求 URL|
|user_page_token|string|否|分页拉取用户列表起始位置标示，不填表示从头开始|
|user_page_size|int|否|本次拉取用户列表最大个数(最大值 1000 ，0 自动最大个数 )|

## 响应
### 响应体

|参数|说明|
|--|--|
|code|返回码，非 0 表示失败|
|msg|返回码的描述|
|data|返回的业务信息|
|&emsp;∟departments|可用部门列表|
|&emsp;&emsp;∟id|自定义 department_id|
|&emsp;∟invisible_departments|禁用部门列表|
|&emsp;&emsp;∟id|自定义 department_id|
|&emsp;∟users|可用用户列表（仅包含单独设置的用户，可用部门、用户组中的用户未展开）|
|&emsp;&emsp;∟user_id|用户的 user_id，只返回给申请了 user_id 权限的企业自建应用|
|&emsp;&emsp;∟open_id|用户的 open_id|
|&emsp;∟invisible_users|禁用用户列表（仅包含单独设置的用户，可用部门、用户组中的用户未展开）|
|&emsp;&emsp;∟user_id|用户的 user_id，只返回给申请了 user_id 权限的企业自建应用|
|&emsp;&emsp;∟open_id|用户的 open_id|
|&emsp;∟groups|可用用户组列表|
|&emsp;&emsp;∟id|用户组 group_id|
|&emsp;∟invisible_groups|禁用用户组列表|
|&emsp;&emsp;∟id|用户组 group_id|
|&emsp;∟is_visible_to_all|是否全员可见，1：是，0：否|
|&emsp;∟has_more_users|是否还有更多可见用户，1：是，0：否|
|&emsp;∟user_page_token|拉取下一页用户列表时使用的 user_page_token |

### 响应示例

```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "departments": [
            {
                "id": "od-aa2c50a04769feefededb7a05b7525a8"
            },
            {
                "id": "od-bdb63e2f2a339191d6fe51a2deb85fc8"
            }
        ],
        "invisible_departments": [
            {
                "id": "od-d3079cfb6ed783b9bdc2e9eac04e85b4"
            },
            {
                "id": "od-e4723cd981b2455351e12df154fc2b72"
            }
        ],
        "users": [
            {
                "open_id": "ou_d317f090b7258ad0372aa53963cda70d",
                "user_id": "79affdge"
            },
            {
                "open_id": "ou_f0855b4d2a754a2116a0f723e95420ac",
                "user_id": "f11e4868"
            }
        ],
        "invisible_users": [
            {
                "open_id": "ou_42ebd86208405e7d4ba6fd36cece410a",
                "user_id": "4ea58f49"
            },
            {
                "open_id": "ou_13c1f5a014eb6d1da8c79ac3e7442829",
                "user_id": "cd8y5dl0"
            }
        ],
        "groups": [
            {
                "id": "96815a9cd9beg8g4"
            },
            {
                "id": "8abfd94b552g2g9c"
            }
        ],
        "invisible_groups": [
            {
                "id": "96815a9cd9beg8g4"
            },
            {
                "id": "8abfd94b552g2g9c"
            }
        ],
        "is_visible_to_all": 0,
        "has_more_users": 0,
        "user_page_token": "ou_42ebd86208405e7d4ba6fd36cece410a"
    }
}
```

### 错误码
:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: $$$application.v6.application.method.get.error-mapping.table.http-status-code-column.width$$$;">HTTP状态码</md-th>
            <md-th style="width: $$$application.v6.application.method.get.error-mapping.table.code-column.width$$$;">错误码</md-th>
            <md-th style="width: $$$application.v6.application.method.get.error-mapping.table.desc-column.width$$$;">描述</md-th>
            <md-th style="width: $$$application.v6.application.method.get.error-mapping.table.suggestions-column.width$$$;">排查建议</md-th>
        </md-tr>
    </md-thead>
  <md-tbody>

<md-tr>
  <md-td>200</md-td>
  <md-td>50003</md-td>
  <md-td>invalid app_id</md-td>
  <md-td>请检查 app_id 是否正确，以及应用是否被安装到当前企业</md-td>
</md-tr>

  </md-tbody>
</md-table>
:::
