---
title: "Android组件通用注册表接口能力"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/kabridge/android-spi
last_remote_update: 2025-04-29
last_remote_update_timestamp: 1745906654000
---
最后更新于 2025-04-29

# Android组件通用注册表接口能力

|组件类型| 最低飞书版本 | 生效基线       |
|--|--------|------------|
|能力组件| 5.22   | 2.0.2及以上基线 |

## 组件说明
通过该API能力，可以获取能力组件。

## API 列表
### core-component-api

#### Packages

| Name |
|---|
| com.ss.android.lark.core.spi |

/com.ss.android.lark.core.spi

### ILoader

interface ILoader&lt;T&gt;

获取实例的接口。

建议使用注解的方式来注册，而不是手动使用API注册。

###### Parameters

| Name | Description |
|---|---|
| T | 实例类型 |

#### Functions

| Name | Summary |
|---|---|
| newInstance | abstract fun newInstance(): T<br>获取实例 |

##### newInstance

abstract fun newInstance(): T

获取实例

###### Return

实例

/com.ss.android.lark.core.spi

### ISpiApi

interface ISpiApi

服务发现能力。

#### Functions

| Name | Summary |
|---|---|
| loadClass | abstract fun &lt;T : Any&gt; loadClass(c: Class&lt;T&gt;): T<br>获取接口的实现类。 |
| registerLoader | abstract fun &lt;T : Any&gt; registerLoader(c: Class&lt;T&gt;, loader: ILoader&lt;T&gt;)<br>注册接口的实现类。 |

##### loadClass

abstract fun &lt;T : Any&gt; loadClass(c: Class&lt;T&gt;): T

获取接口的实现类。

###### Return

接口的实现类

###### Parameters

| Name | Description |
|---|---|
| T | 接口的类型 |
| c | 接口的类 |

##### registerLoader

abstract fun &lt;T : Any&gt; registerLoader(c: Class&lt;T&gt;, loader: ILoader&lt;T&gt;)

注册接口的实现类。

建议使用注解的方式来注册，而不是手动使用API注册。

###### Parameters

| Name | Description |
|---|---|
| T | 接口的类型 |
| c | 接口的类 |
| loader | 获取实例的接口 |

/com.ss.android.lark.core.spi

### SpiManager

class SpiManager

服务发现能力管理。

#### Samples

```kotlin

fun main() { 
    val spi = SpiManager.getInstance().getSpi() ?: throw IllegalStateException("ISpiApi not initialized")

try {
        val xx = spi.loadClass(ExampleInterface::class.java)
        xx.foo()
    } catch (t: Throwable) {
        // fallback logic
    }
}
```

#### Types

| Name | Summary |
|---|---|
| Companion | object Companion |

#### Functions

| Name | Summary |
|---|---|
| getSpi | fun getSpi(): ISpiApi?<br>获取服务发现能力。 |
| setSpi | fun setSpi(spiApi: ISpiApi)<br>注册服务发现能力。 |

##### getSpi

fun getSpi(): ISpiApi?

获取服务发现能力。

###### Return

服务发现能力。

##### setSpi

fun setSpi(spiApi: ISpiApi)

注册服务发现能力。

仅供飞书侧使用!

###### Parameters

| Name | Description |
|---|---|
| spiApi | 服务发现能力。 |

/com.ss.android.lark.core.spi/SpiManager

### Companion

object Companion

#### Functions

| Name | Summary |
|---|---|
| getInstance | fun getInstance(): SpiManager<br>获取实例。 |

##### getInstance

fun getInstance(): SpiManager

获取实例。

## 接入说明
通过原生集成工具，选择 2.0.2 及以上基线，启用 core-component-api 组件

## 更新日志
|版本号| Release Note |
|---|--------------|
|1.0.0| 新能力          |
