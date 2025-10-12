---
title: "IsoDep.setTimeout"
source_url: https://open.feishu.cn/document/web-app/gadget-api/device/nfc/isodep/settimeout
---
最后更新于 2025-08-25

# IsoDep.setTimeout(Object object)

设置超时时间

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V7.15.0+ | **X** | **X** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fnfc%2Fnfc)
网页应用 | V7.15.0+ | **X** | **X** | V7.35.0+ | 预览

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
timeout | number | 否 |  | 超时时长（ms）

## 输出
继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性

## 示例代码
**Notice**：这里仅示例当前 API 使用，实际流程请参考：[接入 NFC](https://open.feishu.cn/document/uYjL24iN/ugTN4YjL4UDO24CO1gjN)

```js
let adapter = tt.getNFCAdapter();
//请先确保扫描到ISO-DEP类型卡片
let isoDep = adapter.getIsoDep();
//请先确保连接成功，再设置超时时间
isoDep.setTimeout({
    'timeout': 1000,
    success(res) {
        console.log(JSON.stringify(res))
    },
    fail(err) {
        console.log(`IsoDep.setTimeout fail: ${JSON.stringify(err)}`)
    }
});
```
`success`返回对象示例：
```json
{"errMsg":"nfcSetTimeout:ok"}
```

## 错误码
`fail`返回对象中会包含[errno属性](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)，代表错误码。

通用错误码可参见 [NFC API 错误码](https://open.feishu.cn/document/uYjL24iN/uQzM4YjL0MDO24CNzgjN/nfc-error-codes)
