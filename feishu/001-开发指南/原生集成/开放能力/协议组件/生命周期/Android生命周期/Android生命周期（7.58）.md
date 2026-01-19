---
title: "Android生命周期（7.58）"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/life-cycle/android/android-life-cycle-758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507247000
---
最后更新于 2025-12-12

# Android 生命周期（7.58）

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| lifecycle-api | 协议组件 | 1.0.3-release | 7.58.0 |

## 功能简介
飞书应用的生命周期相关回调包括应用启动、进入前台、进入后台和飞书账号登录、登出等事件。开发者可以注册相应的回调函数，以便在这些事件发生时执行特定的业务逻辑。

### 更新日志
- 新增 `@TrimisScope(ScopeType.GLOBAL)` 注解，声明接口作用域为全局
- 新增 `onAppStateChanged` 方法，统一监听应用前后台状态变化

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_android)

```java
import com.ss.android.lark.plugin.annotation.TrimisImpl;
import com.ss.android.lark.alchemy.lifecycle.ILifecycleApi;

@TrimisImpl(ILifecycleApi.class)
public class LifecycleImpl implements ILifecycleApi {
    @Override
    public void onStart(Context context) {
        // 应用启动
    }

@Override
    public void onResume(Context context) {
        // 应用切到前台
    }

@Override
    public void onPause(Context context) {
        // 应用切到后台
    }

// 其他方法省略...
}
```

## INTERFACE
### ILifecycleApi
飞书应用的生命周期相关回调包括应用启动、进入前台、进入后台和飞书账号登录、登出等事件。开发者可以注册相应的回调函数，以便在这些事件发生时执行特定的业务逻辑。

```kotlin
@TrimisScope(ScopeType.GLOBAL)
interface ILifecycleApi {
    fun onStart(context: Context)                    // 应用启动时调用
    fun onResume(context: Context)                   // 应用切到前台时调用
    fun onPause(context: Context)                    // 应用切到后台时调用
    fun onAppStateChanged(context: Context, oldState: AppState, newState: AppState) // 应用前后台状态变化时调用
    fun onLoginSuccess(context: Context, isFastLogin: Boolean) // 飞书账号登录成功时调用
    fun onLoginFail(context: Context, isFastLogin: Boolean)  // 飞书账号登录失败时调用
    fun onLogout(context: Context)                   // 飞书账号登出时调用
}
```

#### 方法列表
#### `fun onStart(context: Context)`
应用启动时调用。

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | Context | 是 | Context |

#### `fun onResume(context: Context)`
应用切到前台时调用。

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | Context | 是 | Context |

#### `fun onPause(context: Context)`
应用切到后台时调用。

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | Context | 是 | Context |

#### `fun onAppStateChanged(context: Context, oldState: AppState, newState: AppState)`
应用前后台状态变化时调用。

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | Context | 是 | Context |
| oldState | AppState | 是 | 老状态 |
| newState | AppState | 是 | 新状态 |

#### `fun onLoginSuccess(context: Context, isFastLogin: Boolean)`
飞书账号登录成功时调用。

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | Context | 是 | Context |
| isFastLogin | Boolean | 是 | 冷启动免密登录飞书该值为 true |

#### `fun onLoginFail(context: Context, isFastLogin: Boolean)`
飞书账号登录失败时调用。

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | Context | 是 | Context |
| isFastLogin | Boolean | 是 | 冷启动免密登录飞书该值为 true |

#### `fun onLogout(context: Context)`
飞书账号登出时调用。

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | Context | 是 | Context |

## CLASS
### AppState
应用前后台状态。

```java
class AppState {
    static AppState create(boolean isFront)    // 创建 AppState 的实例。仅供飞书方调用！
    boolean isFront()                          // 应用是否在前台
}
```

#### 方法列表
#### `static AppState create(boolean isFront)`
创建 AppState 的实例。仅供飞书方调用！

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| isFront | boolean | 是 | 应用是否在前台 |

**返回值**：AppState 实例

#### `boolean isFront()`
应用是否在前台。

**返回值**：true 表示应用在前台，false 表示应用在后台

## ANNOTATION
### Lifecycle
标记 ILifecycleApi 的实现类。

```java
@interface Lifecycle {
}
```
