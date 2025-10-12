---
title: "Document.getRootBlock"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/doc-document/Document.getRootBlock
---
最后更新于 2025-07-31

# Document.getRootBlock
获取指定文档的根 Block，该方法为异步调用。

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

异步返回指定文档的根 Block，是一个[BlockSnapshot](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/BlockSnapshot)

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const docRef = await DocMiniApp.getActiveDocumentRef();
const rootblock = await DocMiniApp.Document.getRootBlock(docRef)
console.log('debug', rootblock);
```

### 返回示例

```json
{
    "childIndex": -1
    "childSnapshots": (2) [{…}, {…}]
    "children": (2) [3, 4]
    "data": {plain_text: '云文档小应用测试页面', text: {…}}
    "id": 1
    "recordId": "recordId"
    "ref": 
    "blockId" : 1
    "docRef" : {"docToken": 'docx token'}
    "type": "page"
}
```
