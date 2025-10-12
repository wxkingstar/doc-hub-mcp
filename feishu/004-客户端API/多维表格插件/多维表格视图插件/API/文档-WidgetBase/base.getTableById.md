---
title: "base.getTableById"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/base/base_gettablebyid
---
最后更新于 2024-05-15

# base.getTableById
根据id获取数据表实例。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输入
```
getTableById(tableId)
```

| 名称     | 数据类型 |  是否必填 | 描述 |
| ----------- | ----------- | ------- | --------- |
| tableId      | string       | 是      |	当前base下某个数据表id      |

## 输出
Promise[数据表实例](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/base-extensions/base-view-extensions/data-type/iwidgettable)。获取tableId对应的表格失败时抛出错误。
## 示例代码

```js
await bitable.base.getTableById('t_id');
```
