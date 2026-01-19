---
title: "Harmony WebContainer(7.58)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/webcontainer/harmony_webcontainer/harmony-webcontainer-758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507247000
---
最后更新于 2025-12-12

# Harmony WebContainer(7.58)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| alchemy_webcontainer_api | 协议组件 | 1.0.0 | 7.58.0 |

## 功能简介
提供 Harmony 平台网页容器的生命周期回调、错误页配置及主导航 Tab 切换通知能力

### 更新日志
- 新增 IAlchemyWebContainer 接口，支持网页容器打开、关闭、加载失败及 Tab 可见性变化回调
- 新增 AlchemyWebContainerCallback 回调接口，用于内部流程处理结果通知
- 新增 ErrorPageConfig 类，用于自定义错误页展示内容
- 新增 ErrorPageButtonConfig 类，用于配置错误页按钮
- 新增 TabParams 类，用于传递主导航模式下网页应用切换的业务参数

## 示例代码
完整示例请查看 [SamplApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_harmony)

```ets
import { IAlchemyWebContainer, AlchemyWebContainerCallback, ErrorPageConfig, TabParams } from '@ohos/alchemy_webcontainer_api'

export class MyAlchemyWebContainerImpl implements IAlchemyWebContainer {
  onOpen(url: string, componentUniqueId: number, callback: AlchemyWebContainerCallback): void {
    // 网页容器打开即将loadUrl的时候调用
    console.info(`onOpen: ${url}, componentUniqueId: ${componentUniqueId}`)
    callback.onSuccess()
  }

onClose(url: string, componentUniqueId: number): void {
    // 网页容器即将关闭的时候调用
    console.info(`onClose: ${url}, componentUniqueId: ${componentUniqueId}`)
  }

getErrorPageConfig(): ErrorPageConfig {
    // 当网页容器加载失败时，飞书会通过该接口获取错误页展示需要的配置信息
    return {
      customTitle: '网络错误',
      customContentTitle: '无法连接到服务器',
      customContent: '请检查网络设置后重试',
      hideBigImage: false
    }
  }

onTabVisibilityChanged(selected: boolean, tabParams: TabParams): void {
    // 主导航模式下手动切换Tab的时候调用
    console.info(`Tab visibility changed: ${selected}, currentUrl: ${tabParams.currentUrl}`)
  }
}
```

## INTERFACE
### IAlchemyWebContainer
网页容器生命周期及配置接口

```ets
interface IAlchemyWebContainer {
  onOpen(url: string, componentUniqueId: number, callback: AlchemyWebContainerCallback): void // 网页容器打开即将loadUrl的时候调用
  onClose(url: string, componentUniqueId: number): void // 网页容器即将关闭的时候调用
  getErrorPageConfig(): ErrorPageConfig // 当网页容器加载失败时，飞书会通过该接口获取错误页展示需要的配置信息
  onTabVisibilityChanged(selected: boolean, tabParams: TabParams): void // 主导航模式下手动切换Tab的时候调用
}
```

#### 方法列表
#### `onOpen(url: string, componentUniqueId: number, callback: AlchemyWebContainerCallback): void`
网页容器打开即将 loadUrl 的时候调用

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| url | string | 是 | 加载的 h5 url |
| componentUniqueId | number | 是 | 网页容器组件的 uniqueId |
| callback | AlchemyWebContainerCallback | 是 | 内部流程处理结果回调 |

#### `onClose(url: string, componentUniqueId: number): void`
网页容器即将关闭的时候调用

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| url | string | 是 | 即将关闭的页面 h5 url |
| componentUniqueId | number | 是 | 网页容器组件的 uniqueId |

#### `getErrorPageConfig(): ErrorPageConfig`
当网页容器加载失败时，飞书会通过该接口获取错误页展示需要的配置信息

**返回值**：错误页配置信息

#### `onTabVisibilityChanged(selected: boolean, tabParams: TabParams): void`
主导航模式下手动切换 Tab 的时候调用

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| selected | boolean | 是 | true 表示当前 Tab 被选中，false 表示当前 Tab 未被选中 |
| tabParams | TabParams | 是 | 主导航模式网页应用切换的时候一些业务参数 |

### AlchemyWebContainerCallback
内部流程处理结果回调接口

```ets
interface AlchemyWebContainerCallback {
  onSuccess(): void // 内部流程处理完成，通知网页容器继续加载
  onFail(code: number): void // 内部流程处理异常，通知网页容器展示错误页
}
```

#### 方法列表
#### `onSuccess(): void`
内部流程处理完成，通知网页容器继续加载

#### `onFail(code: number): void`
内部流程处理异常，通知网页容器展示错误页

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| code | number | 是 | 异常值，网页容器根据 code 值进行相应的错误展示 |

## CLASS
### ErrorPageConfig
错误页配置信息

```ets
class ErrorPageConfig {
  customTitle?: string // 错误页 Title
  customContentTitle?: string // 错误页内容Title, 加粗体
  customContent?: string // 错误页可配置内容, 换行展现
  hideBigImage?: boolean // 是否隐藏大图
  customVPNBtnConfig?: ErrorPageButtonConfig // VPN连接按钮配置信息
  customRefreshBtnConfig?: ErrorPageButtonConfig // 重试按钮配置信息
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| customTitle | string | 错误页 Title | - |
| customContentTitle | string | 错误页内容 Title, 加粗体 | - |
| customContent | string | 错误页可配置内容, 换行展现 | - |
| hideBigImage | boolean | 是否隐藏大图 | - |
| customVPNBtnConfig | ErrorPageButtonConfig | VPN 连接按钮配置信息 | - |
| customRefreshBtnConfig | ErrorPageButtonConfig | 重试按钮配置信息 | - |

### ErrorPageButtonConfig
按钮配置信息

```ets
class ErrorPageButtonConfig {
  hideBtn?: boolean // 是否隐藏按钮
  customText?: string // 按钮的文案
  customEvent?: string // 按钮的custom api event, 仅支持tt.
  customExtraString?: string // custom api event 参数
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| hideBtn | boolean | 是否隐藏按钮 | - |
| customText | string | 按钮的文案 | - |
| customEvent | string | 按钮的 custom api event, 仅支持 tt. | - |
| customExtraString | string | custom api event 参数 | - |

### TabParams
主导航模式下网页应用切换的业务参数

```ets
class TabParams {
  originalUrl?: string // 首次加载的链接
  currentUrl?: string // 当前正在展现页面的链接
  appId?: string // 应用 id
  componentUniqueId?: number // 网页容器组件的 uniqueId
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| originalUrl | string | 首次加载的链接 | - |
| currentUrl | string | 当前正在展现页面的链接 | - |
| appId | string | 应用 id | - |
| componentUniqueId | number | 网页容器组件的 uniqueId | - |
