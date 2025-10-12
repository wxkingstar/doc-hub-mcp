---
title: "iOS客户端OpenAPI能力_OC(7.42)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/client-openapi-capabilities/ios-nativeappopenapiexternal_oc/ios-nativeappopenapiexternal_oc_742
last_remote_update: 2025-04-21
last_remote_update_timestamp: 1745215563000
---
最后更新于 2025-04-21

# iOS客户端OpenAPI能力_OC(7.42)

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKNativeAppOpenApiExternal | 1.1.1 | 通过该组件，开发者的原生应用可以调用飞书开放平台接口，实现更丰富和个性化的功能 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objectivec
@import LKNativeAppOpenApiExternal;
@import LKKABridge;
#import "ka_auto_generated.h"

KAAPI *api = [[KAAPI alloc] initWithChannel:[NSString stringWithUTF8String:getChannel()]];
id<KANativeAppOpenApiDelegate> open_api = api.nativeAppOpenApi;

[open_api invokeOpenApiWithAppID:... apiName:... params:... callback:...];
...
@end
```

## KAAPI(SWIFT_EXTENSIONLKNativeAppOpenApiExternal)

`#include <interface_LKNativeAppOpenApiExternal-Swift.h>`

**Public Properties**

|       类型      | 定义名称        |
| -------------- | -------------- |
| id< KANativeAppOpenApiDelegate > _Nullable | **nativeAppOpenApi** <br>客户端 OpenAPI 能力接口实例  |

### **property nativeAppOpenApi**

客户端 OpenAPI 能力接口实例 
```cpp
id< KANativeAppOpenApiDelegate > _Nullable nativeAppOpenApi;
```

-------------------------------

## NativeAppOpenApiModel

NativeApp调OpenAPI的结果 
`#include <interface_LKNativeAppOpenApiExternal-Swift.h>`

Inherits from NSObject

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual nonnull instancetype | **initWithResultType:data:**(enum NativeAppApiResultType resultType, NSDictionary *_Nullable OBJC_DESIGNATED_INITIALIZER) |
| virtual nonnull instancetype | **SWIFT_UNAVAILABLE**() |
| virtual "-init is unavailable" | **SWIFT_UNAVAILABLE_MSG**() |

**Public Properties**

|       类型      | 定义名称        |
| -------------- | -------------- |
| enum NativeAppApiResultType | **resultType** <br>调用结果类型  |
| NSDictionary *_Nullable | **data** <br>调用结果内容  |

### **function initWithResultType:data:**

调用结果构造函数 

```cpp
virtual nonnull instancetype initWithResultType:data:(
    enum NativeAppApiResultType resultType,
    NSDictionary *_Nullable OBJC_DESIGNATED_INITIALIZER
)
```

**Parameters**: 

* **resultType** 调用结果类型
  * **data** 调用结果内容 

### **function SWIFT_UNAVAILABLE**

```cpp
virtual nonnull instancetype SWIFT_UNAVAILABLE()
```

### **function SWIFT_UNAVAILABLE_MSG**

```cpp
static virtual "-init is unavailable" SWIFT_UNAVAILABLE_MSG()
```

### **property resultType**

调用结果类型 
```cpp
enum NativeAppApiResultType resultType;
```

### **property data**

调用结果内容 
```cpp
NSDictionary *_Nullable data;
```

-------------------------------

## KANativeAppOpenApiDelegate

More...

`#include <interface_LKNativeAppOpenApiExternal-Swift.h>`

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **invokeOpenApiWithAppID:apiName:params:callback:**(NSString *_Nonnull appID, NSString *_Nonnull apiName, NSDictionary< NSString *, id > *_Nonnull params, void(^)(NativeAppOpenApiModel *_Nonnull) callback) |

### Detailed Description

```cpp
protocol KANativeAppOpenApiDelegate-p;
```

客户端 OpenAPI 能力组件接口协议，用于调用飞书开放平台接口 

* 目前已支持客户端调用的 API List  

| API | 文档 |
| ---- | ----------- |
| login | [login-开发文档](https://open.larkoffice.com/document/client-docs/gadget/-web-app-api/open-ability/login/login) |
| getUserInfo | [getUserInfo-开发文档](https://open.larkoffice.com/document/client-docs/gadget/-web-app-api/open-ability/userinfo/getuserinfo) |
| chooseImage |[chooseImage-开发文档](https://open.larkoffice.com/document/client-docs/gadget/-web-app-api/media/image/chooseimage) |
| previewImage | [previewImage-开发文档](https://open.larkoffice.com/document/client-docs/gadget/-web-app-api/media/image/previewimage)|
| openDocument | [openDocument-开发文档](https://open.larkoffice.com/document/client-docs/gadget/-web-app-api/file/opendocument) |
| filePicker | [filePicker-开发文档](https://open.larkoffice.com/document/client-docs/gadget/-web-app-api/file/filepicker) |
| enterProfile | [enterProfile-开发文档](https://open.larkoffice.com/document/client-docs/block/api/user/enterprofile) |
| showToast | [showToast-开发文档](https://open.larkoffice.com/document/client-docs/gadget/-web-app-api/interface/interaction-feedback/showtoast) |

### **function invokeOpenApiWithAppID:apiName:params:callback:**

调用OpenAPI 

```cpp
virtual void invokeOpenApiWithAppID:apiName:params:callback:(
    NSString *_Nonnull appID,
    NSString *_Nonnull apiName,
    NSDictionary< NSString *, id > *_Nonnull params,
    void(^)(NativeAppOpenApiModel *_Nonnull) callback
)
```

**Parameters**: 

* **appID** NativeApp的appID
  * **apiName** 要调用的api的名字
  * **params** 参数
  * **vc** 调用API的vc
  * **callback** 执行API后相关的逻辑 

-------------------------------
