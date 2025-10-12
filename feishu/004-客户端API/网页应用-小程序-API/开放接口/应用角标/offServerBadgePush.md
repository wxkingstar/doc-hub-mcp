---
title: "offServerBadgePush"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/open-ability/appbadge/offserverbadgepush
---
最后更新于 2025-01-21

# offServerBadgePush(Object object)

取消对红点（Badge）推送的监听

## 支持说明

应用能力 | Android | iOS | PC | 预览效果
--- | --- | --- | --- | ---
小程序 | V5.9.0+ | V5.9.0+ | V5.9.0+ | 预览
网页应用 | V7.10.0+ | V7.10.0+ | V7.10.0+ | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
onPush | function | 是 |  | 回调函数

## 输出
无

## 示例代码

```js
const _onPush = (res)=> {
	console.log(res);
}
tt.offServerBadgePush(_onPush)
```
