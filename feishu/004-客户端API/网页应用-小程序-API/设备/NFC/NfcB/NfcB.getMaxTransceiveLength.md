---
title: "NfcB.getMaxTransceiveLength"
source_url: https://open.feishu.cn/document/web-app/gadget-api/device/nfc/nfcb/getmaxtransceivelength
---
最后更新于 2025-08-25

# NfcB.getMaxTransceiveLength(Object object)

获取最大传输长度

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V7.15.0+ | **X** | **X** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fnfc%2Fnfc)
网页应用 | V7.15.0+ | **X** | **X** | V7.35.0+ | 预览

## 输入
继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，无扩展属性

## 输出
`success`返回对象的扩展属性：

名称 | 数据类型 | 描述
--- | --- | ---
length | number | 最大传输长度

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fnfc%2Fnfc)
          预览网页应用

</div> 
**Notice**：这里仅示例当前 API 使用，实际流程请参考：[接入 NFC](https://open.feishu.cn/document/uYjL24iN/ugTN4YjL4UDO24CO1gjN)

```js
let adapter = tt.getNFCAdapter();
//请先确保扫描到NFC-B类型卡片
let nfcB = adapter.getNfcB();
//请先确保连接成功，再获取最大传输长度
nfcB.getMaxTransceiveLength({
    success(res) {
        console.log(JSON.stringify(res))
    },
    fail(err) {
        console.log(`NfcB.getMaxTransceiveLength fail: ${JSON.stringify(err)}`)
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
