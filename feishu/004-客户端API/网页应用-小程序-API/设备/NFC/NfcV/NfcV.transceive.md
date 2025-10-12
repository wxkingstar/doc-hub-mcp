---
title: "NfcV.transceive"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/device/nfc/NfcV/transceive
---
最后更新于 2025-08-25

# NfcV.transceive(Object object)

发送数据给NFC-V类型的标签

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V5.14.0+ | **X** | **X** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fnfc%2Fnfc)
网页应用 | V5.14.0+ | **X** | **X** | V7.35.0+ | 预览

## 输入
继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
data | arraybuffer |  |  | 需要传递的二进制数据

## 输出
`success`返回对象的扩展属性：

名称 | 数据类型 | 描述
--- | --- | ---
data | arraybuffer | 返回的二进制数据

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fnfc%2Fnfc)
          预览网页应用

</div> 
**Notice**：这里仅示例当前 API 使用，实际流程请参考：[接入 NFC](https://open.feishu.cn/document/uYjL24iN/ugTN4YjL4UDO24CO1gjN)

```js
let adapter = tt.getNFCAdapter();
//请先确保扫描到NFC-V类型卡片
let nfcV = adapter.getNfcV();
//请先确保连接成功，再传递数据
nfcV.transceive({
    //需要传递该NFC-V卡片支持的指令来传输数据，这里的【0x30, 0x03】仅用于代码示例；
    data: new Uint8Array([0x30, 0x03]).buffer,
    success(res) {
        console.log('NfcV.transceive success res=', res, Array.from(new Uint8Array(res.data)));
    },
    fail(res) {
        console.log(`NfcV.transceive fail: ${JSON.stringify(res)}`)
    }
});
```
`success`返回对象示例：
```json
{"errMsg":"nfcTransceive:ok","data":{}}
```

## 错误码
`fail`返回对象中会包含[errno属性](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)，代表错误码。

通用错误码可参见 [NFC API 错误码](https://open.feishu.cn/document/uYjL24iN/uQzM4YjL0MDO24CNzgjN/nfc-error-codes)
