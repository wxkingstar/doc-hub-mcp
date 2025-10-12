---
title: "table.getCellString"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_getcellstring
---
最后更新于 2023-07-26

# table.getCellString
获取单元格的值 (字符串) 。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输入
```
getCellString(fieldId,recordId)
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
fieldId | string | 是 | 单元格的字段id
recordId | string | 是 | 单元格的记录id

## 输出
Promise字符串。
## 示例代码

```js
const selection = await bitable.base.getSelection();
const table = await bitable.base.getTableById(selection.tableId);
const recordIds = await table.getRecordIdList(); // 随机获数据表所有行id
const fields = await table.getFieldList();// 获取数据表字段列表

const res = await table.getCellString(fields[0].id,recordIds[0]); 
console.log(res)

```
