---
title: "table.getFieldById"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_getfieldbyid
---
最后更新于 2023-07-26

# base.getFieldById
获取某个 field 元信息。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输入
```
getFieldById(fieldId)
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
fieldId | string | 是 | 字段的id

## 输出
Promise[字段实例](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/base-extensions/base-view-extensions/data-type/iwidgetfield)

## 示例代码

```js
const selection = await bitable.base.getSelection();
const table = await bitable.base.getTableById(selection.tableId); // 获取当前table

const fieldList = await table.getFieldList();// 获取当前table下所有字段

const field = await table.getFieldById(fieldList[0].id);

```
