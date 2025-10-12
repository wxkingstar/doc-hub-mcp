---
title: "iOS扫码能力_OC(7.42)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/scanning-ability/ios-qrcodeexternal_oc/ios-qrcodeexternal_oc_742
last_remote_update: 2025-04-21
last_remote_update_timestamp: 1745215540000
---
最后更新于 2025-04-21

# iOS扫码能力_OC(7.42)

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKQRCodeExternal | 1.1.3 | 该组件提供扫码回调函数注册能力。当用户在飞书中扫描二维码时，飞书会触发扫码回调事件。开发者可以注册相应的回调函数来处理该事件，并获取扫码结果 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objectivec
@import LKKABridge; // 引入 KAAPI_REGISTER 宏
@import LKQRCodeExternal;
#import "ka_auto_generated.h"

/// 注册类，用于在加载动态库时调用`+load`方法完成注册
@interface LKQRCodeExternalRegistry: NSObject

@end

@implementation LKQRCodeExternalRegistry

+(void)load {
    NSString * channel = [NSString stringWithUTF8String:getChannel()];
    KAAPI *api = [[KAAPI alloc] initWithChannel:channel];    
    [KAAPI_REGISTER registerWithQrcodeAPIDelegate:^id<KAQRCodeApiDelegate> {
            return [[LKQRCodeExternalIMP alloc] init];
        } cache:YES];
}

@end

/// `KAQRCodeApiDelegate`协议实现类
@interface LKQRCodeExternalIMP : NSObject<KAQRCodeApiDelegate>
...
@end

@implementation LKQRCodeExternalIMP
...
@end
```

## _KAAPIWrapper(SWIFT_EXTENSIONLKQRCodeExternal)

`#include <interface_LKQRCodeExternal-Swift.h>`

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **registerWithQrcodeAPIDelegate:cache:**(id< KAQRCodeApiDelegate > _Nullable(^)(void) qrcodeAPIDelegate, BOOL cache) |

### **function registerWithQrcodeAPIDelegate:cache:**

注册`KAQRCodeApiDelegate`协议实例，OC 代码中由 KAAPI_REGISTER宏调用 

```cpp
virtual void registerWithQrcodeAPIDelegate:cache:(
    id< KAQRCodeApiDelegate > _Nullable(^)(void) qrcodeAPIDelegate,
    BOOL cache
)
```

**Parameters**: 

* **qrcodeAPIDelegate** `KAQRCodeApiDelegate`协议实现类的初始化函数
  * **cache** 是否缓存实例。为`false`时，每次调用协议方法都会重新初始化实例 

-------------------------------

## KAAPI(SWIFT_EXTENSIONLKQRCodeExternal)

`#include <interface_LKQRCodeExternal-Swift.h>`

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **registerWithQrcodeAPIDelegate:cache:file:function:line:column:**(id< KAQRCodeApiDelegate > _Nullable(^)(void) qrcodeAPIDelegate, BOOL cache, NSString *_Nonnull file, NSString *_Nonnull function, NSInteger line, NSInteger column) |

### **function registerWithQrcodeAPIDelegate:cache:file:function:line:column:**

注册`KAQRCodeApiDelegate`协议实例，由 Swift 代码调用 

```cpp
virtual void registerWithQrcodeAPIDelegate:cache:file:function:line:column:(
    id< KAQRCodeApiDelegate > _Nullable(^)(void) qrcodeAPIDelegate,
    BOOL cache,
    NSString *_Nonnull file,
    NSString *_Nonnull function,
    NSInteger line,
    NSInteger column
)
```

**Parameters**: 

* **qrcodeAPIDelegate** `KAQRCodeApiDelegate`协议实现类的初始化函数
  * **cache** 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例
  * **file** 注册代码所在文件
  * **function** 注册代码所在函数
  * **line** 注册代码所在行
  * **column** 注册代码所在列 

-------------------------------

## KAQRCodeApiDelegate

扫码能力协议，用于自定义扫码结果回调函数 
`#include <interface_LKQRCodeExternal-Swift.h>`

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual BOOL | **interceptHandleWithResult:**(NSString *_Nonnull result) |
| virtual BOOL | **handleWithResult:**(NSString *_Nonnull result) |

### **function interceptHandleWithResult:**

飞书扫码逻辑之前调用 
returns: 是否承载本次扫码结果 

```cpp
virtual BOOL interceptHandleWithResult:(
    NSString *_Nonnull result
)
```

**Parameters**: 

* **result** 扫码结果

### **function handleWithResult:**

飞书扫码逻辑处理之后调用 
returns: 是否承载本次扫码结果 

```cpp
virtual BOOL handleWithResult:(
    NSString *_Nonnull result
)
```

**Parameters**: 

* **result** 扫码结果

-------------------------------
