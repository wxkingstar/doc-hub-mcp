---
title: "Events.onDocumentChange"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/events/Events.onDocumentChange
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960412000
---
最后更新于 2025-07-31

# Events.onDocumentChange
监听文档内容变化，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

| **名称**  | **数据类型**                                                               | **是否必填** | **描述**  |
| ------- | ---------------------------------------------------------------------- | -------- | ------- |
| docRef  | [DocumentRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/DocumentRef) | 是        | 文档引用    |
| handler | DocumentChangeHandler                                                  | 是        | 文档变化监听器 |

### DocumentChangeHandler

```js
type DocumentChangeHandler = (event: DocumentChangeEvent) => void;
```

### DocumentChangeEvent

文档变化事件
| **名称**  | **数据类型**       | **是否必填** | **描述**  |
| ------- | -------------- | -------- | ------- |
| changes | BlockChange[] | 是        | 文档变更的内容 |

## 输出

无

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const docRef = await DocMiniApp.getActiveDocumentRef();
const handleDocumentChange = (event: DocumentChangeEvent) => {
    console.log('debug', event);
};
DocMiniApp.Events.onDocumentChange(docRef, handleDocumentChange);
```

### 返回示例

无
