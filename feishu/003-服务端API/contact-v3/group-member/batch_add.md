<!--
title: 批量添加用户组成员
id: 7106501358249852931
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group-member/batch_add
updatedAt: 1754568414000
source: https://open.feishu.cn/document/server-docs/contact-v3/group-member/batch_add
-->
# 批量添加用户组成员

调用该接口向指定的普通用户组内添加一个或多个成员。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=contact&version=v3&resource=group.member&method=batch_add)

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

- 目前仅支持添加用户类型的成员，暂不支持添加部门类型的成员。

- 如果应用的通讯录权限范围是 **全部员工**，则可以将当前租户内的任何用户添加到任何用户组当中。如果应用的通讯录权限范围不是 **全部员工**，则所要添加的用户以及对应的用户组，均需要在应用的通讯录权限范围内。了解通讯录权限范围，可参见[权限范围资源介绍](/ssl:ttdoc/ukTMukTMukTM/uETNz4SM1MjLxUzM/v3/guides/scope_authority)。

## 使用限制

单租户内单个普通用户组的成员数量上限为 100,000。

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
      <md-td>https://open.feishu.cn/open-apis/contact/v3/group/:group_id/member/batch_add</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
    </md-tr>
    <md-tr>
      <md-th>接口频率限制</md-th>
      <md-td>[100 次/分钟](/ssl:ttdoc/ukTMukTMukTM/uUzN04SN3QjL1cDN)</md-td>
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
            <md-perm name="contact:group" desc="更新用户组信息" support_app_types="custom" tags="">更新用户组信息</md-perm>
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
	<md-text type="field-name" >group_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	用户组 ID。

用户组 ID 可在创建用户组时从返回值中获取，你也可以调用[查询用户组列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group/simplelist)接口，获取用户组的 ID。

**示例值**："test_group"
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
	<md-text type="field-name" >members</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >memberlist\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
	待添加成员信息。

**数据校验规则**：

- 长度范围：`1` ～ `100`
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
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
	添加的用户 ID，ID 类型与 member_id_type 的取值保持一致。不同类型的 ID 获取方式可参见：
- [如何获取用户 open_id](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)
- [如何获取用户 union_id](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)
- [如何获取用户 user_id](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)

**示例值**："u287xj12"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
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
	用户组成员的类型，目前仅支持选择 user，表示用户类型。

**示例值**："user"
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
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
	当 `member_type` 取值为 `user`时，该参数必填，需通过该参数设置用户 ID 类型。包括：

- open_id：标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。
- union_id：标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。
- user_id：标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用中都保持一致。User ID 主要用于在不同的应用间打通用户数据。

**示例值**："user_id"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "members": [
        {
            "member_id": "u287xj12",
            "member_type": "user",
            "member_id_type": "user_id"
        }
    ]
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
	<md-text type="field-name" >results</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >member_result\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	添加成员的操作结果。
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
	成员 ID。ID 类型与请求参数中，每一个成员对应的 member_id_type 取值保持一致。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >code</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >int</md-text>
	</md-dt-td>
	<md-dt-td>
	结果响应码，取值为 `0` 表示成功。取值非 `0` 表示当前的 member_id 存在问题，具体的错误码排查方案可参考本文的错误码列表或者[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。
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
        "results": [
            {
                "member_id": "u287xj12",
                "code": 0
            }
        ]
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


<md-tr>
  <md-td>500</md-td>
  <md-td>40003</md-td>
  <md-td>internal error</md-td>
  <md-td>内部错误，请获取请求的 X-Request-Id，并向[技术支持](https://applink.feishu.cn/TLJpeNdW)进行反馈。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>40001</md-td>
  <md-td>param error</md-td>
  <md-td>参数错误。请检查请求时传入的参数是否有误。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>42012</md-td>
  <md-td>group member user reached the upper limit</md-td>
  <md-td>用户组的用户数量达到上限。单租户单个普通用户组成员数量上限为 100,000，但同时单租户内所有普通用户组的成员总数上限为租户用户数量的 10 倍。</md-td>
</md-tr>


<md-tr>
  <md-td>200</md-td>
  <md-td>42005</md-td>
  <md-td>member is already in group</md-td>
  <md-td>当前添加的成员已经存在用户组中，无需重复添加。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>42006</md-td>
  <md-td>user has resigned error</md-td>
  <md-td>用户已离职，无法添加。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>41073</md-td>
  <md-td>invalid member_id</md-td>
  <md-td>成员 ID 无效。你需要参考接口文档的 member_id 参数描述，传入正确的成员 ID。</md-td>
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
  <md-td>42002</md-td>
  <md-td>invalid group_id</md-td>
  <md-td>用户组 ID 无效。你可以调用[查询用户组列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group/simplelist)接口，获取准确的用户组 ID。</md-td>
</md-tr>


<md-tr>
  <md-td>403</md-td>
  <md-td>42009</md-td>
  <md-td>no user group authority</md-td>
  <md-td>缺少用户组权限。应用的通讯录权限范围需包含当前操作的用户组。了解应用的通讯录权限范围，可参见[权限范围资源介绍](/ssl:ttdoc/ukTMukTMukTM/uETNz4SM1MjLxUzM/v3/guides/scope_authority)。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


