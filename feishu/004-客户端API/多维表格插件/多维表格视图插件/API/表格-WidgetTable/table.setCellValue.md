---
title: "table.setCellValue"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_setcellvalue
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690343119000
---
最后更新于 2023-07-26

# table.setCellValue
设置单元格的值。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输入
```
table.setCellValue(fieldId, recordId, cellValue)
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
fieldId | string | 是 | 字段id
recordId | string | 是 | 记录id
cellValue | [IOpenCellValue](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/base-extensions/base-view-extensions/data-type/iopencellvalue) | 是 | 单元格的值

## 输出
Promise布尔值。为true的时候表示设置成功。
## 示例代码
### 调用示例

```js
const selection = await bitable.base.getSelection();
const table = await bitable.base.getTableById(selection.tableId);
const recordIds = await table.getRecordIdList();
const field = await table.getFieldByName('多行文本');

// 设置某个多行文本类型的字段
const res = await table.setCellValue(field.id,recordIds,[
    {
        type:'text',
        text:'123'
    }
])

```

### 返回示例
res:
```js
true
```
