---
title: "Ndef.writeNdefMessage"
source_url: https://open.feishu.cn/document/uYjL24iN/uQzM4YjL0MDO24CNzgjN/ndef/ndef_writendefmessage
last_remote_update: 2025-08-25
last_remote_update_timestamp: 1756094000000
---
最后更新于 2025-08-25

# Ndef.writeNdefMessage(Object object)

写入数据到 NDEF 类型标签
**Notice**：如果扫描到NDEF-Formatable类型的标签
  - Android、Harmony端：需要先使用其他软件将卡片格式化，再进行读写操作
  - iOS端：可以直接读写

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V7.48.0+ | V7.48.0+ | **X** | V7.51.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fnfc%2Fnfc)
网页应用 | V7.48.0+ | V7.48.0+ | **X** | V7.51.0+ | 预览

## 输入
继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
uris | string[] | 否 |  | URI类型数组  
**Notice**：**注意**：当传入非URI类型的数据时，会被转换成文本类型写入
texts | string[] | 否 |  | 文本类型数组  
**Notice**：**注意**：文本类型数据会在句首拼接当前的语言的LanguageCode
records | object[] | 否 |  | NdefRecord类型数组
&emsp;  
                    ∟  
                &nbsp;  
                    id | arraybuffer | 否 |  | NdefRecord的id值。示例值：new Uint8Array([0x30, 0x03]).buffer
&emsp;  
                    ∟  
                &nbsp;  
                    type | arraybuffer | 否 |  | NdefRecord的type值。示例值：new Uint8Array([0x30, 0x03]).buffer
&emsp;  
                    ∟  
                &nbsp;  
                    payload | arraybuffer | 否 |  | NdefRecord的payload值。示例值：new Uint8Array([0x30, 0x03]).buffer

**Notice**：**注意**：当传入的数据在处理过程中发生异常时，异常数据会被过滤，不影响其他正常数据的写入 

## 输出
继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性

## 示例代码
**Notice**：这里仅示例当前 API 使用，实际流程请参考：[接入 NFC](https://open.feishu.cn/document/uYjL24iN/ugTN4YjL4UDO24CO1gjN)

```js
let adapter = tt.getNFCAdapter();
//请先确保扫描到Ndef类型卡片
let ndef = adapter.getNdef();
//请先确保连接成功，再写入数据
ndef.writeNdefMessage({
    uris: ["https://www.feishu.cn/"],
    texts: ["this is nfc test"],
    records: [
        {
        //这里的[0x30, 0x03]仅用于代码示例
        id: new Uint8Array([0x30, 0x03]).buffer,
        type: new Uint8Array([0x30, 0x03]).buffer,
        payload: new Uint8Array([0x30, 0x03]).buffer
        }
    ],
    success(res) {
        console.log('Ndef.writeNdefMessage success');
    },
    fail(err) {
        console.log(`Ndef.writeNdefMessage fail: ${JSON.stringify(err)}`)
    }
});
```
`success`返回对象示例：
```json
{"errMsg":"writeNdefMessage:ok"}
```

## 错误码
`fail`返回对象中会包含[errno属性](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)，代表错误码。

通用错误码可参见 [NFC API 错误码](https://open.feishu.cn/document/uYjL24iN/uQzM4YjL0MDO24CNzgjN/nfc-error-codes)
