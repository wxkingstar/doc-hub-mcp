---
title: "iOS JS API扩展能力_Swift(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/js-api-extension/jsapiexternal_swift/jsapiexternal_swift_754
last_remote_update: 2025-11-03
last_remote_update_timestamp: 1762139832000
---
最后更新于 2025-11-03

# iOS JS API扩展能力_Swift(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKJsApiExternal | 协议组件 | 1.2.0 | 7.54.0 |

## 功能简介
提供 JS 与原生之间的双向通信能力，允许 H5 / Web 页面通过统一协议调用原生功能，并接收原生回调

### 更新日志
- 新增 KANativeAppPluginDelegate 协议，用于响应 JS 发送的事件
- 新增 KANativeAppAPIEvent 类，封装 JS 事件参数
- 新增 KAAPI.register 方法，支持 Swift 代码注册插件
- 新增 _KAAPIWrapper.register 方法，支持 OC 代码通过宏注册插件

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKJsApiExternal
import LKKABridge

// 1. 实现协议
class MyNativeAppPluginImpl: KANativeAppPluginDelegate {
    func getPluginName() -> String {
        return "MyNativeAppPlugin"
    }

func getPluginApiNames() -> [String] {
        return ["api1", "api2", "api3"]
    }

func handle(event: KANativeAppAPIEvent, callback: @escaping (Bool, [String: Any]?) -> Void) {
        // 处理事件并回调
        callback(true, ["result": "success"])
    }

// 其余方法省略...
}

// 2. 初始化 KAAPI
let api = KAAPI(channel: "YOUR_CHANNEL")

// 3. 注册插件
api.register(nativeAppPluginDelegate: MyNativeAppPluginImpl.init, cache: true)
```

## PROTOCOL
### KANativeAppPluginDelegate
JsAPI 协议，用于响应 Js 发送的事件

```swift
protocol KANativeAppPluginDelegate: AnyObject {
    func getPluginName() -> String	// 返回 Plugin 唯一的名字，用于后续的注册与调用
    func getPluginApiNames() -> [String]	// 支持的 api name list
    func handle(event: KANativeAppAPIEvent, callback: @escaping (Bool, [String: Any]?) -> Void)	// 事件处理方法
    func setContext(context: NativeAppPluginContextProtocol)	// 获取上下文，来对 js 进行持续 callback
}
```

#### 方法列表
#### `func getPluginName() -> String`
返回 Plugin 唯一的名字，用于后续的注册与调用

**返回值**：Plugin 名字

#### `func getPluginApiNames() -> [String]`
支持的 api name list

**返回值**：api list

#### `func handle(event: KANativeAppAPIEvent, callback: @escaping (Bool, [String: Any]?) -> Void)`
事件处理方法

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| event | KANativeAppAPIEvent | H5 / web 传回的 api name 和参数 | - |
| callback | (Bool, [String: Any]?) -> Void | 回调函数 | - |

#### `func setContext(context: NativeAppPluginContextProtocol)`
获取上下文，来对 js 进行持续 callback

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| context | NativeAppPluginContextProtocol | 上下文对象 | - |

## CLASS
### KANativeAppAPIEvent
Js 发送的事件

```swift
class KANativeAppAPIEvent: NSObject {
    var params: [String: Any]?	// 事件参数
    var name: NSString = ""	// 事件名
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| params | [String: Any]? | 事件参数 | nil |
| name | NSString | 事件名 | "" |

## EXTENSION
### KANativeAppPluginDelegate

```swift
extension KANativeAppPluginDelegate {
    func setContext(context: NativeAppPluginContextProtocol) { }
}
```

#### 方法列表
#### `func setContext(context: NativeAppPluginContextProtocol)`

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| context | NativeAppPluginContextProtocol | 上下文对象 | - |

### KAAPI

```swift
extension KAAPI {
    func register(
        nativeAppPluginDelegate: @escaping () -> KANativeAppPluginDelegate?,
        cache: Bool = false,
        file: String = #file,
        function: String = #function,
        line: Int = #line,
        column: Int = #column
    )
}
```

#### 方法列表
#### `func register(nativeAppPluginDelegate: @escaping () -> KANativeAppPluginDelegate?, cache: Bool, file: String, function: String, line: Int, column: Int)`
注册 `KANativeAppPluginDelegate` 协议实例，由 Swift 代码调用

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| nativeAppPluginDelegate | () -> KANativeAppPluginDelegate? | `KANativeAppPluginDelegate` 协议实现类的初始化函数 | - |
| cache | Bool | 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例 | false |
| file | String | 注册代码所在文件 | #file |
| function | String | 注册代码所在函数 | #function |
| line | Int | 注册代码所在行 | #line |
| column | Int | 注册代码所在列 | #column |

### _KAAPIWrapper

```swift
extension _KAAPIWrapper {
    func register(
        nativeAppPluginDelegate: @escaping () -> KANativeAppPluginDelegate?,
        cache: Bool
    )
}
```

#### 方法列表
#### `func register(nativeAppPluginDelegate: @escaping () -> KANativeAppPluginDelegate?, cache: Bool)`
注册 `KANativeAppPluginDelegate` 协议实例。OC 代码中由 KAAPI_REGISTER 宏调用

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| nativeAppPluginDelegate | () -> KANativeAppPluginDelegate? | `KANativeAppPluginDelegate` 协议实现类的初始化函数 | - |
| cache | Bool | 是否缓存实例。为 `false` 时，每次调用协议方法都会重新初始化实例 | - |
