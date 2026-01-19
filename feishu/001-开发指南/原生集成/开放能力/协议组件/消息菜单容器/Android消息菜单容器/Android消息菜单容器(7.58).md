---
title: "Android消息菜单容器(7.58)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/message-menu-container/android-message-menucontainer/android-message-menu-container-758
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507247000
---
最后更新于 2025-12-12

# Android消息菜单容器(7.58)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | -- | --- | --- |
| message-action-api | 协议组件 | 1.0.5-release | 7.58.0 |

## 功能简介
在飞书聊天页面消息菜单中增加自定义的菜单项，并处理相应的点击逻辑

### 更新日志
- 新增 `@TrimisScope(ScopeType.USER)` 注解，限定接口作用域为 USER

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_android)

```java
import com.ss.android.lark.message.action.IMessageActionApi;
import com.ss.android.lark.message.action.model.ActionContext;
import com.ss.android.lark.plugin.annotation.TrimisImpl;
import android.content.Context;
import android.graphics.drawable.Drawable;

@TrimisImpl(IMessageActionApi.class)
public class MessageActionImpl implements IMessageActionApi {
    @Override
    public Drawable getIcon(Context context) {
        // 返回菜单图标
        return context.getDrawable(R.drawable.ic_custom);
    }

@Override
    public String getLabel(Context context) {
        // 返回菜单标题
        return "自定义操作";
    }

@Override
    public boolean isVisible(Context context, ActionContext actionContext) {
        // 根据业务逻辑决定是否展示
        return true;
    }

@Override
    public void onClick(Context context, ActionContext actionContext) {
        // 处理点击事件
    }
}
```

## INTERFACE
### IMessageActionApi
在飞书聊天页面消息菜单中增加自定义的菜单项，并处理相应的点击逻辑

```kotlin
@TrimisScope(ScopeType.USER)
interface IMessageActionApi {
    fun getIcon(context: Context): Drawable // 自定义菜单项的左侧 icon 图标
    fun getLabel(context: Context): String // 自定义菜单项的标题
    fun isVisible(context: Context, actionContext: ActionContext): Boolean // 飞书依据该接口返回值，决定是否展示该菜单
    fun onClick(context: Context, actionContext: ActionContext) // 菜单项点击时的回调
}
```

#### 方法列表
#### `getIcon(context: Context): Drawable`
自定义菜单项的左侧 icon 图标

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | Context | 是 | Context |

**返回值**：菜单项的左侧图标

#### `getLabel(context: Context): String`
自定义菜单项的标题

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | Context | 是 | Context |

**返回值**：菜单项的标题

#### `isVisible(context: Context, actionContext: ActionContext): Boolean`
飞书依据该接口返回值，决定是否展示该菜单

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | Context | 是 | Context |
| actionContext | ActionContext | 是 | 对话上下文 |

**返回值**：是否展示该菜单

#### `onClick(context: Context, actionContext: ActionContext)`
菜单项点击时的回调

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| context | Context | 是 | Context |
| actionContext | ActionContext | 是 | 对话上下文 |

## CLASS
### ActionChat
对话信息

```java
class ActionChat {
    String getChatId() // 获取对话 ID
    void setChatId(String chatId) // 设置对话 ID，仅供飞书侧调用！
}
```

### ActionContext
消息操作上下文

```java
class ActionContext {
    ActionChat getActionChat() // 获取对话信息
    void setActionChat(ActionChat actionChat) // 设置对话信息，仅供飞书侧调用！
    ActionMode getActionMode() // 获取对话选择模式
    void setActionMode(ActionMode actionMode) // 设置对话选择模式，仅供飞书侧调用！
    List<ActionMessage> getActionMessages() // 获取消息列表
    void setActionMessages(List<ActionMessage> actionMessages) // 设置消息列表，仅供飞书侧调用！
}
```

### ActionMessage
选中的消息

```java
class ActionMessage {
    String getMessageId() // 获取消息 ID
    void setMessageId(String messageId) // 设置消息 ID，仅供飞书侧调用！
    Type getMessageType() // 获取消息类型
    void setMessageType(Type type) // 设置消息类型，仅供飞书侧调用！
}
```

## ENUM
### ActionMode
对话选择模式

```java
enum ActionMode {
    SINGLE, // 单选
    MULTI   // 多选
}
```

#### 枚举成员
| 成员名 | 值 | 描述 |
| --- | --- | --- |
| SINGLE | 0 | 单选 |
| MULTI | 1 | 多选 |

### ActionMessage.Type
消息类型。转发场景目前仅实现了 FILE

```java
enum Type {
    FILE,   // 文本消息
    IMAGE,  // 图片消息
    MEDIA,  // 视频消息
    OTHERS  // 其他消息
}
```

#### 枚举成员
| 成员名 | 值 | 描述 |
| --- | --- | --- |
| FILE | 0 | 文本消息 |
| IMAGE | 1 | 图片消息 |
| MEDIA | 2 | 视频消息 |
| OTHERS | 3 | 其他消息 |

## ANNOTATION
### MessageActionApi
标记 IMessageActionApi 的实现类

```java
@BasePlugin(value = IMessageActionApi.class)
@interface MessageActionApi {
}
```
