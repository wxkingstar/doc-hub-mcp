---
title: "BlockSnapshot"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/06-data-structure/BlockSnapshot
---
最后更新于 2025-07-31

# BlockSnapshot
Block 的快照信息对象。
| **名称**         | **数据类型**                                                                         | **是否必填** | **描述**                                                                                            |
| -------------- | -------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------- |
| id             | [BlockId](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/06-data-structure/blockid)          | 是        | Block id，[见【数据结构定义 - BlockId】](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/06-data-structure/blockid)      |
| type           | [BlockType](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/BlockType)        | 是        | Block 的类型，[见【数据结构定义 - BlockType】](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/BlockType)   |
| data           | [BlockData](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/BlockData/blockdata)        | 是        | Block 的详细数据，[见【数据结构定义 - BlockData】](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/BlockData/blockdata) |
| parent         | [BlockId](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/06-data-structure/blockid)          | 否        | Block 的父 Block id                                                                                 |
| children       | [BlockId](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/06-data-structure/blockid)[]       | 是        | Block 所有子 Block id                                                                                |
| childSnapshots | [BlockSnapshot](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/BlockSnapshot)[] | 是        | Block 所有子 Block Snapshot                                                                          |
| childIndex     | number                                                                           | 是        | Block 所在父 Block 的索引位置                                                                             |
| recordId       | string                                                                           | 是       | Block 对应的 record id                                                                               |
| ref            | [BlockRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/BlockRef)       | 是        | Block 对应的 Block 引用
