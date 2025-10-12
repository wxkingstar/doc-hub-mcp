---
title: "getBluetoothDevices"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/device/bluetooth/getbluetoothdevices
last_remote_update: 2025-04-15
last_remote_update_timestamp: 1744683554000
---
最后更新于 2025-04-15

# getBluetoothDevices(Object object)

getBluetoothDevices(Object object) 用于获取在蓝牙模块生效期间所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备。

## 注意事项

- 该接口获取到的设备列表为蓝牙模块生效期间所有搜索到的蓝牙设备。若在蓝牙模块使用流程结束后未及时调用 `tt.closeBluetoothAdapter` 接口释放资源，则调用该接口时可能返回历史蓝牙使用流程中搜索到的设备，该类设备可能已经不在用户身边，无法连接。

- 蓝牙设备在被搜索到时，系统返回的 `name` 字段一般为广播包中的 `LocalName` 字段中的设备名称，而如果与蓝牙设备建立连接，系统返回的 `name` 字段会改为从蓝牙设备上获取到的 `GattName`。若需要动态改变设备名称并展示，建议使用 `localName` 字段。

## 支持说明

该接口支持小程序和网页应用调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V3.25.0+ | V3.25.0+ | **X** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fbluetooth%2Fbluetooth)
网页应用 | V3.44.0+ | V3.44.0+ | **X** | V7.35.0+ | 预览

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，无扩展属性。

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，`success` 返回对象的扩展属性如下所示。

名称 | 数据类型 | 描述
--- | --- | ---
devices | object[] | uuid 对应的已连接的蓝牙设备列表。
&emsp;  
                    ∟  
                &nbsp;  
                    name | string | 蓝牙设备名称，某些设备可能没有。
&emsp;  
                    ∟  
                &nbsp;  
                    deviceId | string | 用于区分设备的 id。  
<md-alert type="tip" icon="none">**注意**：  
- Harmony 字段返回为虚拟值。  
  <md-alert>
&emsp;  
                    ∟  
                &nbsp;  
                    RSSI | number | 当前蓝牙设备的信号强度。
&emsp;  
                    ∟  
                &nbsp;  
                    advertisData | ArrayBuffer | 当前蓝牙设备的广播数据段中的 ManufacturerData 数据段。
&emsp;  
                    ∟  
                &nbsp;  
                    advertisServiceUUIDs | string[] | 当前蓝牙设备的广播数据段中的 ServiceUUIDs 数据段。
&emsp;  
                    ∟  
                &nbsp;  
                    localName | string | 当前蓝牙设备的广播数据段中的 LocalName 数据段。
&emsp;  
                    ∟  
                &nbsp;  
                    serviceData | object | 当前蓝牙设备的广播数据段中的 ServiceData 数据段。

## 示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fbluetooth%2Fbluetooth)
          预览网页应用

</div> 

```js
tt.getBluetoothDevices({
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`getBluetoothDevices fail: ${JSON.stringify(res)}`);
    }
});
```
`success`返回对象示例：
```json
{
    "devices": [
        {
            "RSSI": -97,
            "advertisData": {},
            "advertisServiceUUIDs": [],
            "deviceId": "FF:24:79:5D:6D:0C",
            "serviceData": {}
        }]
}
```
`fail`返回对象示例：
```json
{
    "errMsg": "getBluetoothDevices:fail not init",
    "errCode": 10000
}
```

## 错误码

`fail` 返回对象中可能包含 errCode 属性和 errno 属性，均代表错误码。

**errCode 错误码**

通用错误码可参见[蓝牙 API 错误码](https://open.feishu.cn/document/uYjL24iN/uYzNxYjL2cTM24iN3EjN)。

**errno 错误码**

关于 Errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
