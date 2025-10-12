---
title: "消息相关事件及 API 将进行历史消息可见性管控"
source_url: https://open.feishu.cn/document/platform-notices/breaking-change/visibility-control-of-historical-messages
last_remote_update: 2024-10-14
last_remote_update_timestamp: 1728877977000
---
最后更新于 2024-10-14

# 消息相关事件及 API 将进行历史消息可见性管控
### 变更事项
为保障产品功能体验的一致性，我们将于 **2024年11月14日** 对消息的相关事件和 API 进行群历史消息可见性管控。管控后，当群聊关闭“新成员可查看历史消息”设置时：
- 操作者（包括用户和机器人）无法对不可见的消息进行回复、更新、加急、添加表情回复、获取消息内容、查询已读等操作，新版本接口将报错 230050，历史版本接口将报错 10050；
- 不再向应用推送其不可见消息的接收消息事件、撤回消息事件、新增消息表情回复事件和删除消息表情回复事件。

> 是否跟随客户端版本：不跟版<br> 
> 预计生效时间：2024-11-14<br> 

<br>
**具体受影响的事件与接口包括**：
1. [接收消息事件](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive)：im.message.receive_v1
2. [撤回消息事件](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/recalled)：im.message.recalled_v1
3. [新增消息表情回复事件](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/events/created)：im.message.reaction.created_v1
4. [删除消息表情回复事件](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/events/deleted)：im.message.reaction.deleted_v1
5. [回复消息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/reply)：POST /open-apis/im/v1/messages/:message_id/reply
6. [撤回消息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/delete)：DELETE /open-apis/im/v1/messages/:message_id
7. [获取指定消息的内容](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/get)：GET /open-apis/im/v1/messages/:message_id
8. [更新应用发送的消息卡片](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/patch)：PATCH /open-apis/im/v1/messages/:message_id
9. [查询消息已读信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/read_users)：GET /open-apis/im/v1/messages/:message_id/read_users
10. [发送应用内加急](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/urgent_app)：PATCH /open-apis/im/v1/messages/:message_id/urgent_app
11. [发送短信加急](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/urgent_sms)：PATCH /open-apis/im/v1/messages/:message_id/urgent_sms
12. [发送电话加急](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/urgent_phone)：PATCH /open-apis/im/v1/messages/:message_id/urgent_phone
13. [添加消息表情回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/create)：POST /open-apis/im/v1/messages/:message_id/reactions
14. [删除消息表情回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/delete)：DELETE /open-apis/im/v1/messages/:message_id/reactions/:reaction_id
15. [获取消息表情回复](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/list)：GET /open-apis/im/v1/messages/:message_id/reactions
16. [历史版本] 发送消息，且填写 root_id：/open-apis/message/v3/send、/open-apis/message/v4/send
17. [历史版本] 发送消息加急：/open-apis/message/v3/urgent、/open-apis/message/v4/urgent

### 潜在影响
当群聊关闭“新成员可查看历史消息”设置时，若操作不可见的历史消息，新版本接口将返回 `230050` 错误码，历史版本接口将返回 `10050` 错误码。

### 解决方案
如确需获取入群前的不可见历史消息，可联系群主或群管理员开启“新成员可查看历史消息”设置，操作者重新入群。<br>
特殊情况说明：对于群聊中不可见的话题消息，还可通过群内其他用户在话题中 @ 操作者的方式实现可见。

<br>

若你未能及时确认并调整，管控生效后，可能会导致相关场景受损。<br>
开放平台预计在 **2024年11月14日** 完成升级，请于 **2024年11月14日前** 确认以上信息，并根据情况做好相应适配。<br>
<br> 如需适配协助，请联系开放平台技术支持。
