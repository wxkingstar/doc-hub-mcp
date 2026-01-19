---
title: "Android Tab容器(7.58)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/tab-container/android_tab_container/android-tab-container-758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507247000
---
最后更新于 2025-12-12

# Android Tab容器(7.58)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- |------| --- | --- |
| tab-container-api | 协议组件 | 2.0.7-release | 7.58.0 |

## 功能简介
开发者可根据自身业务需求，在飞书应用中增加自定义 Tab，提供更丰富和个性化的功能与内容展示，提升用户体验和工作效率，使应用更易访问

### 更新日志
- 新增 `@TrimisScope(ScopeType.USER)` 注解，明确接口作用域为用户级
- 其余接口定义与行为保持不变，历史实现无需改动

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_android)

```kotlin
import com.ss.android.lark.plugin.annotation.TrimisImpl
import com.ss.android.lark.tab.ITabPageConfig

@TrimisImpl(ITabPageConfig::class)
class TabPageConfigImpl10 : ITabPageConfig {
    override fun getAppId(): String = "your_app_id"

override fun getTabViewConfig(): ITabPageConfig.ITabViewConfig? = null

override fun interceptBackPress(): Boolean = false

override fun getTabContent(): Fragment = YourTabFragment()

override fun getTabTitleConfig(): ITabPageConfig.ITabTitleConfig? = null
}
```

## INTERFACE
### ITabPageConfig
Tab页面配置

```kotlin
@TrimisScope(ScopeType.USER)
interface ITabPageConfig {
    fun getAppId(): String // 获取原生应用ID标识
    fun getTabViewConfig(): ITabViewConfig? // 获取导航栏展示的Tab图标及文字内容相关配置
    fun interceptBackPress(): Boolean // 响应页面内的设备返回按键事件（仅Android系统提供）
    fun getTabContent(): Fragment // 获取主Tab视图，生命周期回调由视图内原生组件承载
    fun getTabTitleConfig(): ITabTitleConfig? // 获取标题栏配置
}
```

#### 方法列表
#### `getAppId()`
获取原生应用ID标识

**返回值**：String - 原生应用ID

#### `getTabViewConfig()`
获取导航栏展示的Tab图标及文字内容相关配置

**返回值**：ITabViewConfig? - 导航栏展示的Tab图标及文字内容相关配置，可空

#### `interceptBackPress()`
响应页面内的设备返回按键事件（仅 Android 系统提供）

**返回值**：Boolean - 是否拦截返回键

#### `getTabContent()`
获取主 Tab 视图，生命周期回调由视图内原生组件承载

**返回值**：Fragment - 主 Tab 视图

#### `getTabTitleConfig()`
获取标题栏配置

**返回值**：ITabTitleConfig? - 标题栏配置，可空

### ITabPageConfig.ITabViewConfig
导航栏图标的配置

```kotlin
interface ITabViewConfig {
    fun getClickListener(): TabViewClickListener? // 导航栏图标点击回调
}
```

#### 方法列表
#### `getClickListener()`
导航栏图标点击回调

**返回值**：TabViewClickListener? - Tab 菜单点击事件回调，可空

### ITabPageConfig.ITabTitleConfig
标题栏配置

```kotlin
interface ITabTitleConfig {
    fun isShow(): Boolean // 是否展示标题栏
    fun getFunctionButtonList(context: Context): List<IFunctionButton>? // 功能按钮列表配置
    fun getClickListener(): TabTitleClickListener? // 标题点击事件回调
}
```

#### 方法列表
#### `isShow()`
是否展示标题栏

**返回值**：Boolean - 是否展示标题栏

#### `getFunctionButtonList(context: Context)`
功能按钮列表配置

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | Context | 是 | 上下文 |

**返回值**：List<IFunctionButton>? - 功能按钮列表，可空

#### `getClickListener()`
标题点击事件回调

**返回值**：TabTitleClickListener? - ClickListener，可空

### ITabPageConfig.ITabTitleConfig.IFunctionButton
功能按钮接口

```kotlin
interface IFunctionButton {
    fun getContentView(): View // 获取功能按钮View，点击事件交由业务方自行处理
}
```

#### 方法列表
#### `getContentView()`
获取功能按钮 View，点击事件交由业务方自行处理

**返回值**：View - 功能按钮 View

### ITabPageConfig.TabViewClickListener
TabView 点击事件回调

```kotlin
interface TabViewClickListener {
    fun onSingleClick() // 当前TabView选中的条件下，单击
    fun onDoubleClick() // 当前TabView选中的条件下，双击
}
```

#### 方法列表
#### `onSingleClick()`
当前 TabView 选中的条件下，单击

#### `onDoubleClick()`
当前 TabView 选中的条件下，双击

### ITabPageConfig.TabTitleClickListener
标题栏点击事件回调

```kotlin
interface TabTitleClickListener {
    fun onClick() // 点击事件回调
}
```

#### 方法列表
#### `onClick()`
点击事件回调

## ANNOTATION
### TabPageConfig
标记 ITabPageConfig 的实现类

```java
@BasePlugin(value = ITabPageConfig.class)
@interface TabPageConfig {
}
```
