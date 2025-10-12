---
title: "getActiveBlock"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/basic-data-reference---base/getactiveblock
---
最后更新于 2025-07-31

# getActiveBlock
获取当前小组件 Block（文档块）的快照信息，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | - 正文小组件  
- 全屏视图  
- 模态框视图  
- 弹窗视图 | - PC  
- 移动端 | 演示模式

## 输入

无需传入参数

## 输出

异步返回当前所在 Block（文档块）的快照信息，它是一个[BlockSnapshot](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/BlockSnapshot)

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
DocMiniApp.getActiveBlock()
  .then((blockSnpapshot) => {
    console.log('debug', blockSnpapshot);
  })
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
