---
title: "Selection.offSelectionChange"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/selection/Selection.offSelectionChange
---
最后更新于 2025-07-31

# Selection.offSelectionChange
取消监听文档选区变化，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

指定文档的引用以及文档选区变化的回调函数
| **名称**   | **数据类型**                                                                                                                                       | **是否必填** | **描述**  |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| docRef   | [DocumentRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/DocumentRef) | 是        | 指定文档的引用 |
| callback | SelectionChangeHandler                                                                                                                         | 是        | 选区变化监听器 |

### SelectionChangeHandler

```js
type SelectionChangeHandler = (selectedBlocks: BlockSnapshot[]) => void;
```
| **名称**         | **数据类型**         | **是否必填** | **描述**       |
| -------------- | ---------------- | -------- | ------------ |
| selectedBlocks | BlockSnapshot[] | 是        | 选区变化后的 Block |

## 输出

无

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const docRef = await DocMiniApp.getActiveDocumentRef();

const selectionChangeCb = (selectedBlocks: BlockSnapshot[]) => {
      //一些操作
}
useEffect(() => {
    DocMiniApp.Selection.onSelectionChange(docRef, selectionChangeCb);
    return () => {
        DocMiniApp.Selection.offSelectionChange(docRef, selectionChangeCb);    
    };
});
```
