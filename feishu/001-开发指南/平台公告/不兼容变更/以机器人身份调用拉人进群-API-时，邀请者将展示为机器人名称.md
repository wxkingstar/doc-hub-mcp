---
title: "以机器人身份调用拉人进群 API 时，邀请者将展示为机器人名称"
source_url: https://open.feishu.cn/document/platform-notices/breaking-change/prompts-use-robot-name-when-robot-add-user-to-group
---
最后更新于 2024-10-10

# 以机器人身份调用拉人进群 API 时，邀请者将展示为机器人名称
### 变更事项
当前，使用机器人身份调用 [将用户或机器人拉入群聊](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-members/create) API 时，若满足以下三个条件，群组内的进群系统消息和历史记录被提示“群主”（而非展示机器人名称）拉人进群：
- 群内开启“仅群主和群管理员可添加群成员”
- 该机器人是该群的创建者，但不是群主或管理员
- 该机器人已开通 **更新应用创建群聊的信息（历史版本）** 或 **更新应用所创建群的群信息** 权限

为保障产品体验的一致性，自 **2024年11月11日** 起，当满足上述条件时，进群系统消息和历史记录中的邀请者将展示为对应的机器人名称。
