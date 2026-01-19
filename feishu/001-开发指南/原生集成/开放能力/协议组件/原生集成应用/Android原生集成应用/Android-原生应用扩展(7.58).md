---
title: "Android 原生应用扩展(7.58)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/native-integrated-application/android-native-integrated-application/android-native-integrated-applicatio
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507247000
---
最后更新于 2025-12-12

# Android 原生应用扩展(7.58)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| native-app-extension-api | 协议组件 | 2.0.5-release | 7.58.0 |

## 功能简介
通过开放平台的流程创建应用并开启原生集成应用，开发者可以实现原生集成应用与飞书的无缝集成，提供更丰富的功能和更便捷的用户体验，增强应用的可用性，提升用户的工作效率和体验质量

### 更新日志
- 新增 `@TrimisScope(ScopeType.GLOBAL)` 注解，将 `INativeAppExtension` 声明为全局作用域
- 新增 `ScopeType` 与 `TrimisScope` 相关导入，用于作用域控制

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_android)

```java
import com.ss.android.lark.plugin.annotation.TrimisImpl;
import com.ss.android.lark.extension_api.INativeAppExtension;

@TrimisImpl(INativeAppExtension.class)
public class NativeAppExtensionImpl10 implements INativeAppExtension {
    @Override
    public void init() {
        // 初始化逻辑
    }

@Override
    public void destroy() {
        // 销毁逻辑
    }

@Override
    public String getAppId() {
        return "your_app_id";
    }
}
```

## INTERFACE
### INativeAppExtension
原生页面的基类接口，用于实现原生登录 SSO 页面或原生控制台应用时需要先实现此接口

```java
@Keep
@TrimisScope(ScopeType.GLOBAL)
interface INativeAppExtension {
    void init() // 应用初始化
    void destroy() // 应用销毁
    String getAppId() // 在开放平台管理后台申请的原生应用 appId
}
```

#### 方法列表
#### `void init()`
应用初始化

#### `void destroy()`
应用销毁

#### `String getAppId()`
在开放平台管理后台申请的原生应用 appId

**返回值**：appId

### INativeAppLauncher
启动本地应用接口，用于打开在工作台/搜索中展示的本地应用

```java
interface INativeAppLauncher {
    void launchNativeApp(Context context, String linkUrl) // 打开本地应用
}
```

#### 方法列表
#### `void launchNativeApp(Context context, String linkUrl)`
打开本地应用

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | Context | 是 | Context |
| linkUrl | String | 是 | 本地应用配置的 AppLink |

### INativeAppPageRouter
启动原生登录页面接口，用于注册自定义的 SSO 登录页

```java
@Keep
interface INativeAppPageRouter {
    void pageRoute(Context context, String linkUrl) // 原生登录路由能力，收到 appLink 后可以跳转到的自定义的原生页面
}
```

#### 方法列表
#### `void pageRoute(Context context, String linkUrl)`
原生登录路由能力，收到 appLink 后可以跳转到的自定义的原生页面

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | Context | 是 | Context |
| linkUrl | String | 是 | 本地应用配置的 AppLink |

## ANNOTATION
### NativeAppExtensionImpl
继承 NativeAppExtension 的子类需要添加该注解用于服务发现

```java
@BasePlugin(value = INativeAppExtension.class)
@interface NativeAppExtensionImpl {
}
```
