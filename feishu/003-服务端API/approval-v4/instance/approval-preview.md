<!--
title: 预览审批流程
id: 6995509710095695876
fullPath: /ukTMukTMukTM/ukTM5UjL5ETO14SOxkTN/approval-preview
updatedAt: 1745206942000
source: https://open.feishu.cn/document/server-docs/approval-v4/instance/approval-preview
-->
# 预览审批流程

在[创建审批实例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/create)之前，可调用本接口预览审批流程数据。在[创建审批实例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/create)之后，可调用本接口预览某一审批节点的后续流程数据。

## 使用说明

- 创建审批实例之前预览整个审批的流程数据，调用方式与[创建审批实例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/create)接口类似，需要传入审批定义 Code（approval_code）、审批提交人信息（user_id、department_id）、审批表单数据（form）参数，进行预览。
- 创建审批实例之后预览审批实例内某一审批任务之后的流程数据，需要传入审批实例 Code（instance_code）、审批任务 ID（task_id）、审批任务的审批人 ID（user_id），进行预览。



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
      <md-td>https://open.feishu.cn/open-apis/approval/v4/instances/preview</md-td>
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
</md-th>
      <md-td>
<md-perm name="approval:approval:readonly" desc="访问审批应用" support_app_types="custom,isv" tags="">访问审批应用</md-perm>
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
 
以应用身份调用 API，可读写的数据范围由应用自身的 [数据权限范围](/ssl:ttdoc/home/introduction-to-scope-and-authorization/configure-app-data-permissions) 决定。参考 [自建应用获取 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal) 或 [商店应用获取 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token)。
          
**值格式**："Bearer `access_token`"

**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"

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

### 查询参数
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
	<md-text type="field-name" >user_id_type</md-text>
	</md-td>
	<md-td>
	<md-text type="field-type" >string</md-text>
	</md-td>
	<md-td>
	否
	</md-td>
	<md-td>
	用户 ID 类型

**示例值**：open_id

**可选值有**：
<md-enum>
<md-enum-item key="open_id" >标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。[了解更多：如何获取 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)</md-enum-item>
<md-enum-item key="union_id" >标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。[了解更多：如何获取 Union ID？](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)</md-enum-item>
<md-enum-item key="user_id" >标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。[了解更多：如何获取 User ID？](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)</md-enum-item>
</md-enum>

**默认值**：`open_id`

**当值为 `user_id`，字段权限要求**：
<md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>

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
			<md-dt-th style="width: 25%;">参数</md-dt-th>
			<md-dt-th style="width: 15%;">类型</md-dt-th>
			<md-dt-th style="width: 15%;">必须</md-dt-th>
			<md-dt-th style="width: 45%;">说明</md-dt-th>
		</md-dt-tr>
	</md-dt-thead>
	<md-dt-tbody>
		<md-dt-tr>
			<md-dt-td>approval_code</md-dt-td>
			<md-dt-td>string</md-dt-td>
			<md-dt-td>否</md-dt-td>
			<md-dt-td>审批定义 Code。获取方式：

- 调用[创建审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/create)接口后，从响应参数 approval_code 获取。
- 登录审批管理后台，在指定审批定义的 URL 中获取，具体操作参见[什么是 Approval Code](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/overview-of-approval-resources#8151e0ae)。

**示例值**："7C468A54-8745-2245-9675-08B7C63E7A85"</md-dt-td>
		</md-dt-tr>
		<md-dt-tr>
			<md-dt-td>user_id</md-dt-td>
			<md-dt-td>string</md-dt-td>
			<md-dt-td>是</md-dt-td>
			<md-dt-td>用户 ID，ID 类型与查询参数 user_id_type 的取值一致。
			
- 在创建审批实例之前预览审批流程，此处需要传入审批发起人的用户 ID。
- 在创建审批实例之后预览某审批任务的后续流程，此处需要传入审批任务审批人 ID。
			</md-dt-td>
		</md-dt-tr>
		<md-dt-tr>
			<md-dt-td>department_id</md-dt-td>
			<md-dt-td>string</md-dt-td>
			<md-dt-td>否</md-dt-td>
			<md-dt-td>审批发起人所属的部门 ID。了解更多参见[部门 ID](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview#9c02ed7a)。
			
**注意**：如果用户只属于一个部门，该参数选填。如果用户属于多个部门，则必须填其中一个部门 ID。</md-dt-td>
		</md-dt-tr>
		<md-dt-tr>
			<md-dt-td>form</md-dt-td>
			<md-dt-td>string</md-dt-td>
			<md-dt-td>否</md-dt-td>
			<md-dt-td>审批表单的控件 JSON 值。
			
**注意**：在创建审批实例之前预览审批流程，该参数必填。

**示例值**：[{\"id\":\"widget16256287451710001\", \"type\": \"number\", \"value\":\"43\"}]</md-dt-td>
		</md-dt-tr>
		<md-dt-tr>
			<md-dt-td>instance_code</md-dt-td>
			<md-dt-td>string</md-dt-td>
			<md-dt-td>否</md-dt-td>
			<md-dt-td>审批实例 Code。获取方式：

- [创建审批实例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/create) 后，从返回结果中获取审批实例 Code。
- 调用[批量获取审批实例 ID](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/list)，获取指定审批定义内的审批实例 Code。
- 调用[查询实例列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/query)，设置过滤条件查询指定的审批实例 Code。

**示例值**："81D31358-93AF-92D6-7425-01A5D67C4E71"</md-dt-td>
		</md-dt-tr>
		<md-dt-tr>
			<md-dt-td>task_id</md-dt-td>
			<md-dt-td>string</md-dt-td>
			<md-dt-td>否</md-dt-td>
			<md-dt-td>审批任务 ID。获取方式：

- 调用[获取单个审批实例详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/get)接口，在响应结果的 task_list 参数内获取 id。
- 调用[查询任务列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/task/search)接口，在响应结果中获取 task_id。
			
**注意**：在创建审批实例之后预览某审批任务的后续流程，该参数必填，并且 user_id 需要传入任务的审批人 ID。</md-dt-td>
		</md-dt-tr>
	</md-dt-tbody>
</md-dt-table>
:::


### 请求体示例

case1：创建审批实例之前预览审批流程

```json
{
    "approval_code":"C2CAAA90-70D9-3214-906B-B6FFF947F00D",
    "user_id":"f7cb567e",
    "department_id":"",
    "form":"[{\"id\":\"widget16256287451710001\", \"type\": \"number\", \"value\":\"43\"}]"

}
```

case2：创建审批实例之后预览某任务后的审批流程

```json
{
    "instance_code":"12345CA6-97AC-32BB-8231-47C33FFFCCFD",
    "user_id":"f7cb567e",
    "task_id": "6982332863116876308"
}
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
    <md-dt-tr>
      <md-dt-td>code</md-dt-td>
      <md-dt-td>int</md-dt-td>
      <md-dt-td>错误码，非0表示失败</md-dt-td>
    </md-dt-tr>
    <md-dt-tr>
      <md-dt-td>msg</md-dt-td>
      <md-dt-td>string</md-dt-td>
      <md-dt-td>返回码的描述</md-dt-td>
    </md-dt-tr>
    <md-dt-tr>
      <md-dt-td>data</md-dt-td>
      <md-dt-td>json</md-dt-td>
      <md-dt-td>返回业务信息</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="1">
      <md-dt-td>preview_nodes</md-dt-td>
      <md-dt-td>list</md-dt-td>
      <md-dt-td>预览节点信息</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>user_id_list</md-dt-td>
      <md-dt-td>list</md-dt-td>
      <md-dt-td>审批人 ID 列表</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>end_cc_id_list</md-dt-td>
      <md-dt-td>list</md-dt-td>
      <md-dt-td>审批结束抄送人 ID 列表</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>node_id</md-dt-td>
      <md-dt-td>string</md-dt-td>
      <md-dt-td>审批节点 ID</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>node_name</md-dt-td>
      <md-dt-td>string</md-dt-td>
      <md-dt-td>审批节点名称</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>node_type</md-dt-td>
      <md-dt-td>string</md-dt-td>
      <md-dt-td>审批节点类型。可能值有：
	  
- AND：会签
- OR：或签
- AUTO_PASS：自动通过
- AUTO_REJECT：自动拒绝
- SEQUENTIAL：按顺序
	</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>custom_node_id</md-dt-td>
      <md-dt-td>string</md-dt-td>
      <md-dt-td>用户自定义节点 ID</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>comments</md-dt-td>
      <md-dt-td>list</md-dt-td>
      <md-dt-td>节点的说明信息</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>is_empty_logic</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>审批人是否为空，若为空，则 user_id_list 为兜底审批人 ID 列表。</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>is_approver_type_free</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>是否发起人自选节点</md-dt-td>
    </md-dt-tr>
    <md-dt-tr level="2">
      <md-dt-td>has_cc_type_free</md-dt-td>
      <md-dt-td>boolean</md-dt-td>
      <md-dt-td>节点是否支持抄送人自选</md-dt-td>
    </md-dt-tr>
  </md-dt-tbody>
</md-dt-table>
:::

### 响应体示例

```json
{ 
    "code":0, 
    "msg":"success", 
    "data": { 
        "preview_nodes":[
            {
                "user_id_list":["ffffffff"],
                "end_cc_id_list":[],
                "node_id":"b078ffd28db767c502ac367053f6e0ac",
                "node_name":"发起",
                "node_type":"",
                "comments":[],
                "custom_node_id":""
            },
            {
                "user_id_list":["ffffffff"],
                "end_cc_id_list":[],
                "node_id":"e6ce10282a3cc3bf4a408feffd678dcf",
                "node_name":"审批",
                "node_type":"AND",
                "comments":[],
                "custom_node_id":"",
                "is_empty_logic":false,
                "is_approver_type_free":false,
                "has_cc_type_free":false
            },
            {
                "user_id_list":[],
                "end_cc_id_list":[],
                "node_id":"b1a326c06d88bf042f73d70f50197905",
                "node_name":"结束",
                "node_type":"",
                "comments":[],
                "custom_node_id":""
             }
         ]
    }        
}  
```

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。