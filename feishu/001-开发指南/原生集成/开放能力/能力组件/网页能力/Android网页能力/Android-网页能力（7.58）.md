---
title: "Android 网页能力（7.58）"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/web-capabilities/android_web_capability/android-web-capability-758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# Android 网页能力（7.58）

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| webview-api | 能力组件 | 1.0.8-release | 7.58.0 |

## 功能简介
通过使用该 API 能力，开发者可以实现在飞书的 H5 容器中设置自定义的 cookie，或追加自定义的 User Agent 信息。这样可以为开发者提供更多的灵活性和个性化定制的能力，以满足不同的业务需求和用户体验要求。

### 更新日志
- 增加 @TrimisScope(ScopeType.USER) 注解，明确接口作用域为 USER 级别

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_android)

```kotlin
import com.ss.android.lark.core.spi.ISpiApi
import com.ss.android.lark.alchemy.webview.IWebViewApi
import com.ss.android.lark.onload_api.IOnloadUserModule

class OnloadModuleImpl : IOnloadUserModule {
    override fun loadUserModule(userSpiApi: ISpiApi?) {
        // 通过SPI获取WebView能力接口
        val webViewApi = userSpiApi?.getGlobalService(IWebViewApi::class.java)

// 设置Cookie
        webViewApi?.setCookie("https://example.com", "key=value")

// 追加UserAgent
        webViewApi?.appendUserAgent("CustomAgent/1.0")

// 其他方法省略...
    }
}
```

## INTERFACE
### IWebViewApi
LarkWebView 相关 API

```java
interface IWebViewApi {
    void setCookie(@NonNull String url, @NonNull String value) // 设置 Cookie
    void appendUserAgent(String userAgent) // 支持向 userAgent 中注入额外字段
}
```

#### 方法列表
#### `void setCookie(@NonNull String url, @NonNull String value)`
设置 Cookie

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| url | String | 是 | 目标 URL |
| value | String | 是 | Cookie 值 |

#### `void appendUserAgent(String userAgent)`
支持向 userAgent 中注入额外字段（建议 application 启动直接注入，确保一次性注入完全，多次调用注入不同的值会造成覆盖）

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| userAgent | String | 是 | 要注入的 userAgent 相关字段 |

## ANNOTATION
### WebViewApi
LarkWebView 相关 API

**仅供飞书侧使用**

```java
@interface WebViewApi {
}
```
