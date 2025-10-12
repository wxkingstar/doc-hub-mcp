<!--
title: iOS Setting能力_OC(7.42)
id: 7495606997214167068
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/setting-ability/ios-settingexternal_oc/ios-settingexternal_oc_742
updatedAt: 1745215586000
source: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/setting-ability/ios-settingexternal_oc/ios-settingexternal_oc_742
-->
# iOS Setting能力_OC(7.42) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKSettingExternal | 1.1.3 | 通过该组件，可以获取飞书的动态setting配置，只在SaaS可用，私有化不支持 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)



```objectivec
@import LKSettingExternal;
@import LKKABridge;
#import "ka_auto_generated.h"


KAAPI *api = [[KAAPI alloc] initWithChannel:[NSString stringWithUTF8String:getChannel()]];
id<KASettingProtocol> setting = api.settings;

[setting getConfigWithSpace:... key:...];
@end
```

## KAAPI(SWIFT_EXTENSIONLKSettingExternal)




`#include <interface_LKSettingExternal-Swift.h>`

**Public Properties**

|       类型      | 定义名称        |
| -------------- | -------------- |
| id< KASettingProtocol > _Nullable | **settings** <br>Setting 能力接口实例  |



### **property settings**

Setting 能力接口实例 
```cpp
id< KASettingProtocol > _Nullable settings;
```


-------------------------------

## KASettingProtocol



Setting 能力组件接口协议，用于获取 Setting 配置 
`#include <interface_LKSettingExternal-Swift.h>`



|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual NSDictionary< NSString *, id > *_Nonnull | **getConfigWithSpace:key:**(NSString *_Nonnull space, NSString *_Nonnull key) |



### **function getConfigWithSpace:key:**


获取 config 
returns: 远端配置 

```cpp
virtual NSDictionary< NSString *, id > *_Nonnull getConfigWithSpace:key:(
    NSString *_Nonnull space,
    NSString *_Nonnull key
)
```


**Parameters**: 

  * **key** isv key
  * **space** isv space


-------------------------------
