<!--
title: iOS客户端OpenAPI能力_Swift(7.32-7.35)
id: 7275260403409731588
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/client-openapi-capabilities/ios-
updatedAt: 1745895199000
source: https://open.feishu.cn/document/native-integration/open-capability/capability-components/client-openapi-capabilities/ios-client-openapi-capability/ios-
-->
# iOS客户端OpenAPI能力_Swift(7.32-7.35)
组件类型 | 最低飞书版本 | 生效基线      |
| ---- | ------ | --------- |
| 能力组件 | 7.32   | 7.32.0 及以上 |

## 组件说明
通过`LKNativeAppOpenApiExternal`组件，开发者的原生应用可以调用飞书开放平台接口，实现更丰富和个性化的功能。

## API 列表

### protocol KANativeAppOpenApiDelegate

#### func invokeOpenApi(appID: String, apiName: String, params: [String: Any], callback:@escaping (NativeAppOpenApiModel) -> Void)

##### 接口说明

| 兼容飞书版本 | 说明              | 生效版本  |
| ------ | --------------- | ----- |
| 7.32  | 客户端 Open API 调用 | 1.0.0 |

##### 参数说明

| 名称       | 类型                              | 描述               |
| -------- | ------------------------------- | ---------------- |
| appID    | String                          | NativeApp的appID  |
| apiName  | String                          | 要调用开放平台的 api 的名字 |
| params   | [String: Any]                  | 参数               |
| callback | (NativeAppOpenApiModel) -> Void | 执行API后相关的逻辑      |

##### 数据结构

```javascript
@objcMembers
public class NativeAppOpenApiModel: NSObject {
    public let resultType: NativeAppApiResultType
    public var data : [AnyHashable: Any]?
    
    public init(resultType: NativeAppApiResultType, data: [AnyHashable: Any]? = nil) {
        self.resultType = resultType
        self.data = data
    }
}
```

## 接入说明

通过原生集成工具，选择 2.0.0 及以上基线，依赖 **NativeAppPublicKit** 组件，podspec 增加以下内容：
```javascript
s.dependency 'NativeAppPublicKit', '{你需要依赖的版本号}'
```
调用
```javascript
[[[NativeAppConnectManager shared] getNativeAppManager] invokeOpenApiWithAppID:appID apiName:apiName params:params callback:^(NativeAppOpenApiModel * model) {
//根据API数据处理业务逻辑
}]
```

### 目前已支持客户端调用的 API List

| API           | 文档                                                                                                                                            |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| login         | [login - 客户端文档 - 开发文档 - 飞书开放平台](/ssl:ttdoc/uYjL24iN/uYzMuYzMuYzM)                                                        |
| getUserInfo   | [getUserInfo - 客户端文档 - 开发文档 - 飞书开放平台](/ssl:ttdoc/uYjL24iN/ucjMx4yNyEjL3ITM)                                              |
| chooseImage   | [chooseImage - 客户端文档 - 开发文档 - 飞书开放平台](/ssl:ttdoc/uYjL24iN/uMTMx4yMxEjLzETM)                                              |
| previewImage  | [previewImage - 客户端文档 - 开发文档 - 飞书开放平台](/ssl:ttdoc/uYjL24iN/uMDOx4yM4EjLzgTM)                                             |
| openDocument  | [openDocument - 客户端文档 - 开发文档 - 飞书开放平台](/ssl:ttdoc/uYjL24iN/ukTN24SO1YjL5UjN)                   |
| filePicker    | [filePicker - 客户端文档 - 开发文档 - 飞书开放平台](/ssl:ttdoc/uYjL24iN/uETM04SMxQjLxEDN)                        |
| enterProfile  |[enterProfile - 客户端文档 - 开发文档 - 飞书开放平台](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/api/user/enterprofile)                               |
| showToast     | [showToast - 客户端文档 - 开发文档 - 飞书开放平台](/ssl:ttdoc/uYjL24iN/ugzMy4COzIjL4MjM)|




## 更新日志
:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 20%;">版本号</md-th>
      <md-th style="width: 80%;">Release Note</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>1.0.0</md-td>
      <md-td>新功能：开发者的原生应用可以调用飞书开放平台接口
</md-td>
    </md-tr>
    <md-tr>
      <md-td>1.0.1</md-td>
      <md-td>改进：
- 组件名改为 LKNativeAppOpenApiExternal
- 协议名改为 KANativeAppOpenApiDelegate
- 更改为 KAAPI 调用</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::