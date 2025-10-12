<!--
title: iOS生命周期能力_OC(7.42)
id: 7494123506226364444
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/life-cycle/ios-lifecycleexternal_oc/lifecycleexternal_oc_742
updatedAt: 1745215539000
source: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/life-cycle/ios-lifecycleexternal_oc/lifecycleexternal_oc_742
-->
# iOS生命周期能力_OC(7.42) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKLifecycleExternal | 1.0.1 | 该组件相关回调包括应用启动、进入前台、进入后台和飞书账号登录、登出等事件。开发者可以实现相应的回调函数，以便在这些事件发生时执行特定的业务逻辑 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)



```objectivec
@import LKKABridge; // 引入 KAAPI_REGISTER 宏
@import LKLifecycleExternal;
#import "ka_auto_generated.h"

/// 注册类，用于在加载动态库时调用`+load`方法完成注册
@interface LKLifecycleExternalRegistry: NSObject

@end

@implementation LKLifecycleExternalRegistry

+(void)load {
    NSString * channel = [NSString stringWithUTF8String:getChannel()];
    KAAPI *api = [[KAAPI alloc] initWithChannel:channel];    
    [KAAPI_REGISTER registerWithLifecycle:^id<KALifecycleProtocol> {
            return [[LKLifecycleExternalIMP alloc] init];
        } cache:YES];
}

@end

/// `KALifecycleProtocol`协议实现类
@interface LKLifecycleExternalIMP : NSObject<KALifecycleProtocol>
...
@end

@implementation LKLifecycleExternalIMP
...
@end
```

## _KAAPIWrapper(SWIFT_EXTENSIONLKLifecycleExternal)




`#include <interface_LKLifecycleExternal-Swift.h>`



|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **registerWithLifecycle:cache:**(id< KALifecycleProtocol > _Nullable(^)(void) lifecycle, BOOL cache) |



### **function registerWithLifecycle:cache:**


注册`KALifecycleProtocol`协议实例 

```cpp
virtual void registerWithLifecycle:cache:(
    id< KALifecycleProtocol > _Nullable(^)(void) lifecycle,
    BOOL cache
)
```


**Parameters**: 

  * **lifecycle** `KALifecycleProtocol`协议实现类的初始化函数
  * **cache** 是否缓存实例。为`false`时，每次调用协议方法都会重新初始化实例 


-------------------------------

## KALifecycleProtocol



生命周期协议，用于响应生命周期事件 
`#include <interface_LKLifecycleExternal-Swift.h>`



|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **start**()<br>应用启动时调用  |
| virtual void | **resume**()<br>应用切到前台时调用  |
| virtual void | **pause**()<br>应用切到后台时调用  |
| virtual void | **onLoginSuccessWithIsFastLogin:**(BOOL isFastLogin) |
| virtual void | **onLoginFailWithIsFastLogin:**(BOOL isFastLogin) |
| virtual void | **onLogout**()<br>飞书账号登出时调用  |
| virtual void | **beforeSwitchAccout**()<br>飞书账号准备切换租户调用（解决 cookie 问题）  |
| virtual void | **switchAccountSucceed**()<br>飞书账号切换租户成功调用（解决 cookie 问题）  |



### **function start**

应用启动时调用 
```cpp
virtual void start()
```


### **function resume**

应用切到前台时调用 
```cpp
virtual void resume()
```


### **function pause**

应用切到后台时调用 
```cpp
virtual void pause()
```


### **function onLoginSuccessWithIsFastLogin:**


飞书账号登录成功时调用，object: { “isFastLogin”: “true” or “false” } 

```cpp
virtual void onLoginSuccessWithIsFastLogin:(
    BOOL isFastLogin
)
```


**Parameters**: 

  * **isFastLogin** 是否启动直接登录 


### **function onLoginFailWithIsFastLogin:**


飞书账号登录失败时调用 

```cpp
virtual void onLoginFailWithIsFastLogin:(
    BOOL isFastLogin
)
```


**Parameters**: 

  * **isFastLogin** 是否启动直接登录 


### **function onLogout**

飞书账号登出时调用 
```cpp
virtual void onLogout()
```


### **function beforeSwitchAccout**

飞书账号准备切换租户调用（解决 cookie 问题） 
```cpp
virtual void beforeSwitchAccout()
```


### **function switchAccountSucceed**

飞书账号切换租户成功调用（解决 cookie 问题） 
```cpp
virtual void switchAccountSucceed()
```


-------------------------------
