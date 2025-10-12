---
title: "iOS WebContainer_Swift(7.18-7.31)"
source_url: https://open.feishu.cn/document/native-integration/open-capability/protocol-components/webcontainer/ios-webcontainer
last_remote_update: 2025-04-29
last_remote_update_timestamp: 1745895068000
---
最后更新于 2025-04-29

# iOS WebContainer_Swift(7.18-7.31) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKWebContainerExternal | 1.2.2 | 该组件为飞书网页容器提供了回调接口，用于在打开和关闭 web 页面时进行处理。同时，该组件还支持定制错误页的内容和处理按钮点击事件 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKWebContainerExternal
import LKKABridge

// 自定义的`KAWebContainerProtocol`实现类
class LKWebContainerExternalIMP: KAWebContainerProtocol {    
    func onOpen(url: String, onSuccess: @escaping () -> Void, onFail: @escaping (_ code: Int) -> Void) {
        ...
    }
    func onClose(url: String) { ... }
    func onTabVisibilityChanged(selected: Bool, tabParams: TabParams) { ... }
    func errorPageConfig() -> KAWebContainerErrorPageConfig? { ... }
    func kaIdentity() -> String { ... }
}

// 注册自定义的`KAVideoChatDelegate`实例
let api = KAAPI(channel: channel)
api.register(webContainer: LKWebContainerExternalIMP.init, cache: true)
```

## PROTOCOL

### KAWebContainerProtocol

WebContainer 组件协议，用于实现自定义的 Web 事件回调函数

```swift
public protocol KAWebContainerProtocol: AnyObject
```

#### Methods
#### `onOpen(url:onSuccess:onFail:)`

网页容器打开即将loadUrl的时候调用
 **warning: 飞书 onOpen 方法同步等待用户回调，需要在方法实现中手动调用 onSuccess 或 onFail 函数完成调用**

```swift
func onOpen(url: String, onSuccess: @escaping () -> Void, onFail: @escaping (_ code: Int) -> Void)
```

#### `onClose(url:)`

网页容器即将关闭的时候调用

```swift
func onClose(url: String)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| url | 即将关闭的页面 h5 url |

#### `onTabVisibilityChanged(selected:tabParams:)`

主导航模式下手动切换Tab的时候调用

```swift
func onTabVisibilityChanged(selected: Bool, tabParams: TabParams)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| selected | true表示当前Tab被选中, false表示当前Tab未被选中 |
| tabParams | 主导航模式网页应用切换的时候一些业务参数 |

#### `errorPageConfig()`

当网页容器加载失败时，飞书会通过该接口获取错误页展示需要的配置信息
- Returns: 错误页配置

```swift
func errorPageConfig() -> KAWebContainerErrorPageConfig?
```

#### `kaIdentity()`

返回业务 tag
- Returns: kaIdentity

```swift
@objc optional func kaIdentity() -> String
```

## CLASS

### KAWebContainerButtonConfig

异常页按钮配置

```swift
public class KAWebContainerButtonConfig: NSObject
```

#### Properties
#### `text`

文案

```swift
public var text: String?
```

#### `eventName`

事件名

```swift
public var eventName: String?
```

#### `eventExtra`

补充信息

```swift
public var eventExtra: String?
```

#### `hide`

是否隐藏

```swift
public var hide: Bool?
```

## CLASS

### KAWebContainerErrorPageConfig

异常页配置

```swift
public class KAWebContainerErrorPageConfig: NSObject
```

#### Properties
#### `title`

标题

```swift
public var title: String?
```

#### `contentTitle`

内容标题

```swift
public var contentTitle: String?
```

#### `content`

内容

```swift
public var content: String?
```

#### `hideBigImage`

是否隐藏大图

```swift
public var hideBigImage: Bool?
```

#### `vpnConfig`

VPN 按钮配置

```swift
public var vpnConfig: KAWebContainerButtonConfig?
```

#### `refreshConfig`

刷新按钮配置

```swift
public var refreshConfig: KAWebContainerButtonConfig?
```

## CLASS

### TabParams

主导航模式网页应用切换的时候一些业务参数

```swift
public class TabParams: NSObject
```

#### Properties
#### `originalUrl`

originalUrl: 首次加载的链接

```swift
public var originalUrl: String
```

#### `currentUrl`

currentUrl: 当前正在展现页面的链接

```swift
public var currentUrl: String
```

#### `appId`

appId: 注册应用的id

```swift
public var appId: String
```

#### Methods
#### `init(originalUrl:currentUrl:appId:)`

构造函数

```swift
public required init(originalUrl: String, currentUrl: String, appId: String)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| originalUrl | 首次加载的链接 |
| currentUrl | 当前正在展现页面的链接 |
| appId | 注册应用的id |
## EXTENSION

### KAAPI
```swift
extension KAAPI
```

#### Methods
#### `register(webContainer:cache:file:function:line:column:)`

注册`KAWebContainerProtocol`协议实例，由 Swift 代码调用

```swift
@objc public func register(
    webContainer: @escaping () -> KAWebContainerProtocol?,
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
| webContainer | `KAWebContainerProtocol`协议实现类的初始化函数 |
| cache | 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例 |
| file | 注册代码所在文件 |
| function | 注册代码所在函数 |
| line | 注册代码所在行 |
| column | 注册代码所在列 |
## EXTENSION

### KAWebContainerProtocol
```swift
public extension KAWebContainerProtocol
```

#### Methods
#### `getWholeIdentity()`

默认为空实现

```swift
func getWholeIdentity() -> String
```

#### `kaIdentity()`

默认为空实现

```swift
func kaIdentity() -> String
```

## EXTENSION

### _KAAPIWrapper
```swift
extension _KAAPIWrapper
```

#### Methods
#### `register(webContainer:cache:)`

注册`KAWebContainerProtocol`协议实例，OC 代码中由 KAAPI_REGISTER宏调用

```swift
public func register(
    webContainer: @escaping () -> KAWebContainerProtocol?,
    cache: Bool
)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| webContainer | `KAWebContainerProtocol`协议实现类的初始化函数 |
| cache | 是否缓存实例。为`false`时，每次调用协议方法都会重新初始化实例 |
