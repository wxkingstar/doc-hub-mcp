<!--
title: iOS网页能力_Swift(7.42)
id: 7495606997214134300
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/web-capabilities/ios-web-capability/ios-webviewapiexternal_swift_742
updatedAt: 1745215563000
source: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/web-capabilities/ios-web-capability/ios-webviewapiexternal_swift_742
-->
# iOS网页能力_Swift(7.42) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKWebViewApiExternal | 1.1.3 | 通过该组件，开发者可以实现在飞书的 H5 容器中设置自定义的 cookie，或追加自定义的 User Agent 信息。这样可以为开发者提供更多的灵活性和个性化定制的能力，以满足不同的业务需求和用户体验要求 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)



```swift
import LKWebViewApiExternal
import LKKABridge

let api = KAAPI(channel: /* channel_id */).webViewApi
api?.setCookie(...)
api?.appendUserAgent( ... )
```

## PROTOCOL

### KAWebViewApiDelegate

网页能力接口协议，用于追加自定义的网络访问信息

```swift
public protocol KAWebViewApiDelegate: AnyObject
```

#### Methods
#### `setCookie(cookie:)`

注入cookie到HTTPCookieStorage中

```swift
func setCookie(cookie: HTTPCookie)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| cookie | 注入的cookie |

#### `appendUserAgent(customUA:)`

在已有 UserAgent 基础上 append 字段

提示：建议 application 启动直接注入，确保一次性注入完全，多次调用注入不同的值会造成覆盖；其中的 product 请不要与已有 product 冲突, product 含义请参考 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent，

```swift
func appendUserAgent(customUA: String)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| customUA | 要 append 的 UserAgent String |
## EXTENSION

### KAAPI
```swift
extension KAAPI
```

#### Properties
#### `webViewApi`

网页能力接口实例

```swift
@objc public var webViewApi: KAWebViewApiDelegate?
```
