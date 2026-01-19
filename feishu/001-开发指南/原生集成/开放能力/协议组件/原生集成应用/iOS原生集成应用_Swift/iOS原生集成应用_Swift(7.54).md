---
title: "iOS原生集成应用_Swift(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/native-integrated-application/ios-native-integrated-application/ios-nativeappextensionexternal_swift_754
last_remote_update: 2025-11-03
last_remote_update_timestamp: 1762139832000
---
最后更新于 2025-11-03

# iOS原生集成应用_Swift(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKNativeAppExtensionExternal | 协议组件 | 1.2.0 | 7.54.0 |

## 功能简介
提供原生集成应用协议，用于注册自定义的 SSO 登录页及工作台应用页面

### 更新日志
- 无变更

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKNativeAppExtensionExternal
import LKKABridge

// 实现 KANativeAppExtensionProtocol
class MyNativeAppExtensionImpl: KANativeAppExtensionProtocol {
    func pageRoute(_ link: URL, from: UIViewController?) {
        // 自定义页面跳转逻辑
    }

func appId() -> String {
        return "your_app_id"
    }
}

// 实现 NativeAppExtensionProtocol
class MyNativeAppExtensionImpl: NativeAppExtensionProtocol {
    func getNativeAppId() -> String {
        return "your_app_id"
    }
}

// 实现 OpenNativeAppProtocol
class MyOpenNativeAppImpl: OpenNativeAppProtocol {
    func getNativeAppId() -> String {
        return "your_app_id"
    }

func setupVC(url: String) -> UIViewController {
        return UIViewController()
    }
}

// 注册
let api = KAAPI(channel: "YOUR_CHANNEL")
api.register(nativeApp: MyNativeAppExtensionImpl.init, cache: true)
api.register(openNativeApp: MyOpenNativeAppImpl.init, cache: true)
```

## PROTOCOL
### KANativeAppExtensionProtocol
原生集成应用协议，用于注册自定义的 SSO 登录页。为了实现自定义登录页面，用户需要实现该协议并使用 KAAPI 注册。飞书启动时，会跳转至 pageRoute 方法中返回的自定义 ViewController 页面

```swift
protocol KANativeAppExtensionProtocol {
    func pageRoute(_ link: URL, from: UIViewController?) // Opens a custom page via FeiShu applink
    func appId() -> String // The app ID of the integrated native application
    func destroy() // Called when the instance is being destroyed (not effective?)
}
```

#### 方法列表
#### `func pageRoute(_ link: URL, from: UIViewController?)`
Opens a custom page via FeiShu applink

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| link | URL | The applink URL | - |
| from | UIViewController? | The source view controller, which can be nil | nil |

#### `func appId() -> String`
The app ID of the integrated native application

**返回值**：返回 app ID

#### `func destroy()`
Called when the instance is being destroyed (not effective?)

### NativeAppExtensionProtocol
开放平台的原生集成应用相关协议要实现的基 Protocol，定义 NativeApp 的通用能力。用户通过 OpenNativeAppProtocol 协议实现自定义的原生集成应用实现类时，需要先实现 NativeAppExtensionProtocol

```swift
protocol NativeAppExtensionProtocol: AnyObject {
    func getNativeAppId() -> String // 返回 NativeApp 的相关信息(appId)
}
```

#### 方法列表
#### `func getNativeAppId() -> String`
返回 NativeApp 的相关信息(appId)

**返回值**：返回 app id

### OpenNativeAppProtocol
打开工作台应用时触发，用于注册开发者自定义的应用页面。用户通过实现并注册该协议，可以在工作台中加入自定义的原生集成应用。实现该协议的类需要先实现 NativeAppExtensionProtocol

```swift
protocol OpenNativeAppProtocol: NativeAppExtensionProtocol {
    func setupVC(url: String) -> UIViewController // 打开与`getNativeAppId`返回值关联的工作台应用时，调用该方法返回应用页面
}
```

#### 方法列表
#### `func setupVC(url: String) -> UIViewController`
打开与`getNativeAppId`返回值关联的工作台应用时，调用该方法返回应用页面

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| url | String | 跳转时原生集成应用的 applink 地址 | - |

**返回值**：自定义的应用页面

## EXTENSION
### KAAPI

```swift
extension KAAPI {
    func register(
        nativeApp: @escaping () -> KANativeAppExtensionProtocol?,
        cache: Bool = false,
        file: String = #file,
        function: String = #function,
        line: Int = #line,
        column: Int = #column
    )

func register(
        openNativeApp: @escaping () -> OpenNativeAppProtocol?,
        cache: Bool = false,
        file: String = #file,
        function: String = #function,
        line: Int = #line,
        column: Int = #column
    )
}
```

#### 方法列表
#### `func register(nativeApp: () -> KANativeAppExtensionProtocol?, cache: Bool, file: String, function: String, line: Int, column: Int)`
注册`KANativeAppExtensionProtocol`协议实例，由 Swift 代码调用

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| nativeApp | () -> KANativeAppExtensionProtocol? | `KANativeAppExtensionProtocol`协议实现类的初始化函数 | - |
| cache | Bool | 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例 | false |
| file | String | 注册代码所在文件 | #file |
| function | String | 注册代码所在函数 | #function |
| line | Int | 注册代码所在行 | #line |
| column | Int | 注册代码所在列 | #column |

#### `func register(openNativeApp: () -> OpenNativeAppProtocol?, cache: Bool, file: String, function: String, line: Int, column: Int)`
注册`OpenNativeAppProtocol`协议实例，由 Swift 代码调用

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| openNativeApp | () -> OpenNativeAppProtocol? | `OpenNativeAppProtocol`协议实现类的初始化函数 | - |
| cache | Bool | 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例 | false |
| file | String | 注册代码所在文件 | #file |
| function | String | 注册代码所在函数 | #function |
| line | Int | 注册代码所在行 | #line |
| column | Int | 注册代码所在列 | #column |

### _KAAPIWrapper

```swift
extension _KAAPIWrapper {
    func register(
        nativeApp: @escaping () -> KANativeAppExtensionProtocol?,
        cache: Bool
    )

func register(
        openNativeApp: @escaping () -> OpenNativeAppProtocol?,
        cache: Bool
    )
}
```

#### 方法列表
#### `func register(nativeApp: () -> KANativeAppExtensionProtocol?, cache: Bool)`
注册`KANativeAppExtensionProtocol`协议实例，OC 代码中由 KAAPI_REGISTER宏调用

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| nativeApp | () -> KANativeAppExtensionProtocol? | `KANativeAppExtensionProtocol`协议实现类的初始化函数 | - |
| cache | Bool | 是否缓存实例。为`false`时，每次调用协议方法都会重新初始化实例 | - |

#### `func register(openNativeApp: () -> OpenNativeAppProtocol?, cache: Bool)`
注册`OpenNativeAppProtocol`协议实例，OC 代码中由 KAAPI_REGISTER宏调用

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| openNativeApp | () -> OpenNativeAppProtocol? | `OpenNativeAppProtocol`协议实现类的初始化函数 | - |
| cache | Bool | 是否缓存实例。为`false`时，每次调用协议方法都会重新初始化实例 | - |
