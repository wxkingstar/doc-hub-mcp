---
title: "Document.insertBlocksByMarkdown"
source_url: https://open.feishu.cn/document/develop-docs-add-ons/05-api-doc/doc-document/document-insertblocksbymarkdown
---
最后更新于 2025-07-31

# Document.insertBlocksByMarkdown
将 Markdown 内容转化为 Blocks 并插入到文档中。
<md-alert> @lark-opdev/block-docs-addon-api **0.0.8+** 支持

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可写 | 所有视图 | - PC  
- 移动端 | 正文场景

## 输入

指定文档的引用以及设置的文档标题。
| **名称**   | **数据类型**                                                                                                                                    | **是否必填** | **描述**                   |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------ |
| blockRef | [BlockRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/BlockRef) | 是        | 需要插入 markdown 的 block 引用 |
| markdown | string                                                                                                                                      | 是        | 需要插入的 markdown           |

## 示例代码

### 调用示例

```js
DocMiniApp.getActiveDocumentRef().then(docRef => {
  DocMiniApp.Selection.getSelectedBlocks(docRef).then(selections => {
    const blockRef = selections[0].ref;
    const markdown = `
| 表头1 | 表头2 |
| ---- | ---- |
| 单元格1-1内容 | 单元格1-2内容 |
| 单元格2-1内容 | 单元格2-2内容 |` ;
    DocMiniApp.Document.insertBlocksByMarkdown(markdown, blockRef);
  })
}); 
```
