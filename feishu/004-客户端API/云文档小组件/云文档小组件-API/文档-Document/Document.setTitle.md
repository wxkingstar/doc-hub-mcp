---
title: "Document.setTitle"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/doc-document/Document.setTitle
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753959989000
---
最后更新于 2025-07-31

# Document.setTitle
设置指定文档的标题，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可写 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

指定文档的引用以及设置的文档标题。
| **名称** | **数据类型**                                                                                                                                       | **是否必填** | **描述**  |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| docRef | [DocumentRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/DocumentRef) | 是        | 指定文档的引用 |
| title  | string                                                                                                                                         | 是        | 设置的文档标题 |

## 输出

无

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const docRef = await DocMiniApp.getActiveDocumentRef();
await DocMiniApp.Document.setTitle(docRef,'新的title')
```
