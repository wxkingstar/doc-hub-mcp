---
title: "iOS客户端OpenAPI能力_Swift(7.54)"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/client-openapi-capabilities/ios-client-openapi-capability/ios-nativeappopenapiexternal_swift_754
last_remote_update: 2025-11-03
last_remote_update_timestamp: 1762139833000
---
最后更新于 2025-11-03

# iOS客户端OpenAPI能力_Swift(7.54)

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| LKNativeAppOpenApiExternal | 能力组件 | 1.2.0 | 7.54.0 |

## 功能简介
提供客户端调用飞书开放平台接口的能力，支持登录、用户信息、图片选择、文档预览等常用 API

### 更新日志
- 无变更

## 示例代码
完整示例请查看 [SampleApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)

```swift
import LKNativeAppOpenApiExternal
import LKKABridge

let api = KAAPI(channel: "YOUR_CHANNEL")
let openApi = api.nativeAppOpenApi

openApi?.invokeOpenApi(appID: "your_app_id", apiName: "login", params: [:]) { result in
    switch result.resultType {
    case .success:
        print("登录成功")
    case .fail:
        print("登录失败")
    case .continue:
        print("继续调用")
    }
}
```

## PROTOCOL
### KANativeAppOpenApiDelegate
客户端 OpenAPI 能力组件接口协议，用于调用飞书开放平台接口

```swift
protocol KANativeAppOpenApiDelegate: AnyObject {
    func invokeOpenApi(appID: String, apiName: String, params: [String: Any], callback: @escaping (NativeAppOpenApiModel) -> Void)	// 调用OpenAPI
}
```

#### 方法列表
#### `func invokeOpenApi(appID: String, apiName: String, params: [String: Any], callback: @escaping (NativeAppOpenApiModel) -> Void)`
调用OpenAPI

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| appID | String | NativeApp的appID | - |
| apiName | String | 要调用的api的名字 | - |
| params | [String: Any] | 参数 | - |
| callback | (NativeAppOpenApiModel) -> Void | 执行API后相关的逻辑 | - |

目前已支持客户端调用的 API List

| API | 文档 |
| --- | --- |
| login | [login-开发文档](https://open.larkoffice.com/document/client-docs/gadget/-web-app-api/open-ability/login/login) |
| getUserInfo | [getUserInfo-开发文档](https://open.larkoffice.com/document/client-docs/gadget/-web-app-api/open-ability/userinfo/getuserinfo) |
| chooseImage | [chooseImage-开发文档](https://open.larkoffice.com/document/client-docs/gadget/-web-app-api/media/image/chooseimage) |
| previewImage | [previewImage-开发文档](https://open.larkoffice.com/document/client-docs/gadget/-web-app-api/media/image/previewimage) |
| openDocument | [openDocument-开发文档](https://open.larkoffice.com/document/client-docs/gadget/-web-app-api/file/opendocument) |
| filePicker | [filePicker-开发文档](https://open.larkoffice.com/document/client-docs/gadget/-web-app-api/file/filepicker) |
| enterProfile | [enterProfile-开发文档](https://open.larkoffice.com/document/client-docs/block/api/user/enterprofile) |
| showToast | [showToast-开发文档](https://open.larkoffice.com/document/client-docs/gadget/-web-app-api/interface/interaction-feedback/showtoast) |

## CLASS
### NativeAppOpenApiModel
NativeApp调OpenAPI的结果

```swift
class NativeAppOpenApiModel: NSObject {
    let resultType: NativeAppApiResultType	// 调用结果类型
    var data: [AnyHashable: Any]?	// 调用结果内容

init(resultType: NativeAppApiResultType, data: [AnyHashable: Any]? = nil)	// 调用结果构造函数
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| resultType | NativeAppApiResultType | 调用结果类型 | - |
| data | [AnyHashable: Any]? | 调用结果内容 | nil |

#### 方法列表
#### `init(resultType: NativeAppApiResultType, data: [AnyHashable: Any]? = nil)`
调用结果构造函数

| 参数名称 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| resultType | NativeAppApiResultType | 调用结果类型 | - |
| data | [AnyHashable: Any]? | 调用结果内容 | nil |

## EXTENSION
### KAAPI

```swift
extension KAAPI {
    var nativeAppOpenApi: KANativeAppOpenApiDelegate?	// 客户端 OpenAPI 能力接口实例
}
```

#### 属性列表
| 属性名 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| nativeAppOpenApi | KANativeAppOpenApiDelegate? | 客户端 OpenAPI 能力接口实例 | - |

## ENUM
### NativeAppApiResultType
NativeApp调OpenAPI的结果枚举

```swift
enum NativeAppApiResultType: Int
```

#### 枚举成员
| 成员名 | 原始值 | 描述 |
| --- | --- | --- |
| success | 0 | 调用成功 |
| fail | 1 | 调用失败 |
| `continue` | 2 | 继续调用 |
