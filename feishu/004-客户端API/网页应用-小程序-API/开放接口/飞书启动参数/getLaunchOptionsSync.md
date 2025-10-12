---
title: "getLaunchOptionsSync"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/open-ability/feishu-launch-parameters/getlaunchoptionssync
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737430639000
---
最后更新于 2025-01-21

# getLaunchOptionsSync()

getLaunchOptionsSync() 是一个同步方法，用于获取小程序[冷启动](https://open.feishu.cn/document/uYjL24iN/uMjNzUjLzYzM14yM2MTN)时的参数，与 [App.onLaunch](https://open.feishu.cn/document/uYjL24iN/uMDNuMDNuMDN) 的回调参数一致。

## 注意事项

- 通过 Applink [打开小程序](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/applink-protocol/supported-protocol/open-a-gadget) 时可以自定义启动页面路径 `path` 和启动参数 `query`。

- 该方法只能获取小程序[冷启动](https://open.feishu.cn/document/uYjL24iN/uMjNzUjLzYzM14yM2MTN)时的参数。如果你需要获取[热启动](https://open.feishu.cn/document/uYjL24iN/uMjNzUjLzYzM14yM2MTN)的参数，可通过读取 [App.onShow](https://open.feishu.cn/document/uYjL24iN/uYjNzUjL2YzM14iN2MTN) 方法中传入的参数进行获取。

## 支持说明

该方法仅支持小程序调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V3.22.0+ | V3.22.0+ | V3.22.0+ | V7.35.0+ | 预览
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

该方法无输入参数。

## 输出

返回值说明如下表。

名称 | 数据类型 | 描述
--- | --- | ---
data | object | \-
&emsp;  
                    ∟  
                &nbsp;  
                    path | string | 小程序启动页面路径。
&emsp;  
                    ∟  
                &nbsp;  
                    query | object | 小程序启动参数。
&emsp;  
                    ∟  
                &nbsp;  
                    scene | number | string | 场景值（PC 端数据类型为 number，Android/iOS 端数据类型为 string），详细说明可参见[场景值](https://open.feishu.cn/document/uYjL24iN/uQzMzUjL0MzM14CNzMTN)。
&emsp;  
                    ∟  
                &nbsp;  
                    mode | string | 小程序打开模式（仅在 PC 小程序中返回）。

## 示例代码

调用示例：

```js
try {
    let result = tt.getLaunchOptionsSync();
    console.log(`getLaunchOptionsSync success: ${JSON.stringify(result)}`);
} catch (error) {
    console.log(`getLaunchOptionsSync fail: ${JSON.stringify(error)}`);
}
```

返回值示例：
```json
//示例:当打开的Applink为:
//https://applink.feishu.cn/client/mini_program/open?appId=<你的appId>&mode=window&path=src/page/api/index?foo=bar
{
    "path": "src/page/api/index",
    "scene": "1011",
    "query": {
      "foo": "bar"
    }
}
```
