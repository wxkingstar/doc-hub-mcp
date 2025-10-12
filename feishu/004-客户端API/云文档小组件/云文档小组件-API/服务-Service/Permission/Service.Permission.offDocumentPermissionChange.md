---
title: "Service.Permission.offDocumentPermissionChange"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/service/Permission/Service.Permission.offDocumentPermissionChange
---
最后更新于 2025-07-31

# Service.Permission.offDocumentPermissionChange
取消用户对某篇文档的权限变化的监听，该方法为同步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

| **名称**   | **数据类型**                                                                                                | **是否必填** | **描述**          |
| -------- | ------------------------------------------------------------------------------------------------------- | -------- | --------------- |
| docRef   | [DocumentRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/DocumentRef) | 是        | 指定的文档引用         |
| callback | Function                                                                                                | 是        | 指定文档的权限变化时的回调函数 |

## 输出

无

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const documentRef = useRef<DocumentRef | null>(null);
const documentPermissionHandler = (permission: DocumentPermission) => {
    console.log('debug', permission);
}
useEffect(() => {
    const fn = async () => {
        documentRef.current = await DocMiniApp.getActiveDocumentRef();
        DocMiniApp.Service.Permission.onDocumentPermissionChange(documentRef.current, documentPermissionHandler);
    }
    fn();
    return () => {
        documentRef.current && DocMiniApp.Service.Permission.onDocumentPermissionChange(documentRef.current, documentPermissionHandler);
    }
});
```

### 返回示例

无
