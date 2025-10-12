---
title: "iOS原生集成应用_Swift(7.18-7.31)"
source_url: https://open.feishu.cn/document/native-integration/open-capability/protocol-components/native-integrated-application/ios-native-integrated-application/ios-native-integrated-application
last_remote_update: 2025-04-29
last_remote_update_timestamp: 1745895134000
---
最后更新于 2025-04-29

# iOS原生集成应用_Swift(7.18-7.31) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKNativeAppExtension | 1.0.1 | 该组件提供了注册宏，可以注册实现了原生集成 SSO 登录协议的自定义页面 |
| LKNativeAppExtensionAbility | 1.0.1 | 该组件提供了原生集成 SSO 登录协议，使用户可以实现自定义的 SSO 登录页面 |
| NativeAppPublicKit | 1.0.2 | 通过开放平台的流程创建应用并开启原生集成应用，开发者可以实现自定义的三方应用原生集成界面 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```
// .m 文件中调用注册宏注册 SSO 登录相关实现
@import LKNativeAppExtension

@LKNativeAppExtension(PassportPageRoute, /* app id */, false)
```

```swift
import LKNativeAppExtension
import LKNativeAppExtensionAbility
import NativeAppPublicKit

/******* 自定义 SSO 登录页面 *************/
 // .swift 文件中实现 SSO 登录相关协议
@objc(PassportPageRoute)
public class PassportPageRoute: LKNativeAppExtension, LKNativeAppExtensionPageRoute {
   ...
}

/******* 自定义工作台应用 *********/
// 自定义的`OpenNativeAppProtocol`实现类
public class OpenNativeAppIMP: OpenNativeAppProtocol {
    public func setupVC(url: String) -> UIViewController { ... }
    public func getNativeAppId() -> String { ... }
}

// 注册自定义的组件协议实例
NativeAppConnectManager.shared.setupDIItems(protocolType:.OpenNativeAppProtocol, impl:OpenNativeAppIMP());
```

## PROTOCOL

### LKNativeAppExtension
`import LKNativeAppExtension`

原生集成 SSO 登录相关协议

```swift
public protocol LKNativeAppExtension
```

#### Methods
#### `destroy()`

飞书销毁原生集成应用的时候调用.

```swift
public func destroy()
```

#### Properties
#### `appId`

原生集成 SSO 登录绑定的 app id.

```swift
public var addId
```

### LKNativeAppExtensionPageRoute
`import LKNativeAppExtensionAbility`

原生集成 SSO 登录相关协议

```swift
public protocol LKNativeAppExtensionPageRoute: NativeAppExtensionProtocol
```

#### Methods
#### `getNativeAppId()`

返回 NativeApp 的相关信息(appId)
- Returns: 返回 app id

```swift
func getNativeAppId() -> String
```

#### `pageRoute(link: NSURL, from: UIViewController)`

打开本地应用时调用，开发者在该接口打开自有页面

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| link | 跳转时原生集成应用的 applink 地址，可以获取 SSO 登录相关状态 |
| from | 跳转时的页面，在方法实现中，用户可以从该页面跳转到自定义页面 |

```swift
func pageRoute(link: NSURL, from: UIViewController)
```

### OpenNativeAppProtocol
`import NativeAppPublicKit`

打开工作台应用时触发，用于注册开发者自定义的应用页面

```swift
public protocol OpenNativeAppProtocol: NativeAppExtensionProtocol
```

#### Methods
#### `setupVC(url:)`

打开与`getNativeAppId`返回值关联的工作台应用时，调用该方法返回应用页面
- Returns: 自定义的应用页面

```swift
func setupVC(url: String) -> UIViewController
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| url | 跳转时原生集成应用的 applink 地址 |
