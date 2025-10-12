<!--
title: 添加消息表情回复
id: 6990603997012312066
fullPath: /uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/create
updatedAt: 1732700102000
source: https://open.feishu.cn/document/server-docs/im-v1/message-reaction/create
-->
# 添加消息表情回复

给指定消息添加指定类型的表情回复。{尝试一下}(url=/api/tools/api_explore/api_explore_config?project=im&version=v1&resource=message.reaction&method=create)

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

- 应用需要开启[机器人能力](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。
- 调用当前接口的机器人或者用户，需要在待添加表情回复的消息所属的会话内。

## 使用限制

- 已被撤回的消息无法添加表情回复。
- [系统消息（system）](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/im-v1/message/create_json#e159cb73)无法添加表情回复。

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
      <md-td>https://open.feishu.cn/open-apis/im/v1/messages/:message_id/reactions</md-td>
    </md-tr>
    <md-tr>
      <md-th>HTTP Method</md-th>
      <md-td>POST</md-td>
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
            <md-perm name="im:message" desc="获取与发送单聊、群组消息" support_app_types="custom,isv" tags="">获取与发送单聊、群组消息</md-perm>
            <md-perm name="im:message.reactions:write_only" desc="发送、删除消息表情回复" support_app_types="custom,isv" tags="">发送、删除消息表情回复</md-perm>
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
	<md-text type="field-name" >message_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	待添加表情回复的消息 ID。ID 获取方式：
  
- 调用[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)接口后，从响应结果的 `message_id` 参数获取。
- 监听[接收消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive)事件，当触发该事件后可以从事件体内获取消息的 `message_id`。
- 调用[获取会话历史消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/list)接口，从响应结果的 `message_id` 参数获取。

**示例值**："om_a8f2294b************a1a38afaac9d"
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
	<md-text type="field-name" >reaction_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >emoji</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	表情类型
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >emoji_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	是
	</md-dt-td>
	<md-dt-td>
	emoji 类型。支持的表情与对应的 emoji_type 值参见[表情文案说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/emojis-introduce)。


**示例值**："SMILE"
	</md-dt-td>
</md-dt-tr>

  </md-dt-tbody>
</md-dt-table>
:::





### 请求体示例
:::html
<md-code-json>
{
    "reaction_type": {
        "emoji_type": "SMILE"
    }
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
	<md-text type="field-type" >message.reaction</md-text>
	</md-dt-td>
	<md-dt-td>
	\-
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >reaction_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	表情回复 ID。为消息添加表情回复后，会获得该表情回复的唯一标识 ID，后续使用该 ID 可以[删除消息表情回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/delete)。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >operator</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >operator</md-text>
	</md-dt-td>
	<md-dt-td>
	添加消息表情回复的操作人。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >operator_id</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	操作人 ID，具体的取值与 `operator_type` 相关：
      
- 当 `operator_type` 取值 `app` 时返回机器人的应用 ID（app_id）。
- 当 `operator_type` 取值 `user` 时返回用户的 open_id。
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >operator_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	操作人身份。

**可选值有**：
<md-enum>
<md-enum-item key="app" >应用</md-enum-item>
<md-enum-item key="user" >用户</md-enum-item>
</md-enum>
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >action_time</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	添加消息表情回复的时间。Unix 时间戳，单位：ms
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="1">
	<md-dt-td>
	<md-text type="field-name" >reaction_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >emoji</md-text>
	</md-dt-td>
	<md-dt-td>
	表情类型
	</md-dt-td>
</md-dt-tr>


<md-dt-tr level="2">
	<md-dt-td>
	<md-text type="field-name" >emoji_type</md-text>
	</md-dt-td>
	<md-dt-td>
	<md-text type="field-type" >string</md-text>
	</md-dt-td>
	<md-dt-td>
	emoji 类型。emoji_type 值对应的表情参考[表情文案说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/emojis-introduce)。
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
        "reaction_id": "ZCaCIjUBVVWSrm5L-3ZTw****",
        "operator": {
            "operator_id": "ou_ff0b7ba35fb****",
            "operator_type": "user"
        },
        "action_time": "1663054162546",
        "reaction_type": {
            "emoji_type": "SMILE"
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
  <md-td>230110</md-td>
  <md-td>Action unavailable as the message has been deleted.</md-td>
  <md-td>消息被删除，无法进行操作。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>231001</md-td>
  <md-td>reaction type is invalid.</md-td>
  <md-td>表情类型不合法。请参考[表情文案说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/emojis-introduce)，设置正确的 emoji_type 值。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>231002</md-td>
  <md-td>The operator has no permission to react on the specific message.</md-td>
  <md-td>当前调用接口的机器人或用户，没有权限对目标消息添加或删除表情回复。通常是因为机器人或用户不在消息所属的会话内。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>231003</md-td>
  <md-td>The message is not found, maybe not exist or deleted.</md-td>
  <md-td>找不到目标消息，可能因为传入的消息 ID 有误或者消息已经被撤回。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>231004</md-td>
  <md-td>The chat in which the message exists is not found, maybe not exist, deleted or archived.</md-td>
  <md-td>目标消息所属会话不存在、已被解散或归档等，无法进行操作。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>231005</md-td>
  <md-td>The thread has been no-trace removed, cannot put reaction.</md-td>
  <md-td>目标消息是一个话题消息，该话题消息被无痕撤回，无法进行操作。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>231006</md-td>
  <md-td>The operator_id is invalid.</md-td>
  <md-td>operator_id 是非法值，不能有效指定一个机器人或用户。请重试，若问题仍未解决请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>231008</md-td>
  <md-td>The operator has no access to the message.</md-td>
  <md-td>操作人对该消息没有访问权限，通常是因为操作人不在消息所在会话内。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>231012</md-td>
  <md-td>The request has an invalid pageToken.</md-td>
  <md-td>page_token 参数不合法。请根据 page_token 参数描述，设置正确的值。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>231013</md-td>
  <md-td>The request has an invalid AuthType.</md-td>
  <md-td>请求的授权方式不合法。没有使用 tenant_access_token 或者 user_access_token 进行授权。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>231014</md-td>
  <md-td>user_id_type is invalid.</md-td>
  <md-td>user_id_type 不合法。未使用 open_id，union_id，user_id 三者之一。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>231015</md-td>
  <md-td>Act on reaction failed, repeated request is processing.</md-td>
  <md-td>重复的表情回复请求正在处理中。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>231017</md-td>
  <md-td>This operation is not supported for this message type.</md-td>
  <md-td>该消息类型不支持本操作，详情参见[消息与群组部分API增加不支持的消息类型校验
](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/breaking-change/unsupported-message-type-verification)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>231018</md-td>
  <md-td>The message is invisible to the operator.</md-td>
  <md-td>该消息对于操作者不可见，无法进行本操作。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>231019</md-td>
  <md-td>Due to the settings of this user, you are temporarily unable to perform this operation.</md-td>
  <md-td>由于目标用户（消息发送者）的设置（例如屏蔽消息），暂时无法执行此操作。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>231020</md-td>
  <md-td>Due to the configuration of the tenant administrator, you cannot perform this operation on the target user temporarily.</md-td>
  <md-td>由于租户管理员的配置，暂时无法对目标用户（消息发送者）执行此操作，请联系租户管理员协助排查。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>231021</md-td>
  <md-td>No permission to operate external chats.</md-td>
  <md-td>没有权限操作外部群。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>231022</md-td>
  <md-td>Bot has NO availability to this user.</md-td>
  <md-td>单聊用户（以群聊的 chat_id 指定的消息接收者，但 chat_id 对应的群聊类型为单聊 `p2p`）不在应用机器人的可用范围内，或者是在应用的禁用范围内。


解决方案：

1. 登录[开发者后台](https://open.feishu.cn/app)，找到并进入指定应用详情页。
2. 在左侧导航栏进入 **应用发布** >  **版本管理与发布** 页面，点击 **创建版本**。
3. 在 **版本详情** 页面，找到 **可用范围** 区域，点击 **编辑**。
4. 在弹出的对话框内，配置应用的可用范围，将用户添加至可用范围内。
5. 在页面底部点击 **保存**，并发布应用使配置生效。
6. （可选）如果以上配置完成后仍报错，则需要联系企业管理员登录[管理后台](https://feishu.cn/admin)，在 **工作台** > **应用管理** 中进入指定应用详情页，在 **应用可用范围** 内查看该用户是否被设置为了 **禁用成员**。

具体操作参见[配置应用可用范围](/ssl:ttdoc/home/introduction-to-scope-and-authorization/availability)。</md-td>
</md-tr>


<md-tr>
  <md-td>400</md-td>
  <md-td>232009</md-td>
  <md-td>Your request specifies a chat which has already been dissolved.</md-td>
  <md-td>群组已被解散，无法执行操作。</md-td>
</md-tr>


  </md-tbody>
</md-table>
:::

更多错误码信息，参见[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。


