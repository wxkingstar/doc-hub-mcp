---
title: "getActiveWikiToken"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/basic-data-reference---base/getactivewikitoken
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753959930000
---
最后更新于 2025-07-31

# getActiveWikiToken
获取当前文档的 wiki token，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | &nbsp;所有视图  
[关于视图请参见概念说明](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/02-cloud-doc-block-noun-explanation) | - PC  
- 移动端 | 演示模式

## 输入

无需传入参数。

## 输出

异步返回当前文档的 wiki token，它是一个string类型

## 示例代码

### 调用示例

```js	
const DocMiniApp = new BlockitClient().initAPI();
DocMiniApp.getActiveWikiToken()
  .then((wikiToken) => {
    console.log('debug', wikiToken);
  })
```

### 返回示例

```json
'wikiToken'
```
