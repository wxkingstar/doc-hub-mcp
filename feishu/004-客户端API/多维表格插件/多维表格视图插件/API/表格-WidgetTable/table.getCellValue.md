---
title: "table.getCellValue"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_getcellvalue
---
最后更新于 2023-07-26

# table.getCellValue
获取某个单元格的值。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输入
```
getCellValue(fieldId,recordId)
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
fieldId | string | 是 | 单元格的字段id
recordId | string | 是 | 单元格的记录id

## 输出
Promise对象[IOpenCellValue](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/base-extensions/base-view-extensions/data-type/iopencellvalue)。
## 示例代码
### 调用示例

```js
const selection = await bitable.base.getSelection();
const table = await bitable.base.getTableById(selection.tableId);
const recordIds = await table.getRecordIdList(); // 随机获数据表所有行id
const fields = await table.getFieldList();// 获取数据表字段列表

const res = await table.getCellValue(fields[0].id,recordIds[0]);

```

### 返回示例
res:
- 不同类型的单元格的返回的结构不同，以某个多行文本类型的单元格为例：
```js
[
  {
    "type": "text",
    "text": "123123"
  }
]
```
