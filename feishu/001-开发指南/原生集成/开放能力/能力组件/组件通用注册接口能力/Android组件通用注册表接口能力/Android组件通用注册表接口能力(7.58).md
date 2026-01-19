---
title: "Android组件通用注册表接口能力(7.58)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/kabridge/core-component-api/core-component-api-758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# Android组件通用注册表接口能力(7.58)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| core-component-api | 能力组件 | 2.1.0-release | 7.58.0 |

## 功能简介
通过该 API 能力，可以获取能力组件

### 更新日志
- 新增 `getUserService` 与 `getGlobalService` 方法，支持按作用域获取用户级与全局级容器能力组件

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_android)

```kotlin
import com.ss.android.lark.core.spi.ISpiApi
import com.ss.android.lark.core.spi.SpiManager

val spi = SpiManager.getInstance().getSpi() ?: throw IllegalStateException("ISpiApi not initialized")
val service = spi.getGlobalService(YourInterface::class.java)
```

## INTERFACE
### ILoader
获取实例的接口。  
**建议使用注解的方式来注册，而不是手动使用 API 注册**

```kotlin
interface ILoader<T> {
    fun newInstance(): T // 获取实例
}
```

#### 方法列表
#### `fun newInstance(): T`
获取实例

**返回值**：实例

### ISpiApi
服务发现能力

```kotlin
interface ISpiApi {
    fun <T : Any> registerLoader(c: Class<T>, loader: ILoader<T>) // 注册接口的实现类
    fun <T : Any> loadClass(c: Class<T>): T // 获取接口的实现类
    fun <T : Any> getUserService(c: Class<T>): T? // 获取用户容器能力组件实现类
    fun <T : Any> getGlobalService(c: Class<T>): T? // 获取全局容器能力组件实现类
}
```

#### 方法列表
#### `fun <T : Any> registerLoader(c: Class<T>, loader: ILoader<T>)`
注册接口的实现类。  
**建议使用注解的方式来注册，而不是手动使用 API 注册**

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| c | Class<T> | 是 | 接口的类 |
| loader | ILoader<T> | 是 | 获取实例的接口 |

#### `fun <T : Any> loadClass(c: Class<T>): T`
获取接口的实现类

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| c | Class<T> | 是 | 接口的类 |

**返回值**：接口的实现类

#### `fun <T : Any> getUserService(c: Class<T>): T?`
获取用户容器能力组件实现类

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| c | Class<T> | 是 | 接口的类 |

**返回值**：接口的实现类

#### `fun <T : Any> getGlobalService(c: Class<T>): T?`
获取全局容器能力组件实现类

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| c | Class<T> | 是 | 接口的类 |

**返回值**：接口的实现类

## CLASS
### SpiManager
服务发现能力管理

```kotlin
class SpiManager private constructor() {
    companion object {
        fun getInstance(): SpiManager // 获取实例
    }
    fun setSpi(spiApi: ISpiApi) // 注册服务发现能力
    fun getSpi(): ISpiApi? // 获取服务发现能力
}
```

#### 方法列表
#### `fun getInstance(): SpiManager`
获取实例

**返回值**：SpiManager 单例

#### `fun setSpi(spiApi: ISpiApi)`
注册服务发现能力。  
**仅供飞书侧使用**

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| spiApi | ISpiApi | 是 | 服务发现能力 |

#### `fun getSpi(): ISpiApi?`
获取服务发现能力

**返回值**：服务发现能力

## 接入说明
通过原生集成工具，选择 2.0.2 及以上基线，启用 core-component-api 组件
