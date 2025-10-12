---
title: "Service.Permission.getDocumentPermission"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/service/Permission/Service.Permission.getDocumentPermission
---
最后更新于 2025-07-31

# Service.Permission.getDocumentPermission
获取当前用户对某篇文档的权限，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

| **名称** | **数据类型**                                                                    | **是否必填** | **描述**  |
| ------ | --------------------------------------------------------------------------- | -------- | ------- |
| docRef | [DocumentRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/DocumentRef) | 是        | 指定的文档引用 |

## 输出

异步返回一个 [DocumentPermission](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/DocumentPermission)

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
 const ref = await DocMiniApp.getActiveDocumentRef();
const permission = await DocMiniApp.Service.Permission.getDocumentPermission(ref);
console.log('debug', permission);
```

### 返回示例

```json
{
    "editable": true,
    "copyable": true,
    "commentable": true,
    "manageable": true,
}
```
