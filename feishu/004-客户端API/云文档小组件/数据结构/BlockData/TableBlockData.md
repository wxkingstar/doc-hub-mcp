---
title: "TableBlockData"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/06-data-structure/BlockData/TableBlockData
---
最后更新于 2025-07-31

# TableBlockData
表格 Block 的数据结构，继承于 [BlockData](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/BlockData/blockdata)

| **名称**        | **数据类型**  | **是否必填** | **描述**                            |
| ------------- | --------- | -------- | --------------------------------- |
| cells         | string[] | 是        | 单元格数组，数组元素为 Table Cell Block 的 id |
| property      | object    | 是        | 表格属性                              |
|  ∟row_size    | number    | 是        | 表格行数                              |
|  ∟column_size | number    | 是        | 表格列数                              |
|  ∟column_wdth | number[] | 是        | 列宽数组，单位 px                        |
|  ∟merge_info  | object[] | 否        | 单元格合并信息                           |
|   ∟row_span   | number    | 否        | 从当前行索引起被合并的连续行数                   |
|   ∟col_span   | number    | 否        | 从当前列索引起被合并的连续列数
