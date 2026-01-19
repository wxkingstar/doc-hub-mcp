---
title: "iOS Logger能力_OC(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/logger-capability/loggerexternal_oc/loggerexternal_oc_754
last_remote_update: 2025-11-21
last_remote_update_timestamp: 1763719624000
---
最后更新于 2025-11-21

# iOS Logger能力_OC(7.54)

| 组件名称 | 组件类型 | 组件版本 |  生效基线 |
| --- | --- | --- | --- |
| LKLoggerExternal | 能力组件 | 1.2.0 | 7.54.0 |

## 功能简介
提供统一的日志打印能力，支持 verbose、debug、info、warning、error 五个级别

## 更新日志
- 将 KALoggerProtocol 的 SWIFT_PROTOCOL 标识从 `_TtP22LKWebContainerExternal16KALoggerProtocol_` 更新为 `_TtP16LKLoggerExternal16KALoggerProtocol_`
- KAAPI 扩展的 SWIFT_EXTENSION 从 `LKWebContainerExternal` 更新为 `LKLoggerExternal`
- 方法参数标签由 `_` 改为隐式匿名参数

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objective-c
#import "ka_auto_generated.h"
@import LKKABridge;
@import LKLoggerExternal;

KAAPI *api = [[KAAPI alloc] initWithChannel:[NSString stringWithUTF8String:getChannel()]];
id<KALoggerProtocol> logger = api.logger;
[logger infoWithTag:@"Demo" :@"这是一条普通信息"];
[logger debugWithTag:@"Demo" :@"这是一条调试信息"];
[logger errorWithTag:@"Demo" :@"这是一条错误信息"];
// 其余级别方法省略
```

## PROTOCOL
### KALoggerProtocol
Logger 协议，用于打印日志

```objective-c
@protocol KALoggerProtocol
- (void)verboseWithTag:(NSString * _Nonnull)tag :(NSString * _Nonnull)msg;	// 输出更多 debug 的信息
- (void)debugWithTag:(NSString * _Nonnull)tag :(NSString * _Nonnull)msg;	// 只在 debug 下输出信息
- (void)infoWithTag:(NSString * _Nonnull)tag :(NSString * _Nonnull)msg;	// 输出普通信息
- (void)warningWithTag:(NSString * _Nonnull)tag :(NSString * _Nonnull)msg;	// 输出警告信息
- (void)errorWithTag:(NSString * _Nonnull)tag :(NSString * _Nonnull)msg;	// 输出错误信息
@end
```

#### 方法列表
#### `- (void)verboseWithTag:(NSString * _Nonnull)tag :(NSString * _Nonnull)msg`
输出更多 debug 的信息

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| tag | NSString * _Nonnull | tag name |
| msg | NSString * _Nonnull | verbose information |

#### `- (void)debugWithTag:(NSString * _Nonnull)tag :(NSString * _Nonnull)msg`
只在 debug 下输出信息

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| tag | NSString * _Nonnull | tag name |
| msg | NSString * _Nonnull | debug information |

#### `- (void)infoWithTag:(NSString * _Nonnull)tag :(NSString * _Nonnull)msg`
输出普通信息

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| tag | NSString * _Nonnull | tag name |
| msg | NSString * _Nonnull | info information |

#### `- (void)warningWithTag:(NSString * _Nonnull)tag :(NSString * _Nonnull)msg`
输出警告信息

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| tag | NSString * _Nonnull | tag name |
| msg | NSString * _Nonnull | warning information |

#### `- (void)errorWithTag:(NSString * _Nonnull)tag :(NSString * _Nonnull)msg`
输出错误信息

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| tag | NSString * _Nonnull | tag name |
| msg | NSString * _Nonnull | error information |

## EXTENSION
### KAAPI

```objective-c
@interface KAAPI (SWIFT_EXTENSION(LKLoggerExternal))
@property (nonatomic, readonly, strong) id <KALoggerProtocol> _Nullable logger;	// Logger 能力接口实例
@end
```

#### 属性列表
| 属性名 | 类型 | 描述 | 
| --- | --- | --- |
| logger | id <KALoggerProtocol> _Nullable | Logger 能力接口实例 |
