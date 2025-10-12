---
title: "Block.removeBlock"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/block/Block.removeBlock
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960141000
---
最后更新于 2025-07-31

# Block.removeBlock
删除指定一个 Block，返回删除 Block 的快照信息，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可写 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

指定的 Block 引用。
| **名称**   | **数据类型**                                                                                                                                    | **是否必填** | **描述**       |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------ |
| blockRef | [BlockRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/BlockRef) | 是        | 指定的 Block 引用 |

## 输出

异步返回被删除 Block 的快照信息，它是一个[BlockSnapshot](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/BlockSnapshot)

## 示例代码

### 调用示例

```js
 const DocMiniApp = new BlockitClient().initAPI();
 const docRef = await DocMiniApp.getActiveDocumentRef();
 const blockRef = DocMiniApp.getBlockRefById(docRef,4);
 const removeBlock = await DocMiniApp.Block.removeBlock(blockRef);
 console.log('debug',removeBlock);
```

### 返回示例

```json
{
  "id": 4,
  "type": "text",
  "children": [],
  "childSnapshots": [],
  "parent": 1,
  "childIndex": 5,
  "data":
  {
    "plain_text": "",
      "text":
    {
      "elements": []
    }
  },
  "recordId": "HeC8dsuseo4ockxY9UZc7JZ****"
    , "ref":
  {
    "docRef": { "docToken": "Sj4fdE9Cro9Qg3xaHAOcv4I****" }
    ,
    "blockId": 4
  }
}
```
