---
title: "Document.insertBlocksByHTML"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/doc-document/Document.insertBlocksByHTML
---
最后更新于 2025-07-31

# Document.insertBlocksByHTML
将 HTML 转化为 Blocks 并插入到文档中，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可写 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

指定文档的引用以及设置的文档标题。
| **名称**   | **数据类型**                                                                                                                                    | **是否必填** | **描述**               |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------------------- |
| blockRef | [BlockRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/BlockRef) | 是        | 需要插入 html 的 block 引用 |
| html     | string                                                                                                                                      | 是        | 需要插入的 html           |

## 输出

无

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const blockRef = await DocMiniApp.getActiveBlockRef();
await DocMiniApp.Document.insertBlocksByHTML(blockRef,'<span>我是一段html<span>')
```
