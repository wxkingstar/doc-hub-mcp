---
title: "Viewport.onViewportChange"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/viewport/Viewport.onViewportChange
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960365000
---
最后更新于 2025-07-31

# Viewport.onViewportChange
监听文档视口变化，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

| **名称**  | **数据类型**              | **是否必填** | **描述**  |
| ------- | --------------------- | -------- | ------- |
| handler | ViewportChangeHandler | 是        | 视口变化监听器 |

### ViewportChangeHandler

```js
type ViewportChangeHandler = (event: ViewportChangeEvent) => void;
```

### ViewportChangeEvent

| **名称**           | **数据类型**                                                                   | **是否必填** | **描述**         |
| ---------------- | -------------------------------------------------------------------------- | -------- | -------------- |
| viewportBlockIds | [BlockId](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/06-data-structure/blockid)[] | 是        | 当前视口中 Block Id |

## 输出

无

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const viewportChangeHandler = (event: ViewportChangeEvent) => {
    console.log('debug', event);
};
useEffect(() => {
    DocMiniApp.Viewport.onViewportChange(viewportChangeHandler);
    return () => {
        DocMiniApp.Viewport.offViewportChange(viewportChangeHandler);
    };
});
```

### 返回示例

无
