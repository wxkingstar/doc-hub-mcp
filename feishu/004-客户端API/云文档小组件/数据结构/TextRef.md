---
title: "TextRef"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/06-data-structure/TextRef
---
最后更新于 2025-07-31

# TextRef
文本的引用对象。

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
blockRef | [BlockRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/BlockRef) | 是 | 对应的 Block 引用
range | [number, number] | 是 | 文本范围，假设数组为 [start, end]，则：  
  - start > end 时，是非法值，会降级为 [start, start]  
  - start = end 时，表示文本位置  
  - start < end 时，表示文本范围  
start 和 end 超出 Block 的文本内容时，则设置为文本内容的最后位置。
