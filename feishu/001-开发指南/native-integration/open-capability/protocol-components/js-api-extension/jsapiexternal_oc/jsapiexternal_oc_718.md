<!--
title: iOS JS API扩展能力_OC(7.18-7.31)
id: 7498556499688128515
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/js-api-extension/jsapiexternal_oc/jsapiexternal_oc_718
updatedAt: 1745895068000
source: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/js-api-extension/jsapiexternal_oc/jsapiexternal_oc_718
-->
# iOS JS API扩展能力_OC(7.18-7.31)

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKJsApiExternal | 1.1.3 | 该组件通过 JSAPI 提供了与 Native 进行回调的能力。开发的飞书小程序和 H5 页面可以使用 jssdk 的 invokeCustomApi 函数向 Native 发送事件。Native 实现相应协议可对事件进行处理，并将结果返回给H5页面|

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)



```objectivec
@import LKKABridge; // 引入 KAAPI
@import LKJsApiExternal;
#import "ka_auto_generated.h"

/// 注册类，用于在加载动态库时调用`+load`方法完成注册
@interface LKJsApiExternalRegistry: NSObject

@end

@implementation LKJsApiExternalRegistry

+(void)load {
    NSString * channel = [NSString stringWithUTF8String:getChannel()];
    KAAPI *api = [[KAAPI alloc] initWithChannel:channel];    
    [api registerWithNativeAppPluginDelegate:^id<KANativeAppPluginDelegate> {
            return [[LKJsApiExternalIMP alloc] init];
        } cache:YES];
}

@end

/// `KANativeAppPluginDelegate`协议实现类
@interface LKJsApiExternalIMP : NSObject<KANativeAppPluginDelegate>
...
@end

@implementation LKJsApiExternalIMP
...
@end
```

## _KAAPIWrapper(SWIFT_EXTENSIONLKJsApiExternal)




`#include <interface_LKJsApiExternal-Swift.h>`



|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **registerWithNativeAppPluginDelegate:cache:**(void nativeAppPluginDelegate, BOOL cache) |



### **function registerWithNativeAppPluginDelegate:cache:**


注册`KANativeAppPluginDelegate`协议实例。OC 代码中由 KAAPI_REGISTER宏调用 

```cpp
virtual void registerWithNativeAppPluginDelegate:cache:(
    void nativeAppPluginDelegate,
    BOOL cache
)
```


**Parameters**: 

  * **nativeAppPluginDelegate** `KANativeAppPluginDelegate`协议实现类的初始化函数
  * **cache** 是否缓存实例。为`false`时，每次调用协议方法都会重新初始化实例 


-------------------------------

## KAAPI(SWIFT_EXTENSIONLKJsApiExternal)




`#include <interface_LKJsApiExternal-Swift.h>`



|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **registerWithNativeAppPluginDelegate:cache:file:function:line:column:**(void nativeAppPluginDelegate, BOOL cache, NSString *_Nonnull file, NSString *_Nonnull function, NSInteger line, NSInteger column) |



### **function registerWithNativeAppPluginDelegate:cache:file:function:line:column:**


注册`KANativeAppPluginDelegate`协议实例，由 Swift 代码调用 

```cpp
virtual void registerWithNativeAppPluginDelegate:cache:file:function:line:column:(
    void nativeAppPluginDelegate,
    BOOL cache,
    NSString *_Nonnull file,
    NSString *_Nonnull function,
    NSInteger line,
    NSInteger column
)
```


**Parameters**: 

  * **nativeAppPluginDelegate** `KANativeAppPluginDelegate`协议实现类的初始化函数
  * **cache** 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例
  * **file** 注册代码所在文件
  * **function** 注册代码所在函数
  * **line** 注册代码所在行
  * **column** 注册代码所在列 


-------------------------------

## KANativeAppAPIEvent



Js 发送的事件 
`#include <interface_LKJsApiExternal-Swift.h>`

Inherits from NSObject



|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual nonnull instancetype | **OBJC_DESIGNATED_INITIALIZER**() |

**Public Properties**

|       类型      | 定义名称        |
| -------------- | -------------- |
| NSDictionary< NSString *, id > *_Nullable | **params** <br>事件参数  |
| NSString *_Nonnull | **name** <br>事件名  |



### **function OBJC_DESIGNATED_INITIALIZER**

```cpp
virtual nonnull instancetype OBJC_DESIGNATED_INITIALIZER()
```




### **property params**

事件参数 
```cpp
NSDictionary< NSString *, id > *_Nullable params;
```


### **property name**

事件名 
```cpp
NSString *_Nonnull name;
```


-------------------------------

## KANativeAppPluginDelegate



JsAPI 协议，用于响应Js 发送的事件 
`#include <interface_LKJsApiExternal-Swift.h>`



|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual NSString *_Nonnull | **getPluginName**() |
| virtual NSArray< NSString * > *_Nonnull | **getPluginApiNames**() |
| virtual void | **handleWithEvent:callback:**(KANativeAppAPIEvent *_Nonnull event, BOOL callback, NSDictionary< NSString *, id > *_Nullable callback) |
| virtual void | **setContextWithContext:**(id< NativeAppPluginContextProtocol > _Nonnull context) |



### **function getPluginName**


返回 Plugin 唯一的名字，用于后续的注册与调用

returns: Plugin 名字 

```cpp
virtual NSString *_Nonnull getPluginName()
```


### **function getPluginApiNames**


支持的 api name list

returns: api list 

```cpp
virtual NSArray< NSString * > *_Nonnull getPluginApiNames()
```


### **function handleWithEvent:callback:**


事件处理方法 
returns: 回调给 H5 的值 

```cpp
virtual void handleWithEvent:callback:(
    KANativeAppAPIEvent *_Nonnull event,
    BOOL callback,
    NSDictionary< NSString *, id > *_Nullable callback
)
```


**Parameters**: 

  * **event** H5/web 传回的 api name 和参数
  * **callback** 回调函数


### **function setContextWithContext:**

```cpp
virtual void setContextWithContext:(
    id< NativeAppPluginContextProtocol > _Nonnull context
)
```


-------------------------------
