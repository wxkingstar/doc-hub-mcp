---
title: "NFCAdapter.onDiscovered"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/device/nfc/nfcadapter/nfcadapter.ondiscovered
---
最后更新于 2025-08-25

# NFCAdapter.onDiscovered(function callback)

监听 NFC Tag

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V3.38.0+ | V5.25.0+ | **X** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fnfc%2Fnfc)
网页应用 | V3.44.0+ | V5.25.0+ | **X** | V7.35.0+ | 预览

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
callback | function | 是 |  | 该事件的回调函数

## 输出
回调函数返回对象的属性：

名称 | 数据类型 | 描述
--- | --- | ---
techs | string[] | tech 数组，用于匹配NFC卡片具体可以使用什么标准（NfcA等实例）处理
<!--   
                message | object[] | NdefMessage 数组
-->  
                uid | arraybuffer | NFC标签的UID

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fnfc%2Fnfc)
          预览网页应用

</div> 
**Notice**：这里仅示例当前 API 使用，实际流程请参考：[接入 NFC](https://open.feishu.cn/document/uYjL24iN/ugTN4YjL4UDO24CO1gjN)

```js
const nfcAdapter = tt.getNFCAdapter();
nfcAdapter.onDiscovered(function(res) {
    console.log(JSON.stringify(res));
});
```

回调函数返回对象示例：

```json
{
    "techs":[
        "ISO-DEP",
        "NFC-A",
        "NFC-A",
        "MIFARE-Classic"
    ],
    "__nativeBuffers__":[
        {
            "key":"uid",
            "base64":"efvPNA=="
        }
    ]
}
``` 

## 错误码
`fail`返回对象中会包含[errno属性](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)，代表错误码。

通用错误码可参见 [NFC API 错误码](https://open.feishu.cn/document/uYjL24iN/uQzM4YjL0MDO24CNzgjN/nfc-error-codes)
