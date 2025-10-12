---
title: "table.onRecordDelete"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_onrecorddelete
---
最后更新于 2023-07-26

# table.onRecordDelete
监听记录删除事件，将返回一个取消监听函数。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输入
```
onRecordDelete((event) => {})
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
event | ```js  
{  
  "name": string,  
  "type": "publish",  
  "data": string[],  
} | 否 | data为被删除记录的recordId数组

## 输出
取消监听的函数。
## 示例代码

```js
const selection = await bitable.base.getSelection();
const table = await bitable.base.getTableById(selection.tableId);
const recordIds = await table.getRecordIdList();

const off = table.onRecordDelete((event) => { // 监听记录删除事件
  off();
  console.log('event:', event);
})

table.deleteRecord(recordIds[0]) // 删除记录
```
