---
title: "iOS存储KV能力_OC(7.18-7.31)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/storage-kv-capability/ios-storage-kv-capability_oc/ios-storage-kv-capability_oc-718
last_remote_update: 2025-04-29
last_remote_update_timestamp: 1745895177000
---
最后更新于 2025-04-29

# iOS存储KV能力_OC(7.18-7.31) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKKeyValueExternal | 1.1.3 | 通过该组件，开发者可以调用飞书的 KV 存储 API，实现数据的读取、写入、更新和删除等操作。这样可以方便地管理和维护应用所需的数据，并确保数据的一致性和可用性可以调用飞书的页面跳转、路由能力 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```objectivec
@import LKKeyValueExternal;
@import LKKABridge;
#import "ka_auto_generated.h"

KAAPI *api = [[KAAPI alloc] initWithChannel:[NSString stringWithUTF8String:getChannel()]];
id<KAKeyValueProtocol> store = api.kvstore;

[store hasWithKey:...];
[store setWithKey:... intValue:...];
[store getIntWithKey:...];
[store clearWithKey:...];
...
@end
```

## KAAPI(SWIFT_EXTENSIONLKKeyValueExternal)

`#include <interface_LKKeyValueExternal-Swift.h>`

**Public Properties**

|       类型      | 定义名称        |
| -------------- | -------------- |
| id< KAKeyValueProtocol > _Nullable | **kvstore** <br>KVStorage 能力接口实例  |

### **property kvstore**

KVStorage 能力接口实例 
```cpp
id< KAKeyValueProtocol > _Nullable kvstore;
```

-------------------------------

## KAKeyValueProtocol

KV 存储能力协议，用于调用 KVStorage 能力 
`#include <interface_LKKeyValueExternal-Swift.h>`

|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual BOOL | **hasWithKey:**(NSString *_Nonnull key) |
| virtual BOOL | **setWithKey:stringValue:**(NSString *_Nonnull key, NSString *_Nonnull stringValue) |
| virtual BOOL | **setWithKey:intValue:**(NSString *_Nonnull key, NSInteger intValue) |
| virtual BOOL | **setWithKey:floatValue:**(NSString *_Nonnull key, float floatValue) |
| virtual BOOL | **setWithKey:doubleValue:**(NSString *_Nonnull key, double doubleValue) |
| virtual BOOL | **setWithKey:boolValue:**(NSString *_Nonnull key, BOOL boolValue) |
| virtual BOOL | **setWithKey:dataValue:**(NSString *_Nonnull key, NSData *_Nonnull dataValue) |
| virtual NSString *_Nonnull | **getStringWithKey:**(NSString *_Nonnull key) |
| virtual NSInteger | **getIntWithKey:**(NSString *_Nonnull key) |
| virtual float | **getFloatWithKey:**(NSString *_Nonnull key) |
| virtual double | **getDoubleWithKey:**(NSString *_Nonnull key) |
| virtual BOOL | **getBoolWithKey:**(NSString *_Nonnull key) |
| virtual NSData *_Nonnull | **getDataWithKey:**(NSString *_Nonnull key) |
| virtual BOOL | **clearWithKey:**(NSString *_Nonnull key) |
| virtual BOOL | **clearAll**() |

### **function hasWithKey:**

判断 KVStorage 中 key 是否存在 
returns: key 是否存在 

```cpp
virtual BOOL hasWithKey:(
    NSString *_Nonnull key
)
```

**Parameters**: 

* **key** 存储标识

### **function setWithKey:stringValue:**

在 KVStorage 中存储字符串 
returns: 存储是否成功 

```cpp
virtual BOOL setWithKey:stringValue:(
    NSString *_Nonnull key,
    NSString *_Nonnull stringValue
)
```

**Parameters**: 

* **key** 存储标识
  * **stringValue** 待存储的字符串值

### **function setWithKey:intValue:**

在 KVStorage 中存储 Int 值 
returns: 存储是否成功 

```cpp
virtual BOOL setWithKey:intValue:(
    NSString *_Nonnull key,
    NSInteger intValue
)
```

**Parameters**: 

* **key** 存储标识
  * **intValue** 待存储的 Int 值

### **function setWithKey:floatValue:**

在 KVStorage 中存储 Float 值 
returns: 存储是否成功 

```cpp
virtual BOOL setWithKey:floatValue:(
    NSString *_Nonnull key,
    float floatValue
)
```

**Parameters**: 

* **key** 存储标识
  * **floatValue** 待存储的 Float 值

### **function setWithKey:doubleValue:**

在 KVStorage 中存储 Double 值 
returns: 存储是否成功 

```cpp
virtual BOOL setWithKey:doubleValue:(
    NSString *_Nonnull key,
    double doubleValue
)
```

**Parameters**: 

* **key** 存储标识
  * **doubleValue** 待存储的 Double 值

### **function setWithKey:boolValue:**

在 KVStorage 中存储布尔值 
returns: 存储是否成功 

```cpp
virtual BOOL setWithKey:boolValue:(
    NSString *_Nonnull key,
    BOOL boolValue
)
```

**Parameters**: 

* **key** 存储标识
  * **boolValue** 待存储的布尔值

### **function setWithKey:dataValue:**

在 KVStorage 中存储`Data`值 
returns: 存储是否成功 

```cpp
virtual BOOL setWithKey:dataValue:(
    NSString *_Nonnull key,
    NSData *_Nonnull dataValue
)
```

**Parameters**: 

* **key** 存储标识
  * **dataValue** 待存储的`Data`值

### **function getStringWithKey:**

获取 KVStorage 中存储的字符串 
returns: 存储的字符串值 

```cpp
virtual NSString *_Nonnull getStringWithKey:(
    NSString *_Nonnull key
)
```

**Parameters**: 

* **key** 存储标识

### **function getIntWithKey:**

获取 KVStorage 中存储的 Int 值 
returns: 存储的 Int 值 

```cpp
virtual NSInteger getIntWithKey:(
    NSString *_Nonnull key
)
```

**Parameters**: 

* **key** 存储标识

### **function getFloatWithKey:**

获取 KVStorage 中存储的 Float 值 
returns: 存储的 Float 值 

```cpp
virtual float getFloatWithKey:(
    NSString *_Nonnull key
)
```

**Parameters**: 

* **key** 存储标识

### **function getDoubleWithKey:**

获取 KVStorage 中存储的 Double 值 
returns: 存储的 Double 值 

```cpp
virtual double getDoubleWithKey:(
    NSString *_Nonnull key
)
```

**Parameters**: 

* **key** 存储标识

### **function getBoolWithKey:**

获取 KVStorage 中存储的布尔值 
returns: 存储的布尔值 

```cpp
virtual BOOL getBoolWithKey:(
    NSString *_Nonnull key
)
```

**Parameters**: 

* **key** 存储标识

### **function getDataWithKey:**

获取 KVStorage 中存储的`Data`值 
returns: 存储的`Data`值 

```cpp
virtual NSData *_Nonnull getDataWithKey:(
    NSString *_Nonnull key
)
```

**Parameters**: 

* **key** 存储标识

### **function clearWithKey:**

清除 KVStorage 中存储的值 
returns: 清除操作是否成功 

```cpp
virtual BOOL clearWithKey:(
    NSString *_Nonnull key
)
```

**Parameters**: 

* **key** 存储标识

### **function clearAll**

清除 KVStorage 中存储的所有值

returns: 清除操作是否成功 

```cpp
virtual BOOL clearAll()
```

-------------------------------
