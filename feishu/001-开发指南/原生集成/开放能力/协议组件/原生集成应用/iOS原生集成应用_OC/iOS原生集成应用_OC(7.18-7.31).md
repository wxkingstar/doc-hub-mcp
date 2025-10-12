---
title: "iOS原生集成应用_OC(7.18-7.31)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/native-integrated-application/ios-nativeappextensionexternal_oc/ios-nativeappextensionexternal_oc-718
last_remote_update: 2025-04-29
last_remote_update_timestamp: 1745895091000
---
最后更新于 2025-04-29

# iOS原生集成应用_OC(7.18-7.31) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKNativeAppExtension | 1.0.1 | 该组件提供了注册宏，可以注册实现了原生集成 SSO 登录协议的自定义页面 |
| LKNativeAppExtensionAbility | 1.0.1 | 该组件提供了原生集成 SSO 登录协议，使用户可以实现自定义的 SSO 登录页面 |
| NativeAppPublicKit | 1.0.2 | 通过开放平台的流程创建应用并开启原生集成应用，开发者可以实现自定义的三方应用原生集成界面 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objectivec
@import LKNativeAppExtension;
@import LKNativeAppExtensionAbility;
@import NativeAppPublicKit;

/******* 自定义 SSO 登录页面 *************/
// 注册 SSO 登录协议实现
@LKNativeAppExtension(PassportPageRoute, /* app id */, false)

// 自定义 SSO 登录协议实现
@interface PassportPageRoute : LKNativeAppExtension <LKNativeAppExtensionPageRoute>
...
@end

@implementation PassportPageRoute
...
@end

/******* 自定义工作台应用 *********/
/// 注册类，用于在加载动态库时调用`+load`方法完成注册
@interface OpenNativeAppIMPRegistry: NSObject

@end

@implementation OpenNativeAppRegistry

+(void)load {
    [NativeAppConnectManager.shared setupDIItemsWithProtocolType:NativeAppProtocolTypeOpenNativeAppProtocol 
                        impl:[[OpenNativeAppIMP alloc] init]];
}

@interface OpenNativeAppIMP: NSObject <OpenNativeAppProtocol>
...
@end

@impl OpenNativeAppIMP
...
@end

```

## LKNativeAppExtension

`@import LKNativeAppExtension`

原生集成应用协议注册宏，用于注册自定义的 SSO 登录页 

```cpp
#define LKNativeAppExtension(name,appId,preLaunch)
```

**Parameters**: 

* **name** 实现了 LKNativeAppExtension 和 LKNativeAppExtensionPageRoute 协议的类名.
  * **appId** SSO 登录绑定的 appId，由管理员提供. 
  * **preLaunch** 是否需要预加载. 

-------------------------------

## LKNativeAppExtension
`@import LKNativeAppExtension`

原生集成 SSO 登录相关协议

**Public Functions**

|        类型     | 定义名称           |
| -------------- | -------------- |
| void | **destroy**() |

**Properties**

|        类型     | 定义名称           |
| -------------- | -------------- |
| NSString * | **appId** |

### **function destroy**

飞书销毁原生集成应用的时候调用

```cpp
(void)destroy __attribute__((objc_requires_super));
```

### **property appId**

原生集成 SSO 登录时绑定的 app id

```cpp
(NSString *)appId;
```

## LKNativeAppExtensionPageRoute
`@import LKNativeAppExtensionAbility`

原生集成 SSO 登录相关协议

Inherits from <NativeAppExtensionProtocol>

**Functions**

|        类型     | 定义名称           |
| -------------- | -------------- |
| void | **pageRoute**((NSURL *)link from:(UIViewController *)from) |

### Additional inherited members

**Public Functions inherited from <NativeAppExtensionProtocol>**

|                | Name           |
| -------------- | -------------- |
| virtual NSString *_Nonnull | **getNativeAppId**() |

### **function pageRoute**

SSO 登录时触发，可以跳转到用户自定义的页面

```cpp
(void)pageRoute: (NSURL *)link from:(UIViewController *)from
```

**Parameters**: 

* **link** 跳转时原生集成应用的 applink 地址，可以获取 SSO 登录相关状态
  * **from** 跳转时的页面，在方法实现中，用户可以从该页面跳转到自定义页面

## OpenNativeAppProtocol

`@import NativeAppPublicKit`
打开工作台应用时触发，用于注册开发者自定义的应用页面 

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
