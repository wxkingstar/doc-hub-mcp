---
title: "table.getRecordById"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_getrecordbyid
---
最后更新于 2023-07-26

# table.getRecordById
获取指定记录 id 对应的记录。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输入
```
getRecordById(recordId)
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
recordId | string | 是 | 记录id

## 输出
Promise对象，包含该记录每个字段的值。
## 示例代码
### 调用示例

```js
const selection = await bitable.base.getSelection();
const table = await bitable.base.getTableById(selection.tableId);
const recordIds = await table.getRecordIdList(); // 获取recordId列表

const res = await table.getRecordById(recordIds[0]);

```

### 返回示例
```js
{
  "fields": {
    "fldgyVuQbo": [
      {
        "type": "text",
        "text": "123123"
      }
    ],
    "fld56pgsZo": [
      {
        "type": "text",
        "text": "22"
      }
    ]
  }
}
```
