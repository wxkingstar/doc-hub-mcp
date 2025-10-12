---
title: "iOS AppLink能力_OC(7.42)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/applink-capability/ios-applink-capability_oc/ios-applink-capability_oc_742
---
最后更新于 2025-04-17

# iOS AppLink能力_OC(7.42) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKAppLinkExternal | 1.2.3 | 通过该组件可以调用飞书的页面跳转、路由能力 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objectivec
@import LKKABridge;
@import LKAppLinkExternal;
#import "ka_auto_generated.h"

KAAPI *api = [[KAAPI alloc] initWithChannel:[NSString stringWithUTF8String:getChannel()]];
id<KANavigator> navigator = api.navigator;

[navigator popWithVc:... completion:...];
[navigator presentWithVc:... completion:...];
[navigator openWithUrl:... from:...];
[navigator pushWithVc:... style:... completion:...];
@end
```

## KAAPI(SWIFT_EXTENSIONLKAppLinkExternal)

`#include <interface_LKAppLinkExternal-Swift.h>`

**Public Properties**

|       类型      | 定义名称        |
| -------------- | -------------- |
| id< KANavigator > _Nullable | **navigator** <br>AppLink 能力接口实例  |

### **property navigator**

AppLink 能力接口实例 
```cpp
id< KANavigator > _Nullable navigator;
```

-------------------------------

## KANavigator

AppLink 能力协议，用于调用 AppLink 能力 
`#include <interface_LKAppLinkExternal-Swift.h>`

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **openWithUrl:from:**(NSURL *_Nonnull url, UIViewController *_Nonnull from) |
| virtual void | **pushWithVc:style:completion:**(UIViewController *_Nonnull vc, enum KAPushStyle style, void(^)(void) completion) |
| virtual void | **popWithVc:completion:**(UIViewController *_Nonnull vc, void(^)(void) completion) |
| virtual void | **presentWithVc:completion:**(UIViewController *_Nonnull vc, void(^)(void) completion) |

### **function openWithUrl:from:**

从 from vc push 到下个 applink url 

```cpp
virtual void openWithUrl:from:(
    NSURL *_Nonnull url,
    UIViewController *_Nonnull from
)
```

**Parameters**: 

* **url** applink url
  * **from** from vc 

### **function pushWithVc:style:completion:**

从当前 window 顶部 vc 的 navigation controller push vc，如果当前无 navigation controller 可能失败 

```cpp
virtual void pushWithVc:style:completion:(
    UIViewController *_Nonnull vc,
    enum KAPushStyle style,
    void(^)(void) completion
)
```

**Parameters**: 

* **vc** 需要 push 的 vc
  * **completion** 完成回调
  * **style** push 方式 

### **function popWithVc:completion:**

从当前 window 顶部 vc 的 navigation controllers 中移除 vc，如果当前无 navigation controller 可能失败 

```cpp
virtual void popWithVc:completion:(
    UIViewController *_Nonnull vc,
    void(^)(void) completion
)
```

**Parameters**: 

* **vc** 需要 push 的 vc
  * **completion** 完成回调 

### **function presentWithVc:completion:**

从当前 window 顶部 vc present 入参 vc 

```cpp
virtual void presentWithVc:completion:(
    UIViewController *_Nonnull vc,
    void(^)(void) completion
)
```

**Parameters**: 

* **vc** 需要 push 的 vc
  * **completion** 完成回调 

-------------------------------
