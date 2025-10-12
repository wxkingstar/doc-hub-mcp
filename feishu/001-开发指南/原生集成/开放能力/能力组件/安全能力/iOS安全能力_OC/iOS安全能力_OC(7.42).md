---
title: "iOS安全能力_OC(7.42)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/securityabilityexternal/ios-securityabilityexternal_oc_742
---
最后更新于 2025-04-29

# iOS安全能力_OC(7.42) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKSecurityAbilityExternal | 1.0.0 | 该组件提供安全能力接口，用于安全地访问剪贴板内容 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objectivec
@import LKSecurityAbilityExternal;
@import LKKABridge;
#import "ka_auto_generated.h"

KAAPI *api = [[KAAPI alloc] initWithChannel:[NSString stringWithUTF8String:getChannel()]];
id<LKPasteboardApi> pasteboard = api.pasteboard;

[pasteboard getTextWithAppId:...];
[pasteboard setTextWithAppId:... text:...];
[pasteboard getImageWithAppId:...];
[pasteboard setImageWithAppId:... image:...];
@end
```

## KAAPI(SWIFT_EXTENSIONLKSecurityAbilityExternal)

`#include <interface_LKSecurityAbilityExternal-Swift.h>`

**Public Properties**

|       类型      | 定义名称        |
| -------------- | -------------- |
| id< LKPasteboardApi > _Nullable | **pasteboard** <br>安全能力接口实例  |

### **property pasteboard**

安全能力接口实例 
```cpp
id< LKPasteboardApi > _Nullable pasteboard;
```

-------------------------------

## LKPasteboardApi

安全能力接口协议，用于安全地访问剪贴板内容 
`#include <interface_LKSecurityAbilityExternal-Swift.h>`

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual NSString *_Nullable | **getTextWithAppId:**(NSString *_Nullable appId) |
| virtual void | **setTextWithAppId:text:**(NSString *_Nullable appId, NSString *_Nonnull text) |
| virtual UIImage *_Nullable | **getImageWithAppId:**(NSString *_Nullable appId) |
| virtual void | **setImageWithAppId:image:**(NSString *_Nullable appId, UIImage *_Nonnull image) |

### **function getTextWithAppId:**

获取剪贴板文字 
returns: 剪贴板文字内容 

```cpp
virtual NSString *_Nullable getTextWithAppId:(
    NSString *_Nullable appId
)
```

**Parameters**: 

* **appId** app id

### **function setTextWithAppId:text:**

设置剪贴板文字 

```cpp
virtual void setTextWithAppId:text:(
    NSString *_Nullable appId,
    NSString *_Nonnull text
)
```

**Parameters**: 

* **appId** app id
  * **text** 剪贴板文字内容 

### **function getImageWithAppId:**

获取剪贴板图片 
returns: 剪贴板图片内容 

```cpp
virtual UIImage *_Nullable getImageWithAppId:(
    NSString *_Nullable appId
)
```

**Parameters**: 

* **appId** app id

### **function setImageWithAppId:image:**

设置剪贴板图片 

```cpp
virtual void setImageWithAppId:image:(
    NSString *_Nullable appId,
    UIImage *_Nonnull image
)
```

**Parameters**: 

* **appId** app id
  * **text** 剪贴板图片内容 

-------------------------------
