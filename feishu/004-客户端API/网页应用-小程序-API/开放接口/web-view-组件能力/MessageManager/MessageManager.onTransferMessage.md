---
title: "MessageManager.onTransferMessage"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/open-ability/web-view-component-capability/MessageManager/onTransferMessage
---
最后更新于 2025-01-21

# MessageManager.onTransferMessage(function callback)

MessageManager.onTransferMessage(function callback) 用于监听从小程序或 web-view 发送来的消息。
[web-view](https://open.feishu.cn/document/uYjL24iN/ukzNukzNukzN) 组件中的网页需要引入 JSSDK 才能使用该接口。引入方法如下。

```javascript 
<script type="text/javascript" src="https://lf1-cdn-tos.bytegoofy.com/goofy/ee/spm/lark/jssdk/webview/jssdk-1.0.4.js"></script>
``` 

## 支持说明

该接口仅支持小程序调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V5.6.0+ | V5.6.0+ | V5.6.0+ | V7.35.0+ | 预览
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

无

## 输出

回调函数返回对象的属性：

名称 | 数据类型 | 描述
--- | --- | ---
channel | string | 通信通道。  
**Notice**：**注意**：Android、iOS 端在小程序侧接受 web-view 传输来的消息时，不支持该参数。
data | object | 传输数据。

## 示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          预览小程序

</div> 

```js
// gadget
const workerManager = tt.createMessageManager();
workerManager.transferMessage({
    channel:e.detail.channel,
    data:{
        "test": "text"
    },
    success:(res)=>{
        console.log(res)
    },
    fail:(res)=>{
        console.log(res)
    }
})

// web-view
const h5Manager = window.tt.miniProgram.createMessageManager();
h5Manager.onTransferMessage(function (res) {
    console.log(JSON.stringify(res));
})
// cancel
h5Manager.offTransferMessage(function(res) {
  console.log(JSON.stringify(res));
})
```

回调函数返回对象示例：

```json
{
    "channel": "MESSAGE_CHANNEL_12",
    "data": {
        "test": "text"
    }
}
```
