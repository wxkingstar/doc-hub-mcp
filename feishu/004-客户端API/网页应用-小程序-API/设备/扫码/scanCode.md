---
title: "scanCode"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/device/scan-code/scancode
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737432785000
---
最后更新于 2025-01-21

# scanCode(Object object)

调用 scanCode(Object object) 可以扫描二维码并返回扫描结果。

## 注意事项

对于包含 `GBK` 编码内容的二维码扫描时会有乱码。

## 支持说明

该接口支持小程序和网页应用调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **X** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fscan-code%2Fscan-code)
网页应用 | V3.44.0+ | V3.44.0+ | **X** | V7.35.0+ | 预览

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性如下所示。

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
scanType | string[] | 否 | ['qrCode','barCode','datamatrix','pdf417'] | 扫码类型。支持传入多个类型，代表可以支持多种类型的扫码。扫码类型定义如下：  
- `qrCode`：二维码  
- `barCode`：条形码  
- `datamatrix`：Data Matrix 码  
- `pdf417`：PDF417 条码  
**Notice**：**注意**：飞书 V5.18.0 及以上版本支持设置该字段。
barCodeInput | boolean | 否 | false | 是否支持手动输入条形码。取值：  
- true：支持  
- false：不支持  
**Notice**：**注意**：  
- 飞书 [V3.14.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持设置该字段。  
- scanType 包含条形码时，该字段才会生效。否则即使设为 true，也不会出现手动输入条形码的功能。  
- Harmony 端暂不支持输入该字段

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，`success` 返回对象的扩展属性如下所示。

名称 | 数据类型 | 描述
--- | --- | ---
result | string | 扫描结果。

## 示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fscan-code%2Fscan-code)
          预览网页应用

</div> 

```js
tt.scanCode({
    scanType: [
        "barCode",
        "qrCode",
        "datamatrix",
        "pdf417"
    ],
    barCodeInput: true,
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`scanCode fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：
```json
{
    "result": "something",
    "errMsg": "scanCode:ok"
}
```

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
