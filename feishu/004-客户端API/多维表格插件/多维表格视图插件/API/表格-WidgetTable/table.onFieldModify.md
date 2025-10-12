---
title: "table.onFieldModify"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_onfieldmodify
last_remote_update: 2024-05-15
last_remote_update_timestamp: 1715741042000
---
最后更新于 2024-05-15

# table.onFieldModify
监听字段变化事件。将返回一个取消监听函数。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输入
```
onFieldModify((event) => {})
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
event | ```js  
{  
  "name": string,  
  "type": "publish",  
  "data": {  
    "fieldId": string,  
    "fieldType": number,  
    "tableId": string  
  },  
} | 否 | 被编辑字段的信息

## 输出
取消监听的函数。
## 示例代码

```js
const selection = await bitable.base.getSelection();
const table = await bitable.base.getTableById(selection.tableId);

const off = table.onFieldModify((event) => { // 监听字段变化事件。
  off();
  console.log('event:', event);
})

const fieldId = await table.addField({ // 新增字段不会触发字段变化事件
  type: FieldType.Text,
  name: '新增-4'
})

table.setField(fieldId,{ //修改字段名字
  name:'修改-1'
})
```
