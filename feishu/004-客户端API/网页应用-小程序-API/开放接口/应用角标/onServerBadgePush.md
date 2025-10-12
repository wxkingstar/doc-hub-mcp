---
title: "onServerBadgePush"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/open-ability/appbadge/onserverbadgepush
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737430769000
---
最后更新于 2025-01-21

# onServerBadgePush(Object object)

监听应用的红点（Badge）推送
**Notice**：注意事项：
- 调用前需要用户授权 `scope.appBadge`。了解如何授权，可查看[API 权限](https://open.feishu.cn/document/uYjL24iN/uITMuITMuITM)。

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
`onPush`回调函数返回对象的属性：

名称 | 数据类型 | 描述
--- | --- | ---
badgeNum | number | 红点总数
updateTime | string | 更新的时间
version | string | 当前红点的版本
feature | int | 当前红点信息对应的应用形态，即该 Badge 的发起方。  

1：小程序                   
2：网页应用。
extra | string | 业务侧自行扩展的数据，即透传业务侧的 extra 参数。

## 示例代码

```js
const _onPush = (res) => {
  console.log(res)
};
tt.onServerBadgePush(_onPush)
```
