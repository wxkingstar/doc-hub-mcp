---
title: "updateBadge"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/open-ability/appbadge/updagebadge
---
最后更新于 2023-12-04

# updateBadge

updateBadge(Object object) 用于更新当前设备上的应用角标数。角标的使用文档可参看：[应用角标功能开发指南](https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/application-badge/development-guide-for-using-the-application-badge)。

## 注意事项

- 调用前需要用户授权 `scope.appBadge`。了解如何授权，参见[API 权限](https://open.feishu.cn/document/uYjL24iN/uITMuITMuITM)。
-  应用在接入[角标系统](https://www.feishu.cn/hc/zh-CN/articles/190879687838-%E5%BA%94%E7%94%A8%E8%A7%92%E6%A0%87%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D)后调用此 API 才会有效，否则会提示对应的角标（badge）不存在。
-  当应用内有动作会引起角标数变化时，需要在自己对应的服务端请求成功后调用此 API。
- 小程序调用该接口前，需要确保已经调用 [login](https://open.feishu.cn/document/uYjL24iN/uYzMuYzMuYzM) 接口完成登录。
- 网页应用需要在[鉴权](https://open.feishu.cn/document/uYjL24iN/uEzM4YjLxMDO24SMzgjN)后调用该接口。

- 网页应用的鉴权是指基于页面 URL，使用固定的算法生成一个字符串（即签名），然后将签名和其他参数传给 `h5sdk.config` 接口，完成鉴权。
	- 在生成签名时，需要携带页面 URL 的 query，即 URL 的`?`及其后面的全部内容。

## 支持说明

该接口支持小程序和网页应用调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | 预览效果
--- | --- | --- | --- | ---
小程序 | V5.9.0+ | V5.9.0+ | V5.9.0+ | 预览
网页应用 | V5.9.0+ | V5.9.0+ | V5.9.0+ | 预览

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性如下所示。

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
badgeNum | int | 是 | \- | 应用内的角标数。

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性。

## 示例代码

```js
tt.updateBadge({
	badgeNum: badgeItem.badgeNum,
	success(res) {
		console.log("api update badge success res=", res);
	},
	fail(res) {
		console.error("api update badge fail res=", res);
	},
});
```

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
