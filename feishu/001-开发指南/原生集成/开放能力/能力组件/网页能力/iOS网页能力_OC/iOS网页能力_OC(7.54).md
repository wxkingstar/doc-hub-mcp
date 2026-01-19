---
title: "iOS网页能力_OC(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/web-capabilities/ios-webviewapiexternal_oc/ios-webviewapiexternal_oc_754
last_remote_update: 2025-11-21
last_remote_update_timestamp: 1763719624000
---
最后更新于 2025-11-21

# iOS网页能力_OC(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKWebViewApiExternal | 能力组件 | 1.2.0 | 7.54.0 |

## 功能简介
网页能力接口，用于追加自定义的网络访问信息

## 更新日志
- 将 `HTTPCookie` 类型统一为 `NSHTTPCookie`
- 将 `webViewApi` 属性声明中的 `readonly` 改为 `readonly, strong`

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objective-c
#import "ka_auto_generated.h"
@import LKKABridge;
@import LKWebViewApiExternal;

KAAPI *api = [[KAAPI alloc] initWithChannel:[NSString stringWithUTF8String:getChannel()]];
id<KAWebViewApiDelegate> webViewApi = api.webViewApi;
NSHTTPCookie *cookie = [[NSHTTPCookie alloc] initWithProperties:@{...}];
[webViewApi setCookieWithCookie:cookie];
[webViewApi appendUserAgentWithCustomUA:@"CustomUA/1.0"];
```

## PROTOCOL
### KAWebViewApiDelegate
网页能力接口协议，用于追加自定义的网络访问信息

```objective-c
@protocol KAWebViewApiDelegate
- (void)setCookieWithCookie:(NSHTTPCookie * _Nonnull)cookie; // 注入cookie到HTTPCookieStorage中
- (void)appendUserAgentWithCustomUA:(NSString * _Nonnull)customUA; // 在已有 UserAgent 基础上 append 字段
@end
```

#### 方法列表
#### `- (void)setCookieWithCookie:(NSHTTPCookie * _Nonnull)cookie`
注入cookie到HTTPCookieStorage中

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| cookie | NSHTTPCookie * _Nonnull | 注入的cookie |

#### `- (void)appendUserAgentWithCustomUA:(NSString * _Nonnull)customUA`
在已有 UserAgent 基础上 append 字段

| 参数名称 | 类型 | 描述 |
| --- | --- | --- |
| customUA | NSString * _Nonnull | 要 append 的 UserAgent String |

提示：建议 application 启动直接注入，确保一次性注入完全，多次调用注入不同的值会造成覆盖；其中的 product 请不要与已有 product 冲突，product 含义请参考 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent

## EXTENSION
### KAAPI

```objective-c
@interface KAAPI (SWIFT_EXTENSION(LKWebViewApiExternal))
@property (nonatomic, readonly, strong) id <KAWebViewApiDelegate> _Nullable webViewApi; // 网页能力接口实例
@end
```

#### 属性列表
| 属性名 | 类型 | 描述 |
| --- | --- | --- |
| webViewApi | id <KAWebViewApiDelegate> _Nullable | 网页能力接口实例 |
