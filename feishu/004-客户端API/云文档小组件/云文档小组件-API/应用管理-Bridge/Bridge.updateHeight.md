---
title: "Bridge.updateHeight"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/bridge/Bridge.updateHeight
---
最后更新于 2025-07-31

# Bridge.updateHeight
更新宿主容器的高度，如果高度不指定，则会将宿主高度设置为（刚好容纳）应用的高度，该方法为异步调用。
**Notice**：如果要支持resize，即能拖拉小应用宽高，即app.json里配置了resizeType不为'none' 或不为 'horizontal'；请用[Bridge.updateResize](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/Bridge.updateResize)，不要用这个api。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | - 正文小组件  
- 悬浮小组件  
- 悬浮卡片视图  
- 弹窗视图  
- 模态框视图 | - PC  
- 移动端 | 演示模式

## 输入

| **名称** | **数据类型** | **是否必填** | **描述**    |
| ------ | -------- | -------- | --------- |
| height | number   | 否        | 需要设置的宿主高度 |

## 输出

无

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
DocMiniApp.Bridge.updateHeight(100);
```

### 返回示例

无
