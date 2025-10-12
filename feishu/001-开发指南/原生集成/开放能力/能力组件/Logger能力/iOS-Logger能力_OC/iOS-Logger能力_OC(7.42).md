---
title: "iOS Logger能力_OC(7.42)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/logger-capability/loggerexternal_oc/loggerexternal_oc_742
last_remote_update: 2025-04-21
last_remote_update_timestamp: 1745215563000
---
最后更新于 2025-04-21

# iOS Logger能力_OC(7.42)

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKLoggerExternal | 1.1.3 | 通过该组件，开发者可以指定日志的级别、内容和其他相关信息。此外，飞书还支持日志回捞功能，开发者可以通过相应的API检索和获取之前记录的日志信息。这样可以方便地进行日志分析、故障排查和性能优化等工作 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objectivec
@import LKLoggerExternal;
@import LKKABridge;
#import "ka_auto_generated.h"

KAAPI *api = [[KAAPI alloc] initWithChannel:[NSString stringWithUTF8String:getChannel()]];
id<KALoggerProtocol> logger = api.logger;

[logger verboseWithTag:... :...];
[logger debugWithTag:... :...];
[logger infoWithTag:... :...];
[logger warningWithTag:... :...];
[logger errorWithTag:... :...];
@end
```

## KAAPI(SWIFT_EXTENSIONLKLoggerExternal)

`#include <interface_LKLoggerExternal-Swift.h>`

**Public Properties**

|       类型      | 定义名称        |
| -------------- | -------------- |
| id< KALoggerProtocol > _Nullable | **logger** <br>Logger 能力接口实例  |

### **property logger**

Logger 能力接口实例 
```cpp
id< KALoggerProtocol > _Nullable logger;
```

-------------------------------

## KALoggerProtocol

Logger 协议，用于打印日志 
`#include <interface_LKLoggerExternal-Swift.h>`

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **verboseWithTag:tag:**(NSString * _Nonnull, NSString *_Nonnull msg) |
| virtual void | **debugWithTag:tag:**(NSString * _Nonnull, NSString *_Nonnull msg) |
| virtual void | **infoWithTag:tag:**(NSString * _Nonnull, NSString *_Nonnull msg) |
| virtual void | **warningWithTag:tag:**(NSString * _Nonnull, NSString *_Nonnull msg) |
| virtual void | **errorWithTag:tag:**(NSString * _Nonnull, NSString *_Nonnull msg) |

### **function verboseWithTag:tag:**

输出更多 debug 的信息 

```cpp
virtual void verboseWithTag:tag:(
    NSString * _Nonnull,
    NSString *_Nonnull msg
)
```

**Parameters**: 

* **tag** tag name
  * **msg** verbose information 

### **function debugWithTag:tag:**

只在 debug 下输出信息 

```cpp
virtual void debugWithTag:tag:(
    NSString * _Nonnull,
    NSString *_Nonnull msg
)
```

**Parameters**: 

* **tag** tag name
  * **msg** debug information 

### **function infoWithTag:tag:**

输出普通信息 

```cpp
virtual void infoWithTag:tag:(
    NSString * _Nonnull,
    NSString *_Nonnull msg
)
```

**Parameters**: 

* **tag** tag name
  * **msg** info information 

### **function warningWithTag:tag:**

输出警告信息 

```cpp
virtual void warningWithTag:tag:(
    NSString * _Nonnull,
    NSString *_Nonnull msg
)
```

**Parameters**: 

* **tag** tag name
  * **msg** warning information 

### **function errorWithTag:tag:**

输出错误信息 

```cpp
virtual void errorWithTag:tag:(
    NSString * _Nonnull,
    NSString *_Nonnull msg
)
```

**Parameters**: 

* **tag** tag name
  * **msg** error information 

-------------------------------
