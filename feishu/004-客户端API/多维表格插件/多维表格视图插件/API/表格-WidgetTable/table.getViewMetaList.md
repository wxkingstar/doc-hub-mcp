---
title: "table.getViewMetaList"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_getviewmetalist
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690343131000
---
最后更新于 2023-07-26

# table.getViewMetaList
获取视图元信息列表。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输出
字段元信息对象数组。
## 示例代码
### 调用示例

```js
const selection = await bitable.base.getSelection();
const table = await bitable.base.getTableById(selection.tableId);

const res = await table.getViewMetaList();
console.log(res)
```

### 返回示例
res:
```js
[
  {
    "name": "表格",
    "id": "vewDUmweGB",
    "type": 1
  }
]
```
