<!--
title: iOS扫码能力_Swift(7.18-7.31)
id: 7275218961529044996
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/scanning-ability/ios-scanning-abil
updatedAt: 1745895134000
source: https://open.feishu.cn/document/native-integration/open-capability/protocol-components/scanning-ability/ios-scanning-abil
-->
# iOS扫码能力_Swift(7.18-7.31)

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKQRCodeExternal | 1.1.3 | 该组件提供扫码回调函数注册能力。当用户在飞书中扫描二维码时，飞书会触发扫码回调事件。开发者可以注册相应的回调函数来处理该事件，并获取扫码结果 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

 ```swift
import LKQRCodeExternal
import LKKABridge

// 自定义的`KAQRCodeApiDelegate`实现类
public class LKQRCodeExternalIMP: KAQRCodeApiDelegate {    
    func interceptHandle(result: String) -> Bool { ... }  
    func handle(result: String) -> Bool { ... }
}

// 注册自定义的`KAQRCodeApiDelegate`实例
let api = KAAPI(channel: channel)
api.register(qrcodeAPIDelegate: LKQRCodeExternalIMP.init, cache: true)
```

## PROTOCOL

### KAQRCodeApiDelegate

扫码能力协议，用于自定义扫码结果回调函数

```swift
public protocol KAQRCodeApiDelegate: AnyObject
```

#### Methods
#### `interceptHandle(result:)`

飞书扫码逻辑之前调用
- Returns: 是否承载本次扫码结果

```swift
func interceptHandle(result: String) -> Bool
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| result | 扫码结果 |

#### `handle(result:)`

飞书扫码逻辑处理之后调用
- Returns: 是否承载本次扫码结果

```swift
func handle(result: String) -> Bool
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| result | 扫码结果 |
## EXTENSION

### KAAPI
```swift
extension KAAPI
```

#### Methods
#### `register(qrcodeAPIDelegate:cache:file:function:line:column:)`

注册`KAQRCodeApiDelegate`协议实例，由 Swift 代码调用

```swift
@objc public func register(
    qrcodeAPIDelegate: @escaping () -> KAQRCodeApiDelegate?,
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
| qrcodeAPIDelegate | `KAQRCodeApiDelegate`协议实现类的初始化函数 |
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
#### `register(qrcodeAPIDelegate:cache:)`

注册`KAQRCodeApiDelegate`协议实例，OC 代码中由 KAAPI_REGISTER宏调用

```swift
public func register(
    qrcodeAPIDelegate: @escaping () -> KAQRCodeApiDelegate?,
    cache: Bool
)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| qrcodeAPIDelegate | `KAQRCodeApiDelegate`协议实现类的初始化函数 |
| cache | 是否缓存实例。为`false`时，每次调用协议方法都会重新初始化实例 |