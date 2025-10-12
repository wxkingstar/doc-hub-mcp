---
title: "Service.Window.getLocation"
source_url: https://open.feishu.cn/document/develop-docs-add-ons/05-api-doc/service/window/service-window-getlocation
---
最后更新于 2025-07-31

# getLocation
获取到当前文档的location，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | &nbsp;所有视图  
[关于视图请参见概念说明](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/02-cloud-doc-block-noun-explanation) | - PC  
- 移动端 | 演示模式

## 输入

无需传入参数。

## 输出

异步返回当前文档的location，它是一个object。

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
DocMiniApp.Service.Window.getLocation()
  .then((location) => {
    console.log('debug', location);
  })
```

### 返回示例

```json
{
    "href": "https://***",
    "origin": "https://***",
    "pathname": "/docx/***",
    "search": "?***",
    "hash": ""
}
```
