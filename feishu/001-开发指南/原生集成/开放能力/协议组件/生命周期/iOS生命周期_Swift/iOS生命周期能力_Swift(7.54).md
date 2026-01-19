---
title: "iOS生命周期能力_Swift(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/life-cycle/ios-life-cycle-contents/lifecycleexternal_swift_754
last_remote_update: 2025-11-03
last_remote_update_timestamp: 1762139833000
---
最后更新于 2025-11-03

# iOS生命周期能力_Swift(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKLifecycleExternal | 协议组件 | 1.1.0 | 7.54.0 |

## 功能简介
提供应用生命周期事件回调协议，用于在应用启动、前后台切换、登录登出等关键节点接收通知

### 更新日志
- 无变更

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKLifecycleExternal
import LKKABridge

class MyLifecycleImpl: KALifecycleProtocol {
    func start() {
        // 应用启动处理
    }

func resume() {
        // 应用切到前台处理
    }

func pause() {
        // 应用切到后台处理
    }

// 其余方法省略...
}

let api = KAAPI(channel: "YOUR_CHANNEL")
api.register(lifecycle: MyLifecycleImpl.init, cache: true)
```

## PROTOCOL
### KALifecycleProtocol
生命周期协议，用于响应生命周期事件

```swift
protocol KALifecycleProtocol {
    func start()	// 应用启动时调用
    func resume()	// 应用切到前台时调用
    func pause()	// 应用切到后台时调用
    func onLoginSuccess(isFastLogin: Bool)	// 飞书账号登录成功时调用，object: { "isFastLogin": "true" or "false" }
    func onLoginFail(isFastLogin: Bool)	// 飞书账号登录失败时调用
    func onLogout()	// 飞书账号登出时调用
    func beforeSwitchAccout()	// 飞书账号准备切换租户调用（解决 cookie 问题）
    func switchAccountSucceed()	// 飞书账号切换租户成功调用（解决 cookie 问题）
}
```

#### 方法列表
#### `func start()`
应用启动时调用

#### `func resume()`
应用切到前台时调用

#### `func pause()`
应用切到后台时调用

#### `func onLoginSuccess(isFastLogin: Bool)`
飞书账号登录成功时调用，object: { "isFastLogin": "true" or "false" }

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| isFastLogin | Bool | 是否启动直接登录 | - |

#### `func onLoginFail(isFastLogin: Bool)`
飞书账号登录失败时调用

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| isFastLogin | Bool | 是否启动直接登录 | - |

#### `func onLogout()`
飞书账号登出时调用

#### `func beforeSwitchAccout()`
飞书账号准备切换租户调用（解决 cookie 问题）

#### `func switchAccountSucceed()`
飞书账号切换租户成功调用（解决 cookie 问题）

## EXTENSION
### KAAPI

```swift
extension KAAPI {
    func register(
        lifecycle: @escaping () -> KALifecycleProtocol?,
        cache: Bool = false,
        file: String = #file,
        function: String = #function,
        line: Int = #line,
        column: Int = #column
    )
}
```

#### 方法列表
#### `func register(lifecycle: () -> KALifecycleProtocol?, cache: Bool, file: String, function: String, line: Int, column: Int)`
注册 `KALifecycleProtocol` 协议实例，开发者通常不直接调用

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| lifecycle | () -> KALifecycleProtocol? | `KALifecycleProtocol` 协议实现类的初始化函数 | - |
| cache | Bool | 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例 | false |
| file | String | 注册代码所在文件 | #file |
| function | String | 注册代码所在函数 | #function |
| line | Int | 注册代码所在行 | #line |
| column | Int | 注册代码所在列 | #column |

### _KAAPIWrapper

```swift
extension _KAAPIWrapper {
    func register(
        lifecycle: @escaping () -> KALifecycleProtocol?,
        cache: Bool
    )
}
```

#### 方法列表
#### `func register(lifecycle: () -> KALifecycleProtocol?, cache: Bool)`
注册 `KALifecycleProtocol` 协议实例

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| lifecycle | () -> KALifecycleProtocol? | `KALifecycleProtocol` 协议实现类的初始化函数 | - |
| cache | Bool | 是否缓存实例。为 `false` 时，每次调用协议方法都会重新初始化实例 | - |
