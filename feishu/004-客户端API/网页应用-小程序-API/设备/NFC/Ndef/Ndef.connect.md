---
title: "Ndef.connect"
source_url: https://open.feishu.cn/document/uYjL24iN/uQzM4YjL0MDO24CNzgjN/ndef/ndef_connect
---
最后更新于 2025-08-25

# Ndef.connect(Object object)

连接 NDEF 类型的标签
**Notice**：如果扫描到NDEF-Formatable类型的标签
  - Android、Harmony端：需要先使用其他软件将卡片格式化，再进行读写操作
  - iOS端：可以直接读写

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V7.48.0+ | V7.48.0+ | **X** | V7.51.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fnfc%2Fnfc)
网页应用 | V7.48.0+ | V7.48.0+ | **X** | V7.51.0+ | 预览

## 输入
继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，无扩展属性

## 输出
继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性

## 示例代码
**Notice**：这里仅示例当前 API 使用，实际流程请参考：[接入 NFC](https://open.feishu.cn/document/uYjL24iN/ugTN4YjL4UDO24CO1gjN)

```js
let adapter = tt.getNFCAdapter();
adapter.onDiscovered(
    (res) => {
        console.log('onDiscovered res, ' + JSON.stringify(res));
        // 扫描到NFC标签后,判断是否包含NDEF标签
        if（res.techs.indexOf("NDEF") != -1）{
            let ndef = adapter.getNdef();
            // 连接NDEF标签
            ndef.connect({
                success(res) {
                    console.log(JSON.stringify(res))
                },
                fail(err) {
                    console.log(`Ndef.connect fail: ${JSON.stringify(res)}`)
                }
            });   
        }   
    }
);
```
`success`返回对象示例：
```json
{"errMsg":"nfcConnect:ok"}
```

## 错误码
`fail`返回对象中会包含[errno属性](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)，代表错误码。

通用错误码可参见 [NFC API 错误码](https://open.feishu.cn/document/uYjL24iN/uQzM4YjL0MDO24CNzgjN/nfc-error-codes)
