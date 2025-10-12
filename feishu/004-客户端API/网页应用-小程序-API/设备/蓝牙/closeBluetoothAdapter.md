---
title: "closeBluetoothAdapter"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/device/bluetooth/closebluetoothadapter
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737432333000
---
最后更新于 2025-01-21

# closeBluetoothAdapter(Object object)

closeBluetoothAdapter(Object object) 该接口用于关闭蓝牙模块。
调用该接口将断开所有已建立的蓝牙连接，并释放系统资源。建议在使用蓝牙流程后，与 `tt.openBluetoothAdapter` 接口成对调用。

## 支持说明

该接口支持小程序和网页应用调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V3.25.0+ | V3.25.0+ | **X** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fbluetooth%2Fbluetooth)
网页应用 | V3.44.0+ | V3.44.0+ | **X** | V7.35.0+ | 预览

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，无扩展属性。

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性。

## 示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fbluetooth%2Fbluetooth)
          预览网页应用

</div> 

```js
tt.closeBluetoothAdapter({ 
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`closeBluetoothAdapter fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：
```json
{
    "errMsg": "closeBluetoothAdapter:ok"
}
```
`fail`返回对象示例：
```json
{
    "errMsg": "closeBluetoothAdapter:fail not init",
    "errCode": 10000
}
```

## 错误码

`fail` 返回对象中可能包含 errCode 属性和 errno 属性，均代表错误码。

**errCode 错误码**

通用错误码可参见[蓝牙 API 错误码](https://open.feishu.cn/document/uYjL24iN/uYzNxYjL2cTM24iN3EjN)。

**errno 错误码**

关于 Errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
