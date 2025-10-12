---
title: "connectSocket"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/network/websocket/connectsocket
last_remote_update: 2025-03-12
last_remote_update_timestamp: 1741768358000
---
最后更新于 2025-03-12

# connectSocket

调用 connectSocket(Object object) 创建一个 WebSocket 连接实例，并通过返回的 `socketTask` 操作该连接。

## 注意事项

Socket 数量的最大限制为 5。

## 支持说明

该接口仅支持小程序调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.39.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fweb-socket%2Fweb-socket)
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性如下所示。

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
url | string | 是 | \- | Socket 连接地址。示例值：wss://echo.websocket.org
header | object | 否 | \- | HTTP 请求头（Header）。示例值：{'content-type': 'application/json'}
protocols | string[] | 否 | \- | 子协议数组。示例值：['protocol1']

## 输出

返回值 `SocketTask`，该对象的方法列表参见下表：
**Notice**：点击下表中的方法名，查看对应API的支持说明、调用方法。

方法 | 介绍
--- | ---
[send(Object msg)](https://open.feishu.cn/document/uYjL24iN/ugDOugDOugDO/sockettask/send) | 发送数据。
[close(Object option)](https://open.feishu.cn/document/uYjL24iN/ugDOugDOugDO/sockettask/close) | 关闭 Socket 连接。
[onOpen(function callback)](https://open.feishu.cn/document/uYjL24iN/ugDOugDOugDO/sockettask/onopen) | 监听连接成功的事件回调。
[onClose(function callback)](https://open.feishu.cn/document/uYjL24iN/ugDOugDOugDO/sockettask/onclose) | 监听连接关闭的事件回调。
[onMessage(function callback)](https://open.feishu.cn/document/uYjL24iN/ugDOugDOugDO/sockettask/onmessage) | 监听接收到服务器的消息事件回调。

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fweb-socket%2Fweb-socket)

</div> 

```js
let socketTask = tt.connectSocket({
    url: 'wss://echo.websocket.org',
    success() {
        console.log('Build WebSocketTask success');
    },
    fail(err) {
        console.error('Build WebSocketTask failed', err);
    }
});

```
