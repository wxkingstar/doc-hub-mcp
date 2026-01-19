---
title: "Harmony桌面快捷菜单(7.58)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/desktop-shortcut-menu/harmony-desktop-shortcut-menu-758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507247000
---
最后更新于 2025-12-12

# Harmony桌面快捷菜单(7.58)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| message_action | 协议组件 | 1.0.0 | 7.58.0 |

## 功能简介
消息菜单配置，客户侧实现该协议并注入到容器中

### 更新日志
- 首次发布，提供消息菜单动作配置能力

## 示例代码
完整示例请查看 [SamplApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_harmony)

```ets
import { IMessageAction } from '@ohos/alchemy_message_action_api'
import { ActionContext } from '@api/message'

export class MyMessageActionImpl implements IMessageAction {
  getIcon(): Resource {
    return $r('app.media.icon_action')
  }

getText(): ResourceStr {
    return $r('app.string.action_title')
  }

isVisible(context: ActionContext): boolean {
    return context.messageType === 'text'
  }

onClick(context: ActionContext): void {
    console.info('Action clicked for message:', context.messageId)
  }
}
```

## INTERFACE
### IMessageAction
消息菜单配置，客户侧实现该协议并注入到容器中

```ets
interface IMessageAction {
  readonly getIcon: () => Resource // 获取图片配置
  readonly getText: () => ResourceStr // 获取标题配置
  readonly isVisible: (context: ActionContext) => boolean // 获取是否展示配置
  readonly onClick: (context: ActionContext) => void // 获取点击事件配置
}
```

#### 方法列表
#### `getIcon()`
获取图片配置

**返回值**：图片资源

#### `getText()`
获取标题配置

**返回值**：标题资源

#### `isVisible(context: ActionContext)`
获取是否展示配置

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | ActionContext | 是 | 消息菜单上下文 |

**返回值**：是否展示

#### `onClick(context: ActionContext)`
获取点击事件配置

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | ActionContext | 是 | 消息菜单上下文 |
