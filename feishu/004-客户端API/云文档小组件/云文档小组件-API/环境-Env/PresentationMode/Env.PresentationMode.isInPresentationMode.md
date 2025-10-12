---
title: "Env.PresentationMode.isInPresentationMode"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/env/PresentationMode/Env.PresentationMode.isInPresentationMode
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960448000
---
最后更新于 2025-07-31

# Env.PresentationMode.isInPresentationMode
判断当前小应用是否在演示模式中，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

无需传入参数。

## 输出

异步返回一个 boolean值

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const isInPresentationMode = await DocMiniApp.Env.PresentationMode.isInPresentationMode();
console.log('debug', isInPresentationMode);
```

### 返回示例

```
false
```
