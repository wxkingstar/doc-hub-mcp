---
title: "sendMessageCard"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/open-ability/chat/sendmessagecard
---
最后更新于 2025-03-12

# sendMessageCard(Object object)

发送[消息卡片](https://open.feishu.cn/document/ukTMukTMukTM/uczM3QjL3MzN04yNzcDN)到指定会话。

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V3.19.0+ | V3.19.0+ | V3.19.0+ | V7.39.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fsend-msg-card%2Fsend-msg-card)
网页应用 | V3.44.0+ | V3.44.0+ | V3.44.0+ | V7.39.0+ | 预览

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
shouldChooseChat | boolean | 否 | false | 是否在选择会话页面中发送卡片，如果该字段设置为true则会跳转到选择会话页面并进行后续操作来完成卡片的发送。  
**Notice**：- Android/iOS端 [V3.42.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上版本支持  
- PC端 [V3.43.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上版本支持  
- 该参数的优先级高于 openChatIDs  
- shouldChooseChat 和 openChatIDs两者必填一个  
- 若shouldChooseChat取值为false，则在小程序调用该接口前，需要确保已经调用 [requestAccess](https://open.feishu.cn/document/uYjL24iN/uUzMuUzMuUzM/requestaccess) ( 如需兼容 飞书V6.9.0 以下版本，可使用 [login](https://open.feishu.cn/document/uYjL24iN/uYzMuYzMuYzM) ) ；网页应用[鉴权](https://open.feishu.cn/document/uYjL24iN/uEzM4YjLxMDO24SMzgjN)后即可调用  
**示例值**：true
chooseChatParams | object | 否 |  | 若 `shouldChooseChat` 输入为true，则可以定制选择会话的入参，参考[选择会话说明](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/subscriptions/subscriptions-v1/sendmessagecard-choosechat-parameter-description)。  
**Notice**：- Android/iOS端 [V3.42.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上版本支持  
- PC端 [V3.43.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上版本支持  
**示例值**：  
{"allowCreateGroup":true,"multiSelect":true,"externalChat":false,"confirmTitle":"testTitle"}
openChatIDs | string[] | 否 |  | 会话的[open_chat_id](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-id-description)列表。  
**Notice**：- 最大数量10  
- shouldChooseChat 和 openChatIDs 两者必填一个  
**示例值**：["chatID1","chatID2"]
openIDs | string[] | 否 |  | 用户的[open_id](https://open.feishu.cn/document/home/user-identity-introduction/open-id)。  
**Notice**：- 飞书[V6.6.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上版本支持    
- shouldChooseChat:true时，openIDs参数无效  
- openChatIDs不为空时，openIDs参数无效    
- 最大数量10  
**示例值**：["openID1","openID2"]
triggerCode | string | 否 |  | 该属性仅在**聊天框“+”菜单**场景中使用，使用`triggerCode`时，会将卡片发送到经“加号菜单”打开小程序时的会话中。详细使用方法见[聊天框“+”菜单](https://open.feishu.cn/document/ukTMukTMukTM/ukDN1YjL5QTN24SO0UjN)  
**Notice**：- `triggerCode`和`openChatIDs`参数传其一即可，两个都传的时候`openChatIDs`优先使用；  
- iOS: 5.26之前版本优先使用`triggerCode`，5.26及之后版本优先使用`openChatIDs`。  
- Harmony端：暂不支持设置该字段。
cardContent | object | 否 |  | 消息卡片内容。  
**Notice**：注意：卡片请求体大小不能超过20k
&emsp;  
                    ∟  
                &nbsp;  
                    msg_type | string | 是 |  | 消息的类型，此处固定填 "interactive"  
**示例值**："interactive"
&emsp;  
                    ∟  
                &nbsp;  
                    update_multi | boolean | 否 | false | 配置卡片的更新方式。  
**共享卡片**：值为"true"，声明更新卡片时，对所有这张卡片的接收人都生效。  
**独享卡片**：值为"false"，声明更新卡片时，只更新操作用户的卡片，或在请求更新时通过`open_ids`字段指定更新部分用户的卡片。  
**Notice**：注意：**共享**和**独享**的概念仅适用于交互后被更新的卡片。一开始发送的卡片不存在此概念的区别，即所有人看到的卡片一样。
&emsp;  
                    ∟  
                &nbsp;  
                    card | object | 是 |  | 消息卡片的描述内容，参考卡片结构：[消息卡片参考](https://open.feishu.cn/document/home/mass-messaging-to-designated-departments/message-card-content-reference)。
withAdditionalMessage | boolean | 否 | false | 若 `withAdditionalMessage` 输入为true，则在发送卡片时开启发送附带留言的能力。  
**示例值**：true  
**Notice**：飞书[V4.10.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上版本支持

## 输出

`success`返回对象的扩展属性：

名称 | 数据类型 | 描述
--- | --- | ---
errMsg | string | 错误消息。
sendCardInfo | string[] | 发送消息卡片的message信息（只有消息发送动作产生时才会返回该字段；例如没有传`openChatIDs`，用户取消发送，解析卡片内容失败等情况都不会返回该字段）。   
**Notice**：飞书[V4.2.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上版本支持
&emsp;  
                    ∟  
                &nbsp;  
                    status | number | 发送消息的状态码，0表示发送成功。
&emsp;  
                    ∟  
                &nbsp;  
                    openChatId | number | [open_chat_id](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-id-description)
&emsp;  
                    ∟  
                &nbsp;  
                    openMessageId | string | [open_message_id](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/intro#ac79c1c2)

`fail`返回对象的扩展属性：

名称 | 数据类型 | 描述
--- | --- | ---
errMsg | string | 错误消息。
errCode | number | 错误码。
sendCardInfo | object[] | 发送消息卡片的message信息（只有消息发送动作产生时才会返回该字段；例如没有传`openChatIDs`，用户取消发送，解析卡片内容失败等情况都不会返回该字段）。  
**Notice**：飞书[V4.2.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上版本支持
&emsp;  
                    ∟  
                &nbsp;  
                    status | number | 发送消息的状态码，0表示发送成功。
&emsp;  
                    ∟  
                &nbsp;  
                    openChatId | number | [open_chat_id](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-id-description)
&emsp;  
                    ∟  
                &nbsp;  
                    openMessageId | string | [open_message_id](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/intro#ac79c1c2)
failedOpenChatIDs | string[] | 发送失败的会话[open_chat_id](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-id-description)列表。
additionalMessageInfo | string[] | 发送消息卡片的留言信息返回结果（只有发送留言失败的时候才会返回该信息，发送留言成功时不会返回该信息）。  
**Notice**：飞书[V4.10.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上版本支持
&emsp;  
                    ∟  
                &nbsp;  
                    status | number | 发送消息的状态码，0表示发送成功。
&emsp;  
                    ∟  
                &nbsp;  
                    openChatId | number | [open_chat_id](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-id-description)
&emsp;  
                    ∟  
                &nbsp;  
                    message | string | [open_message_id](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/intro#ac79c1c2)

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fsend-msg-card%2Fsend-msg-card)
	预览网页应用

</div> 

```js
tt.sendMessageCard({
    "shouldChooseChat": true,
    "chooseChatParams": {},
    "openChatIDs": [
        "oc_a8a2a40a61589ec720f709bd45a2a9eb"
    ],
    "cardContent": {
        "msg_type": "interactive",
        "update_multi": false,
        "card": {
            "elements": [
                {
                    "tag": "div",
                    "text": {
                        "tag": "plain_text",
                        "content": "Content module"
                    }
                }
            ]
        }
    },
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`sendMessageCard fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：
```json
{
    "sendCardInfo": [
        {
            "openMessageId": "om_925327317135d242832d17fbfab96064",
            "openChatId": "oc_a8a2a40a61589ec720f709bd45a2a9eb",
            "status": 0
        }
    ],
    "errMsg": "sendMessageCard:ok"
}
```

`fail`返回对象示例：
```json
{
    "errCode": -4,
    "errMsg": "sendMessageCard:fail"
}
``` 

## 错误码

fail 返回对象中会包含[errCode属性](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，代表错误码，具体错误码列表参见：

错误码 | 描述 | 排查建议
--- | --- | ---
`-1` | `openChatIDs`为空 | 参数错误，请检查参数后重试。
`-2` | `openChatIDs`数量超过10 | 参数错误，请检查参数后重试。
`-3` | `cardContent`为空 | 参数错误，请检查参数后重试。
`-4` | `cardContent`格式化失败 | 消息卡片格式错误，请检查后重试。
`-5` | 发送失败 | 内部错误，请稍后重试，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)。
`-6` | 用户取消发送 | 
`-7` | 其他错误 | 内部错误，请稍后重试，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)。
`-8` | `openChatIDs`中的参数错误 | 请检查是不是[open_chat_id](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-id-description)类型（如果是[open_id](https://open.feishu.cn/document/home/user-identity-introduction/open-id)将会导致此错误）。
`-9` | 未知错误 | 未知错误，请稍后重试，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)。
`-10` | 选择会话失败 | 内部错误，请检查会话id是否正确，并请稍后重试，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)。
`42406` | 发送留言失败 | 内部错误，请检查参数是否正确，并请稍后重试，仍然出现可以[咨询客服](https://applink.feishu.cn/client/helpdesk/open?id=6626260912531570952&extra=%7B%22channel%22%3A14%2C%22created_at%22%3A1614493146%2C%22scenario_id%22%3A6885151765134622721%2C%22signature%22%3A%22ca94c408b966dc1de2083e5bbcd418294c146e98%22%7D)。
