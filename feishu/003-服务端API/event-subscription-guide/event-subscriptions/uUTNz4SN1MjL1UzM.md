<!--
title: 事件概述
id: 6907569742384234498
fullPath: /ukTMukTMukTM/uUTNz4SN1MjL1UzM
updatedAt: 1744770321000
source: https://open.feishu.cn/document/server-docs/event-subscription-guide/overview
-->
# 事件概述

通过事件订阅，应用可以及时响应飞书中的变更事件。当事件发生时，开放平台会按照你配置的订阅方式发送事件消息。飞书开放平台支持的事件请参考[事件列表](/ssl:ttdoc/ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/event-list)。

## 适用场景

事件订阅适用于 **实时数据处理、快速事件响应** 的场景。例如：

- 若应用对数据的实时性要求比较高，希望能够及时地从飞书同步数据的变化，可以进行事件订阅。例如在用户离职时，应用需要第一时间处理离职用户的业务数据，就可以订阅[员工离职](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/events/deleted)事件。

- 若应用需要及时响应用户的操作，可以进行事件订阅。例如当新人入群时，群机器人需要给新人发送一条欢迎消息，就可以订阅[用户进群](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-member-user/events/added)事件。

开放平台提供了体验教程，教程中基于[接收消息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/events/receive)事件搭建了一个机器人应用，可实现自动回复用户消息的功能。如需体验可前往[一键快速开发自动回复机器人](/ssl:ttdoc/uAjLw4CM/uMzNwEjLzcDMx4yM3ATM/develop-an-echo-bot/introduction)。


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
<md-td>1. 选择事件订阅方式</md-td>
<md-td>
事件订阅方式分为 **使用长连接接收事件** 和 **将事件发送至开发者服务器** 两种，你可以根据需要自行选择任一订阅方式。
  

<md-alert>如果你已经集成飞书 SDK，且正在开发的是企业自建应用，推荐你使用更加安全高效的长连接订阅方式。</md-alert>
  
-   **使用长连接接收事件** 方式是飞书 SDK 内提供的能力，你可以通过集成飞书 SDK 与开放平台建立一条 WebSocket 全双工通道（你的服务器需要能够访问公网）。后续当应用订阅的事件发生时，开放平台会通过该通道向你的服务器发送消息。详细配置说明参见[使用长连接接收事件](/ssl:ttdoc/ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/event-subscription-configure-/request-url-configuration-case)。
- **将事件发送至开发者服务器** 方式是传统的 Webhook 模式，该方式需要你提供用于接收事件消息的服务器公网地址。后续当应用订阅的事件发生时，开放平台会向服务器的公网地址发送 HTTP POST 请求，请求内包含事件数据。详细配置说明参见[将事件发送至开发者服务器](/ssl:ttdoc/ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/event-subscription-configure-/choose-a-subscription-mode/send-notifications-to-developers-server)。
</md-td>
</md-tr>

<md-tr>
<md-td>2. 添加所需事件</md-td>
<md-td>完成事件订阅方式配置后，即可为应用添加所需订阅的事件，并发布应用使配置生效。具体操作参见[添加事件](/ssl:ttdoc/ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/event-subscription-configure-/subscription-event-case)。事件相关的概念介绍（包括事件订阅身份、事件版本、事件结构以及事件推送机制），参见下文[事件概念](#事件概念)。</md-td>
</md-tr>
  
<md-tr>
<md-td>3. 接收事件</md-td>
<md-td>
根据不同的事件订阅方式接收事件：
  
- **使用长连接接收事件** 方式已经封装了鉴权逻辑，无需进行数据解密与验签操作，直接接收来自开放平台的事件请求即可。
- **将事件发送至开发者服务器** 方式需要你根据应用的加密策略进行安全校验，如果是加密事件，需要先解密事件，再解析事件详情。具体操作参见[接收事件](/ssl:ttdoc/ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/event-subscription-configure-/encrypt-key-encryption-configuration-case)。
</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

## 事件概念

在开始订阅事件之前，你需要了解以下事件相关的概念介绍。

### 订阅身份

为了提升开放能力的安全性，飞书开放平台设计了访问凭证（access_token）机制，调用 API 获取应用资源时，需要通过 access_token 对调用者身份进行鉴权，即告知飞书当前是谁、以什么身份获取什么租户的数据。关于如何选择和获取不同类型 access token，参考 [获取访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)。相应在添加事件时，也需要依赖访问凭证机制，使用不同的身份订阅事件。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/03665d467803908f28da318452205aa0_cS1gUuGNWF.png?height=572&lazyload=true&maxWidth=600&width=1656)

订阅身份介绍：

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">订阅身份类型</md-th>
<md-th style="width:40%">描述</md-th>
<md-th style="width:40%">场景示例</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>应用身份订阅</md-td>
<md-td>以 [tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM#5aa2e490) 订阅事件，不需要用户登录，直接以应用身份获取事件数据，可获取的数据范围由应用自身的数据权限范围决定。</md-td>
<md-td>假设有一个应用名为 “My bot”，该应用 [订阅云文档事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/subscribe) 时，如果以 tenant_access_token 订阅，则仅能订阅 “My bot” 作为拥有者或者管理员的文档变更，无法感知其他文档变更。</md-td>
</md-tr>

<md-tr>
<md-td>用户身份订阅</md-td>
<md-td>以 [user_access_token](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM#5aa2e490) 订阅事件，需要用户登录并授权应用，可获取的事件数据由用户本人可见的数据权限范围决定。</md-td>
<md-td>假设有一个应用名为 “My bot”，该应用 [订阅云文档事件](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/subscribe) 时，如果以 user_access_token 订阅，该 token 代表的用户是 “李健”，则仅能订阅 “李健” 作为拥有者或者管理员的文档变更，无法感知其他文档变更。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

大多数事件均需要使用应用身份订阅，需要使用用户身份订阅的场景说明如下：

- **[云文档](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/subscribe)**：该业务的事件支持通过应用身份或用户身份订阅，你需要根据实际场景选择适配的身份订阅。
- **[日历](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/subscription)**：该业务的事件只支持通过用户身份订阅。
- **[邮箱](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/mail-v1/user_mailbox-event/subscribe)**：该业务的事件只支持通过用户身份订阅（邮箱的事件订阅功能正在内测中，若无法使用请耐心等待）。




## 事件版本

开放平台提供的事件包括 v1.0 和 v2.0 两个版本。v2.0 版本的事件设置更全面、更合理，建议开发者订阅 v2.0 版本的事件。

如果开发者同时订阅了 v1.0 版本和 v2.0 版本的事件，请确保不要重复订阅同一事件。如下图所示，如果订阅了`通讯录变更v1.0` 和`员工离职 v2.0` 事件，当有一个员工离职时，应用会收到两个相同的员工离职事件。

|**通讯录变更v1.0**|**员工离职 v2.0**|
|---|---|
|![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5e57e1bf6b7a60963159d9fb6bd0007d_DHzvOuhrhP.png?height=498&lazyload=true&width=837)|![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c911c2e24ca5ba4b93dcaf22646c6c24_mJtgI8TPtN.png?height=495&lazyload=true&width=837)|



### 事件结构

不同版本的事件结构不同。添加事件时，从页面上可以看出，添加的是哪个版本的事件。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/bc8ed3a3902a1223142160499100c229_wCeQDdhrQD.png?height=494&lazyload=true&maxWidth=600&width=838)


#### v1.0 版本事件结构

下面列举了一个 v1.0 版本的事件示例。
- `ts` 字段表示事件发送的时间，一般近似于事件发生的时间。
- `uuid` 字段是事件的唯一标识。
- `token` 字段即 Verification Token。
- `event` 结构体记录的是事件的详细信息，不同事件的信息不同。其中，通过 `event.type` 字段，可以判断事件类型。

```json
{ 
    "ts": "1502199207.7171419",
    "uuid": "bc447199585340d1f3728d26b1c0297a",
    "token": "41a9425ea7df4536a7623e38fa321bae",
    "type": "event_callback",
    "event": { 
        "app_id": "cli_9c8609450f78d102",
        "chat_id": "oc_26b66a5eb603162b849f91bcd8815b20",
        "operator": {
            "open_id": "ou_2d2c0399b53d06fd195bb393cd1e38f2",
            "user_id": "gfa21d92"
        },
        "tenant_key": "736588c9260f175c",
        "type": "p2p_chat_create",
        "user": {
            "name": "user_name",
            "open_id": "ou_7dede290d6a27698b969a7fd70ca53da",
            "user_id": "gfa21d92"
        }
    }
}
```

#### v2.0 版本事件结构

下面列举了一个 v2.0 版本的事件示例。
- `schema` 字段表示事件的版本。v1.0 版本的事件，无此字段。
- `header.event_id` 字段是事件的唯一标识。
- `header.token` 字段即 Verification Token。
- `header.create_time` 字段表示事件发送的时间，一般近似于事件发生的时间。
- `header.event_type` 字段表示事件类型。
- `event` 结构体记录的是事件的详细信息，不同事件的信息不同。

```json
{
    "schema": "2.0",
    "header": { 
        "event_id": "f7984f25108f8137722bb63cee927e66",
        "token": "066zT6pS4QCbgj5Do145GfDbbagCHGgF",
        "create_time": "1603977298000000",
        "event_type": "contact.user_group.created_v3",
        "tenant_key": "xxxxxxx",
        "app_id": "cli_xxxxxxxx",
    },
    "event":{
    }
}
```

### 事件推送

#### 推送周期和频次

订阅的事件发生时，飞书将会通过 HTTP POST 请求，发送 JSON 格式的事件数据到预先配置的订阅方式（[使用长连接接收事件](/ssl:ttdoc/ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/event-subscription-configure-/request-url-configuration-case)或[将事件发送至开发者服务器](/ssl:ttdoc/ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/event-subscription-configure-/choose-a-subscription-mode/send-notifications-to-developers-server)）。

- **接收事件时失败重发机制**：应用接收到包含事件数据的请求（向开发者服务器发送的 HTTP POST 请求，或是通过服务端 SDK 长连接接收到请求）时，需要在 3 秒内（TCP 建联的超时时间为 2 秒，回调整体的超时时间为 3 秒）以 HTTP 200 状态码响应该请求（长连接场景下，需要 3 秒内处理请求，且在 SDK 的处理函数中不抛出异常，即视为处理成功）。否则飞书开放平台认为本次推送失败，并以 15秒、5分钟、1小时、6小时 的间隔重新推送事件，**最多重试 4 次**。

- **接收事件时成功重发机制**：由于整个业务链路上消息通信目前采取至少发送一次的策略，所以系统整个链路中出现超时等异常时，均会触发内部消息重发逻辑，这会导致接收事件时即使成功接收，仍会收到重复消息的情况。


综上所述，建议你在接收事件时对所有消息增加幂等逻辑，可以使用如下方式判断事件唯一性：

- 对于 1.0 版本的事件，通过事件结构中的 `uuid` 字段判断事件唯一性。
- 对于 2.0 版本的事件，通过事件结构中的 `event_id` 字段判断事件唯一性。

#### 事件推送顺序

为了保证用户的事件可用性以及内外部数据变化一致性，对于部分事件，开放平台使用了**有序事件**的形式进行推送。即在用户对前一事件接收成功后，才会推送下一事件。

对于有序事件，用户需要保证相应前后事件的正常消费，避免造成事件的阻塞或收到事件不及时。即当有序事件发生阻塞时，后续投递的事件会直接进入重试队列排队，等前一事件成功后才会开始重试投递队首的排队事件，开始第一次重试。

事件是否有序，则可查看对应事件页面的详细说明。