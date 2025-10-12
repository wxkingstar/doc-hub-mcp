---
title: "NFCAdapter.getIsoDep"
source_url: https://open.feishu.cn/document/web-app/gadget-api/device/nfc/nfcadapter/getisodep
last_remote_update: 2025-08-25
last_remote_update_timestamp: 1756093564000
---
最后更新于 2025-08-25

# NFCAdapter.getIsoDep()

获取IsoDep实例，实例支持ISO-DEP (ISO 14443-4)标准的读写

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V7.15.0+ | **X** | **X** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fnfc%2Fnfc)
网页应用 | V7.15.0+ | **X** | **X** | V7.35.0+ | 预览

## 输入
无

## 输出

返回值：`IsoDep`，该对象的方法列表参见下表：
**Notice**：点击下表中的方法名，查看对应API的支持说明、调用方法

方法 | 介绍
--- | ---
[connect](https://open.feishu.cn/document/uYjL24iN/uQzM4YjL0MDO24CNzgjN/isodep/connect) | 连接 IsoDep 类型的标签
[transceive](https://open.feishu.cn/document/uYjL24iN/uQzM4YjL0MDO24CNzgjN/isodep/transceive) | 发送数据给 IsoDep 类型的标签
[close](https://open.feishu.cn/document/uYjL24iN/uQzM4YjL0MDO24CNzgjN/isodep/close) | 断开与 IsoDep 标签之间的连接
[getMaxTransceiveLength](https://open.feishu.cn/document/uYjL24iN/uQzM4YjL0MDO24CNzgjN/isodep/getmaxtransceivelength) | 获取最大传输长度
[setTimeout](https://open.feishu.cn/document/uYjL24iN/uQzM4YjL0MDO24CNzgjN/isodep/settimeout) | 设置超时时间

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fnfc%2Fnfc)
              预览网页应用

</div> 
**Notice**：这里仅示例当前 API 使用，实际流程请参考：[接入 NFC](https://open.feishu.cn/document/uYjL24iN/ugTN4YjL4UDO24CO1gjN)

```js
const adapter = tt.getNFCAdapter();
//请先确保扫描到ISO-DEP类型卡片
const isoDep = adapter.getIsoDep();
```

## 错误码
`fail`返回对象中会包含[errno属性](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)，代表错误码。

通用错误码可参见 [NFC API 错误码](https://open.feishu.cn/document/uYjL24iN/uQzM4YjL0MDO24CNzgjN/nfc-error-codes)
