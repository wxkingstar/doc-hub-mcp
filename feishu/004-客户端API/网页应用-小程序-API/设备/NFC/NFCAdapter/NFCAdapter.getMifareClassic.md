---
title: "NFCAdapter.getMifareClassic"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/device/nfc/nfcadapter/nfcadapter.getmifareclassic
last_remote_update: 2025-08-25
last_remote_update_timestamp: 1756093576000
---
最后更新于 2025-08-25

# NFCAdapter.getMifareClassic()

获取MifareClassic实例，实例支持MIFARE Classic标签的读写

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V3.38.0+ | **X** | **X** | V7.35.0+ | 预览
网页应用 | V3.44.0+ | **X** | **X** | V7.35.0+ | 预览

## 输入
无

## 输出

返回值：`MifareClassic`，该对象的方法列表参见下表：
**Notice**：点击下表中的方法名，查看对应API的支持说明、调用方法

方法 | 介绍
--- | ---
[connect](https://open.feishu.cn/document/uYjL24iN/uQTN4YjL0UDO24CN1gjN) | 连接 MifareClassic 类型的标签
[transceive](https://open.feishu.cn/document/uYjL24iN/ucTN4YjL3UDO24yN1gjN) | 发送数据给 MifareClassic 类型的标签
[close](https://open.feishu.cn/document/uYjL24iN/uMTN4YjLzUDO24yM1gjN) | 断开与 MifareClassic 标签之间的连接
[getMaxTransceiveLength](https://open.feishu.cn/document/uYjL24iN/uUTN4YjL1UDO24SN1gjN) | 获取最大传输长度
[setTimeout](https://open.feishu.cn/document/uYjL24iN/uYTN4YjL2UDO24iN1gjN) | 设置超时时间

## 示例代码
<!--div style="display: flex; justify-content: space-between">
  <md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

预览小程序
         预览

</div--> 
**Notice**：这里仅示例当前 API 使用，实际流程请参考：[接入 NFC](https://open.feishu.cn/document/uYjL24iN/ugTN4YjL4UDO24CO1gjN)

```js
const adapter = tt.getNFCAdapter();
//请先确保扫描到MIFARE-Classic类型卡片
const mifareClassic = adapter.getMifareClassic();
```

## 错误码
`fail`返回对象中会包含[errno属性](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)，代表错误码。

通用错误码可参见 [NFC API 错误码](https://open.feishu.cn/document/uYjL24iN/uQzM4YjL0MDO24CNzgjN/nfc-error-codes)
