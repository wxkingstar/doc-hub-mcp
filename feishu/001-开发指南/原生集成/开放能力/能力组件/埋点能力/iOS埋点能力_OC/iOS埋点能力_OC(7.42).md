---
title: "iOS埋点能力_OC(7.42)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/event-tracking-capabilities/ios-statisticsexternal_oc/ios-statisticsexternal_oc_742
last_remote_update: 2025-04-21
last_remote_update_timestamp: 1745215563000
---
最后更新于 2025-04-21

# iOS埋点能力_OC(7.42) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKStatisticsExternal | 1.1.3 | 通过该组件，可以调用飞书的埋点统计能力，将业务数据上报到埋点平台 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objectivec
@import LKStatisticsExternal;
@import LKKABridge;
#import "ka_auto_generated.h"

KAAPI *api = [[KAAPI alloc] initWithChannel:[NSString stringWithUTF8String:getChannel()]];
id<KAStatisticsProtocol> statistics = api.statistics;

[statistics initConfigWithAppId:... registerHost:... appLogHost:... commonParams:...];
[statistics sendEventWithName:];
[statistics sendEventWithName:... params:...];
@end
```

## KAAPI(SWIFT_EXTENSIONLKStatisticsExternal)

`#include <interface_LKStatisticsExternal-Swift.h>`

**Public Properties**

|       类型      | 定义名称        |
| -------------- | -------------- |
| id< KAStatisticsProtocol > _Nullable | **statistics** <br>埋点能力接口实例  |

### **property statistics**

埋点能力接口实例 
```cpp
id< KAStatisticsProtocol > _Nullable statistics;
```

-------------------------------

## KAStatisticsProtocol

埋点能力接口协议，用于向埋点平台上报数据 
`#include <interface_LKStatisticsExternal-Swift.h>`

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **initConfigWithAppId:registerHost:appLogHost:commonParams:**(NSString *_Nonnull appId, NSString *_Nonnull registerHost, NSString *_Nonnull appLogHost, none SWIFT_METHOD_FAMILY)<br>配置，用于初始化统计组件  |
| virtual void | **sendEventWithName:**(NSString *_Nonnull name) |
| virtual void | **sendEventWithName:params:**(NSString *_Nonnull name, NSDictionary< NSString *, NSString * > *_Nonnull params) |

### **function initConfigWithAppId:registerHost:appLogHost:commonParams:**

配置，用于初始化统计组件 
```cpp
virtual void initConfigWithAppId:registerHost:appLogHost:commonParams:(
    NSString *_Nonnull appId,
    NSString *_Nonnull registerHost,
    NSString *_Nonnull appLogHost,
    none SWIFT_METHOD_FAMILY
)
```

### **function sendEventWithName:**

埋点 

```cpp
virtual void sendEventWithName:(
    NSString *_Nonnull name
)
```

**Parameters**: 

* **name** 事件名称 

### **function sendEventWithName:params:**

埋点 

```cpp
virtual void sendEventWithName:params:(
    NSString *_Nonnull name,
    NSDictionary< NSString *, NSString * > *_Nonnull params
)
```

**Parameters**: 

* **name** 事件名称
  * **params** 事件参数 

-------------------------------
