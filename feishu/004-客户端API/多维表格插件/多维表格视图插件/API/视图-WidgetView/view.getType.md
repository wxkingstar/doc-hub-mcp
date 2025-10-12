---
title: "view.getType"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/view/view_gettype
---
最后更新于 2023-07-26

# view.getType
获取视图类型。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输出
promise数字：视图类型。
视图类型如下：
```js
ViewType {
    NotSupport = 0,
    Grid = 1, // 表格
    Kanban = 2, //看板
    Form = 3, // 表单
    Gallery = 4, //画册
    Gantt = 5, //甘特图
    Hierarchy = 6,
    Calendar = 7, //日历
    WidgetView = 100
}
```
## 示例代码
### 调用示例

```js
const selection = await bitable.base.getSelection();
const table = await bitable.base.getTableById(selection.tableId);
const viewMetaList = await table.getViewMetaList();
const view = await table.getViewById(viewMetaList[0].id);

const res = await view.getType();

```

### 返回示例
res:
```js
1
```
