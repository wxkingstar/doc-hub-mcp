---
title: "MessageManager.transferMessage"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/open-ability/web-view-component-capability/MessageManager/transferMessage
---
最后更新于 2025-01-21

# MessageManager.transferMessage(Object object)

MessageManager.transferMessage(Object object) 用于小程序向 web-view 发送消息，或 web-view 向小程序发送消息。
- PC 端需要 web-view 内的网页先给小程序发一次信息，然后才可以调用该接口实现小程序向 web-view 发送消息。
- [web-view](https://open.feishu.cn/document/uYjL24iN/ukzNukzNukzN) 组件中的网页需要引入 JSSDK 才能使用该 API。引入方法如下。

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

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性如下所示。

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
data | object | 是 | {} | 需要传输的消息体。  
**示例值**：{"test":"testValue"}
channel | object | 是 | \- | 发送消息过程中需要指定消息通道，一个通道唯一对应一个 web-view 与小程序 worker 间的映射。channel 来自 web-view 的 bindload 回调中的 `e.detail.channel`。  
**示例值**："MESSAGE_CHANNEL_5"  
**Notice**：**注意**：从 web-view 向小程序发送消息时，不支持设置该参数。

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，无扩展属性。

## 示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
         预览小程序

</div> 

```js
/// sample1: web-view send message to gadget
// web-view
const h5Manager = window.tt.miniProgram.createMessageManager();
h5Manager.transferMessage({
    data:{"test":"b"},
    success:(res)=>{
        console.log(res)
    },
    fail:(res)=>{
        console.log(res)
    }
})
// gadget
const workerManager = tt.createMessageManager();
workerManager.onTransferMessage((msg) => {
    console.log(msg)
});

/// sample2: gadget send message to web-view
// gadget
const workerManager = tt.createMessageManager();
workerManager.transferMessage({
    channel:e.detail.channel,
    data:{"test":"text"}
})
// web-view
const h5Manager = window.tt.miniProgram.createMessageManager();
h5Manager.onTransferMessage(function (res) {
    console.log(res)
})
```

回调函数返回对象示例：

```json
// sample1 result: gadget get message from web-view
{
    "channel": "MESSAGE_CHANNEL_WEBVIEW_cZ1NK3brvp_0", 
    "data": {
        "test": "b"
    }
}

// sample2 result: web-view get message from gadget
{
    "channel": "MESSAGE_CHANNEL_12",
    "data": {
        "test": "text"
    }
}
``` 

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
