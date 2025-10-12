---
title: "CreateBlockSnapshot"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/06-data-structure/CreateBlockSnapshot
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960919000
---
最后更新于 2025-07-31

# CreateBlockSnapshot
创建 Block 时传入的数据对象，跟 [BlockSnapshot](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/BlockSnapshot)类似，但只有 `type` 和 `data` 属性。
| **名称** | **数据类型**  | **是否必填** | **描述**                                                                                          |
| ------ | --------- | -------- | ----------------------------------------------------------------------------------------------- |
| type   | BlockType | 是        | Block 的类型，[见【数据对象 - BlockType】](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/BlockType)   |
| data   | BlockData | 是        | Block 的详细数据，[见【数据对象 - BlockData】](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/BlockData/blockdata)
