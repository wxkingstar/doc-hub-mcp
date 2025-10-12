---
title: "table.setField"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_setfield
---
最后更新于 2023-09-15

# table.setField
修改字段属性。

## 权限要求
<md-alert type="warn">
查看、评论、编辑和管理多维表格(bitable:app)

## 输入
```
setField(fieldId, fieldConfig)
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
fieldId | string | 是 | 需要被修改的字段id
fieldConfig | [IAddFieldConfig](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/base-extensions/base-view-extensions/data-type/iaddfieldconfig) | 是 | 需要被修改的字段的属性

## 输出
Promise布尔值：被修改的字段id。
## 示例代码
### 调用示例

```js
    const selection = await bitable.base.getSelection();
    const table = await bitable.base.getTableById(selection.tableId);// 获取当前数据表实例
    const field = await table.getFieldByName('多行文本');

const res = await table.setField(field.id,{
        name: '修改后的字段名',
    })
```

### 返回示例
res:
```js
'fldgyVuQbo'
```
