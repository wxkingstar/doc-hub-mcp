---
title: "iOS Setting能力_OC(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/setting-ability/ios-settingexternal_oc/ios-settingexternal_oc_754
last_remote_update: 2025-11-21
last_remote_update_timestamp: 1763719624000
---
最后更新于 2025-11-21

# iOS Setting能力_OC(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKSettingExternal | 能力组件 | 1.2.0 | 7.54.0 |

## 功能简介
提供获取远端 Setting 配置的能力

## 更新日志
- 将 KAAPI 扩展从 LKWebContainerExternal 迁移到 LKSettingExternal
- settings 属性类型由 _Null_unspecified 改为 _Nullable

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objective-c
#import "ka_auto_generated.h"
@import LKKABridge;
@import LKSettingExternal;

KAAPI *api = [[KAAPI alloc] initWithChannel:[NSString stringWithUTF8String:getChannel()]];
id<KASettingProtocol> setting = api.settings;
[setting getConfigWithSpace:@"space" key:@"key"];
```

## PROTOCOL
### KASettingProtocol
Setting 能力组件接口协议，用于获取 Setting 配置

```objective-c
@protocol KASettingProtocol
- (NSDictionary<NSString *, id> * _Nonnull)getConfigWithSpace:(NSString * _Nonnull)space key:(NSString * _Nonnull)key; // 获取 config
@end
```

#### 方法列表
#### `- (NSDictionary<NSString *, id> * _Nonnull)getConfigWithSpace:(NSString * _Nonnull)space key:(NSString * _Nonnull)key`
获取 config

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| space | NSString * _Nonnull | isv space |
| key | NSString * _Nonnull | isv key |

**返回值**：远端配置

## EXTENSION
### KAAPI

```objective-c
@interface KAAPI (SWIFT_EXTENSION(LKSettingExternal))
@property (nonatomic, readonly, strong) id <KASettingProtocol> _Nullable settings; // Setting 能力接口实例
@end
```

#### 属性列表
| 属性名 | 类型 | 描述 |
| --- | --- | --- |
| settings | id <KASettingProtocol> _Nullable | Setting 能力接口实例 |
