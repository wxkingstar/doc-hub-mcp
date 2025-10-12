---
title: "iOS桌面快捷菜单_Swift(7.18-7.31)"
source_url: https://open.feishu.cn/document/native-integration/open-capability/protocol-components/desktop-shortcut-menu/ios-desktop-shortcut-menu
---
最后更新于 2025-04-29

# iOS桌面快捷菜单_Swift(7.18-7.31)

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKShortcutExternal | 1.1.3 | 该组件提供飞书开放桌面快捷方式菜单入口，通过该API开发者可以集成自有菜单到飞书桌面快捷方式 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKShortcutExternal
import LKKABridge

// 自定义的`KAShortcutProtocol`实现类
class LKShortcutExternalIMP: KAShortcutProtocol {    
    var type: String { ... }
    var icon: UIApplicationShortcutIcon { ... }
    var localizedTitle: String { ... }
    var localizedSubtitle: String? { ... }
    var appLinkURL: String { ... }
}

// 注册自定义的`KAMenusProtocol`实例
let api = KAAPI(channel: channel)
api.register(shortcut: LKShortcutExternalIMP.init, cache: true)
```

## PROTOCOL

### KAShortcutProtocol

桌面快捷菜单协议，用于实现自定义的桌面快捷菜单

```swift
public protocol KAShortcutProtocol: AnyObject
```

#### Properties
#### `type`

快捷方式唯一标识

```swift
var type: String
```

#### `icon`

快捷方式 icon 图标

https://developer.apple.com/documentation/uikit/uiapplicationshortcuticon

```swift
var icon: UIApplicationShortcutIcon
```

#### `localizedTitle`

标题文案

```swift
var localizedTitle: String
```

#### `localizedSubtitle`

副标题, 可选

```swift
var localizedSubtitle: String?
```

#### `appLinkURL`

长按后跳转的页面对应的AppLink URL

```swift
var appLinkURL: String
```

## CLASS

### LKShortcutItem

快捷菜单项，开发者不直接使用

```swift
public class LKShortcutItem: NSObject
```

#### Properties
#### `kaPrefixIdentifier`

```swift
public static let kaPrefixIdentifier = "ka_shortcut"
```

#### `type`

```swift
public let type: String
```

#### `icon`

```swift
public let icon: UIApplicationShortcutIcon
```

#### `title`

```swift
public let title: String
```

#### `subtitle`

```swift
public let subtitle: String?
```

#### `appLinkURL`

```swift
public let appLinkURL: String
```

#### Methods
#### `init(item:)`

```swift
public init(item: KAShortcutProtocol)
```

## EXTENSION

### KAAPI
```swift
extension KAAPI
```

#### Methods
#### `register(shortcut:cache:file:function:line:column:)`

注册`KAShortcutProtocol`协议实例，由 Swift 代码调用

```swift
@objc public func register(
    shortcut: @escaping () -> KAShortcutProtocol?,
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
| shortcut | `KAShortcutProtocol`协议实现类的初始化函数 |
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
#### `register(shortcut:cache:)`

注册`KAShortcutProtocol`协议实例，OC 代码中由 KAAPI_REGISTER宏调用

```swift
public func register(
    shortcut: @escaping () -> KAShortcutProtocol?,
    cache: Bool
)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| shortcut | `KAShortcutProtocol`协议实现类的初始化函数 |
| cache | 是否缓存实例。为`false`时，每次调用协议方法都会重新初始化实例 |
