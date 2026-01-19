---
title: "iOS安全能力_OC(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/securityabilityexternal/ios-securityabilityexternal_oc/ios-securityabilityexternal_oc_754
last_remote_update: 2025-11-21
last_remote_update_timestamp: 1763719624000
---
最后更新于 2025-11-21

# iOS安全能力_OC(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKSecurityAbilityExternal | 能力组件 | 1.1.0 | 7.54.0 |

## 功能简介
安全能力接口协议，用于安全地访问剪贴板内容

## 更新日志
- 将 LKPasteboardApi 协议从 LKWebContainerExternal 迁移至 LKSecurityAbilityExternal
- KAAPI 扩展中 pasteboard 属性由 readonly 改为 readonly, strong

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objective-c
#import "ka_auto_generated.h"
@import LKKABridge;
@import LKSecurityAbilityExternal;

KAAPI *api = [[KAAPI alloc] initWithChannel:[NSString stringWithUTF8String:getChannel()]];
id<LKPasteboardApi> pasteboard = api.pasteboard;
[pasteboard getTextWithAppId:@"your_app_id"];
[pasteboard setTextWithAppId:@"your_app_id" text:@"Hello World"];
[pasteboard getImageWithAppId:@"your_app_id"];
[pasteboard setImageWithAppId:@"your_app_id" image:[UIImage imageNamed:@"example"]];
```

## PROTOCOL
### LKPasteboardApi
安全能力接口协议，用于安全地访问剪贴板内容

```objective-c
@protocol LKPasteboardApi
- (NSString * _Nullable)getTextWithAppId:(NSString * _Nullable)appId;	// 获取剪贴板文字
- (void)setTextWithAppId:(NSString * _Nullable)appId text:(NSString * _Nonnull)text;	// 设置剪贴板文字
- (UIImage * _Nullable)getImageWithAppId:(NSString * _Nullable)appId;	// 获取剪贴板图片
- (void)setImageWithAppId:(NSString * _Nullable)appId image:(UIImage * _Nonnull)image;	// 设置剪贴板图片
@end
```

#### 方法列表
#### `- (NSString * _Nullable)getTextWithAppId:(NSString * _Nullable)appId`
获取剪贴板文字

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| appId | NSString * _Nullable | app id |

**返回值**：剪贴板文字内容

#### `- (void)setTextWithAppId:(NSString * _Nullable)appId text:(NSString * _Nonnull)text`
设置剪贴板文字

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| appId | NSString * _Nullable | app id |
| text | NSString * _Nonnull | 剪贴板文字内容 |

#### `- (UIImage * _Nullable)getImageWithAppId:(NSString * _Nullable)appId`
获取剪贴板图片

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| appId | NSString * _Nullable | app id |

**返回值**：剪贴板图片内容

#### `- (void)setImageWithAppId:(NSString * _Nullable)appId image:(UIImage * _Nonnull)image`
设置剪贴板图片

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| appId | NSString * _Nullable | app id |
| image | UIImage * _Nonnull | 剪贴板图片内容 |

## EXTENSION
### KAAPI (SWIFT_EXTENSION(LKSecurityAbilityExternal))

```objective-c
@interface KAAPI (SWIFT_EXTENSION(LKSecurityAbilityExternal))
@property (nonatomic, readonly, strong) id <LKPasteboardApi> _Nullable pasteboard;	// 安全能力接口实例
@end
```

#### 属性列表
| 属性名 | 类型 | 描述 |
| --- | --- | --- |
| pasteboard | id <LKPasteboardApi> _Nullable | 安全能力接口实例 |
