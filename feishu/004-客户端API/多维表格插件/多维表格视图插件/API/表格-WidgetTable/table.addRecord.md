---
title: "table.addRecord"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_addrecord
---
最后更新于 2023-07-26

# table.addRecord
添加一行记录。

## 权限要求
<md-alert type="warn">
查看、评论、编辑和管理多维表格(bitable:app)

## 输入
```
addRecord(recordValues)
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
recordValues | {  
&nbsp;&nbsp;fields: {  
&nbsp;&nbsp;&nbsp;&nbsp;[fieldId: string]: [IOpenCellValue](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/base-extensions/base-view-extensions/data-type/iopencellvalue)  
&nbsp;&nbsp;}  
} | 否 | 需要设置的字段id和它的值

## 输出
Promise字符串: 新增的记录的记录id。
## 示例代码
### 调用示例

```js
const selection = await bitable.base.getSelection();
const table = await bitable.base.getTableById(selection.tableId);
const field = await table.getFieldByName('多行文本'); // 选择某个多行文本字段

const res = await table.addRecord({
  fields: {
    [field.id]: [ // 多行文本对应的值的格式
      {
        type: 'text',
        text: '123'
      }
    ]
  }
})

```

### 返回示例
res:
```js
'rec0nzYabv'
```
