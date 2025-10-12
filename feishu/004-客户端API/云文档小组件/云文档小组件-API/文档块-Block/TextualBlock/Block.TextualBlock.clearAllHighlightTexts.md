---
title: "Block.TextualBlock.clearAllHighlightTexts"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/block/textualblock/Block.TextualBlock.clearAllHighlightTexts
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960294000
---
最后更新于 2025-07-31

# Block.TextualBlock.clearAllHighlightTexts
清除所有高亮文本，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

要清除所有高亮文本的文档
| **参数** | **类型**                                                                                                  | **必选** | **释义**       |
| ------ | ------------------------------------------------------------------------------------------------------- | ------ | ------------ |
| docRef | [DocumentRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/DocumentRef) | 是      | 要清除所有高亮文本的文档 |

## 输出

无

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const docRef = await DocMiniApp.getActiveDocumentRef();
await DocMiniApp.Block.TextualBlock.clearAllHighlightTexts(docRef);
```
