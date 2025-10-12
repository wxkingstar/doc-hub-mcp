<!--
title: 示例代码解释
id: 7457433042430525444
fullPath: /uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/develop-a-card-interactive-bot/explanation-of-example-code
updatedAt: 1741693986000
source: https://open.feishu.cn/document/develop-a-card-interactive-bot/explanation-of-example-code
-->
# 示例代码解释
本教程提供了卡片交互机器人 Demo 的多语言示例代码， 通过本文你可以了解各语言的业务代码逻辑。点击[此链接](https://github.com/larksuite/lark-samples/tree/main/card_interaction_bot)前往 GitHub 查看源码。 


:::html
<md-alert type="tip">
要获取其他接口的调用示例代码，可在 API 调试台调用接口成功后，复制调试台自动生成的示例代码，详情参考[在调试台发起 API 调用](/ssl:ttdoc/uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/how-to-call-a-server-side-api/introduction#42c7c09a)。

</md-alert>
:::
### Java 示例代码

业务代码路径：`card_interaction_bot/java/src/main/java/com/lark/oapi/Main.java`。复制该路径前往 GitHub 或代码包中找到 `Main.java` 文件。


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a0670a9f1c1258cc6185e8ace1a4b4d3_OXHLlDvlJP.png?height=282&lazyload=true&maxWidth=600&width=1075)

代码实现逻辑说明如下。

1.  构建 API Client 用于调用 OpenAPI。
1. 分别构造欢迎卡片、告警卡片，并构建发送逻辑。
1. 使用 EventDispatcher 注册事件处理器，订阅并处理以下事件：
    - 订阅[用户进入与机器人的会话](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-access_event/events/bot_p2p_chat_entered)事件（onP2ChatAccessEventBotP2pChatEnteredV1）。用户进入会话后，会发送欢迎卡片
    - 订阅[机器人自定义菜单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/application-v6/bot/events/menu)事件（onP2BotMenuV6）。用户点击悬浮菜单的“发起告警”按钮后，会发送告警卡片
    - 订阅[接收消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive)事件（onP2MessageReceiveV1）。用户发送消息后，会发送告警卡片
1. 订阅[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)回调，处理用户点击卡片中的按钮后触发的回调：
    - 当用户点击 **去体验** 按钮时，响应回调请求，保持卡片原内容不变，同时发送告警卡片
    - 当用户点击 **处理完成** 按钮时，读取用户填写的处理情况说明信息，再通过卡片回传交互 toast 提示操作成功，并将告警卡片更新为告警处理完成卡片
1. 配置长连接功能，并关联事件处理器。
1. 长连接用于建立项目与开放平台的数据连接通道，用于订阅、接收事件。功能介绍参考[使用长连接接收事件](/ssl:ttdoc/ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/event-subscription-configure-/request-url-configuration-case#d286cc88)。

代码与注释：
```java
package com.lark.oapi;

import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;

import com.google.gson.JsonParser;
import com.lark.oapi.core.utils.Jsons;
import com.lark.oapi.event.EventDispatcher;
import com.lark.oapi.event.cardcallback.P2CardActionTriggerHandler;
import com.lark.oapi.event.cardcallback.model.CallBackCard;
import com.lark.oapi.event.cardcallback.model.CallBackToast;
import com.lark.oapi.event.cardcallback.model.P2CardActionTrigger;
import com.lark.oapi.event.cardcallback.model.P2CardActionTriggerResponse;
import com.lark.oapi.service.application.ApplicationService;
import com.lark.oapi.service.application.v6.model.P2BotMenuV6;
import com.lark.oapi.service.im.ImService;
import com.lark.oapi.service.im.v1.model.CreateMessageReq;
import com.lark.oapi.service.im.v1.model.CreateMessageReqBody;
import com.lark.oapi.service.im.v1.model.CreateMessageResp;
import com.lark.oapi.service.im.v1.model.P2ChatAccessEventBotP2pChatEnteredV1;
import com.lark.oapi.service.im.v1.model.P2MessageReceiveV1;
import com.lark.oapi.service.im.v1.model.ext.MessageTemplate;
import com.lark.oapi.service.im.v1.model.ext.MessageTemplateData;


public class Main {

    private static final String APP_ID = System.getenv("APP_ID");
    private static final String APP_SECRET = System.getenv("APP_SECRET");
    private static final String WELCOME_CARD_ID = System.getenv("WELCOME_CARD_ID");
    private static final String ALERT_CARD_ID = System.getenv("ALERT_CARD_ID");
    private static final String ALERT_RESOLVED_CARD_ID = System.getenv("ALERT_RESOLVED_CARD_ID");
    private static final ZoneId SHANGHAI_ZONE_ID = ZoneId.of("Asia/Shanghai");

    /**
     * 创建 LarkClient 对象，用于请求OpenAPI。
     * Create LarkClient object for requesting OpenAPI
     */
    private static final Client client = new Client.Builder(APP_ID, APP_SECRET).build();

    /*
     * 
     * 发送欢迎卡片
     * Send welcome card
     * 
     */

    private static void sendWelcomeCard(String openID) throws Exception {
        /*
         * 构造欢迎卡片
         * Construct a welcome card
         * https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/feishu-cards/send-feishu-card#718fe26b
         */
        String replyContent = new MessageTemplate.Builder()
                .data(new MessageTemplateData.Builder().templateId(WELCOME_CARD_ID)
                        .templateVariable(new HashMap<String, Object>() {
                            {
                                put("open_id", openID);
                            }
                        })
                        .build())
                .build();
        
        /**
         * 使用发送OpenAPI发送通知卡片，你可以在API接口中打开 API 调试台，快速复制调用示例代码
         * Use send OpenAPI to send notice card. You can open the API debugging console in the API interface and quickly copy the sample code for API calls.
         * https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create
         */
        CreateMessageReq req = CreateMessageReq.newBuilder()
                .receiveIdType("open_id")
                .createMessageReqBody(CreateMessageReqBody.newBuilder()
                        .receiveId(openID)
                        .msgType("interactive")
                        .content(replyContent)
                        .build())
                .build();

        // 发起请求
		CreateMessageResp resp = client.im().v1().message().create(req);

		// 处理服务端错误
		if(!resp.success()) {
			System.out.println(String.format("code:%s,msg:%s,reqId:%s, resp:%s",
				resp.getCode(), resp.getMsg(), resp.getRequestId(), Jsons.createGSON(true, false).toJson(JsonParser.parseString(new String(resp.getRawResponse().getBody(), StandardCharsets.UTF_8)))));
			return;
		}

		// 调用成功，打印返回结果
		System.out.println(Jsons.DEFAULT.toJson(resp.getData()));
	
    }

    /**
     * 发送告警卡片
     * Send alarm card
     */
    private static void sendAlarmCard(String receiveIdType, String receiveId) throws Exception {
        /*
         * 构造告警卡片
         * Construct an alarm card
         * https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/feishu-cards/send-feishu-card#718fe26b
         */
        String replyContent = new MessageTemplate.Builder()
                .data(new MessageTemplateData.Builder().templateId(ALERT_CARD_ID)
                    .templateVariable(new HashMap<String, Object>() {
                        {
                            put("alarm_time", LocalDateTime.now(SHANGHAI_ZONE_ID).format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
                        }
                    })
                    .build())
                .build();

        /**
         * 使用发送OpenAPI发送告警卡片，根据传入的receiveIdType不同，可发送到用户单聊或群聊中。你可以在API接口中打开 API 调试台，快速复制调用示例代码
         * Use the Send OpenAPI to send an alarm card. Depending on the value of the incoming receiveIdType, it can be sent to an individual user chat or a group chat. You can open the API debugging console in the API interface and quickly copy the sample code for API calls.
         * https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create
         */
        CreateMessageReq req = CreateMessageReq.newBuilder()
                .receiveIdType(receiveIdType)
                .createMessageReqBody(CreateMessageReqBody.newBuilder()
                        .receiveId(receiveId)
                        .msgType("interactive")
                        .content(replyContent)
                        .build())
                .build();

        
        // 发起请求
		CreateMessageResp resp = client.im().v1().message().create(req);

		// 处理服务端错误
		if(!resp.success()) {
			System.out.println(String.format("code:%s,msg:%s,reqId:%s, resp:%s",
				resp.getCode(), resp.getMsg(), resp.getRequestId(), Jsons.createGSON(true, false).toJson(JsonParser.parseString(new String(resp.getRawResponse().getBody(), StandardCharsets.UTF_8)))));
			return;
		}

		// 调用成功，打印返回结果
		System.out.println(Jsons.DEFAULT.toJson(resp.getData()));

    }

    /**
     * 注册事件处理器。
     * Register event handler.
     */
    private static final EventDispatcher EVENT_HANDLER = EventDispatcher.newBuilder("", "") // 长连接不需要这两个参数，请保持空字符串
            /**
             * 处理用户进入机器人单聊事件
             * handle user enter bot single chat event
             * https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-access_event/events/bot_p2p_chat_entered
             */
            .onP2ChatAccessEventBotP2pChatEnteredV1(new ImService.P2ChatAccessEventBotP2pChatEnteredV1Handler() {
                @Override
                public void handle(P2ChatAccessEventBotP2pChatEnteredV1 event) throws Exception {
                    System.out.printf("[ onP2ChatAccessEventBotP2pChatEnteredV1 access ], data: %s\n",
                            Jsons.DEFAULT.toJson(event.getEvent()));
                    String openID = event.getEvent().getOperatorId().getOpenId();
                    sendWelcomeCard(openID);
                }

            })

            /**
             * 处理用户点击机器人菜单事件
             * handle user click bot menu event
             * https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/application-v6/bot/events/menu
             */
            .onP2BotMenuV6(new ApplicationService.P2BotMenuV6Handler() {
                @Override
                public void handle(P2BotMenuV6 event) throws Exception {
                    System.out.printf("[ onP2BotMenuV6 access ], data: %s\n", Jsons.DEFAULT.toJson(event.getEvent()));
                    /**
                     * 通过菜单 event_key 区分不同菜单。 你可以在开发者后台配置菜单的event_key
                     * Use event_key to distinguish different menus. You can configure the event_key
                     * of the menu in the developer console.
                     */
                    if ("send_alarm".equals(event.getEvent().getEventKey())) {
                        String openID = event.getEvent().getOperator().getOperatorId().getOpenId();
                        sendAlarmCard("open_id", openID);
                    }

                }
            })

            /**
             * 接收用户发送的消息（包括单聊和群聊），接受到消息后发送告警卡片
             * Register event handler to handle received messages, including individual chats and group chats.
             * https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive
             */
            .onP2MessageReceiveV1(new ImService.P2MessageReceiveV1Handler() {
                @Override
                public void handle(P2MessageReceiveV1 event) throws Exception {
                    System.out.printf("[ onP2MessageReceiveV1 access ], data: %s\n", Jsons.DEFAULT.toJson(event.getEvent()));
                    String type = event.getEvent().getMessage().getChatType();
                    String openID = event.getEvent().getSender().getSenderId().getOpenId();
                    String chatID = event.getEvent().getMessage().getChatId();
                    if (type.equals("group")) {
                        sendAlarmCard("chat_id", chatID);
                    } else if (type.equals("p2p")) {
                        sendAlarmCard("open_id", openID);
                    }

                }
            })

            /**
             * 处理卡片按钮点击回调
             * handle card button click callback
             * https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication
             */
            .onP2CardActionTrigger(new P2CardActionTriggerHandler() {
                @Override
                public P2CardActionTriggerResponse handle(P2CardActionTrigger event) throws Exception {
                    System.out.printf("[ P2CardActionTrigger access ], data: %s\n", Jsons.DEFAULT.toJson(event.getEvent()));
                    String openID = event.getEvent().getOperator().getOpenId();
                    

                    /**
                     * 通过 action 区分不同按钮点击，你可以在卡片搭建工具配置按钮的action。此处处理用户点击了欢迎卡片中的发起告警按钮
                     * Use action to distinguish different buttons. You can configure the action of the button in the card building tool.
                     * Here, handle the situation where the user clicks the "Initiate Alarm" button on the welcome card.
                     * 
                     */
                    if (event.getEvent().getAction().getValue().get("action").equals("send_alarm")) {

                        /**
                         * 响应回调请求，保持卡片原内容不变
                         * Respond to the callback request and keep the original content of the card unchanged.
                         */
                        P2CardActionTriggerResponse resp = new P2CardActionTriggerResponse();
                        sendAlarmCard("open_id", openID);
                        return resp;
                    }

                    /**
                     * 通过 action 区分不同按钮， 你可以在卡片搭建工具配置按钮的action。此处处理用户点击了告警卡片中的已处理按钮
                     * Use action to distinguish different buttons. You can configure the action of the button in the card building tool.
                     * Here, handle the scenario where the user clicks the "Mark as resolved" button on the alarm card.
                     */

                    if (event.getEvent().getAction().getValue().get("action").equals("complete_alarm")) {                       
                        /**
                         * 读取告警卡片中用户填写的备注文本信息
                         * Read the note text information filled in by the user in the alarm card.
                         */
                        String notes;
                        if (event.getEvent().getAction().getFormValue() != null) {
                            notes =String.valueOf(event.getEvent().getAction().getFormValue().get("notes_input"));
                        } else {
                            notes= "";
                        }
                        System.out.printf("[ notes ], data: %s\n", notes);
                        /**
                         * 通过卡片回传交互toast提示操作成功，并返回一个新卡片：已处理的卡片
                         * Through the card callback interaction, display a toast to indicate successful operation and return a new card: the resolved card.
                         */
                        P2CardActionTriggerResponse resp = new P2CardActionTriggerResponse();
                        CallBackToast toast = new CallBackToast();
                        toast.setType("info");
                        toast.setContent("已处理完成！");
                        toast.setI18n(new HashMap<String, String>() {
                            {
                                put("zh_cn", "已处理完成！");
                                put("en_us", "Resolved！");
                            }
                        });

                        CallBackCard card = new CallBackCard();
                        card.setType("template");
                        card.setData(new MessageTemplateData.Builder().templateId(ALERT_RESOLVED_CARD_ID)
                                .templateVariable(new HashMap<String, Object>() {
                                    {
                                        put("alarm_time", event.getEvent().getAction().getValue().get("time"));
                                        put("open_id", openID);
                                        put("complete_time", LocalDateTime.now(SHANGHAI_ZONE_ID).format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
                                        put("notes", notes);
                                    }
                                }).build());

                        resp.setCard(card);
                        resp.setToast(toast);
                        return resp;
                    }
                    return null;
                }
            }).build();

    /**
     * 启动长连接，并注册事件处理器。
     * Start long connection and register event handler.
     * https://open.feishu.cn/document/server-docs/event-subscription-guide/event-subscription-configure-/request-url-configuration-case#d286cc88
     */
    private static final com.lark.oapi.ws.Client wsClient = new com.lark.oapi.ws.Client.Builder(APP_ID, APP_SECRET)
            .eventHandler(EVENT_HANDLER).build(); // 静态成员变量，只初始化一次

    public static void main(String[] args) {
        System.out.println("Starting bot...");
        wsClient.start();
    }
}
```

### Python 示例代码

业务代码路径：`card_interaction_bot/python/main.py`，复制该路径前往 GitHub 或代码包中找到 `main.py` 文件。


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/16aea52e818e72c138bfcb471f9338e5_9Kv2RRyfMV.png?height=493&lazyload=true&maxWidth=600&width=1040)

代码实现逻辑说明如下。
1.  构建 API Client 用于调用 OpenAPI。
1. 分别构造欢迎卡片、告警卡片，并构建发送逻辑。
3. 注册事件处理器，订阅并处理以下事件：
   - 订阅[用户进入与机器人的会话](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-access_event/events/bot_p2p_chat_entered)事件（onP2ChatAccessEventBotP2pChatEnteredV1）。用户进入会话后，会发送欢迎卡片
    - 订阅[机器人自定义菜单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/application-v6/bot/events/menu)事件（onP2BotMenuV6）。用户点击悬浮菜单的 **发起告警** 按钮后，会发送告警卡片
    - 订阅[接收消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive)事件（onP2MessageReceiveV1）。用户发送消息后，会发送告警卡片
1. 订阅[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)回调，处理用户点击卡片中的按钮后触发的回调：
    - 当用户点击 **去体验** 按钮时，响应回调请求，保持卡片原内容不变，同时发送告警卡片
    - 当用户点击 **处理完成** 按钮时，读取用户填写的处理情况说明信息，再通过卡片回传交互 toast 提示操作成功，并将告警卡片更新为告警处理完成卡片
1. 配置长连接功能，并关联事件处理器。
1. 长连接用于建立项目与开放平台的数据连接通道，用于订阅、接收事件。功能介绍参考[使用长连接接收事件](/ssl:ttdoc/ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/event-subscription-configure-/request-url-configuration-case#d286cc88)。

代码与注释：
```python
import os
import json
from datetime import datetime, timezone, timedelta

import lark_oapi as lark
from lark_oapi.api.im.v1 import *
from lark_oapi.api.application.v6 import *
from lark_oapi.event.callback.model.p2_card_action_trigger import (
    P2CardActionTrigger,
    P2CardActionTriggerResponse,
)

WELCOME_CARD_ID = os.getenv("WELCOME_CARD_ID")
ALERT_CARD_ID = os.getenv("ALERT_CARD_ID")
ALERT_RESOLVED_CARD_ID = os.getenv("ALERT_RESOLVED_CARD_ID")


# 发送消息
# Send a message
# # https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create
def send_message(receive_id_type, receive_id, msg_type, content):
    request = (
        CreateMessageRequest.builder()
        .receive_id_type(receive_id_type)
        .request_body(
            CreateMessageRequestBody.builder()
            .receive_id(receive_id)
            .msg_type(msg_type)
            .content(content)
            .build()
        )
        .build()
    )

    # 使用发送OpenAPI发送通知卡片，你可以在API接口中打开 API 调试台，快速复制调用示例代码
    # Use send OpenAPI to send notice card. You can open the API debugging console in the API interface and quickly copy the sample code for API calls.
    # https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create
    response = client.im.v1.message.create(request)
    if not response.success():
        raise Exception(
            f"client.im.v1.message.create failed, code: {response.code}, msg: {response.msg}, log_id: {response.get_log_id()}"
        )
    return response


# 发送欢迎卡片
# Construct a welcome card
# https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/feishu-cards/send-feishu-card#718fe26b
def send_welcome_card(open_id):
    content = json.dumps(
        {
            "type": "template",
            "data": {
                "template_id": WELCOME_CARD_ID,
                "template_variable": {"open_id": open_id},
            },
        }
    )
    return send_message("open_id", open_id, "interactive", content)


# 发送告警卡片
# Construct an alarm card
# https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/feishu-cards/send-feishu-card#718fe26b
def send_alarm_card(receive_id_type, receive_id):
    content = json.dumps(
        {
            "type": "template",
            "data": {
                "template_id": ALERT_CARD_ID,
                "template_variable": {
                    "alarm_time": datetime.now(timezone(timedelta(hours=8))).strftime("%Y-%m-%d %H:%M:%S (UTC+8)"),
                },
            },
        }
    )
    return send_message(receive_id_type, receive_id, "interactive", content)


# 处理用户进入机器人单聊事件
# handle user enter bot single chat event
# https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-access_event/events/bot_p2p_chat_entered
def do_p2_im_chat_access_event_bot_p2p_chat_entered_v1(
    data: P2ImChatAccessEventBotP2pChatEnteredV1,
) -> None:
    print(f"[ onP2ChatAccessEventBotP2pChatEnteredV1 access ], data: {data}")
    open_id = data.event.operator_id.open_id
    send_welcome_card(open_id)


# 处理用户点击机器人菜单事件
# handle user click bot menu event
# https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/application-v6/bot/events/menu
def do_p2_application_bot_menu_v6(data: P2ApplicationBotMenuV6) -> None:
    print(f"[ onP2BotMenuV6 access ], data: {data}")
    open_id = data.event.operator.operator_id.open_id
    event_key = data.event.event_key

    # 通过菜单 event_key 区分不同菜单。 你可以在开发者后台配置菜单的event_key
    # Use event_key to distinguish different menus. You can configure the event_key of the menu in the developer console.
    if event_key == "send_alarm":
        send_alarm_card("open_id", open_id)


# 接收用户发送的消息（包括单聊和群聊），接受到消息后发送告警卡片
# Register event handler to handle received messages, including individual chats and group chats.
# https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive
def do_p2_im_message_receive_v1(data: P2ImMessageReceiveV1) -> None:
    print(f"[ onP2MessageReceiveV1 access ], data: {data}")
    chat_type = data.event.message.chat_type
    chat_id = data.event.message.chat_id
    open_id = data.event.sender.sender_id.open_id

    if chat_type == "group":
        send_alarm_card("chat_id", chat_id)
    elif chat_type == "p2p":
        send_alarm_card("open_id", open_id)


# 处理卡片按钮点击回调
# handle card button click callback
# https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication
def do_p2_card_action_trigger(data: P2CardActionTrigger) -> P2CardActionTriggerResponse:
    print(f"[ P2CardActionTrigger access ], data: {data}")
    open_id = data.event.operator.open_id
    action = data.event.action

    # 通过 action 区分不同按钮点击，你可以在卡片搭建工具配置按钮的action。此处处理用户点击了欢迎卡片中的发起告警按钮
    # Use action to distinguish different buttons. You can configure the action of the button in the card building tool.
    # Here, handle the situation where the user clicks the "Initiate Alarm" button on the welcome card.
    if action.value["action"] == "send_alarm":
        # 响应回调请求，保持卡片原内容不变
        # Respond to the callback request and keep the original content of the card unchanged.
        send_alarm_card("open_id", open_id)
        return P2CardActionTriggerResponse({})

    # 通过 action 区分不同按钮， 你可以在卡片搭建工具配置按钮的action。此处处理用户点击了告警卡片中的已处理按钮
    # Use action to distinguish different buttons. You can configure the action of the button in the card building tool.
    # Here, handle the scenario where the user clicks the "Mark as resolved" button on the alarm card.
    if action.value["action"] == "complete_alarm":
        # 读取告警卡片中用户填写的备注文本信息
        # Read the note text information filled in by the user in the alarm card.
        notes = ""
        if action.form_value and "notes_input" in action.form_value:
            notes = str(action.form_value["notes_input"])

        content = {
            "toast": {
                "type": "info",
                "content": "已处理完成！",
                "i18n": {"zh_cn": "已处理完成！", "en_us": "Resolved!"},
            },
            "card": {
                "type": "template",
                "data": {
                    "template_id": ALERT_RESOLVED_CARD_ID,
                    "template_variable": {
                        "alarm_time": action.value["time"],
                        "open_id": open_id,
                        "complete_time": datetime.now(timezone(timedelta(hours=8))).strftime("%Y-%m-%d %H:%M:%S (UTC+8)"),
                        "notes": notes,
                    },
                },
            },
        }
        return P2CardActionTriggerResponse(content)


# 注册事件回调
# Register event handler.
event_handler = (
    lark.EventDispatcherHandler.builder("", "")
    .register_p2_im_chat_access_event_bot_p2p_chat_entered_v1(
        do_p2_im_chat_access_event_bot_p2p_chat_entered_v1
    )
    .register_p2_application_bot_menu_v6(do_p2_application_bot_menu_v6)
    .register_p2_im_message_receive_v1(do_p2_im_message_receive_v1)
    .register_p2_card_action_trigger(do_p2_card_action_trigger)
    .build()
)


# 创建 LarkClient 对象，用于请求OpenAPI, 并创建 LarkWSClient 对象，用于使用长连接接收事件。
# Create LarkClient object for requesting OpenAPI, and create LarkWSClient object for receiving events using long connection.
client = lark.Client.builder().app_id(lark.APP_ID).app_secret(lark.APP_SECRET).build()
wsClient = lark.ws.Client(
    lark.APP_ID,
    lark.APP_SECRET,
    event_handler=event_handler,
    log_level=lark.LogLevel.DEBUG,
)


def main():
    print("Starting bot...")
    # 启动长连接，并注册事件处理器。
    # Start long connection and register event handler.
    # https://open.feishu.cn/document/server-docs/event-subscription-guide/event-subscription-configure-/request-url-configuration-case#d286cc88
    wsClient.start()


if __name__ == "__main__":
    main()
```

### Go 示例代码

业务代码路径：`card_interaction_bot/go/main.go`，复制该路径前往 GitHub 或代码包中找到 `main.go` 文件。


![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/650868a2fd4214ca2c6df4830dd2c103_lnx1SjQkCD.png?height=544&lazyload=true&maxWidth=600&width=1046)

代码实现逻辑说明如下。
1.  构建 API Client 用于调用 OpenAPI。
1. 分别构造欢迎卡片、告警卡片，并构建发送逻辑。
3. 使用 dispatcher.NewEventDispatcher 注册事件处理器，订阅并处理以下事件：
   - 订阅[用户进入与机器人的会话](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-access_event/events/bot_p2p_chat_entered)事件（onP2ChatAccessEventBotP2pChatEnteredV1）。用户进入会话后，会发送欢迎卡片
    - 订阅[机器人自定义菜单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/application-v6/bot/events/menu)事件（onP2BotMenuV6）。用户点击悬浮菜单的 **发起告警** 按钮后，会发送告警卡片
    - 订阅[接收消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive)事件（onP2MessageReceiveV1）。用户发送消息后，会发送告警卡片
1. 订阅[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)回调，处理用户点击卡片中的按钮后触发的回调：
    - 当用户点击 **去体验** 按钮时，响应回调请求，保持卡片原内容不变，同时发送告警卡片
    - 当用户点击 **处理完成** 按钮时，读取用户填写的处理情况说明信息，再通过卡片回传交互 toast 提示操作成功，并将告警卡片更新为告警处理完成卡片
1. 配置长连接功能，并关联事件处理器。
1. 长连接用于建立项目与开放平台的数据连接通道，用于订阅、接收事件。功能介绍参考[使用长连接接收事件](/ssl:ttdoc/ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/event-subscription-configure-/request-url-configuration-case#d286cc88)。


代码与注释：
```go
package main

import (
	"context"
	"encoding/json"
	"fmt"
	"os"
	"time"

	lark "github.com/larksuite/oapi-sdk-go/v3"
	larkcore "github.com/larksuite/oapi-sdk-go/v3/core"
	"github.com/larksuite/oapi-sdk-go/v3/event/dispatcher"
	"github.com/larksuite/oapi-sdk-go/v3/event/dispatcher/callback"
	larkapplication "github.com/larksuite/oapi-sdk-go/v3/service/application/v6"
	larkim "github.com/larksuite/oapi-sdk-go/v3/service/im/v1"
	larkws "github.com/larksuite/oapi-sdk-go/v3/ws"
)

var cstZone *time.Location = time.FixedZone("CST", 8*3600) // 东八区（+8小时）

/**
 * 发送欢迎卡片
 * Construct a welcome card
 * https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/feishu-cards/send-feishu-card#718fe26b
 *
 */
func sendWelcomeCard(client *lark.Client, openID string) {
	WELCOME_CARD_ID := os.Getenv("WELCOME_CARD_ID")

	card := &callback.Card{
		Type: "template",
		Data: &callback.TemplateCard{
			TemplateID: WELCOME_CARD_ID,
			TemplateVariable: map[string]interface{}{
				"open_id": openID,
			},
		},
	}

	content, err := json.Marshal(card)
	if err != nil {
		fmt.Println(err)
		return
	}

	/* 使用发送OpenAPI发送通知卡片，你可以在API接口中打开 API 调试台，快速复制调用示例代码
	* Use send OpenAPI to send notice card. You can open the API debugging console in the API interface and quickly copy the sample code for API calls.
	* https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create
	 */
	resp, err := client.Im.Message.Create(context.Background(), larkim.NewCreateMessageReqBuilder().
		ReceiveIdType("open_id").
		Body(larkim.NewCreateMessageReqBodyBuilder().
			MsgType("interactive").
			ReceiveId(openID).
			Content(string(content)).
			Build()).
		Build())

	if err != nil {
		fmt.Println(err)
		return
	}
	if !resp.Success() {
		fmt.Println(resp.Code, resp.Msg, resp.RequestId())
		return
	}
	fmt.Println(resp.Data.MessageId)
}

/**
 * 构造告警卡片
 * Construct an alarm card
 * https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/feishu-cards/send-feishu-card#718fe26b
 *
 */
func sendAlarmCard(client *lark.Client, receiveIdType string, receiveId string) {
	ALERT_CARD_ID := os.Getenv("ALERT_CARD_ID")

	card := &callback.Card{
		Type: "template",
		Data: &callback.TemplateCard{
			TemplateID: ALERT_CARD_ID,
			TemplateVariable: map[string]interface{}{
				"alarm_time": time.Now().In(cstZone).Format("2006-01-02 15:04:05 (UTC+8)"),
			},
		},
	}

	fmt.Println(time.Now().In(cstZone).Format("2006-01-02 15:04:05 (UTC+8)"))

	content, err := json.Marshal(card)
	if err != nil {
		fmt.Println(err)
		return
	}
	/*
	* 使用发送OpenAPI发送告警卡片，根据传入的receiveIdType不同，可发送到用户单聊或群聊中。你可以在API接口中打开 API 调试台，快速复制调用示例代码
	* Use the Send OpenAPI to send an alarm card. Depending on the value of the incoming receiveIdType, it can be sent to an individual user chat or a group chat. You can open the API debugging console in the API interface and quickly copy the sample code for API calls.
	* https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create
	 */

	resp, err := client.Im.Message.Create(context.Background(), larkim.NewCreateMessageReqBuilder().
		ReceiveIdType(receiveIdType).
		Body(larkim.NewCreateMessageReqBodyBuilder().
			MsgType("interactive").
			ReceiveId(receiveId).
			Content(string(content)).
			Build()).
		Build())

	if err != nil {
		fmt.Println(err)
		return
	}
	if !resp.Success() {
		fmt.Println(resp.Code, resp.Msg, resp.RequestId())
		return
	}
	fmt.Println(resp.Data.MessageId)
}

func main() {
	app_id := os.Getenv("APP_ID")
	app_secret := os.Getenv("APP_SECRET")
	ALERT_RESOLVED_CARD_ID := os.Getenv("ALERT_RESOLVED_CARD_ID")

	/**
	 * 创建 LarkClient 对象，用于请求OpenAPI。
	 * Create LarkClient object for requesting OpenAPI
	 */
	client := lark.NewClient(app_id, app_secret)

	/**
	 * 注册事件处理器。
	 * Register event handler.
	 */
	eventHandler := dispatcher.NewEventDispatcher("", "").
		/**
		 	* 处理用户进入机器人单聊事件
			* handle user enter bot single chat event
			* https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-access_event/events/bot_p2p_chat_entered
		*/
		OnP2ChatAccessEventBotP2pChatEnteredV1(func(ctx context.Context, event *larkim.P2ChatAccessEventBotP2pChatEnteredV1) error {

			fmt.Printf("[ OnP2ChatAccessEventBotP2pChatEnteredV1 access ], data: %s\n", larkcore.Prettify(event))
			sendWelcomeCard(client, *event.Event.OperatorId.OpenId)
			return nil
		}).
		/**
		* 处理用户点击机器人菜单事件
		* handle user click bot menu event
		* https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/application-v6/bot/events/menu
		 */
		OnP2BotMenuV6(func(ctx context.Context, event *larkapplication.P2BotMenuV6) error {
			/**
			 * 通过菜单 event_key 区分不同菜单。 你可以在开发者后台配置菜单的event_key
			 * Use event_key to distinguish different menus. You can configure the event_key
			 * of the menu in the developer console.
			 */
			fmt.Printf("[ OnP2BotMenuV6 access ], data: %s\n", larkcore.Prettify(event))
			if *event.Event.EventKey == "send_alarm" {
				sendAlarmCard(client, "open_id", *event.Event.Operator.OperatorId.OpenId)
			}
			return nil
		}).
		/**
		 * 接收用户发送的消息（包括单聊和群聊），接受到消息后发送告警卡片
		 * Register event handler to handle received messages, including individual chats and group chats.
		 * https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive
		 */
		OnP2MessageReceiveV1(func(ctx context.Context, event *larkim.P2MessageReceiveV1) error {
			fmt.Printf("[ OnP2MessageReceiveV1 access ], data: %s\n", larkcore.Prettify(event))
			if *event.Event.Message.ChatType == "group" {
				sendAlarmCard(client, "chat_id", *event.Event.Message.ChatId)
			} else if *event.Event.Message.ChatType == "p2p" {
				sendAlarmCard(client, "open_id", *event.Event.Sender.SenderId.OpenId)
			}
			return nil
		}).
		/**
		 * 处理卡片按钮点击回调
		 * handle card button click callback
		 * https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication
		 */
		OnP2CardActionTrigger(func(ctx context.Context, event *callback.CardActionTriggerEvent) (*callback.CardActionTriggerResponse, error) {
			fmt.Printf("[ OnP2CardActionTrigger access ], data: %s\n", larkcore.Prettify(event))
			/**
			 * 通过 action 区分不同按钮点击，你可以在卡片搭建工具配置按钮的action。此处处理用户点击了欢迎卡片中的发起告警按钮
			 * Use action to distinguish different buttons. You can configure the action of the button in the card building tool.
			 * Here, handle the situation where the user clicks the "Initiate Alarm" button on the welcome card.
			 */
			if event.Event.Action.Value["action"] == "send_alarm" {
				/*
				 * 响应回调请求，保持卡片原内容不变
				 * Respond to the callback request and keep the original content of the card unchanged.
				 */
				sendAlarmCard(client, "open_id", event.Event.Operator.OpenID)
				return &callback.CardActionTriggerResponse{}, nil
			}
			/**
					* 通过 action 区分不同按钮， 你可以在卡片搭建工具配置按钮的action。此处处理用户点击了告警卡片中的已处理按钮
			    	* Use action to distinguish different buttons. You can configure the action of the button in the card building tool.
					 * Here, handle the scenario where the user clicks the "Mark as resolved" button on the alarm card.
			*/
			if event.Event.Action.Value["action"] == "complete_alarm" {
				/*
				 * 读取告警卡片中用户填写的备注文本信息
				 * Read the note text information filled in by the user in the alarm card.
				 */
				notes := ""
				if event.Event.Action.FormValue != nil {
					if n, ok := event.Event.Action.FormValue["notes_input"]; ok {
						if str, ok := n.(string); ok {
							notes = str
						} else {
							notes = fmt.Sprintf("%v", n)
						}
					}
				}

				card := callback.CardActionTriggerResponse{
					Toast: &callback.Toast{
						Type:    "info",
						Content: "已处理完成！",
						I18nContent: map[string]string{
							"zh_cn": "已处理完成！",
							"en_us": "Resolved!",
						},
					},
					Card: &callback.Card{
						Type: "template",
						Data: &callback.TemplateCard{
							TemplateID: ALERT_RESOLVED_CARD_ID,
							TemplateVariable: map[string]interface{}{
								"alarm_time":    event.Event.Action.Value["time"],
								"open_id":       event.Event.Operator.OpenID,
								"complete_time": time.Now().In(cstZone).Format("2006-01-02 15:04:05 (UTC+8)"),
								"notes":         notes,
							},
						},
					},
				}
				return &card, nil
			}

			return nil, nil
		})

	/**
	 * 启动长连接，并注册事件处理器。
	 * Start long connection and register event handler.
	 * https://open.feishu.cn/document/server-docs/event-subscription-guide/event-subscription-configure-/request-url-configuration-case#d286cc88
	 */
	cli := larkws.NewClient(app_id, app_secret,
		larkws.WithEventHandler(eventHandler),
		larkws.WithLogLevel(larkcore.LogLevelDebug),
	)
	err := cli.Start(context.Background())
	if err != nil {
		panic(err)
	}
}
```

### Node.js 示例代码

业务代码路径：`card_interaction_bot/nodejs/index.js`，复制该路径前往 GitHub 或代码包中找到 `index.js` 文件。



![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/041b1a6c9553a5e273de1a36e039352c_Lg6hslrAGz.png?height=618&lazyload=true&maxWidth=600&width=1048)

代码实现逻辑说明如下。

1.  构建 API Client 用于调用 OpenAPI。
2.  构建 wsClient 用于构建长连接。长连接用于建立项目与开放平台的数据连接通道，用于订阅、接收事件。功能介绍参考[使用长连接接收事件](/ssl:ttdoc/ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/event-subscription-configure-/request-url-configuration-case#d286cc88)。
3. 分别构造欢迎卡片、告警卡片，并构建发送逻辑。
4. 使用 EventDispatcher 注册事件处理器，订阅并处理以下事件：
   - 订阅[用户进入与机器人的会话](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-access_event/events/bot_p2p_chat_entered)事件（onP2ChatAccessEventBotP2pChatEnteredV1）。用户进入会话后，会发送欢迎卡片
    - 订阅[机器人自定义菜单](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/application-v6/bot/events/menu)事件（onP2BotMenuV6）。用户点击悬浮菜单的 **发起告警** 按钮后，会发送告警卡片
    - 订阅[接收消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive)事件（onP2MessageReceiveV1）。用户发送消息后，会发送告警卡片
5. 订阅[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)回调，处理用户点击卡片中的按钮后触发的回调：
    - 当用户点击 **去体验** 按钮时，响应回调请求，保持卡片原内容不变，同时发送告警卡片
    - 当用户点击 **处理完成** 按钮时，读取用户填写的处理情况说明信息，再通过卡片回传交互 toast 提示操作成功，并将告警卡片更新为告警处理完成卡片
6. 启动长连接并关联事件处理器。

代码与注释：
```javascript
import * as Lark from '@larksuiteoapi/node-sdk';

/**
 * 配置应用基础信息和请求域名。
 * App base information and request domain name.
 */
const baseConfig = {
  appId: process.env.APP_ID, // 应用的 AppID, 你可以在开发者后台获取。
  appSecret: process.env.APP_SECRET, // 应用的 AppSecret，你可以在开发者后台获取。
  domain: process.env.BASE_DOMAIN, // 请求域名，如：https://open.feishu.cn。
};

const { WELCOME_CARD_ID, ALERT_CARD_ID, ALERT_RESOLVED_CARD_ID } = process.env;

/**
 * 创建 LarkClient 对象，用于请求OpenAPI, 并创建 LarkWSClient 对象，用于使用长连接接收事件。
 * Create LarkClient object for requesting OpenAPI, and create LarkWSClient object for receiving events using long connection.
 */
const client = new Lark.Client(baseConfig);
const wsClient = new Lark.WSClient(baseConfig);

/**
 * 发送欢迎卡片
 * Construct a welcome card
 * https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/feishu-cards/send-feishu-card#718fe26b
 * @param {string} openID 用户 open_id
 */
async function sendWelcomeCard(openID) {
  /**
   * 使用发送OpenAPI发送通知卡片，你可以在API接口中打开 API 调试台，快速复制调用示例代码
   * Use send OpenAPI to send notice card. You can open the API debugging console in the API interface and quickly copy the sample code for API calls.
   * https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create
   */
  await client.im.v1.message.create({
    params: { receive_id_type: 'open_id' },
    data: {
      receive_id: openID,
      msg_type: 'interactive',
      content: JSON.stringify({
        type: 'template',
        data: {
          template_id: WELCOME_CARD_ID,
          template_variable: { open_id: openID },
        },
      }),
    },
  });
}

/**
 * 发送告警卡片
 * Construct an alarm card
 * https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/feishu-cards/send-feishu-card#718fe26b
 * @param {string} receiveIdType 接收者类型
 * @param {string} receiveId 接收者ID
 */
async function sendAlarmCard(receiveIdType, receiveId) {
  /**
   * 使用发送OpenAPI发送告警卡片，根据传入的receiveIdType不同，可发送到用户单聊或群聊中。你可以在API接口中打开 API 调试台，快速复制调用示例代码
   * Use the Send OpenAPI to send an alarm card. Depending on the value of the incoming receiveIdType, it can be sent to an individual user chat or a group chat. You can open the API debugging console in the API interface and quickly copy the sample code for API calls.
   * https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create
   */
  await client.im.v1.message.create({
    params: { receive_id_type: receiveIdType },
    data: {
      receive_id: receiveId,
      msg_type: 'interactive',
      content: JSON.stringify({
        type: 'template',
        data: {
          template_id: ALERT_CARD_ID,
          template_variable: {
            alarm_time: `${new Date().toLocaleString(
              'zh-CN',
              {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
              },
              { timeZone: 'Asia/Shanghai' }
            )} (UTC+8)`,
          },
        },
      }),
    },
  });
}

/**
 * 注册事件处理器。
 * Register event handler.
 */
const eventDispatcher = new Lark.EventDispatcher({}).register({
  /**
   * 处理用户进入机器人单聊事件
   * handle user enter bot single chat event
   * https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-access_event/events/bot_p2p_chat_entered
   */
  'im.chat.access_event.bot_p2p_chat_entered_v1': async (data) => {
    const {
      operator_id: { open_id },
    } = data;
    await sendWelcomeCard(open_id);
  },

  /**
   * 处理用户点击机器人菜单事件
   * handle user click bot menu event
   * https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/application-v6/bot/events/menu
   */
  'application.bot.menu_v6': async (data) => {
    const { operator, event_key } = data;
    const {
      operator_id: { open_id },
    } = operator;

    console.log('Received bot menu event:', data);

    /**
     * 通过菜单 event_key 区分不同菜单。 你可以在开发者后台配置菜单的event_key
     * Use event_key to distinguish different menus. You can configure the event_key of the menu in the developer console.
     */
    if (event_key === 'send_alarm') {
      await sendAlarmCard('open_id', open_id);
    }
  },

  /**
   * 接收用户发送的消息（包括单聊和群聊），接受到消息后发送告警卡片
   * Register event handler to handle received messages, including individual chats and group chats.
   * https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive
   */
  'im.message.receive_v1': async (data) => {
    const {
      message: { chat_type, chat_id },
      sender: {
        sender_id: { open_id },
      },
    } = data;
    console.log('Received message:', data);

    if (chat_type === 'group') {
      await sendAlarmCard('chat_id', chat_id);
    } else if (chat_type === 'p2p') {
      await sendAlarmCard('open_id', open_id);
    }
  },

  /**
   * 处理卡片按钮点击回调
   * handle card button click callback
   * https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication
   */
  'card.action.trigger': async (data) => {
    const {
      operator: { open_id },
      action: { value, form_value = {} },
    } = data;
    console.log('Received card action:', data);

    /**
     * 通过 action 区分不同按钮点击，你可以在卡片搭建工具配置按钮的action。此处处理用户点击了欢迎卡片中的发起告警按钮
     * Use action to distinguish different buttons. You can configure the action of the button in the card building tool.
     * Here, handle the situation where the user clicks the "Initiate Alarm" button on the welcome card.
     */
    if (value.action === 'send_alarm') {
      /**
       * 响应回调请求，保持卡片原内容不变
       * Respond to the callback request and keep the original content of the card unchanged.
       */
      await sendAlarmCard('open_id', open_id);
      return {};
    }

    /**
     * 通过 action 区分不同按钮， 你可以在卡片搭建工具配置按钮的action。此处处理用户点击了告警卡片中的已处理按钮
     * Use action to distinguish different buttons. You can configure the action of the button in the card building tool.
     * Here, handle the scenario where the user clicks the "Mark as resolved" button on the alarm card.
     */
    if (value.action === 'complete_alarm') {
      /**
       * 读取告警卡片中用户填写的备注文本信息
       * Read the note text information filled in by the user in the alarm card.
       */
      const notes = form_value.notes_input || '';

      return {
        toast: {
          type: 'info',
          content: '已处理完成！',
          i18n: {
            zh_cn: '已处理完成！',
            en_us: 'Resolved!',
          },
        },
        card: {
          type: 'template',
          data: {
            template_id: ALERT_RESOLVED_CARD_ID,
            template_variable: {
              alarm_time: value.time,
              open_id: open_id,
              complete_time: `${new Date().toLocaleString(
                'zh-CN',
                {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit',
                  hour12: false,
                },
                { timeZone: 'Asia/Shanghai' }
              )} (UTC+8)`,
              notes: notes,
            },
          },
        },
      };
    }
  },
});

/**
 * 启动长连接，并注册事件处理器。
 * Start long connection and register event handler.
 * https://open.feishu.cn/document/server-docs/event-subscription-guide/event-subscription-configure-/request-url-configuration-case#d286cc88
 */
wsClient.start({ eventDispatcher });

console.log('Starting bot...');
```

