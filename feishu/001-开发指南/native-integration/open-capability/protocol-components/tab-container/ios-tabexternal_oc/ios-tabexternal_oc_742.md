<!--
title: iOS Tab容器_OC(7.42)
id: 7495606997214117916
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/tab-container/ios-tabexternal_oc/ios-tabexternal_oc_742
updatedAt: 1745215540000
source: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/tab-container/ios-tabexternal_oc/ios-tabexternal_oc_742
-->
# iOS Tab容器_OC(7.42) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKTabExternal | 1.1.3 | 该组件使开发者可以根据自身业务需求，在飞书应用中增加自定义的 Tab，提供更丰富和个性化的功能和内容展示。这有助于提升用户体验和工作效率，使应用更加易于访问 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)



```objectivec
@import LKKABridge; // 引入 KAAPI_REGISTER 宏
@import LKTabExternal;
#import "ka_auto_generated.h"

/// 注册类，用于在加载动态库时调用`+load`方法完成注册
@interface LKTabExternalRegistry: NSObject

@end

@implementation LKTabExternalRegistry

+(void)load {
    NSString * channel = [NSString stringWithUTF8String:getChannel()];
    KAAPI *api = [[KAAPI alloc] initWithChannel:channel];    
    [KAAPI_REGISTER registerWithTab:^id<KATabProtocol> {
        return [[LKTabExternalIMP alloc] init];
    } cache:YES];
}

@end

/// `KATabProtocol`协议实现类
@interface LKTabExternalIMP : NSObject<KATabProtocol>
...
@end

@implementation LKTabExternalIMP
...
@end
```

## _KAAPIWrapper(SWIFT_EXTENSIONLKTabExternal)




`#include <interface_LKTabExternal-Swift.h>`



|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **registerWithTab:cache:**(id< KATabProtocol > _Nullable(^)(void) tab, BOOL cache) |



### **function registerWithTab:cache:**


注册`KATabProtocol`协议实例，OC 代码中由 KAAPI_REGISTER宏调用 

```cpp
virtual void registerWithTab:cache:(
    id< KATabProtocol > _Nullable(^)(void) tab,
    BOOL cache
)
```


**Parameters**: 

  * **tab** `KATabProtocol`协议实现类的初始化函数
  * **cache** 是否缓存实例。为`false`时，每次调用协议方法都会重新初始化实例 


-------------------------------

## KAAPI(SWIFT_EXTENSIONLKTabExternal)




`#include <interface_LKTabExternal-Swift.h>`



|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **registerWithTab:cache:file:function:line:column:**(id< KATabProtocol > _Nullable(^)(void) tab, BOOL cache, NSString *_Nonnull file, NSString *_Nonnull function, NSInteger line, NSInteger column) |



### **function registerWithTab:cache:file:function:line:column:**


注册`KATabProtocol`协议实例，由 Swift 代码调用 

```cpp
virtual void registerWithTab:cache:file:function:line:column:(
    id< KATabProtocol > _Nullable(^)(void) tab,
    BOOL cache,
    NSString *_Nonnull file,
    NSString *_Nonnull function,
    NSInteger line,
    NSInteger column
)
```


**Parameters**: 

  * **tab** `KATabProtocol`协议实现类的初始化函数
  * **cache** 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例
  * **file** 注册代码所在文件
  * **function** 注册代码所在函数
  * **line** 注册代码所在行
  * **column** 注册代码所在列 


-------------------------------

## KATabProtocol



Tab 容器协议，用于实现自定义的 Tab. 
`#include <interface_LKTabExternal-Swift.h>`



|        类型     | 定义名称           |
| -------------- | -------------- |
| UIButton *_Nullable(^) | **_Nullable**(UIViewController * _Nonnull)<br>navi bar 上方右侧第二个按钮，无需设置 size（会自动调整大小），仅当 showNaviBar 为 true 时生效，入参为 tabViewController  |
| void(^) | **_Nullable**(void )<br>tab 双击事件  |

**Public Properties**

|       类型      | 定义名称        |
| -------------- | -------------- |
| NSString *_Nonnull | **appId** <br>appId，和开平申请的 appId 一致  |
| BOOL | **showNaviBar** <br>是否展示 navi bar  |
| UIViewController *_Nonnull(^ | **_Nonnull** <br>tab 对应的 ViewController  |
| UIButton *_Nullable(^ | **_Nullable** <br>navi bar 上方右侧第一个按钮，无需设置 size（会自动调整大小），仅当 showNaviBar 为 true 时生效，入参为 tabViewController  |
| NSString *_Nullable | **naviBarTitle** <br>navi bar 标题，仅当 showNaviBar 为 true 时生效  |
| void(^ | **_Nullable** <br>tab 单击事件  |



### **function _Nullable**

navi bar 上方右侧第二个按钮，无需设置 size（会自动调整大小），仅当 showNaviBar 为 true 时生效，入参为 tabViewController 
```cpp
UIButton *_Nullable(^) _Nullable(
    UIViewController * _Nonnull
)
```


### **function _Nullable**

tab 双击事件 
```cpp
void(^) _Nullable(
    void 
)
```




### **property appId**

appId，和开平申请的 appId 一致 
```cpp
NSString *_Nonnull appId;
```


### **property showNaviBar**

是否展示 navi bar 
```cpp
BOOL showNaviBar;
```


### **property _Nonnull**

tab 对应的 ViewController 
```cpp
UIViewController *_Nonnull(^ _Nonnull;
```


### **property _Nullable**

navi bar 上方右侧第一个按钮，无需设置 size（会自动调整大小），仅当 showNaviBar 为 true 时生效，入参为 tabViewController 

navi bar 上方右侧第二个按钮，无需设置 size（会自动调整大小），仅当 showNaviBar 为 true 时生效，入参为 tabViewController 

```cpp
UIButton *_Nullable(^ _Nullable;
```


### **property naviBarTitle**

navi bar 标题，仅当 showNaviBar 为 true 时生效 
```cpp
NSString *_Nullable naviBarTitle;
```


### **property _Nullable**

tab 单击事件 

tab 双击事件 

```cpp
void(^ _Nullable;
```


-------------------------------
