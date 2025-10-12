---
title: "getBLEDeviceServices"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/device/ble/getbledeviceservices
last_remote_update: 2025-04-15
last_remote_update_timestamp: 1744683750000
---
最后更新于 2025-04-15

# getBLEDeviceServices(Object object)

低功耗蓝牙获取设备服务

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V3.25.0+ | V3.25.0+ | **X** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fbluetooth%2Fbluetooth)
网页应用 | V7.3.0+ | V7.3.0+ | **X** | V7.35.0+ | /

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
deviceId | string | 是 |  | 蓝牙设备 ID  
**示例值**：E5:66:9F:82:46:61

## 输出

`success`返回对象的扩展属性：

名称 | 数据类型 | 描述
--- | --- | ---
services | object[] | 已发现的设备服务列表。
&emsp;  
                    ∟  
                &nbsp;  
                    isPrimary | boolean | 该服务是否为主服务。是主服务则为 true ，反之为 false 。
&emsp;  
                    ∟  
                &nbsp;  
                    serviceId | string | 蓝牙设备特征值对应服务的 uuid。

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fbluetooth%2Fbluetooth)

</div> 

```js
tt.getBLEDeviceServices({
      deviceId: 'E5:66:9F:82:46:61',
      success: (res) => {
  		console.log(JSON.stringify(res));
      },
      fail: (error) => {
        console.log('getBLEDeviceServices fail:${JSON.stringify(res)}');
      }
    });
```
`success`返回对象示例：

```json
{
  "errMsg": "getBLEDeviceServices:ok ok",
  "innerMsg": "ok",
  "services": [
    {
      "isPrimary": true,
      "serviceId": "0000fe95-0000-1000-8000-00805f9b34fb"
    }
  ]
}
``` 
`fail`返回对象示例：
```json
{
    "errMsg": "getBluetoothAdapterState:fail not init",
    "errCode": 10000
}
```

## 错误码

`fail`返回对象中会包含[errorCode属性](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#a825f4c8)，代表错误码。

通用错误码可参见 [蓝牙 API 错误码](https://open.feishu.cn/document/uYjL24iN/uYzNxYjL2cTM24iN3EjN)
