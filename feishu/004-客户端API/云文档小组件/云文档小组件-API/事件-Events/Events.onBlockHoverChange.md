---
title: "Events.onBlockHoverChange"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/events/Events.onBlockHoverChange
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960436000
---
最后更新于 2025-07-31

# Events.onBlockHoverChange
监听文档的 Block Hover 变化，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

| **名称**  | **数据类型**                | **是否必填** | **描述**            |
| ------- | ----------------------- | -------- | ----------------- |
| handler | BlockHoverChangeHandler | 是        | Block Hover 变化监听器 |

### BlockHoverChangeHandler

```js
type BlockHoverChangeHandler = (event: BlockHoverChangeEvent) => void;
```

### BlockHoverChangeEvent

Block Hover 变化事件
| **名称**    | **数据类型**                                                                      | **是否必填** | **描述**               |
| --------- | ----------------------------------------------------------------------------- | -------- | -------------------- |
| prevBlock | [BlockSnapshot](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/BlockSnapshot) | 否        | 变化前 hover 的 Block 信息 |
| currBlock | [BlockSnapshot](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/BlockSnapshot) | 否        | 变化后 hover 的 Block 信息 |

## 输出

无

## 示例代码

### 调用示例

```js
const blockHoverChangeHandler = (event: BlockHoverChangeEvent) => {
        console.log('debug', event);
    };
useEffect(() => {
    docMiniApp.Events.onBlockHoverChange(blockHoverChangeHandler);
    return () => {
        docMiniApp.Events.offBlockHoverChange(blockHoverChangeHandler);
    };
});
```

### 返回示例

无
