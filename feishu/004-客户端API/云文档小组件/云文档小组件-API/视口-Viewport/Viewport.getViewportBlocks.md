---
title: "Viewport.getViewportBlocks"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/viewport/Viewport.getViewportBlocks
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960389000
---
最后更新于 2025-07-31

# Viewport.getViewportBlocks
获取视口中的所有 Block，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

无需传入参数。

## 输出

异步返回一个[BlockSnapshot](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/BlockSnapshot)

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const inViewportBlocks = await DocMiniApp.Viewport.getViewportBlocks();
console.log('debug', inViewportBlocks);
```

### 返回示例

```json
[
    {
        "id": 2,
        "type": "isv",
        "children": [],
        "childSnapshots": [],
        "parent": 1,
        "childIndex": 0,
        "data": {
            "component_id": "",
            "component_type_id": "component type id",
            "data": {}
        },
        "recordId": "redord id",
        "ref": {
            "docRef": {
                "docToken": "doc token"
            },
            "blockId": 2
        }
    }
]
```
