---
title: "Android Logger能力（7.58）"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/logger-capability/android-logger-capability/android-logger-capability-758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# Android Logger能力(7.58)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| logger-api | 能力组件 | 1.0.2-release | 7.58.0 |

## 功能简介
通过调用飞书的打印日志 API，开发者可以指定日志的级别、内容和其他相关信息。此外，飞书还支持日志回捞功能，开发者可以通过相应的 API 检索和获取之前记录的日志信息。这样可以方便地进行日志分析、故障排查和性能优化等工作。

### 更新日志
- 新增 `@TrimisScope(ScopeType.GLOBAL)` 注解，声明接口作用域为全局
- 新增依赖 `com.ss.android.lark.plugin.annotation.ScopeType` 与 `com.ss.android.lark.plugin.annotation.TrimisScope`

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_android)

```kotlin
import com.ss.android.lark.core.spi.ISpiApi
import com.ss.android.lark.alchemy.logger.ILoggerApi
import com.ss.android.lark.onload_api.IOnloadGlobalModule

class OnloadModuleImpl : IOnloadGlobalModule {
    override fun loadGlobalModule(globalSpiApi: ISpiApi?) {
        // 通过 SPI 获取 Logger 能力接口
        val loggerApi = globalSpiApi?.getGlobalService(ILoggerApi::class.java)

// 打印 info 日志
        loggerApi?.i("DemoTag", "Hello Logger")

// 打印 error 日志
        loggerApi?.e("DemoTag", "Something wrong", RuntimeException("demo"))

// 其他方法省略...
    }
}
```

## INTERFACE
### ILoggerApi
日志打印能力。

```java
@TrimisScope(ScopeType.GLOBAL)
interface ILoggerApi {
    void v(String tag, String msg)    // 打印 verbose 日志
    void d(String tag, String msg)    // 打印 debug 日志
    void i(String tag, String msg)    // 打印 info 日志
    void w(String tag, String msg)    // 打印 warn 日志
    void e(String tag, String msg, Throwable throwable)    // 打印 error 日志
}
```

#### 方法列表
#### `void v(String tag, String msg)`
打印 verbose 日志  
注意该级别的日志在 Release 包中可能被移除

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| tag | String | 是 | 日志标签 |
| msg | String | 是 | 日志内容 |

#### `void d(String tag, String msg)`
打印 debug 日志  
注意该级别的日志在 Release 包中可能被移除

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| tag | String | 是 | 日志标签 |
| msg | String | 是 | 日志内容 |

#### `void i(String tag, String msg)`
打印 info 日志

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| tag | String | 是 | 日志标签 |
| msg | String | 是 | 日志内容 |

#### `void w(String tag, String msg)`
打印 warn 日志

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| tag | String | 是 | 日志标签 |
| msg | String | 是 | 日志内容 |

#### `void e(String tag, String msg, Throwable throwable)`
打印 error 日志

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| tag | String | 是 | 日志标签 |
| msg | String | 是 | 日志内容 |
| throwable | Throwable | 否 | 异常。可以为 null |

## ANNOTATION
### LoggerImpl
标记 ILoggerApi 的实现类

**仅供飞书侧使用**

```java
@BasePlugin(ILoggerApi.class)
@interface LoggerImpl {
}
```
