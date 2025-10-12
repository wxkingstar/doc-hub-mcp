---
title: "Service.Fold.getFoldStateMap"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/service/Fold/Service.Fold.getFoldStateMap
---
最后更新于 2025-07-31

# Service.Fold.getFoldStateMap
获取整篇文档的 block 的折叠信息，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

| **名称** | **数据类型**                                                                    | **是否必填** | **描述**  |
| ------ | --------------------------------------------------------------------------- | -------- | ------- |
| docRef | [DocumentRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/DocumentRef) | 是        | 指定的文档引用 |

## 输出

异步返回一个 [FoldStateMap](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/FoldStateMap/foldstatemap)

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const documentRef = await DocMiniApp.getActiveDocumentRef();
const foldStateMap = await DocMiniApp.Service.Fold.getFoldStateMap(documentRef);
console.log('debug', foldStateMap);
```

### 返回示例

```json
{
    "2": {
        "show": true,
        "type": "isv",
        "id": 2
    },
    "3": {
        "id": 3,
        "type": "heading9",
        "show": true,
        "folded": true
    },
    "4": {
        "id": 4,
        "type": "text",
        "closestFolderId": 3,
        "foldedBy": 3,
        "foldedByType": "heading9",
        "show": false,
        "folded": false
    }
}
```
