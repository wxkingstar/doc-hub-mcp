---
title: "SheetBlockData"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/06-data-structure/BlockData/SheetBlockData
---
最后更新于 2025-07-31

# SheetBlockData
电子表格 Block 的数据结构，继承于 [BlockData](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/BlockData/blockdata)

| **名称** | **数据类型** | **是否必填** | **描述**                                                                                |
| ------ | -------- | -------- | ------------------------------------------------------------------------------------- |
| token  | string   | 是        | 电子表格 Token。格式为 `SheetToken_SheetID`。其中 `SheetToken` 是电子表格的唯一标识，`SheetID` 是一张工作表的唯一标识。
