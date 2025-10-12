---
title: "field.getMeta"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/field/field_getmeta
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690343035000
---
最后更新于 2023-07-26

# field.getMeta
获取字段元信息。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输出
Promise[IFieldMeta](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/base-extensions/base-view-extensions/data-type/ifieldmeta)对象。
## 示例代码
### 调用示例

```js
const selection = await bitable.base.getSelection();
const table = await bitable.base.getTableById(selection.tableId);
const field = await table.getFieldByName('多行文本');

const res = await field.getMeta();
```

### 返回示例
res:
```js
{
  "id": "fldgyVuQbo",
  "type": 1,
  "name": "多行文本",
  "property": {}
}
```
