---
title: "获取群内 Pin 消息"
source_url: https://open.feishu.cn/document/server-docs/im-v1/pin/list
---
最后更新于 2024-12-11

# 获取群内 Pin 消息

获取指定群、指定时间范围内的所有 Pin 消息。

## 前提条件

- 应用需要开启[机器人能力](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。
- 获取 Pin 消息时，机器人必须在消息所属的会话内。

## 注意事项

- 获取的 Pin 消息按 Pin 的创建时间降序排列。
- 接口默认限流为 50 QPS。

## 请求

基本 | 
--- | ---
HTTP URL | https://open.feishu.cn/open-apis/im/v1/pins
HTTP Method | GET
接口频率限制 | [1000 次/分钟、50 次/秒](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用**  
            开启任一权限即可 | 获取与发送单聊、群组消息(im:message)  
            查看 Pin 消息(im:message.pins:read)  
            获取单聊、群组消息(im:message:readonly)

### 请求头

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
Authorization | string | 是 | `tenant_access_token`  
或  
`user_access_token`  
**值格式**："Bearer `access_token`"  
**示例值**："Bearer u-7f1bcd13fc57d46bac21793a18e560"  
[了解更多：如何选择与获取 access token](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)

### 查询参数

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
chat_id | string | 是 | 待获取 Pin 消息的群组 ID。获取方式参见[群 ID 说明](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-id-description)。  
**示例值**：oc_234jsi43d3ssi993d43545f
start_time | string | 否 | 获取 Pin 消息的起始时间，毫秒级时间戳。  
**注意**：  
- 若未传值默认获取到群聊内最早的 Pin 消息。  
- 传值时需小于 `end_time` 值。  
**示例值**：1658632251800
end_time | string | 否 | 获取 Pin 消息的结束时间，毫秒级时间戳。  
**注意**：  
- 若未传值默认从群聊内最新的 Pin 消息开始获取。  
- 传值时需大于 `start_time` 值。  
**示例值**：1658731646425
page_size | int | 否 | 分页大小，用于限制一次请求返回的数据条目数。  
**示例值**：20  
**默认值**：`20`  
**数据校验规则**：  
- 取值范围：`1` ～ `50`
page_token | string | 否 | 分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果  
**示例值**：GxmvlNRvP0NdQZpa7yIqf_Lv_QuBwTQ8tXkX7w-irAghVD_TvuYd1aoJ1LQph86O-XImC4X9j9FhUPhXQDvtrQ==

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
items | pin\[\] | Pin 的操作信息
message_id | string | Pin 的消息 ID
chat_id | string | Pin 消息所在的群聊 ID
operator_id | string | Pin 的操作人 ID
operator_id_type | string | Pin 的操作人 ID 类型。可能值有：  
- open_id：表示操作人为用户，此时 `operator_id` 返回值为用户的 open_id。  
- app_id：表示操作人为应用，此时 `operator_id` 返回值为应用的 app_id。
create_time | string | Pin 的创建时间（毫秒级时间戳）
has_more | boolean | 是否还有更多项
page_token | string | 分页标记，当 has_more 为 true 时，会同时返回新的 page_token，否则不返回 page_token

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "items": [
            {
                "message_id": "om_dc13264520392913993dd051dba2123",
                "chat_id": "oc_a0553eda9014c201e6969b478895123",
                "operator_id": "ou_7d8a6e6df7621556ce0d21922b6767123",
                "operator_id_type": "open_id",
                "create_time": "1615380573211"
            }
        ],
        "has_more": true,
        "page_token": "GxmvlNRvP0NdQZpa7yIqf_Lv_QuBwTQ8tXkX7w-irAghVD_TvuYd1aoJ1LQph86O-XImC4X9j9FhU123=="
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
400 | 230001 | Your request contains an invalid request parameter. | 参数错误，请根据接口返回的错误信息并参考文档检查输入参数。
400 | 230002 | The bot can not be outside the group. | 机器人不在对应群组中。你需要确保应用机器人已添加到待操作的群组中。如何添加机器人参考[机器人使用指南](https://open.feishu.cn/document/ukTMukTMukTM/uATM04CMxQjLwEDN)。
400 | 230006 | Bot ability is not activated. | 应用未启用机器人能力。启用方式参见[如何启用机器人能力](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。
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
400 | 230048 | Get chat pins trigger app_id limit. | 获取 Pin 消息触发频率限制。请降低请求速度，稍后再试。

其他服务端错误码参考：[服务端错误码说明](https://open.feishu.cn/document/ukTMukTMukTM/ugjM14COyUjL4ITN)。
