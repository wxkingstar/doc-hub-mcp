---
title: "Viewport.scrollToBlock"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/viewport/Viewport.scrollToBlock
---
最后更新于 2025-07-31

# Viewport.scrollToBlock
将视口滚动到某个 Block 的位置，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

| **名称**    | **数据类型**                                                                 | **是否必填** | **描述**                                             |
| --------- | ------------------------------------------------------------------------ | -------- | -------------------------------------------------- |
| blockRef  | [BlockRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/BlockRef) | 是        | 指定的 Block 引用                                       |
| highlight | boolean                                                                  | 否        | 跳转后高亮高亮闪烁                                        |
| topToRoot | number                                                                   | 否        | 跳转后距离顶部的高度 最小高度不能小于0，最大高度不超过 (页面高度) - (header高度) |

## 输出

无

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const documentRef = await DocMiniApp.getActiveDocumentRef();
const blockRef = await DocMiniApp.getBlockRefById(documentRef, 7);
DocMiniApp.Viewport.scrollToBlock(blockRef);
```

### 返回示例

无
