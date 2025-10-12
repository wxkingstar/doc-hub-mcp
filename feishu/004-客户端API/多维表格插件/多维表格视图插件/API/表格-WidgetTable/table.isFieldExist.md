---
title: "table.isFieldExist"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_isfieldexist
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690343083000
---
最后更新于 2023-07-26

# table.isFieldExist
字段是否存在。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输入

```
isFieldExist(fieldId)
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
fieldId | string | 是 | 字段id

## 输出
Promise布尔值。
## 示例代码
### 调用示例
```js
const selection = await bitable.base.getSelection();
const table = await bitable.base.getTableById(selection.tableId);
const field = await table.getFieldByName('多行文本');

const res = await table.isFieldExist(field.id)
console.log(res) // true
```
### 返回示例
res:
```js
true
```
