---
title: "InteractionChangeset"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/06-data-structure/Interaction/InteractionChangeset
---
最后更新于 2025-07-31

# InteractionChangeset
Interaction 变更数据，是下面三种类型之一：
- remove 类型，表示将某个路径下的数据删除

| **名称** | **数据类型**              | **是否必填** | **描述**               |
| ------ | --------------------- | -------- | -------------------- |
| type   | 'remove'              | 是        | remove 类型的 changeset |
| data   | object                | 是        | changeset 数据         |
| ∟path  | (string \| number)[] | 是        | remove 的路径           |
- replace 类型，表示将某个路径下的数据替换成新数据

| **名称** | **数据类型**              | **是否必填** | **描述**                |
| ------ | --------------------- | -------- | --------------------- |
| type   | 'replace'             | 是        | replace 类型的 changeset |
| data   | object                | 是        | changeset 数据          |
| ∟path  | (string \| number)[] | 是        | replace 的路径           |
| ∟value | any                   | 是        | replace 的数据           |
- move 类型，表示将数组路径下的数据移动到另一个位置

| **名称**       | **数据类型**              | **是否必填** | **描述**             |
| ------------ | --------------------- | -------- | ------------------ |
| type         | 'move'                | 是        | move 类型的 changeset |
| data         | object                | 是        | changeset 数据       |
| ∟path        | (string \| number)[] | 是        | move 的路径           |
| ∟targetIndex | number                | 是        | move 的目标位置
