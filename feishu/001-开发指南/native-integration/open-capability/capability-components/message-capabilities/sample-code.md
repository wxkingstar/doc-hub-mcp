<!--
title: 示例代码
id: 7424771981790019585
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/message-capabilities/sample-code
updatedAt: 1732712095000
source: https://open.feishu.cn/document/native-integration/open-capability/capability-components/message-capabilities/sample-code
-->
# 示例代码
## iOS
```javascript 
// 下面的代码结合Tab组件，实现了一套注册主导航栏Tab并在界面中转发文件的示例
import LKTabExternal
import LKMessageExternal
import LKKABridge
@objcMembers
public class LKTabExternalTemplate: NSObject {
  static let shared = LKTabExternalTemplate()
  fileprivate let imp = TabIMP()
  public class func swiftLoad() {
    _ = shared
  }
}
fileprivate class TabIMP: NSObject {
  override init() {
    let api = KAAPI(channel: /* channel id */)
    api.register(tab: Tab.init, cache: true)
  }
}
fileprivate class Tab: NSObject {
  let vc = ViewController()
  override init() {
    vc.view.backgroundColor = .black
//    vc.forward()
  }
}
class FileMessage: KAFileMessageProtocol {
  var filePath: String
  init(filePath: String) {
    self.filePath = filePath
  }
  
}
extension Tab: KATabProtocol {
  var appId: String { "7267142583678140436" }
  /// 是否展示 navi bar
  var showNaviBar: Bool { true }
  /// tab 对应的 ViewController
  var tabViewController: () -> UIViewController {
    { [unowned self] in
    self.vc
    }
  }
  @objc
  func tapFirst() {
    vc.view.backgroundColor = .red
  }
  @objc
  func tapSecond(button: UIButton) {
    vc.view.backgroundColor = .green
  }
  /// navi bar 上方右侧第一个按钮，无需设置 size（会自动调整大小），仅当 showNaviBar 为 true 时生效，入参为 tabViewController
  var firstNaviBarButton: ((UIViewController) -> UIButton?)? {
    let ret: ((UIViewController) -> UIButton?)? = { _ in
      let button = UIButton(frame: .zero)
      button.backgroundColor = .red
      button.addTarget(self, action: #selector(self.tapFirst), for: .touchUpInside)
      return button
    }
    return ret
  }
  /// navi bar 上方右侧第二个按钮，无需设置 size（会自动调整大小），仅当 showNaviBar 为 true 时生效，入参为 tabViewController
  var secondNaviBarButton: ((UIViewController) -> UIButton?)? {
    let ret: ((UIViewController) -> UIButton?)? = { _ in
      let button = UIButton(frame: .zero)
      button.backgroundColor = .green
      button.addTarget(self, action: #selector(self.tapSecond), for: .touchUpInside)
      return button
    }
    return ret
  }
  /// navi bar 标题，仅当 showNaviBar 为 true 时生效
  var naviBarTitle: String? { "原生集成测试标题" }
  /// tab 单击事件
  var tabSingleClick: (() -> Void)? {
    { [weak self] in
      self?.vc.view.backgroundColor = .black
    }
  }
  /// tab 双击事件
  var tabDoubleClick: (() -> Void)? {
    { [weak self] in
      self?.vc.view.backgroundColor = .white
    }
  }
}
public class ViewController: UIViewController {
  lazy var button = {
    let button = UIButton(type: .custom)
    button.frame = .init(x: 0, y: 0, width: 100, height: 50)
    button.titleLabel?.text = "转发文件"
    button.titleLabel?.textColor = .darkGray
    button.backgroundColor = .blue
    button.addTarget(self, action: #selector(ViewController.forward), for: .touchUpInside)
    return button
  }()
  
  public override func viewDidLoad() {
    
    view.addSubview(button)
    button.center = .init(x: view.frame.width/2, y: view.frame.height/2)
  }
  
  @objc
  func forward() {
    let bundle = Bundle(for: Self.self)
    guard let path = bundle.path(forResource: "1.png", ofType: nil) else {
      button.titleLabel?.text = "没有找到文件路径"
      return
    }
    let documentTypes = ["public.data"]
    let vc = UIDocumentPickerViewController(documentTypes: documentTypes, in: .open)
    vc.delegate = self
    self.present(vc, animated: true)
    
  }
  
}
extension ViewController: UIDocumentPickerDelegate {
  private static let navigator = KAAPI(channel: /* channel id */).messageNavigator
  public func documentPicker(_ controller: UIDocumentPickerViewController, didPickDocumentsAt urls: [URL]) {
    guard let url = urls.last else {
      NSLog("---ka--- no url")
      return
    }
    NSLog("---ka---last url is %@, url count: %d", urls.last?.relativePath ?? "", urls.count)
    guard let path =  urls.last?.relativePath else {
      return
    }
    NSLog("---ka---local path is %@", path)
    let isSecuredURL = url.startAccessingSecurityScopedResource()
    let resources = try? url.resourceValues(forKeys:[.fileSizeKey])
    let filePath = documentPath(subFolder:"file").appendingPathComponent(url.lastPathComponent).path;
    let fileData = NSData.init(contentsOf: url);
    fileData?.write(toFile: filePath, atomically: true)
    if (isSecuredURL) {
        url.stopAccessingSecurityScopedResource()
    }
    NSLog("---ka---use path is %@", filePath)
    // 这里处理了消息转发
    let message = KAMessage(type: .file, body: FileMessage(filePath: filePath))
    navigator?.forward(message: message)
  }
  
  func documentPath(subFolder: String?) -> URL {
      let url = URL(fileURLWithPath: NSSearchPathForDirectoriesInDomains(
        FileManager.SearchPathDirectory.documentDirectory,
        FileManager.SearchPathDomainMask.userDomainMask, true
      ).first!)
      if (subFolder == nil) {
        return url
      }
      let result = url.appendingPathComponent(subFolder!)
      
      // 没有文件夹，尝试创建文件夹
      if (!FileManager.default.fileExists(atPath: result.path)) {
        do {
          try FileManager.default.createDirectory(at: result, withIntermediateDirectories: true, attributes: nil)
        } catch {
          return url
        }
      }
      
      return result
    }
}
```
```javascript 
#import <LKTabExternalIMP/LKTabExternalIMP-Swift.h>
// 通过+load实例化LKTabExternalTemplate
@implementation LKTabExternalTemplate (Private)
+ (void)load {
  [self swiftLoad];
}
@end
```