---
title: "base.onSelectionChange"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/base/base_onselectionchange
---
最后更新于 2024-03-20

# base.onSelectionChange
监听用户当前选中（表格，单元格，视图，记录，字段）事件，将返回一个取消监听函数。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输入
描述一下
```js
const off = base.onSelectionChange((event) => {})
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
event | Selection | 否 | 当前所选的相关信息。

Selection:
```js
{
  data: {
    baseId: string | null;
    tableId: string | null;
    viewId: string | null;
    fieldId: string | null;
    recordId: string | null;
}
}
```

## 输出
取消监听的函数。

## 示例代码

```js
const off = bitable.base.onSelectionChange((event) => {
	off(); // 取消监听所选数据表变化
	console.log('所选数据表变化',event)
  /**
  {
  "data": {
    "tableId": "tblrWsfkG3Mh3BlM",
    "viewId": null,
    "fieldId": null,
    "recordId": null,
    "baseId": "QtTUb1dWewBmtcsyacTcoEpUnzf"
  }
}
  */
})

```
