<!--
title: iOS WebContainerExternal_OC(7.42)
id: 7495606997214035996
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/webcontainer/ios-webcontainerexternal_oc/ios-webcontainerexternal_oc_742
updatedAt: 1745215516000
source: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/webcontainer/ios-webcontainerexternal_oc/ios-webcontainerexternal_oc_742
-->
# iOS WebContainerExternal_OC(7.42) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKWebContainerExternal | 1.2.2 | 该组件为飞书网页容器提供了回调接口，用于在打开和关闭 web 页面时进行处理。同时，该组件还支持定制错误页的内容和处理按钮点击事件 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)



```objectivec
@import LKKABridge; // 引入 KAAPI_REGISTER 宏
@import LKWebContainerExternal;
#import "ka_auto_generated.h"

/// 注册类，用于在加载动态库时调用`+load`方法完成注册
@interface LKWebContainerExternalRegistry: NSObject

@end

@implementation LKWebContainerExternalRegistry

+(void)load {
    NSString * channel = [NSString stringWithUTF8String:getChannel()];
    KAAPI *api = [[KAAPI alloc] initWithChannel:channel];    
    [KAAPI_REGISTER registerWithWebContainer:^id<KAWebContainerProtocol> {
        return [[LKWebContainerExternalIMP alloc] init];
    } cache:YES];
}

@end

/// `KAWebContainerProtocol`协议实现类
@interface LKWebContainerExternalIMP : NSObject<KAWebContainerProtocol>
...
@end

@implementation LKWebContainerExternalIMP
...
@end
```

## _KAAPIWrapper(SWIFT_EXTENSIONLKWebContainerExternal)




`#include <interface_LKWebContainerExternal-Swift.h>`



|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **registerWithWebContainer:cache:**(id< KAWebContainerProtocol > _Nullable(^)(void) webContainer, BOOL cache) |



### **function registerWithWebContainer:cache:**


注册`KAWebContainerProtocol`协议实例，OC 代码中由 KAAPI_REGISTER宏调用 

```cpp
virtual void registerWithWebContainer:cache:(
    id< KAWebContainerProtocol > _Nullable(^)(void) webContainer,
    BOOL cache
)
```


**Parameters**: 

  * **webContainer** `KAWebContainerProtocol`协议实现类的初始化函数
  * **cache** 是否缓存实例。为`false`时，每次调用协议方法都会重新初始化实例 


-------------------------------

## KAAPI(SWIFT_EXTENSIONLKWebContainerExternal)




`#include <interface_LKWebContainerExternal-Swift.h>`



|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **registerWithWebContainer:cache:file:function:line:column:**(id< KAWebContainerProtocol > _Nullable(^)(void) webContainer, BOOL cache, NSString *_Nonnull file, NSString *_Nonnull function, NSInteger line, NSInteger column) |



### **function registerWithWebContainer:cache:file:function:line:column:**


注册`KAWebContainerProtocol`协议实例，由 Swift 代码调用 

```cpp
virtual void registerWithWebContainer:cache:file:function:line:column:(
    id< KAWebContainerProtocol > _Nullable(^)(void) webContainer,
    BOOL cache,
    NSString *_Nonnull file,
    NSString *_Nonnull function,
    NSInteger line,
    NSInteger column
)
```


**Parameters**: 

  * **webContainer** `KAWebContainerProtocol`协议实现类的初始化函数
  * **cache** 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例
  * **file** 注册代码所在文件
  * **function** 注册代码所在函数
  * **line** 注册代码所在行
  * **column** 注册代码所在列 


-------------------------------

## KAWebContainerButtonConfig



异常页按钮配置 
`#include <interface_LKWebContainerExternal-Swift.h>`

Inherits from NSObject



|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual nonnull instancetype | **OBJC_DESIGNATED_INITIALIZER**() |

**Public Properties**

|       类型      | 定义名称        |
| -------------- | -------------- |
| NSString *_Nullable | **text** <br>文案  |
| NSString *_Nullable | **eventName** <br>事件名  |
| NSString *_Nullable | **eventExtra** <br>补充信息  |



### **function OBJC_DESIGNATED_INITIALIZER**

```cpp
virtual nonnull instancetype OBJC_DESIGNATED_INITIALIZER()
```




### **property text**

文案 
```cpp
NSString *_Nullable text;
```


### **property eventName**

事件名 
```cpp
NSString *_Nullable eventName;
```


### **property eventExtra**

补充信息 
```cpp
NSString *_Nullable eventExtra;
```


-------------------------------

## KAWebContainerErrorPageConfig



异常页配置 
`#include <interface_LKWebContainerExternal-Swift.h>`

Inherits from NSObject



|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual nonnull instancetype | **OBJC_DESIGNATED_INITIALIZER**() |

**Public Properties**

|       类型      | 定义名称        |
| -------------- | -------------- |
| NSString *_Nullable | **title** <br>标题  |
| NSString *_Nullable | **contentTitle** <br>内容标题  |
| NSString *_Nullable | **content** <br>内容  |
| KAWebContainerButtonConfig *_Nullable | **vpnConfig** <br>VPN 按钮配置  |
| KAWebContainerButtonConfig *_Nullable | **refreshConfig** <br>刷新按钮配置  |



### **function OBJC_DESIGNATED_INITIALIZER**

```cpp
virtual nonnull instancetype OBJC_DESIGNATED_INITIALIZER()
```




### **property title**

标题 
```cpp
NSString *_Nullable title;
```


### **property contentTitle**

内容标题 
```cpp
NSString *_Nullable contentTitle;
```


### **property content**

内容 
```cpp
NSString *_Nullable content;
```


### **property vpnConfig**

VPN 按钮配置 
```cpp
KAWebContainerButtonConfig *_Nullable vpnConfig;
```


### **property refreshConfig**

刷新按钮配置 
```cpp
KAWebContainerButtonConfig *_Nullable refreshConfig;
```


-------------------------------

## TabParams



主导航模式网页应用切换的时候一些业务参数 
`#include <interface_LKWebContainerExternal-Swift.h>`

Inherits from NSObject



|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual nonnull instancetype | **initWithOriginalUrl:currentUrl:appId:**(NSString *_Nonnull originalUrl, NSString *_Nonnull currentUrl, NSString *_Nonnull OBJC_DESIGNATED_INITIALIZER) |
| virtual nonnull instancetype | **SWIFT_UNAVAILABLE**() |
| virtual "-init is unavailable" | **SWIFT_UNAVAILABLE_MSG**() |

**Public Properties**

|       类型      | 定义名称        |
| -------------- | -------------- |
| NSString *_Nonnull | **originalUrl** <br>originalUrl: 首次加载的链接  |
| NSString *_Nonnull | **currentUrl** <br>currentUrl: 当前正在展现页面的链接  |
| NSString *_Nonnull | **appId** <br>appId: 注册应用的id  |



### **function initWithOriginalUrl:currentUrl:appId:**


构造函数 

```cpp
virtual nonnull instancetype initWithOriginalUrl:currentUrl:appId:(
    NSString *_Nonnull originalUrl,
    NSString *_Nonnull currentUrl,
    NSString *_Nonnull OBJC_DESIGNATED_INITIALIZER
)
```


**Parameters**: 

  * **originalUrl** 首次加载的链接
  * **currentUrl** 当前正在展现页面的链接
  * **appId** 注册应用的id 


### **function SWIFT_UNAVAILABLE**

```cpp
virtual nonnull instancetype SWIFT_UNAVAILABLE()
```


### **function SWIFT_UNAVAILABLE_MSG**

```cpp
static virtual "-init is unavailable" SWIFT_UNAVAILABLE_MSG()
```




### **property originalUrl**

originalUrl: 首次加载的链接 
```cpp
NSString *_Nonnull originalUrl;
```


### **property currentUrl**

currentUrl: 当前正在展现页面的链接 
```cpp
NSString *_Nonnull currentUrl;
```


### **property appId**

appId: 注册应用的id 
```cpp
NSString *_Nonnull appId;
```


-------------------------------

## KAWebContainerProtocol



WebContainer 组件协议，用于实现自定义的 Web 事件回调函数 
`#include <interface_LKWebContainerExternal-Swift.h>`



|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **onOpenWithUrl:onSuccess:onFail:**(NSString *_Nonnull url, void(^)(void) onSuccess, void(^)(NSInteger) onFail) |
| virtual void | **onCloseWithUrl:**(NSString *_Nonnull url) |
| virtual void | **onTabVisibilityChangedWithSelected:tabParams:**(BOOL selected, TabParams *_Nonnull tabParams) |
| virtual KAWebContainerErrorPageConfig *_Nullable | **errorPageConfig**() |
| virtual NSString *_Nonnull | **kaIdentity**() |



### **function onOpenWithUrl:onSuccess:onFail:**


网页容器打开即将loadUrl的时候调用 _warning: 飞书 onOpen 方法同步等待用户回调，需要在方法实现中手动调用 onSuccess 或 onFail 函数完成调用_

* Parameters:
* url: 加载的 h5 url
* onSuccess: 流程处理完，通知网页容器继续加载
* onFail: 流程处理异常，通知网页容器展示错误页
* code：异常的code值，网页容器根据code值进行相应的错误展示 

```cpp
virtual void onOpenWithUrl:onSuccess:onFail:(
    NSString *_Nonnull url,
    void(^)(void) onSuccess,
    void(^)(NSInteger) onFail
)
```


### **function onCloseWithUrl:**


网页容器即将关闭的时候调用 

```cpp
virtual void onCloseWithUrl:(
    NSString *_Nonnull url
)
```


**Parameters**: 

  * **url** 即将关闭的页面 h5 url 


### **function onTabVisibilityChangedWithSelected:tabParams:**


主导航模式下手动切换Tab的时候调用 

```cpp
virtual void onTabVisibilityChangedWithSelected:tabParams:(
    BOOL selected,
    TabParams *_Nonnull tabParams
)
```


**Parameters**: 

  * **selected** true表示当前Tab被选中, false表示当前Tab未被选中
  * **tabParams** 主导航模式网页应用切换的时候一些业务参数 


### **function errorPageConfig**


当网页容器加载失败时，飞书会通过该接口获取错误页展示需要的配置信息

returns: 错误页配置 

```cpp
virtual KAWebContainerErrorPageConfig *_Nullable errorPageConfig()
```


### **function kaIdentity**


返回业务 tag

returns: kaIdentity 

```cpp
virtual NSString *_Nonnull kaIdentity()
```


-------------------------------
