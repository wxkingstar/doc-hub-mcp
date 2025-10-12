<!--
title: iOS组件通用注册表接口能力_Swift(7.42)
id: 7493944431072231425
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/kabridge/lkkabridge_swift/kabridge_swift_742
updatedAt: 1745895177000
source: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/kabridge/lkkabridge_swift/kabridge_swift_742
-->
# 组件通用注册接口_Swift(7.42)

|组件名称 | 组件版本 | 组件能力 |
| ---- | ------ | -------- |
| LKKABridge | 1.0.9 | 该模块提供了通用的能力组件和协议组件接口`KAAPI`，可以通过该接口注册协议组件实例，或者调用能力组件接口方法 |

## 示例代码

完整示例请查看 [https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_ios)



 ```swift
import LKKABridge

// 协议组件
import LKJsApiExternal
import LKTabExternal
import LKLifecycleExternal
import LKQRCodeExternal
import LKMenusExternal
import LKNativeAppExtensionExternal
import LKWebContainerExternal
import LKShortcutExternal
import LKVideoChatExternal
import LKSecurityExternal

// 能力组件
import LKAppLinkExternal
import LKMessageExternal
import LKKeyValueExternal
import LKWebViewApiExternal
import LKNativeAppOpenApiExternal
import LKStatisticsExternal
import LKPassportExternal
import LKPassportOperationExternal
import LKSettingExternal
import LKLoggerExternal
import LKSecurityAbilityExternal


let api = KAAPI(channel: /* channel id */)

/*********************************/
/********* 注册协议组件 ************/
/*********************************/
// 注册 JsApi 扩展协议实现
public class LKJsApiExternalIMP: KANativeAppPluginDelegate {
    ...
}
api.register(nativeAppPluginDelegate: LKJsApiExternalIMP.init, cache: true)

// 注册 Tab 容器协议实现
public class LKTabExternalIMP: KATabProtocol {
    ...
}
api.register(tab: LKTabExternalIMP.init, cache: true)


// 注册生命周期协议实现
public class LKLifecycleExternalIMP: KALifecycleProtocol {
    ...
}
api.register(lifecycle: LKLifecycleExternalIMP.init, cache: true)

// 注册消息菜单协议实现
public class LKMenusExternalIMP: KAMenusProtocol {
    ...
}
api.register(menu: LKMenusExternalIMP.init, cache: true)

// 注册扫码能力协议实现
public class LKQRCodeExternalIMP: KAQRCodeApiDelegate {
    ...
}
api.register(qrcodeAPIDelegate: LKQRCodeExternalIMP.init, cache: true)

// 注册原生集成应用协议实现
public class KANativeAppExtensionIMP: KANativeAppExtensionProtocol {
    ...
}
public class : OpenNativeAppProtocol {
    ...
}
api.register(nativeApp: KANativeAppExtensionIMP.init, cache: true)
api.register(openNativeApp: OpenNativeAppIMP.init, cache: true)

// 注册 WebContainer 协议实现
public class LKWebContainerExternalIMP: KAWebContainerProtocol {
    ...
}
api.register(webContainer: LKWebContainerExternalIMP.init, cache: true)
    
// 注册桌面快捷菜单协议实现
public class LKShortcutExternalIMP: KAShortcutProtocol {
    ...
}
api.register(shortcut: LKShortcutExternalIMP.init, cache: true)
    
// 注册视频会议协议实现
public class LKVideoChatExternalIMP: KAVideoChatDelegate {
    ...
}
api.register(videoChatDelegate: LKVideoChatExternalIMP.init, cache: true)

    
// 注册安全管控协议实现
public class LKPasteboardProtectionIMP: LKPasteboardProtectionDelegate {    
    ...
}
public class LKSecurityEMMApiIMP: LKSecurityEMMApi {    
    ...
}
api.register(pasteProtectionDelegate: LKPasteboardProtectionIMP.init)
api.register(exemptionDelegate: LKSecurityEMMApiIMP.init)


/*********************************/
/********* 调用能力组件 ************/
/*********************************/
// AppLink 能力
let navigator = api.navigator
navigator?.open(...)
...

// 消息能力
let message = api.messageNavigator
message?.forward(...)
...

// 存储 KV 能力
let store = api.kvstore 
store?.has(...)
...

// 网页能力
let web_view_api = api.webViewApi 
web_view_api?.setCookie(...)
...

// 客户端 OpenAPI 能力
let open_api = api.nativeAppOpenApi 
open_api?.invokeOpenApi(...)
...

// 埋点能力
let statistics = api.statistics 
statistics?.initConfig(...)
statistics?.sendEvent(...)
...

// Passport 能力
let passport = api.passport 
passport?.getDeviceId(...)
let operator = api.passportOperator 
operator?.logoutFeiShu(...)
...

// Setting 能力
let setting = api.settings 
setting?.getConfig(...)
...

// Logger 能力
let logger = api.logger 
logger?.info(...)
...

// 安全管控能力
let pasteboard = api.pasteboard 
pasteboard?.getText(...)
...

```
