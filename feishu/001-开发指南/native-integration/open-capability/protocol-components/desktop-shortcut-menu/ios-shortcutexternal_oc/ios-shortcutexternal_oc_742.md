<!--
title: iOS桌面快捷菜单_OC(7.42)
id: 7495606997214183452
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/desktop-shortcut-menu/ios-shortcutexternal_oc/ios-shortcutexternal_oc_742
updatedAt: 1745215551000
source: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/desktop-shortcut-menu/ios-shortcutexternal_oc/ios-shortcutexternal_oc_742
-->
# iOS桌面快捷菜单_OC(7.42) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKShortcutExternal | 1.1.3 | 该组件提供飞书开放桌面快捷方式菜单入口，通过该API开发者可以集成自有菜单到飞书桌面快捷方式 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)



```objectivec
@import LKKABridge; // 引入 KAAPI_REGISTER 宏
@import LKShortcutExternal;
#import "ka_auto_generated.h"

/// 注册类，用于在加载动态库时调用`+load`方法完成注册
@interface LKShortcutExternalRegistry: NSObject

@end

@implementation LKShortcutExternalRegistry

+(void)load {
    NSString * channel = [NSString stringWithUTF8String:getChannel()];
    KAAPI *api = [[KAAPI alloc] initWithChannel:channel];    
    [KAAPI_REGISTER registerWithShortcut:^id<KAShortcutProtocol> {
        return [[LKShortcutExternalIMP alloc] init];
    } cache:YES];
}

@end

/// `KAShortcutProtocol`协议实现类
@interface LKShortcutExternalIMP : NSObject<KAShortcutProtocol>
...
@end

@implementation LKShortcutExternalIMP
...
@end
```

## _KAAPIWrapper(SWIFT_EXTENSIONLKShortcutExternal)




`#include <interface_LKShortcutExternal-Swift.h>`



|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **registerWithShortcut:cache:**(id< KAShortcutProtocol > _Nullable(^)(void) shortcut, BOOL cache) |



### **function registerWithShortcut:cache:**


注册`KAShortcutProtocol`协议实例，OC 代码中由 KAAPI_REGISTER宏调用 

```cpp
virtual void registerWithShortcut:cache:(
    id< KAShortcutProtocol > _Nullable(^)(void) shortcut,
    BOOL cache
)
```


**Parameters**: 

  * **shortcut** `KAShortcutProtocol`协议实现类的初始化函数
  * **cache** 是否缓存实例。为`false`时，每次调用协议方法都会重新初始化实例 


-------------------------------

## KAAPI(SWIFT_EXTENSIONLKShortcutExternal)




`#include <interface_LKShortcutExternal-Swift.h>`



|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **registerWithShortcut:cache:file:function:line:column:**(id< KAShortcutProtocol > _Nullable(^)(void) shortcut, BOOL cache, NSString *_Nonnull file, NSString *_Nonnull function, NSInteger line, NSInteger column) |



### **function registerWithShortcut:cache:file:function:line:column:**


注册`KAShortcutProtocol`协议实例，由 Swift 代码调用 

```cpp
virtual void registerWithShortcut:cache:file:function:line:column:(
    id< KAShortcutProtocol > _Nullable(^)(void) shortcut,
    BOOL cache,
    NSString *_Nonnull file,
    NSString *_Nonnull function,
    NSInteger line,
    NSInteger column
)
```


**Parameters**: 

  * **shortcut** `KAShortcutProtocol`协议实现类的初始化函数
  * **cache** 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例
  * **file** 注册代码所在文件
  * **function** 注册代码所在函数
  * **line** 注册代码所在行
  * **column** 注册代码所在列 


-------------------------------

## LKShortcutItem



快捷菜单项，开发者不直接使用 
`#include <interface_LKShortcutExternal-Swift.h>`

Inherits from NSObject



|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual NSString *_Nonnull | **kaPrefixIdentifier**() |
| virtual "-init is unavailable" | **SWIFT_UNAVAILABLE_MSG**() |
| virtual nonnull instancetype | **initWithItem:**(id< KAShortcutProtocol > _Nonnull OBJC_DESIGNATED_INITIALIZER) |
| virtual nonnull instancetype | **SWIFT_UNAVAILABLE**() |

**Public Properties**

|       类型      | 定义名称        |
| -------------- | -------------- |
| NSString *_Nonnull | **type**  |
| UIApplicationShortcutIcon *_Nonnull | **icon**  |
| NSString *_Nonnull | **title**  |
| NSString *_Nullable | **subtitle**  |
| NSString *_Nonnull | **appLinkURL**  |



### **function kaPrefixIdentifier**

```cpp
static virtual NSString *_Nonnull kaPrefixIdentifier()
```


### **function SWIFT_UNAVAILABLE_MSG**

```cpp
static virtual "-init is unavailable" SWIFT_UNAVAILABLE_MSG()
```


### **function initWithItem:**

```cpp
virtual nonnull instancetype initWithItem:(
    id< KAShortcutProtocol > _Nonnull OBJC_DESIGNATED_INITIALIZER
)
```


### **function SWIFT_UNAVAILABLE**

```cpp
virtual nonnull instancetype SWIFT_UNAVAILABLE()
```




### **property type**

```cpp
NSString *_Nonnull type;
```


### **property icon**

```cpp
UIApplicationShortcutIcon *_Nonnull icon;
```


### **property title**

```cpp
NSString *_Nonnull title;
```


### **property subtitle**

```cpp
NSString *_Nullable subtitle;
```


### **property appLinkURL**

```cpp
NSString *_Nonnull appLinkURL;
```


-------------------------------

## KAShortcutProtocol



桌面快捷菜单协议，用于实现自定义的桌面快捷菜单 
`#include <interface_LKShortcutExternal-Swift.h>`

**Public Properties**

|       类型      | 定义名称        |
| -------------- | -------------- |
| NSString *_Nonnull | **type** <br>快捷方式唯一标识  |
| UIApplicationShortcutIcon *_Nonnull | **icon**  |
| NSString *_Nonnull | **localizedTitle** <br>标题文案  |
| NSString *_Nullable | **localizedSubtitle** <br>副标题, 可选  |
| NSString *_Nonnull | **appLinkURL** <br>长按后跳转的页面对应的AppLink URL  |



### **property type**

快捷方式唯一标识 
```cpp
NSString *_Nonnull type;
```


### **property icon**


快捷方式 icon 图标 [https://developer.apple.com/documentation/uikit/uiapplicationshortcuticon](https://developer.apple.com/documentation/uikit/uiapplicationshortcuticon)

```cpp
UIApplicationShortcutIcon *_Nonnull icon;
```


### **property localizedTitle**

标题文案 
```cpp
NSString *_Nonnull localizedTitle;
```


### **property localizedSubtitle**

副标题, 可选 
```cpp
NSString *_Nullable localizedSubtitle;
```


### **property appLinkURL**

长按后跳转的页面对应的AppLink URL 
```cpp
NSString *_Nonnull appLinkURL;
```


-------------------------------
