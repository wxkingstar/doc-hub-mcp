---
title: "table.getRecordIdList"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_getrecordidlist
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690343154000
---
最后更新于 2023-07-26

# table.getRecordIdList
获取记录id列表，该方法返回的记录id是无序的，若需要有序的请使用 视图 WidgetView 的 [view.getVisibleRecordIdList](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/base-extensions/base-view-extensions/api/view/view_getvisiblerecordidlist) 方法。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输出
Promise字符串数组。
## 示例代码
### 调用示例

```js
const selection = await bitable.base.getSelection();
const table = await bitable.base.getTableById(selection.tableId);

const res = await table.getRecordIdList();

```

### 返回示例
res:
```js
['recqrO5hl1', 'recpPHKX7F']
```
