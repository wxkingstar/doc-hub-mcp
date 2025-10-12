<!--
title: iOS生命周期能力_Swift(7.18-7.31)
id: 7442624731033714707
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/life-cycle/ios-life-cycle-contents/ios-life-cycle
updatedAt: 1745895134000
source: https://open.feishu.cn/document/native-integration/open-capability/protocol-components/life-cycle/ios-life-cycle-contents/ios-life-cycle-2
-->
# iOS 生命周期能力_Swift(7.18-7.31)

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKKACore | 1.0.1 | 该组件定义了应用启动、进入前台、进入后台和飞书账号登录、登出等事件。开发者可以以注册Observer的方式实现相应的回调函数，以便在这些事件发生时执行特定的业务逻辑 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)



 ```swift
import LKKACore
import Foundantion

_ = NotificationCenter.default.addObserver(forName: LKLifecycle.pause, object: nil, queue: nil) { noti in
    // handle noti
}
...

```

## Class

该类定义包括所有生命周期相关的事件名

```swift
public class LKLifecycle
```

#### Properties
#### `start`

应用启动时调用

```swift
public static let start: String = "LKLifecycleStart"
```

#### `resume`

应用切到前台时调用

```swift
public static let resume: String = "LKLifecycleResume"
```

#### `pause()`

应用切到后台时调用

```swift
public static let pause: String = "LKLifecyclePause"
```

#### `onLoginSuccess(isFastLogin:)`

飞书账号登录成功时调用，object: { "isFastLogin": "true" or "false" }

```swift
public static let onLoginSuccess: String = "LKLifecycleOnLoginSuccess"
```

#### `onLoginFail(isFastLogin:)`

飞书账号登录失败时调用

```swift
public static let onLoginFail: String = "LKLifecycleOnLoginFail"
```

#### `onLogout()`

飞书账号登出时调用

```swift
public static let onLogout: String = "LKLifecycleOnLogout"
```

#### `beforeSwitchAccout()`

飞书账号准备切换租户调用（解决 cookie 问题）

```swift
public static let beforeSwitchAccout: String = "LKLifecycleBeforeSwitchAccout"
```

#### `switchAccountSucceed()`

飞书账号切换租户成功调用（解决 cookie 问题）

```swift
public static let switchAccountSucceed: String = "LKLifecycleSwitchAccountSucceed"
```
