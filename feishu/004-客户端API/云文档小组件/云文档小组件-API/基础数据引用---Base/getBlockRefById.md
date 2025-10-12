---
title: "getBlockRefById"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/basic-data-reference---base/getblockrefbyid
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753959882000
---
最后更新于 2025-07-31

# getBlockRefById
根据 block id 获取指定 Block 的引用，该方法是同步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
无需权限 | &nbsp;所有视图  
[关于视图请参见概念说明](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/02-cloud-doc-block-noun-explanation) | - PC  
- 移动端 | 演示模式

## 输入

文档的引用以及文档块（Block）id。
| **名称**  | **数据类型**                                                                                                     | **是否必填** | **描述**       |
| ------- | ------------------------------------------------------------------------------------------------------------ | -------- | ------------ |
| docRef  | [DocumentRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/DocumentRef) | 是        | 文档引用         |
| blockId | number                                                                                                       | 是        | 文档块（Block）id |

## 输出

返回指定指定 Block 的引用，它是一个 [BlockRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/BlockRef)

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const docRef = await DocMiniApp.getActiveDocumentRef();
const blockRef = DocMiniApp.getBlockRefById(docRef, 3);
console.log('debug',blockRef);
```

### 返回示例

```json
{
  "docRef":
  {
    "docToken": "MesfdeCCOoULp7x83UQcMlx****"
  },
  "blockId": 3
}
```
