---
title: "getStorageInfo"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/cache/getstorageinfo
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737434455000
---
最后更新于 2025-01-21

# getStorageInfo

调用 getStorageInfo(Object object) 获取本地缓存数据的相关信息。

## 支持说明

该接口仅支持小程序调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%20%2Fpage%2FAPI%2Fpages%2Fstorage%2Fstorage)
网页应用 | **x** | **x** | **x** | **x** | /

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，无扩展属性。

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，`success` 返回对象的扩展属性如下所示。

名称 | 数据类型 | 描述
--- | --- | ---
keys | string[] | 本地数据缓存中的所有键名列表，如果没有本地数据则返回空数组。
currentSize | number | 占用空间大小。单位：KB
limitSize | number | 存储空间上限。单位：KB

## 示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%20%2Fpage%2FAPI%2Fpages%2Fstorage%2Fstorage)

</div> 

```js
tt.getStorageInfo({ 
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`getStorageInfo fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：
```json
{
    "limitSize": 10240,
    "currentSize": 0.0419921875,
    "keys": [
        "name"
    ],
    "errMsg": "getStorageInfo:ok"
}
```

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
