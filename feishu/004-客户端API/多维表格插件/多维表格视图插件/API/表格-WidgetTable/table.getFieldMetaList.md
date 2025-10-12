---
title: "table.getFieldMetaList"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/base_getfieldmetalist
---
最后更新于 2023-07-26

# base.getFieldMetaList
获取字段元信息列表，不保证顺序（若需要保证顺序，可见视图 widgetView的API：[view.getFieldMetaList](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/base-extensions/base-view-extensions/api/view/view_getfieldmetalist)）。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输出
Promise字段元信息对象数组。
## 示例代码
### 调用示例

```js
const table = await bitable.base.getTableByName('数据表')

const res = await table.getFieldMetaList()
```

### 返回示例
res:
```js
[
  {
    "id": "fldgyVuQbo",
    "type": 1,
    "name": "多行文本",
    "property": {}
  },
  {
    "id": "fldTJHk3XV",
    "type": 11,
    "name": "人员",
    "property": {}
  },
  {
    "id": "fldIEgTEDH",
    "type": 3,
    "name": "单选",
    "property": {
      "options": [
        {
          "name": "1t",
          "color": 0,
          "id": "optA4zy6JE"
        },
        {
          "name": "2",
          "color": 1,
          "id": "opt5XjROsH"
        }
      ]
    }
  },
  {
    "id": "fldPkmk0Mo",
    "type": 3,
    "name": "单选2",
    "property": {
      "options": [
        {
          "name": "21212",
          "color": 0,
          "id": "optVLeW1IF"
        },
        {
          "name": "232323",
          "color": 1,
          "id": "optZyBwOjr"
        }
      ]
    }
  },
  {
    "id": "fldG5wihPn",
    "type": 23,
    "name": "群组",
    "property": {}
  },
  {
    "id": "fld0a4mCuC",
    "type": 5,
    "name": "日期",
    "property": {}
  },
  {
    "id": "fldWG3h7Cy",
    "type": 17,
    "name": "附件",
    "property": {}
  }
]
```
