---
title: "Selectionltem"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/06-data-structure/Selectionltem
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960931000
---
最后更新于 2025-07-31

# Selectionltem
选区信息，可以分为块级选区信息和文本选区信息。
| **名称** | **数据类型**            | **是否必填** | **描述**                                           |
| ------ | ------------------- | -------- | ------------------------------------------------ |
| type   | 'block' \| 'text'   | 是        | 选区类型，block 表示块选区，text 表示文本选区                     |
| ref    | BlockRef \| TextRef | 是        | 选区对应的 block 引用，BlockRef 表示 Block 的引用，Text 表示文本引用
