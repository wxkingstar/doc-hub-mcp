---
title: "table.getFieldMetaById"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_getfieldmetabyid
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690343166000
---
最后更新于 2023-07-26

# base.getFieldMetaById
获取某个 field 元信息。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输入
```
getFieldMetaById(fieldId)
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
fieldId | string | 是 | 字段的id

## 输出
Promise字段元信息对象。
## 示例代码
### 调用示例

```js
const selection = await bitable.base.getSelection();
const table = await bitable.base.getTableById(selection.tableId); // 获取当前table
const fieldList = await table.getFieldList();// 获取当前table下所有字段

const res = await table.getFieldMetaById(fieldList[0].id);
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
