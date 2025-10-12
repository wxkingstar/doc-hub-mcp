<!--
title: 步骤二：发送互动型消息卡片
id: 6999971130074628124
fullPath: /home/interactive-message-card-sending/message-card-reference
updatedAt: 1708327696000
source: https://open.feishu.cn/document/historical-version/interactive-message-card-sending/message-card-reference
-->
# 步骤二：发送互动型消息卡片

本章节介绍如何构建互动型消息卡片，并调用[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)接口发送消息卡片至用户。在企业审批流程场景中，你可以在审批系统内添加调用开放平台 OpenAPI 的代码逻辑，使系统在创建审批流后，自动调用 OpenAPI 发送预设的互动型消息卡片至审批人。

## 操作步骤

1. 构建互动型消息卡片。
    
    消息卡片内容示例如下，该示例配置了一个可交互的按钮（button），关于消息卡片 button 组件的详细说明，参见[button](/ssl:ttdoc/ukTMukTMukTM/uEzNwUjLxcDM14SM3ATN)。
    
:::note
按钮组件中配置了回传交互字段`value`，该字段值自定义配置，你需要确保值唯一。后续当用户点击该 button 时，`value`内容会以 POST 请求到应用配置的消息卡片请求网址，服务端接收请求后，需要通过该字段值，匹配相应的消息卡片并进行业务处理。
:::
    
```
{
  "i18n_elements": {
    "zh_cn": [
      {
        "tag": "div",
        "text": {
          "content": "发布审核：",
          "tag": "plain_text"
        }
      },
      {
        "tag": "action",
        "actions": [
          {
            "tag": "button",
            "text": {
              "tag": "plain_text",
              "content": "完成「全量发布」"
            },
            "value": {
              "button_type": "public_publish",
              "button_id": "162695861xxxx"
            },
            "type": "primary"
          }
        ]
      }
    ]
  }
}
```

示例效果如下图所示。
    
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/d14a9b86947b0b5b3085333bb73fb02d_Yo3wXDrOGA.png?height=212&lazyload=true&maxWidth=450&width=812)

2. 调用[发送消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)接口，发送互动型消息卡片。
    
    本教程以 API 调试台操作为例，介绍如何调用发送消息接口。
    
    1. 登录 [API 调试台](https://open.feishu.cn/api-explorer) 。
    
    2. 在左侧点击 **切换应用**，并选择在步骤一中已创建的应用。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/39135f46288eaf4a4c5b922ed949084c_3Hv9X1E6JV.png?height=1552&lazyload=true&maxWidth=600&width=2882)

    3. 在左侧 **查看鉴权凭证** 区域，获取应用的 **tenant_access_token**。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8e98d936923d00aa428807e90766196b_BKWLWYUVlR.png?height=1444&lazyload=true&maxWidth=600&width=2880)

    4. 在左侧 API 列表中，选择 **消息** > **消息管理** > **发送消息**。
    
    5. 配置参数信息，并点击 **开始调试**。
        
        - **请求头**：默认已在 **Authorization** 字段中配置了 **tenant_access_token**。
        
        - **查询参数**：**receive_id_type** 字段需要设置消息接收者的 ID 类型。示例选择 **user_id**，即用户在某个租户内的身份 ID。
        
        - **请求体**：设置消息接收者 ID（**receive_id**）、消息类型（**msg_type**）以及消息内容（**content**）。请求体 JSON 格式示例配置如下：
            ```
          {
              "receive_id": "ou_9e038156a0a7aaa29e6c58b6e1b2xxxx",
              "msg_type": "interactive",
              "content": "{\"i18n_elements\":{\"zh_cn\":[{\"tag\":\"div\",\"text\":{\"content\":\"发布审核：\",\"tag\":\"plain_text\"}},{\"tag\":\"action\",\"actions\":[{\"tag\":\"button\",\"text\":{\"tag\":\"plain_text\",\"content\":\"完成「全量发布」\"},\"value\":{\"button_type\":\"public_publish\",\"button_id\":\"162695861xxx\"},\"type\":\"primary\"}]}]}}"
          }
            ```

        
        调用成功的回显信息如下图所示。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/42c10c150a93a8d52384b50c34ad1697_B9pEjG5sMe.png?height=1104&lazyload=true&maxWidth=600&width=2244)
        
        此时，使用消息接收人的用户信息登录飞书客户端，可以查看由应用机器人推送的消息卡片内容。
        
        ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/58ba9a96dcc797434e9b810297cf48ba_Tk7S58F3dc.png?height=722&lazyload=true&maxWidth=600&width=2012)