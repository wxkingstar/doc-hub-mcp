---
title: "field.getCellString"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/field/field_getcellstring
last_remote_update: 2024-07-26
last_remote_update_timestamp: 1721978200000
---
最后更新于 2024-07-26

# field.getCellString
获取单元格的值 (字符串) 。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输入
```
getCellString(recordId)
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
recordId | string | 是 | 记录id

## 输出
Promise字符串。
## 示例代码

```js
    const selection = await bitable.base.getSelection();
    const table = await bitable.base.getTableById(selection.tableId);
    const field = await table.getFieldByName('多行文本');
    const records = await table.getRecordIdList()

const res = await field.getCellString(records[0]) // 获取某个单元格的值（字符串）
    console.log(res)
```
