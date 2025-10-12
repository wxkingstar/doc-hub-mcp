---
title: "View.Action.closeModal"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/view/action/View.Action.closeModal
---
最后更新于 2025-07-31

# View.Action.closeModal
关闭自定义的 modal 窗口，该方法为异步调用。

## 注意事项
该接口只能在 modal 页面中使用，其他页面使用均无效

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 模态框视图 | PC | \-

## 输入

| **名称** | **数据类型** | **是否必填** | **描述**                          |
| ------ | -------- | -------- | ------------------------------- |
| data   | any      | 是        | 关闭 modal 窗口后给到 openModal 回调中的数据 |

## 输出

无

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
DocMiniApp.View.Action.closeModal(null);
```

### 返回示例

无
