---
title: "TextBlockData"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/06-data-structure/BlockData/textblockdata/textblockdata
---
最后更新于 2025-07-31

# TextBlockData
文本类 Block 数据结构，继承于 [BlockData](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/BlockData/blockdata)

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
text | object | 是 | 文本数据
∟elements | object | 是 | 文本元素数组， 其中 TextElement 类型是下面类型中的一种：  
- TextRun  
- MentionUser  
- MentionDoc  
- Reminder  
- File  
- InlineBlock  
- Equation
plain_text | string | 是 | 返回文档上显示的文本数据，包括（reminder，InlineBlock， MentionUser，Equation， MentionDoc等）
