---
title: "field.getFieldValueList"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/field/field_getfieldvaluelist
---
最后更新于 2023-07-26

# field.getFieldValueList
获取整列不为空的 cellValue。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输出
Promise数组，数组元素为[IOpenCellValue](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/base-extensions/base-view-extensions/data-type/iopencellvalue)。
## 示例代码
### 调用示例

```js
const selection = await bitable.base.getSelection();
const table = await bitable.base.getTableById(selection.tableId);
const filed = await table.getFieldByName('多行文本');

const res = await filed.getFieldValueList()

```

### 返回示例
res:
```js
[
  {
    "record_id": "rec1i6gIHj",
    "value": [
      {
        "type": "text",
        "text": "1"
      }
    ]
  },
  {
    "record_id": "rec8Do63xI",
    "value": [
      {
        "type": "text",
        "text": "23"
      }
    ]
  },
  {
    "record_id": "recFNRH5QF",
    "value": [
      {
        "type": "text",
        "text": "456"
      }
    ]
  }
]
```
