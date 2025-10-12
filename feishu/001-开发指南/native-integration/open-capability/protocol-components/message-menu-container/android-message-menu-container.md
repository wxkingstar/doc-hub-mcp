<!--
title: Android消息菜单容器
id: 7323094391425630236
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/message-menu-container/android-message-menu-container
updatedAt: 1745906634000
source: https://open.feishu.cn/document/native-integration/open-capability/protocol-components/message-menu-container/android-message-menu-container
-->
# Android消息菜单容器

| 组件类型 |最低飞书版本|生效基线|
|------|--|--|
| 协议组件 |7.1|2.4.5及以上|

## 组件说明
开发者可以根据自身业务需求，在飞书聊天页面消息菜单中增加自定义的菜单，并处理相应的点击逻辑。

## 流程概述
```
       ┌─┐                                                                                
       ║"│                                                                                
       └┬┘                                                                                
       ┌┼┐                                                                                
        │             ┌─────────────────┐               ┌────┐                            
       ┌┴┐            │MessageActionImpl│               │Lark│                            
      User            └────────┬────────┘               └──┬─┘                            
        │              Trigger action menu                ┌┴┐                             
        │───────────────────────────────────────────────> │ │                             
        │                      │                          │ │                             
        │                      │                          │ │ ────┐                       
        │                      │                          │ │     │ Show action menu      
        │                      │                          │ │ <───┘                       
        │                      │                          │ │                             
        │                      │       isVisible          │ │                             
        │                      │<─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  │ │                             
        │                      │                          │ │                             
        │                      │       true/false         │ │                             
        │                      │────────────────────────> │ │                             
        │                      │                          │ │                             
        │                      │                          │ │                             
        │   ╔══════╤═══════════╪══════════════════════════╪═╪════════════════════════════╗
        │   ║ ALT  │  isVisible│                          │ │                            ║
        │   ╟──────┘           │                          │ │                            ║
        │   ║                  │        getIcon           │ │                            ║
        │   ║                  │<──────────────────────── │ │                            ║
        │   ║                  │                          │ │                            ║
        │   ║                  │        Drawable          │ │                            ║
        │   ║                  │ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─> │ │                            ║
        │   ║                  │                          │ │                            ║
        │   ║                  │        getLabel          │ │                            ║
        │   ║                  │<──────────────────────── │ │                            ║
        │   ║                  │                          │ │                            ║
        │   ║                  │         Label            │ │                            ║
        │   ║                  │ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─> │ │                            ║
        │   ║                  │                          │ │                            ║
        │   ║                  │                          │ │ ────┐                      ║
        │   ║                  │                          │ │     │ Show action          ║
        │   ║                  │                          │ │ <───┘                      ║
        │   ╠══════════════════╪══════════════════════════╪═╪════════════════════════════╣
        │   ║ [invisible]      │                          │ │                            ║
        │   ║                  │                          │ │ ────┐                      ║
        │   ║                  │                          │ │     │ Ignore action        ║
        │   ║                  │                          │ │ <───┘                      ║
        │   ╚══════════════════╪══════════════════════════╪═╪════════════════════════════╝
        │                      │                          └┬┘                             
        │                  Click action                    │                              
        │─────────────────────────────────────────────────>│                              
        │                      │                           │                              
        │                      │         onClick           │                              
        │                      │<──────────────────────────│                              
        │                      │                           │                              
        │                      │────┐                      │                              
        │                      │    │ Execute custom logic │                              
        │                      │<───┘                      │                              
      User            ┌────────┴────────┐               ┌──┴─┐                            
       ┌─┐            │MessageActionImpl│               │Lark│                            
       ║"│            └─────────────────┘               └────┘                            
       └┬┘                                                                                
       ┌┼┐                                                                                
        │                                                                                 
       ┌┴┐                                                                                

```

## API 列表
### message-action-api

#### Packages

| Name |
|---|
| com.ss.android.lark.message.action |
| com.ss.android.lark.message.action.model |








/com.ss.android.lark.message.action

### IMessageActionApi

interface IMessageActionApi

在飞书聊天页面消息菜单中增加自定义的菜单项，并处理相应的点击逻辑。

例子： [TestDownloadResource](https://github.com/larksuite/alchemy_app_demo/blob/main/alchemy_app_demo_android/message-action-api-impl/src/main/java/com/sample/android/alchemy/message/TestDownloadResource.kt)

#### Functions

| Name | Summary |
|---|---|
| getIcon | abstract fun getIcon(context: Context): Drawable<br>自定义菜单项的左侧icon图标。 |
| getLabel | abstract fun getLabel(context: Context): String<br>自定义菜单项的标题。 |
| isVisible | abstract fun isVisible(context: Context, actionContext: ActionContext): Boolean<br>飞书依据该接口返回值，决定是否展示该菜单 |
| onClick | abstract fun onClick(context: Context, actionContext: ActionContext)<br>菜单项点击时的回调。 |


##### getIcon

abstract fun getIcon(context: Context): Drawable

自定义菜单项的左侧icon图标。

###### Return

菜单项的左侧图标。

###### Parameters

| Name | Description |
|---|---|
| context | Context。 |


##### getLabel

abstract fun getLabel(context: Context): String

自定义菜单项的标题。

###### Return

菜单项的标题。

###### Parameters

| Name | Description |
|---|---|
| context | Context。 |


##### isVisible

abstract fun isVisible(context: Context, actionContext: ActionContext): Boolean

飞书依据该接口返回值，决定是否展示该菜单

###### Return

是否展示该菜单。

###### Parameters

| Name | Description |
|---|---|
| context | Context。 |
| actionContext | 对话上下文。 |


##### onClick

abstract fun onClick(context: Context, actionContext: ActionContext)

菜单项点击时的回调。

###### Parameters

| Name | Description |
|---|---|
| context | Context。 |
| actionContext | 对话上下文。 |


/com.ss.android.lark.message.action

### MessageActionApi

annotation class MessageActionApi

标记 IMessageActionApi 的实现类。


/com.ss.android.lark.message.action.model

### ActionChat

open class ActionChat

对话信息。

#### Constructors

- 
   constructor()

#### Properties

| Name | Summary |
|---|---|
| chatId | open var chatId: String |


##### ActionChat

constructor()


/com.ss.android.lark.message.action.model

### ActionContext

open class ActionContext

消息操作上下文。

#### Constructors

- 
   constructor()

#### Properties

| Name | Summary |
|---|---|
| actionChat | open var actionChat: ActionChat |
| actionMessages | open var actionMessages: List&lt;ActionMessage&gt; |
| actionMode | open var actionMode: ActionMode |


##### ActionContext

constructor()


/com.ss.android.lark.message.action.model

### ActionMessage

open class ActionMessage

选中的消息。

#### Constructors

- 
   constructor()

#### Types

| Name | Summary |
|---|---|
| Type | enum Type<br>消息类型。 转发场景目前仅实现了FILE |

#### Properties

| Name | Summary |
|---|---|
| messageId | open var messageId: String |
| messageType | open var messageType: ActionMessage.Type |


##### ActionMessage

constructor()


/com.ss.android.lark.message.action.model

### ActionMode

enum ActionMode

对话选择模式。

#### Entries

| Name | Description |
|---|---|
| SINGLE | 单选。 |
| MULTI | 多选。 |


/com.ss.android.lark.message.action.model/ActionMessage

### Type

enum Type

消息类型。 

转发场景目前仅实现了FILE

#### Entries

| Name | Description |
|---|---|
| FILE | 文本消息。 |
| IMAGE | 图片消息。 |
| MEDIA | 视频消息。 |
| OTHERS | 其他消息。 |


## 接入说明
通过原生集成工具，选择 2.4.5 及以上基线，并启用message-action-api组件，实现IMessageActionApi

## 更新日志
| 版本号           |Release Note|
|---------------|---|
| 1.0.0-release |新功能：功能开放|

