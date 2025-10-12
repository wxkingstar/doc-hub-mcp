---
title: "Pin 消息"
source_url: https://open.feishu.cn/document/server-docs/im-v1/pin/create
---
最后更新于 2024-12-11

# Pin 消息

Pin 一条指定的消息。Pin 消息的效果可参见[Pin 消息概述](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/pin/pin-overview)。

## 前提条件

- 应用需要开启[机器人能力](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。
- Pin 消息时，机器人必须在消息所属的会话内。

## 使用限制

- 当前操作者不可见的消息无法 Pin。
- 对同一条消息的 Pin 操作不能超过 5 QPS。

## 注意事项

如果消息已经被 Pin，则该接口会返回该 Pin 的操作信息。

## 请求

基本 | 
--- | ---
HTTP URL | https://open.feishu.cn/open-apis/im/v1/pins
HTTP Method | POST
接口频率限制 | [1000 次/分钟、50 次/秒](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用**  
            开启任一权限即可 | 获取与发送单聊、群组消息(im:message)  
            添加、 取消 Pin 消息(im:message.pins:write_only)  
            以应用的身份发消息(im:message:send_as_bot)

### 请求头

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
Authorization | string | 是 | `tenant_access_token`  
或  
`user_access_token`  
**值格式**："Bearer `access_token`"  
**示例值**："Bearer u-7f1bcd13fc57d46bac21793a18e560"  
[了解更多：如何选择与获取 access token](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)
Content-Type | string | 是 | **固定值**："application/json; charset=utf-8"

### 请求体

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
message_id | string | 是 | 待 Pin 的消息 ID。ID 获取方式：  
- 调用[发送消息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)接口后，从响应结果的 `message_id` 参数获取。  
- 监听[接收消息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive)事件，当触发该事件后可以从事件体内获取消息的 `message_id`。  
- 调用[获取会话历史消息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/list)接口，从响应结果的 `message_id` 参数获取。  
**示例值**："om_dc13264520392913993dd051dba21dcf"

### 请求体示例
```json
{
    "message_id": "om_dc13264520392913993dd051dba21dcf"
}
```

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
pin | pin | Pin 的操作信息
message_id | string | Pin 的消息 ID
chat_id | string | Pin 消息所在的群聊 ID
operator_id | string | Pin 的操作人 ID
operator_id_type | string | Pin 的操作人 ID 类型。可能值有：  
- open_id：表示操作人为用户，此时 `operator_id` 返回值为用户的 open_id。  
- app_id：表示操作人为应用，此时 `operator_id` 返回值为应用的 app_id。
create_time | string | Pin 的创建时间（毫秒级时间戳）

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "pin": {
            "message_id": "om_dc13264520392913993dd051dba21dcf",
            "chat_id": "oc_a0553eda9014c201e6969b478895c230",
            "operator_id": "ou_7d8a6e6df7621556ce0d21922b676706ccs",
            "operator_id_type": "open_id",
            "create_time": "1615380573211"
        }
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
400 | 230001 | Your request contains an invalid request parameter. | 参数错误，请根据接口返回的错误信息并参考文档检查输入参数。
400 | 230002 | The bot can not be outside the group. | 机器人不在对应群组中。你需要确保应用机器人已添加到待操作的群组中。如何添加机器人参考[机器人使用指南](https://open.feishu.cn/document/ukTMukTMukTM/uATM04CMxQjLwEDN)。
400 | 230006 | Bot ability is not activated. | 应用未启用机器人能力。启用方式参见[如何启用机器人能力](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。
400 | 230111 | Action unavailable as the message will self-destruct soon. | 定时删除的消息无法进行操作。
400 | 232009 | Your request specifies a chat which has already been dissolved. | 相关群组已被解散，无法进行当前操作。
400 | 230011 | The message is recalled. | 消息已被撤回，不支持该操作。
400 | 230013 | Bot has NO availability to this user. | 目标用户（以用户的 user_id/open_id/union_id/email 指定的消息接收者）或单聊用户（以群聊的 chat_id 指定的消息接收者，但 chat_id 对应的群聊类型为单聊 `p2p`）不在应用机器人的可用范围内，或者是在应用的禁用范围内。  
**注意**：如果目标用户已离职，也会报错 230013。  
解决方案：  
1. 登录[开发者后台](https://open.feishu.cn/app)，找到并进入指定应用详情页。  
2. 在左侧导航栏进入 **应用发布** >  **版本管理与发布** 页面，点击 **创建版本**。  
3. 在 **版本详情** 页面，找到 **可用范围** 区域，点击 **编辑**。  
4. 在弹出的对话框内，配置应用的可用范围，将用户添加至可用范围内。  
5. 在页面底部点击 **保存**，并发布应用使配置生效。  
6. （可选）如果以上配置完成后仍报错，则需要联系企业管理员登录[管理后台](https://feishu.cn/admin)，在 **工作台** > **应用管理** 中进入指定应用详情页，在 **应用可用范围** 内查看该用户是否被设置为了 **禁用成员**。  
具体操作参见[配置应用可用范围](https://open.feishu.cn/document/home/introduction-to-scope-and-authorization/availability)。
400 | 230027 | Lack of necessary permissions. | 无权进行本次操作。可能的原因有：  
1. 缺少相应权限，可根据实际的错误信息进行排查。  
2. 未检查到用户授权信息。  
3. 如果需要机器人在外部群操作，则需要先为机器人开启对外共享能力，详情参见[机器人支持外部群和外部用户单聊](https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/develop-robots/add-bot-to-external-group)。
400 | 230045 | The chat not exist. | 消息所属的群聊不存在，请检查群聊是否已解散。
400 | 230046 | No Permission to Pin/Unpin messages in the chat. | 该群设置仅群主和群管理员可以 Pin 消息，请检查操作者在群内的身份。
400 | 230047 | Pin/Unpin message trigger message_id limit. | 对同一条消息 Pin/Unpin 触发限流策略，请降低请求速度，稍后再试。
400 | 230050 | The message is invisible to the operator. | 该消息对于操作者不可见，无法进行本操作。
400 | 230054 | This operation is not supported for this message type. | 该消息类型不支持本操作，详情参见[消息与群组部分API增加不支持的消息类型校验  
](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/breaking-change/unsupported-message-type-verification)。

其他服务端错误码参考：[服务端错误码说明](https://open.feishu.cn/document/ukTMukTMukTM/ugjM14COyUjL4ITN)。
