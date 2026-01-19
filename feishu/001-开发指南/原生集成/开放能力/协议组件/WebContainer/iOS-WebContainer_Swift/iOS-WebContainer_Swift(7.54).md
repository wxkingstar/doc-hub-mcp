---
title: "iOS WebContainer_Swift(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/webcontainer/ios-webcontainerexternal_swift/ios-webcontainer_swift_754
last_remote_update: 2025-11-03
last_remote_update_timestamp: 1762139832000
---
最后更新于 2025-11-03

# iOS WebContainer_Swift(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKWebContainerExternal | 协议组件 | 1.3.0 | 7.54.0 |

## 功能简介
提供 Web 容器生命周期回调与错误页配置能力，支持自定义 Web 事件处理逻辑

### 更新日志
- 新增 KAWebContainerButtonConfig 与 KAWebContainerErrorPageConfig 用于错误页配置
- 新增 TabParams 用于主导航模式下的页面切换参数传递
- 新增 KAWebContainerProtocol 协议，定义 Web 容器生命周期回调
- 新增 KAAPI 与 _KAAPIWrapper 扩展，支持协议实例注册

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKWebContainerExternal
import LKKABridge

class MyWebContainerImpl: KAWebContainerProtocol {
    func onOpen(url: String, onSuccess: @escaping () -> Void, onFail: @escaping (Int) -> Void) {
        // 自定义处理逻辑
        onSuccess()
    }

func onClose(url: String) {
        // 自定义处理逻辑
    }

func onTabVisibilityChanged(selected: Bool, tabParams: TabParams) {
        // 自定义处理逻辑
    }

// 其余方法省略...
}

let api = KAAPI(channel: "YOUR_CHANNEL")
api.register(webContainer: MyWebContainerImpl.init, cache: true)
```

## PROTOCOL
### KAWebContainerProtocol
WebContainer 组件协议，用于实现自定义的 Web 事件回调函数

```swift
protocol KAWebContainerProtocol: AnyObject {
    func onOpen(url: String, onSuccess: @escaping () -> Void, onFail: @escaping (_ code: Int) -> Void)	// 网页容器打开即将 loadUrl 的时候调用
    func onClose(url: String)	// 网页容器即将关闭的时候调用
    func onTabVisibilityChanged(selected: Bool, tabParams: TabParams)	// 主导航模式下手动切换 Tab 的时候调用
    func errorPageConfig() -> KAWebContainerErrorPageConfig?	// 当网页容器加载失败时，飞书会通过该接口获取错误页展示需要的配置信息
    func kaIdentity() -> String	// 返回业务 tag
}
```

#### 方法列表
#### `func onOpen(url: String, onSuccess: @escaping () -> Void, onFail: @escaping (_ code: Int) -> Void)`
网页容器打开即将 loadUrl 的时候调用

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| url | String | 加载的 h5 url | - |
| onSuccess | () -> Void | 流程处理完，通知网页容器继续加载 | - |
| onFail | (Int) -> Void | 流程处理异常，通知网页容器展示错误页 | - |

#### `func onClose(url: String)`
网页容器即将关闭的时候调用

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| url | String | 即将关闭的页面 h5 url | - |

#### `func onTabVisibilityChanged(selected: Bool, tabParams: TabParams)`
主导航模式下手动切换 Tab 的时候调用

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| selected | Bool | true 表示当前 Tab 被选中，false 表示当前 Tab 未被选中 | - |
| tabParams | TabParams | 主导航模式网页应用切换的时候一些业务参数 | - |

**返回值**：错误页配置

#### `func kaIdentity() -> String`
返回业务 tag

**返回值**：kaIdentity

## CLASS
### KAWebContainerButtonConfig
异常页按钮配置

```swift
class KAWebContainerButtonConfig: NSObject {
    var text: String?	// 文案
    var eventName: String?	// 事件名
    var eventExtra: String?	// 补充信息
    var hide: Bool?	// 是否隐藏
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| text | String? | 文案 | nil |
| eventName | String? | 事件名 | nil |
| eventExtra | String? | 补充信息 | nil |
| hide | Bool? | 是否隐藏 | nil |

### KAWebContainerErrorPageConfig
异常页配置

```swift
class KAWebContainerErrorPageConfig: NSObject {
    var title: String?	// 标题
    var contentTitle: String?	// 内容标题
    var content: String?	// 内容
    var hideBigImage: Bool?	// 是否隐藏大图
    var vpnConfig: KAWebContainerButtonConfig?	// VPN 按钮配置
    var refreshConfig: KAWebContainerButtonConfig?	// 刷新按钮配置
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| title | String? | 标题 | nil |
| contentTitle | String? | 内容标题 | nil |
| content | String? | 内容 | nil |
| hideBigImage | Bool? | 是否隐藏大图 | nil |
| vpnConfig | KAWebContainerButtonConfig? | VPN 按钮配置 | nil |
| refreshConfig | KAWebContainerButtonConfig? | 刷新按钮配置 | nil |

### TabParams
主导航模式网页应用切换的时候一些业务参数

```swift
class TabParams: NSObject {
    var originalUrl: String	// originalUrl: 首次加载的链接
    var currentUrl: String	// currentUrl: 当前正在展现页面的链接
    var appId: String	// appId: 注册应用的 id

required init(originalUrl: String, currentUrl: String, appId: String)
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| originalUrl | String | 首次加载的链接 | - |
| currentUrl | String | 当前正在展现页面的链接 | - |
| appId | String | 注册应用的 id | - |

#### 方法列表
#### `required init(originalUrl: String, currentUrl: String, appId: String)`
构造函数

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| originalUrl | String | 首次加载的链接 | - |
| currentUrl | String | 当前正在展现页面的链接 | - |
| appId | String | 注册应用的 id | - |

## EXTENSION
### KAWebContainerProtocol

```swift
extension KAWebContainerProtocol {
    func getWholeIdentity() -> String	// 默认为空实现
    func kaIdentity() -> String	// 默认为空实现
}
```

#### 方法列表
#### `func getWholeIdentity() -> String`
默认为空实现

**返回值**：拼接后的完整身份标识

#### `func kaIdentity() -> String`
默认为空实现

**返回值**：业务身份标识

### KAAPI

```swift
extension KAAPI {
    func register(
        webContainer: @escaping () -> KAWebContainerProtocol?,
        cache: Bool = false,
        file: String = #file,
        function: String = #function,
        line: Int = #line,
        column: Int = #column
    )
}
```

#### 方法列表
#### `func register(webContainer: @escaping () -> KAWebContainerProtocol?, cache: Bool, file: String, function: String, line: Int, column: Int)`
注册 KAWebContainerProtocol 协议实例，由 Swift 代码调用

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| webContainer | () -> KAWebContainerProtocol? | KAWebContainerProtocol 协议实现类的初始化函数 | - |
| cache | Bool | 是否缓存实例 | false |
| file | String | 注册代码所在文件 | #file |
| function | String | 注册代码所在函数 | #function |
| line | Int | 注册代码所在行 | #line |
| column | Int | 注册代码所在列 | #column |

### _KAAPIWrapper

```swift
extension _KAAPIWrapper {
    func register(
        webContainer: @escaping () -> KAWebContainerProtocol?,
        cache: Bool
    )
}
```

#### 方法列表
#### `func register(webContainer: @escaping () -> KAWebContainerProtocol?, cache: Bool)`
注册 KAWebContainerProtocol 协议实例，OC 代码中由 KAAPI_REGISTER 宏调用

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| webContainer | () -> KAWebContainerProtocol? | KAWebContainerProtocol 协议实现类的初始化函数 | - |
| cache | Bool | 是否缓存实例 | - |
