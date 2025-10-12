---
title: "Document.getPageMeta"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/doc-document/Document.getPageMeta
---
最后更新于 2025-07-31

# Document.getPageMeta
获取指定文档的 meta 信息，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

指定文档的引用
| **名称** | **数据类型**                                                                                                                                       | **是否必填** | **描述**  |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| docRef | [DocumentRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/DocumentRef) | 是        | 指定文档的引用 |

## 输出

异步返回指定文档的 meta 信息，它是一个 [PageMeta](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/PageMeta)

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const docRef = await DocMiniApp.getActiveDocumentRef();
const meta = await DocMiniApp.Document.getPageMeta(docRef)
console.log('debug', meta);   
```

### 返回示例

```json
{
  "comments_count":0,
  "comments_count_today":0,
  "create_timestamp":1673426766,
  "like_count":0,
  "like_count_today":0,
  "pv":1,
  "pv_today":1,
  "uv":1,
  "uv_today":1,
  "owner_user":
  {
    "id":"710148447583340****",
    "cn_name":"名字",
    "en_name":"zi MING",
    "avatar_url":"https://xxxavatar_urlxxxx"
  "char_count":22,
  "word_count":12
}
```
