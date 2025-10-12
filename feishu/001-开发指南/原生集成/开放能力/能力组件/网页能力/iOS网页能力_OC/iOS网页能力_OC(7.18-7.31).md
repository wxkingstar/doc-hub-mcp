---
title: "iOS网页能力_OC(7.18-7.31)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/web-capabilities/ios-webviewapiexternal_oc/ios-webviewapiexternal_oc-718
last_remote_update: 2025-04-29
last_remote_update_timestamp: 1745895177000
---
最后更新于 2025-04-29

# iOS网页能力_OC(7.18-7.31) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| NativeAppPublicKit | 1.0.2 | 通过该组件，开发者可以实现在飞书的 H5 容器中设置自定义的 cookie，或追加自定义的 User Agent 信息。这样可以为开发者提供更多的灵活性和个性化定制的能力，以满足不同的业务需求和用户体验要求 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objectivec
@import NativeAppPublicKit;

[[NativeAppConnectManager.shared getNativeAppManager] setCookieWithCookie:...];
[[NativeAppConnectManager.shared getNativeAppManager] appendUserAgentWithCustomUA:...];

@end
```

-------------------------------

## NativeAppManagerProtocol

网页能力接口协议，用于追加自定义的网络访问信息 
`@import NativeAppPublicKit`

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **setCookieWithCookie:**(NSHTTPCookie *_Nonnull cookie) |
| virtual void | **appendUserAgentWithCustomUA:**(NSString *_Nonnull customUA) |

### **function setCookieWithCookie:**

注入cookie到HTTPCookieStorage中 

```cpp
virtual void setCookieWithCookie:(
    NSHTTPCookie *_Nonnull cookie
)
```

**Parameters**: 

* **cookie** 注入的cookie 

### **function appendUserAgentWithCustomUA:**

在已有 UserAgent 基础上 append 字段 提示：建议 application 启动直接注入，确保一次性注入完全，多次调用注入不同的值会造成覆盖；其中的 product 请不要与已有 product 冲突, product 含义请参考 [https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent，](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent，)

```cpp
virtual void appendUserAgentWithCustomUA:(
    NSString *_Nonnull customUA
)
```

**Parameters**: 

* **customUA** 要 append 的 UserAgent String 

-------------------------------
