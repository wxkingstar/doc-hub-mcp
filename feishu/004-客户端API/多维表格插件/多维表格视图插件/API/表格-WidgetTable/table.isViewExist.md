---
title: "table.isViewExist"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_isviewexist
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690343083000
---
最后更新于 2023-07-26

# table.isViewExist
判断视图是否存在。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输入
```
isViewExist(viewId)
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
viewId | string | 是 | 视图id

## 输出
Promise布尔值，为true的时候表示视图存在。
## 示例代码
### 调用示例
```js
const selection = await bitable.base.getSelection();
const table = await bitable.base.getTableById(selection.tableId);
const viewMetaList =await table.getViewMetaList();

const res = await table.isViewExist(viewMetaList[0].id)
console.log(res)//true
```

### 返回示例
res:
```js
true
```
