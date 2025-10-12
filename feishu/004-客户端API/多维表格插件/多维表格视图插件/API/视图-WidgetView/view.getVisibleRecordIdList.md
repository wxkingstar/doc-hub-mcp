---
title: "view.getVisibleRecordIdList"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/view/view_getvisiblerecordidlist
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690343012000
---
最后更新于 2023-07-26

# view.getVisibleRecordIdList
获取可见的记录id列表。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输出
Promise字符串数组。
## 示例代码
### 调用示例

```js
// 示例代码
const selection = await bitable.base.getSelection();
const table = await bitable.base.getTableById(selection.tableId); // 获取当前数据表实例
const viewMetaList = await table.getViewMetaList(); // 获取视图元信息列表
const view = await table.getViewById(viewMetaList[0].id); // 根据id随机获取一个视图实例

const res = await view.getVisibleRecordIdList()
console.log(res)
```

### 返回示例
res:
```js
[
  "rec1i6gIHj",
  "rec8Do63xI",
  "recFNRH5QF"
]
```
