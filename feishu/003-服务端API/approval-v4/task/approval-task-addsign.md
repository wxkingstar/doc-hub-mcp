<!--
title: 审批任务加签
id: 6968270299335606273
fullPath: /ukTMukTMukTM/ukTM5UjL5ETO14SOxkTN/approval-task-addsign
updatedAt: 1745207195000
source: https://open.feishu.cn/document/server-docs/approval-v4/task/approval-task-addsign
-->
# 审批任务加签

对于单个审批任务进行加签操作。

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
      <md-td>https://open.feishu.cn/open-apis/approval/v4/instances/add_sign</md-td>
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

### 请求体

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:25%">参数</md-th>
<md-th style="width:15%">类型</md-th>
<md-th style="width:15%">必须</md-th>
<md-th style="width:45%">说明</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>approval_code</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>审批定义 Code 获取方式：

- 调用[创建审批定义](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/create)接口后，从响应参数 approval_code 获取。
- 登录审批管理后台，在指定审批定义的 URL 中获取，具体操作参见[什么是 Approval Code](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/overview-of-approval-resources#8151e0ae)。</md-td>
</md-tr>
  
<md-tr>
<md-td>instance_code</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>审批实例 Code 获取方式：

- 调用[创建审批实例](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/create)接口后，从响应参数 instance_code 获取。
- 调用[批量获取审批实例 ID](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/list)接口，获取所需的审批实例 Code。
- 调用[查询实例列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/query)，设置过滤条件查询指定的审批实例 Code。</md-td>
</md-tr>
  
<md-tr>
<md-td>user_id</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>操作用户的 user_id，获取方式参考[如何获取 User ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)。</md-td>
</md-tr>
  
<md-tr>
<md-td>task_id</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>审批任务 ID，调用[获取单个审批实例详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/get)，从返回结果的 task_list 中获取所需的 id。</md-td>
</md-tr>
  
<md-tr>
<md-td>comment</md-td>
<md-td>string</md-td>
<md-td>否</md-td>
<md-td>审核意见</md-td>
</md-tr>
  
<md-tr>
<md-td>add_sign_user_ids</md-td>
<md-td>List\<stirng\></md-td>
<md-td>是</md-td>
<md-td>被加签人的 user_id，可以指定多个。获取方式参考[如何获取 User ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)。</md-td>
</md-tr>
  
<md-tr>
<md-td>add_sign_type</md-td>
<md-td>int</md-td>
<md-td>是</md-td>
<md-td>加签方式，可选值有：
  
- 1：前加签，在当前操作用户之前审批。
- 2：后加签，加签后自动通过当前审批，并流转至被加签人。
- 3：并加签，和当前操作用户共同审批。</md-td>
</md-tr>
  
<md-tr>
<md-td>approval_method</md-td>
<md-td>int</md-td>
<md-td>否</md-td>
<md-td>仅在前加签、后加签时，需要填写该参数。可选值有：
  
- 1： 或签，一名审批人同意或拒绝即可。
- 2： 会签，需要所有审批人同意或拒绝。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

### 请求体示例

```json
{
    "approval_code": "3B68E280-CF10-4198-B4CD-2E3BB97981D8",
    "instance_code": "289330DE-FBF1-4A47-91F9-9EFCCF11BCAE",
    "user_id": "b16g66e3",
    "task_id": "6955096766400167956",
    "comment": "addSignComment",
    "add_sign_user_ids": ["d19b913b","3313g62b"],
    "add_sign_type": 1,
    "approval_method": 1
}
```

## 响应

### 响应体
|参数|类型|说明|
|-|-|-|
|code|int|错误码，非 0 表示失败|
|msg|String|返回码的描述|
  
### 响应体示例

```json
{
    "code": 0,
    "msg": "success"
}
```

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。