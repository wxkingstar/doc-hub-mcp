---
title: "MifareClassic.getMaxTransceiveLength"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/device/nfc/mifareclassic/mifareclassic.getmaxtransceivelength
last_remote_update: 2025-08-25
last_remote_update_timestamp: 1756093952000
---
最后更新于 2025-08-25

# MifareClassic.getMaxTransceiveLength(Object object)

获取最大传输长度

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V3.38.0+ | **X** | **X** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fnfc%2Fnfc)
网页应用 | V3.44.0+ | **X** | **X** | V7.35.0+ | 预览

## 输入
继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，无扩展属性

## 输出
`success`返回对象的扩展属性：

名称 | 数据类型 | 描述
--- | --- | ---
length | number | 最大传输长度

## 示例代码
**Notice**：这里仅示例当前 API 使用，实际流程请参考：[接入 NFC](https://open.feishu.cn/document/uYjL24iN/ugTN4YjL4UDO24CO1gjN)

```js
let adapter = tt.getNFCAdapter();
//请先确保扫描到MIFARE-Classic类型卡片
let mifareClassic = adapter.getMifareClassic();
//请先确保连接成功，再获取最大传输长度
mifareClassic.getMaxTransceiveLength({
    success(res) {
        console.log(JSON.stringify(res))
    },
    fail(err) {
        console.log(`MifareClassic.getMaxTransceiveLength fail: ${JSON.stringify(err)}`)
    }
});
```
`success`返回对象示例：
```json
{"length":253,"errMsg":"nfcMaxTransceiveLength:ok"}
```

## 错误码
`fail`返回对象中会包含[errno属性](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)，代表错误码。

通用错误码可参见 [NFC API 错误码](https://open.feishu.cn/document/uYjL24iN/uQzM4YjL0MDO24CNzgjN/nfc-error-codes)
