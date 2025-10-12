---
title: "table.setRecords"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_setrecords
last_remote_update: 2023-09-21
last_remote_update_timestamp: 1695278712000
---
最后更新于 2023-09-21

# table.setRecords
批量修改记录，最多5000条。

## 权限要求
<md-alert type="warn">
查看、评论、编辑和管理多维表格(bitable:app)

## 输入
```
setRecords(records)
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
records | IRecord[] | 是 | 需要修改的记录

```js
  interface IRecord {
    recordId: string;
    fields: {
        [fieldId: string]: IOpenCellValue;
    };
}
  ```

## 输出
Promise字符串数组：修改记录的id（同参数顺序）。
## 示例代码
### 调用示例

```js
const selection = await bitable.base.getSelection();
const table = await bitable.base.getTableById(selection.tableId);
const recordIds = await table.getRecordIdList(); // 获取所有行id
const field = await table.getFieldByName('多行文本'); // 选择多行文本字段

const res = await table.setRecords([
    {
        recordId: recordIds[0],
        fields: {
         [field.id]: [
            {
                    type: 'text',
                    text: '1'
                }
             ]
        }
    },
    {
        recordId: recordIds[1],
        fields: {
         [field.id]: [
            {
                    type: 'text',
                    text: '2'
                }
             ]
        }
    }
])
console.log(res) // ['recxxx', 'recyyy']
```
