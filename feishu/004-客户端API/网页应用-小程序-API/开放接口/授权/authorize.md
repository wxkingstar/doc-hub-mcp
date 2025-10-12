---
title: "authorize"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/open-ability/authorize/authorize
---
最后更新于 2025-01-21

# authorize(Object object)

authorize(Object object) 用于向用户发出设置权限的请求。权限范围可参见[API 权限](https://open.feishu.cn/document/uYjL24iN/uITMuITMuITM)。

## 注意事项

- 如果是用户未设置过的权限，则发送请求后，会弹窗咨询用户是否授予权限。
- 如果是用户已设置过的权限，则接口会直接返回结果，不会与用户进行交互。

## 支持说明

该接口支持小程序和网页应用调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fauthorized%2Fauthorized)
网页应用 | V3.44.0+ | V3.44.0+ | V3.44.0+ | V7.35.0+ | 预览

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性如下所示。

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
scope | string | 是 | \- | 需要请求用户设置的权限名称。支持设置的权限名称范围，可参见[API 权限](https://open.feishu.cn/document/uYjL24iN/uITMuITMuITM)。  
**示例值**：scope.record

## 输出
该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性。

## 示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fauthorized%2Fauthorized)
          预览网页应用

</div> 

```js
tt.authorize({
    scope: "scope.record",
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`authorize fail: ${JSON.stringify(res)}`);
    }
});
```
`success`返回对象示例：
```json
{
    "errMsg": "authorize:ok"
}
```

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
