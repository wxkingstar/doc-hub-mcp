---
title: "SDK开发文档"
source_url: https://open.feishu.cn/document/common-capabilities/sso/mobile-app/sdk
last_remote_update: 2025-02-17
last_remote_update_timestamp: 1739790391000
---
最后更新于 2025-02-17

# SDK开发文档
## iOS 
### 集成
**兼容性**
- 支持的 iOS 版本: >= 8.0
- 支持的飞书版本:
  - 普通模式: >= 3.13
  - 挑战码模式: >= 3.45

**CocoaPods 集成**
```
pod 'LarkSSOSDK', '1.2.0', source: 'https://github.com/volcengine/volcengine-specs.git'
```
说明：
- LarkSSOSDK Pods specs 在 volcengine-specs 中，Podfile 中务必带上 `source`；
- 自 1.2.0 开始，LarkSSOSDK 使用 xcframework，framework 名称由`LarkSSO`调整为`LarkSSOSDK`，使用时请注意；
- 如果宿主是纯 OC 项目，大概率没有 Swift 编译环境，创建一个空的 Swift 文件即可，这样 Xcode 会增加 Swift 的编译环境（LarkSSO 使用 Swift 5）。

集成 Demo [LarkSSODemo 下载](https://lf3-static.bytednsdoc.com/obj/eden-cn/9230eh7phruhbfbog/LarkSSOSDKDemo-iOS.zip)

### 配置信息
1. 配置跳转 Scheme: LSApplicationQueriesSchemes Key 下添加 lark 

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/4553c66ded039135835c43628d72295e_B8tFrWEMds.png?height=93&lazyload=true&width=1280)

2. 配置飞书回跳 URL：URL types Key 下添加注册时申请到到 app_id （例如：clia0988c0addf81013），注意需要去掉 app_id 中的下划线

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/de3993c98c48830f5913b3beed3878e6_G8zswWNW4u.png?height=223&lazyload=true&width=1280)

### API
#### 注册应用信息
```
LarkSSO.register(apps: [
  App(server: .feishu, appId: "cli_a0988c0addf81013", scheme: "clia0988c0addf81013")
])
```

#### 设置语言

多语言目前会在手机没有安装飞书客户端的情况下，用于控制降级的H5页面的语言。飞书支持中、日、英三国语言，默认使用系统当前语言。
```
LarkSSO.setupLang("zh")
```

### 授权
#### 发起授权

| 参数         | 描述             | 是否必须        |
| --------- | ---------------  |  --------- |
|`scope` | 设置用户必须授予的权限，需要在应用已向租户申请的权限范围内，超出的会被忽略；没有通过此参数传入的权限，用户可以选择不授权 | 否 |
|`useChallengeCode` | bool值，默认为false，是否使用[挑战码模式](https://tools.ietf.org/html/rfc7636)（适用于无服务端的移动应用） | 否 |
```
let request: SSORequest = .feishu
request.scope = ["scopeA", "scopeB"]
LarkSSO.send(request: request, delegate: self)
```

#### 授权结果处理
```
extension MainViewController: LarkSSODelegate {
    func didReceive(response: SSOResponse) {
        if /*使用挑战码模式*/ {
            response.safeHandleResultWithCodeVerifier(success: { (code, codeVerifier) in
                alert(content: "Success: \(code) verifier: \(codeVerifier)")
            }, failure: { (error) in
                alert(content: "Failure: \(error)")
            })
        } else {
            response.safeHandleResult { (code) in
                alert(content: "Success: \(code)")
            } failure: { (error) in
                switch error.type {
                case .cancelled: break
                default:
                    alert(content: "Failure: \(error)")
                    break
                }
            }
        }
    }
}
```

#### 回跳 URL 处理
```
func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {
  return LarkSSO.handleURL(url)
}
```

#### 日志记录

日志用于SSO 工作相关问题的定位，如果宿主有Device ID系统，设置方法中可以填写自己系统的DeviceID，如果没有可不填，设置方法会返回生成DeviceID。
该DeviceID只是用于过滤该设备的日志的一个字符串，保证唯一即可。
```
LarkSSO.setupLog(did: "123456789")
// 或
let logDid = LarkSSO.setupLog()
// 保存 logDid 需要定位问题时候提供
```
### SwiftUI 兼容

若开发者采用的是SwiftUI项目，则需使用`UIViewControllerRepresentable` 实例去创建和管理承载Lark SSO的`UIViewController` 对象。此外，SwiftUI项目处理回跳URL的逻辑与UIKit项目不同。在SwiftUI项目中，开发者可创建SceneDelegate并使用[scene(_:openURLContexts:)](https://developer.apple.com/documentation/uikit/uiscenedelegate/3238059-scene)函数注册回跳 URL 处理逻辑。

#### 注册AppDelegate

```
import SwiftUI
@main
struct LarkSSOSwiftUIExampleApp: App {
    @UIApplicationDelegateAdaptor(AppDelegate.self) private var appDelegate // 注册AppDelegate
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
```

#### 创建AppDelegate，注册应用，设置日志，设置语言，注册SceneDelegate

```
import LarkSSOSDK
class AppDelegate: NSObject, UIApplicationDelegate {
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
        let app = App(server: .feishu, appId: "12345", scheme: "12345")
        LarkSSO.register(apps: [app]) // 注册应用
        LarkSSO.setupLang("zh") // 设置语言
        LarkSSO.setupLog() // 设置日志
        return true
    }

func application(_ application: UIApplication, configurationForConnecting connectingSceneSession: UISceneSession, options: UIScene.ConnectionOptions) -> UISceneConfiguration { 
    	// 注册SceneDelegate
        let sceneConfig: UISceneConfiguration = UISceneConfiguration(name: nil, sessionRole: connectingSceneSession.role)
        sceneConfig.delegateClass = SceneDelegate.self
        return sceneConfig
    }
}
```

#### 创建UIViewControllerRepresentable

```
import SwiftUI
struct LarkSSOView: UIViewControllerRepresentable {
    func makeUIViewController(context: Context) -> UIViewController {
        return LarkSSOViewController()
    }

func updateUIViewController(_ uiViewController: UIViewController, context: Context) {
        // Update UIViewController if needed
    }

}
```

#### 添加UIViewControllerRepresentable到SwiftUI View

```
import SwiftUI
struct ContentView: View {
    var body: some View {
        LarkSSOView()
    }
}
```

#### 创建UIViewController，发起授权，处理授权结果

```
import UIKit
import LarkSSOSDK
class LarkSSOViewController: UIViewController, LarkSSODelegate {
    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = .white

let button = UIButton(type: .system) // 创建授权按钮
        button.setTitle("Lark SSO", for: .normal)
        button.addTarget(self, action: #selector(buttonTapped), for: .touchUpInside)
        view.addSubview(button)
        button.translatesAutoresizingMaskIntoConstraints = false

NSLayoutConstraint.activate([
            button.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            button.centerYAnchor.constraint(equalTo: view.centerYAnchor)
        ])
    }

@objc func buttonTapped() {
        LarkSSO.send(request: .feishu, viewController: self, delegate: self) // 发起授权
    }

func lkSSODidReceive(response: LarkSSOSDK.SSOResponse) { // 处理授权结果
        response.safeHandleResult { code in
            print("Success: Code is (code).")
        } failure: { err in
            print("Failure: Error is (err.description).")
        }
    }
}
```

#### SceneDelegate处理回跳URL

```
import LarkSSOSDK
class SceneDelegate: NSObject, UIWindowSceneDelegate {
    var window: UIWindow?

func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        guard let _ = (scene as? UIWindowScene) else { return }
    }

func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
    	// 处理回跳URL
        if let url = URLContexts.first?.url {
            LarkSSO.handleURL(url)
        }
    }
}
```
## Android 接入指南
注：本文为飞书Android终端SDK新手使用教程，只涉及SDK的使用方法，默认读者已经具有使用Android Studio开发Android程序的经验，以及相关的编程知识基础等。

### 通用流程
- 开发环境：Android Studio
- 支持 Android 版本:  >=API 19 (4.4）
- 支持的飞书版本:
  - 普通模式: >= 3.13
  - 挑战码模式: >= 3.45

### 接入流程

#### 向飞书申请你的AppId

请到[飞书开放平台开发者后台](https://open.feishu.cn/app)进行申请，申请后将获得AppId，之后通过AppId为应用申请相关的权限，譬如授权；审核通过后即可使用相关的功能。

#### 下载Android Demo

[飞书授权demo](https://sf3-cn.feishucdn.com/obj/lark-eco-passport/LarkSSO-AndroidDemo.zip)提供了完整的工程配置及接入代码，你只需将其中的AppId替换为你申请的AppId，将local.properties中的sdk.dir配置为你的运行环境sdk位置，即可唤起飞书体验功能。

#### 集成到开发环境
- 下载[飞书授权sdk库](https://sf3-cn.feishucdn.com/obj/lark-eco-passport/LarkSSOSDKAndroid-3.0.10.zip)；
- 将下载的sdk aar文件拷贝到app/libs目录下；
- 在app的build.gradle文件中引入该aar，引入相关依赖项。
```
repositories {
    flatDir {
        dirs 'libs'
    }
}

dependencies {
    ...
    api(name:'larksso-3.0.10', ext:'aar')
    ...
}
```
- 由于Android高版本的一些限制，需要在AndroidManifest文件中加入相关schema
```
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.ss.android.myapp">

<queries>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <data
                android:host="ssoclient"
                android:scheme="lark" />
        </intent>
    </queries>

<activity
		android:name=".MainActivity"
        android:exported="true"
        android:launchMode="singleTop">
        <intent-filter>
            <action android:name="android.intent.action.MAIN" />
            <category android:name="android.intent.category.LAUNCHER" />
        </intent-filter>

<intent-filter>
            <action android:name="android.intent.action.VIEW" />
            <data android:scheme="Your APP_ID"/>
        </intent-filter>
    </activity>
</manifest>  
```
- 如果接入方是androidX库，在gradle.properties文件中添加：
```
android.useAndroidX=true
android.enableJetifier=true
```
- 
至此，sdk开发环境配置完毕。

### 授权流程
#### Manifest中设置
将待接入`Activity`的`launchMode`设置为`singleTop`。
```
<uses-permission android:name="android.permission.INTERNET"/>
<activity android:name=".MainActivity"
    android:launchMode="singleTop">
    ....
</activity>
```

#### 初始化

| 方法         | 描述             | 是否必须        |
| --------- | ---------------  |  --------- |
|`setAppId` | 设置为在开发者后台-【凭证和基础信息】中申请的`app_id` | 是 |
|`setServer` | 设置飞书服务器，必须为`Feishu` | 是 |
|`setChallengeMode`| 设置是否使用[挑战码模式](https://tools.ietf.org/html/rfc7636)（适用于无服务端的移动应用），默认为false | 是 |
|`setContext` | 设置`context`上下文对象 | 是 |
|`setLanguage` | 设置语言码，默认使用系统当前语言。详见语言码 | 否 |
|`setScopeList` | 设置用户必须授予的权限，需要在应用已向租户申请的权限范围内，超出的会被忽略，没有通过此参数传入的权限，用户可以选择不授权 | 否 |
|`setDeviceId` | 设置设备ID，用于相关问题的定位。如宿主有DeviceID系统，可通过此API设置；如果没有可不填，设置方法会返回生成的DeviceID，用户需保存DeviceID以供定位问题。DID长度限制为100位 | 否 |
```
ArrayList<String> scopeList = new ArrayList<>();
scopeList.add("contact:user.id:readonly");
LarkSSO.Builder builder = new LarkSSO.Builder().setAppId("cli_***")
        .setServer("Feishu")
        .setLanguage("zh")
        .setScopeList(scopeList)
        .setDeviceId("XXX")
        .setContext(MainActivity.this);
String deviceId = builder.getDeviceId();
Log.i(TAG, deviceId);
```

#### 发起授权
```
LarkSSO.inst().startSSOVerify(builder, new IGetDataCallback() {
     @Override
     public void onSuccess(CallBackData callBackData) {
         Toast.makeText(MainActivity.this, "Auth success, code is:" + callBackData.code + ",codeVerifier is:" + callBackData.codeVerifier, Toast.LENGTH_LONG).show();
     }

@Override
     public void onError(CallBackData callBackData) {
          Toast.makeText(MainActivity.this, "Auth Failed, errorCode is" + callBackData.code + ",codeVerifier is:" + callBackData.codeVerifier, Toast.LENGTH_LONG).show();
     }
});
```

#### 接受返回信息

```
@Override
protected void onResume() {
   super.onResume();
   LarkSSO.inst().parseIntent(this, getIntent());
}

@Override
protected void onNewIntent(Intent intent) {
   super.onNewIntent(intent);
   LarkSSO.inst().parseIntent(this, intent);
}

@Override
protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
   super.onActivityResult(requestCode, resultCode, data);
   LarkSSO.inst().parseIntent(this, data);
}
```

#### 常见问题
1. 在服务端注册的MD5签名如何获取？下载[GetMD5Signature.apk](https://sf3-cn.feishucdn.com/obj/lark-eco-passport/GetMD5Signature.apk)，输入包名，获取MD5签名；复制MD5签名到剪贴板，该MD5签名仅做参考。
2. 错误类型有哪些？详见错误处理。

## Harmony 接入指南

### 环境要求
- 开发环境:DevEco Studio
- OpenHarmony API 版本: >= 12(5.0.0)
- 支持的飞书版本：>= v7.37

### 接入流程
#### 申请AppId
请到[飞书开放平台开发者后台](https://open.feishu.cn/app)进行申请，申请后将获得AppId，之后通过AppId为应用申请相关的权限，譬如授权；审核通过后即可使用相关的功能。

#### 下载Harmony Demo体验
[鸿蒙版飞书授权Demo](https://sf3-cn.feishucdn.com/obj/lark-eco-passport/LarkSSODemoHarmony.zip)提供了完整的工程配置及接入代码，你只需将其中的AppId替换为你申请的AppId，即可唤起飞书体验功能。

#### 集成配置
- 下载[鸿蒙版飞书授权sdk库](https://sf3-cn.feishucdn.com/obj/lark-eco-passport/LarkSSOSDKHarmony-v1.0.0.zip)
- 在应用的entry模块根目录下新增lib目录（与src平级），将下载的sdk也就是har文件复制到该目录下
- 在entry模块的```oh-package.json5```文件中配置对sdk的依赖
```json5
{
  "name": "entry",
  "version": "1.0.0",
  "description": "Please describe the basic information.",
  "main": "",
  "author": "",
  "license": "",
  "dependencies": {
    "@lark/larksso": "file:./lib/larksso-1.0.0.har" // 注意sdk版本更新时需要同步更新下这个文件名
  }
}
```
- 在entry模块的```module.json5```文件中（src/main目录下）配置下面的属性
```json5
{
  "module": {
    //...
    "querySchemes": [
      "lark"
    ]
  }

"requestPermissions": [
      {
        "name": "ohos.permission.INTERNET"
      }
    ]
}
```
至此，sdk开发配置完成

### 授权流程
#### 初始化参数

| 方法       | 描述                                                                                                    | 是否必须 |
|----------|-------------------------------------------------------------------------------------------------------|------|
| `setAppId`   | 设置为在开发者后台-【凭证和基础信息】中申请的`app_id`                                                                       | 是    |
| `setServer` | 设置飞书服务器，默认为`Feishu`                                                                                   | 否    |
| `setChallengeMode` | 设置是否使用[挑战码模式](https://tools.ietf.org/html/rfc7636)（适用于无服务端的移动应用），默认为false，推荐设置为true                   | 是    |
| `setLanguage` | 设置语言码，默认使用系统当前语言。详见语言码                                                                                | 否    |
| `setScopeList` | 默认不用填写，如果申请飞书登录配置时选择了OIDC登录协议，需要设置为"openid"                                                           | 否    |
| `setDeviceId` | 设置设备ID，用于相关问题的定位。如宿主有DeviceID系统，可通过此API设置；如果没有可不填，设置方法会返回生成的DeviceID，用户需保存DeviceID以供定位问题。DID长度限制为100位 | 否    |
```typescript
    const appId = "" // 开放平台申请的app_id
    const larkBuilder: LarkBuilder = LarkBuilder.create(this.appId)
      .setChallengeMode(true) // 开启挑战码模式

```

#### 发起授权并接收返回信息
```typescript

const callback: IGetDataCallback = {
      onSuccess: (code:CallBackData) => {
         const msg = JSON.stringify(code)
         console.info("OhDemo onSuccess", JSON.stringify(code))
      },
      onError: (code:CallBackData) => {
         const msg = JSON.stringify(code)
         console.info("OhDemo onError", msg)
      },
  }
  LarkSSO.startSSOVerify(larkBuilder, callback)
```

#### 常见问题
1. 如何获取 HarmonyOS App ID: 
   1. 请确认您的应用已经按鸿蒙官网要求完成了[应用开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/application-dev-overview-V5)
   2. 登录[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/)平台，在“我的项目”中选择目标应用，获取“项目设置 > 常规 > 应用”的APP ID。
      ![获取APP ID](https://sf3-cn.feishucdn.com/obj/lark-eco-passport/oh_getAppId_Cn.png?height=870&lazyload=true&width=2870)

## 语言码
目前只用于降级H5页面显示配置，设置语言码（“zh”，“ja”，“jp” 等），默认使用系统当前语言。目前飞书支持中、日、英，Lark支持中、日、英等14种语言。
| 语言码 | 语言 |
|------|------|
|de| 德语|
|en| 英语|
|zh| 中文|
|fr| 法语|
|hi| 印地语|
|it| 意大利语|
|id| 印度尼西亚语|
|ko| 韩语|
|ru| 俄语|
|ja| 日语|
|th| 泰语|
|vi| 越南语|
|es| 西班牙语|
|pt| 葡萄牙语|

## 错误处理
|错误码|说明|
|----|----|
|-1|状态码校验失败，非当前SDK请求的响应|
|-2|没有获得有效的授权码|
|-3|用户取消授权|
|-4|跳转飞书失败|
|-5| 授权失败|
|-6|请求参数错误|

## 开源声明
[larkLarkSSO Android open source notice file](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/5a296964059bad63395139e81389a8ab_O57Ne29PQD.txt)
<br>
[larkLarkSSO_iOS open source notice file](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/31cc7506246bacddfb75b4103202347c_Xf5nixGDlQ.txt)
