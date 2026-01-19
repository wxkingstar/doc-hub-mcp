---
title: "iOS埋点能力_OC(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/event-tracking-capabilities/ios-statisticsexternal_oc/ios-statisticsexternal_oc_754
last_remote_update: 2025-11-21
last_remote_update_timestamp: 1763719624000
---
最后更新于 2025-11-21

# iOS埋点能力_OC(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKStatisticsExternal | 能力组件 | 1.2.0 | 7.54.0 |

## 功能简介
提供向埋点平台上报数据的能力

## 更新日志
- 将 KAAPI 扩展的归属模块从 LKWebContainerExternal 改为 LKStatisticsExternal
- initConfigWithAppId:registerHost:appLogHost:commonParams: 方法的 commonParams 参数类型由 NSDictionary<NSString *, id> 改为 NSDictionary<NSString *, NSObject *>
- 为 initConfigWithAppId:registerHost:appLogHost:commonParams: 方法添加 SWIFT_METHOD_FAMILY(none) 标记

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objective-c
#import "ka_auto_generated.h"
@import LKKABridge;
@import LKStatisticsExternal;

KAAPI *api = [[KAAPI alloc] initWithChannel:[NSString stringWithUTF8String:getChannel()]];
id<KAStatisticsProtocol> statistics = api.statistics;
[statistics initConfigWithAppId:@"your_app_id" registerHost:@"https://register.example.com" appLogHost:@"https://log.example.com" commonParams:@{@"env": @"prod"}];
[statistics sendEventWithName:@"page_view"];
[statistics sendEventWithName:@"button_click" params:@{@"button_id": @"submit"}];
```

## PROTOCOL
### KAStatisticsProtocol
埋点能力接口协议，用于向埋点平台上报数据

```objective-c
@protocol KAStatisticsProtocol
- (void)initConfigWithAppId:(NSString * _Nonnull)appId registerHost:(NSString * _Nonnull)registerHost appLogHost:(NSString * _Nonnull)appLogHost commonParams:(NSDictionary<NSString *, NSObject *> * _Nonnull)commonParams; // 配置，用于初始化统计组件
- (void)sendEventWithName:(NSString * _Nonnull)name; // 埋点
- (void)sendEventWithName:(NSString * _Nonnull)name params:(NSDictionary<NSString *, NSString *> * _Nonnull)params; // 埋点
@end
```

#### 方法列表
#### `- (void)initConfigWithAppId:(NSString * _Nonnull)appId registerHost:(NSString * _Nonnull)registerHost appLogHost:(NSString * _Nonnull)appLogHost commonParams:(NSDictionary<NSString *, NSObject *> * _Nonnull)commonParams`
配置，用于初始化统计组件

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| appId | NSString * _Nonnull | 应用 ID |
| registerHost | NSString * _Nonnull | 注册服务器地址 |
| appLogHost | NSString * _Nonnull | 日志服务器地址 |
| commonParams | NSDictionary<NSString *, NSObject *> * _Nonnull | 公共参数 |

#### `- (void)sendEventWithName:(NSString * _Nonnull)name`
埋点

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| name | NSString * _Nonnull | 事件名称 |

#### `- (void)sendEventWithName:(NSString * _Nonnull)name params:(NSDictionary<NSString *, NSString *> * _Nonnull)params`
埋点

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| name | NSString * _Nonnull | 事件名称 |
| params | NSDictionary<NSString *, NSString *> * _Nonnull | 事件参数 |

## EXTENSION
### KAAPI

```objective-c
@interface KAAPI (SWIFT_EXTENSION(LKStatisticsExternal))
@property (nonatomic, readonly, strong) id <KAStatisticsProtocol> _Nullable statistics; // 埋点能力接口实例
@end
```

#### 属性列表
| 属性名 | 类型 | 描述 |
| --- | --- | --- |
| statistics | id <KAStatisticsProtocol> _Nullable | 埋点能力接口实例 |
