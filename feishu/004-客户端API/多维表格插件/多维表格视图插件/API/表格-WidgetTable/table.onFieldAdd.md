---
title: "table.onFieldAdd"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_onfieldadd
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690343084000
---
最后更新于 2023-07-26

# table.onFieldAdd
监听数据表字段增加事件。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输入
```
onFieldAdd((event) => {})
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
event | ```js  
{  
  "name": string,  
  "type": string,  
  "data": {  
    "tableId": string,  
    "fieldId": string,  
    "fieldType": number  
  },  
} | 否 | 新增字段的相关信息

## 输出
取消监听的函数。
## 示例代码

```js
    const selection = await bitable.base.getSelection();
    const table = await bitable.base.getTableById(selection.tableId);

const off = table.onFieldAdd((event) => {
        off();
        console.log('event:', event);
        console.log(JSON.stringify(event,null,'  '))
    })
    const fieldId = await table.addField({ // 新增一个多行文本类型的字段
        type: FieldType.Text,
        name: '新增字段'
    })
```
