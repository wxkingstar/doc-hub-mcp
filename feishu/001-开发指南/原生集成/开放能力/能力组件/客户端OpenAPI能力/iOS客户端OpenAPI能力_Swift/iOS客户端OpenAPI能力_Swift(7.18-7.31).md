---
title: "iOS客户端OpenAPI能力_Swift(7.18-7.31)"
source_url: https://open.feishu.cn/document/native-integration/open-capability/capability-components/client-openapi-capabilities/ios-client-openapi-capability/ios-client-openapi-capability
last_remote_update: 2025-04-29
last_remote_update_timestamp: 1745895220000
---
最后更新于 2025-04-29

# iOS客户端OpenAPI能力_Swift(7.18-7.31) 

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKNativeAppOpenApiExternal | 1.1.1 | 通过该组件，开发者的原生应用可以调用飞书开放平台接口，实现更丰富和个性化的功能 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKNativeAppOpenApiExternal
import LKKABridge

let open_api = NativeAppConnectManager.shared.getNativeAppManager()
open_api?.invokeOpenApi(...)
```

## PROTOCOL

### KANativeAppOpenApiDelegate

客户端 OpenAPI 能力组件接口协议，用于调用飞书开放平台接口

- 目前已支持客户端调用的 API List

| API | 文档 |
| - | - |
| login | [login-开发文档](https://open.larkoffice.com/document/client-docs/gadget/-web-app-api/open-ability/login/login) |
| getUserInfo | [getUserInfo-开发文档](https://open.larkoffice.com/document/client-docs/gadget/-web-app-api/open-ability/userinfo/getuserinfo) |
| chooseImage |[chooseImage-开发文档](https://open.larkoffice.com/document/client-docs/gadget/-web-app-api/media/image/chooseimage) |
| previewImage | [previewImage-开发文档](https://open.larkoffice.com/document/client-docs/gadget/-web-app-api/media/image/previewimage)|
| openDocument | [openDocument-开发文档](https://open.larkoffice.com/document/client-docs/gadget/-web-app-api/file/opendocument) |
| filePicker | [filePicker-开发文档](https://open.larkoffice.com/document/client-docs/gadget/-web-app-api/file/filepicker) |
| enterProfile | [enterProfile-开发文档](https://open.larkoffice.com/document/client-docs/block/api/user/enterprofile) |
| showToast | [showToast-开发文档](https://open.larkoffice.com/document/client-docs/gadget/-web-app-api/interface/interaction-feedback/showtoast) |

```swift
public protocol KANativeAppOpenApiDelegate: AnyObject
```

#### Methods
#### `invokeOpenApi(appID:apiName:params:callback:)`

调用OpenAPI

```swift
func invokeOpenApi(appID: String, apiName: String, params: [String: Any], callback: @escaping (NativeAppOpenApiModel) -> Void)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| appID | NativeApp的appID |
| apiName | 要调用的api的名字 |
| params | 参数 |
| vc | 调用API的vc |
| callback | 执行API后相关的逻辑 |
## CLASS

### NativeAppOpenApiModel

NativeApp调OpenAPI的结果

```swift
public class NativeAppOpenApiModel: NSObject
```

#### Properties
#### `resultType`

调用结果类型

```swift
public let resultType: NativeAppApiResultType
```

#### `data`

调用结果内容

```swift
public var data: [AnyHashable: Any]?
```

#### Methods
#### `init(resultType:data:)`

调用结果构造函数

```swift
public init(resultType: NativeAppApiResultType, data: [AnyHashable: Any]? = nil)
```

##### Parameters

| 定义名称 | 描述 |
| ---- | -- |
| resultType | 调用结果类型 |
| data | 调用结果内容 |
## ENUM

### NativeAppApiResultType

NativeApp调OpenAPI的结果枚举

```swift
public enum NativeAppApiResultType: Int
```

#### Cases
#### `success`

调用成功

```swift
case success = 0
```

#### `fail`

调用失败

```swift
case fail = 1
```

#### `continue`

继续调用

```swift
case `continue` = 2
```

## EXTENSION

### KAAPI
```swift
extension KAAPI
```

#### Properties
#### `nativeAppOpenApi`

客户端 OpenAPI 能力接口实例

```swift
@objc public var nativeAppOpenApi: KANativeAppOpenApiDelegate?
```
