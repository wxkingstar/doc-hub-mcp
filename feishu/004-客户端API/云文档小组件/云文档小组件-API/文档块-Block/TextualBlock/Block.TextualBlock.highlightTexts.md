---
title: "Block.TextualBlock.highlightTexts"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/block/textualblock/blocktextualblockhighlighttexts
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960235000
---
最后更新于 2025-07-31

# Block.TextualBlock.highlightTexts
高亮文本，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

文本数据以及指定处理的文本范围，不指定默认全部

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
highlightTextRef | HighlightTextRef[] | 是 | 需要高亮指定范围的文本集数据
color | string | 否 | 可选值  
  - R500  
  - O500  
  - Y500  
  - G500   
  - B500  
  - P500   
  - R500Tint  
  - O500Tint   
  - Y500Tint  
  - G500Tint  
  - B500Tint  
  - P500Tint

## 输出

无

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const docRef = await DocMiniApp.getActiveDocumentRef();
const selectedBlocks = await DocMiniApp.Selection.getSelectedBlocks(docRef);
const highlightRefs = selectedBlocks.map((item: any) => {
  if (item.type === 'text') {
    const textRef = { ...item.ref, range: [1, 3] };
    return { ...textRef, style: { color: 'R500' } };
  }
});
await DocMiniApp.Block.TextualBlock.highlightTexts(highlightRefs);
```
