---
title: "offBLEConnectionStateChange"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/device/ble/offbleconnectionstatechange
last_remote_update: 2025-04-15
last_remote_update_timestamp: 1744683750000
---
最后更新于 2025-04-15

# offBLEConnectionStateChange(function callback)

取消监听蓝牙低功耗连接状态的改变事件

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V3.25.0+ | V3.25.0+ | **X** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fbluetooth%2Fbluetooth)
网页应用 | V7.3.0+ | V7.3.0+ | **X** | V7.35.0+ | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
callback | function | 是 |  | 该事件的回调函数

## 输出
无

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fbluetooth%2Fbluetooth)

</div> 

```js
tt.offBLEConnectionStateChange(() => {
  console.log('offBLEConnectionStateChange');
});
```

**注意**

为防止多次注册事件监听导致一次事件多次回调，建议每次调用on方法监听事件之前，先调用off方法，关闭之前的事件监听。

**说明**

不传递 callback 值，则会移除监听所有的事件监听回调。示例代码如下：

```js
tt.offBLEConnectionStateChange();
```

传递 callback 值，只移除对应的 callback 事件。示例代码如下：

```js
tt.offBLEConnectionStateChange(this.callback);
```
