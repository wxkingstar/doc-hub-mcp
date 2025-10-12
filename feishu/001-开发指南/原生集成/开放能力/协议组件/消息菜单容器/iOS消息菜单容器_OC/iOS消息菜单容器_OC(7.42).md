---
title: "iOS消息菜单容器_OC(7.42)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/message-menu-container/menusexternal_oc/menusexternal_oc_742
last_remote_update: 2025-04-21
last_remote_update_timestamp: 1745215551000
---
最后更新于 2025-04-21

# iOS消息菜单容器_OC(7.42) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKMenusExternal | 1.1.1 | 该组件提供消息菜单注册能力，开发者可以根据自身业务需要，在飞书的聊天页面消息菜单中自定义注册菜单，并处理相应的点击逻辑 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objectivec
@import LKKABridge; // 引入 KAAPI_REGISTER 宏
@import LKMenusExternal;
#import "ka_auto_generated.h"

/// 注册类，用于在加载动态库时调用`+load`方法完成注册
@interface LKMenusExternalRegistry: NSObject

@end

@implementation LKMenusExternalRegistry

+(void)load {
    NSString * channel = [NSString stringWithUTF8String:getChannel()];
    KAAPI *api = [[KAAPI alloc] initWithChannel:channel];    
    [KAAPI_REGISTER registerWithMenu:^id<KAMenusProtocol> {
            return [[LKMenusExternalIMP alloc] init];
        } cache:YES];
}

@end

/// `KAMenusProtocol`协议实现类
@interface LKMenusExternalIMP : NSObject<KAMenusProtocol>
...
@end

@implementation LKMenusExternalIMP
...
@end
```

## _KAAPIWrapper(SWIFT_EXTENSIONLKMenusExternal)

`#include <interface_LKMenusExternal-Swift.h>`

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **registerWithMenu:cache:**(id< KAMenusProtocol > _Nullable(^)(void) menu, BOOL cache) |

### **function registerWithMenu:cache:**

注册`KAMenusProtocol`协议实例，OC 代码中由 KAAPI_REGISTER宏调用 

```cpp
virtual void registerWithMenu:cache:(
    id< KAMenusProtocol > _Nullable(^)(void) menu,
    BOOL cache
)
```

**Parameters**: 

* **menu** `KAMenusProtocol`协议实现类的初始化函数
  * **cache** 是否缓存实例。为`false`时，每次调用协议方法都会重新初始化实例 

-------------------------------

## KAAPI(SWIFT_EXTENSIONLKMenusExternal)

`#include <interface_LKMenusExternal-Swift.h>`

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **registerWithMenu:cache:file:function:line:column:**(id< KAMenusProtocol > _Nullable(^)(void) menu, BOOL cache, NSString *_Nonnull file, NSString *_Nonnull function, NSInteger line, NSInteger column) |

### **function registerWithMenu:cache:file:function:line:column:**

注册`KAMenusProtocol`协议实例，由 Swift 代码调用 

```cpp
virtual void registerWithMenu:cache:file:function:line:column:(
    id< KAMenusProtocol > _Nullable(^)(void) menu,
    BOOL cache,
    NSString *_Nonnull file,
    NSString *_Nonnull function,
    NSInteger line,
    NSInteger column
)
```

**Parameters**: 

* **menu** `KAMenusProtocol`协议实现类的初始化函数
  * **cache** 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例
  * **file** 注册代码所在文件
  * **function** 注册代码所在函数
  * **line** 注册代码所在行
  * **column** 注册代码所在列 

-------------------------------

## ActionChat

消息所属对话 
`#include <interface_LKMenusExternal-Swift.h>`

Inherits from NSObject

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual nonnull instancetype | **initWithChatId:**(NSString *_Nonnull OBJC_DESIGNATED_INITIALIZER) |
| virtual nonnull instancetype | **SWIFT_UNAVAILABLE**() |
| virtual "-init is unavailable" | **SWIFT_UNAVAILABLE_MSG**() |

**Public Properties**

|       类型      | 定义名称        |
| -------------- | -------------- |
| NSString *_Nonnull | **chatId** <br>对话 ID  |

### **function initWithChatId:**

构造函数 

```cpp
virtual nonnull instancetype initWithChatId:(
    NSString *_Nonnull OBJC_DESIGNATED_INITIALIZER
)
```

**Parameters**: 

* **chatId** 对话 ID 

### **function SWIFT_UNAVAILABLE**

```cpp
virtual nonnull instancetype SWIFT_UNAVAILABLE()
```

### **function SWIFT_UNAVAILABLE_MSG**

```cpp
static virtual "-init is unavailable" SWIFT_UNAVAILABLE_MSG()
```

### **property chatId**

对话 ID 
```cpp
NSString *_Nonnull chatId;
```

-------------------------------

## ActionContext

飞书封装的消息上下文类型 
`#include <interface_LKMenusExternal-Swift.h>`

Inherits from NSObject

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual nonnull instancetype | **initWithActionChat:actionMode:actionMessages:**(ActionChat *_Nonnull actionChat, enum ActionMode actionMode, NSArray< ActionMessage * > *_Nonnull OBJC_DESIGNATED_INITIALIZER) |
| virtual nonnull instancetype | **SWIFT_UNAVAILABLE**() |
| virtual "-init is unavailable" | **SWIFT_UNAVAILABLE_MSG**() |

**Public Properties**

|       类型      | 定义名称        |
| -------------- | -------------- |
| ActionChat *_Nonnull | **actionChat** <br>消息所属对话  |
| enum ActionMode | **actionMode** <br>选中的消息类型  |
| NSArray< ActionMessage * > *_Nonnull | **actionMessages** <br>选中的消息列表  |

### **function initWithActionChat:actionMode:actionMessages:**

构造函数 

```cpp
virtual nonnull instancetype initWithActionChat:actionMode:actionMessages:(
    ActionChat *_Nonnull actionChat,
    enum ActionMode actionMode,
    NSArray< ActionMessage * > *_Nonnull OBJC_DESIGNATED_INITIALIZER
)
```

**Parameters**: 

* **actionChat** 消息所属对话
  * **actionMode** 选中的消息类型
  * **actionMessages** 选中的消息列表 

### **function SWIFT_UNAVAILABLE**

```cpp
virtual nonnull instancetype SWIFT_UNAVAILABLE()
```

### **function SWIFT_UNAVAILABLE_MSG**

```cpp
static virtual "-init is unavailable" SWIFT_UNAVAILABLE_MSG()
```

### **property actionChat**

消息所属对话 
```cpp
ActionChat *_Nonnull actionChat;
```

### **property actionMode**

选中的消息类型 
```cpp
enum ActionMode actionMode;
```

### **property actionMessages**

选中的消息列表 
```cpp
NSArray< ActionMessage * > *_Nonnull actionMessages;
```

-------------------------------

## ActionMessage

选中的消息 
`#include <interface_LKMenusExternal-Swift.h>`

Inherits from NSObject

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual nonnull instancetype | **SWIFT_UNAVAILABLE**() |
| virtual "-init is unavailable" | **SWIFT_UNAVAILABLE_MSG**() |

**Public Properties**

|       类型      | 定义名称        |
| -------------- | -------------- |
| NSString *_Nonnull | **id** <br>消息 ID  |

### **function SWIFT_UNAVAILABLE**

```cpp
virtual nonnull instancetype SWIFT_UNAVAILABLE()
```

### **function SWIFT_UNAVAILABLE_MSG**

```cpp
static virtual "-init is unavailable" SWIFT_UNAVAILABLE_MSG()
```

### **property id**

消息 ID 
```cpp
NSString *_Nonnull id;
```

-------------------------------

## KAMenusProtocol

消息菜单协议，用于在消息菜单中增加自定义项 
`#include <interface_LKMenusExternal-Swift.h>`

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual BOOL | **canInitialize:**(ActionContext *_Nonnull actionContext) |
| virtual void | **onClick:**(ActionContext *_Nonnull actionContext) |

**Public Properties**

|       类型      | 定义名称        |
| -------------- | -------------- |
| UIImage *_Nonnull | **icon** <br>菜单项图标  |
| NSString *_Nonnull | **label** <br>菜单项文案  |

### **function canInitialize:**

飞书菜单容器依据该接口返回值，决定是否展示该菜单 
returns: 是否展示该菜单 

```cpp
virtual BOOL canInitialize:(
    ActionContext *_Nonnull actionContext
)
```

**Parameters**: 

* **actionContext** 飞书封装的消息上下文

### **function onClick:**

点击菜单项时的响应函数 

```cpp
virtual void onClick:(
    ActionContext *_Nonnull actionContext
)
```

**Parameters**: 

* **actionContext** 飞书封装的消息上下文 

### **property icon**

菜单项图标 
```cpp
UIImage *_Nonnull icon;
```

### **property label**

菜单项文案 
```cpp
NSString *_Nonnull label;
```

-------------------------------
