---
title: "table.deleteRecords"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_deleterecords
---
最后更新于 2023-09-21

# table.deleteRecords
批量删除记录，最多5000条。

## 权限要求
<md-alert type="warn">
查看、评论、编辑和管理多维表格(bitable:app)

## 输入
```
deleteRecords(recordIdList)
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
recordIdList | string[] | 是 | 需要删除的记录id列表

## 输出
Promise布尔值。
## 示例代码
### 调用示例

```js
const selection = await bitable.base.getSelection();
const table = await bitable.base.getTableById(selection.tableId);
const recordIds = await table.getRecordIdList(); // 获取所有记录id

const res = await table.deleteRecords(recordIds.slice(0,500)); // 删除前500条记录
console.log(res) // true
```
