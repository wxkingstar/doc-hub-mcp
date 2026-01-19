---
title: "iOS扫码能力_Swift(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/scanning-ability/ios-qrcodeexternal_swift/ios-qrcodeexternal_swift_754
last_remote_update: 2025-11-03
last_remote_update_timestamp: 1762139833000
---
最后更新于 2025-11-03

# iOS扫码能力_Swift(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKQRCodeExternal | 协议组件 | 1.2.0 | 7.54.0 |

## 功能简介
提供扫码能力协议，用于自定义扫码结果回调函数

### 更新日志
- 无变更

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKQRCodeExternal
import LKKABridge

class MyQRCodeApiImpl: KAQRCodeApiDelegate {
    func interceptHandle(result: String) -> Bool {
        // 飞书扫码逻辑之前调用
        return true
    }

func handle(result: String) -> Bool {
        // 飞书扫码逻辑处理之后调用
        return true
    }
}

let api = KAAPI(channel: "YOUR_CHANNEL")
api.register(qrcodeAPIDelegate: MyQRCodeApiImpl.init, cache: true)
```

## PROTOCOL
### KAQRCodeApiDelegate
扫码能力协议，用于自定义扫码结果回调函数

```swift
protocol KAQRCodeApiDelegate: AnyObject {
    func interceptHandle(result: String) -> Bool	// 飞书扫码逻辑之前调用
    func handle(result: String) -> Bool	// 飞书扫码逻辑处理之后调用
}
```

#### 方法列表
#### `func interceptHandle(result: String) -> Bool`
飞书扫码逻辑之前调用

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| result | String | 扫码结果 | - |

**返回值**：是否承载本次扫码结果

#### `func handle(result: String) -> Bool`
飞书扫码逻辑处理之后调用

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| result | String | 扫码结果 | - |

**返回值**：是否承载本次扫码结果

## EXTENSION
### KAAPI

```swift
extension KAAPI {
    func register(
        qrcodeAPIDelegate: @escaping () -> KAQRCodeApiDelegate?,
        cache: Bool = false,
        file: String = #file,
        function: String = #function,
        line: Int = #line,
        column: Int = #column
    )
}
```

#### 方法列表
#### `func register(qrcodeAPIDelegate: () -> KAQRCodeApiDelegate?, cache: Bool, file: String, function: String, line: Int, column: Int)`
注册 `KAQRCodeApiDelegate` 协议实例，由 Swift 代码调用

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| qrcodeAPIDelegate | () -> KAQRCodeApiDelegate? | `KAQRCodeApiDelegate` 协议实现类的初始化函数 | - |
| cache | Bool | 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例 | false |
| file | String | 注册代码所在文件 | #file |
| function | String | 注册代码所在函数 | #function |
| line | Int | 注册代码所在行 | #line |
| column | Int | 注册代码所在列 | #column |

### _KAAPIWrapper

```swift
extension _KAAPIWrapper {
    func register(
        qrcodeAPIDelegate: @escaping () -> KAQRCodeApiDelegate?,
        cache: Bool
    )
}
```

#### 方法列表
#### `func register(qrcodeAPIDelegate: () -> KAQRCodeApiDelegate?, cache: Bool)`
注册 `KAQRCodeApiDelegate` 协议实例，OC 代码中由 KAAPI_REGISTER 宏调用

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| qrcodeAPIDelegate | () -> KAQRCodeApiDelegate? | `KAQRCodeApiDelegate` 协议实现类的初始化函数 | - |
| cache | Bool | 是否缓存实例。为 `false` 时，每次调用协议方法都会重新初始化实例 | - |
