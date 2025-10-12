<!--
title: 判断用户或机器人是否在群里
id: 6946222929790418972
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-members/is_in_chat
updatedAt: 1735820031000
source: https://open.feishu.cn/document/server-docs/group/chat-member/is_in_chat
-->
# 判断用户或机器人是否在群里

根据使用的 access_token 判断对应的用户或者机器人是否在指定的群里。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=im&version=v1&resource=chat.members&method=is_in_chat)

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

调用该接口的应用，需要开启[机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。

## 使用限制

获取内部群信息时，操作者须与群组在同一租户下。

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
      <md-td>https://open.feishu.cn/open-apis/im/v1/chats/:chat_id/members/is_in_chat</md-td>
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
            <md-perm name="im:chat:readonly" desc="获取群组信息" support_app_types="custom,isv" tags="">获取群组信息</md-perm>
            <md-perm name="im:chat.members:read" desc="查看群成员" support_app_types="custom,isv" tags="">查看群成员</md-perm>
            <md-perm name="im:chat.group_info:readonly" desc="读取群信息（历史版本）" support_app_types="custom,isv" tags="history,offline">读取群信息（历史版本）</md-perm>
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
	<md-text type="field-name" >is_in_chat</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >boolean</md-text>
	</md-dt-td>
	<md-dt-td>
	用户或者机器人是否在群中
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
        "is_in_chat": false
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
  <md-td>232010</md-td>
  <md-td>Operator and chat can NOT be in different tenants.</md-td>
  <md-td>调用接口的操作者和被操作的群组不在同一租户下，无法操作。需确保当前的操作者和被操作的群组在同一租户下。</md-td>
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
  <md-td>没有权限操作外部群。</md-td>
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


