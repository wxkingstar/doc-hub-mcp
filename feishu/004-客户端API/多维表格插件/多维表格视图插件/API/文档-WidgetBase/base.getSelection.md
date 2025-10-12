---
title: "base.getSelection"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/base/base_getselection
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690343212000
---
最后更新于 2023-07-26

# base.getSelection
获取当前所选数据表的相关信息。在record view和多维表格扩展脚本上返回值略有不同。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)
## 示例代码

### 调用示例

```js
await bitable.base.getSelection()
```

### 返回示例
在扩展脚本上的某些字段为null，使用时需注意判断值的类型:
```js
{
  baseId: "QtTUb1WewaBmtcsyafTcoEpUnzf",
  fieldId: null,
  recordId: null,
  tableId: "tblrWshG3HMh3BlM",
  viewId: null,
}
```
