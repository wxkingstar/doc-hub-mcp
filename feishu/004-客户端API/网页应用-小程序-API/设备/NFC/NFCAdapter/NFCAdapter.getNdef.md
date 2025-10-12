---
title: "NFCAdapter.getNdef"
source_url: https://open.feishu.cn/document/uYjL24iN/uUzM4YjL1MDO24SNzgjN/nfcadapter_getndef
---
最后更新于 2025-08-25

# NFCAdapter.getNdef()

获取Ndef实例，实例支持NDEF标签的读写
**Notice**：如果扫描到NdefFormatable类型的标签
  - Android、Harmony端：需要先使用其他软件将卡片格式化，再进行读写操作
  - iOS端：可以直接读写

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V7.48.0+ | V7.48.0+ | **X** | V7.51.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fnfc%2Fnfc)
网页应用 | V7.48.0+ | V7.48.0+ | **X** | V7.51.0+ | 预览

## 输入
无

## 输出

返回值：`Ndef`，该对象的方法列表参见下表：
**Notice**：点击下表中的方法名，查看对应API的支持说明、调用方法

方法 | 介绍
--- | ---
[connect](https://open.feishu.cn/document/uYjL24iN/uQzM4YjL0MDO24CNzgjN/ndef/ndef_connect) | 连接 Ndef 类型的标签
[readNdefMessage](https://open.feishu.cn/document/uYjL24iN/uQzM4YjL0MDO24CNzgjN/ndef/ndef_readndefmessage) | 读取 Ndef 类型标签中的数据
[writeNdefMessage](https://open.feishu.cn/document/uYjL24iN/uQzM4YjL0MDO24CNzgjN/ndef/ndef_writendefmessage) | 写入数据到 Ndef 类型标签
[close](https://open.feishu.cn/document/uYjL24iN/uQzM4YjL0MDO24CNzgjN/ndef/ndef_close) | 断开与 Ndef 标签之间的连接

## 示例代码
**Notice**：这里仅示例当前 API 使用，实际流程请参考：[接入 NFC](https://open.feishu.cn/document/uYjL24iN/ugTN4YjL4UDO24CO1gjN)

```js
const adapter = tt.getNFCAdapter();
//请先确保扫描到NDEF类型卡片
const ndef = adapter.getNdef();
```

## 错误码
`fail`返回对象中会包含[errno属性](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)，代表错误码。

通用错误码可参见 [NFC API 错误码](https://open.feishu.cn/document/uYjL24iN/uQzM4YjL0MDO24CNzgjN/nfc-error-codes)
