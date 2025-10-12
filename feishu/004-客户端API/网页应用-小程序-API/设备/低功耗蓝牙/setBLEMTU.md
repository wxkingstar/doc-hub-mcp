---
title: "setBLEMTU"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/device/ble/setblemtu
last_remote_update: 2025-04-15
last_remote_update_timestamp: 1744683619000
---
最后更新于 2025-04-15

# setBLEMTU(Object object)

设置蓝牙最大传输单元。需在 tt.connectBLEDevice调用成功后调用，mtu 设置范围 (22,512)。
**Notice**：注意事项：
- 仅安卓操作系统5.1以上有效

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V3.26.0+ | **X** | **X** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fbluetooth%2Fbluetooth)
网页应用 | V7.3.0+ | **X** | **X** | V7.35.0+ | /

## 输入
继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
deviceId | string | 是 |  | 用于区分设备的 id  
**示例值**：'FF:24:79:5D:6D:0C'
mtu | number | 是 |  | 最大传输单元(22,512) 区间内，单位 bytes

## 输出

继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fbluetooth%2Fbluetooth)

</div> 

```js
tt.setBLEMTU({
    // 这里的 deviceId 为的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取到的 device's id
    deviceId: "",
    mtu: 200,
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`setBLEMTU fail: ${JSON.stringify(res)}`);
    }
});

```

`success`返回对象示例：

```json
{
	"errMsg": "setBLEMTU:ok"
}
``` 

## 错误码
`fail`返回对象中会包含[errorCode属性](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#a825f4c8)，代表错误码。

通用错误码可参见 [蓝牙 API 错误码](https://open.feishu.cn/document/uYjL24iN/uYzNxYjL2cTM24iN3EjN)
