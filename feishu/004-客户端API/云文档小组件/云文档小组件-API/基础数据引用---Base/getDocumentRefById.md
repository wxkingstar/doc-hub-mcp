---
title: "getDocumentRefById"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/basic-data-reference---base/getdocumentrefbyid
---
最后更新于 2025-07-31

# getDocumentRefById
根据文档 token 获取指定文档的引用，该方法是同步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
无需权限 | &nbsp;所有视图  
[关于视图请参见概念说明](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/02-cloud-doc-block-noun-explanation) | - PC  
- 移动端 | 演示模式

## 输入

文档 token（从文档URL直接获取）。
| **名称**   | **数据类型** | **是否必填** | **描述**   |
| -------- | -------- | -------- | -------- |
| docToken | string   | 是        | 文档 token |

## 输出

返回一个指定文档的引用，它是 [DocumentRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/DocumentRef)

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const activeDocumentRef = DocMiniApp.getDocumentRefById('docx token');
console.log('debug',activeDocumentRef);
```

### 返回示例

```json
{"docToken":"docx token"}
```
