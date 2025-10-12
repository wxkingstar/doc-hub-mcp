<!--
title: 回调概述
id: 7338430742971023364
fullPath: /uAjLw4CM/ukTMukTMukTM/event-subscription-guide/callback-subscription/callback-overview
updatedAt: 1744008223000
source: https://open.feishu.cn/document/event-subscription-guide/callback-subscription/callback-overview
-->
# 回调概述

回调适用于需要对用户行为进行同步响应的业务场景，即当用户在飞书中触发某些操作时，前端加载等待服务端返回响应数据。待服务端返回响应结果时，前端加载完成，并向用户展示返回的响应结果。

在飞书业务中，回调功能的典型使用场景如下：

- **卡片交互场景**：用户点击卡片上的交互组件（比如审批卡片上的同意/拒绝按钮），开发者的服务端将收到按钮的点击回调，并且需要立即响应更新后的卡片内容，给予用户操作反馈（比如把审批状态流转为已审批）。

- **链接预览场景**：用户在聊天中查看某个应用链接，该链接支持返回应用配置的[预览数据](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/development-link-preview/link-preview-development-guide)，此时该应用的服务端会收到[拉取链接预览数据](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/development-link-preview/pull-link-preview-data-callback-structure)的回调，并且需要立即响应返回链接预览内容，从而使终端用户看到链接预览效果。

## 回调与事件的区别

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/88c9a80327f80bc5ddce17babe63f64d_bWeBkMFagD.png?height=440&lazyload=true&maxWidth=600&width=1600)

回调与[事件](/ssl:ttdoc/ukTMukTMukTM/uUTNz4SN1MjL1UzM)相似但又有不同：
- **相似点：**
    - 都是飞书服务器主动向开发者服务器推送数据。
    - 回调与事件有相似的数据结构，可以复用同一套加密解密策略，开发者在解析飞书返回的内容时，可以采取同一套策略。
- **差异点：**
    - 订阅回调后，开发者服务器需要**立即返回**响应内容，以反馈用户操作，而事件则不要求返回。
    - 回调是同步操作，不提供补推机制，超时未响应即认为这次回调失败，前端会展示报错等平台提供的兜底响应策略。
    - 事件是异步操作，开发者只需简单响应飞书服务器是否收到事件即可，如开发者未响应，则平台会补推送事件。




## 订阅流程

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:30%">步骤</md-th>
<md-th style="width:70%">说明</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>1. 选择回调订阅方式</md-td>
<md-td>
回调订阅方式分为 **使用长连接接收回调** 和 **将回调发送至开发者服务器** 两种，你可以根据需要自行选择任一订阅方式。
  

<md-alert>如果你已经集成飞书 SDK，且正在开发的是企业自建应用，推荐你使用更加安全高效的长连接订阅方式。</md-alert>
  
-   **使用长连接接收回调** 方式是飞书 SDK 内提供的能力，你可以通过集成飞书 SDK 与开放平台建立一条 WebSocket 全双工通道（你的服务器需要能够访问公网）。后续当应用订阅的回调发生时，开放平台会通过该通道向你的服务器发送消息。详细配置说明参见[使用长连接接收回调](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/event-subscription-guide/callback-subscription/configure-callback-request-address)。
  
- **将回调发送至开发者服务器** 方式是传统的 Webhook 模式，该方式需要你提供用于接收回调消息的服务器公网地址。后续当应用订阅的回调发生时，开放平台会向服务器的公网地址发送 HTTP POST 请求，请求内包含回调数据。详细配置说明参见[将回调发送至开发者服务器](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/event-subscription-guide/callback-subscription/step-1-choose-a-subscription-mode/send-callbacks-to-developers-server)。
</md-td>
</md-tr>

<md-tr>
<md-td>2. 添加所需回调</md-td>
<md-td>完成回调订阅方式配置后，即可为应用添加所需订阅的回调，并发布应用使配置生效。具体操作参见[添加回调](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/event-subscription-guide/callback-subscription/add-callback)。</md-td>
</md-tr>
  
<md-tr>
<md-td>3. 接收回调</md-td>
<md-td>
根据不同的回调订阅方式接收回调：
  
- **使用长连接接收回调** 方式已经封装了鉴权逻辑，无需进行数据解密与验签操作，直接接收来自开放平台的回调请求即可。
- **将回调发送至开发者服务器** 方式需要你根据应用的加密策略进行安全校验，如果是加密回调，需要先解密回调，再解析回调详情。具体操作参见[接收回调](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/event-subscription-guide/callback-subscription/receive-and-handle-callbacks)。
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::


## 回调结构

回调返回的数据结构与事件类似。以“拉取链接预览数据”(`url.preview.get`)为例，回调的结构示意如下：

```json
{
  "schema": "2.0", //表示回调的版本，2.0表示这个回调结构与事件的2.0版本在形式上一致
  "header": { //回调的通用参数
    "token": "vi57noNQoGbhxxxxxWmmWdlsSn3FTzk1", //对应 Verification Token
    "create_time": "170134xxxxx18480", //回调发送的时间戳，近似于回调触发的时间
    "event_type": "url.preview.get", //回调类型
    "tenant_key": "736xxxxx260f175d", //回调所属应用的租户id
    "app_id": "cli_a40xxxxxe57e100c" //回调所属应用的应用id
  },
  "event": { //记录不同回调类型返回的详细的上下文信息
    "operator": { 
      "tenant_key": "736588cxxxx175d",
      "user_id": "c3xxxxd1",
      "open_id": "ou_xxxxx54182ea7b8319f4d39823b79d2"
    },
    "host": "im_message", //链接所在的宿主场景。枚举包括1.im_message 聊天消息 2.im_top_notice 群置顶
    "context": { //这个场景下具体的上下文参数
      "url": "https://feishu-url.bytedance.net/smartcard/test/111", //匹配URL规则的原链接
      "preview_token": "e28r7df2-xxxx-477d-a8d0-2e1eb99796c2", //用于标识链接预览的凭证，在返回链接预览数据时要用
      "open_message_id": "om_191d914xxxxx81c97a609c663452dfdf", //触发链接预览的消息ID
      "open_chat_id": "oc_20443194b65f9c8cf2935818dae39999" //触发链接预览的群ID
    }
  }
}
```

## 回调列表

目前支持的回调列表如下：

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">功能模块</md-th>
<md-th style="width:25%">回调名称</md-th>
<md-th style="width:55%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>卡片</md-td>
<md-td>[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)</md-td>
<md-td>用户点击卡片上配置回传交互的组件时，触发此回调。

可通过返回 toast、更新后的卡片内容等反馈用户的交互。</md-td>
</md-tr>

<md-tr>
<md-td>链接预览</md-td>
<md-td>[拉取链接预览数据](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/development-link-preview/pull-link-preview-data-callback-structure)</md-td>
<md-td>用户在聊天中查看匹配应用注册的URL规则的链接时，触发此回调。

可通过返回文字链、卡片等链接预览内容，为裸链扩展链接预览效果。</md-td>
</md-tr>

<md-tr>
<md-td>卡片</md-td>
<md-td>[消息卡片回传交互（旧）](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/configuring-card-callbacks/card-callback-structure)</md-td>
<md-td>当用户点击卡片上添加了回传交互的组件时，开发者注册的服务端回调地址将收到此回调。

开发者可声明通过弹出 toast、更新卡片、保持原内容不变等方式来响应用户交互。

<md-alert type="tip" icon="none">该回调使用旧版的协议，兼容历史的机器人[回调配置](/ssl:ttdoc/ukTMukTMukTM/uYzMxEjL2MTMx4iNzETM)。</md-alert></md-td>
</md-tr>
  
</md-tbody>
</md-table>
:::