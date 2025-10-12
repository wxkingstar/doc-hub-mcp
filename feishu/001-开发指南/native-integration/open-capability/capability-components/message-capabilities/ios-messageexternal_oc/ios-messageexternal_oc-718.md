<!--
title: iOS消息能力_OC(7.18-7.31)
id: 7498556499687915523
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/message-capabilities/ios-messageexternal_oc/ios-messageexternal_oc-718
updatedAt: 1745895220000
source: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/message-capabilities/ios-messageexternal_oc/ios-messageexternal_oc-718
-->
# iOS消息能力_OC(7.18-7.31)

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKMessageExternal | 1.1.3 | 通过该组件，开发者能够调用飞书的部分消息能力，比如，转发文件到飞书消息、获取飞书消息中的资源文件 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)



```objectivec
@import LKMessageExternal;
@import LKKABridge;
#import "ka_auto_generated.h"


KAAPI *api = [[KAAPI alloc] initWithChannel:[NSString stringWithUTF8String:getChannel()]];
id<KAMessageNavigator> navigator = api.messageNavigator;

[navigator forwardWithMessage:...];
[navigator getResourcesWithMessages:... onSuccess:... onError:... :...];
[navigator downloadResourceWithMessageInfo:... onSuccess:... onError:...];
...
@end
```

## KAAPI(SWIFT_EXTENSIONLKMessageExternal)




`#include <interface_LKMessageExternal-Swift.h>`

**Public Properties**

|       类型      | 定义名称        |
| -------------- | -------------- |
| id< KAMessageNavigator > _Nullable | **messageNavigator** <br>消息能力接口实例  |



### **property messageNavigator**

消息能力接口实例 
```cpp
id< KAMessageNavigator > _Nullable messageNavigator;
```


-------------------------------

## KAMessage



发送的消息 
`#include <interface_LKMessageExternal-Swift.h>`

Inherits from NSObject



|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual nonnull instancetype | **initWithType:body:**(enum KAMessageType type, id< KAMessageBodyProtocol > _Nonnull OBJC_DESIGNATED_INITIALIZER) |
| virtual nonnull instancetype | **SWIFT_UNAVAILABLE**() |
| virtual "-init is unavailable" | **SWIFT_UNAVAILABLE_MSG**() |

**Public Properties**

|       类型      | 定义名称        |
| -------------- | -------------- |
| enum KAMessageType | **type** <br>消息类型  |
| id< KAMessageBodyProtocol > _Nonnull | **body** <br>消息体  |



### **function initWithType:body:**


构造函数 

```cpp
virtual nonnull instancetype initWithType:body:(
    enum KAMessageType type,
    id< KAMessageBodyProtocol > _Nonnull OBJC_DESIGNATED_INITIALIZER
)
```


**Parameters**: 

  * **type** 消息类型
  * **body** 消息体 


### **function SWIFT_UNAVAILABLE**

```cpp
virtual nonnull instancetype SWIFT_UNAVAILABLE()
```


### **function SWIFT_UNAVAILABLE_MSG**

```cpp
static virtual "-init is unavailable" SWIFT_UNAVAILABLE_MSG()
```




### **property type**

消息类型 
```cpp
enum KAMessageType type;
```


### **property body**

消息体 
```cpp
id< KAMessageBodyProtocol > _Nonnull body;
```


-------------------------------

## MessageInfo



消息描述 
`#include <interface_LKMessageExternal-Swift.h>`

Inherits from NSObject



|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual nonnull instancetype | **initWithType:key:messageID:channelID:name:size:mime:**(enum KAMessageInfoType type, NSString *_Nonnull key, NSString *_Nonnull messageID, NSString *_Nonnull channelID, NSString *_Nonnull name, uint64_t size, NSString *_Nonnull OBJC_DESIGNATED_INITIALIZER) |
| virtual nonnull instancetype | **SWIFT_UNAVAILABLE**() |
| virtual "-init is unavailable" | **SWIFT_UNAVAILABLE_MSG**() |

**Public Properties**

|       类型      | 定义名称        |
| -------------- | -------------- |
| enum KAMessageInfoType | **type** <br>消息类型  |
| NSString *_Nonnull | **key** <br>消息标识  |
| NSString *_Nonnull | **messageID** <br>消息 ID  |
| NSString *_Nonnull | **channelID** <br>消息 channel  |
| NSString *_Nonnull | **name** <br>消息名  |
| uint64_t | **size** <br>消息大小  |
| NSString *_Nonnull | **mime** <br>消息拓展  |



### **function initWithType:key:messageID:channelID:name:size:mime:**


构造函数 

```cpp
virtual nonnull instancetype initWithType:key:messageID:channelID:name:size:mime:(
    enum KAMessageInfoType type,
    NSString *_Nonnull key,
    NSString *_Nonnull messageID,
    NSString *_Nonnull channelID,
    NSString *_Nonnull name,
    uint64_t size,
    NSString *_Nonnull OBJC_DESIGNATED_INITIALIZER
)
```


**Parameters**: 

  * **type** 消息类型
  * **key** 消息标识
  * **messageID** 消息 ID
  * **channelID** 消息 channel
  * **name** 消息名
  * **size** 消息大小
  * **mime** 消息拓展 


### **function SWIFT_UNAVAILABLE**

```cpp
virtual nonnull instancetype SWIFT_UNAVAILABLE()
```


### **function SWIFT_UNAVAILABLE_MSG**

```cpp
static virtual "-init is unavailable" SWIFT_UNAVAILABLE_MSG()
```




### **property type**

消息类型 
```cpp
enum KAMessageInfoType type;
```


### **property key**

消息标识 
```cpp
NSString *_Nonnull key;
```


### **property messageID**

消息 ID 
```cpp
NSString *_Nonnull messageID;
```


### **property channelID**

消息 channel 
```cpp
NSString *_Nonnull channelID;
```


### **property name**

消息名 
```cpp
NSString *_Nonnull name;
```


### **property size**

消息大小 
```cpp
uint64_t size;
```


### **property mime**

消息拓展 
```cpp
NSString *_Nonnull mime;
```


-------------------------------

## KAFileMessageProtocol



文件消息体 Protocol 
`#include <interface_LKMessageExternal-Swift.h>`

Inherits from <KAMessageBodyProtocol>

**Public Properties**

|       类型      | 定义名称        |
| -------------- | -------------- |
| NSString *_Nonnull | **filePath** <br>文件路径  |



### **property filePath**

文件路径 
```cpp
NSString *_Nonnull filePath;
```


-------------------------------

## KAMessageBodyProtocol



消息体 Protocol 
`#include <interface_LKMessageExternal-Swift.h>`

Inherited by <KAFileMessageProtocol>

-------------------------------

## KAMessageNavigator



消息能力接口协议 
`#include <interface_LKMessageExternal-Swift.h>`



|        类型     | 定义名称           |
| -------------- | -------------- |
| virtual void | **forwardWithMessage:**(KAMessage *_Nonnull message) |
| virtual void | **getResourcesWithMessages:onSuccess:onError:**(NSArray< ActionMessage * > *_Nonnull messages, NSArray< MessageInfo * > *_Nonnull onSuccess, NSError *_Nonnull onError) |
| virtual void | **downloadResourceWithMessageInfo:onSuccess:onError:**(MessageInfo *_Nonnull messageInfo, NSString *_Nonnull onSuccess, NSError *_Nonnull onError) |



### **function forwardWithMessage:**


转发消息 

```cpp
virtual void forwardWithMessage:(
    KAMessage *_Nonnull message
)
```


**Parameters**: 

  * **message** 待转发的消息 


### **function getResourcesWithMessages:onSuccess:onError:**


获取消息资源 

```cpp
virtual void getResourcesWithMessages:onSuccess:onError:(
    NSArray< ActionMessage * > *_Nonnull messages,
    NSArray< MessageInfo * > *_Nonnull onSuccess,
    NSError *_Nonnull onError
)
```


**Parameters**: 

  * **messages** 消息描述
  * **onSuccess** 获取消息成功后的回调函数
  * **onError** 获取消息失败后的回调函数 


### **function downloadResourceWithMessageInfo:onSuccess:onError:**


下载消息资源 

```cpp
virtual void downloadResourceWithMessageInfo:onSuccess:onError:(
    MessageInfo *_Nonnull messageInfo,
    NSString *_Nonnull onSuccess,
    NSError *_Nonnull onError
)
```


**Parameters**: 

  * **messageInfo** 消息描述
  * **onSuccess** 下载成功后的回调函数
  * **onError** 下载失败后的回调函数 


-------------------------------
