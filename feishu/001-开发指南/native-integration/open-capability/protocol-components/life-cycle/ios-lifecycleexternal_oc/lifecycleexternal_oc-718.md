<!--
title: iOS生命周期能力_OC(7.18-7.31)
id: 7498556499688013827
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/life-cycle/ios-lifecycleexternal_oc/lifecycleexternal_oc-718
updatedAt: 1745895134000
source: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/life-cycle/ios-lifecycleexternal_oc/lifecycleexternal_oc-718
-->
# iOS 生命周期能力_OC(7.18-7.31) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKKACore | 1.0.1 | 该组件定义了应用启动、进入前台、进入后台和飞书账号登录、登出等事件名。开发者可以注册相应的observer回调函数，以便在这些事件发生时执行特定的业务逻辑 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)



```objectivec
@import LKKACore;
@import Foundation;
#import "ka_auto_generated.h"

/// 注册类，用于在加载动态库时调用`+load`方法完成注册
@interface LKLifecycleExternalRegistry: NSObject

@end

@implementation LKLifecycleExternalRegistry

+(void)load {
    id __block pauseObserver = [[NSNotificationCenter defaultCenter]
        addObserverForName:LKLifecycle.pause
        object:nil
        queue:nil
        usingBlock:^(NSNotification *note) {
            // handle note
    }];
    ...
}

@end
```


## LKLifecycle

**Properties**

|        类型     | 定义名称           |
| -------------- | -------------- |
| NSString | **start** 应用启动时通知名称|
| NSString | **resume** 应用切到前台时通知名称|
| NSString | **pause** 应用切到后台时通知名称|
| NSString | **onLoginSuccess** 飞书账号登录成功时通知名称|
| NSString | **onLoginFail** 飞书账号登录失败时通知名称|
| NSString | **onLogout** 飞书账号登出时通知名称|
| NSString | **beforeSwitchAccout** 飞书账号准备切换租户通知名称（解决 cookie 问题）|
| NSString | **switchAccountSucceed** 飞书账号切换租户成功通知名称（解决 cookie 问题）|

### **start**

应用启动时通知名称

```cpp
(NSString * _Nonnull)start
```

### **resume**

应用切到前台时通知名称

```cpp
(NSString * _Nonnull)resume
```

### **pause**

应用切到后台时通知名称

```cpp
(NSString * _Nonnull)pause
```

### **onLoginSuccess**

飞书账号登录成功时通知名称

```cpp
(NSString * _Nonnull)onLoginSuccess
```

### **onLoginFail**

飞书账号登录失败时通知名称

```cpp
(NSString * _Nonnull)onLoginFail
```

### **onLogout**

飞书账号登出时通知名称

```cpp
(NSString * _Nonnull)onLogout
```

### **beforeSwitchAccout**

飞书账号准备切换租户通知名称（解决 cookie 问题）

```cpp
(NSString * _Nonnull)beforeSwitchAccout
```

### **switchAccountSucceed**

飞书账号切换租户成功通知名称（解决 cookie 问题）

```cpp
(NSString * _Nonnull)switchAccountSucceed
```
-------------------------------
