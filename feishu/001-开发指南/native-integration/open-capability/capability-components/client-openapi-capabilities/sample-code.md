<!--
title: 示例代码
id: 7424771981790003201
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/client-openapi-capabilities/sample-code
updatedAt: 1732712095000
source: https://open.feishu.cn/document/native-integration/open-capability/capability-components/client-openapi-capabilities/sample-code
-->
# 示例代码
## iOS
该示例展示如何使用 OpenAPI 能力组件的`showToast`API 弹出消息。开发者可以参考相关文档调用更多的 API
1. 获取一个原生集成应用的 app_id，或参考[原生集成应用身份申请指南](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/native-integrated-application/nati)申请新的应用
1. 调用 OpenApi，appID 替换为自建应用的 app_id
```javascript 
import LKNativeAppOpenApiExternal
import LKKABridge
public class OpenApiManager {
    private static let openApi = KAAPI(channel: /* channel id*/).nativeAppOpenApi
    
    public static func showToast(content: String) {
        openApi?.invokeOpenApi(appID: "cli_abcde1234567890", apiName: "showToast", params: ["title" : "This is a toast"]) { result in
            /* custom impl */
        }
    }
}
```