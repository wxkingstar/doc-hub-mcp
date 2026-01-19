---
title: "Android  Setting能力"
source_url: https://open.feishu.cn/document/native-integration/open-capability/capability-components/setting-ability/android-setting-
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# Android Setting能力

|组件类型| 最低飞书版本 |生效基线|
|--|--------|-|
|能力组件| 6.5  |2.2.3及以上版本|

## 组件说明
通过该API能力，可以获取飞书的动态setting配置，只在SaaS可用，私有化不支持。

## API 列表
### setting-api

#### Packages

| Name |
|---|
| com.ss.android.lark.alchemy.setting |

/com.ss.android.lark.alchemy.setting

### ISettingApi

interface ISettingApi

配置相关能力

#### Functions

| Name | Summary |
|---|---|
| getConfig | abstract fun getConfig(namespace: String, key: String): Map&lt;String, Any&gt;<br>获取配置相关信息 |

##### getConfig

abstract fun getConfig(namespace: String, key: String): Map&lt;String, Any&gt;

获取配置相关信息

###### Return

配置表，格式为Map

###### Parameters

| Name | Description |
|---|---|
| namespace | 配置表中的命名空间 |
| key | 配置表中的key |

/com.ss.android.lark.alchemy.setting

### SettingImpl

annotation class SettingImpl

标记 ISettingApi 的实现类。 

仅供飞书侧使用

## 接入说明
通过原生集成工具，选择 2.2.3 及以上基线，并启用 setting-api 组件

## 更新日志
| 版本号   |Release Note|
|-------|---|
| 1.0.9 |新功能：能力开放|
