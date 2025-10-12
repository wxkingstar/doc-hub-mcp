<!--
title: 示例代码
id: 7424771981789986817
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/applink-capability/sample-code
updatedAt: 1744872815000
source: https://open.feishu.cn/document/native-integration/open-capability/capability-components/applink-capability/sample-code
-->
# 示例代码
## iOS
```javascript 
import LKAppLinkExternal
import LKKABridge
class MySubViewController {
    /* custom page view */
}
class MyViewController: UIViewController {
    let subView: MySubViewController = MySubViewController()
    static let navigator = KAAPI(channel: /* channel id */ ).navigator
    
    public override func viewDidLoad() {
        super.viewDidLoad()
        /* custom page view */
    }
    // 打开工作台
    func openWorkplace() {
        Self.navigator?.open(url: NSURL(string: "lark://applink.feishu.cn/client/workplace/open") ?? NSURL(), from: self)
    }
    func testAppLinkPush() {
        Self.navigator?.push(vc: self.subView, style: .default) {
            /* custom impl */
        }
    }
    
    func testAppLinkPop() {
        Self.navigator?.pop(vc: self.subView, style: .default) {
            /* custom impl */
        }
    }
    
    func testAppLinkPresent() {
        Self.navigator?.present(vc: self.subView) {
            /* custom impl */
        }
    }
}
```