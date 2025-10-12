---
title: "table.getName"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_getname
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690343189000
---
最后更新于 2023-07-26

# table.getName
获取表名。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输出
promise字符串。
## 示例代码

```js
const table = await bitable.base.getTableByName('数据表')

const name = await table.getName()

console.log(name) // 数据表
```
