---
title: "Bridge.getInitData"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/bridge/Bridge.getInitData
---
最后更新于 2025-07-31

# Bridge.getInitData
获取创建应用时透传的初始化数据，该方法为异步调用。

## 主要事项
目前只有 View.Action.openModal 和 View.Action.showPopup 接口支持传递

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

无需传入参数。

## 输出

Promise<any>

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const initData = await DocMiniApp.Bridge.getInitData();
console.log('debug', initData);
```

### 返回示例
```json
  {}
```

> 非Modal/Popup会返回undefined
