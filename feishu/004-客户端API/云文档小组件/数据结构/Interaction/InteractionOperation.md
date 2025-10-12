---
title: "InteractionOperation"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/06-data-structure/Interaction/InteractionOperation
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960931000
---
最后更新于 2025-07-31

# InteractionOperation
Interaction 变更数据op
| **名称** | **数据类型**                 | **是否必填** | **描述**                      |
| ------ | ------------------------ | -------- | --------------------------- |
| p:     | InteractionOperationPath | 是        | Interaction Operation 的操作路径 |
| action | object                   | 否        | Interaction Operation 的操作   |
| ∟li    | any                      | 否        | 在list中插入元素                  |
| ∟si    | any                      | 否        | 对string插入字符                 |
| ∟sd    | any                      | 否        | 删除string中字符                 |
| ∟ld    | any                      | 否        | 删除list中元素                   |
| ∟od    | any                      | 否        | 删除object中的元素                |
| ∟na    | number                   | 否        | 加上数字，如果你想减去，加上一个负数          |
| ∟lm    | number                   | 否        | 移动list中的元素                  |
Interaction Operation 的操作路径
| **名称**                   | **数据类型**              | **描述**                      |
| ------------------------ | --------------------- | --------------------------- |
| InteractionOperationPath | (string \| number)[] | Interaction Operation 的操作路径
