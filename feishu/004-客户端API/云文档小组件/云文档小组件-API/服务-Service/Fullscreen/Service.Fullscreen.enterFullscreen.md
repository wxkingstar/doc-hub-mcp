---
title: "Service.Fullscreen.enterFullscreen"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/service/Fullscreen/Service.Fullscreen.enterFullscreen
---
最后更新于 2025-07-31

# Service.Fullscreen.enterFullscreen
使小应用进入全屏状态，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 正文小组件 | PC | \-

## 输入

无需传入参数。

## 输出

无

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
DocMiniApp.Service.Fullscreen.enterFullscreen();
```

### 返回示例

无
