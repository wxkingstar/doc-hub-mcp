---
title: "消息与群组相关 API 将在单聊中根据应用可用范围进行补充管控"
source_url: https://open.feishu.cn/document/platform-notices/breaking-change/app-availability-range-additional-control
---
最后更新于 2024-11-27

# 消息与群组相关 API 将在单聊中根据应用可用范围进行补充管控

### 变更事项

为保障产品功能体验的一致性，我们将于 **2024年12月30日** 对消息与群组相关 API 根据应用的[可用范围](https://open.feishu.cn/document/home/introduction-to-scope-and-authorization/availability)进行补充性管控，涉及应用与用户的单聊。管控生效后，若单聊中的用户不在应用的可用范围中，应用在与用户的单聊中调用下列接口进行操作时，将返回错误码：
1. **`230013` 错误码**：
    - [发送消息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)（通过指定单聊 chat_id 参数）：POST /open-apis/im/v1/messages
    -  [回复消息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/reply)：POST /open-apis/im/v1/messages/:message_id/reply
    -  [更新应用发送的消息卡片](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/patch)：PATCH /open-apis/im/v1/messages/:message_id
    -  [撤回消息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/delete)：DELETE /open-apis/im/v1/messages/:message_id
    -  [转发消息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/forward)：POST /open-apis/im/v1/messages/:message_id/forward
    -  [合并转发消息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/merge_forward)：POST /open-apis/im/v1/messages/merge_forward
    -  [转发话题](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/thread/forward)：POST /open-apis/im/v1/threads/:thread_id/forward
    -  [Pin 消息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/pin/create)：POST /open-apis/im/v1/pins
    -  [移除 Pin 消息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/pin/delete)：DELETE /open-apis/im/v1/pins/:message_id
2. **`231022` 错误码**：
    - [添加消息表情回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/create)：POST /open-apis/im/v1/messages/:message_id/reactions
    - [删除消息表情回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/delete)：DELETE /open-apis/im/v1/messages/:message_id/reactions/:reaction_id
3. **`232024` 错误码**：
    - [更新群置顶](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-top_notice/put_top_notice)：POST /open-apis/im/v1/chats/:chat_id/top_notice/put_top_notice
    - [撤销群置顶](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-top_notice/delete_top_notice)：POST /open-apis/im/v1/chats/:chat_id/top_notice/delete_top_notice
    - [添加会话标签页](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/create)：POST /open-apis/im/v1/chats/:chat_id/chat_tabs
    - [删除会话标签页](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/delete_tabs)：DELETE /open-apis/im/v1/chats/:chat_id/chat_tabs/delete_tabs
    - [更新会话标签页](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/update_tabs)：POST /open-apis/im/v1/chats/:chat_id/chat_tabs/update_tabs
    - [会话标签页排序](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/sort_tabs)： POST /open-apis/im/v1/chats/:chat_id/chat_tabs/sort_tabs
4. **`230038` 错误码**：
	- [历史版本] 发送消息（通过指定单聊 chat_id 参数）：/open-apis/message/v3/send、/open-apis/message/v4/send
5. **`11225` 错误码**：
    - [历史版本] 撤回消息：/open-apis/message/v4/recall
    - [历史版本] 发送消息加急：/open-apis/message/v3/urgent、/open-apis/message/v4/urgent

特别地，商店应用须使用用户所属租户的 tenant_access_token 进行操作，否则该用户也将被认为不在应用的可用范围中。

> 是否跟随客户端版本：不跟版 <br>
> 预计生效时间：2024-12-30

<br>
### 潜在影响

当用户不在应用的可用范围中时，若应用在与用户的单聊中操作上述 API，将返回下列错误码：
- 发送消息、回复消息、更新应用发送的消息卡片、撤回消息、转发消息、合并转发消息、转发话题、Pin 消息、移除 Pin 消息：` 230013  `错误码；
- 添加消息表情回复、删除消息表情回复：`231022` 错误码；
- 更新群置顶、撤销群置顶、添加会话标签页、删除会话标签页、更新会话标签页、会话标签页排序： `232024` 错误码；
- [历史版本] 撤回消息、[历史版本] 发送消息加急：`11225` 错误码；
- [历史版本] 发送消息：`230038` 错误码。

<br>
### 解决方案

将用户加入可用范围后再进行操作，操作方式详见：[配置应用可用范围](https://open.feishu.cn/document/home/introduction-to-scope-and-authorization/availability)。

<br>
若你未能及时确认并调整，管控生效后，可能会导致相关场景受损。
开放平台预计在 **2024年12月30日** 完成升级，请于 **2024年12月30日前** 确认以上信息，并根据情况做好相应适配。

如需适配协助，请联系开放平台技术支持。
