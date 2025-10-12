---
title: "iOS Tab容器_Swift(7.18-7.31)"
source_url: https://open.feishu.cn/document/native-integration/open-capability/protocol-components/tab-container/ios-tab-container
last_remote_update: 2025-04-29
last_remote_update_timestamp: 1745895155000
---
最后更新于 2025-04-29

# iOS Tab容器_Swift(7.18-7.31) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKTabExternal | 1.1.3 | 该组件使开发者可以根据自身业务需求，在飞书应用中增加自定义的 Tab，提供更丰富和个性化的功能和内容展示。这有助于提升用户体验和工作效率，使应用更加易于访问 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKTabExternal
import LKKABridge

// 自定义的`KATabProtocol`实现类
public class LKTabExternalIMP: KATabProtocol {    
    var appId: String { ... }
    var showNaviBar: Bool { ... }
    var naviBarTitle: String? { ... }
    var tabViewController: () -> UIViewController { ... }
    var firstNaviBarButton: ((UIViewController) -> UIButton?)?  { ... }
    var secondNaviBarButton: ((UIViewController) -> UIButton?)? { ... }
    var tabSingleClick: (() -> Void)? { ... }
    var tabDoubleClick: (() -> Void)? { ... }
}

// 注册自定义的`KATabProtocol`实例
let api = KAAPI(channel: channel)
api.register(tab: LKTabExternalIMP.init, cache: true)
```

## PROTOCOL

### KATabProtocol

Tab 容器协议，用于实现自定义的 Tab

```swift
public protocol KATabProtocol
```

#### Properties
#### `appId`

appId，和开平申请的 appId 一致

```swift
var appId: String
```

#### `showNaviBar`

是否展示 navi bar

```swift
var showNaviBar: Bool
```

#### `tabViewController`

tab 对应的 ViewController

```swift
var tabViewController: () -> UIViewController
```

#### `firstNaviBarButton`

navi bar 上方右侧第一个按钮，无需设置 size（会自动调整大小），仅当 showNaviBar 为 true 时生效，入参为 tabViewController

```swift
var firstNaviBarButton: ((UIViewController) -> UIButton?)?
```

#### `secondNaviBarButton`

navi bar 上方右侧第二个按钮，无需设置 size（会自动调整大小），仅当 showNaviBar 为 true 时生效，入参为 tabViewController

```swift
var secondNaviBarButton: ((UIViewController) -> UIButton?)?
```

#### `naviBarTitle`

navi bar 标题，仅当 showNaviBar 为 true 时生效

```swift
var naviBarTitle: String?
```

#### `tabSingleClick`

tab 单击事件

```swift
var tabSingleClick: (() -> Void)?
```

#### `tabDoubleClick`

tab 双击事件

```swift
var tabDoubleClick: (() -> Void)?
```

## EXTENSION

### KAAPI
```swift
extension KAAPI
```

#### Methods
#### `register(tab:cache:file:function:line:column:)`

注册`KATabProtocol`协议实例，由 Swift 代码调用

```swift
@objc public func register(
    tab: @escaping () -> KATabProtocol?,
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
| tab | `KATabProtocol`协议实现类的初始化函数 |
| cache | 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例 |
| file | 注册代码所在文件 |
| function | 注册代码所在函数 |
| line | 注册代码所在行 |
| column | 注册代码所在列 |
## EXTENSION

### KATabProtocol
```swift
public extension KATabProtocol
```

#### Properties
#### `firstNaviBarButton`

默认为空实现

```swift
var firstNaviBarButton: ((UIViewController) -> UIButton?)?
```

#### `secondNaviBarButton`

默认为空实现

```swift
var secondNaviBarButton: ((UIViewController) -> UIButton?)?
```

#### `naviBarTitle`

默认为空实现

```swift
var naviBarTitle: String?
```

#### `tabSingleClick`

默认为空实现

```swift
var tabSingleClick: (() -> Void)?
```

#### `tabDoubleClick`

默认为空实现

```swift
var tabDoubleClick: (() -> Void)?
```

## EXTENSION

### _KAAPIWrapper
```swift
extension _KAAPIWrapper
```

#### Methods
#### `register(tab:cache:)`

注册`KATabProtocol`协议实例，OC 代码中由 KAAPI_REGISTER宏调用

```swift
public func register(
    tab: @escaping () -> KATabProtocol?,
    cache: Bool
)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| tab | `KATabProtocol`协议实现类的初始化函数 |
| cache | 是否缓存实例。为`false`时，每次调用协议方法都会重新初始化实例 |
## STRUCT

### KATabConfig

Tab 配置，开发者不直接调用

```swift
public struct KATabConfig
```

#### Properties
#### `tabViewController`

```swift
public let tabViewController: () -> UIViewController
```

#### `appId`

```swift
public let appId: String
```

#### `showNaviBar`

```swift
public let showNaviBar: Bool
```

#### `firstNaviBarButton`

```swift
public let firstNaviBarButton: ((UIViewController) -> UIButton?)?
```

#### `secondNaviBarButton`

```swift
public let secondNaviBarButton: ((UIViewController) -> UIButton?)?
```

#### `naviBarTitle`

```swift
public let naviBarTitle: String?
```

#### `tabSingleClick`

```swift
public let tabSingleClick: (() -> Void)?
```

#### `tabDoubleClick`

```swift
public let tabDoubleClick: (() -> Void)?
```

#### Methods
#### `init(config:)`

```swift
public init(config: KATabProtocol)
```
