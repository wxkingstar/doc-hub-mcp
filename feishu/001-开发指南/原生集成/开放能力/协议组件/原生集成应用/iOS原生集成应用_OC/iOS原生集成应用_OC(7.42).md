---
title: "iOS原生集成应用_OC(7.42)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/native-integrated-application/ios-nativeappextensionexternal_oc/ios-nativeappextensionexternal_oc_742
last_remote_update: 2025-06-23
last_remote_update_timestamp: 1750666100000
---
最后更新于 2025-06-23

# iOS原生集成应用_OC(7.42) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKNativeAppExtensionExternal | 1.1.5 | 该组件通过开放平台的流程创建应用并开启原生集成应用，开发者可以实现原生集成应用与飞书的无缝集成，提供更丰富的功能和更便捷的用户体验。这样可以增强应用的可用性，提升用户的工作效率和体验质量 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objectivec
@import LKKABridge; // 引入 KAAPI_REGISTER 宏
@import LKNativeAppExtensionExternal;
#import "ka_auto_generated.h"

/// 注册类，用于在加载动态库时调用`+load`方法完成注册
@interface LKLifecycleExternalRegistry: NSObject

@end

@implementation LKLifecycleExternalRegistry

+(void)load {
    NSString * channel = [NSString stringWithUTF8String:getChannel()];
    KAAPI *api = [[KAAPI alloc] initWithChannel:channel];    
    [KAAPI_REGISTER registerWithNativeApp:^id<KANativeAppExtensionProtocol> {
            return [[PageRouteIMP alloc] init];
        } cache:YES];
    [KAAPI_REGISTER registerWithOpenNativeApp:^id<OpenNativeAppProtocol> {
        return [[OpenNativeAppIMP alloc] init];
    } cache:YES];
}

@end

/// `KANativeAppExtensionProtocol`协议实现类
@interface PageRouteIMP : NSObject<KANativeAppExtensionProtocol>
...
@end

@implementation PageRouteIMP
...
@end

/// `OpenNativeAppProtocol`协议实现类
@interface OpenNativeAppIMP : NSObject<OpenNativeAppProtocol>
...
@end

@implementation OpenNativeAppIMP
...
@end
```

## _KAAPIWrapper(SWIFT_EXTENSIONLKNativeAppExtensionExternal)

`#include <interface_LKNativeAppExtensionExternal-Swift.h>`

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **registerWithNativeApp:cache:**(id< KANativeAppExtensionProtocol > _Nullable(^)(void) nativeApp, BOOL cache) |
| virtual void | **registerWithOpenNativeApp:cache:**(id< OpenNativeAppProtocol > _Nullable(^)(void) openNativeApp, BOOL cache) |

### **function registerWithNativeApp:cache:**

注册`KANativeAppExtensionProtocol`协议实例，OC 代码中由 KAAPI_REGISTER宏调用 

```cpp
virtual void registerWithNativeApp:cache:(
    id< KANativeAppExtensionProtocol > _Nullable(^)(void) nativeApp,
    BOOL cache
)
```

**Parameters**: 

* **nativeApp** `KANativeAppExtensionProtocol`协议实现类的初始化函数
  * **cache** 是否缓存实例。为`false`时，每次调用协议方法都会重新初始化实例 

### **function registerWithOpenNativeApp:cache:**

注册`OpenNativeAppProtocol`协议实例，OC 代码中由 KAAPI_REGISTER宏调用 

```cpp
virtual void registerWithOpenNativeApp:cache:(
    id< OpenNativeAppProtocol > _Nullable(^)(void) openNativeApp,
    BOOL cache
)
```

**Parameters**: 

* **openNativeApp** `OpenNativeAppProtocol`协议实现类的初始化函数
  * **cache** 是否缓存实例。为`false`时，每次调用协议方法都会重新初始化实例 

-------------------------------

## KAAPI(SWIFT_EXTENSIONLKNativeAppExtensionExternal)

`#include <interface_LKNativeAppExtensionExternal-Swift.h>`

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **registerWithNativeApp:cache:file:function:line:column:**(id< KANativeAppExtensionProtocol > _Nullable(^)(void) nativeApp, BOOL cache, NSString *_Nonnull file, NSString *_Nonnull function, NSInteger line, NSInteger column) |
| virtual void | **registerWithOpenNativeApp:cache:file:function:line:column:**(id< OpenNativeAppProtocol > _Nullable(^)(void) openNativeApp, BOOL cache, NSString *_Nonnull file, NSString *_Nonnull function, NSInteger line, NSInteger column) |

### **function registerWithNativeApp:cache:file:function:line:column:**

注册`KANativeAppExtensionProtocol`协议实例，由 Swift 代码调用 

```cpp
virtual void registerWithNativeApp:cache:file:function:line:column:(
    id< KANativeAppExtensionProtocol > _Nullable(^)(void) nativeApp,
    BOOL cache,
    NSString *_Nonnull file,
    NSString *_Nonnull function,
    NSInteger line,
    NSInteger column
)
```

**Parameters**: 

* **nativeApp** `KANativeAppExtensionProtocol`协议实现类的初始化函数
  * **cache** 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例
  * **file** 注册代码所在文件
  * **function** 注册代码所在函数
  * **line** 注册代码所在行
  * **column** 注册代码所在列 

### **function registerWithOpenNativeApp:cache:file:function:line:column:**

注册`OpenNativeAppProtocol`协议实例，由 Swift 代码调用 

```cpp
virtual void registerWithOpenNativeApp:cache:file:function:line:column:(
    id< OpenNativeAppProtocol > _Nullable(^)(void) openNativeApp,
    BOOL cache,
    NSString *_Nonnull file,
    NSString *_Nonnull function,
    NSInteger line,
    NSInteger column
)
```

**Parameters**: 

* **openNativeApp** `OpenNativeAppProtocol`协议实现类的初始化函数
  * **cache** 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例
  * **file** 注册代码所在文件
  * **function** 注册代码所在函数
  * **line** 注册代码所在行
  * **column** 注册代码所在列 

-------------------------------

## KANativeAppExtensionProtocol

原生集成应用协议，用于注册自定义的 SSO 登录页。为了实现自定义登录页面，用户需要实现该协议并使用 KAAPI 注册。飞书启动时，会跳转至 pageRoute 方法中返回的自定义 ViewController 页面。

`#include <interface_LKNativeAppExtensionExternal-Swift.h>`

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **pageRoute:from:**(NSURL *_Nonnull link, UIViewController *_Nullable from) |
| virtual NSString *_Nonnull | **appId**()<br>The app ID of the integrated native application.  |
| virtual void | **destroy**()<br>Called when the instance is being destroyed (not effective?).  |

### **function pageRoute:from:**

Opens a custom page via FeiShu applink. 

```cpp
virtual void pageRoute:from:(
    NSURL *_Nonnull link,
    UIViewController *_Nullable from
)
```

**Parameters**: 

* **link** The applink URL.
  * **from** The source view controller, which can be nil. 

### **function appId**

The app ID of the integrated native application. 
```cpp
virtual NSString *_Nonnull appId()
```

### **function destroy**

Called when the instance is being destroyed (not effective?). 
```cpp
virtual void destroy()
```

-------------------------------

## NativeAppExtensionProtocol

开放平台的原生集成应用相关协议要实现的基 Protocol，定义 NativeApp 的通用能力。用户通过 OpenNativeAppProtocol 协议实现自定义的原生集成应用实现类时，需要先实现 NativeAppExtensionProtocol
`#include <interface_LKNativeAppExtensionExternal-Swift.h>`

Inherited by <OpenNativeAppProtocol>

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual NSString *_Nonnull | **getNativeAppId**() |

### **function getNativeAppId**

返回 NativeApp 的相关信息(appId)

returns: 返回 app id 

```cpp
virtual NSString *_Nonnull getNativeAppId()
```

-------------------------------

## OpenNativeAppProtocol

打开工作台应用时触发，用于注册开发者自定义的应用页面。用户通过实现并注册该协议，可以在工作台中加入自定义的原生集成应用。实现该协议的类需要先实现 NativeAppExtensionProtocol
`#include <interface_LKNativeAppExtensionExternal-Swift.h>`

Inherits from <NativeAppExtensionProtocol>

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual UIViewController *_Nonnull | **setupVCWithUrl:**(NSString *_Nonnull url) |

### Additional inherited members

**Public Functions inherited from <NativeAppExtensionProtocol>**

|                | Name           |
| -------------- | -------------- |
| virtual NSString *_Nonnull | **getNativeAppId**() |

### **function setupVCWithUrl:**

打开与`getNativeAppId`返回值关联的工作台应用时，调用该方法返回应用页面 
returns: 自定义的应用页面 

```cpp
virtual UIViewController *_Nonnull setupVCWithUrl:(
    NSString *_Nonnull url
)
```

**Parameters**: 

* **url** 跳转时原生集成应用的 applink 地址

-------------------------------
