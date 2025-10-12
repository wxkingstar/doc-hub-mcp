---
title: "checkSession"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/open-ability/login/checksession
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737430332000
---
最后更新于 2025-01-21

# checkSession(Object object) 

checkSession(Object object)  用于检查用户当前的 session 状态是否有效。

## 支持说明

该接口目前仅支持在小程序中调用，具体支持的客户端版本说明如下表所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fcheck-session%2Fcheck-session)
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，无扩展属性。

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性。

## 示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fcheck-session%2Fcheck-session)

</div> 

```js
tt.checkSession({ 
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`checkSession fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：
```json
{
    "errMsg": "checkSession:ok"
}
```

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
