<!--
title: 步骤五：通过消息机器人发送审批信息
id: 7122074496182812674
fullPath: /home/quickly-develop-three-party-approvals/three-party-approval-instance-synchronization
updatedAt: 1690196649000
source: https://open.feishu.cn/document/quickly-develop-three-party-approvals/three-party-approval-instance-synchronization
-->
# 步骤五：通过消息机器人发送审批信息

当审批系统产生新的审批流时，你可以通过调用[发送审批Bot消息](/ssl:ttdoc/ukTMukTMukTM/ugDNyYjL4QjM24CO0IjN)接口，通过飞书消息机器人将审批信息发送至相应的审批人，在及时通知审批人的同时，审批人可以通过消息内容快速处理审批。

## 操作步骤

:::note
由于审批 Bot 消息相关的 OpenAPI 目前暂不支持通过 API 调试台进行调试，因此本章节通过`curl`命令行工具调用接口。
:::

通过本地终端的命令行工具，运行以下命令调用`发送审批Bot消息`接口推送审批消息。

```Bash
curl --location --request POST 'https://www.feishu.cn/approval/openapi/v1/message/send' \
--header 'Authorization: Bearer t-g1046tgkRWD2CRJSHO4W4BCBWULQM2JQSBPM2xxx' \
--header 'Content-Type: application/json; charset=utf-8' \
--data-raw '{
        "template_id": "1008",
        "user_id": "454dg7x4",
        "uuid": "uuiddemo1234",
        "approval_name": "@i18n@1",
        "title_user_id": "454dg7x4",
        "title_user_id_type": "user_id",
        "comment": "@i18n@2",
        "content": {
                "user_id": "",
                "user_id_type": "",
                "department_id": "",
                "summaries": [{
                        "summary": "@i18n@3"
                }]
        },
        "note": "@i18n@4",
        "actions": [{
                "action_name": "DETAIL",
                "url": "https://www.examlpe.com",
                "android_url": "https://www.examlpe.com",
                "ios_url": "https://www.examlpe.com",
                "pc_url": "https://www.examlpe.com"
        }],
        "action_configs": [{
                "action_type": "APPROVE",
                "is_need_reason": true,
                "is_reason_required": true,
                "is_need_attachment": true,
                "next_status": "APPROVED"
        }, {
                "action_type": "REJECT",
                "action_name": "@i18n@5",
                "next_status": "REJECTED"
        }],
        "action_callback": {
                "action_callback_url": "https://www.examlpe.com",
                "action_callback_token": "",
                "action_callback_key": "",
                "action_context": ""
        },
        "i18n_resources": [{
                "locale": "en_us",
                "is_default": true,
                "texts": {
                        "@i18n@1": "Temporary release",
                        "@i18n@2": "Disapproval",
                        "@i18n@3": "Need to modify",
                        "@i18n@4": "From OA,please access through the internal network.",
                        "@i18n@5": "Cancel"
                }
        }]
}'
```

配置说明：

- 在 curl 命令行中，需要配置接口的请求方式（`POST`），以及请求 URL（`https://www.feishu.cn/approval/openapi/v1/message/send`）。

- 在`--header`变量中，需要为 **Authorization** 字段配置应用访问凭证 tenant_access_token，格式为`Bearer t-xxxx`。
    

    你可以参考[步骤二：获取访问凭证](/ssl:ttdoc/home/quickly-develop-three-party-approvals/creating-applications-and-requesting-permissions)，获取 tenant_access_token。

    
- 在`--data-raw`变量中，配置请求体。关键参数配置说明如下，关于其他参数配置说明以及 Bot 提供的消息模板说明，参见[发送审批Bot消息](/ssl:ttdoc/ukTMukTMukTM/ugDNyYjL4QjM24CO0IjN)。
    
    - **template_id**：模板 ID，本示例使用 1008 消息模板。
    
    - **user_id**：消息推送的目标用户 user_id。
    
    - **approval_name**：卡片标题。这里使用`@i8n@`定义 key，然后在`i18n_resources`参数中，为该 key 赋 value。
    
    - **title_user_id**：卡片标题中的提交人、审批人等用户 ID。
    
    - **title_user_id_type**：title_user_id 字段对应的 ID 类型。示例配置 user_id。
    
    - **actions**：设置消息卡片的行动区。本示例提供了查看卡片详情（DETAIL）的入口。
    
    - **action_callback**：三方系统的操作回调 URL，任务审批人在同意或拒绝操作后，审批中心调用该地址通知三方系统。
    
    - **action_configs**：支持的快捷审批操作。本示例提供了同意（APPROVE）、拒绝（REJECT）交互按钮。

查看接口调用结果：

1. 在命令行执行`curl`命令后，查看回显数据信息。
    
:::note
你需要保存回显的`message_id`值，后续用于发送更新后的审批 Bot 消息。
:::
    
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/beb8c998982f6dec905076259484ed93_3P5cPN8NRo.png?height=576&lazyload=true&maxWidth=600&width=2186)

2. 在消息推送的目标用户飞书客户端内，查看机器人发送的审批信息。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b1a79e579876d2940c581ddc6889f828_MqljCvG5qA.png?height=1526&lazyload=true&maxWidth=600&width=2014)

    支持以下审批方式：
    
    - 审批方式一：审批人可以通过消息卡片的 **同意**、**拒绝** 按钮快速完成审批。
        

        关于三方快捷审批回调配置说明，参见[三方快捷审批回调](/ssl:ttdoc/ukTMukTMukTM/ukjNyYjL5YjM24SO2IjN/quick-approval-callback)。

        
    - 审批方式二：审批人可以通过 **点击卡片查看详情** 入口，跳转三方审批系统处理审批。