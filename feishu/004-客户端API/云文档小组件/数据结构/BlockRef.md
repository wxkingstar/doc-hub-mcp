---
title: "BlockRef"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/06-data-structure/BlockRef
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960589000
---
最后更新于 2025-07-31

# BlockRef
Block 的引用对象，通过 BlockId 来引用，或通过 parentRef + index 来引用。
> 请不要直接用读取 BlockRef 的属性，因为 BlockRef 只代表了引用而非实际数据，它的某些属性可能是空的。如果需要读取 Block 数据，请通过 DocMiniApp.Block.getBlock 接口拿到实际数据。

**名称**    | **数据类型**                                                                                                     | **是否必填** | **描述**                 |
| --------- | ------------------------------------------------------------------------------------------------------------ | -------- | ---------------------- |
| docRef    | [DocumentRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/DocumentRef) | 是        | 对应文档的引用                |
| blockId   | [BlockId](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/06-data-structure/blockid)     | 否        | 引用的 Block id           |
| parentRef | [BlockRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/BlockRef)                                     | 否        | 父 Block 的引用            |
| index     | number                                                                                                       | 否        | 引用 Block 在 父 Block 的位置
