---
title: "GetPermissionParams"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/data-type/getpermissionparams
---
最后更新于 2023-07-26

# GetPermissionParams
相关api：[base.getPermission](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/base-extensions/base-view-extensions/base_getbasepermission)。

```js
type GetPermissionParams = BasePermissionParams | 
  TablePermissionParams | 
  RecordPermissionParams | 
  FieldPermissionParams | 
  CellPermissionParams;

interface BasePermissionParams {
    entity: PermissionEntity.Base;
    type: BaseOperation;
}
interface TablePermissionParams {
    entity: PermissionEntity.Table;
    param: {
        tableId?: string;
    };
    type: OperationType;
}
interface RecordPermissionParams {
    entity: PermissionEntity.Record;
    param: {
        tableId: string;
        recordId?: string;
    };
    type: OperationType;
}
interface FieldPermissionParams {
    entity: PermissionEntity.Field;
    param: {
        tableId: string;
        fieldId?: string;
    };
    type: OperationType;
}

interface CellPermissionParams {
    entity: PermissionEntity.Cell;
    param: {
        tableId: string;
        recordId?: string;
        fieldId?: string;
    };
    type: OperationType;
}
 ```
 - 操作类型：`OperationType`
```js
enum OperationType {
    Visible = "visible",
    Editable = "editable",
    Addable = "addable",
    Deletable = "deletable",
    Copyable = "copyable",
    Printable = "printable",
    Manageable = "manageable"
}
```
