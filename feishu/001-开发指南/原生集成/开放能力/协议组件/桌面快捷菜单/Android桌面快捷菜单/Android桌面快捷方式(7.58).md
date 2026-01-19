---
title: "Android桌面快捷方式(7.58)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/desktop-shortcut-menu/android_desktop_shortcut_menu/android-desktop-shortcut-menu-758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# Android快捷方式(7.58)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| shortcut-api | 协议组件 | 1.0.6-release | 7.58.0 |

## 功能简介
飞书开放桌面快捷方式菜单入口，通过该 API 开发者可以集成自有菜单到飞书桌面快捷方式

### 更新日志
- 新增 `@TrimisScope(ScopeType.GLOBAL)` 注解，声明该协议为全局作用域

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_android)

```kotlin
import com.ss.android.lark.core.spi.ISpiApi
import com.ss.android.lark.shortcut.IShortcutApi
import com.ss.android.lark.onload_api.IOnloadGlobalModule

class OnloadModuleImpl : IOnloadGlobalModule {
    override fun loadGlobalModule(globalSpiApi: ISpiApi?) {
        // 通过 SPI 获取快捷方式协议接口
        val shortcutApi = globalSpiApi?.getGlobalService(IShortcutApi::class.java)

// 获取快捷方式唯一 Id
        val id = shortcutApi?.getId(context)

// 其他方法省略...
    }
}
```

## INTERFACE
### IShortcutApi
飞书开放桌面快捷方式菜单入口，通过该 API 开发者可以集成自有菜单到飞书桌面快捷方式  
**注意**：能展示的快捷菜单数量是有限的，在不同的系统启动器上有不同的限制，而且飞书内置的快捷菜单优先级更高

```kotlin
@TrimisScope(ScopeType.GLOBAL)
interface IShortcutApi {
    fun getId(context: Context): String?          // 快捷方式唯一 Id
    @DrawableRes
    fun getIcon(context: Context): Int          // 桌面快捷方式菜单图标
    fun getShortLabel(context: Context): String // 桌面快捷方式短标签
    fun getLongLabel(context: Context): String  // 桌面快捷方式长标签
    fun getApplink(context: Context): String    // 快捷方式点击后跳转的飞书页面
}
```

#### 方法列表
#### `fun getId(context: Context): String?`
快捷方式唯一 Id。如果返回的 Id 为空，将不会展示快捷方式菜单

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | Context | 是 | Context |

**返回值**：唯一标识 Id

#### `fun getIcon(context: Context): Int`
桌面快捷方式菜单图标

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | Context | 是 | Context |

**返回值**：图标资源 Id

#### `fun getShortLabel(context: Context): String`
设置桌面快捷方式菜单文字

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | Context | 是 | Context |

**返回值**：快捷方式文字

#### `fun getLongLabel(context: Context): String`
设置桌面快捷方式菜单文字，展示逻辑同 [Android 原生 ShortcutInfo](https://developer.android.com/reference/android/content/pm/ShortcutInfo.Builder)

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | Context | 是 | Context |

**返回值**：快捷方式文字

#### `fun getApplink(context: Context): String`
快捷方式点击之后跳转的飞书页面，支持飞书 AppLink

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | Context | 是 | Context |

**返回值**：页面 App Link。支持的 AppLink 见 [飞书 AppLink](https://open.feishu.cn/document/uYjL24iN/ucjN1UjL3YTN14yN2UTN)

## ANNOTATION
### ShortcutImpl
标记 `IShortcutApi` 的实现类

```java
@BasePlugin(value = IShortcutApi.class)
@interface ShortcutImpl {
}
```
