---
title: "table.getFieldList"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_getfieldlist
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690343189000
---
最后更新于 2023-07-26

# base.getFieldList
获取字段实例列表。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输出
Promise[字段实例](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/base-extensions/base-view-extensions/data-type/iwidgetfield)数组。

## 示例代码

```js
const table = await bitable.base.getTableByName('数据表')
const fieldList = await table.getFieldList()
console.log(fieldList)
```
