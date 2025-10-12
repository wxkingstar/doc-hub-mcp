<!--
title: 查询用户所属用户组
id: 7106501358249885699
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group/member_belong
updatedAt: 1726297244000
source: https://open.feishu.cn/document/server-docs/contact-v3/group/member_belong
-->
# 查询用户所属用户组

调用该接口查询指定用户所属的用户组列表。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=contact&version=v3&resource=group&method=member_belong)

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

- 如果应用的通讯录权限范围设置为 **全部员工**，则通过本接口可查询到用户所属的全部用户组列表，否则，仅会查询到应用通讯录权限范围内该用户所属的用户组。了解应用通讯录权限范围，可参见[权限范围资源介绍](/ssl:ttdoc/ukTMukTMukTM/uETNz4SM1MjLxUzM/v3/guides/scope_authority)。

- 支持查询到普通用户组和动态用户组的信息。

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
      <md-td>https://open.feishu.cn/open-apis/contact/v3/group/member_belong</md-td>
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
	<md-text type="field-name" >member_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	成员 ID。ID 类型与 member_id_type 取值保持一致。

**示例值**：u287xj12
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
	成员 ID 类型。

**示例值**：open_id

**可选值有**：
<md-enum>
<md-enum-item key="open_id" >标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。[了解更多：如何获取 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)。</md-enum-item>
<md-enum-item key="union_id" >标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。[了解更多：如何获取 Union ID？](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)。</md-enum-item>
<md-enum-item key="user_id" >标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。[了解更多：如何获取 User ID？](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)。</md-enum-item>
</md-enum>

**默认值**：`open_id`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="0">
	<md-dt-td>
	<md-text type="field-name" >group_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	用户组类型。

**示例值**：1

**可选值有**：
<md-enum>
<md-enum-item key="1" >普通用户组</md-enum-item>
<md-enum-item key="2" >动态用户组</md-enum-item>
</md-enum>

**数据校验规则**：

- 取值范围：`1` ～ `2`
	</md-dt-td>
</md-dt-tr>


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
	分页大小，用于限制一次请求所返回的数据条目数。

**示例值**：500

**默认值**：`500`

**数据校验规则**：

- 取值范围：`1` ～ `1000`
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
	<md-text type="field-name" >group_list</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	用户组 ID 列表。

**说明**：你可以调用[查询指定用户组](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group/get)接口，通过用户组 ID 获取用户组的详细信息。
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
        "group_list": [
            "og-1455998e138698e1386"
        ],
        "page_token": "AQD9/Rn9eij9Pm39ED40/dk53s4Ebp882DYfFaPFbz00L4CMZJrqGdzNyc8BcZtDbwVUvRmQTvyMYicnGWrde9X56TgdBuS+JKiSIkdexPw=",
        "has_more": false
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
  <md-td>40001</md-td>
  <md-td>param error</md-td>
  <md-td>参数错误。请检查输入参数是否设置有误，你可以参考接口文档内的参数描述，修复输入参数值。</md-td>
</md-tr>


<md-tr>
  <md-td>500</md-td>
  <md-td>40003</md-td>
  <md-td>internal error</md-td>
  <md-td>内部错误，你可以获取请求的 X-Request-Id，并联系[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>40011</md-td>
  <md-td>page size is invalid</md-td>
  <md-td>page_size 无效。page_size 取值范围为 1 ~ 1000，请调整参数值后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>40012</md-td>
  <md-td>page token is invalid error</md-td>
  <md-td>page_token 无效。你需要检查传入的 page_token 是否为上次请求返回的 page_token 值。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41071</md-td>
  <md-td>invalid member_id_type</md-td>
  <md-td>成员 ID 类型无效。member_id_type 的枚举值仅支持 open_id、union_id、user_id。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41073</md-td>
  <md-td>invalid member_id</md-td>
  <md-td>成员 ID 无效。你可以按以下步骤进行检查，并修改为正确的成员 ID 值。
1. 检查设置的 member_id_type 类型是否与传入的 member_id 类型一致。
2. 根据 member_id_type 参数描述，重新获取指定类型的成员 ID 值，并重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41074</md-td>
  <md-td>invalid member_type</md-td>
  <md-td>无效的成员类型。group_type 的枚举值仅支持 `1` 或 `2`。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>41050</md-td>
  <md-td>no user authority error</md-td>
  <md-td>无用户权限。需将当前操作的用户添加到应用或用户的权限范围内。根据调用 API 的身份不同，解决方案也不同，具体说明如下：

- **使用 tenant_access_token 调用 API**

    当前操作的用户需要添加在应用的通讯录权限范围内。通讯录权限范围定义了应用在调用通讯录 API 时可获取的部门、用户的数据范围。应用无法访问不在通讯录权限范围内的数据。

    由开发者登录[开发者后台](https://open.feishu.cn/app)，在应用详情页的 **开发配置** > **权限管理** > **数据权限** 页面内，配置 **通讯录权限范围**，添加指定用户。

    ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a1b281bca2708c7b4d8cdb75b74db80b_d3B7kadw3c.png?height=278&maxWidth=550&width=1383)

    已发布的应用企业管理员可在[管理后台](http://feishu.cn/admin) > **工作台** > **应用管理** 页面，修改应用的通讯录权限范围。

    ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/30410ff315a6728260c9964a7f035d4a_vtiypMAKJu.png?height=278&maxWidth=550&width=1383)

- **使用 user_access_token 调用 API**

    当你使用用户身份调用通讯录 API 时，可操作的权限范围不受应用的通讯录权限范围影响，而是受当前用户的组织架构可见范围影响，该范围限制了用户在企业内可见的组织架构数据范围。

    由企业管理员在[管理后台](http://feishu.cn/admin) > **安全** > **成员权限** 页面中，点击 **组织架构可见范围** 进行管理。

    ![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6699f09b56c17798cb192d06795dc980_hcP4nRZadC.png?height=278&maxWidth=550&width=1383)


完整介绍参见[权限范围资源介绍](/ssl:ttdoc/ukTMukTMukTM/uETNz4SM1MjLxUzM/v3/guides/scope_authority)。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


