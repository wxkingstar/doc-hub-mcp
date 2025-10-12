---
title: "SocketTask.send"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/network/websocket/sockettask/send
---
最后更新于 2025-03-12

# SocketTask.send

调用 SocketTask.send(Object object) 通过 WebSocket 连接发送数据。

## 支持说明

该接口仅支持小程序调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.39.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fweb-socket%2Fweb-socket)
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性如下所示。

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
data | string｜arraybuffer | 是 | \- | 需要发送的内容。示例值：send text  
**Notice**：**注意**：iOS 端飞书 [V5.2.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持 arraybuffer。

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性。

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fweb-socket%2Fweb-socket)

</div> 

```js
const socketTask = tt.connectSocket({"url":"wss://echo.websocket.org"});
socketTask.onOpen(function(res) {
    console.log(JSON.stringify(res));
    socketTask.send({
      data: "send text",
      success(res) {
        console.log(JSON.stringify(res));
      },
      fail(res) {
        console.log(`send fail: ${JSON.stringify(res)}`);
      }
  });
});
```

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
