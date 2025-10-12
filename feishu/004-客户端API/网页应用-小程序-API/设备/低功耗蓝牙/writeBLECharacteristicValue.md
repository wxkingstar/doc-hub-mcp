---
title: "writeBLECharacteristicValue"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/device/ble/writeblecharacteristicvalue
last_remote_update: 2025-04-15
last_remote_update_timestamp: 1744683663000
---
最后更新于 2025-04-15

# writeBLECharacteristicValue(Object object)

writeBLECharacteristicValue(Object object) 用于写入蓝牙数据。

## 注意事项

- 设备的特征值必须支持 write 才可以成功调用，具体参见 [getBLEDeviceCharacteristics](https://open.feishu.cn/document/uYjL24iN/ukDOxYjL5gTM24SO4EjN) 的输出 `properties` 属性。
- 写入的二进制数据需要进行 hex 编码。

## 支持说明

该接口仅支持小程序调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V3.25.0+ | V3.25.0+ | **X** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fbluetooth%2Fbluetooth)
网页应用 | V7.3.0+ | V7.3.0+ | **X** | V7.35.0+ | /

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性如下所示。

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
deviceId | string | 是 | \- | 蓝牙设备 ID。获取方式可参见 [getBluetoothDevices](https://open.feishu.cn/document/uYjL24iN/uQDOxYjL0gTM24CN4EjN) 的输出 `devices` 对象。  
**示例值**：'FF:24:79:5D:6D:0C'
serviceId | string | 是 | \- | 蓝牙特征值对应 service 的 uuid。
characteristicId | string | 是 | \- | 蓝牙特征值的 uuid。
value | hex string | 是 | \- | 蓝牙设备特征值对应的值，16 进制字符串，限制在 20 字节内。  
**示例值**：'0xFF'

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性。

## 示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fbluetooth%2Fbluetooth)

</div> 

```js
tt.writeBLECharacteristicValue({
    deviceId: "",
    serviceId: "",
    characteristicId: "",
    value: "0xFF", // 0xFF为示例值，请替换为真实场景的16进制数据
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`writeBLECharacteristicValue fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：

```json
{
	"errMsg": "writeBLECharacteristicValue:ok"
}
``` 

`fail`返回对象示例：
```json
{
    "errMsg": "writeBLECharacteristicValue:fail device not found",
    "errCode": 10002
}
```

## 错误码

`fail` 返回对象中可能包含 errCode 属性和 errno 属性，均代表错误码。

**errCode 错误码**

通用错误码可参见[蓝牙 API 错误码](https://open.feishu.cn/document/uYjL24iN/uYzNxYjL2cTM24iN3EjN)。

**errno 错误码**

关于 Errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
