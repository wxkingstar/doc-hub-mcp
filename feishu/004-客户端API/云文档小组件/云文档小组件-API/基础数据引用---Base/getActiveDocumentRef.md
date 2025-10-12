---
title: "getActiveDocumentRef"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/basic-data-reference---base/getactivedocumentref
---
最后更新于 2025-07-31

# getActiveDocumentRef
获取到当前文档的引用，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 可用平台 | 可用场景
--- | --- | --- | ---
可读 | &nbsp;所有视图  
[关于视图请参见概念说明](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/02-cloud-doc-block-noun-explanation) | - PC  
- 移动端 | 演示模式

## 输入

无需传入参数。

## 输出

异步返回当前文档的引用，它是一个 [DocumentRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/DocumentRef)。

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
DocMiniApp.getActiveDocumentRef()
  .then((token) => {
    console.log('debug', token);
  })
```

### 返回示例

```json
{
    "docToken": "docx token"
}
```
