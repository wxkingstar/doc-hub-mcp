---
title: "iOS原生集成应用_Swift(7.42)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/native-integrated-application/ios-native-integrated-application/ios-nativeappextensionexternal_swift_742
last_remote_update: 2025-06-23
last_remote_update_timestamp: 1750666100000
---
最后更新于 2025-06-23

# iOS原生集成应用_Swift(7.42) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKNativeAppExtensionExternal | 1.1.5 | 该组件通过开放平台的流程创建应用并开启原生集成应用，开发者可以实现原生集成应用与飞书的无缝集成，提供更丰富的功能和更便捷的用户体验。这样可以增强应用的可用性，提升用户的工作效率和体验质量 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKNativeAppExtensionExternal
import LKKABridge

// 自定义的`KANativeAppExtensionProtocol`实现类
public class PageRouteIMP: NSObject, KANativeAppExtensionProtocol {
    public func pageRoute(_ link: URL, from: UIViewController?) { /* 跳转至登录页 VC */ }
    public func appId() -> String { ... }
}

// 自定义的`OpenNativeAppProtocol`实现类
public class OpenNativeAppIMP: OpenNativeAppProtocol {
    public func setupVC(url: String) -> UIViewController { ... }
    public func getNativeAppId() -> String { ... }
}

// 注册自定义的组件协议实例
let api = KAAPI(channel: channel)
api.register(nativeApp: PageRouteIMP.init, cache: true)
api.register(openNativeApp: OpenNativeAppIMP.init, cache: true)
```

## PROTOCOL

### KANativeAppExtensionProtocol

原生集成应用协议，用于注册自定义的 SSO 登录页。为了实现自定义登录页面，用户需要实现该协议并使用 KAAPI 注册。飞书启动时，会跳转至 pageRoute 方法中返回的自定义 ViewController 页面。 

```swift
public protocol KANativeAppExtensionProtocol
```

#### Methods
#### `pageRoute(_:from:)`

Opens a custom page via FeiShu applink.

```swift
func pageRoute(_ link: URL, from: UIViewController?)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| link | The applink URL. |
| from | The source view controller, which can be nil. |

#### `appId()`

The app ID of the integrated native application.

```swift
func appId() -> String
```

#### `destroy()`

Called when the instance is being destroyed (not effective?).

```swift
@objc optional func destroy()
```

## PROTOCOL

### NativeAppExtensionProtocol

开放平台的原生集成应用相关协议要实现的基 Protocol，定义 NativeApp 的通用能力。用户通过 OpenNativeAppProtocol 协议实现自定义的原生集成应用实现类时，需要先实现 NativeAppExtensionProtocol

```swift
public protocol NativeAppExtensionProtocol: AnyObject
```

#### Methods
#### `getNativeAppId()`

返回 NativeApp 的相关信息(appId)
- Returns: 返回 app id

```swift
func getNativeAppId() -> String
```

## PROTOCOL

### OpenNativeAppProtocol

打开工作台应用时触发，用于注册开发者自定义的应用页面。用户通过实现并注册该协议，可以在工作台中加入自定义的原生集成应用。实现该协议的类需要先实现 NativeAppExtensionProtocol

```swift
public protocol OpenNativeAppProtocol: NativeAppExtensionProtocol
```

#### Methods
#### `setupVC(url:)`

打开与`getNativeAppId`返回值关联的工作台应用时，调用该方法返回应用页面
- Returns: 自定义的应用页面

```swift
func setupVC(url: String) -> UIViewController
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| url | 跳转时原生集成应用的 applink 地址 |
## EXTENSION

### KAAPI
```swift
extension KAAPI
```

#### Methods
#### `register(nativeApp:cache:file:function:line:column:)`

注册`KANativeAppExtensionProtocol`协议实例，由 Swift 代码调用

```swift
@objc public func register(
    nativeApp: @escaping () -> KANativeAppExtensionProtocol?,
    cache: Bool = false,
    file: String = #file,
    function: String = #function,
    line: Int = #line,
    column: Int = #column
)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| nativeApp | `KANativeAppExtensionProtocol`协议实现类的初始化函数 |
| cache | 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例 |
| file | 注册代码所在文件 |
| function | 注册代码所在函数 |
| line | 注册代码所在行 |
| column | 注册代码所在列 |

#### `register(openNativeApp:cache:file:function:line:column:)`

注册`OpenNativeAppProtocol`协议实例，由 Swift 代码调用

```swift
@objc public func register(
    openNativeApp: @escaping () -> OpenNativeAppProtocol?,
    cache: Bool = false,
    file: String = #file,
    function: String = #function,
    line: Int = #line,
    column: Int = #column
)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| openNativeApp | `OpenNativeAppProtocol`协议实现类的初始化函数 |
| cache | 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例 |
| file | 注册代码所在文件 |
| function | 注册代码所在函数 |
| line | 注册代码所在行 |
| column | 注册代码所在列 |
## EXTENSION

### _KAAPIWrapper
```swift
extension _KAAPIWrapper
```

#### Methods
#### `register(nativeApp:cache:)`

注册`KANativeAppExtensionProtocol`协议实例，OC 代码中由 KAAPI_REGISTER宏调用

```swift
public func register(
    nativeApp: @escaping () -> KANativeAppExtensionProtocol?,
    cache: Bool
)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| nativeApp | `KANativeAppExtensionProtocol`协议实现类的初始化函数 |
| cache | 是否缓存实例。为`false`时，每次调用协议方法都会重新初始化实例 |

#### `register(openNativeApp:cache:)`

注册`OpenNativeAppProtocol`协议实例，OC 代码中由 KAAPI_REGISTER宏调用

```swift
public func register(
    openNativeApp: @escaping () -> OpenNativeAppProtocol?,
    cache: Bool
)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| openNativeApp | `OpenNativeAppProtocol`协议实现类的初始化函数 |
| cache | 是否缓存实例。为`false`时，每次调用协议方法都会重新初始化实例 |
