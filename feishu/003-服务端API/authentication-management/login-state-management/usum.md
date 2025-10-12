<!--
title: 资源介绍
id: 7096084771490562049
fullPath: /uAjLw4CM/ukTMukTMukTM/passport-v1/session/usum
updatedAt: 1672389313000
source: https://open.feishu.cn/document/server-docs/authentication-management/login-state-management/usum
-->
#  资源介绍
##  资源定义
用于标识当前飞书用户的身份、设备及登录状态。

##  字段说明
:::html
<md-table>
  <md-thead>
      <md-tr>
      <md-th style="width: 40%;">名称</md-th>
      <md-th style="width: 20%;">类型</md-th>
      <md-th style="width: 30%;">描述</md-th>
      </md-tr>
  </md-thead>
  <md-tbody>
<md-tr>
        <md-td>
        <md-text type="field-name" >Authorization</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
         <md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>

**值格式**："Bearer `access_token`"

**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"


[了解更多：如何选择与获取 access token](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)
          
        </md-td>
</md-tr>

<md-tr>
        <md-td>
        <md-text type="field-name" >Content-Type</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        

**固定值**："application/json; charset=utf-8"

        </md-td>
</md-tr>  

<md-tr>
        <md-td>
        <md-text type="field-name" >user_id_type</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
                用户 ID 类型

**示例值**："open_id"

**可选值有**：
- `open_id`：用户的 open id
- `union_id`：用户的 union id
- `user_id`：用户的 user id

**默认值**：`open_id`

**当值为 `user_id`，字段权限要求**：
<md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
        </md-td>
</md-tr>  
    
<md-tr>
        <md-td>
        <md-text type="field-name" >user_ids</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        用户ID​
          
​**示例值**：["47f621ff"]
          
          
**数据校验规则**：
          
最大长度：`100`

        </md-td>
</md-tr>  

<md-tr>
        <md-td>
        <md-text type="field-name" >code</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >int</md-text>
        </md-td>

        <md-td>
       错误码，非 0 表示失败​
        </md-td>
</md-tr>  
    
<md-tr>
        <md-td>
        <md-text type="field-name" >msg</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >string</md-text>
        </md-td>

        <md-td>
        错误描述​
        </md-td>
</md-tr>  
    
<md-tr>
        <md-td>
        <md-text type="field-name" >data</md-text>
        </md-td>
        <md-td>
        <md-text type="field-type" >\-</md-text>
        </md-td>

        <md-td>
         \-`
        </md-td>
</md-tr>  

<md-tr>
	<md-td>
	&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >mask_sessions</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >mask_session\[\]</md-text>
	</md-td>
	<md-td>
	用户登录信息​
	</md-td>
</md-tr>    
    
<md-tr>
	<md-td>
	&emsp;&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >create_time</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	 创建时间​
	</md-td>
</md-tr>    
    
<md-tr>
	<md-td>
	&emsp;&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >terminal_type</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >int</md-text>
	</md-td>
	<md-td>
	客户端类型

**可选值有**：
- `0`：未知
- `1`：个人电脑
- `2`：浏览器
- `3`：安卓手机
- `4`：Apple手机
- `5`：服务端
	</md-td>
</md-tr>    

<md-tr>
	<md-td>
	&emsp;&emsp;<span style="color: #8F959E">∟</span>&nbsp;<md-text type="field-name" >user_id</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	用户ID​
	</md-td>
</md-tr>    


:::  
##  数据示例​
```json
{​
    "code": 0,​
    "data": {​
        "mask_sessions": [​
            {​
                "create_time": "1644980493",​
                "terminal_type": 2,​
                "user_id": "47f183f1f1"​
            },​
            {​
                "create_time": "1644983127",​
                "terminal_type": 2,​
                "user_id": "47f183ff1"​
            },​
            {​
                "create_time": "1644983127",​
                "terminal_type": 2,​
                "user_id": "47f183ff2"​
            }​
        ]​
    },​
    "msg": ""​
}
```
  
  
  
  
  
  
    
    
    
    
    
    