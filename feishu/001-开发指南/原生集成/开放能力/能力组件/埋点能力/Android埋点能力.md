---
title: "Android埋点能力"
source_url: https://open.feishu.cn/document/native-integration/open-capability/capability-components/event-tracking-capabilities/andr
last_remote_update: 2025-04-29
last_remote_update_timestamp: 1745906654000
---
最后更新于 2025-04-29

# Android埋点能力

|组件类型| 最低飞书版本 |生效基线|
|--|--------|-|
|能力组件| 5.22   |2.0.2及以上版本|

## 组件说明
通过该API能力，可以调用飞书的埋点统计能力，将业务数据上报到埋点平台。
<md-alert>
私有化部署客户需要搭配火山toB [Finder](https://www.volcengine.com/product/datafinder)部署使用

## API 列表
### statistics-api

#### Packages

| Name |
|---|
| com.ss.android.lark.ka.statistics.api |

/com.ss.android.lark.ka.statistics.api

### IStatisticsApi

interface IStatisticsApi

通过该API能力，可以调用飞书的埋点统计能力，将业务数据上报到埋点平台。

私有化部署客户需要搭配火山toB [Finder](https://www.volcengine.com/product/datafinder) 部署使用

#### Functions

| Name | Summary |
|---|---|
| initConfig | abstract fun initConfig(appId: String, registerHost: String?, appLogHost: String?, commonParams: JSONObject)<br>初始化埋点配置。 |
| sendEvent | abstract fun sendEvent(eventName: String)<br>abstract fun sendEvent(eventName: String, params: JSONObject)<br>上报事件。 |

##### initConfig

abstract fun initConfig(appId: String, registerHost: String?, appLogHost: String?, commonParams: JSONObject)

初始化埋点配置。

###### Parameters

| Name | Description |
|---|---|
| appId | 在火山注册的应用id |
| registerHost | 注册设备域名，不能携带`https://` |
| appLogHost | 埋点域名，不能携带`https://` |
| commonParams | 设置参数，格式如下：<br>```json {           // 外部 user_id; 默认 ""; 必填，不可空           "user_unique_id": String,           // ab 开关; 默认 false; 非必填           "abSwitch": boolean,           // 自动埋点开关, 开启全埋点后将采集所有页面事件和点击事件; 默认 false；非必填           "autoTrackSwitch": boolean,           // 国密开关; 默认 false; 非必填           "GMEncryptSwitch": boolean,           // 国密公匙, 非空且GMEncryptSwitch = true，将开启国密; 默认 ""; 非必填           "publicKey": String,           // app 语言, 默认 飞书当前语言; 非必填           "appLanguage": String,           // app 地区, 默认 飞书当前区域; 非必填           "appRegion": String,           // 日志开关; 默认 false; 非必填           "enableLog": boolean,           // 是否对请求加密（设备注册，埋点上报）; 默认 false；非必填           "isDebug": boolean,           // 其他公参; 默认 null; 非必填           "customHeader": JSONObject  } ``` |

##### sendEvent

abstract fun sendEvent(eventName: String)

上报事件。

###### Parameters

| Name | Description |
|---|---|
| eventName | 埋点事件名称。 |

abstract fun sendEvent(eventName: String, params: JSONObject)

上报事件。

###### Parameters

| Name | Description |
|---|---|
| eventName | 埋点事件名称。 |
| params | 埋点参数。 |

/com.ss.android.lark.ka.statistics.api

### StatisticsImpl

annotation class StatisticsImpl

标记 IStatisticsApi 的实现类。 

仅供飞书侧使用

## 接入说明
通过原生集成工具，选择 2.0.2 及以上基线，启用 statistics-api 组件

## 更新日志
| 版本号   |Release Note|
|-------|---|
| 1.0.2 |新功能：能力开放|
