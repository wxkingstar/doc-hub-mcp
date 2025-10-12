---
title: "iOS JS API扩展能力_Swift(7.42)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/js-api-extension/jsapiexternal_swift/jsapiexternal_swift_742
---
最后更新于 2025-04-17

# iOS JS API扩展能力_Swift(7.42)

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKJsApiExternal | 1.1.3 | 该组件通过 JSAPI 提供了与 Native 进行回调的能力。开发的飞书小程序和 H5 页面可以使用 jssdk 的 invokeCustomApi 函数向 Native 发送事件。Native 实现相应协议可对事件进行处理，并将结果返回给H5页面|

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKJsApiExternal
import LKKABridge

// implement custom `KANativeAppPluginDelegate` class
public class MyLKJsApiHandler: KANativeAppPluginDelegate {
    public func getPluginName() -> String { /* ... */ }

public func getPluginApiNames() -> [String] { /* ... */ }

public func handle(event: LKJsApiExternal.KANativeAppAPIEvent, callback: @escaping (Bool, [String : Any]?) -> Void) { /* ... */ }

public func setContext(context: NativeAppPublicKit.NativeAppPluginContextProtocol) { }
}

// register custom `KANativeAppPluginDelegate` class
let api = KAAPI(channel: channel)
api.register(nativeAppPluginDelegate: MyLKJsApiHandler.init, cache: true)
```

## PROTOCOL

### KANativeAppPluginDelegate

JsAPI 协议，用于响应Js 发送的事件

```swift
public protocol KANativeAppPluginDelegate: AnyObject
```

#### Methods
#### `getPluginName()`

返回 Plugin 唯一的名字，用于后续的注册与调用
- Returns: Plugin 名字

```swift
func getPluginName() -> String
```

#### `getPluginApiNames()`

支持的 api name list
- Returns: api list

```swift
func getPluginApiNames() -> [String]
```

#### `handle(event:callback:)`

事件处理方法
- Returns: 回调给 H5 的值

```swift
func handle(event: KANativeAppAPIEvent, callback: @escaping (Bool, [String: Any]?) -> Void)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| event | H5/web 传回的 api name 和参数 |
| callback | 回调函数 |

#### `setContext(context:)`

获取上下文，来对 js 进行持续 callback

```swift
func setContext(context: NativeAppPluginContextProtocol)
```

## CLASS

### KANativeAppAPIEvent

Js 发送的事件

```swift
public class KANativeAppAPIEvent: NSObject
```

#### Properties
#### `params`

事件参数

```swift
public var params: [String: Any]?
```

#### `name`

事件名

```swift
public var name: NSString = ""
```

## EXTENSION

### KAAPI
```swift
extension KAAPI
```

#### Methods
#### `register(nativeAppPluginDelegate:cache:file:function:line:column:)`

注册`KANativeAppPluginDelegate`协议实例，由 Swift 代码调用

```swift
@objc public func register(
    nativeAppPluginDelegate: @escaping () -> KANativeAppPluginDelegate?,
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
| nativeAppPluginDelegate | `KANativeAppPluginDelegate`协议实现类的初始化函数 |
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
#### `register(nativeAppPluginDelegate:cache:)`

注册`KANativeAppPluginDelegate`协议实例。OC 代码中由 KAAPI_REGISTER宏调用

```swift
public func register(
    nativeAppPluginDelegate: @escaping () -> KANativeAppPluginDelegate?,
    cache: Bool
)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| nativeAppPluginDelegate | `KANativeAppPluginDelegate`协议实现类的初始化函数 |
| cache | 是否缓存实例。为`false`时，每次调用协议方法都会重新初始化实例 |
