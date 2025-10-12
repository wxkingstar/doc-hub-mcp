---
title: "LifeCycle.notifyAppReady"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/lifecycle/LifeCycle.notifyAppReady
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960471000
---
最后更新于 2025-07-31

# LifeCycle.notifyAppReady
通知文档应用加载完毕，配合配 `useHostLoading`使用，该方法为异步调用。
```json
// app.json
{
    "contributes": {
    "addPanel": {
        "useHostLoading": true, // true 的时候notifyAppReady才生效
        ...
    }
  }
}
```

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

无需传入参数。

## 输出

无

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
useEffect(() => {
    DocMiniApp.LifeCycle.notifyAppReady();
});
```

### 返回示例

无
