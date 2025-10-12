---
title: "NFCAdapter.getNfcA"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/device/nfc/nfcadapter/nfcadapter.getnfca
---
最后更新于 2025-08-25

# NFCAdapter.getNfcA()

获取NfcA实例，实例支持NFC-A (ISO 14443-3A)标准的读写

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V3.38.0+ | V5.25.0+ | **X** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fnfc%2Fnfc)
网页应用 | V3.44.0+ | V5.25.0+ | **X** | V7.35.0+ | 预览

## 输入
无

## 输出

返回值：`NfcA`，该对象的方法列表参见下表：
**Notice**：点击下表中的方法名，查看对应API的支持说明、调用方法

方法 | 介绍
--- | ---
[connect](https://open.feishu.cn/document/uYjL24iN/ucDN4YjL3QDO24yN0gjN) | 连接 NfcA 类型的标签
[transceive](https://open.feishu.cn/document/uYjL24iN/uITN4YjLyUDO24iM1gjN) | 发送数据给 NfcA 类型的标签
[close](https://open.feishu.cn/document/uYjL24iN/uYDN4YjL2QDO24iN0gjN) | 断开与 NfcA 标签之间的连接
[getAtqa](https://open.feishu.cn/document/uYjL24iN/ugDN4YjL4QDO24CO0gjN) | 获取 ATQA 信息
[getMaxTransceiveLength](https://open.feishu.cn/document/uYjL24iN/ukDN4YjL5QDO24SO0gjN) | 获取最大传输长度
[getSak](https://open.feishu.cn/document/uYjL24iN/uATN4YjLwUDO24CM1gjN) | 获取 SAK 信息
[setTimeout](https://open.feishu.cn/document/uYjL24iN/uETN4YjLxUDO24SM1gjN) | 设置超时时间

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fnfc%2Fnfc)
              预览网页应用

</div> 
**Notice**：这里仅示例当前 API 使用，实际流程请参考：[接入 NFC](https://open.feishu.cn/document/uYjL24iN/ugTN4YjL4UDO24CO1gjN)

```js
const adapter = tt.getNFCAdapter();
//请先确保扫描到NFC-A类型卡片
const nfcA = adapter.getNfcA();
```

## 错误码
`fail`返回对象中会包含[errno属性](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)，代表错误码。

通用错误码可参见 [NFC API 错误码](https://open.feishu.cn/document/uYjL24iN/uQzM4YjL0MDO24CNzgjN/nfc-error-codes)
