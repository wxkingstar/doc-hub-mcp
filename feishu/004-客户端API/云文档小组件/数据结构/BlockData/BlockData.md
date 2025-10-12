---
title: "BlockData"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/06-data-structure/BlockData/blockdata
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960624000
---
最后更新于 2025-07-31

# BlockData
Block 的详细数据定义，不同 Block 类型有不同的数据定义。以下是公共属性：

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
align | string | 否 | Block 的对齐方式，可选值包括：  
- 左对齐 - left  
- 居中对齐 - center  
- 右对齐 - right  
注意，尽管该属性在公共属性上，但并非所有 Block 的视图都支持该属性，目前支持的 Block 类型包括：  
- TEXT  
- HEADING1  
- HEADING2  
- HEADING3  
- HEADING4  
- HEADING5  
- HEADING6  
- HEADING7  
- HEADING8  
- HEADING9  
- BULLET  
- ORDERED  
- TODO  
- QUOTE  
- IMAGE  
- CHAT_CARD
