<!--
title: 如何解决 230001 错误
id: 7454500801803337747
fullPath: /uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-resolve-error-230001
updatedAt: 1737371419000
source: https://open.feishu.cn/document/faq/trouble-shooting/how-to-resolve-error-230001
-->
# 如何解决 230001 错误
## 报错原因
参数错误，可根据接口实际返回的错误信息，并参考接口文档内容，检查输入参数是否填写错误。

**报错示例**：

```json 
{
	"code": 230001,
	"msg": "Your request contains an invalid request parameter, ext=invalid receive_id.",
	"error": {
    	"log_id": "20240911085251BEA8869709BAD4373B10"
	}
}
``` 
## 解决方案
出现 230001 错误码，代表调用接口的入参有误，需要调整参数，具体可根据 “ext=” 后面的信息在此文档中搜索处理方案。

以上面的**报错示例**为例，msg 信息中有 “Your request contains an invalid request parameter, **ext=invalid receive_id.**”，其中有一段信息是 “ext=invalid receive_id.”，可以使用 “ext=” 后面的 “invalid receive_id” 在此文档中查找处理方案。

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width:15%">HTTP状态码</md-th>
      <md-th style="width:15%">错误码</md-th>
      <md-th style="width:25%">错误原因</md-th>
      <md-th style="width:45%">排查建议</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>Internal Error</md-td>
      <md-td>内部异常，请联系 请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>invalid message_id</md-td>
      <md-td>
        -   message_id 无效，请检查 message_id 是否真实有效。
- message_id 字段解释：
    - 消息 ID。
- 消息 ID 获取方式：
    - 调用[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)接口后，从响应结果的 `message_id` 参数获取。
    - 监听[接收消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive)事件，当触发该事件后可以从事件体内获取消息的 `message_id`。
    - 调用[获取会话历史消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/list)接口，从响应结果的 `message_id` 参数获取。
- **示例值**："om_dc13264520392913993dd051dba21dcf"。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>batch_message_id length is less than 4</md-td>
      <md-td>
        -   入参 batch_message_id 无效，字段长度不能小于等于 3。
- batch_message_id 字段解释：
    - 批量消息任务 ID。
- 批量消息任务 ID 获取方式：
    - 批量消息任务 ID，为[批量发送消息](/ssl:ttdoc/ukTMukTMukTM/ucDO1EjL3gTNx4yN4UTM)接口返回值中的`message_id`字段，用于标识一次批量发送消息请求。
- **示例值**："bm-dc13264520392913993dd051dba21dcf"。
      </md-td>
    </md-tr>
     <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>p_date format error</md-td>
      <md-td>
         p_date 格式错误，正确格式为"yy-MM-dd hh:mm:ss"。
      </md-td>
    </md-tr>
     <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>invalid app_id</md-td>
      <md-td>
        -   app_id 无效，请检查 app_id 是否符合要求。
- app_id 字段解释：
    - app_id 是飞书开放平台应用的唯一标识。在创建应用时，由系统自动生成，用户不能自行修改。
- app_id 获取方式：
    - 获取方式可查询：[如何获取应用的 App ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-app-id)。
      </md-td>
    </md-tr>
     <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>invalid container_id</md-td>
      <md-td>
        -   container_id 无效，请检查 container_id 是否符合入参要求
- container_id 字段解释：
    - 容器 ID。ID 类型与 container_id_type 取值一致。
- 获取方式：
    - 群聊或单聊的 ID 获取方式参见[群 ID 说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-id-description)。
    - 话题 ID 获取参见[话题概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/thread-introduction)的 **如何获取 thread_id** 章节。
- **示例值**："oc_234jsi43d3ssi993d43545f"。
      </md-td>
    </md-tr>
     <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>invalid container_id_type</md-td>
      <md-td>
        -   container_id_type 无效，请检查 container_id_type 是否符合入参要求。
- container_id_type 字段解释：
    - 容器类型。
- **使用说明**：
    - 可选值有：
        - `chat`：包含单聊（p2p）和群聊（group）。
        - `thread`：话题。
    - **注意**：对于 **普通对话群** 中的话题消息，通过 `chat` 容器类型仅能获取到话题的根消息，你可通过指定容器类型为 `thread` 获取话题回复中的所有消息。
- **示例值**："chat"。
      </md-td>
    </md-tr>
     <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>invalid receive_id</md-td>
      <md-td>
        -   receive_id 无效，请检查 receive_id 是否符合入参要求。
- receive_id 字段解释：
    - 消息接收者 ID，ID 类型与 `receive_id_type` 的值一致。
- **示例值**："ou_a0553eda9014c201e6969b478895c230"。
      </md-td>
    </md-tr>
     <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>invalid receive_id_type</md-td>
      <md-td>
        -   receive_id_type 无效，请检查 receive_id_type 是否符合入参要求。
- receive_id_type字段解释：
    - 消息接收者 ID 类型。
- **使用说明**：
    - **可选值有**：
        - `open_id`：标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。了解更多：[如何获取自己的 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)。
        - `user_id`：标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。了解更多：[如何获取自己的 User ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)。
        - `union_id`：标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。了解更多：[如何获取自己的 Union ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)。
        - `email`：以用户的真实邮箱来标识用户。
        - `chat_id`：以群 ID 来标识群聊。了解更多：[群 ID 说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-id-description)。
        - `thread_id`：以话题 ID 来标识话题。了解更多：[话题概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/thread-introduction)。
      </md-td>
    </md-tr>
     <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>invalid start_time</md-td>
      <md-td>
        -   start_time 无效，请检查 start_time 是否符合入参要求。
- start_time 字段解释：
    - 待查询历史信息的起始时间，秒级时间戳。
    - **注意**：`thread` 容器类型暂不支持获取指定时间范围内的消息。
- **示例值**："1609296809"。
      </md-td>
    </md-tr>
     <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>invalid end_time</md-td>
      <md-td>-   end_time 无效，请检查 end_time 是否符合入参要求。
- end_time 字段解释：
    - 待查询历史信息的结束时间，秒级时间戳。
    - **注意**：`thread` 容器类型暂不支持获取指定时间范围内的消息。
- **示例值**："1609296809"。
      </md-td>
    </md-tr>
     <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>invalid chat_id</md-td>
      <md-td>-   chat_id 无效，请检查 chat_id 是否符合要求。
- chat_id 字段解释：
    - 群组 ID。
- 获取方式：
    - 获取方式参见[群 ID 说明](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-id-description)。
- **示例值**："oc_234jsi43d3ssi993d43545f"。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>invalid msg_type</md-td>
      <md-td>
        -   msg_type 无效，请检查 msg_type 是否符合要求。
- msg_type 字段解释：
    - 消息类型。
- **使用说明**：
    - 编辑消息。
        - **可选值有**：
            - text：文本。
            - post：富文本。
        - **示例值**："text"。
    - 发送消息。
        - **可选值有**：
            - text：文本。
            - post：富文本。
            - image：图片。
            - file：文件。
            - audio：语音。
            - media：视频。
            - sticker：表情包。
            - interactive：卡片。
            - share_chat：分享群名片。
            - share_user：分享个人名片。
            - system：系统消息。
        - 不同消息类型的详细介绍，参见[发送消息内容结构](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/im-v1/message/create_json)。
        - **示例值**："text"。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>invalid auth</md-td>
      <md-td>
        -  请求头信息请按要求填写。
- **示例值：**
	- **Authorization**：
        - tenant_access_token，以应用身份调用 API，可读写的数据范围由应用自身的 [配置应用数据权限](/ssl:ttdoc/home/introduction-to-scope-and-authorization/configure-app-data-permissions) 决定。参考 [自建应用获取 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal) 或 [商店应用获取 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token)。
        - **值格式**："Bearer access_token"
        - **示例值**："Bearer t-g1044qeGEDXTB6NDJOGV4JQCYDGHRBARFTGT1234"。
	- **Content-Type**：
        - **固定值：**"application/json; charset=utf-8"。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>invalid auth_type</md-td>
      <md-td>
        -   auth_type 无效，请检查 auth_type 是否符合要求。
- auth_type 字段解释：
    - 访问凭证。
- **可选值有：**
    - tenant_access_token：
        - 以应用身份调用 API，可读写的数据范围由应用自身的 [数据权限范围](/ssl:ttdoc/home/introduction-to-scope-and-authorization/configure-app-data-permissions) 决定。
        - 获取方式：
            - 参考 [自建应用获取 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal) 或 [商店应用获取 tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token)。
    - user_access_token
        - 以应用的使用者的身份操作 OpenAPI，API 所能操作的数据资源范围受限于用户的身份所能操作的资源范围。
        - 获取方式：
            - 参考 [获取 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/get-user-access-token)。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>invalid user_id</md-td>
      <md-td>
        -   user_id 无效，请检查 user_id 是否按要求填写。
- user_id 字段解释：
    - 用户 ID。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>invalid message_id_list</md-td>
      <md-td>
        -  合并转发的消息里面，存在无效的 message_id（有一个即报错），请获取正确有效的 message_id。
- message_id_list 字段解释：
    - 待转发的消息 ID 列表，列表内的消息必须来自同一个会话。
- 消息 ID 获取方式：
    - 调用[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)接口后，从响应结果的 `message_id` 参数获取。
    - 监听[接收消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive)事件，当触发该事件后可以从事件体内获取消息的 `message_id`。
    - 调用[获取会话历史消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/list)接口，从响应结果的 `message_id` 参数获取。
- **示例值**：["om_dc13264520392913993dd051dba21dcf"]。
- **数据校验规则**：
    - 长度范围：`1` ～ `100`。 
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>no valid message to forward</md-td>
      <md-td>
        合并转发的所有消息 ID 全部无效。需要按照 message_id 的获取方式，获取正确有效的值（可在此文档中搜索消息 ID 获取方式）。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>invalid page_token</md-td>
      <md-td>
        -   page_token 无效，请检查 Papage_tokeneToken 是否符合要求。
- page_token 字段解释：
    - 分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果。
- **示例值**："GxmvlNRvP0NdQZpa7yIqf_Lv_QuBwTQ8tXkX7w-irAghVD_TvuYd1aoJ1LQph86O-XImC4X9j9FhUPhXQDvtrQ=="。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>invalid thread_id</md-td>
      <md-td>
        -   转发话题场景，thread_id 无效
- thread_id 字段解释：
    - 要转发的话题ID
- 获取方式：
    - 参见[话题概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/thread-introduction)的 **如何获取 thread_id** 章节。
- **示例值**："omt_dc132645203"。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>all ids in the user_id_list are invalid</md-td>
      <md-td>
        -   加急场景，被加急的所有 user_id 都无效
- user_id 字段解释：
    - 用户 ID。
- **注意**：需要确保目标用户在加急消息所属的会话内。如果 ID 列表中有用户不在消息所属的会话内，则接口会将这些无效的 ID 返回（响应参数 invalid_user_id_list），只加急有效的用户 ID。如果 ID 列表内的所有 ID 均无效，则会返回 `230001` 错误码。
- **数据校验规则**：列表长度不能大于 200。
- **示例值**：["ou_6yf8af6bgb9100449565764t3382b168"]。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>invalid file_key</md-td>
      <md-td>
        -   file_key 无效，请填写真实有效的 file_key。
- file_key 字段解释：
    - 文件的 Key，通过[上传文件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/file/create)接口上传文件后，从返回结果中获取。
- **示例值**："file_456a92d6-c6ea-4de4-ac3f-7afcf44ac78g"。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>this operation to bots is currently not supported</md-td>
      <md-td>
          机器人不支持对机器人发送消息
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>the request parameters have changed, page_token is invalid</md-td>
      <md-td>
        -   请求参数改变了，page_token 无效。
- page_token 字段解释：
    - 分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果。
- **示例值**："GxmvlNRvP0NdQZpa7yIqf_Lv_QuBwTQ8tXkX7w-irAghVD_TvuYd1aoJ1LQph86O-XImC4X9j9FhUPhXQDvtrQ=="。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>The end_time is earlier than the start_time</md-td>
      <md-td>
          终止时间比起始时间更早，需要修改。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>The page_size exceeds the limit</md-td>
      <md-td>
        -   入参分页参数超过最大数量，取值范围在`1` ～ `50`。
- page_size 字段解释：
    - 分页大小，即单次请求所返回的数据条目数。
- **示例值**：20。
- **默认值**：`20`。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>sending system messages in group chats is not supported</md-td>
      <md-td>
        -   系统消息不支持发送给群聊。
- **使用说明**：
    - 参考 [发送消息内容结构](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/im-v1/message/create_json) 中的 **系统消息 system** 模块。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>invalid message content. validate content fail</md-td>
      <md-td>
        -   消息内容验证失败，请按照入参消息类型格式填写消息内容。
- **使用说明**：
- 参考 [发送消息内容结构](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/im-v1/message/create_json)。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>invalid sort_type</md-td>
      <md-td>
        -   sort_type 无效，请填写争取的值。
- sort_type 字段解释：
    - 消息排序方式。
- **注意**：使用 `page_token` 分页请求时，排序方式（`sort_type`）均与第一次请求一致，不支持中途改换排序方式。
- **示例值**："ByCreateTimeAsc"
- **可选值有**：
    - `ByCreateTimeAsc`：按消息创建时间升序排列
    - `ByCreateTimeDesc`：按消息创建时间降序排列
- **默认值**：`ByCreateTimeAsc`。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>bot or user is not the message`s sender</md-td>
      <md-td>
          机器人和用户都不是消息的发送者，不能发送。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>bot_id and user_id cannot be empty at the same time</md-td>
      <md-td>
          机器人ID和用户ID不能同时为空，需要传参 user_id。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>content cannot be empty</md-td>
      <md-td>
        -   消息内容不能为空。
- content 字段解释：
    - 消息卡片的内容。支持卡片 JSON 或[搭建工具](https://open.feishu.cn/cardkit?from=open_docs)构建的卡片。
- **使用说明**；
    - 要使用卡片 JSON，参考[卡片 JSON 结构](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-json-structure)。示例值可参考下文的请求体示例。
    - 要使用[搭建工具](https://open.feishu.cn/cardkit?from=open_docs)构建的卡片模板，你需传入 `type` 和 `data` 参数。参考 [发送卡片](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/send-feishu-card)文档末尾的字段说明传值。
- **注意**：
    - 更新的文本消息最大不能超过 150 KB，卡片及富文本消息最大不能超过 30 KB。若消息中包含大量样式标签，会使实际消息体长度大于你输入的请求体长度。
    - 以下示例值未转义，使用时请注意将其转为 JSON 序列化后的字符串。
- **示例值**："{"elements":[{"tag":"div","text":{"content":"This is the plain text","tag":"plain_text"}}],"header":{"template":"blue","title":{"content":"This is the title","tag":"plain_text"}}}"。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>This message is NOT a card</md-td>
      <md-td>
          消息不是卡片消息类型，不支持修改。该接口是更新卡片消息的接口，如要编辑普通消息，请使用[编辑消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/update)。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>This message is NOT an urgent message</md-td>
      <md-td>
          这不是加急消息。这是查询加急消息是否已读的接口，无法查询其他类型的消息。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>invalid image_key</md-td>
      <md-td>
        -   image_key 无效，请提供有效的 image_key。
- image_key 字段解释：
    - 图片的 Key。
- 获取方式：
    - 通过[上传图片](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/image/create)接口上传图片后，在返回结果中获取。
- **示例值**："img_8d5181ca-0aed-40f0-b0d1-b1452132afbg"。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>invalid system message type</md-td>
      <md-td>
          - 系统消息类型不符合要求，只支持 1203 的类型。
- **使用说明**：
    - 请参考 [发送消息内容结构](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/im-v1/message/create_json) 中的 **系统消息 system** 模块。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>sending system messages as a user is not supported</md-td>
      <md-td>
          - 不支持以用户身份发送系统消息。
- **使用说明**：
    - 请参考 [发送消息内容结构](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/im-v1/message/create_json) 中的 **系统消息 system** 模块。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>divider_text must be set</md-td>
      <md-td>
        -   发送系统消息 divider_text 必须设置值，
- divider_text 字段解释：
    - 分割线系统消息的内容。当 `type` 为 `divider` 时该参数必填。
- **使用说明**：
    - 请参考 [发送消息内容结构](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/im-v1/message/create_json) 中的 **系统消息 system** 模块。
- **示例值**："divider_text": { "text": "新话题", "i18n_text": { "zh_CN": "新会话", "en_US": "New Session" } }。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>divider message text cannot be empty</md-td>
      <md-td>
          - divider_text 不能为空。
- **使用说明**：
    - 请参考 [发送消息内容结构](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/im-v1/message/create_json) 中的 **系统消息 system** 模块。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>divider message text exceeds the specified length</md-td>
      <md-td>
          - divider_text 不能超长，长度限制为 20。
- **使用说明**：
    - 请参考 [发送消息内容结构](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/im-v1/message/create_json) 中的 **系统消息 system** 模块。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>divider message i18n_text contains illegal language types</md-td>
      <md-td>
        -   i18n 文案包含非法的语言
- i18n_text 字段解释：
    - 国际化文本，多语言环境下，优先使用该值。格式为 `{key:value}` 形式。支持的语种字段有：
        - en_US（英文）
        - zh_CN（简体中文）
        - zh_HK（繁体中文-香港）
        - zh_TW（繁体中文-台湾）
        - ja_JP（日语）
        - id_ID（印尼语）
        - vi_VN（越南语）
        - th_TH（泰语）
        - pt_BR（葡萄牙语）
        - es_ES（西班牙语）
        - ko_KR（韩语）
        - de_DE（德语）
        - fr_FR（法语）
        - it_IT（意大利语）
        - ru_RU（俄语）
        - ms_MY（马来语）
- **注意**：
    - 语言类型大小写敏感，传值时请保持与上述枚举值完全一致。
    - 每种语言下（若有）文本则不能为空。
    - 文本长度不能超过 20 个字符或 10 个汉字。
- **示例值**：{ "zh_CN": "新会话", "en_US": "New Session" }。
- **使用说明**：
    - 请参考 [发送消息内容结构](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/im-v1/message/create_json) 中的 **系统消息 system** 模块。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>divider message i18n_text contains empty text</md-td>
      <md-td>
- i18n 文案不能为空。
- **使用说明**：
	- 请参考 [发送消息内容结构](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/im-v1/message/create_json) 中的 **系统消息 system** 模块。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>divider message text in i18n_text exceeds the specified length</md-td>
      <md-td>
- i18n 文案不能超长，长度限制为 20。
- **使用说明**：
	- 请参考 [发送消息内容结构](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/im-v1/message/create_json) 中的 **系统消息 system** 模块。
      </md-td>
    </md-tr>
    <md-tr>
      <md-td>400</md-td>
      <md-td>230001</md-td>
      <md-td>invalid message content</md-td>
      <md-td>
        -   代表消息内容存在问题，可根据具体的消息类型查找相应的 [解决方案](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/im-v1/message/create_json)。
- 具体细化如下：
    - content is not a string in json format
        - 字段 Content 无法被解析成json，请按照入参要求填写
    - validate content fail
        - 请检查 Content 字段的格式
    - content format of the {$value} type is incorrect
        - 请检查 Content 字段的格式是否符合 {$value} 消息类型
        - value取值：text、image、post、share_chat、share_user、sticker、file、audio、media、system
    - 富文本 content 缺失元素，解决方案请参考[发送消息内容结构](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/im-v1/message/create_json)中**富文本 post**的使用说明。
        - at用户缺失user_id：message_content_at_tag's user_id field can't be nil
        - at用户组缺失user_group_id：message_content_at_user_group_tag's user_group_id field can't be nil
        - 超链接标签缺失href：message_content_a_tag's href field can't be nil
        - 超链接标签缺失text：message_content_a_tag's text field can't be nil
        - img标签缺失image_key：message_content_img_tag's image_key field can't be nil
        - text标签缺失text：message_content_text_tag's text field can't be nil
        - media标签缺失file_key：message_content_media_tag's file_key field can't be nil
        - emotion标签缺失emoji_type：message_content_emotion_tag's emoji_type field can't be nil
        - emotion标签emoji_type字段无效：message_content_emotion_tag's emoji_type is invalid
        - md标签缺失text：message_content_md_tag's text field can't be nil
        - md标签的text字段包含无效的user_id：message_content_md_tag's text field contains invalid user id
   - message_content has wrong tag
		- 富文本标签填写错误。解决方案请参考[发送消息内容结构](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/im-v1/message/create_json)中**富文本 post**的使用说明。
      </md-td>
    </md-tr>
    
  
</md-tbody>
</md-table>
:::




