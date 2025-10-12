---
title: "table.deleteRecord"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_deleterecord
---
最后更新于 2023-07-26

# table.deleteRecord
删除一行记录。

## 权限要求
<md-alert type="warn">
查看、评论、编辑和管理多维表格(bitable:app)

## 输入
```
deleteRecord(recordId)
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
recordId | string | 是 | 需要被删除的记录id

## 输出
promise布尔值。删除成功的时候为true。
## 示例代码
### 调用示例

```js
  const selection = await bitable.base.getSelection();
  const table = await bitable.base.getTableById(selection.tableId);
  const recordIds = await table.getRecordIdList(); // 获取所有记录id

const res = await table.deleteRecord(recordIds[0])

```

### 返回示例
res:
```js
true
```
