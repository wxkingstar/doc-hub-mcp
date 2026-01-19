---
title: "Android 埋点能力 (7.58)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/event-tracking-capabilities/android-event-tracking-capabilities/android-event-tracking-capabilities-75
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# Android 埋点能力 (7.58)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| statistics-api | 能力组件 | 1.0.7-release | 7.58.0 |

## 功能简介
通过该 API 能力，可以调用飞书的埋点统计能力，将业务数据上报到埋点平台  
私有化部署客户需要搭配火山 toB [Finder](https://www.volcengine.com/product/datafinder) 部署使用

### 更新日志
- 新增 `@TrimisScope(ScopeType.USER)` 注解，明确接口作用域为 USER 级

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_android)

```kotlin
import com.ss.android.lark.core.spi.ISpiApi
import com.ss.android.lark.ka.statistics.api.IStatisticsApi
import com.ss.android.lark.onload_api.IOnloadUserModule
import org.json.JSONObject

class OnloadModuleImpl : IOnloadUserModule {
    override fun loadUserModule(userSpiApi: ISpiApi?) {
        // 通过 SPI 获取埋点能力接口
        val statisticsApi = userSpiApi?.getGlobalService(IStatisticsApi::class.java)

// 初始化埋点配置
        val commonParams = JSONObject().apply {
            put("user_unique_id", "demo_user_001")
            put("autoTrackSwitch", true)
            put("enableLog", BuildConfig.DEBUG)
        }
        statisticsApi?.initConfig(
            appId = "your_app_id",
            registerHost = "register.example.com",
            appLogHost = "applog.example.com",
            commonParams = commonParams
        )

// 上报事件
        statisticsApi?.sendEvent("page_view")
        statisticsApi?.sendEvent("button_click", JSONObject().apply {
            put("button_id", "submit")
            put("timestamp", System.currentTimeMillis())
        })

// 其他方法省略...
    }
}
```

## INTERFACE
### IStatisticsApi
通过该 API 能力，可以调用飞书的埋点统计能力，将业务数据上报到埋点平台  
私有化部署客户需要搭配火山 toB [Finder](https://www.volcengine.com/product/datafinder) 部署使用

```kotlin
@TrimisScope(ScopeType.USER)
interface IStatisticsApi {
    fun initConfig(appId: String, registerHost: String?, appLogHost: String?, commonParams: JSONObject)   // 初始化埋点配置
    fun sendEvent(eventName: String)                                                                     // 上报事件
    fun sendEvent(eventName: String, params: JSONObject)                                                 // 上报事件
}
```

#### 方法列表
#### `initConfig(appId: String, registerHost: String?, appLogHost: String?, commonParams: JSONObject)`
初始化埋点配置

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| appId | String | 是 | 在火山注册的应用 id |
| registerHost | String? | 否 | 注册设备域名，不能携带 `https://` |
| appLogHost | String? | 否 | 埋点域名，不能携带 `https://` |
| commonParams | JSONObject | 是 | 设置参数，格式见功能简介 |

#### `sendEvent(eventName: String)`
上报事件

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| eventName | String | 是 | 埋点事件名称 |

#### `sendEvent(eventName: String, params: JSONObject)`
上报事件

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| eventName | String | 是 | 埋点事件名称 |
| params | JSONObject | 是 | 埋点参数 |

## ANNOTATION
### StatisticsImpl
标记 IStatisticsApi 的实现类

**仅供飞书侧使用**

```java
@BasePlugin(value = IStatisticsApi.class)
@interface StatisticsImpl {
}
```
