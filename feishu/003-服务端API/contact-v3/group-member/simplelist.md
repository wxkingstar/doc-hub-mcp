<!--
title: 查询用户组成员列表
id: 7008085931593072643
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group-member/simplelist
updatedAt: 1720167021000
source: https://open.feishu.cn/document/server-docs/contact-v3/group-member/simplelist
-->
# 查询用户组成员列表

调用该接口查询指定用户组内的成员列表，列表内主要包括成员 ID 信息。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=contact&version=v3&resource=group.member&method=simplelist)

:::html
<md-alert type="error">

</md-alert>
:::

:::html
<md-alert type="warn">

</md-alert>
:::

:::html
<md-alert type="tip">

</md-alert>
:::

## 注意事项

- 本接口支持查询普通用户组和动态用户组的成员信息。
- 本接口支持查询用户组内的用户类型成员或部门类型成员。一次请求中只能查询用户类型成员或者部门类型成员，不支持查询所有类型的用户组成员。
- 如果应用的通讯录权限范围是 **全部员工**，则可以查询当前租户下任何用户组成员列表。如果应用的通讯录权限范围不是 **全部员工**，则仅可查询通讯录权限范围内的用户组成员列表。了解通讯录权限范围，可参见[权限范围资源介绍](/ssl:ttdoc/ukTMukTMukTM/uETNz4SM1MjLxUzM/v3/guides/scope_authority)。

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
      <md-td>https://open.feishu.cn/open-apis/contact/v3/group/:group_id/member/simplelist</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>GET</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[1000 次/分钟、50 次/秒](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            <md-perm name="contact:group:readonly" desc="获取用户组信息" support_app_types="custom,isv" tags="">获取用户组信息</md-perm>
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

**值格式**："Bearer `access_token`"

**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"

[了解更多：如何选择与获取 access token](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)

</md-td>
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
	<md-text type="field-name" >group_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户组 ID。

用户组 ID 可在创建用户组时从返回值中获取，你也可以调用[查询用户组列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group/simplelist)接口，获取用户组的 ID。

**示例值**："g128187"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::



### 查询参数
:::html
<md-dt-table>
  <md-dt-thead>
      <md-dt-tr>
      <md-dt-th style="width: 35%;">名称</md-dt-th>
      <md-dt-th style="width: 13%;">类型</md-dt-th>
      <md-dt-th style="width: 15%;" filters="是,否" >必填</md-dt-th>
      <md-dt-th style="width: 37%;" >描述</md-dt-th>
      </md-dt-tr>
  </md-dt-thead>
  <md-dt-tbody>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >page_size</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	分页大小，用于限制一次请求返回的最大条目数。

**示例值**：50

**默认值**：`50`

**数据校验规则**：

- 最大值：`100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >page_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果

**示例值**：AQD9/Rn9eij9Pm39ED40/dk53s4Ebp882DYfFaPFbz00L4CMZJrqGdzNyc8BcZtDbwVUvRmQTvyMYicnGWrde9X56TgdBuS+JKiSIkdexPw=
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >member_id_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用户组成员 ID 类型。

- 当 `member_type` 取值为 `user`时，该参数表示用户 ID 类型，包括 open_id、union_id、user_id。
- 当 `member_type` 取值为 `department`时，该参数表示部门 ID 类型，包括 department_id、open_department_id。

**示例值**：open_id

**可选值有**：
<md-enum>
<md-enum-item key="open_id" >当 `member_type` 取值为 `user`时，表示用户的 open_id。
当 `member_type` 取值为 `department`时，表示部门的 open_department_id。</md-enum-item>
<md-enum-item key="union_id" >当 `member_type` 取值为 `user`时，表示用户的 union_id。</md-enum-item>
<md-enum-item key="user_id" >当 `member_type` 取值为 `user`时，表示用户的 user_id。</md-enum-item>
<md-enum-item key="department_id" >当 `member_type` 取值为 `department`时，表示部门的 department_id。</md-enum-item>
</md-enum>

**默认值**：`open_id`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >member_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用户组成员类型。

**示例值**：user

**可选值有**：
<md-enum>
<md-enum-item key="user" >用户，表示仅查询用户组内的用户类型成员。</md-enum-item>
<md-enum-item key="department" >部门，表示仅查询用户组内的部门类型成员。</md-enum-item>
</md-enum>

**默认值**：`user`
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
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
	<md-text type="field-name" >memberlist</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >memberlist\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	成员列表。
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
	成员 ID。ID 类型与请求时设置的 member_id_type 取值保持一致。
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
	用户组成员的类型。

**可能值有：**

- user：用户类型
- department：部门类型
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >member_id_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	成员 ID 类型。该参数仅在请求参数中有效，作为响应体参数时不会返回。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >page_token</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	分页标记，当 has_more 为 true 时，会同时返回新的 page_token，否则不返回 page_token
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >has_more</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	是否还有更多项
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
        "memberlist": [
            {
                "member_id": "u287xj12",
                "member_type": "user",
                "member_id_type": "user_id"
            }
        ],
        "page_token": "TDRRV9/Rn9eij9Pm39ED40/dk53s4Ebp882DYfFaPFbz00L4CMZJrqGdzNyc8BcZtDbwVUvRmQTvyMYicnGWrde9X56TgdBuS+JKiJDGexPw=",
        "has_more": true
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
  <md-td>500</md-td>
  <md-td>40003</md-td>
  <md-td>internal error</md-td>
  <md-td>内部错误，请获取请求的 X-Request-Id，并向[技术支持](https://applink.feishu.cn/TLJpeNdW)进行反馈。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>40011</md-td>
  <md-td>page size is invalid</md-td>
  <md-td>page_size 无效。传入的 page_size 值不能大于 100。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>40012</md-td>
  <md-td>page token is invalid error</md-td>
  <md-td>page_token 无效。你需要参考接口文档的 page_token 参数描述，设置正确的分页参数。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>42002</md-td>
  <md-td>invalid group_id</md-td>
  <md-td>用户组 ID 无效。你可以调用[查询用户组列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group/simplelist)接口，获取准确的用户组 ID。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41074</md-td>
  <md-td>invalid member_type</md-td>
  <md-td>无效的成员类型。你需要按照接口文档内 member_type 的参数描述设置正确的值。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41071</md-td>
  <md-td>invalid member_id_type</md-td>
  <md-td>无效的成员 ID 类型。你需要按照接口文档内 member_id_type 的参数描述设置正确的值。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41072</md-td>
  <md-td>member_type not match member_id_type</md-td>
  <md-td>member_type 与 member_id_type 不匹配。你需要调整参数值，使其二者匹配，例如，member_type 取值为 user 时，member_id_type 仅支持设置为 open_id、union_id 或 user_id。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>42009</md-td>
  <md-td>no user group authority error</md-td>
  <md-td>缺少用户组权限。应用的通讯录权限范围需包含当前操作的用户组。了解应用的通讯录权限范围，可参见[权限范围资源介绍](/ssl:ttdoc/ukTMukTMukTM/uETNz4SM1MjLxUzM/v3/guides/scope_authority)。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


