---
title: "Block.TextBlock.getRawText"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/block/textblock/Block.TextBlock.getRawText
---
最后更新于 2025-07-31

# Block.TextBlock.getRawText
获取原始的文本数据，可以跟 range 对应上。该方法是同步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
无需权限 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

文本数据
| **名称** | **数据类型**                                                                                                                                         | **是否必填** | **描述** |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------ |
| data   | [TextBlockData](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/BlockData/textblockdata/textblockdata) | 是        | 文本数据   |

## 输出

返回一个原始的文本数据,它是一个字符串

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const docRef = await DocMiniApp.getActiveDocumentRef();
const blockRef = DocMiniApp.getBlockRefById(docRef,7);
const block = await DocMiniApp.Block.getBlock(blockRef);
const rawText =  DocMiniApp.Block.TextBlock.getRawText(block.data as TextBlockData);
```

### 返回示例

```
'text'
```
