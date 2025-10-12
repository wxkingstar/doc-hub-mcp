---
title: "base.isEditable"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/base/base_iseditable
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690343236000
---
最后更新于 2023-07-26

# isEditable
是否是编辑模式。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输出
Promise布尔值，为true的时候表示处于编辑模式。
## 示例代码
### 调用示例

```ts
const isEditable = await bitable.base.isEditable()
```

### 返回示例
isEditable:
```ts
true
```
