---
title: "Android Setting能力 (7.58)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/setting-ability/android-setting-capability/android-setting-capability-758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# Android Setting能力 (7.58)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| setting-api | 能力组件 | 1.0.3-release | 7.58.0 |

## 功能简介
通过该 API 能力，可以获取飞书的动态 setting 配置，只在 SaaS 可用，私有化不支持

### 更新日志
- 新增 @TrimisScope(ScopeType.USER) 注解，明确接口作用域为用户级
- 新增 @ContributeDwarfSPI 注解，标记接口由 DwarfSPI 自动装配

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_android)

```kotlin
import com.ss.android.lark.core.spi.ISpiApi
import com.ss.android.lark.alchemy.setting.ISettingApi
import com.ss.android.lark.onload_api.IOnloadUserModule

class OnloadModuleImpl : IOnloadUserModule {
    override fun loadUserModule(userSpiApi: ISpiApi?) {
        // 通过 SPI 获取 Setting 能力接口
        val settingApi = userSpiApi?.getGlobalService(ISettingApi::class.java)

// 获取配置信息
        val config = settingApi?.getConfig("namespace", "key")

// 其他方法省略...
    }
}
```

## INTERFACE
### ISettingApi
配置相关能力

```java
@ContributeDwarfSPI
@TrimisScope(ScopeType.USER)
interface ISettingApi {
    Map<String, Object> getConfig(String namespace, String key); // 获取配置相关信息
}
```

#### 方法列表
#### `Map<String, Object> getConfig(String namespace, String key)`
获取配置相关信息

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| namespace | String | 是 | 配置表中的命名空间 |
| key | String | 是 | 配置表中的 key |

**返回值**：配置表，格式为 Map<String, Object>

## ANNOTATION
### SettingImpl
标记 ISettingApi 的实现类

**仅供飞书侧使用**

```java
@BasePlugin(ISettingApi.class)
@interface SettingImpl {
}
```
