---
title: "Document.getTitle"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/doc-document/Document.getTitle
---
最后更新于 2025-07-31

# Document.getTitle
获取指定文档的标题，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

指定文档的引用
| **名称** | **数据类型**                                                                                                                                       | **是否必填** | **描述**  |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| docRef | [DocumentRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/DocumentRef) | 是        | 指定文档的引用 |

## 输出

异步返回指定文档的标题，它是string类型

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const docRef = await DocMiniApp.getActiveDocumentRef();
const docTitle = await DocMiniApp.Document.getTitle(docRef)
console.log('debug', docTitle);
```

### 返回示例

```
'云文档小组件测试页面'
```
