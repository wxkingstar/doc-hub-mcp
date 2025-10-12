---
title: "Ndef.readNdefMessage"
source_url: https://open.feishu.cn/document/uYjL24iN/uQzM4YjL0MDO24CNzgjN/ndef/ndef_readndefmessage
last_remote_update: 2025-08-25
last_remote_update_timestamp: 1756093988000
---
最后更新于 2025-08-25

# Ndef.readNdefMessage(Object object)

读取 NDEF 类型标签中的数据
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
`success`返回对象的扩展属性：

名称 | 数据类型 | 描述
--- | --- | ---
messages | object[] | 读取到的NdefRecord数组
&emsp;  
                    ∟  
                &nbsp;  
                    id | arraybuffer | NdefRecord的id值
&emsp;  
                    ∟  
                &nbsp;  
                    type | arraybuffer | NdefRecord的type值
&emsp;  
                    ∟  
                &nbsp;  
                    payload | arraybuffer | NdefRecord的payload值

**Notice**：**注意**
- Harmony端：当读取的NdefRecord中type字段为空时，鸿蒙系统会返回空的NdefRecord对象，此问题待鸿蒙系统修复 

## 示例代码
**Notice**：这里仅示例当前 API 使用，实际流程请参考：[接入 NFC](https://open.feishu.cn/document/uYjL24iN/ugTN4YjL4UDO24CO1gjN)

```js
let adapter = tt.getNFCAdapter();
//请先确保扫描到NDEF类型卡片
let ndef = adapter.getNdef();
//请先确保连接成功，再读取数据
ndef.readNdefMessage({
    success(res) {
        console.log('Ndef.readNdefMessage success');
    },
    fail(err) {
        console.log(`Ndef.readNdefMessage fail: ${JSON.stringify(err)}`)
    }
});
```

`success`返回对象示例：
```json
{"errMsg":"readNdefMessage:ok","messages":[{"id":ArrayBuffer,"type":ArrayBuffer,"payload":ArrayBuffer}]}
```

## 错误码
`fail`返回对象中会包含[errno属性](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)，代表错误码。

通用错误码可参见 [NFC API 错误码](https://open.feishu.cn/document/uYjL24iN/uQzM4YjL0MDO24CNzgjN/nfc-error-codes)
