---
title: "Service.Fullscreen.exitFullscreen"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/service/Fullscreen/Service.Fullscreen.exitFullscreen
---
最后更新于 2025-07-31

# Service.Fullscreen.exitFullscreen
使小应用退出全屏状态，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 全屏视图 | PC | \-

## 输入

无需传入参数。

## 输出

无

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
DocMiniApp.Service.Fullscreen.exitFullscreen();
```

### 返回示例

无
