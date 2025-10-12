---
title: "connectBLEDevice"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/device/ble/connectbledevice
last_remote_update: 2025-04-15
last_remote_update_timestamp: 1744683706000
---
最后更新于 2025-04-15

# connectBLEDevice(Object object)

低功耗蓝牙链接外围设备
**Notice**：注意事项：
- 若小程序在之前已有搜索过某个蓝牙设备，可直接传入之前搜索获取的 deviceId 直接尝试连接该设备，无需进行搜索操作。
- 若指定的蓝牙设备已经连接，重复连接直接返回成功。

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V3.25.0+ | V3.25.0+ | **X** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fbluetooth%2Fbluetooth)
网页应用 | V7.3.0+ | V7.3.0+ | **X** | V7.35.0+ | /

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
deviceId | string | 是 |  | 蓝牙设备 ID。  
**示例值**：E5:66:9F:82:46:61

## 输出

继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fbluetooth%2Fbluetooth)

</div> 

```js
tt.connectBLEDevice({
      deviceId: 'E5:66:9F:82:46:61',
      success: (res) => {
        console.log(JSON.stringify(res));
      },
      fail: (res) => {
        console.log('connectBLEDevice fail:${JSON.stringify(res)}');
      },
});
```

`success`返回对象示例：

```json
{
  "device": {
    "RSSI": -88,
    "advertisServiceUUIDs": [
      "0000181a-0000-1000-8000-00805f9b34fb"
    ],
    "deviceId": "E5:66:9F:82:46:61",
    "localName": "LYWSD02",
    "name": "LYWSD02",
    "serviceData": {
      "0000fe95-0000-1000-8000-00805f9b34fb": {}
    }
  },
  "errMsg": "connectBLEDevice:ok",
  "innerMsg": "ok"
}
``` 

## 错误码

`fail`返回对象中会包含[errorCode属性](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#a825f4c8)，代表错误码。

通用错误码可参见 [蓝牙 API 错误码](https://open.feishu.cn/document/uYjL24iN/uYzNxYjL2cTM24iN3EjN)
