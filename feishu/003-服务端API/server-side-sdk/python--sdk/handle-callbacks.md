<!--
title: 处理回调
id: 7442638088351170564
fullPath: /uAjLw4CM/ukTMukTMukTM/server-side-sdk/python--sdk/handle-callbacks
updatedAt: 1743151786000
source: https://open.feishu.cn/document/server-side-sdk/python--sdk/handle-callbacks
-->
# 处理回调

通过回调订阅功能，应用可以及时接收并处理飞书中特定的交互行为（例如，飞书卡片交互、链接预览等），并根据交互结果做对应的业务处理，详情参见[回调概述](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/event-subscription-guide/callback-subscription/callback-overview)。在应用内订阅回调时，还需要在本地服务端建立与应用的连接，以便接收回调数据。服务端 SDK 封装了长连接方式，可以快速建立数据通道处理回调；你也可以选择自建 HTTP 服务器处理回调。两种方式介绍如下：

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:30%">订阅方式</md-th>
<md-th style="width:70%">介绍</md-th>
</md-tr>
</md-thead>
<md-tbody>
  
<md-tr>
<md-td>使用长连接接收回调</md-td>
<md-td>该方式是飞书 SDK 内提供的能力，你可以通过集成飞书 SDK 与开放平台建立一条 WebSocket 全双工通道（你的服务器需要能够访问公网）。后续当应用订阅的回调发生时，开放平台会通过该通道向你的服务器发送消息。相较于传统的 Webhook 模式，长连接模式大大降低了接入成本，将原先 1 周左右的开发周期降低到 5 分钟。具体优势如下：测试阶段无需使用内网穿透工具，通过长连接模式在本地开发环境中即可接收回调。SDK 内封装了鉴权逻辑，只在建连时进行鉴权，后续回调推送均为明文数据，无需再处理解密和验签逻辑。只需保证运行环境具备访问公网能力即可，无需提供公网 IP 或域名。无需部署防火墙和配置白名单。</md-td>
</md-tr>

<md-tr>
<md-td>将回调发送至开发者服务器</md-td>
<md-td>传统的 Webhook 模式，该方式需要你提供用于接收回调消息的服务器公网地址。后续当应用订阅的回调发生时，开放平台会向服务器的公网地址发送 HTTP POST 请求，请求内包含回调数据。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

## 注意事项

开放平台 SDK 仅支持对象类型的卡片回传参数，不支持字符串类型。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6d6c7cde74877dabc032336ceb1bd85d_aQIuKttvTP.png?height=755&lazyload=true&maxWidth=600&width=1542)

```json
{
  "behaviors": [
    { // 声明交互类型是卡片回传交互。
      "type": "callback",
      "value": {
        // 回传交互数据。开放平台 SDK 仅支持对象类型的卡片回传参数。
        "key": "value"
      }
    }
  ]
}
```

## （推荐）方式一：使用长连接接收回调

如果回调订阅方式需要选择 **使用长连接接收回调**，则需要先使用 SDK 建立与应用的连接。本章节提供建立长连接的示例代码与代码解析，通过 SDK 建立长连接之后，你才能在应用的回调订阅方式中保存 **使用长连接接收回调** 方式。关于应用内配置回调订阅方式的介绍，参考[配置回调订阅方式](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/event-subscription-guide/callback-subscription/configure-callback-request-address)。

### 使用限制

- 长连接模式仅支持企业自建应用。
- [消息卡片回传交互（旧）](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/configuring-card-callbacks/card-callback-structure)回调不支持 **使用长连接接收回调** 订阅方式，只能选择 **将回调发送至开发者服务器** 订阅方式。
- 每个应用最多建立 50 个连接（在配置长连接时，每初始化一个 client 就是一个连接）。

### 注意事项

- 与 **将回调发送至开发者服务器** 方式的要求相同，长连接模式下接收到消息后，需要在 3 秒内处理完成。
- 长连接模式的消息推送为 **集群模式**，不支持广播，即如果同一应用部署了多个客户端（client），那么只有其中随机一个客户端会收到消息。

### 长连接代码

包含[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)、[拉取链接预览数据](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/development-link-preview/pull-link-preview-data-callback-structure) 回调。

```python
import lark_oapi as lark
from lark_oapi.event.callback.model.p2_card_action_trigger import P2CardActionTrigger, P2CardActionTriggerResponse
from lark_oapi.event.callback.model.p2_url_preview_get import P2URLPreviewGet, P2URLPreviewGetResponse

# 监听「卡片回传交互 card.action.trigger」事件 P2CardActionTrigger。
def do_card_action_trigger(data: P2CardActionTrigger) -> P2CardActionTriggerResponse:
    print(lark.JSON.marshal(data))
    resp = {
        "toast": {
            "type": "info",
            "content": "卡片回传成功 from python sdk"
        }
    }
    return P2CardActionTriggerResponse(resp)

# 监听「拉取链接预览数据 url.preview.get」事件 P2URLPreviewGet。
def do_url_preview_get(data: P2URLPreviewGet) -> P2URLPreviewGetResponse:
    print(lark.JSON.marshal(data))
    resp = {
        "inline": {
            "title": "链接预览测试",
        }
    }
    return P2URLPreviewGetResponse(resp)
event_handler = lark.EventDispatcherHandler.builder("", "") \
    # 注册回调处理函数，固定以 register_p2 为前缀。
    .register_p2_card_action_trigger(do_card_action_trigger) \
    .register_p2_url_preview_get(do_url_preview_get) \
    .build()
def main():
    cli = lark.ws.Client(lark.APP_ID, lark.APP_SECRET,
                         event_handler=event_handler, log_level=lark.LogLevel.DEBUG)
    cli.start()
if __name__ == "__main__":
    main()
```
代码实现步骤：

1. 通过 lark.EventDispatcherHandler.builder() 初始化事件处理器（event_handler），该方法的两个参数必须填空字符串。

2. 通过 event_handler 的 register_xxxx() 方法监听不同的事件类型，上述示例中监听了[卡片回传交互 card.action.trigger](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication) 和[拉取链接预览数据 url.preview.get](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/development-link-preview/pull-link-preview-data-callback-structure) 两个回调。

3. 通过 register_p2_card_action_trigger 注册卡片回调的处理函数。

4. 通过 register_p2_url_preview_get 注册链接预览回调的处理函数。

5. 通过 lark.ws.Client() 初始化长连接客户端，必填参数为应用的 APP_ID 和 APP_SECRET，需登录[开发者后台](https://open.feishu.cn/app)，在应用详情页的 **凭证与基础信息** > **应用凭证** 区域获取。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f7f89950be7e57c2760a8b5b1f5e17c9_Rnb3oFejzG.png?height=524&lazyload=true&maxWidth=600&width=3594)

6. 可选参数传入 event_handler，同时可设置日志级别。

7. 通过 cli.start() 启动客户端，如连接成功，控制台会打印 `connected to wss://xxxxx`，主线程将阻塞，直到进程结束。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ac590caeb5cc3fe42ca3855696f42c6e_BI8PJEBHGZ.png?height=264&lazyload=true&maxWidth=600&width=2488)

## 方式二：将回调发送至开发者服务器

如果回调订阅方式选择 **将回调发送至开发者服务器**，则需要设置回调请求网址，并订阅回调。例如，你配置了可交互的飞书卡片（原消息卡片），当用户在卡片内进行交互后，飞书服务器会向请求网址回调包含 JSON 数据的 HTTP POST 请求。因此，你需要在项目中启动一个 HTTP 服务，然后把 HTTP 服务的 URL 绑定到应用的回调请求网址中，以接收回调数据。本章节提供了使用 flask 启动 httpServer 的示例代码，如果你使用的是其他 HTTP 框架，只需处理 HTTP 出入参转换即可。


处理回调的示例代码如下，包含[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)、[拉取链接预览数据](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/development-link-preview/pull-link-preview-data-callback-structure)回调。

```python
from flask import Flask

import lark_oapi as lark
from event.callback.model.p2_card_action_trigger import P2CardActionTrigger, P2CardActionTriggerResponse
from event.callback.model.p2_url_preview_get import P2URLPreviewGet, P2URLPreviewGetResponse
from lark_oapi.adapter.flask import *
from lark_oapi.api.im.v1 import *

app = Flask(__name__)

# 自定义订阅的事件或者回调
def do_customized_event(data: lark.CustomizedEvent) -> None:
    print(lark.JSON.marshal(data))

# 新版卡片回调，卡片回传交互 card.action.trigger
def do_card_action_trigger(data: P2CardActionTrigger) -> P2CardActionTriggerResponse:
    print(lark.JSON.marshal(data))
    resp = {
        "toast": {
            "type": "info",
            "content": "卡片回传成功 from python sdk"
        }
    }
    return P2CardActionTriggerResponse(resp)

# 拉取链接预览数据 url.preview.get
def do_url_preview_get(data: P2URLPreviewGet) -> P2URLPreviewGetResponse:
    print(lark.JSON.marshal(data))
    resp = {
        "inline": {
            "title": "链接预览测试",
        }
    }
    return P2URLPreviewGetResponse(resp)


handler = lark.EventDispatcherHandler.builder(lark.ENCRYPT_KEY, lark.VERIFICATION_TOKEN, lark.LogLevel.DEBUG) \
    .register_p2_card_action_trigger(do_card_action_trigger) \
    .register_p2_url_preview_get(do_url_preview_get) \
    .register_p1_customized_event("这里填入你要自定义订阅的 event 的 key，例如 out_approval", do_customized_event) \
    .build()


@app.route("/event", methods=["POST"])
def event():
    resp = handler.do(parse_req())
    return parse_resp(resp)


if __name__ == "__main__":
    app.run(port=7777)
```

处理[消息卡片回传交互（旧）](/ssl:ttdoc/ukTMukTMukTM/uYzM3QjL2MzN04iNzcDN/configuring-card-callbacks/card-callback-structure)回调的写法如下所示，示例中使用 flask 启动 httpServer，如使用其他 web 框架，只需处理 http 出入参转换即可。

```python
from typing import Any
from flask import Flask
import lark_oapi as lark
from lark_oapi.adapter.flask import *

app = Flask(__name__)

def do_interactive_card(data: lark.Card) -> Any:
    print(lark.JSON.marshal(data))
    content = {
        "header": {
            "title": {
                "tag": "plain_text",
                "content": "更新卡片成功"
            },
            "template": "green"
        },
        "elements": [
            {
                "tag": "div",
                "text": {
                    "tag": "lark_md",
                    "content": "**Success!\n成功啦😄**"
                }
            },
        ]
    }
    return content

handler = lark.CardActionHandler.builder(lark.ENCRYPT_KEY, lark.VERIFICATION_TOKEN, lark.LogLevel.DEBUG) \
    .register(do_interactive_card) \
    .build()

@app.route("/card", methods=["POST"])
def card():
    resp = handler.do(parse_req())
    return parse_resp(resp)

if __name__ == "__main__":
    app.run(port=7777)
```