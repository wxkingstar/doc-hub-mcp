<!--
title: 处理回调
id: 7442638088351186948
fullPath: /uAjLw4CM/ukTMukTMukTM/server-side-sdk/nodejs-sdk/handling-callbacks
updatedAt: 1733370632000
source: https://open.feishu.cn/document/server-side-sdk/nodejs-sdk/handling-callbacks
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

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6d6c7cde74877dabc032336ceb1bd85d_2NxBTdYy7C.png?height=755&lazyload=true&maxWidth=600&width=1542)

```js
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

```js
import * as Lark from "@larksuiteoapi/node-sdk";
const wsClient = new Lark.WSClient({
  appId: "YOUR_APP_ID",
  appSecret: "YOUR_APP_SECRET",
});
const eventDispatcher = new Lark.EventDispatcher({}).register({
  "card.action.trigger": async (data) => {
    console.log(data);
    return {
      toast: {
        type: "success",
        content: "卡片交互成功",
        i18n: {
          zh_cn: "卡片交互成功",
          en_us: "card action success",
        },
      },
    };
  },
});
wsClient.start({ eventDispatcher });
```

代码实现说明：
1. 初始化 WSClient。
    
    必须传入应用的 appId、appSecret。获取方式：登录[开发者后台](https://open.feishu.cn/app)，在应用详情页的 **凭证与基础信息** 页面内，获取应用凭证（包括 App ID 和 App Secret）。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/e78da7b6e674f8ab77a16313123d60b0_d1MD9qVY4q.png?height=356&lazyload=true&maxWidth=600&width=2536)

2. 通过 `new Lark.EventDispatcher` 初始化事件处理器（eventDispatcher）。

3. 通过 eventDispatcher 的 register 方法监听不同的回调类型，上述示例中监听了 **卡片回传交互 card.action.trigger** 回调。
	
    下图所示的代码位置对应传入回调的 **回调类型**，如[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)回调类型为 `card.action.trigger`，[拉取链接预览数据](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/development-link-preview/pull-link-preview-data-callback-structure)回调类型为 `url.preview.get`。
    
    
	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/341389b6f14b8391c700c965d192b0f0_oWhFA02prA.png?height=70&lazyload=true&maxWidth=600&width=564)

4. 通过 wsClient.start 启动客户端。如成功启动长连接，控制台会打印 `[info]: [ "[ws]", "ws client ready" ]`，主线程将阻塞，直到进程结束。
    
    ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/165451cc8be7864ea8b7d6d66f5edf92_3gsoTRTrB6.png?height=228&lazyload=true&maxWidth=600&width=4130)
    
## 方式二：将回调发送至开发者服务器

针对处理回调订阅的场景，SDK 提供了以下直观的代码逻辑，使你可以关注服务监听了何种回调，以及回调发生后需要做什么，而无需过多关注如何处理数据解密等其他工作。该方式需要在启动服务器后，将公网可访问的服务器请求地址配置在开发者后台的应用中，如何在应用中配置请求地址参考[配置回调订阅方式](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/event-subscription-guide/callback-subscription/configure-callback-request-address#536fd2dd)。

1. 构造回调处理器 `EventDispatcher` 的实例。
2. 在实例上，注册需要监听的回调以及处理函数。
3. 将实例和服务进行绑定。

在 `EventDispatcher` 内部会进行数据解密等操作，构造参数说明如下表所示。如果没有传递相关参数，则会自动忽略对应的参数配置。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">参数</md-th>
<md-th style="width:20%">类型</md-th>
<md-th style="width:20%">是否必填</md-th>
<md-th style="width:40%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>encryptKey</md-td>
<md-td>string</md-td>
<md-td>否</md-td>
<md-td>推送数据加密的 key，开启加密推送时需要使用该参数进行数据解密。关于 encryptKey 的更多信息，参见[配置 Encrypt Key](/ssl:ttdoc/ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/event-subscription-configure-/configure-encrypt-key)。</md-td>
</md-tr>

<md-tr>
<md-td>loggerLevel</md-td>
<md-td>LoggerLevel</md-td>
<md-td>否</md-td>
<md-td>日志级别。枚举值：

- lark.LoggerLevel.error：记录错误事件，这些事件阻止了部分程序的执行。
- lark.LoggerLevel.warn：记录异常问题，但这些异常可能不影响程序继续运行。
- lark.LoggerLevel.info：记录运行过程中关键的、需要被监控的信息。
- lark.LoggerLevel.debug：记录调试信息，用于在调试时诊断问题。
- lark.LoggerLevel.trace：记录详细信息，可用于开发或调试时跟踪程序运行过程。

**默认值**：lark.LoggerLevel.info</md-td>
</md-tr>

<md-tr>
<md-td>logger</md-td>
<md-td>Logger</md-td>
<md-td>否</md-td>
<md-td>日志器，可根据需要自定义配置。</md-td>
</md-tr>

<md-tr>
<md-td>cache</md-td>
<md-td>Cache</md-td>
<md-td>否</md-td>
<md-td>缓存器，用于缓存数据的存储与获取，如 token。如果你没有指定缓存器，SDK 会初始化一个缓存器。如果需要和现有系统共享数据，可以自定义缓存器，实现 Cache 的接口即可。默认缓存器的实现：[default-cache.ts](https://github.com/larksuite/node-sdk/blob/main/utils/default-cache.ts)</md-td>
</md-tr>


</md-tbody>
</md-table>
:::

示例代码配置如下，`'card.action.trigger'`位置对应传入回调的 **回调类型**，如[卡片回传交互](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/feishu-cards/card-callback-communication)回调类型为 `card.action.trigger`，[拉取链接预览数据](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/development-link-preview/pull-link-preview-data-callback-structure)回调类型为 `url.preview.get`。

```js
import http from 'http';
import * as lark from '@larksuiteoapi/node-sdk';

const eventDispatcher = new lark.EventDispatcher({
    encryptKey: 'encrypt key'
}).register({
    'card.action.trigger': async (data) => {
    console.log(data);
    return {
      toast: {
        type: "success",
        content: "卡片交互成功",
        i18n: {
          zh_cn: "卡片交互成功",
          en_us: "card action success",
        },
      },
    };
  },
});

const server = http.createServer();
server.on('request', lark.adaptDefault('/webhook/event', eventDispatcher, {
    autoChallenge:true,
}));
server.listen(3000);
```


