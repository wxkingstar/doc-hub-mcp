---
title: "offBluetoothAdapterStateChange"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/device/bluetooth/offbluetoothadapterstatechange
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737432484000
---
最后更新于 2025-01-21

# offBluetoothAdapterStateChange(function callback)

取消监听蓝牙适配器状态变化事件

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V3.25.0+ | V3.25.0+ | **X** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fbluetooth%2Fbluetooth)
网页应用 | V5.16.0+ | V5.16.0+ | **X** | V7.35.0+ | /

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
const callback = (res) => {
	console.log(res);
};
tt.onBluetoothAdapterStateChange(callback);
tt.offBluetoothAdapterStateChange(callback);
```
