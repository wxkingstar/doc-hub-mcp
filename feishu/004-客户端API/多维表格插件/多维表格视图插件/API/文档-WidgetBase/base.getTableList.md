---
title: "base.getTableList"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/base/base_gettablelist
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690343225000
---
最后更新于 2023-07-26

# base.getTableList
获取数据表实例列表，不包含仪表盘。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输出
Promise[数据表实例](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/base-extensions/base-view-extensions/data-type/iwidgettable)数组。

## 示例代码

```js
await bitable.base.getTableList()
```
