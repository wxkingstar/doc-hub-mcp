---
title: "Android Passport 能力 (7.58)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/passport-capability/android-passport-capability/android-passport-capability-758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# Android Passport 能力 (7.58)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| passport-api | 能力组件 | 1.3.3-release | 7.58.0 |

## 功能简介
通过该 API 能力，可以调用飞书 passport 部分能力，比如获取用户登录状态、did 等

### 更新日志
- 新增 `@TrimisScope(ScopeType.GLOBAL)` 注解，声明接口作用域为全局

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_android)

```kotlin
import com.ss.android.lark.core.spi.ISpiApi
import com.ss.android.lark.ka.passport.api.IPassportApi
import com.ss.android.lark.onload_api.IOnloadGlobalModule

class OnloadModuleImpl : IOnloadGlobalModule {
    override fun loadGlobalModule(globalSpiApi: ISpiApi?) {
        // 通过 SPI 获取 Passport 能力接口
        val passportApi = globalSpiApi?.getGlobalService(IPassportApi::class.java)

// 检查登录状态
        passportApi?.checkLarkStatus(object : IPassportApi.Callback {
            override fun onSuccess(isValid: Boolean, msg: String) {
                // 处理登录状态
            }

override fun onFail(msg: String) {
                // 处理失败
            }
        })

// 其他方法省略...
    }
}
```

## INTERFACE
### IPassportApi
通过该 API 能力，可以调用飞书 passport 部分能力，比如获取用户登录状态、did 等

```java
@TrimisScope(ScopeType.GLOBAL)
interface IPassportApi {
    void checkLarkStatus(@NonNull Callback callback) // 检查当前用户的登录状态
    @NonNull
    String getDeviceId() // 获取设备唯一标识
    @NonNull
    String getSid() // 获取用户 session 唯一标识
    boolean isFeishuLogin() // 获取飞书是否登录
    void logoutFeishu() // 登出飞书
    void switchTenant(@Nullable String domain, @Nullable GetDataCallback<Boolean> callback) // 切换租户
    void logoutAllUser(@NonNull String scene, @Nullable GetDataCallback<Boolean> callback) // 登出当前设备所有用户
}
```

#### 方法列表
#### `void checkLarkStatus(@NonNull Callback callback)`
检查当前用户的登录状态

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| callback | Callback | 是 | 异步返回登录状态 |

#### `@NonNull String getDeviceId()`
获取设备唯一标识，由于合规等要求，设备唯一标识可能会发生变化，详情请查看 API 文档

**返回值**：设备唯一标识。如果无可用值，会返回空字符串

#### `@NonNull String getSid()`
获取用户 session 唯一标识

**返回值**：用户 session 唯一标识。如果无可用值，会返回空字符串

#### `boolean isFeishuLogin()`
获取飞书是否登录

**返回值**：飞书是否登录

#### `void logoutFeishu()`
登出飞书

#### `void switchTenant(@Nullable String domain, @Nullable GetDataCallback<Boolean> callback)`
切换租户。如果 domain 为空或者空字符串，会调用 callback.onFail

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| domain | String | 否 | 租户域名 |
| callback | GetDataCallback<Boolean> | 否 | 切换回调 |

#### `void logoutAllUser(@NonNull String scene, @Nullable GetDataCallback<Boolean> callback)`
调用接口后，登出当前设备所有用户，详情查看 API 文档

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| scene | String | 是 | 登出场景参数，由飞书 Passport 提供 |
| callback | GetDataCallback<Boolean> | 否 | 登出回调 |

### Callback
登录状态检查回调

```java
interface Callback {
    void onSuccess(boolean isValid, @NonNull String msg) // 调用成功
    void onFail(@NonNull String msg) // 调用失败
}
```

#### 方法列表
#### `void onSuccess(boolean isValid, @NonNull String msg)`
调用成功

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| isValid | boolean | 是 | 登录态是否有效 |
| msg | String | 是 | 额外说明。如果没有额外说明，为空字符串 |

#### `void onFail(@NonNull String msg)`
调用失败

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| msg | String | 是 | 失败原因 |

### GetDataCallback<T>
通用数据回调

```java
interface GetDataCallback<T> {
    void onSuccess(@NonNull T data) // 调用成功
    void onFail(@NonNull String msg) // 调用失败
}
```

#### 方法列表
#### `void onSuccess(@NonNull T data)`
调用成功

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| data | T | 是 | 返回数据 |

#### `void onFail(@NonNull String msg)`
调用失败

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| msg | String | 是 | 失败原因 |

## ANNOTATION
### PassportImpl
仅供飞书侧使用

```java
@BasePlugin(IPassportApi.class)
@interface PassportImpl {
}
```
