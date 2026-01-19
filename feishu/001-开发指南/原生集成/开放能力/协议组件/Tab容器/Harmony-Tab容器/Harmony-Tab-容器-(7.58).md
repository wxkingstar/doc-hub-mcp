---
title: "Harmony Tab 容器 (7.58)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/tab-container/harmony_tab_container/harmony-tab-container-758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507247000
---
最后更新于 2025-12-12

# Harmony Tab 容器 (7.58)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| ka_tab_api | 协议组件 | 1.0.0 | 7.58.0 |

## 功能简介
提供 Tab 页面配置能力，支持自定义标题栏、Tab 内容视图、点击与生命周期事件处理

### 更新日志
- 新增 ITabPageConfig 协议，用于注入 Tab 页面配置
- 新增 ITabTitleConfig 协议，用于配置标题栏
- 新增 ITabViewConfig 协议，用于处理 Tab 生命周期与点击事件
- 新增 TabTitleClickListener 与 TabViewClickListener 回调接口

## 示例代码
完整示例请查看 [SamplApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_harmony)

```ets
import { ITabPageConfig, ITabTitleConfig, ITabViewConfig } from '@ohos/ka_tab_api'
import { TabTitleClickListener } from '@ohos/ka_tab_api'
import { TabViewClickListener } from '@ohos/ka_tab_api'

@AutoBindNew(TrimisUserChannelScopeComponent)
export class MyTabPageConfigImpl implements ITabPageConfig {
  getAppId(): string {
    return 'com.example.app'
  }

getTabContent(): WrappedBuilder<[]> {
    return wrapBuilder(MyTabBuilder)
  }

getTabTitleConfig(): ITabTitleConfig {
    return new MyTabTitleConfigImpl()
  }

getTabViewConfig(): ITabViewConfig {
    return new MyTabViewConfigImpl()
  }
}

export class MyTabTitleConfigImpl implements ITabTitleConfig {
  getClickListener(): TabTitleClickListener {
    return {
      onClick: (uniqueId: number) => {
        console.info(`Title clicked, uniqueId: ${uniqueId}`)
      }
    }
  }

getFunctionButtonList(): WrappedBuilder<[string]>[] {
    return [wrapBuilder(MyFunctionButtonBuilder)]
  }

isShow(): boolean {
    return true
  }
}

export class MyTabViewConfigImpl implements ITabViewConfig {
  getClickListener(): TabViewClickListener {
    return {
      onSingleClick: () => {
        console.info('Tab single clicked')
      },
      onDoubleClick: () => {
        console.info('Tab double clicked')
      }
    }
  }

onShow(): void {
    console.info('Tab shown')
  }

onHide(): void {
    console.info('Tab hidden')
  }

onHandleBack(): boolean {
    console.info('Back handled by app')
    return true
  }
}
```

## INTERFACE
### ITabPageConfig
Tab 页面配置，客户侧实现该协议，并在实现类中添加 AutoBindNew(TrimisUserChannelScopeComponent) 装饰器，用于注入到容器中

```ets
interface ITabPageConfig {
  getAppId(): string // 获取原生应用ID标识
  getTabContent(): WrappedBuilder<[]> // 获取主Tab视图
  getTabTitleConfig(): ITabTitleConfig // 获取标题栏配置
  getTabViewConfig(): ITabViewConfig // 获取Tab 点击、展示等处理监听配置
}
```

#### 方法列表
#### `getAppId(): string`
获取原生应用 ID 标识

**返回值**：原生应用 ID

#### `getTabContent(): WrappedBuilder<[]>`
获取主 Tab 视图

**返回值**：返回由 WrappedBuilder 包裹的自定义 builder

#### `getTabTitleConfig(): ITabTitleConfig`
获取标题栏配置

**返回值**：标题栏配置

#### `getTabViewConfig(): ITabViewConfig`
获取 Tab 点击、展示等处理监听配置

**返回值**：点击、展示等生命周期处理配置

### ITabTitleConfig
标题栏配置

```ets
interface ITabTitleConfig {
  getClickListener(): TabTitleClickListener // 标题点击事件回调
  getFunctionButtonList(): WrappedBuilder<[string]>[] // 功能按钮列表配置
  isShow(): boolean // 是否展示标题栏
}
```

#### 方法列表
#### `getClickListener(): TabTitleClickListener`
标题点击事件回调

**返回值**：标题点击事件回调

#### `getFunctionButtonList(): WrappedBuilder<[string]>[]`
功能按钮列表配置

**返回值**：获取功能按钮列表，有 WrappedBuilder 包裹的自定义 Builder，构建参数 string 为 tab key

#### `isShow(): boolean`
是否展示标题栏

**返回值**：是否展示标题栏

### ITabViewConfig
导航栏页面点击、声明周期、返回键业务自定义处理器

```ets
interface ITabViewConfig {
  getClickListener(): TabViewClickListener // 导航栏图标点击回调
  onShow(): void // Tab页面展示
  onHide(): void // Tab页面隐藏
  onHandleBack(): boolean // 返回键处理
}
```

#### 方法列表
#### `getClickListener(): TabViewClickListener`
导航栏图标点击回调

**返回值**：导航栏图标点击回调

#### `onShow(): void`
Tab 页面展示

#### `onHide(): void`
Tab 页面隐藏

#### `onHandleBack(): boolean`
返回键处理

**返回值**：true 业务自行处理返回逻辑，false 默认返回处理

### TabTitleClickListener
标题栏点击事件回调

```ets
interface TabTitleClickListener {
  onClick(uniqueId: number): void // 点击事件回调
}
```

#### 方法列表
#### `onClick(uniqueId: number): void`
点击事件回调

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| uniqueId | number | 是 | 组件 uniqueId |

### TabViewClickListener
导航图标点击事件回调

```ets
interface TabViewClickListener {
  onSingleClick(): void // 当前Tab选中的条件下，单击
  onDoubleClick(): void // 当前Tab选中的条件下，双击
}
```

#### 方法列表
#### `onSingleClick(): void`
当前 Tab 选中的条件下，单击

#### `onDoubleClick(): void`
当前 Tab 选中的条件下，双击
