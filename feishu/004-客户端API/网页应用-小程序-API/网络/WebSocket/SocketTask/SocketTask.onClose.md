---
title: "SocketTask.onClose"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/network/websocket/sockettask/onclose
---
最后更新于 2025-03-12

# SocketTask.onClose(function callback)

关闭 WebSocket 连接

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.39.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fweb-socket%2Fweb-socket)
网页应用 | **X** | **X** | **X** | **X** | /

## 输入
无

## 输出
V7.8.0版本起，回调函数返回WebSocket关闭的原因：

| **closeType** | **closeMsg** | **含义**                 |
| ------ | ------ | ---------------------- | ---------- |
| 0 | socket closed: unknown |未知错误
| 1 | socket closed: by user | 用户手动关闭
| 2 | socket closed: app in background | 应用进入后台
| 3 | socket closed: occur error | 发生网络异常

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fweb-socket%2Fweb-socket)

</div> 

```js
const socketTask = tt.connectSocket({"url":"wss://echo.websocket.org"});
socketTask.onClose(function(res) {
    console.log(JSON.stringify(res));
});

```

回调函数返回对象示例：
```json
{
    "closeType": "1",
    "closeMsg": "socket closed: by user",
}
```
