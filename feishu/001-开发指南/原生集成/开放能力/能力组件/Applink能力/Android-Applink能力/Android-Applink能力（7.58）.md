---
title: "Android Applink能力（7.58）"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/applink-capability/android/android-applink-capability_758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# Android AppLink 能力 (7.58)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| applink-api | 能力组件 | 1.0.2-release | 7.58.0 |

## 功能简介
通过该 API 能力，可以调用飞书的页面跳转、路由能力

### 更新日志
- 新增 `@TrimisScope(ScopeType.GLOBAL)` 注解，声明接口作用域为全局

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_android)

```kotlin
import com.ss.android.lark.core.spi.ISpiApi
import com.ss.android.lark.alchemy.applink.IAppLinkApi
import com.ss.android.lark.onload_api.IOnloadGlobalModule

class OnloadModuleImpl : IOnloadGlobalModule {
  override fun loadGlobalModule(globalSpiApi: ISpiApi?) {
    // 通过 SPI 获取 AppLink 能力接口
    val appLinkApi = globalSpiApi?.getGlobalService(IAppLinkApi::class.java)

// 调用页面跳转能力
    appLinkApi?.openAppLink(context, "lark://...")
  }
}
```

## INTERFACE
### IAppLinkApi
调用飞书的页面跳转、路由能力

```java
@Keep
@TrimisScope(ScopeType.GLOBAL)
interface IAppLinkApi {
  // 调用飞书的页面跳转、路由能力
  boolean openAppLink(@NonNull Context context, @NonNull String appLinkUrl)
}
```

#### 方法列表
#### `boolean openAppLink(@NonNull Context context, @NonNull String appLinkUrl)`
调用飞书的页面跳转、路由能力

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | Context | 是 | Context |
| appLinkUrl | String | 是 | 需要跳转的页面 App Link 地址 |

**返回值**：跳转是否成功

## ANNOTATION
### AppLinkImpl
标记 IAppLinkApi 的实现类

**仅供飞书侧使用**

```java
@BasePlugin(value = IAppLinkApi.class)
@interface AppLinkImpl {
}
```
