---
title: "iOS Tab容器_OC(7.18-7.31)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/tab-container/ios-tabexternal_oc/ios-tabexternal_oc-718
last_remote_update: 2025-04-29
last_remote_update_timestamp: 1745895134000
---
最后更新于 2025-04-29

# iOS Tab容器_OC(7.18-7.31) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKTabExternal | 1.1.3 | 该组件使开发者可以根据自身业务需求，在飞书应用中增加自定义的 Tab，提供更丰富和个性化的功能和内容展示。这有助于提升用户体验和工作效率，使应用更加易于访问 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objectivec
@import LKKABridge; // 引入 KAAPI
@import LKTabExternal;
#import "ka_auto_generated.h"

/// 注册类，用于在加载动态库时调用`+load`方法完成注册
@interface LKTabExternalRegistry: NSObject

@end

@implementation LKTabExternalRegistry

+(void)load {
    NSString * channel = [NSString stringWithUTF8String:getChannel()];
    KAAPI *api = [[KAAPI alloc] initWithChannel:channel];    
    [api registerWithTab:^id<KATabProtocol> {
        return [[LKTabExternalIMP alloc] init];
    } cache:YES];
}

@end

/// `KATabProtocol`协议实现类
@interface LKTabExternalIMP : NSObject<KATabProtocol>
...
@end

@implementation LKTabExternalIMP
...
@end
```

## _KAAPIWrapper(SWIFT_EXTENSIONLKTabExternal)

`#include <interface_LKTabExternal-Swift.h>`

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **registerWithTab:cache:**(void tab, BOOL cache) |

### **function registerWithTab:cache:**

注册`KATabProtocol`协议实例，OC 代码中由 KAAPI_REGISTER宏调用 

```cpp
virtual void registerWithTab:cache:(
    void tab,
    BOOL cache
)
```

**Parameters**: 

* **tab** `KATabProtocol`协议实现类的初始化函数
  * **cache** 是否缓存实例。为`false`时，每次调用协议方法都会重新初始化实例 

-------------------------------

## KAAPI(SWIFT_EXTENSIONLKTabExternal)

`#include <interface_LKTabExternal-Swift.h>`

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **registerWithTab:cache:file:function:line:column:**(void tab, BOOL cache, NSString *_Nonnull file, NSString *_Nonnull function, NSInteger line, NSInteger column) |

### **function registerWithTab:cache:file:function:line:column:**

注册`KATabProtocol`协议实例，由 Swift 代码调用 

```cpp
virtual void registerWithTab:cache:file:function:line:column:(
    void tab,
    BOOL cache,
    NSString *_Nonnull file,
    NSString *_Nonnull function,
    NSInteger line,
    NSInteger column
)
```

**Parameters**: 

* **tab** `KATabProtocol`协议实现类的初始化函数
  * **cache** 是否缓存实例。为 false 时，每次调用协议方法都会重新初始化实例
  * **file** 注册代码所在文件
  * **function** 注册代码所在函数
  * **line** 注册代码所在行
  * **column** 注册代码所在列 

-------------------------------

## KATabProtocol

Tab 容器协议，用于实现自定义的 Tab. 
`#include <interface_LKTabExternal-Swift.h>`

|        类型     | 定义名称           |
| -------------- | -------------- |
| UIViewController *_Nonnull （ | **tabViewController**(void )<br>tab 对应的 ViewController  |
| UIButton *_Nullable （ | **firstNaviBarButton**(UIViewController * _Nonnull)<br>navi bar 上方右侧第一个按钮，无需设置 size（会自动调整大小），仅当 showNaviBar 为 true 时生效，入参为 tabViewController  |
| UIButton *_Nullable （ | **secondNaviBarButton**(UIViewController * _Nonnull)<br>navi bar 上方右侧第二个按钮，无需设置 size（会自动调整大小），仅当 showNaviBar 为 true 时生效，入参为 tabViewController  |
| void （ | **tabSingleClick**(void )<br>tab 单击事件  |
| void （ | **tabDoubleClick**(void )<br>tab 双击事件  |

**Public Properties**

|       类型      | 定义名称        |
| -------------- | -------------- |
| NSString *_Nonnull | **appId** <br>appId，和开平申请的 appId 一致  |
| BOOL | **showNaviBar** <br>是否展示 navi bar  |
| NSString *_Nullable | **naviBarTitle** <br>navi bar 标题，仅当 showNaviBar 为 true 时生效  |

### **function tabViewController**

tab 对应的 ViewController 
```cpp
UIViewController *_Nonnull （ tabViewController(
    void 
)
```

### **function firstNaviBarButton**

navi bar 上方右侧第一个按钮，无需设置 size（会自动调整大小），仅当 showNaviBar 为 true 时生效，入参为 tabViewController 
```cpp
UIButton *_Nullable （ firstNaviBarButton(
    UIViewController * _Nonnull
)
```

### **function secondNaviBarButton**

navi bar 上方右侧第二个按钮，无需设置 size（会自动调整大小），仅当 showNaviBar 为 true 时生效，入参为 tabViewController 
```cpp
UIButton *_Nullable （ secondNaviBarButton(
    UIViewController * _Nonnull
)
```

### **function tabSingleClick**

tab 单击事件 
```cpp
void （ tabSingleClick(
    void 
)
```

### **function tabDoubleClick**

tab 双击事件 
```cpp
void （ tabDoubleClick(
    void 
)
```

### **property appId**

appId，和开平申请的 appId 一致 
```cpp
NSString *_Nonnull appId;
```

### **property showNaviBar**

是否展示 navi bar 
```cpp
BOOL showNaviBar;
```

### **property naviBarTitle**

navi bar 标题，仅当 showNaviBar 为 true 时生效 
```cpp
NSString *_Nullable naviBarTitle;
```

-------------------------------
