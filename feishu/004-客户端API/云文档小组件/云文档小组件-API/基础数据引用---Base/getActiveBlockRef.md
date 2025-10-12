---
title: "getActiveBlockRef"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/basic-data-reference---base/getactiveblockref
---
最后更新于 2025-07-31

# getActiveBlockRef
返回当前正文小组件所在 Block（文档块）的引用，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | &nbsp;正文小组件  
[关于视图请参见概念说明](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/02-cloud-doc-block-noun-explanation) | - PC  
- 移动端 | 演示模式

## 输入

无需传入参数。

## 输出

异步返回当前正文小组件所在 Block（文档块）的引用，它是一个[BlockRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/BlockRef)

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
DocMiniApp.getActiveBlockRef()
  .then((blockRef) => {
    console.log('debug', blockRef);
  })
```

### 返回示例

```json
{
  "docRef":
  {
    "docToken": "docx token"
  },
  "blockId": 5
}
```
