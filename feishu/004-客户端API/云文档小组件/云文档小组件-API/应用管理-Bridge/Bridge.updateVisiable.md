---
title: "Bridge.updateVisiable"
source_url: https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/应用管理-Bridge/Bridge_UpdateVisiable
last_remote_update: 2025-10-31
last_remote_update_timestamp: 1761876789000
---
最后更新于 2025-10-31

# Bridge.updateVisiable
更新小组件的可见性，该方法为同步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可写 | - 悬浮小组件 | - PC | 演示模式

## 输入

| **名称** | **数据类型** | **是否必填** | **描述**    |
| ------ | -------- | -------- | --------- |
| visible | boolean   | 是       | 是否显示小组件 |

## 输出

无

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
DocMiniApp.Bridge.updateVisiable(true);
```

### 返回示例

无
