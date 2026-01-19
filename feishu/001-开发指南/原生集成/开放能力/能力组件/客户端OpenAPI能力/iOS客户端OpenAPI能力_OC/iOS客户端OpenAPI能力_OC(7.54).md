---
title: "iOS客户端OpenAPI能力_OC(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/client-openapi-capabilities/ios-nativeappopenapiexternal_oc/ios-nativeappopenapiexternal_oc_754
last_remote_update: 2025-11-21
last_remote_update_timestamp: 1763719624000
---
最后更新于 2025-11-21

# iOS客户端OpenAPI能力_OC(7.54)

| 组件名称 | 组件类型 | 组件版本 |  生效基线 |
| --- | --- | --- | --- |
| LKNativeAppOpenApiExternal | 能力组件 | 1.2.0 | 7.54.0 |

## 功能简介
客户端 OpenAPI 能力组件，用于调用飞书开放平台接口

## 更新日志
- 新增支持的 API 列表表格，包含 login、getUserInfo、chooseImage、previewImage、openDocument、filePicker、enterProfile、showToast 等接口
- 更新 NativeAppOpenApiModel 的 SWIFT_CLASS 标识符
- 更新 KANativeAppOpenApiDelegate 的 SWIFT_PROTOCOL 标识符
- 更新属性修饰符，增加 strong 修饰符

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objective-c
#import "ka_auto_generated.h"
@import LKKABridge;
@import LKNativeAppOpenApiExternal;

KAAPI *api = [[KAAPI alloc] initWithChannel:[NSString stringWithUTF8String:getChannel()]];
id<KANativeAppOpenApiDelegate> open_api = api.nativeAppOpenApi;
[open_api invokeOpenApiWithAppID:@"your_app_id" apiName:@"login" params:@{} callback:^(NativeAppOpenApiModel * _Nonnull result) {
    // 处理回调结果
}];
```

## PROTOCOL
### KANativeAppOpenApiDelegate
客户端 OpenAPI 能力组件接口协议，用于调用飞书开放平台接口

```objective-c
@protocol KANativeAppOpenApiDelegate
- (void)invokeOpenApiWithAppID:(NSString * _Nonnull)appID apiName:(NSString * _Nonnull)apiName params:(NSDictionary<NSString *, id> * _Nonnull)params callback:(void (^ _Nonnull)(NativeAppOpenApiModel * _Nonnull))callback; // 调用OpenAPI
@end
```

#### 方法列表
#### `- (void)invokeOpenApiWithAppID:(NSString * _Nonnull)apiName:(NSString * _Nonnull)params:(NSDictionary<NSString *, id> * _Nonnull)callback:(void (^ _Nonnull)(NativeAppOpenApiModel * _Nonnull))`

调用OpenAPI

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| appID | NSString * _Nonnull | NativeApp的appID |
| apiName | NSString * _Nonnull | 要调用的api的名字 |
| params | NSDictionary<NSString *, id> * _Nonnull | 参数 |
| callback | void (^ _Nonnull)(NativeAppOpenApiModel * _Nonnull) | 执行API后相关的逻辑 |

**支持的接口列表**：

| API | 文档 |
| --- | --- |
| login | [login-开发文档](https://open.larkoffice.com/document/client-docs/gadget/-web-app-api/open-ability/login/login) |
| getUserInfo | [getUserInfo-开发文档](https://open.larkoffice.com/document/client-docs/gadget/-web-app-api/open-ability/userinfo/getuserinfo) |
| chooseImage |[chooseImage-开发文档](https://open.larkoffice.com/document/client-docs/gadget/-web-app-api/media/image/chooseimage) |
| previewImage | [previewImage-开发文档](https://open.larkoffice.com/document/client-docs/gadget/-web-app-api/media/image/previewimage)|
| openDocument | [openDocument-开发文档](https://open.larkoffice.com/document/client-docs/gadget/-web-app-api/file/opendocument) |
| filePicker | [filePicker-开发文档](https://open.larkoffice.com/document/client-docs/gadget/-web-app-api/file/filepicker) |
| enterProfile | [enterProfile-开发文档](https://open.larkoffice.com/document/client-docs/block/api/user/enterprofile) |
| showToast | [showToast-开发文档](https://open.larkoffice.com/document/client-docs/gadget/-web-app-api/interface/interaction-feedback/showtoast) |

## CLASS
### NativeAppOpenApiModel
NativeApp调OpenAPI的结果

```objective-c
@interface NativeAppOpenApiModel : NSObject
@property (nonatomic, readonly) enum NativeAppApiResultType resultType; // 调用结果类型
@property (nonatomic, copy) NSDictionary * _Nullable data; // 调用结果内容
- (nonnull instancetype)initWithResultType:(enum NativeAppApiResultType)resultType data:(NSDictionary * _Nullable)data OBJC_DESIGNATED_INITIALIZER; // 调用结果构造函数
@end
```

#### 属性列表
| 属性名 | 类型 | 描述 |
| --- | --- | --- |
| resultType | enum NativeAppApiResultType | 调用结果类型 |
| data | NSDictionary * _Nullable | 调用结果内容 |

#### 方法列表
#### `- (nonnull instancetype)initWithResultType:(enum NativeAppApiResultType)data:(NSDictionary * _Nullable)`

调用结果构造函数

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| resultType | enum NativeAppApiResultType | 调用结果类型 |
| data | NSDictionary * _Nullable | 调用结果内容 |

## EXTENSION
### KAAPI

```objective-c
@interface KAAPI (SWIFT_EXTENSION(LKNativeAppOpenApiExternal))
@property (nonatomic, readonly, strong) id <KANativeAppOpenApiDelegate> _Nullable nativeAppOpenApi; // 客户端 OpenAPI 能力接口实例
@end
```

#### 属性列表
| 属性名 | 类型 | 描述 |
| --- | --- | --- |
| nativeAppOpenApi | id<KANativeAppOpenApiDelegate> _Nullable | 客户端 OpenAPI 能力接口实例 |

## ENUM
### NativeAppApiResultType
NativeApp调OpenAPI的结果枚举

```objective-c
typedef SWIFT_ENUM(NSInteger, NativeAppApiResultType, open)
```

#### 枚举成员
| 成员名 | 原始值 | 描述 |
| --- | --- | --- |
| NativeAppApiResultTypeSuccess | 0 | 调用成功 |
| NativeAppApiResultTypeFail | 1 | 调用失败 |
| NativeAppApiResultTypeContinue | 2 | 继续调用 |
