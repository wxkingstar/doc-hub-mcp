---
title: "base.getPermission"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/base/base_getbasepermission
---
最后更新于 2023-07-26

# base.getPermission
获取指定实体（Base/Table/Field/Record/Cell）的权限信息，true 代表有权限，false 代表无权限。
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输入
```
getPermission(params)
```

| 名称     | 数据类型 |  是否必填 | 描述 |
| ----------- | ----------- | ------- | --------- |
| params      | [GetPermissionParams](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/base-extensions/base-view-extensions/data-type/getpermissionparams)| 是 |	需要获取权限的实体和权限      |

## 输出
Promise布尔值，为true的时候表示拥有权限。
## 示例代码
- 判断base实体编辑权限

```js
const permision = await bitable.base.getPermission({
  entity: PermissionEntity.Base, // 指定base实体
  type: OperationType.Editable, // 编辑权限
})
console.log(permision) // true
```

- 判断数据表编辑权限
```js
const selection = await bitable.base.getSelection() // 获取当前所选的信息
const p2 = await bitable.base.getPermission({
  entity: PermissionEntity.Table, // 判断数据表的权限
  type: OperationType.Editable, // 编辑权限
  param: {
    tableId: selection.tableId, // 指定数据表id
  }
})
console.log(p2) // true
```

- 判断字段编辑权限
```js
const selection = await bitable.base.getSelection() // 获取当前所选的信息
const table = await bitable.base.getTableById(selection.tableId);// 获取table实例
const fieldMetaList = await table.getFieldMetaList();

const p2 = await bitable.base.getPermission({
  entity: PermissionEntity.Field, // 判断字段的权限
  type: OperationType.Editable, // 编辑权限
  param: {
    tableId: selection.tableId, // 指定数据表id
    fieldId: fieldMetaList[0].id, // 指定字段id
  }
})
console.log(p2) // true

```
