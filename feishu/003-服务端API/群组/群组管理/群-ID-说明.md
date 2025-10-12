---
title: "群 ID 说明"
source_url: https://open.feishu.cn/document/server-docs/group/chat/chat-id-description
---
最后更新于 2024-12-18

# 群 ID 说明

调用[创建群](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/create)接口成功创建群组时，系统会自动生成一个群 ID，通过响应参数 `chat_id` 返回。群 ID 是一个群组的唯一标识，使用该 ID 可调用涉及群组的开放平台 OpenAPI，例如，[发送消息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)、[将用户或机器人拉入群聊](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-members/create)、[获取群信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/get)等。

`chat_id`的格式是由`oc_`开头的字符串，例如：`oc_a0553eda9014c201e6969b478895c230`。

## 群 ID 获取方式

不同场景的群 ID 获取方式不同，具体说明如下。

### 通过 API 调试台一键获取群 ID

1. 登录 [API 调试台](https://open.feishu.cn/api-explorer)。
2. 选择一个需要使用群 ID 的接口，例如[指定群管理员](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-managers/add_managers)。

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/b669083d660aeb099159b98726549389_swRviVFNUT.png?height=1386&lazyload=true&maxWidth=600&width=2882)
3. 在 **路径参数** 页签，点击 **选择群组**。
4. 在弹出的对话框中选择群组，并点击 **复制群组 ID**。

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/9631b7d92678c58c02af9195f490bf4c_oP07OtZS9X.png?height=1174&lazyload=true&maxWidth=600&width=1702)

成功复制后，即可将群组 ID 粘贴到对应参数值中使用，如下图所示。

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/5934bfba29ebc75a0fc5a1ea83d656b1_7aafWBEyf0.png?height=236&lazyload=true&maxWidth=600&width=592)

### 调用 API 获取存量群 ID

1. 创建应用并[启用机器人能力](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。
2. 将该应用机器人添加到需要获取群 ID 的群组内。

在未知群 ID 的情况下，需要打开飞书客户端，在指定群组的 **···** > **设置** > **群机器人** > **添加机器人** 内添加应用机器人。

3. 调用[获取用户或机器人所在的群列表](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/list)或者[搜索对用户或机器人可见的群列表](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/search)接口，获取目标群组的 chat_id。

### 调用 API 新建群时获取

1. 创建应用并[启用机器人能力](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。
2. 以应用身份调用[创建群](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/create)接口，从响应结果中获取 `chat_id`。

### 获取单聊的 chat_id

群模式分为 **群组**、**话题**、**单聊** 三类，该类型可通过[获取群信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/get)接口的响应参数 `chat_mode` 查看，其中的 **单聊** 类型不同于 **群组**、**话题** 类型，单聊是指机器人与用户单独聊天的窗口。想要获取 **单聊** 类型的 chat_id，需要以下操作：

1. 创建应用并[启用机器人能力](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-enable-bot-ability)。
2. 使用应用调用[发送消息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)接口，向指定用户发送消息，并从响应结果中获取 `chat_id`。

使用该 `chat_id` [获取群信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/get)时，响应参数 `chat_mode` 取值为 `p2p`，即单聊。
