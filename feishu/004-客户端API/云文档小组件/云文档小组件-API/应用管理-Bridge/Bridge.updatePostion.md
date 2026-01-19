---
title: "Bridge.updatePostion"
source_url: https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/应用管理-Bridge/Bridge_updatePostion
last_remote_update: 2025-10-31
last_remote_update_timestamp: 1761876789000
---
最后更新于 2025-10-31

# Bridge.updatePosition
更新悬浮小组件的定位，以左上角为原点，该方法为同步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可写 | - 悬浮小组件 | - PC | 演示模式

## 输入

| **名称** | **数据类型** | **是否必填** | **描述**    |
| ------ | -------- | -------- | --------- |
| top | number   | 是       | 需要设置的垂直偏移量 |
| left | number   | 是        | 需要设置的水平偏移量 |

## 输出

无

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
DocMiniApp.Bridge.updatePosition({ top: 10, left: 10 });
```

### 返回示例

无
