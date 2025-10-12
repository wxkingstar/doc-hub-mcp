---
title: "base.getTableMetaList"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/base/base_gettablemetalist
---
最后更新于 2023-07-26

# base.getTableMetaList
获取数据表元信息列表，不包含仪表盘，不保证顺序。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输出
Promise数据表元信息数组。
## 示例代码
### 调用示例

```js
const metaList = await bitable.base.getTableMetaList()
```

### 返回示例
metaList:
```js
[
  {
    id: 'tblkrAjKK1wEuhNf',
    name: '数据表'
  }
]
```
