---
title: "iOS存储KV能力_OC(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/storage-kv-capability/ios-storage-kv-capability_oc/ios-storage-kv-capability_oc_754
last_remote_update: 2025-11-21
last_remote_update_timestamp: 1763719624000
---
最后更新于 2025-11-21

# iOS存储KV能力_OC(7.54)

| 组件名称 | 组件类型 | 组件版本 |  生效基线 |
| --- | --- | --- | --- |
| LKKeyValueExternal | 能力组件 | 1.2.0 | 7.54.0 |

## 功能简介
提供键值对本地持久化存储能力，支持字符串、数值、布尔、二进制数据等多种数据类型

## 更新日志
- 方法命名风格统一：所有方法由 `hasKey:` / `setKey:stringValue:` 等改为 `hasWithKey:` / `setWithKey:stringValue:` 形式
- 新增 `clearAll` 方法，支持一键清空全部 KV 存储
- 所有方法增加 `SWIFT_WARN_UNUSED_RESULT` 标记，提醒调用方检查返回值

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objective-c
#import "ka_auto_generated.h"
@import LKKABridge;
@import LKKeyValueExternal;

KAAPI *api = [[KAAPI alloc] initWithChannel:[NSString stringWithUTF8String:getChannel()]];
id<KAKeyValueProtocol> store = api.kvstore;

// 写入示例
[store setWithKey:@"user_name" stringValue:@"Alice"];
[store setWithKey:@"user_age" intValue:25];
[store setWithKey:@"is_vip" boolValue:YES];
[store setWithKey:@"avatar" dataValue:imageData];

// 读取示例
NSString *name = [store getStringWithKey:@"user_name"];
NSInteger age = [store getIntWithKey:@"user_age"];
BOOL isVip = [store getBoolWithKey:@"is_vip"];
NSData *avatar = [store getDataWithKey:@"avatar"];

// 删除示例
[store clearWithKey:@"user_age"];
[store clearAll]; // 清空全部
```

## PROTOCOL
### KAKeyValueProtocol
KV 存储能力协议，用于调用 KVStorage 能力

```objective-c
@protocol KAKeyValueProtocol
- (BOOL)hasWithKey:(NSString * _Nonnull)key;	// 判断 KVStorage 中 key 是否存在
- (BOOL)setWithKey:(NSString * _Nonnull)key stringValue:(NSString * _Nonnull)stringValue;	// 在 KVStorage 中存储字符串
- (BOOL)setWithKey:(NSString * _Nonnull)key intValue:(NSInteger)intValue;	// 在 KVStorage 中存储 Int 值
- (BOOL)setWithKey:(NSString * _Nonnull)key floatValue:(float)floatValue;	// 在 KVStorage 中存储 Float 值
- (BOOL)setWithKey:(NSString * _Nonnull)key doubleValue:(double)doubleValue;	// 在 KVStorage 中存储 Double 值
- (BOOL)setWithKey:(NSString * _Nonnull)key boolValue:(BOOL)boolValue;	// 在 KVStorage 中存储布尔值
- (BOOL)setWithKey:(NSString * _Nonnull)key dataValue:(NSData * _Nonnull)dataValue;	// 在 KVStorage 中存储 Data 值
- (NSString * _Nonnull)getStringWithKey:(NSString * _Nonnull)key;	// 获取 KVStorage 中存储的字符串
- (NSInteger)getIntWithKey:(NSString * _Nonnull)key;	// 获取 KVStorage 中存储的 Int 值
- (float)getFloatWithKey:(NSString * _Nonnull)key;	// 获取 KVStorage 中存储的 Float 值
- (double)getDoubleWithKey:(NSString * _Nonnull)key;	// 获取 KVStorage 中存储的 Double 值
- (BOOL)getBoolWithKey:(NSString * _Nonnull)key;	// 获取 KVStorage 中存储的布尔值
- (NSData * _Nonnull)getDataWithKey:(NSString * _Nonnull)key;	// 获取 KVStorage 中存储的 Data 值
- (BOOL)clearWithKey:(NSString * _Nonnull)key;	// 清除 KVStorage 中存储的值
- (BOOL)clearAll;	// 清除 KVStorage 中存储的所有值
@end
```

#### 方法列表
#### `- (BOOL)hasWithKey:(NSString * _Nonnull)key`
判断 KVStorage 中 key 是否存在

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| key | NSString * _Nonnull | 存储标识 |

**返回值**：key 是否存在

#### `- (BOOL)setWithKey:(NSString * _Nonnull)key stringValue:(NSString * _Nonnull)stringValue`
在 KVStorage 中存储字符串

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| key | NSString * _Nonnull | 存储标识 |
| stringValue | NSString * _Nonnull | 待存储的字符串值 |

**返回值**：存储是否成功

#### `- (BOOL)setWithKey:(NSString * _Nonnull)key intValue:(NSInteger)intValue`
在 KVStorage 中存储 Int 值

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| key | NSString * _Nonnull | 存储标识 |
| intValue | NSInteger | 待存储的 Int 值 |

**返回值**：存储是否成功

#### `- (BOOL)setWithKey:(NSString * _Nonnull)key floatValue:(float)floatValue`
在 KVStorage 中存储 Float 值

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| key | NSString * _Nonnull | 存储标识 |
| floatValue | float | 待存储的 Float 值 |

**返回值**：存储是否成功

#### `- (BOOL)setWithKey:(NSString * _Nonnull)key doubleValue:(double)doubleValue`
在 KVStorage 中存储 Double 值

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| key | NSString * _Nonnull | 存储标识 |
| doubleValue | double | 待存储的 Double 值 |

**返回值**：存储是否成功

#### `- (BOOL)setWithKey:(NSString * _Nonnull)key boolValue:(BOOL)boolValue`
在 KVStorage 中存储布尔值

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| key | NSString * _Nonnull | 存储标识 |
| boolValue | BOOL | 待存储的布尔值 |

**返回值**：存储是否成功

#### `- (BOOL)setWithKey:(NSString * _Nonnull)key dataValue:(NSData * _Nonnull)dataValue`
在 KVStorage 中存储 Data 值

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| key | NSString * _Nonnull | 存储标识 |
| dataValue | NSData * _Nonnull | 待存储的 Data 值 |

**返回值**：存储是否成功

#### `- (NSString * _Nonnull)getStringWithKey:(NSString * _Nonnull)key`
获取 KVStorage 中存储的字符串

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| key | NSString * _Nonnull | 存储标识 |

**返回值**：存储的字符串值

#### `- (NSInteger)getIntWithKey:(NSString * _Nonnull)key`
获取 KVStorage 中存储的 Int 值

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| key | NSString * _Nonnull | 存储标识 |

**返回值**：存储的 Int 值

#### `- (float)getFloatWithKey:(NSString * _Nonnull)key`
获取 KVStorage 中存储的 Float 值

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| key | NSString * _Nonnull | 存储标识 |

**返回值**：存储的 Float 值

#### `- (double)getDoubleWithKey:(NSString * _Nonnull)key`
获取 KVStorage 中存储的 Double 值

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| key | NSString * _Nonnull | 存储标识 |

**返回值**：存储的 Double 值

#### `- (BOOL)getBoolWithKey:(NSString * _Nonnull)key`
获取 KVStorage 中存储的布尔值

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| key | NSString * _Nonnull | 存储标识 |

**返回值**：存储的布尔值

#### `- (NSData * _Nonnull)getDataWithKey:(NSString * _Nonnull)key`
获取 KVStorage 中存储的 Data 值

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| key | NSString * _Nonnull | 存储标识 |

**返回值**：存储的 Data 值

#### `- (BOOL)clearWithKey:(NSString * _Nonnull)key`
清除 KVStorage 中存储的值

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| key | NSString * _Nonnull | 存储标识 |

**返回值**：清除操作是否成功

#### `- (BOOL)clearAll`
清除 KVStorage 中存储的所有值

**返回值**：清除操作是否成功

## EXTENSION
### KAAPI (SWIFT_EXTENSION(LKKeyValueExternal))

```objective-c
@interface KAAPI (SWIFT_EXTENSION(LKKeyValueExternal))
@property (nonatomic, readonly, strong) id <KAKeyValueProtocol> _Nullable kvstore;	// KVStorage 能力接口实例
@end
```

#### 属性列表
| 属性名 | 类型 | 描述 |
| --- | --- | --- |
| kvstore | id <KAKeyValueProtocol> _Nullable | KVStorage 能力接口实例 |
