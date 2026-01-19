---
title: "iOS Tab容器_Swift(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/tab-container/ios-tabexternal_swift/ios-tabexternal_swift_754
last_remote_update: 2025-11-03
last_remote_update_timestamp: 1762139833000
---
最后更新于 2025-11-03

# iOS Tab容器_Swift(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKTabExternal | 协议组件 | 1.2.0 | 7.54.0 |

## 功能简介
提供自定义 Tab 容器的协议定义与注册能力，允许开发者通过实现协议来创建自定义 Tab，并支持在 Swift 与 OC 中统一注册

### 更新日志
- 新增 KATabProtocol 协议，用于描述自定义 Tab 所需的所有配置
- 新增 KATabProtocol 默认空实现，简化开发者接入
- 新增 KAAPI 与 _KAAPIWrapper 的 register(tab:cache:) 方法，支持 Swift / OC 注册

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKTabExternal
import LKKABridge

// 实现协议
struct MyTabImpl: KATabProtocol {
    var appId: String { "your_app_id" }
    var showNaviBar: Bool { true }
    var tabViewController: () -> UIViewController { { UIViewController() } }
    var naviBarTitle: String? { "示例 Tab" }
    // 其余可选属性使用默认空实现 …
}

// 注册
let api = KAAPI(channel: "YOUR_CHANNEL")
api.register(tab: MyTabImpl.init, cache: true)
```

## PROTOCOL
### KATabProtocol
Tab 容器协议，用于实现自定义的 Tab

```swift
protocol KATabProtocol {
    var appId: String { get }	// appId，和开平申请的 appId 一致
    var showNaviBar: Bool { get }	// 是否展示 navi bar
    var tabViewController: () -> UIViewController { get }	// tab 对应的 ViewController
    var firstNaviBarButton: ((UIViewController) -> UIButton?)? { get }	// navi bar 上方右侧第一个按钮，无需设置 size（会自动调整大小），仅当 showNaviBar 为 true 时生效，入参为 tabViewController
    var secondNaviBarButton: ((UIViewController) -> UIButton?)? { get }	// navi bar 上方右侧第二个按钮，无需设置 size（会自动调整大小），仅当 showNaviBar 为 true 时生效，入参为 tabViewController
    var naviBarTitle: String? { get }	// navi bar 标题，仅当 showNaviBar 为 true 时生效
    var tabSingleClick: (() -> Void)? { get }	// tab 单击事件
    var tabDoubleClick: (() -> Void)? { get }	// tab 双击事件
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| appId | String | appId，和开平申请的 appId 一致 | - |
| showNaviBar | Bool | 是否展示 navi bar | - |
| tabViewController | () -> UIViewController | tab 对应的 ViewController | - |
| firstNaviBarButton | ((UIViewController) -> UIButton?)? | navi bar 上方右侧第一个按钮，无需设置 size（会自动调整大小），仅当 showNaviBar 为 true 时生效，入参为 tabViewController | nil |
| secondNaviBarButton | ((UIViewController) -> UIButton?)? | navi bar 上方右侧第二个按钮，无需设置 size（会自动调整大小），仅当 showNaviBar 为 true 时生效，入参为 tabViewController | nil |
| naviBarTitle | String? | navi bar 标题，仅当 showNaviBar 为 true 时生效 | nil |
| tabSingleClick | (() -> Void)? | tab 单击事件 | nil |
| tabDoubleClick | (() -> Void)? | tab 双击事件 | nil |

## EXTENSION
### KATabProtocol

```swift
extension KATabProtocol {
    var firstNaviBarButton: ((UIViewController) -> UIButton?)? { nil }	// 默认为空实现
    var secondNaviBarButton: ((UIViewController) -> UIButton?)? { nil }	// 默认为空实现
    var naviBarTitle: String? { nil }	// 默认为空实现
    var tabSingleClick: (() -> Void)? { nil }	// 默认为空实现
    var tabDoubleClick: (() -> Void)? { nil }	// 默认为空实现
}
```

### KAAPI

```swift
extension KAAPI {
    func register(
        tab: @escaping () -> KATabProtocol?,
        cache: Bool = false,
        file: String = #file,
        function: String = #function,
        line: Int = #line,
        column: Int = #column
    )
}
```

#### 方法列表
#### `func register(tab: () -> KATabProtocol?, cache: Bool, file: String, function: String, line: Int, column: Int)`
注册 `KATabProtocol` 协议实例，由 Swift 代码调用

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| tab | () -> KATabProtocol? | `KATabProtocol` 协议实现类的初始化函数 | - |
| cache | Bool | 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例 | false |
| file | String | 注册代码所在文件 | #file |
| function | String | 注册代码所在函数 | #function |
| line | Int | 注册代码所在行 | #line |
| column | Int | 注册代码所在列 | #column |

### _KAAPIWrapper

```swift
extension _KAAPIWrapper {
    func register(
        tab: @escaping () -> KATabProtocol?,
        cache: Bool
    )
}
```

#### 方法列表
#### `func register(tab: () -> KATabProtocol?, cache: Bool)`
注册 `KATabProtocol` 协议实例，OC 代码中由 KAAPI_REGISTER 宏调用

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| tab | () -> KATabProtocol? | `KATabProtocol` 协议实现类的初始化函数 | - |
| cache | Bool | 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例 | - |

## CLASS
### KATabConfig
Tab 配置，开发者不直接调用

```swift
struct KATabConfig {
    let tabViewController: () -> UIViewController
    let appId: String
    let showNaviBar: Bool
    let firstNaviBarButton: ((UIViewController) -> UIButton?)?
    let secondNaviBarButton: ((UIViewController) -> UIButton?)?
    let naviBarTitle: String?
    let tabSingleClick: (() -> Void)?
    let tabDoubleClick: (() -> Void)?
    init(config: KATabProtocol)
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| tabViewController | () -> UIViewController | - | - |
| appId | String | - | - |
| showNaviBar | Bool | - | - |
| firstNaviBarButton | ((UIViewController) -> UIButton?)? | - | - |
| secondNaviBarButton | ((UIViewController) -> UIButton?)? | - | - |
| naviBarTitle | String? | - | - |
| tabSingleClick | (() -> Void)? | - | - |
| tabDoubleClick | (() -> Void)? | - | - |
