---
title: "table.setRecord"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_setrecord
---
最后更新于 2023-07-26

# table.setRecord
修改一条记录。

## 权限要求
<md-alert type="warn">

查看、评论、编辑和管理多维表格(bitable:app)

## 输入
```
setRecord(recordId, recordValues)
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
recordId | string | 是 | 需要修改的记录的id
recordValues | {  
&nbsp;&nbsp;fields: {  
&nbsp;&nbsp;&nbsp;&nbsp;[fieldId: string]: [IOpenCellValue](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/base-extensions/base-view-extensions/data-type/iopencellvalue)  
&nbsp;&nbsp;}  
} | 否 | 需要修改的记录的字段和它们的值

## 输出
Promise字符串，被修改的记录id。
## 示例代码
### 调用示例

```js
const selection = await bitable.base.getSelection();
const table = await bitable.base.getTableById(selection.tableId);
const recordIds = await table.getRecordIdList(); // 获取所有行id
const field = await table.getFieldByName('多行文本'); // 选择多行文本字段

const res = await table.setRecord(recordIds[0],{
    fields: {
     [field.id]: [
        {
                type: 'text',
                text: '12345'
            }
         ]
    }
})
```

### 返回示例
res:
```js
'recqrO5hl1'
```
