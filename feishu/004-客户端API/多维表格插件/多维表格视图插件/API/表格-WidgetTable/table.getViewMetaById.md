---
title: "table.getViewMetaById"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_getviewmetabyid
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690343131000
---
最后更新于 2023-07-26

# table.getViewMetaById
根据视图id获取视图元信息。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输出
字段元信息对象。
## 示例代码
### 调用示例

```js
const viewMetaList = await table.getViewMetaList(); // 获取数据表所有视图信息

const res = await table.getViewMetaById(viewMetaList[0].id);
```

### 返回示例
res:
```js
{
  "name": "表格",
  "id": "vewDUmweGB",
  "type": 1
}
```
