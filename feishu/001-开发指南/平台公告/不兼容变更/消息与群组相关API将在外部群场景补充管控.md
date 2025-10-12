---
title: "消息与群组相关API将在外部群场景补充管控"
source_url: https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/breaking-change/messenger-and-group-chat-apis-in-external-chat
---
最后更新于 2025-05-23

# 消息与群组相关接口和事件将在外部群场景补充管控
本次变更只影响在外部群内的接口、事件使用，**在非外部群内接口、事件的使用不受任何影响**。

首先判断所属应用属于哪种变更场景，再查看对应变更事项、潜在影响和解决方案。

1. 变更场景一：商店应用
2. 变更场景二：自建应用 且开启了关联组织能力(参见下图)
3. 变更场景三：自建应用 未开启关联组织能力
**注意事项**：**如何确认自建应用开启了关联组织能力**：首先应用需要为自建应用，其次在开发者后台该应用能看到【关联组织应用共享】这个按钮且开关打开，则该应用开启了关联组织能力。

![关联组织中文.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/69c65d5e6fa67dd7e5127de835755381_eSUV4LJTVH.png?height=867&lazyload=true&maxWidth=514&width=1014)

## 变更场景一：商店应用
### 变更事项

为保障产品功能体验的一致性，我们将于 **2025年06月25日** 对消息与群组相关接口和事件在**外部群内**补充管控，**在非外部群内对所有接口、事件的使用不受影响**。管控生效后，在外部群操作以下开放接口将返回错误码，在外部群的以下部分开放事件不会推送给开发者：
1. **`232102` 错误码**：
    - [历史版本] 发送消息（通过指定单聊 chat_id 参数）: POST /open-apis/message/v3/send、POST /open-apis/message/v4/send
    - [历史版本] 加急：POST /open-apis/message/v4/urgent
    - [历史版本] 撤回消息: POST /open-apis/message/v4/recall
    - [历史版本] 获取群信息: GET /open-apis/chat/v4/info、GET /open-apis/chat/v3/info
    - [历史版本] 更新群信息: POST /open-apis/chat/v4/update
    - [历史版本] 将用户拉入群聊：POST /open-apis/chat/v4/chatter/add
    - [历史版本] 将用户移除群聊: POST /open-apis/chat/v4/chatter/delete
    - [历史版本] 获取群成员: GET /open-apis/chat/v4/members
    - [历史版本] 解散群：POST /open-apis/chat/v4/disband
    - [历史版本] 将应用移除群聊: POST /open-apis/bot/v4/remove、POST /open-apis/bot/v3/chatter/delete
    - [历史版本] 将应用拉入群聊: POST /open-apis/bot/v4/add_bot、POST /open-apis/bot/v3/chatter/add
2. **`231021` 错误码**：
    - [添加消息表情回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/create)：POST /open-apis/im/v1/messages/:message_id/reactions
    - [删除消息表情回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/delete)：DELETE /open-apis/im/v1/messages/:message_id/reactions/:reaction_id
    - [获取消息表情回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/list)：PATCH /open-apis/im/v1/messages/:message_id/reactions
2. **`232033` 错误码**：
    - [更新群公告](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-announcement/patch)：PATCH open-apis/im/v1/chats/:chat_id/announcement
    - [获取群公告](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-announcement/get)：GET open-apis/im/v1/chats/:chat_id/announcement
    - [指定群管理员](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-managers/add_managers)：POST open-apis/im/v1/chats/:chat_id/managers/add_managers
    - [删除群管理员](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-managers/delete_managers)：POST open-apis/im/v1/chats/:chat_id/managers/delete_managers
    - [添加会话标签页](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/create)：POST open-apis/im/v1/chats/:chat_id/chat_tabs
    - [删除会话标签页](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/delete_tabs)：Get open-apis/im/v1/chats/:chat_id/chat_tabs/delete_tabs
    - [拉取会话标签页](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/list_tabs)：Get open-apis/im/v1/chats/:chat_id/chat_tabs/list_tabs
    - [会话标签页排序](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/sort_tabs)：POST open-apis/im/v1/chats/:chat_id/chat_tabs/sort_tabs
    - [更新会话标签页](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/update_tabs)：POST open-apis/im/v1/chats/:chat_id/chat_tabs/update_tabs
    - [添加群菜单](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-menu_tree/create)：POST open-apis/im/v1/chats/:chat_id/menu_tree
    - [删除群菜单](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-menu_tree/delete)：DELETE open-apis/im/v1/chats/:chat_id/menu_tree
    - [获取群菜单](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-menu_tree/get)：GET open-apis/im/v1/chats/:chat_id/menu_tree
    - [排序群菜单](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-menu_tree/sort)：POST open-apis/im/v1/chats/:chat_id/menu_tree/sort
    - [修改群菜单元信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-menu_item/patch)：PATCH open-apis/im/v1/chats/:chat_id/menu_items/:menu_item_id
    - [获取群分享链接](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/link)：POST open-apis/im/v1/chats/:chat_id/link
    - [创建小组件] POST /open-apis/im/v1/chats/:chat_id/widgets/batch_create
    - [获取小组件] GET /open-apis/im/v1/chats/:chat_id/widgets
    - [删除小组件] DELETE /open-apis/im/v1/chats/:chat_id/widgets/batch_delete
4. [历史版本] 接收消息事件(message)：在外部群里的消息将不再推送，新版本消息接收事件(im.message.receive_v1)不受影响。
<br>
### 潜在影响
若应用历史通过某种方式进到外部群中，被管控后，在外部群操作不同API将返回不同的错误码：
- [历史版本] 发送消息、[历史版本] 加急、[历史版本] 撤回消息、[历史版本] 获取群信息、[历史版本] 更新群信息、[历史版本] 将用户拉入群聊、[历史版本] 将用户移除群聊、[历史版本] 获取群成员、[历史版本] 解散群、[历史版本] 将应用移除群聊、[历史版本] 将应用拉入群聊: **将返回232102错误码**
- 添加消息表情回复、删除消息表情回复、获取消息表情回复： **将返回231021错误码**
- 更新群公告、获取群公告、指定群管理员、删除群管理员、添加会话标签页、拉取会话标签页、会话标签页排序、更新会话标签页、添加群菜单、删除群菜单、获取群菜单、排序群菜单、修改群菜单元信息、获取群分享链接、创建小组建、获取小组件、删除小组件： **将返回232033错误码**
- [历史版本] 接收消息事件(message)：在外部群里的消息将不再推送。新版本消息接收事件(im.message.receive_v1
)不受影响。
<br>
### 注意
暂无替换方案，如确需在外部群场景使用API，请联系飞书技术咨询。

<br>
若你未能及时确认并调整，管控生效后，可能会导致相关场景受损。
开放平台预计在 **2025年06月25日** 完成升级，请于 **2025年06月25日前** 确认以上信息，并根据情况做好相应适配。

如需适配协助，请点击右下角按钮，联系开放平台技术支持。

## 变更场景二：自建应用 且开启了关联组织能力
### 变更事项

为保障产品功能体验的一致性，我们将于 **2025年07月23日** 对消息与群组相关 API 在外部群内操作补充管控，**在非外部群内对所有接口、事件的使用不受影响**。管控生效后，在外部群操作以下 API 将返回错误码，在外部群的部分开放事件不会推送给开发者：
1. **`232102` 错误码**：
    - [历史版本] 发送消息（通过指定单聊 chat_id 参数）: POST /open-apis/message/v3/send、POST /open-apis/message/v4/send
    - [历史版本] 加急：POST /open-apis/message/v4/urgent
    - [历史版本] 撤回消息: POST /open-apis/message/v4/recall
    - [历史版本] 获取群信息: GET /open-apis/chat/v4/info、GET /open-apis/chat/v3/info
    - [历史版本] 更新群信息: POST /open-apis/chat/v4/update
    - [历史版本] 将用户拉入群聊：POST /open-apis/chat/v4/chatter/add
    - [历史版本] 将用户移除群聊: POST /open-apis/chat/v4/chatter/delete
    - [历史版本] 获取群成员: GET /open-apis/chat/v4/members
    - [历史版本] 解散群：POST /open-apis/chat/v4/disband
    - [历史版本] 将应用移除群聊: POST /open-apis/bot/v4/remove、POST /open-apis/bot/v3/chatter/delete
    - [历史版本] 将应用拉入群聊: POST /open-apis/bot/v4/add_bot、POST /open-apis/bot/v3/chatter/add
2. **`231021` 错误码**：
    - [添加消息表情回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/create)：POST /open-apis/im/v1/messages/:message_id/reactions
    - [删除消息表情回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/delete)：DELETE /open-apis/im/v1/messages/:message_id/reactions/:reaction_id
    - [获取消息表情回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/list)：PATCH /open-apis/im/v1/messages/:message_id/reactions
2. **`232033` 错误码**：
    - [更新群公告](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-announcement/patch)：PATCH open-apis/im/v1/chats/:chat_id/announcement
    - [获取群公告](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-announcement/get)：GET open-apis/im/v1/chats/:chat_id/announcement
    - [指定群管理员](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-managers/add_managers)：POST open-apis/im/v1/chats/:chat_id/managers/add_managers
    - [删除群管理员](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-managers/delete_managers)：POST open-apis/im/v1/chats/:chat_id/managers/delete_managers
    - [添加会话标签页](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/create)：POST open-apis/im/v1/chats/:chat_id/chat_tabs
    - [删除会话标签页](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/delete_tabs)：Get open-apis/im/v1/chats/:chat_id/chat_tabs/delete_tabs
    - [拉取会话标签页](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/list_tabs)：Get open-apis/im/v1/chats/:chat_id/chat_tabs/list_tabs
    - [会话标签页排序](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/sort_tabs)：POST open-apis/im/v1/chats/:chat_id/chat_tabs/sort_tabs
    - [更新会话标签页](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/update_tabs)：POST open-apis/im/v1/chats/:chat_id/chat_tabs/update_tabs
    - [添加群菜单](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-menu_tree/create)：POST open-apis/im/v1/chats/:chat_id/menu_tree
    - [删除群菜单](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-menu_tree/delete)：DELETE open-apis/im/v1/chats/:chat_id/menu_tree
    - [获取群菜单](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-menu_tree/get)：GET open-apis/im/v1/chats/:chat_id/menu_tree
    - [排序群菜单](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-menu_tree/sort)：POST open-apis/im/v1/chats/:chat_id/menu_tree/sort
    - [修改群菜单元信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-menu_item/patch)：PATCH open-apis/im/v1/chats/:chat_id/menu_items/:menu_item_id
    - [获取群分享链接](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/link)：POST open-apis/im/v1/chats/:chat_id/link
    - [创建小组件] POST /open-apis/im/v1/chats/:chat_id/widgets/batch_create
    - [获取小组件] GET /open-apis/im/v1/chats/:chat_id/widgets
    - [删除小组件] DELETE /open-apis/im/v1/chats/:chat_id/widgets/batch_delete
4. [历史版本] 接收消息事件(message)：在外部群里的消息将不再推送，新版本消息接收事件(im.message.receive_v1)不受影响。
<br>
### 潜在影响
被管控后，关联组织在外部群操作下列不同API将返回不同的错误码、事件将不做推送：
- [历史版本] 发送消息、[历史版本] 加急、[历史版本] 撤回消息、[历史版本] 获取群信息、[历史版本] 更新群信息、[历史版本] 将用户拉入群聊、[历史版本] 将用户移除群聊、[历史版本] 获取群成员、[历史版本] 解散群、[历史版本] 将应用移除群聊、[历史版本] 将应用拉入群聊: **将返回232102错误码**
- 添加消息表情回复、删除消息表情回复、获取消息表情回复： **将返回231021错误码**
- 更新群公告、获取群公告、指定群管理员、删除群管理员、添加会话标签页、拉取会话标签页、会话标签页排序、更新会话标签页、添加群菜单、删除群菜单、获取群菜单、排序群菜单、修改群菜单元信息、获取群分享链接、创建小组建、获取小组件、删除小组件： **将返回232033错误码**
- [历史版本] 接收消息事件(message)：在外部群里的消息将不再推送。新版本消息接收事件(im.message.receive_v1)不受影响。
<br>
### 解决方案
关联组织应用在外部群中仅可使用关联组织场景支持的接口和事件，请在【开发者小助手】推送的不兼容消息卡片中查看范围。不在范围的接口和事件在本次管控后不再支持关联组织外部群场景的调用，非外部群场景管控后仍可使用。

<br>
若你未能及时确认并调整，管控生效后，可能会导致相关场景受损。
开放平台预计在 **2025年07月23日** 完成升级，请于 **2025年07月23日前** 确认以上信息，并根据情况做好相应适配。

如需适配协助，请点击右下角按钮，联系开放平台技术支持。

## 变更场景三：自建应用 未开启关联组织能力

### 变更事项

为保障产品功能体验的一致性，我们将于 **2025年06月25日** 对消息与群组相关接口和事件在**外部群内**操作补充管控，**在非外部群内对所有接口、事件的使用不受影响**。管控生效后，若应用没有开启[对外共享](https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/develop-robots/add-bot-to-external-group)能力，则在外部群操作以下 API 将返回错误码，在外部群的部分开放事件不会推送给开发者：
1. **`232102` 错误码**：
    - [历史版本] 发送消息（通过指定单聊 chat_id 参数）: POST /open-apis/message/v3/send、POST /open-apis/message/v4/send
    - [历史版本] 加急：POST /open-apis/message/v4/urgent
    - [历史版本] 撤回消息: POST /open-apis/message/v4/recall
    - [历史版本] 获取群信息: GET /open-apis/chat/v4/info、GET /open-apis/chat/v3/info
    - [历史版本] 更新群信息: POST /open-apis/chat/v4/update
    - [历史版本] 将用户拉入群聊：POST /open-apis/chat/v4/chatter/add
    - [历史版本] 将用户移除群聊: POST /open-apis/chat/v4/chatter/delete
    - [历史版本] 获取群成员: GET /open-apis/chat/v4/members
    - [历史版本] 解散群：POST /open-apis/chat/v4/disband
    - [历史版本] 将应用移除群聊: POST /open-apis/bot/v4/remove、POST /open-apis/bot/v3/chatter/delete
    - [历史版本] 将应用拉入群聊: POST /open-apis/bot/v4/add_bot、POST /open-apis/bot/v3/chatter/add
2. **`231021` 错误码**：
    - [添加消息表情回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/create)：POST /open-apis/im/v1/messages/:message_id/reactions
    - [删除消息表情回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/delete)：DELETE /open-apis/im/v1/messages/:message_id/reactions/:reaction_id
    - [获取消息表情回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/list)：PATCH /open-apis/im/v1/messages/:message_id/reactions
2. **`232033` 错误码**：
    - [更新群公告](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-announcement/patch)：PATCH open-apis/im/v1/chats/:chat_id/announcement
    - [获取群公告](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-announcement/get)：GET open-apis/im/v1/chats/:chat_id/announcement
    - [指定群管理员](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-managers/add_managers)：POST open-apis/im/v1/chats/:chat_id/managers/add_managers
    - [删除群管理员](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-managers/delete_managers)：POST open-apis/im/v1/chats/:chat_id/managers/delete_managers
    - [添加会话标签页](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/create)：POST open-apis/im/v1/chats/:chat_id/chat_tabs
    - [删除会话标签页](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/delete_tabs)：Get open-apis/im/v1/chats/:chat_id/chat_tabs/delete_tabs
    - [拉取会话标签页](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/list_tabs)：Get open-apis/im/v1/chats/:chat_id/chat_tabs/list_tabs
    - [会话标签页排序](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/sort_tabs)：POST open-apis/im/v1/chats/:chat_id/chat_tabs/sort_tabs
    - [更新会话标签页](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-tab/update_tabs)：POST open-apis/im/v1/chats/:chat_id/chat_tabs/update_tabs
    - [添加群菜单](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-menu_tree/create)：POST open-apis/im/v1/chats/:chat_id/menu_tree
    - [删除群菜单](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-menu_tree/delete)：DELETE open-apis/im/v1/chats/:chat_id/menu_tree
    - [获取群菜单](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-menu_tree/get)：GET open-apis/im/v1/chats/:chat_id/menu_tree
    - [排序群菜单](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-menu_tree/sort)：POST open-apis/im/v1/chats/:chat_id/menu_tree/sort
    - [修改群菜单元信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-menu_item/patch)：PATCH open-apis/im/v1/chats/:chat_id/menu_items/:menu_item_id
    - [获取群分享链接](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/link)：POST open-apis/im/v1/chats/:chat_id/link
    - [创建小组件] POST /open-apis/im/v1/chats/:chat_id/widgets/batch_create
    - [获取小组件] GET /open-apis/im/v1/chats/:chat_id/widgets
    - [删除小组件] DELETE /open-apis/im/v1/chats/:chat_id/widgets/batch_delete
4. [历史版本] 接收消息事件(message)：在外部群里的消息将不再推送，新版本消息接收事件(im.message.receive_v1)不受影响。
<br>
### 潜在影响
若应用历史通过某种方式进到外部群中，被管控后，在外部群操作不同API将返回不同的错误码：
- [历史版本] 发送消息、[历史版本] 加急、[历史版本] 撤回消息、[历史版本] 获取群信息、[历史版本] 更新群信息、[历史版本] 将用户拉入群聊、[历史版本] 将用户移除群聊、[历史版本] 获取群成员、[历史版本] 解散群、[历史版本] 将应用移除群聊、[历史版本] 将应用拉入群聊: **将返回232102错误码**
- 添加消息表情回复、删除消息表情回复、获取消息表情回复： **将返回231021错误码**
- 更新群公告、获取群公告、指定群管理员、删除群管理员、添加会话标签页、拉取会话标签页、会话标签页排序、更新会话标签页、添加群菜单、删除群菜单、获取群菜单、排序群菜单、修改群菜单元信息、获取群分享链接、创建小组建、获取小组件、删除小组件： **将返回232033错误码**
- [历史版本] 接收消息事件(message)：在外部群里的消息将不再推送。新版本消息接收事件(im.message.receive_v1
)不受影响。
<br>
### 解决方案
开启[对外共享](https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/develop-robots/add-bot-to-external-group)能力，并使用[对外共享](https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/develop-robots/add-bot-to-external-group)文档中提供的允许在外部群使用的 API。请注意[对外共享](https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/develop-robots/add-bot-to-external-group)能力里消息与群组 API 权限限制。

<br>
若你未能及时确认并调整，管控生效后，可能会导致相关场景受损。
开放平台预计在 **2025年06月25日** 完成升级，请于 **2025年06月25日** 确认以上信息，并根据情况做好相应适配。

如需适配协助，请点击右下角按钮，联系开放平台技术支持。
