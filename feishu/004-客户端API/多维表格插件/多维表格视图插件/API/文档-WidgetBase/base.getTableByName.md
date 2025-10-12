---
title: "base.getTableByName"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/base/base_gettablebyname
---
最后更新于 2023-07-26

# base.getTableByName
根据表名获取数据表实例。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输入

```
getTableByName(name)
```

| 名称     | 数据类型 |  是否必填 | 描述 |
| ----------- | ----------- | ------- | --------- |
| name      | string       | 是      |	当前base下某个数据表的表名     |

## 输出
Promise[数据表实例](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/base-extensions/base-view-extensions/data-type/iwidgettable)。获取name对应的数据表失败时抛出错误。
## 示例代码

```js
const table = await bitable.base.getTableByName('数据表')
```
