---
title: "table.onRecordAdd"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_onrecordadd
---
最后更新于 2023-07-26

# table.onRecordAdd
监听记录添加事件，将返回一个取消监听函数。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输入
```
onRecordAdd((event) => {})
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
event | ```js  
{  
  "name": string,  
  "type": "publish",  
  "data": string[],  
} | 否 | data为新增的recordId数组

## 输出
取消监听的函数。
## 示例代码

```js
    const selection = await bitable.base.getSelection();
    const table = await bitable.base.getTableById(selection.tableId);

const field = await table.getFieldByName('多行文本') // 根据字段名获取多行文本类型的字段
    const off = table.onRecordAdd((event) => { // 监听字段增加事件。
        off();
        console.log('event:', event);
    })

table.addRecord({ // 新增一行记录。
        fields: {
            [field.id]: [{
                type: 'text',
                text: '新增的记录'
            }]
        }
    })
```
