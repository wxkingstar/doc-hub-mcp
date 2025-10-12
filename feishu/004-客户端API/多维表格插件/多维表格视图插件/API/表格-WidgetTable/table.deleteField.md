---
title: "table.deleteField"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_deletefield
---
最后更新于 2023-07-26

# table.deleteField
根据字段id删除某个字段。

## 权限要求
<md-alert type="warn">
查看、评论、编辑和管理多维表格(bitable:app)

## 输入
```
deleteField(fieldId)
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
fieldId | string | 是 | 需要被删除的字段id

## 输出
Promise布尔值：删除成功为true。
## 示例代码
### 调用示例

```js
    const selection = await bitable.base.getSelection();
    const table = await bitable.base.getTableById(selection.tableId); // 获取数据表实例
    const field = await table.getFieldByName('多行文本 2');// 获取字段实例

const res = await table.deleteField(field.id)

```

### 返回示例
res:
```js
true
```
