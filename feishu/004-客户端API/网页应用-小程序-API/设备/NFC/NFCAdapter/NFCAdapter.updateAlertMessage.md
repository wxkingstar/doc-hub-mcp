---
title: "NFCAdapter.updateAlertMessage"
source_url: https://open.feishu.cn/document/uYjL24iN/uUzM4YjL1MDO24SNzgjN/updatealertmessage
---
最后更新于 2025-08-25

# NFCAdapter.updateAlertMessage

iOS上用于更新系统弹窗上的提示文案。仅iOS端在连接 NFC 过程有系统弹窗，所以仅iOS端支持。

![20250725-150353.jpeg](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/a6cdea2c675a22b7489b8d1a445816a3_wDgN3gFiQu.jpeg?height=387&lazyload=true&width=388)

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **X** | V7.46.0+ | **X** | **X** | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fnfc%2Fnfc)
网页应用 | **X** | V7.46.0+ | **X** | **X** | 预览

<br>
此接口调用需要在 iOS 系统弹窗存在期间调用才有效。即在调用 startDiscovery 之后，stopDiscovery 之前。任何让弹窗消失的操作，都会使得该接口调用返回失败。

## 输入
继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
message | string | 是 |  | 更新到弹窗上的文案，如果传空字符串，即显示为空

## 输出
继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性

## 示例代码
**Notice**：这里仅示例当前 API 使用，实际流程请参考：[接入 NFC](https://open.feishu.cn/document/uYjL24iN/ugTN4YjL4UDO24CO1gjN)

```js
nfcAdapter.updateAlertMessage({ 
  message: "nfc connected",
  success(res) {
    console.log(JSON.stringify(res));
  },
  fail(res) {
    console.log(`updateAlertMessage fail: ${JSON.stringify(res)}`);
  }
});
```

## 错误码
`fail`返回对象中会包含[errno属性](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)，代表错误码。

通用错误码可参见 [NFC API 错误码](https://open.feishu.cn/document/uYjL24iN/uQzM4YjL0MDO24CNzgjN/nfc-error-codes)
