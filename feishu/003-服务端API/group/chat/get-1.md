<!--
title: 获取群成员发言权限
id: 6951292665602883586
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-moderation/get
updatedAt: 1734503081000
source: https://open.feishu.cn/document/server-docs/group/chat/get
-->
# 获取群成员发言权限

获取指定群组的发言模式、可发言用户名单等信息。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=im&version=v1&resource=chat.moderation&method=get)

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

## 前提条件

应用需要开启[机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。

## 使用限制

调用本接口的用户或机器人必须要在对应的群组内。

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
      <md-td>https://open.feishu.cn/open-apis/im/v1/chats/:chat_id/moderation</md-td>
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
            
            <div style="color: rgb(100, 106, 115);font-size: 12px;line-height: 20px;white-space: pre-line;font-weight: 500;padding-top: 4px;">开启任一权限即可</div>
            
      </md-th>
      <md-td>
            <md-perm name="im:chat" desc="获取与更新群组信息" support_app_types="custom,isv" tags="">获取与更新群组信息</md-perm>
            <md-perm name="im:chat.moderation:read" desc="查看群发言权限" support_app_types="custom,isv" tags="">查看群发言权限</md-perm>
            <md-perm name="im:chat:readonly" desc="获取群组信息" support_app_types="custom,isv" tags="">获取群组信息</md-perm>
      </md-td>
    </md-tr>
    <md-tr>
      <md-th>
            字段权限要求
      </md-th>
      <md-td>
        <md-alert type="tip" icon="none">
        该接口返回体中存在下列敏感字段，仅当开启对应的权限后才会返回；如果无需获取这些字段，则不建议申请
        </md-alert>
        <md-perm name="contact:user.employee_id:readonly" desc="获取用户 user ID" support_app_types="custom" tags="">获取用户 user ID</md-perm>
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
	<md-text type="field-name" >chat_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	群 ID。获取方式：

- [创建群](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/create)，从返回结果中获取该群的 chat_id。
- 调用[获取用户或机器人所在的群列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/list)接口，可以查询用户或机器人所在群的 chat_id。
- 调用[搜索对用户或机器人可见的群列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/search)，可搜索用户或机器人所在的群、对用户或机器人公开的群的 chat_id。

**示例值**："oc_a0553eda9014c201e6969b478895c230"
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
	<md-text type="field-name" >user_id_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	否
	</md-dt-td>
	<md-dt-td>
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
	分页大小，用来限制一次请求返回的数据条目数。

**示例值**：dmJCRHhpd3JRbGV1VEVNRFFyTitRWDY5ZFkybmYrMEUwMUFYT0VMMWdENEtuYUhsNUxGMDIwemtvdE5ORjBNQQ==
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

**示例值**：10

**数据校验规则**：

- 最大值：`100`
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
	<md-text type="field-name" >moderation_setting</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	群发言模式，可能值有：

- all_members：所有群成员可发言
- only_owner：仅群主或管理员可发言
- moderator_list：指定群成员可发言
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


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >items</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >list_moderator\[\]</md-text>
	</md-dt-td>
	<md-dt-td>
	可发言用户列表，当群发言模式为 `moderator_list` 时，该参数有返回值。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >user_id_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	可发言用户 ID 类型
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >user_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	可发言用户 ID，ID 类型与查询参数 user_id_type 取值一致。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >tenant_key</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	租户 Key，为租户在飞书上的唯一标识，用来换取对应的tenant_access_token，也可以用作租户在应用中的唯一标识。
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
        "moderation_setting": "moderator_list",
        "page_token": "dmJCRHhpd3JRbGV1VEVNRFFyTitRWDY5ZFkybmYrMEUwMUFYT0VMMWdENEtuYUhsNUxGMDIwemtvdE5ORjBNQQ==",
        "has_more": true,
        "items": [
            {
                "user_id_type": "user_id",
                "user_id": "4d7a3c6g",
                "tenant_key": "2ca1d211f64f6438"
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
  <md-td>400</md-td>
  <md-td>232001</md-td>
  <md-td>Your request contains an invalid request parameter.</md-td>
  <md-td>参数错误。请参考 API 文档参数描述，排查请求时参数是否填写有误。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232004</md-td>
  <md-td>Such an app does NOT exist.</md-td>
  <md-td>作为操作者的 app_id 不存在，请联系[技术支持](https://applink.feishu.cn/TLJsX982)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232006</md-td>
  <md-td>Your request specifies a chat_id which is invalid.</md-td>
  <md-td>无效的 chat_id，请检查 chat_id 是否正确。获取方式：

- [创建群](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/create)，从返回结果中获取该群的 chat_id。
- 调用[获取用户或机器人所在的群列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/list)接口，可以查询用户或机器人所在群的 chat_id。
- 调用[搜索对用户或机器人可见的群列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/search)，可搜索用户或机器人所在的群、对用户或机器人公开的群的 chat_id。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232009</md-td>
  <md-td>Your request specifies a chat which has already been dissolved.</md-td>
  <md-td>群组已被解散，无法操作。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232010</md-td>
  <md-td>Operator and chat can NOT be in different tenants.</md-td>
  <md-td>调用接口的操作者和被操作的群组不在同一租户下，无法操作。需确保当前的操作者和被操作的群组在同一租户下。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232011</md-td>
  <md-td>Operator can NOT be out of the chat.</md-td>
  <md-td>调用接口的操作者不在群组内，无法操作。你需要将当前调用 API 的应用或用户[加入待操作的群组](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-members/create)后重试。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232025</md-td>
  <md-td>Bot ability is not activated.</md-td>
  <md-td>应用未启用机器人能力。你需要登录[开发者后台](https://open.feishu.cn/app)，在应用详情页的 **应用能力** > **添加应用能力** 页面内，添加 **机器人** 能力，并发布应用使配置生效。具体操作参见[机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232033</md-td>
  <md-td>The operator or invited bots does NOT have the authority to manage external chats without the scope.</md-td>
  <md-td>当前被操作的群为外部群，暂不支持操作外部群。只有开启对外共享能力的机器人支持外部群，详情参见[机器人支持外部群和外部用户单聊](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/develop-robots/add-bot-to-external-group)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232034</md-td>
  <md-td>The app is unavailable or inactivated by the tenant.</md-td>
  <md-td>应用在本租户下未安装或未启用。需要先安装应用，再使用应用调用接口。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


