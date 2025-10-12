---
title: "Service.Fold.toggleFold"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/service/Fold/Service.Fold.toggleFold
---
最后更新于 2025-07-31

# Service.Fold.toggleFold
对某个 Block 设置指定的折叠状态，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

| **名称**   | **数据类型**                                                                 | **是否必填** | **描述**       |
| -------- | ------------------------------------------------------------------------ | -------- | ------------ |
| blockRef | [BlockRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/BlockRef) | 是        | 指定的 Block 引用 |
| fold     | boolean                                                                  | 是        | 切换成折叠的状态     |

## 输出

无

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const documentRef = await DocMiniApp.getActiveDocumentRef();
const blockRef = await DocMiniApp.getBlockRefById(documentRef, 3);
DocMiniApp.Service.Fold.toggleFold(blockRef, true);
```

### 返回示例

无
