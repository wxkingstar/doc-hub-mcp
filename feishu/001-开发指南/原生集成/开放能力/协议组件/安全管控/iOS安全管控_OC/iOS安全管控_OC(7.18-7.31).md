---
title: "iOS安全管控_OC(7.18-7.31)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/securityexternal/ios-securityexternal_oc/ios-securityexternal_oc-718
last_remote_update: 2025-04-29
last_remote_update_timestamp: 1745895068000
---
最后更新于 2025-04-29

# iOS安全管控_OC(7.18-7.31)

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKSecurityExternal | 1.0.0 | 该组件允许开发者通过飞书的安全管控功能，自定义剪贴板的访问等安全相关权限 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objectivec
暂无
```

## KAAPI(SWIFT_EXTENSIONLKSecurityExternal)

`#include <interface_LKSecurityExternal-Swift.h>`

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **registerWithPasteProtectionDelegate:file:function:line:column:**(void pasteProtectionDelegate, NSString *_Nonnull file, NSString *_Nonnull function, NSInteger line, NSInteger column) |
| virtual void | **registerWithExemptionDelegate:file:function:line:column:**(void exemptionDelegate, NSString *_Nonnull file, NSString *_Nonnull function, NSInteger line, NSInteger column) |

### **function registerWithPasteProtectionDelegate:file:function:line:column:**

注册`LKPasteboardProtectionDelegate`协议实例，由 Swift 代码调用 

```cpp
virtual void registerWithPasteProtectionDelegate:file:function:line:column:(
    void pasteProtectionDelegate,
    NSString *_Nonnull file,
    NSString *_Nonnull function,
    NSInteger line,
    NSInteger column
)
```

**Parameters**: 

* **pasteProtectionDelegate** `LKPasteboardProtectionDelegate`协议实现类的初始化函数
  * **file** 注册代码所在文件
  * **function** 注册代码所在函数
  * **line** 注册代码所在行
  * **column** 注册代码所在列 

### **function registerWithExemptionDelegate:file:function:line:column:**

注册`LKSecurityEMMApi`协议实例，由 Swift 代码调用 

```cpp
virtual void registerWithExemptionDelegate:file:function:line:column:(
    void exemptionDelegate,
    NSString *_Nonnull file,
    NSString *_Nonnull function,
    NSInteger line,
    NSInteger column
)
```

**Parameters**: 

* **exemptionDelegate** `LKSecurityEMMApi`协议实现类的初始化函数
  * **file** 注册代码所在文件
  * **function** 注册代码所在函数
  * **line** 注册代码所在行
  * **column** 注册代码所在列 

-------------------------------

## LKPasteboardProtectionDelegate

剪贴板管控协议 
`#include <interface_LKSecurityExternal-Swift.h>`

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual BOOL | **canPasteWithClipdataAppID:currentAppID:currentUrl:**(NSString *_Nullable clipdataAppID, NSString *_Nullable currentAppID, NSString *_Nullable currentUrl) |

### **function canPasteWithClipdataAppID:currentAppID:currentUrl:**

是否允许访问剪贴板 
returns: 是否允许访问剪贴板 

```cpp
virtual BOOL canPasteWithClipdataAppID:currentAppID:currentUrl:(
    NSString *_Nullable clipdataAppID,
    NSString *_Nullable currentAppID,
    NSString *_Nullable currentUrl
)
```

**Parameters**: 

* **clipdataAppID** clip data app id
  * **currentAppID** 当前 app id
  * **currentUrl** 当前 url

-------------------------------

## LKSecurityEMMApi

安全管控协议 
`#include <interface_LKSecurityExternal-Swift.h>`

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual BOOL | **requestExemptionActionWithBiz:action:error:**(enum LKSecurityBizType biz, enum LKActionType action, NSError *_Nullable *_Nullable error) |

### **function requestExemptionActionWithBiz:action:error:**

请求豁免 

```cpp
virtual BOOL requestExemptionActionWithBiz:action:error:(
    enum LKSecurityBizType biz,
    enum LKActionType action,
    NSError *_Nullable *_Nullable error
)
```

**Parameters**: 

* **biz** 安全管控项
  * **action** 安全管控执行动作 

-------------------------------
