---
title: "iOS生命周期能力_OC(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/life-cycle/ios-lifecycleexternal_oc/lifecycleexternal_oc_754
last_remote_update: 2025-11-21
last_remote_update_timestamp: 1763719624000
---
最后更新于 2025-11-21

# iOS生命周期能力_OC(7.54)

| 组件名称 | 组件类型 | 组件版本 |  生效基线 |
| --- | --- | --- | --- |
| LKLifecycleExternal | 协议组件 | 1.1.0 | 7.54.0 |

## 功能简介
生命周期协议，用于响应生命周期事件

## 更新日志
- 移除旧代码中 `KAAPI` 的 `registerWithLifecycle:cache:file:function:line:column:` 方法
- 新增 `_KAAPIWrapper` 的 `registerWithLifecycle:cache:` 方法
- 协议 `KALifecycleProtocol` 定义保持不变

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objective-c
#import "ka_auto_generated.h" // 引入 getChannel 函数
@import LKKABridge; // 引入 KAAPI_REGISTER 宏
@import LKLifecycleExternal;

/// 注册类，用于在加载动态库时调用`+load`方法完成注册
@interface LKLifecycleExternalRegistry: NSObject
@end
@implementation LKLifecycleExternalRegistry
+(void)load {
    NSString * channel = [NSString stringWithUTF8String:getChannel()];
    KAAPI *api = [[KAAPI alloc] initWithChannel:channel];    
    // 使用用 KAAPI_REGISTER 宏调用 KAAPI 拓展中的 registerWithLifecycle 方法
    [KAAPI_REGISTER registerWithLifecycle:^id<KALifecycleProtocol> {
            return [[LKLifecycleExternalIMP alloc] init];
        } cache:YES];
}
@end
/// `KALifecycleProtocol`协议实现类
@interface LKLifecycleExternalIMP : NSObject<KALifecycleProtocol>
@end
@implementation LKLifecycleExternalIMP
<实现方法>
@end
```

## PROTOCOL
### KALifecycleProtocol
生命周期协议，用于响应生命周期事件

```objective-c
@protocol KALifecycleProtocol
@optional
- (void)start;	// 应用启动时调用
- (void)resume;	// 应用切到前台时调用
- (void)pause;	// 应用切到后台时调用
- (void)onLoginSuccessWithIsFastLogin:(BOOL)isFastLogin;	// 飞书账号登录成功时调用，object: { “isFastLogin”: “true” or “false” }
- (void)onLoginFailWithIsFastLogin:(BOOL)isFastLogin;	// 飞书账号登录失败时调用
- (void)onLogout;	// 飞书账号登出时调用
- (void)beforeSwitchAccout;	// 飞书账号准备切换租户调用（解决 cookie 问题）
- (void)switchAccountSucceed;	// 飞书账号切换租户成功调用（解决 cookie 问题）
@end
```

#### 方法列表
#### `- (void)start`
应用启动时调用

#### `- (void)resume`
应用切到前台时调用

#### `- (void)pause`
应用切到后台时调用

#### `- (void)onLoginSuccessWithIsFastLogin:(BOOL)isFastLogin`
飞书账号登录成功时调用，object: { “isFastLogin”: “true” or “false” }

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| isFastLogin | BOOL | 是否启动直接登录 |

#### `- (void)onLoginFailWithIsFastLogin:(BOOL)isFastLogin`
飞书账号登录失败时调用

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| isFastLogin | BOOL | 是否启动直接登录 |

#### `- (void)onLogout`
飞书账号登出时调用

#### `- (void)beforeSwitchAccout`
飞书账号准备切换租户调用（解决 cookie 问题）

#### `- (void)switchAccountSucceed`
飞书账号切换租户成功调用（解决 cookie 问题）

## EXTENSION
### _KAAPIWrapper

```objective-c
@interface _KAAPIWrapper (SWIFT_EXTENSION(LKLifecycleExternal))
- (void)registerWithLifecycle:(id <KALifecycleProtocol> _Nullable (^ _Nonnull)(void))lifecycle cache:(BOOL)cache;	// 注册<code>KALifecycleProtocol</code>协议实例
@end
```

#### 方法列表
#### `- (void)registerWithLifecycle:cache:`
注册 `KALifecycleProtocol` 协议实例

| 参数名称 |  类型 | 描述 |
| --- | --- | --- |
| lifecycle | id <KALifecycleProtocol> _Nullable (^ _Nonnull)(void) | `KALifecycleProtocol` 协议实现类的初始化函数 |
| cache | BOOL | 是否缓存实例。为 `false` 时，每次调用协议方法都会重新初始化实例 |
