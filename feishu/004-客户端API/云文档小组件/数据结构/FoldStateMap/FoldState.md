---
title: "FoldState"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/06-data-structure/FoldStateMap/FoldState
---
最后更新于 2025-07-31

# FoldState
Block 的折叠信息
| **名称**          | **数据类型** | **是否必填** | **描述**                                      |
| --------------- | -------- | -------- | ------------------------------------------- |
| closestFolderId | number   | 否        | 被折叠 heading/list 或者 parent 拥有，指向 block id |
| folded          | boolean  | 否        | heading/list 类型 block record 中的 folded 字段   |
| foldedBy        | number   | 否        | 被谁折叠了，指向折叠 heading、list的 block id           |
| foldedByType    | string   | 否        | 被谁折叠了，指向折叠 heading、list的 block type         |
| id              | number   | 是        | block id                                    |
| show            | boolean  | 是        | 是否展示，没有被折叠的内容，show 为 true                   |
| type            | string   | 是        | block type
