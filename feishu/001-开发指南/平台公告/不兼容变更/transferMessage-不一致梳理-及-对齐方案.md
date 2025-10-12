---
title: "transferMessage 不一致梳理 及 对齐方案"
source_url: https://open.feishu.cn/document/platform-notices/breaking-change/transfermessage-inconsistency-sorting-and-alignment-solution
last_remote_update: 2023-11-13
last_remote_update_timestamp: 1699862206000
---
最后更新于 2023-11-13

# transferMessage 不一致梳理 及 对齐方案

## 对齐前

### web-view -> gadget

#### demo

web-view
```
const h5Manager = window.tt.miniProgram.createMessageManager();
h5Manager.transferMessage({
    data:{"test":"b"}
})
```
gadget
```
const workerManager = tt.createMessageManager();
workerManager.onTransferMessage((msg) => {
    console.log(msg)
});
```

#### gadget获得消息：

##### ios - 需要修改

```
{
    "test": "b"
}
```

##### android - 需要修改

```
{
    "test": "b"
}
```

##### pc - appKey是否需要删除

```
{
    "channel": "MESSAGE_CHANNEL_WEBVIEW_cZ1NK3brvp_0",
    "data": {
        "test": "b"
    },
    "appKey": "cZ1NK3brvp"
}
```

##### 开发者工具 - 需要修改

```
{
    "test": "b"
}
```

* * *

### gadget -> web-view

#### demo

gadget
```
const workerManager = tt.createMessageManager();
workerManager.transferMessage({
    channel:e.detail.channel,
    data:{"test":"text"}
})
```
web-view
```
const h5Manager = window.tt.miniProgram.createMessageManager();
h5Manager.onTransferMessage(function (res) {
    console.log(res)
})
```

#### web-view获得消息：

##### ios - 需要修改

```
{
    "data": {
        "test": "text"
    }
}
```

##### android - 不需要修改

```
{
    "channel": "MESSAGE_CHANNEL_12",
    "data": {
        "test": "text"
    }
}
```

##### pc - 需要修改

```
{
    "data": {
        "test": "text"
    }
}
```

##### 开发者工具

```
{
    "channel":"MESSAGE_CHANNEL_2",
    "data": {
        "test": "text"
    },
    "from": "worker"
}
```

## 对齐后

### 1 消息格式

#### webview->gadget

**只有PC有channel**
```
{
    "channel": "MESSAGE_CHANNEL_WEBVIEW_cZ1NK3brvp_0", 
    "data": {
        "test": "b"
    }
}
```

#### gadget->webview

```
{
    "channel": "MESSAGE_CHANNEL_12",
    "data": {
        "test": "text"
    }
}
```

#### 业务如何适配

```
// 如果客户端版本 < 5.6
messageManager.onTransferMessage(function(resp) {
    const data = resp
})
// 如果客户端版本 >= 5.6
messageManager.onTransferMessage(function(resp) {
    const data = resp.data
})
```
或者可以选择兼容的方式：
```
messageManager.onTransferMessage(function(resp) {			
    const data = res.data ? res.data : res
})
```
