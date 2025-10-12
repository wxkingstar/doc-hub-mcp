---
title: "table.onRecordModify"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_onrecordmodify
---
最后更新于 2023-07-26

# table.onRecordModify
监听记录修改事件，将返回一个取消监听函数。如果记录修改前后是一样的，则不会触发回调函数。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输入
```
onRecordModify((event) => {})
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
event | ```js  
{  
  "name": string,  
  "type": "publish",  
  "data": {  
    "recordId": string,  
    "fieldIds": string[]  
  },  
} | 否 | fieldIds为修改的字段id数组

## 输出
取消监听的函数。
## 示例代码

```js
const selection = await bitable.base.getSelection();
const table = await bitable.base.getTableById(selection.tableId);
const recordIds = await table.getRecordIdList();
const field = await table.getFieldByName('多行文本')

const off = table.onRecordModify((event) => { // 监听记录修改事件
  off();
  console.log('event:', event);
})

table.setRecord(recordIds[0],{ // 修改某条记录的多行文本字段
  fields:{
    [field.id]:[{
      type:'text',
      text:'1234'+Math.random()
    }]
  }
})
```
