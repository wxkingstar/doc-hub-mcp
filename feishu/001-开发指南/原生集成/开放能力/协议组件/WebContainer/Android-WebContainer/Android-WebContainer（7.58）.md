---
title: "Android WebContainer（7.58）"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/webcontainer/android_webcontainer/android-webcontainer-758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507247000
---
最后更新于 2025-12-12

# Android Web容器（7.58）

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| web-container-api | 协议组件 | 1.2.2-release | 7.58.0 |

## 功能简介
飞书网页容器提供了回调接口，用于在打开和关闭 web 页面时进行处理。同时，该组件还支持定制错误页的内容和处理按钮点击事件。

### 更新日志
- 新增 `@TrimisScope(ScopeType.USER)` 注解，明确接口作用域为用户级
- 新增 `TabParams` 类，用于传递主导航模式下网页应用切换的业务参数
- 新增 `WebContainerApiImpl` 注解，用于标记 `IWebContainerApi` 的实现类

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_android)

```java
import com.ss.android.lark.plugin.annotation.TrimisImpl;
import com.ss.android.lark.web.IWebContainerApi;

@TrimisImpl(IWebContainerApi.class)
public class WebContainerService10 implements IWebContainerApi {
    @Override
    public void onOpen(String url, IWebContainerApi.Callback callback) {
        // 处理打开网页前的逻辑
        callback.onSuccess();
    }

@Override
    public void onClose(String url) {
        // 处理网页关闭后的逻辑
    }

@Override
    public void onTabVisibilityChanged(boolean selected, TabParams tabParams) {
        // 处理 Tab 可见性变化
    }

@Override
    public ErrorPageConfig getErrorPageConfig() {
        // 返回错误页配置
        return null;
    }
}
```

## INTERFACE
### IWebContainerApi
飞书网页容器提供了回调接口，用于在打开和关闭 web 页面时进行处理。同时，该组件还支持定制错误页的内容和处理按钮点击事件。

```kotlin
@TrimisScope(ScopeType.USER)
interface IWebContainerApi {
    fun onOpen(url: String, callback: Callback) // 网页容器打开即将loadUrl的时候调用
    fun onClose(url: String) // 网页容器即将关闭的时候调用
    fun onTabVisibilityChanged(selected: Boolean, tabParams: TabParams) // 主导航模式下手动切换Tab的时候调用
    fun getErrorPageConfig(): ErrorPageConfig? // 当网页容器加载失败时，飞书会通过该接口获取错误页展示需要的配置信息

interface Callback {
        fun onSuccess() // 内部流程处理完，通知网页容器继续加载
        fun onFail(code: Int) // 内部流程处理异常，通知网页容器展示错误页
    }
}
```

#### 方法列表
#### `onOpen(url: String, callback: Callback)`
网页容器打开即将 loadUrl 的时候调用

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| url | String | 是 | 加载的 h5 url |
| callback | Callback | 是 | 回调接口 |

#### `onClose(url: String)`
网页容器即将关闭的时候调用

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| url | String | 是 | 即将关闭的页面 h5 url |

#### `onTabVisibilityChanged(selected: Boolean, tabParams: TabParams)`
主导航模式下手动切换 Tab 的时候调用

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| selected | Boolean | 是 | true 表示当前 Tab 被选中，false 表示当前 Tab 未被选中 |
| tabParams | TabParams | 是 | 主导航模式网页应用切换的时候一些业务参数 |

#### `getErrorPageConfig(): ErrorPageConfig?`
当网页容器加载失败时，飞书会通过该接口获取错误页展示需要的配置信息

**返回值**：错误页配置信息，可能为 null

## CLASS
### ErrorPageConfig
错误页配置。

```java
class ErrorPageConfig {
    private String customTitle; // 错误页 Title
    private String customContentTitle; // 错误页内容Title, 加粗体
    private String customContent; // 错误页可配置内容, 换行展现
    private boolean hideBigImage; // 隐藏背景大图, 默认不隐藏
    private ButtonConfig customVPNBtnConfig; // VPN连接按钮配置信息
    private ButtonConfig customRefreshBtnConfig; // 重试按钮配置信息

void setCustomTitle(String customTitle) // 设置标题
    void setCustomContentTitle(String customContentTitle) // 设置内容标题
    void setCustomContent(String customContent) // 设置内容
    void setHideBigImage(boolean hideBigImage) // 设置是否隐藏背景大图
    void setCustomVPNBtnConfig(ButtonConfig customVPNBtnConfig) // 设置VPN按钮配置信息
    void setCustomRefreshBtnConfig(ButtonConfig customRefreshBtnConfig) // 设置重试按钮配置信息
    String getCustomTitle() // 获取标题
    String getCustomContentTitle() // 获取内容标题
    String getCustomContent() // 获取内容
    boolean isHideBigImage() // 是否隐藏背景大图
    ButtonConfig getCustomVPNBtnConfig() // 获取VPN按钮配置信息
    ButtonConfig getCustomRefreshBtnConfig() // 获取重试按钮配置信息
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| customTitle | String | 错误页 Title | null |
| customContentTitle | String | 错误页内容 Title，加粗体 | null |
| customContent | String | 错误页可配置内容，换行展现 | null |
| hideBigImage | boolean | 是否隐藏背景大图 | false |
| customVPNBtnConfig | ButtonConfig | VPN 连接按钮配置信息 | null |
| customRefreshBtnConfig | ButtonConfig | 重试按钮配置信息 | null |

#### 方法列表
#### `setCustomTitle(customTitle: String)`
设置标题

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| customTitle | String | 是 | 标题 |

#### `setCustomContentTitle(customContentTitle: String)`
设置内容标题

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| customContentTitle | String | 是 | 内容标题 |

#### `setCustomContent(customContent: String)`
设置内容

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| customContent | String | 是 | 内容 |

#### `setHideBigImage(hideBigImage: boolean)`
设置是否隐藏背景大图

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| hideBigImage | boolean | 是 | 是否隐藏背景大图 |

#### `setCustomVPNBtnConfig(customVPNBtnConfig: ButtonConfig)`
设置 VPN 按钮配置信息

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| customVPNBtnConfig | ButtonConfig | 是 | VPN 按钮配置信息 |

#### `setCustomRefreshBtnConfig(customRefreshBtnConfig: ButtonConfig)`
设置重试按钮配置信息

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| customRefreshBtnConfig | ButtonConfig | 是 | 重试按钮配置信息 |

#### `getCustomTitle(): String`
获取标题

**返回值**：标题，可能为 null

#### `getCustomContentTitle(): String`
获取内容标题

**返回值**：内容标题，可能为 null

#### `getCustomContent(): String`
获取内容

**返回值**：内容，可能为 null

#### `isHideBigImage(): boolean`
是否隐藏背景大图

**返回值**：是否隐藏背景大图

#### `getCustomVPNBtnConfig(): ButtonConfig`
获取 VPN 按钮配置信息

**返回值**：VPN 按钮配置信息，可能为 null

#### `getCustomRefreshBtnConfig(): ButtonConfig`
获取重试按钮配置信息

**返回值**：重试按钮配置信息，可能为 null

### TabParams
主导航模式下网页应用切换的时候一些业务参数。

```java
class TabParams {
    public String originalUrl; // originalUrl: 首次加载的链接
    public String currentUrl; // currentUrl: 当前正在展现页面的链接
    public String appId; // appId: 应用id
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| originalUrl | String | 首次加载的链接 | null |
| currentUrl | String | 当前正在展现页面的链接 | null |
| appId | String | 应用 id | null |

### ErrorPageConfig.ButtonConfig
按钮配置信息

```java
class ButtonConfig {
    private boolean hideBtn; // 隐藏错误页可点击按钮,默认不隐藏
    private String customText; // 按钮的文案
    private String customEvent; // 按钮的custom api event, 仅支持tt.invokeCustomApi能调通的API
    private String customExtraString; // custom api event 参数

void setHideBtn(boolean hideBtn) // 设置是否隐藏按钮
    void setCustomText(String customText) // 设置按钮的文案
    void setCustomEvent(String customEvent) // 设置按钮的custom api event
    void setCustomExtraString(String customExtraString) // 设置按钮的custom api event参数
    boolean isHideBtn() // 是否隐藏按钮
    String getCustomText() // 获取按钮的文案
    String getCustomEvent() // 获取按钮的custom api event
    String getCustomExtraString() // 获取按钮的custom api event参数
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| hideBtn | boolean | 是否隐藏按钮 | false |
| customText | String | 按钮的文案 | null |
| customEvent | String | 按钮的 custom api event | null |
| customExtraString | String | custom api event 参数 | null |

#### 方法列表
#### `setHideBtn(hideBtn: boolean)`
设置是否隐藏按钮

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| hideBtn | boolean | 是 | 是否隐藏按钮 |

#### `setCustomText(customText: String)`
设置按钮的文案

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| customText | String | 是 | 按钮的文案 |

#### `setCustomEvent(customEvent: String)`
设置按钮的 custom api event

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| customEvent | String | 是 | 按钮的 custom api event |

#### `setCustomExtraString(customExtraString: String)`
设置按钮的 custom api event 参数

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| customExtraString | String | 是 | 按钮的 custom api event 参数 |

#### `isHideBtn(): boolean`
是否隐藏按钮

**返回值**：是否隐藏按钮

#### `getCustomText(): String`
获取按钮的文案

**返回值**：按钮的文案，可能为 null

#### `getCustomEvent(): String`
获取按钮的 custom api event

**返回值**：按钮的 custom api event，可能为 null

#### `getCustomExtraString(): String`
获取按钮的 custom api event 参数

**返回值**：按钮的 custom api event 参数，可能为 null

## ANNOTATION
### WebContainerApiImpl
标记 IWebContainerApi 的实现类

```java
@BasePlugin(value = IWebContainerApi.class)
@interface WebContainerApiImpl
```
