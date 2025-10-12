---
title: "getStorage"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/cache/getstorage
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737434369000
---
最后更新于 2025-01-21

# getStorage

调用 getStorage(Object object) 获取本地缓存数据。

## 支持说明

该接口仅支持小程序调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fstorage%2Fstorage)
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性如下所示。

名词 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
key | string | 是 | \- | 键名。最小长度为 1 字符。示例值：name

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，`success` 返回对象的扩展属性如下所示。

名称 | 数据类型 | 描述
--- | --- | ---
data | [本地缓存数据类型](https://open.feishu.cn/document/uYjL24iN/uMTOz4yM5MjLzkzM) | 键名对应的数据。

##  示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fstorage%2Fstorage)

</div> 

```js
tt.getStorage({
    key: "name",
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`getStorage fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例:
```json
{
    "data": "DemoName",
    "errMsg": "getStorage:ok"
}
``` 

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
