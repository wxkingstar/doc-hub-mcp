---
title: "Block.getBlock"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/block/Block.getBlock
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960094000
---
最后更新于 2025-07-31

# Block.getBlock
获取某个 Block 的快照信息，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

指定的 Block 引用
| **名称**   | **数据类型**                                                                                                                                        | **是否必填** | **描述**       |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------ |
| blockRef | [BlockRef](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/BlockRef) | 是        | 指定的 Block 引用 |

## 输出

异步返回 指定的Block 的快照信息，它是一个[BlockSnapshot](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/BlockSnapshot)

## 示例代码

### 调用示例

```js
 const DocMiniApp = new BlockitClient().initAPI();
 const blockRef = await DocMiniApp.getActiveBlockRef();
 const block = await DocMiniApp.Block.getBlock(blockRef);
 console.log('debug',block);
```

### 返回示例

```json
{
  "id": 3,
    "type": "isv",
      "children": [],
        "childSnapshots": [],
          "parent": 1,
            "childIndex": 0,
              "data":
  {
    "component_id": "",
      "component_type_id": "blk_63243b0cb8858002263a****",
        "data": { }
  },
  "recordId": "Oim8dqYO0o8Oi6xKwaVcE7b****",
    "ref":
  {
    "docRef":
    {
      "docToken": "Sj4fdE9Cro9Qg3xaHAOcv4I****"
    },
    "blockId": 3
  }
}
```
