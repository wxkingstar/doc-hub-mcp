---
title: "iOS生命周期能力_Swift(7.42)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/life-cycle/ios-life-cycle-contents/lifecycleexternal_swift_742
---
最后更新于 2025-04-21

# iOS生命周期能力_Swift(7.42) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKLifecycleExternal | 1.0.1 | 该组件相关回调包括应用启动、进入前台、进入后台和飞书账号登录、登出等事件。开发者可以实现相应的回调函数，以便在这些事件发生时执行特定的业务逻辑 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKLifecycleExternal
import LKKABridge

// 自定义的`KALifecycleProtocol`实现类
@objc
public class LKLifecycleExternalIMP: KALifecycleProtocol {    
    public func start() { ... }
    public func resume() { ... }
    public func pause() { ... }
    public func onLoginSuccess(isFastLogin: Bool) { ... }
    public func onLoginFail(isFastLogin: Bool) { ... }
    public func onLogout() { ... }
    public func beforeSwitchAccout() { ... }
    public func switchAccountSucceed() { ... }
}

// 注册自定义的`KALifecycleProtocol`实例
let api = KAAPI(channel: channel)
api.register(lifecycle: LKLifecycleExternalIMP.init, cache: true)
```

## PROTOCOL

### KALifecycleProtocol

生命周期协议，用于响应生命周期事件

```swift
public protocol KALifecycleProtocol
```

#### Methods
#### `start()`

应用启动时调用

```swift
@objc optional func start()
```

#### `resume()`

应用切到前台时调用

```swift
@objc optional func resume()
```

#### `pause()`

应用切到后台时调用

```swift
@objc optional func pause()
```

#### `onLoginSuccess(isFastLogin:)`

飞书账号登录成功时调用，object: { "isFastLogin": "true" or "false" }

```swift
@objc optional func onLoginSuccess(isFastLogin: Bool)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| isFastLogin | 是否启动直接登录 |

#### `onLoginFail(isFastLogin:)`

飞书账号登录失败时调用

```swift
@objc optional func onLoginFail(isFastLogin: Bool)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| isFastLogin | 是否启动直接登录 |

#### `onLogout()`

飞书账号登出时调用

```swift
@objc optional func onLogout()
```

#### `beforeSwitchAccout()`

飞书账号准备切换租户调用（解决 cookie 问题）

```swift
@objc optional func beforeSwitchAccout()
```

#### `switchAccountSucceed()`

飞书账号切换租户成功调用（解决 cookie 问题）

```swift
@objc optional func switchAccountSucceed()
```

## EXTENSION

### KAAPI
```swift
extension KAAPI
```

#### Methods
#### `register(lifecycle:cache:file:function:line:column:)`

注册`KALifecycleProtocol`协议实例，开发者通常不直接调用

```swift
public func register(
    lifecycle: @escaping () -> KALifecycleProtocol?,
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
| lifecycle | `KALifecycleProtocol`协议实现类的初始化函数 |
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
#### `register(lifecycle:cache:)`

注册`KALifecycleProtocol`协议实例

```swift
public func register(
    lifecycle: @escaping () -> KALifecycleProtocol?,
    cache: Bool
)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| lifecycle | `KALifecycleProtocol`协议实现类的初始化函数 |
| cache | 是否缓存实例。为`false`时，每次调用协议方法都会重新初始化实例 |
