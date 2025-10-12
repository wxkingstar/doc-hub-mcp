<!--
title: iOS 最佳实践
id: 7413791302650331138
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/ios-best-practices
updatedAt: 1726199848000
source: https://open.feishu.cn/document/native-integration/open-scene-introduction/ios-best-practices
-->
# iOS最佳实践
 ## 登录集成场景：密码登录 + 人脸识别
1. ### 	场景能力介绍
	登录场景支持将飞书登录替换为客户自研/采买的密码登录键盘、人脸识别 等。
该场景主要实现了 [原生集成应用](/ssl:[iOS原生集成应用](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/native-integrated-application/ios-))协议组件。该组件允许开发者自定义登录或打开原生集成应用时的页面。

2. ### 效果示例

	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/8b972819134fbcf6e1f6f3e41c6161e7_7ZVK7pYdjz.png?height=873&lazyload=true&maxWidth=600&width=833)

3. ### 登录场景流程
	![20240912-180748.jpeg](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/f57a291135e90aeb68f47b9f30f36cec_vzF4WzhgbH.jpeg?height=808&lazyload=true&width=1477)

4. ### 代码实践
	1. 创建登录页面导航类`PassportNavigationViewController`，实现`UINavigationController`
该类包含所有的登录验证流程以及页面功能实现。
        ```javascript 
        import UIKit
        class PassportNavigationViewController: UINavigationController {
            init(/* args */) {
                /* init states based on args */
                let rootVC = PassportViewController()         super.init(rootViewController: rootVC)     }
        }
        class PassportViewController {
            let loginButton = UIButton()
            /* other page components like buttons, fields, ... */

            override func viewDidLoad() {
                super.viewDidLoad()

                view.addSubView(loginButton)
                loginButton.addTarget(self, action: #selector(onLoginButtonClicked), for: .touchUpInside)
                /* set style */

                /* add other components */
            }
        }
        extension PassportViewController {
            func onLoginButtonClicked() {
                /* impl */
            }
            /* other actions */
        }
        /* other view controllers */
        ```

       2. 实现 [原生集成应用](/ssl:[iOS原生集成应用](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/native-integrated-application/ios-)) 协议组件中的 Protocol
            1. 引入`LKNativeAppExtension`和`LKNativeAppExtensionAbility`
            1. 创建`PassportPageRoute`类并实现 `LKNativeAppExtension`和`LKNativeAppExtensionPageRoute`协议。
            1. `LKNativeAppExtension`协议用于返回特定的`app_id`，将`PassportPageRoute`类注册为特定 channel 的 pageRoute 实现。
                
        :::html
          <md-alert type="tip">
           如何获取 app_id ? [原生集成应用身份申请指南](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/native-integrated-application/nati)

          </md-alert>
        :::
        
        ```javascript 
        import Foundation
        import LKNativeAppExtensionAbility
        import LKNativeAppExtension


        @objc(PassportPageRoute) // 指定 PassportPageRoute 的 Object-C 类名
        public class PassportPageRoute: LKNativeAppExtension, LKNativeAppExtensionPageRoute {
                // Swift 中仅需实现 LKNativeAppExtensionPageRoute
                // LKNativeAppExtension 在 Object-C 中实现
                public func pageRoute(_ link: URL!, from: UIViewController!) {
                     /* parse login args from link */
                     let nav = PassportNavigationViewController(/* args */)
                     nav.modalPresentationStyle = .fullScreen
                     from.present(nav, animated: true)
                }
          }
          ```
        

		3. 创建 Object-C(.m) 文件，为上一步中定义的`PassportPageRoute`类实现`LKNativeAppExtension`协议。
      以 channel *原生集成离线演示* (saysjc51) 为例
            - `cli_a56503ebdeaf900b`是**原生集成离线演示channel**绑定的登录 app_id
            - `LKNativeAppExtension`宏为`PassportPageRoute`实现`LKNativeAppExtension`协议，将其注册为 *原生集成离线演示* channel 登录时的 pageRoute 实现          
        ```javascript 
          @import LKNativeAppExtension;
          // LKNativeAppExtension 在 Object-C 中实现。
          @LKNativeAppExtension(PassportPageRoute, cli_a56503ebdeaf900b, false)
        ```

## 三方安全场景：三方 VPN SDK 集成
1. ### 场景能力介绍
	三方VPN SDK支持客户在外网环境下，连接VPN后，打开公司内网环境。
该场景主要实现了 [iOS WebContainer](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/webcontainer/ios-webcontainer)协议组件，该组件允许开发者自定义 Web 页面操作（如打开、关闭页面）时的回调函数。



2. 	### 效果示例
    
	![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/c4b9904bcba0bc2e5a6a87096ee32503_5HWf1ndYYj.png?height=2556&lazyload=true&maxWidth=300&width=1179)

3. ### 代码实践	
	1. 实现[WebContainer](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/webcontainer/ios-webcontainer) 协议组件
   		 
         引入`LKWebContainerExternal`。定义`VPNWebContainer`类，实现`KAWebContainerProtocol`协议。该协议包含 Web 页面操作流程中的所有回调函数
        ```javascript 
        import LKWebContainerExternal
        @objc // 需要标注为 Object-C 类，实现 NSObject
        public class VPNWebContainer: NSObject，KAWebContainerProtocol {
            // 关闭 Web 页面前调用
            public func onClose(url: String) {
                /* impl */
            }

            public func onTabVisibilityChanged(selected: Bool, tabParams: LKWebContainerExternal.TabParams) {
                /* impl */
            }

            // 打开网页失败时显示的错误页配置
            public func errorPageConfig() -> LKWebContainerExternal.KAWebContainerErrorPageConfig? {
                /* create error page config */
                return config
            }

            // 打开 Web 页面前调用
            public func onOpen(url: String, onSuccess: @escaping () -> Void, onFail: @escaping (_ code: Int) -> Void) {
                if isInternalUrl(url) {
                    /* present alert view controller
                    if confirmClicked {
                        onSuccess()
                    } else {
                        onFail(code)
                    }
                    */
                } else {
                    onSuccess()
                    return
                }
            }
        }
        extension VPNWebContainer {
            func isInternalUrl(url: String) -> Bool {
                /* check if the url is internal */
                return result
            }
        }
        ```
	2. 注册实现了 WebContainer 协议的类
   		1. 创建 Object-C 文件，定义 WebContainer 加载器`VPNWebContainerLoader`
   		1. 在`load`方法中注册实现了`KAWebContainerProtocol`协议的类`VPNWebContainer`。允许注册多个不同的 WebContainer 协议实现。
   		 
           ```javascript 
            #import <LKWebContainerExternalIMP-Swift.h>
            #import <LKWebContainerExternal/LKWebContainerExternal-Swift.h>
            @interface VPNWebContainerLoader: NSObject
            @end
            @implementation VPNWebContainerLoader
             +(void)load {
                 KAWebContainerExternal.shared.container = [[VPNWebContainer alloc] init];
             }
            @end
            ```
                
## H5 调用 JS API 场景：某三方地图 SDK 集成
1. ### 场景能力介绍

	支持在 H5 页面调用扩展的 JsApi， 从而达到在飞书内，客户可通过 H5 实现轻量化的特化开发。
该场景主要实现了[JS API扩展](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/js-api-extension/ios-js-api-extens)协议组件。该组件允许开发者自定义事件及对应 handle 函数，用于响应 H5 页面调用 JsAPi 发送的事件。

2. ### 效果示例

	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a2f6876a9316dc6a8275cb4eac1898dc_90RoIM5q5Y.png?height=878&lazyload=true&maxWidth=600&width=833)

3. ### 代码实践

	1. 定义事件 handler，实现 [JS API扩展](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/js-api-extension/ios-js-api-extens)协议组件。
   		1. 引入`LKJsApiExternal`。定义 `LKJsApiExternalTemplate` 类，实现`KANativeAppPluginDelegate`
    	1. 在 `getPluginApiNames`中定义需要处理的所有事件列表。当页面发送的事件包含在列表中时，会触发`handle`方法
   		1. 实现`handle`方法
            ```javascript 
            import LKJsApiExternal
            import ThirdPartyMapSDK
            @objc // 需要标注为 Object-C 类，实现 NSObject
            public class LKJsApiExternalTemplate: NSObject, KANativeAppPluginDelegate {
                // 返回单个事件名，含义同 getPluginApiNames
                public func getPluginName() -> String {
                    ""
                }
                // 返回 LKJsApiExternalTemplate 可以处理的所有事件列表
                public func getPluginApiNames() -> [String] {
                    ["GET_LOCATION", "GET_RESTAURANTS", ...]
                }
                // event 处理函数
                public func handle(event: LKJsApiExternal.KANativeAppAPIEvent, callback: @escaping (Bool, [String : Any]?) -> Void) {
                    let results:[String : Any]? = nil

                    if event.name == "GET_LOCATION" {
                        results = /* get location via ThirdPartyMapSDK */
                    } else if event.name == "GET_RESTAURANTS" {
                        let points = /* get interest points via ThirdPartyMapSDK */
                        results = filterRestaurants(points)
                    } else {
                        /* other impl */
                    }

                    callback(true, results)
                }
                // 设置 event 上下文
                public func setContext(context: NativeAppPublicKit.NativeAppPluginContextProtocol) {
                    /* set event context for continuous callback */
                }
            }
            extension LKJsApiExternalTemplate {
                func filterRestaurants(points: [ThirdPartyMapSDK.PointOfInterest]) -> [String : Any]? { 
                    /* filter interest points by categories */
                }
            }
            ```

	2. 创建 Object-C(.m) 文件，注册实现了`KANativeAppPluginDelegate`协议的`LKJsApiExternalTemplate`。允许同时注册多个不同的实现。
          ```javascript 
          @import LKJsApiExternal;
          @interface JsRegistry: NSObject
          @end
          @implementation JsRegistry
          +(void)load {
               KANativeAppAPIExternal.shared.delegate = [[LKJsApiExternalTemplate alloc] init];
          }
          @end
## 三方邮件集成场景

1. ### **场景能力介绍**

	邮件集成场景支持在飞书内使用客户自研/采买邮箱 **。** 并支持将集成的客户邮箱放置到客户端导航栏，调整应用顺序。
该场景主要实现了[Tab容器协议](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/tab-container/ios-tab-container)组件，开发者在开放平台创建原生集成应用后，该组件可以将应用添加到客户端导航栏。

2. ### 效果示例
	![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/540f661b8feccfe7b722ac2d432eadbb_QKohjiXJMm.png?height=880&lazyload=true&maxWidth=600&width=828)
  
3. ### 代码实践

	1. 创建邮箱页面`TabRootViewController`，实现`UIViewController`。
该类包含邮箱应用的所有页面功能实现
        ```javascript 
        import UIKit
        @objc
        public class TabRootViewController: UIViewController {
            private var tableView: UITableView? // 邮件列表
            private var sidebar: TabSidebarController? // 边栏，实现 UIViewController
            /* other components */

            public override func viewDidLoad() {
                super.viewDidLoad()
                sidebar = TabSidebarController()

                tableView = UITableView()
                view.addSubview(tableView)
                initTableView()

                /* add other components and set style */
            }
        }
        extension TableRootViewController: UITableViewDelegate, UITableViewDataSource {
            func initTableView() {
                tableView?.delegate = self
                tableView?.dataSource = self
                /* get mail list and init table view */
            }

            /* impl UITableViewDelegate and UITableViewDataSource */
        }
        extension TableRootViewController {
            func presentSideBar() {
                if let menu = self.sidebar {
                    self.present(menu, animated: true)
                }
            }
        }
        ```
	2. 参考[Tab容器应用身份申请指南](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/tab-container/tab-container-applic)申请应用，并将应用配置到主导航
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/0306d780c1ea95bfa2743cddef969dde_v2ZOcvIr00.png?height=809&lazyload=true&width=1905)
	3. 实现 [Tab容器协议](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/tab-container/ios-tab-container)组件
   		 1. 引入`LKTabExternal`，创建`MySwiftTab`类，实现`KATabProtocol`
      	 ```javascript 
          @objc // 标注为 Object-C 类，以备在 OC 代码中初始化
          public class MySwiftTab: KATabProtocol {
              // 邮箱应用的 app id，需要联系项目经理通过开放平台显示的应用 app id “cli_XXXXX...”换取
              public var appId: String { "7343086384787750940" } 
              // 是否在应用页面内展示顶部导航
              public var showNaviBar: Bool { false } 
              // 顶部导航标题
              public var naviBarTitle: String? { "三方邮件" } 
              // 返回自定义的邮箱应用页面
              public var tabViewController: () -> UIViewController { TabRootViewController(nibName: nil, bundle: nil)}
              // 顶部导航按钮1
              public var firstNaviBarButton: ((UIViewController) -> UIButton?)?  { self.createFirstButton }
              // 顶部导航按钮2
              public var secondNaviBarButton: ((UIViewController) -> UIButton?)? { self.createSecondButton }
              // 单击触发
              public var tabSingleClick: (() -> Void)? { /* impl */ }
              // 双击触发
              public var tabDoubleClick: (() -> Void)? { /* impl */ }
          }
          ```
	3. 创建 Object-C(.m) 文件，注册实现了`KATabProtocol`协议的`MySwiftTab`
        ```javascript 
        @interface KATabRegistry: NSObject
        @end
        @implementation KATabRegistry
        +(void)load {
            [KATabExternal registerWithDelegate: [[MySwiftTab alloc] init]];
        }
        @end
        ```