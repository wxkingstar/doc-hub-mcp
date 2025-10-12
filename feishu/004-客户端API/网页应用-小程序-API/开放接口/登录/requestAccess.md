---
title: "requestAccess"
source_url: https://open.feishu.cn/document/web-app/gadget-api/open-ability/login/requestaccess
---
最后更新于 2025-03-27

# requestAccess(Object object)

增量授予应用访问权限

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V6.9.0+ | V6.9.0+ | V6.9.0+ | V7.35.0+ | 预览
网页应用 | V6.9.0+ | V6.9.0+ | V6.9.0+ | V7.35.0+ | 预览

## 输入
继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
scopeList | Array<string\> | 是 | \- | 授予应用[权限列表](https://open.feishu.cn/document/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/scope-list)  
<md-alert>  
- 空数组表示：仅授予应用获取用户凭证信息权限 [获取登录用户信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/authen-v1/user_info/get)  
- 当传入增量权限后，用户在飞书客户端内使用应用时需要先完成授权。
state | string | 否 | \- | 用来维护请求和回调状态的附加字符串， 在授权完成回调时会附加此参数，应用可以根据此字符串来判断上下文关系。详见[获取授权登录授权码](https://open.feishu.cn/document/common-capabilities/sso/api/obtain-oauth-code)
appID | string | 否 | \- | 应用ID ( 网页应用必须传 )

## 输出
继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，`success`返回对象的扩展属性：

名称 | 数据类型 | 描述
--- | --- | ---
code | string | 临时登录凭证，有效期 3 分钟，只能使用一次
state | string | 用来维护请求和回调状态的附加字符串， 在授权完成回调时会附加此参数，应用可以根据此字符串来判断上下文关系。详见[获取授权登录授权码](https://open.feishu.cn/document/common-capabilities/sso/api/obtain-oauth-code)

## 示例代码
```js
tt.requestAccess({
  scopeList: ["contact:contact.base:readonly", "docs_tool:docs_tool"],
  appID: "cli_xxx", // 网页应用必传
  success(res) {
    console.log(JSON.stringify(res));
  },
  fail(res) {
    console.log(`requestAccess fail: ${JSON.stringify(res)}`);
  },
});
```

`success`返回对象示例：

```json
{
  "errMsg": "requestAccess:ok",
  "code": "1d34ef4fdfdf12332fffd"
}
```

**errno 错误码**

关于 Errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
