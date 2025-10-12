---
title: "使用卡片 JSON 数据发送消息"
source_url: https://open.feishu.cn/document/deprecated-guide/message-card/send-message-card/send-messages-using-card-json-data
---
最后更新于 2024-08-20

# 使用卡片 JSON 数据发送消息

本文以调用[发送消息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)接口为例，介绍如何使用消息卡片的 JSON 数据发送消息。warning
该文档为历史消息卡片文档，已不再维护。了解对应新版文档，参考[发送卡片](https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/feishu-cards/send-feishu-card)。
## 准备工作

- 已通过[消息卡片搭建工具](https://open.feishu.cn/document/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/message-card-builder)构建了一张消息卡片。本文所要发送的消息卡片 JSON 示例如下：

```json
    {
      "elements": [
        {
          "tag": "div",
          "text": {
            "content": "This is the plain text",
            "tag": "plain_text"
          }
        }
      ],
      "header": {
        "template": "blue",
        "title": {
          "content": "This is the title",
          "tag": "plain_text"
        }
      }
    }
	```

- 调用服务端 API 发送消息，需要先在[飞书开发者后台](https://open.feishu.cn/app)创建一个应用，并为应用开通机器人能力。

你可通过开放平台提供的开发教程，了解应用机器人能力，详情参见[快速开发机器人](https://open.feishu.cn/document/home/develop-a-bot-in-5-minutes/create-an-app)。

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/3c3b4e11da0943715989dbd6d6e85d1d_tROsWzSaTM.png?height=1424&lazyload=true&maxWidth=600&width=2874)

- 在创建好应用内（或在存量已开通机器人能力的应用内），确保已申请了调用 **发送消息** 接口所需的权限（**获取与发送单聊、群组消息**、**以应用的身份发消息**）。

为应用申请 API 权限的具体操作，可参见[申请 API 权限](https://open.feishu.cn/document/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN)。

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/384617cfde44696868984ddb99aac5df_prkjn2eNBu.png?height=1266&lazyload=true&maxWidth=600&width=2262)

- 确保应用的能力、权限配置生效。
	- 你可以使用测试版应用完成测试环境的接口调用测试。能力说明参见[测试企业与人员](https://open.feishu.cn/document/home/introduction-to-custom-app-development/testing-enterprise-and-personnel-functions)。
	- 如果已完成测试，需要在生产环境发送消息卡片，则需要将应用发布上线。具体操作可参见[企业自建应用开发流程](https://open.feishu.cn/document/home/introduction-to-custom-app-development/self-built-application-development-process)或[发布商店应用](https://open.feishu.cn/document/uMzNwEjLzcDMx4yM3ATM/uYjMyUjL2IjM14iNyITN)。

## 发送消息卡片

本文将通过 API 调试台介绍如何发送消息卡片。在调试台调用 API 时，支持查看各开发语言调用 API 的示例代码。

1. 登录 [API 调试台](https://open.feishu.cn/api-explorer)。

2. 切换用于发送消息的应用。

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/c676be04e8d4fdeebf3259a31634ee3b_kycTfxwAyk.png?height=1386&lazyload=true&maxWidth=600&width=2882)

2. 在 API 列表的搜索框，搜索 **发送消息**。

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/1bde12f7035c34a323ee0470d81d6117_V1nrpTKOnP.png?height=1292&lazyload=true&maxWidth=600&width=2882)

3. 配置请求数据。

- **请求头**：获取应用的 tenant_access_token。

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/f188b46750cacb97a009cedfd829c142_EhdwdLjwbY.png?height=646&lazyload=true&maxWidth=600&width=2882)

- **查询参数**：设置消息接收对象的 ID 类型。

如选择 `open_id`、`user_id`、`union_id`、`email` 表示接收对象为指定用户。

如选择 `chat_id` 表示接收对象为群组，该方式需要确保应用（机器人）已被添加至匹配的群组内。操作说明可参见[机器人使用指南](https://open.feishu.cn/document/ukTMukTMukTM/uATM04CMxQjLwEDN)。

- **请求体**：示例配置与参数说明如下所示。

```json
        // 如需使用该 JSON 示例调用 API，则需要修改参数取值为实际值，并去掉 // 开头的注释行。
        {
            // receive_id 需要传入与 receive_id_type 类型一致的 ID 数据。例如用户 open_id 的值。
            "receive_id": "ou_7fbf96b1234",
            // msg_type需要传入发送消息的类型。消息卡片的类型值为：interactive
            "msg_type": "interactive",
            // content 需要传入消息卡片的 JSON 数据。注意：数据需要符合接口参数的要求。
            "content": "{\"elements\":[{\"tag\":\"div\",\"text\":{\"content\":\"This is the plain text\",\"tag\":\"plain_text\"}}],\"header\":{\"template\":\"blue\",\"title\":{\"content\":\"This is the title\",\"tag\":\"plain_text\"}}}"
        }
		```

- **权限配置**：确保调用接口所需的权限已生效。

5. 在页面右上角，点击 **开始调试**。

页面会展示调用成功的响应数据。

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/a919c53d9114ffd51efe1c725c82a330_qc7H6ReUM4.png?height=1394&lazyload=true&maxWidth=600&width=2244)

你可以在 **示例代码** 页签内，查看各开发语言调用 API 的示例。

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/73bb0222a18b074b76310a8781f397ec_wWMDucjqKm.png?height=994&lazyload=true&maxWidth=600&width=2238)

6. 登录消息接收对象的飞书客户端，查看消息卡片推送通知。

例如，你设置的消息接收对象为用户 open_id，则需要使用该用户账号登录飞书客户端。

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/77134e2856c45bc678b6cc1eb7d19b04_n1EvaX6JGo.png?height=290&lazyload=true&maxWidth=600&width=1384)

## 相关文档

如何发送包含卡片变量的消息卡片，可参见[使用卡片 ID 发送消息](https://open.feishu.cn/document/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/send-message-card/send-message-using-card-id)。
