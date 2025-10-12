<!--
title: 删除知识空间成员
id: 7041549010980651010
fullPath: /ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space-member/delete
updatedAt: 1749710136000
source: https://open.feishu.cn/document/server-docs/docs/wiki-v2/space-member/delete
-->
# 删除知识空间成员

此接口用于删除知识空间成员或管理员。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=wiki&version=v2&resource=space.member&method=delete)

:::html
<md-alert type="error">

</md-alert>
:::

:::html
<md-alert type="warn">
使用tenant access token操作时，无法使用部门ID(opendepartmentid)删除知识空间成员。
</md-alert>
:::

:::html
<md-alert type="tip">
知识空间具有[类型](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-overview)和[可见性](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-overview)的概念。不同的类型或可见性可以对本操作做出限制：
- 可见性限制：公开知识空间（visibility为public）对租户所有用户可见，因此不支持再删除成员，但可以删除管理员。
- 类型限制：个人知识空间 （type为person）为个人管理的知识空间，不支持删除管理员。但可以删除成员。


知识空间权限要求，当前用户或应用：
- 为知识空间管理员
</md-alert>
:::



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
      <md-td>https://open.feishu.cn/open-apis/wiki/v2/spaces/:space_id/members/:member_id</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>DELETE</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[100 次/分钟](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            <md-perm name="wiki:member:update" desc="更新知识空间成员" support_app_types="custom,isv" tags="">更新知识空间成员</md-perm>
            <md-perm name="wiki:wiki" desc="查看、编辑和管理知识库" support_app_types="custom,isv" tags="">查看、编辑和管理知识库</md-perm>
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
      <md-th style="width: 35%;">名称</md-th>
      <md-th style="width: 13%;">类型</md-th>
       <md-th style="width: 15%;" filters="是,否" >必填</md-th>
      <md-th  style="width: 37%;">描述</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>Authorization</md-td>
      <md-td>string</md-td>
      <md-td>是</md-td>
      	<md-td>
<md-tag mode="inline" type="token-tenant">tenant_access_token</md-tag>
或
<md-tag mode="inline" type="token-user">user_access_token</md-tag>

**值格式**："Bearer `access_token`"

**示例值**："Bearer u-7f1bcd13fc57d46bac21793a18e560"

[了解更多：如何选择与获取 access token](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)

</md-td>
</md-tr>
<md-tr>
<md-td>Content-Type</md-td>
<md-td>string</md-td>
<md-td>是</md-td>
<md-td>**固定值**："application/json; charset=utf-8"</md-td>
</md-tr>
</md-tbody>
</md-table>
:::



### 路径参数
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 52%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >space_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	知识空间id

**示例值**："7008061636015554580"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >member_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	成员id，值的类型由请求体的 member_type 参数决定

**示例值**："g64fb7g7"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::



### 请求体

:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 15%;" filters="是,否" >必填</md-dt-th>
      <md-dt-th style="width: 37%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >member_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	“openchat” - 群id 

“userid” - 用户id

“email” - 邮箱

“opendepartmentid” - 部门id

“openid” - 应用openid

“unionid” - [unionid](/:ssltoken/home/user-identity-introduction/union-id
)

**示例值**："userid"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >member_role</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	角色:

“admin” - 管理员

“member” - 成员

**示例值**："admin"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	知识库协作者类型（暂不支持）

**示例值**："user"

**可选值有**：
<md-enum>
<md-enum-item key="user" >用户</md-enum-item>
<md-enum-item key="chat" >群组</md-enum-item>
<md-enum-item key="department" >组织架构</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "member_type": "userid",
    "member_role": "admin",
    "type": "user"
}
</md-code-json>
:::



## 响应





### 响应体
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 52%;">描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>

<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	错误码，非 0 表示失败
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >msg</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	错误描述
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >data</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >\-</md-text>
	</md-dt-td>
	<md-dt-td>
	\-
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >member</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >member</md-text>
	</md-dt-td>
	<md-dt-td>
	成员信息
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >member_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	“openchat” - 群id 

“userid” - 用户id

“email” - 邮箱

“opendepartmentid” - 部门id

“openid” - 应用openid

“unionid” - [unionid](/:ssltoken/home/user-identity-introduction/union-id
)
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >member_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户id，值的类型由上面的 member_type 参数决定
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >member_role</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	角色:

“admin” - 管理员

“member” - 成员
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	知识库协作者类型（暂不支持）

**可选值有**：
<md-enum>
<md-enum-item key="user" >用户</md-enum-item>
<md-enum-item key="chat" >群组</md-enum-item>
<md-enum-item key="department" >组织架构</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


  </md-dt-tbody>
</md-dt-table>
:::



### 响应体示例
:::html
<md-code-json>
{
    "code": 0,
    "msg": "success",
    "data": {
        "member": {
            "member_type": "userid",
            "member_id": "1565676577122621",
            "member_role": "admin",
            "type": "user"
        }
    }
}
</md-code-json>
:::



### 错误码
:::html
<md-table>
    <md-thead>
        <md-tr>
            <md-th style="width: 15%;">HTTP状态码</md-th>
            <md-th style="width: 15%;">错误码</md-th>
            <md-th style="width: 30%;">描述</md-th>
            <md-th style="width: 30%;">排查建议</md-th>
        </md-tr>
    </md-thead>
  <md-tbody>

<md-tr>
  <md-td>400</md-td>
  <md-td>131001</md-td>
  <md-td>rpc fail</md-td>
  <md-td>服务报错，请稍后重试，或者拿响应体的header头里的x-tt-logid咨询[oncall](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952)定位。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>131002</md-td>
  <md-td>param err</md-td>
  <md-td>通常为传参有误，例如数据类型不匹配。请查看**具体接口报错信息**，报错不明确时请咨询[oncall](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>131004</md-td>
  <md-td>invalid user</md-td>
  <md-td>非法用户。请咨询[oncall](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>131005</md-td>
  <md-td>not found</md-td>
  <md-td>未找到相关数据，例如id不存在。相关报错信息参考：

- member not found：用户不是知识空间成员（管理员），无法删除。
- identity not found: userid不存在，无法添加/删除成员。
- space not found：知识空间不存在
- node not found：节点不存在
- document not found：文档不存在


报错不明确时请咨询[oncall](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>131006</md-td>
  <md-td>permission denied</md-td>
  <md-td>权限拒绝，相关报错信息参考：
- wiki space permission denied：知识库权限鉴权不通过，需要成为知识空间管理员（成员）。
- node permission denied：文档节点权限鉴权不通过，读操作需要具备节点阅读权限，写操作（创建、移动等）则需要具备节点容器编辑权限。
- no source parent node permission：需要具备原父节点的容器编辑权限。
- no destination parent node permission：需要具备目标父节点的容器编辑权限，若移动到知识空间下，则需要成为知识空间管理员（成员）。

**注意**：应用访问或操作文档时，除了申请 API 权限，还需授权具体文档资源的阅读、编辑或管理权限。

请参考以下步骤操作： 

1. **当遇到资源权限不足的情况**：参阅[如何给应用授权访问知识库文档资源](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/wiki-qa#a40ad4ca)。
2. **也可直接将应用添加为知识库管理员（成员）**：参阅[如何将应用添加为知识库管理员（成员）](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/wiki-qa#b5da330b)。
3. **若无法解决或报错信息不明确时**：请咨询[技术支持](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>131007</md-td>
  <md-td>internal err</md-td>
  <md-td>服务内部错误，请勿重试，拿返回值的header头里的x-tt-logid咨询[oncall](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952)定位。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>131101</md-td>
  <md-td>invalid operation</md-td>
  <md-td>无效知识空间操作。例如公开空间禁止添加成员。

请参考具体接口报错信息和文档描述。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::




