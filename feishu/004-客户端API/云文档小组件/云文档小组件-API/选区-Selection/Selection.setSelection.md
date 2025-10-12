---
title: "Selection.setSelection"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/selection/Selection.setSelection
---
最后更新于 2025-07-31

# Selection.setSelection
设置选区信息，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

指定文档的引用以及需要选中的 Block 的 id 数组
| **名称**         | **数据类型**         | **是否必填** | **描述** |
| -------------- | ---------------- | -------- | ------ |
| selectionItems | SelectionItem[] | 是        | 选区信息   |

## 输出

无

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const docRef = await DocMiniApp.getActiveDocumentRef();
const block = await DocMiniApp.Document.getRootBlock(docRef);
await DocMiniApp.Selection.setSelection([{ type: 'block', ref: block.ref }]);
```
