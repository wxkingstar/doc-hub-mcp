---
title: "Android 安全能力（7.58）"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/securityabilityexternal/android-security-ability-758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# Android 安全能力（7.58）

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| security-ability-api | 能力组件 | 1.0.3-release | 7.58.0 |

## 功能简介
为应用提供统一的安全相关能力，包括飞书剪贴板数据的读写

### 更新日志
- 新增 `@TrimisScope(ScopeType.GLOBAL)` 注解，声明该能力为全局作用域

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_android)

```kotlin
import com.ss.android.lark.core.spi.ISpiApi
import com.ss.android.lark.security.ability.api.ISecurityApi
import com.ss.android.lark.onload_api.IOnloadGlobalModule

class OnloadModuleImpl : IOnloadGlobalModule {
    override fun loadGlobalModule(globalSpiApi: ISpiApi?) {
        // 通过 SPI 获取安全能力接口
        val securityApi = globalSpiApi?.getGlobalService(ISecurityApi::class.java)

// 向飞书剪贴板写入数据
        val clipData = ClipData.newPlainText("label", "text")
        securityApi?.setClipboardData(clipData, "my_app_id")

// 从飞书剪贴板读取数据
        val data = securityApi?.getClipboardData("my_app_id")
    }
}
```

## INTERFACE
### ISecurityApi
安全能力统一接口层

```java
interface ISecurityApi {
    // 往飞书剪贴板中添加数据
    void setClipboardData(@Nullable ClipData data, @Nullable String appID)

// 通过飞书剪贴板获取指定 app_id 的数据
    @Nullable ClipData getClipboardData(@Nullable String appID)
}
```

#### 方法列表
#### `void setClipboardData(@Nullable ClipData data, @Nullable String appID)`
往飞书剪贴板中添加数据

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| data | ClipData | 否 | 剪贴板数据，如果为空，则会清空剪贴板 |
| appID | String | 否 | 该剪贴板数据需要加在什么 app_id 上，为空时默认和飞书 office 能力在一个层级 |

#### `@Nullable ClipData getClipboardData(@Nullable String appID)`
通过飞书剪贴板获取指定 app_id 的数据

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| appID | String | 否 | 需要获取数据的 app_id |

**返回值**：返回剪贴板数据

## ANNOTATION
### SecurityImpl
**仅供飞书侧使用**

```java
@interface SecurityImpl {
}
```
