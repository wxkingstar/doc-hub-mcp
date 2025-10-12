---
title: "reportBadge"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/open-ability/appbadge/reportbadge
---
最后更新于 2025-04-15

# reportBadge(Object object)

用户在小程序或网页应用内，更新或拉取到新的待办事项，使总待办事项数量发生变化时，可以调用 reportBadge(Object object) 上报应用内的角标（badge）数量。你可以使用该接口与客户端本地的角标数作对比，以此监控角标系统的准确性。

## 注意事项

调用前需要用户授权 `scope.appBadge`。具体的授权操作，可参见 [API 权限](https://open.feishu.cn/document/uYjL24iN/uITMuITMuITM)。

## 支持说明

该接口支持小程序和网页应用调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V5.9.0+ | V5.9.0+ | V5.9.0+ | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fchoose-chat%2Fchoose-chat)
网页应用 | V5.9.0+ | V5.9.0+ | V5.9.0+ | V7.35.0+ | 预览

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性如下所示。

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
badgeNum | int | 是 | \- | 应用内的角标数。

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，`success` 返回对象的扩展属性如下所示。

名称 | 数据类型 | 描述
--- | --- | ---
isMatched | boolean | 应用内 badge 数和飞书客户端上展示的是否一致。

## 示例代码

```js
tt.reportBadge({
	badgeNum: badgeItem.badgeNum,
	success(res) {
		console.log("api report badge success res=", res);
	},
	fail(res) {
		console.error("api report badge fail res=", res);
	},
});
```

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
