---
title: "table.onFieldDelete"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_onfielddelete
---
最后更新于 2024-05-15

# table.onFieldDelete
监听字段添加事件，将返回一个取消监听函数。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输入
```
onFieldDelete((event) => {})
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
event | ```js  
{  
  "name": string,  
  "type": "publish",  
  "data": {  
    "tableId": string,  
    "fieldId": string,  
    "fieldType": number  
  },  
} | 否 | 被删除字段的相关信息

## 输出
取消监听的函数。
## 示例代码

```js
const selection = await bitable.base.getSelection();
const table = await bitable.base.getTableById(selection.tableId);

const off = table.onFieldDelete((event) => {
  off();
  console.log('event:', event);
})

const fieldId = await table.addField({ // 新增字段。
  type: FieldType.Text,
  name: '新增-2'
})

table.deleteField(fieldId)//删除字段。
```
