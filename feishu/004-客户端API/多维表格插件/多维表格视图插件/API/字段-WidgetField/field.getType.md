---
title: "field.getType"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/field/field_gettype
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690343060000
---
最后更新于 2023-07-26

# field.getType
获取字段的字段类型[FieldType](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/base-extensions/base-view-extensions/data-type/fieldtype)。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输出
Promise 字段类型[FieldType](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/base-extensions/base-view-extensions/data-type/fieldtype)。
## 示例代码
### 调用示例

```js
const selection = await bitable.base.getSelection();
const table = await bitable.base.getTableById(selection.tableId);
const filed = await table.getFieldByName('查找引用'); // 获取查找引用字段。该字段引用了某个多行文本字段;

const res = await filed.getType()
```

### 返回示例
res:
```js
19
```
