---
title: "iOS网页能力_Swift(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/web-capabilities/ios-web-capability/ios-webviewapiexternal_swift_754
last_remote_update: 2025-11-03
last_remote_update_timestamp: 1762139833000
---
最后更新于 2025-11-03

# iOS网页能力_Swift(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKWebViewApiExternal | 能力组件 | 1.2.0 | 7.54.0 |

## 功能简介
网页能力接口协议，用于追加自定义的网络访问信息

### 更新日志
- 首次发布，提供注入 Cookie 与追加 UserAgent 的能力

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKWebViewApiExternal
import LKKABridge

let api = KAAPI(channel: "YOUR_CHANNEL")
let webViewApi = api.webViewApi

// 注入 Cookie
let cookie = HTTPCookie(properties: [
    .name: "test",
    .value: "123",
    .domain: ".example.com",
    .path: "/",
    .expires: Date(timeIntervalSinceNow: 3600)
])!
webViewApi?.setCookie(cookie: cookie)

// 追加 UserAgent
webViewApi?.appendUserAgent(customUA: "MyApp/1.0")
```

## PROTOCOL
### KAWebViewApiDelegate
网页能力接口协议，用于追加自定义的网络访问信息

```swift
protocol KAWebViewApiDelegate: AnyObject {
    func setCookie(cookie: HTTPCookie)	// 注入 cookie 到 HTTPCookieStorage 中
    func appendUserAgent(customUA: String)	// 在已有 UserAgent 基础上 append 字段
}
```

#### 方法列表
#### `setCookie(cookie: HTTPCookie)`
注入 cookie 到 HTTPCookieStorage 中

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| cookie | HTTPCookie | 注入的 cookie | - |

#### `appendUserAgent(customUA: String)`
在已有 UserAgent 基础上 append 字段

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| customUA | String | 要 append 的 UserAgent String | - |

提示：建议 application 启动直接注入，确保一次性注入完全，多次调用注入不同的值会造成覆盖；其中的 product 请不要与已有 product 冲突，product 含义请参考 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent

## EXTENSION
### KAAPI

```swift
extension KAAPI {
    var webViewApi: KAWebViewApiDelegate?	// 网页能力接口实例
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| webViewApi | KAWebViewApiDelegate? | 网页能力接口实例 | nil |
