<!--
title: 示例代码
id: 7424771981789921281
fullPath: /uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/logger-capability/sample-code
updatedAt: 1732712071000
source: https://open.feishu.cn/document/native-integration/open-capability/capability-components/logger-capability/sample-code
-->
# 示例代码
## iOS
```javascript 
import LKLoggerExternal
import LKKABridge
public class MyLogger: NSObject {
    static let logger = KAAPI(channel: /* channel id */).logger
    private static let tag = "MyLogger"
    
    private static func message(_ type: String) -> String {
        return "My (type) log"
    }
    public static func log() {
        Self.logger?.verbose(tag: tag, Self.message("verbose"))
        Self.logger?.debug(tag: tag, Self.message("debug"))
        Self.logger?.info(tag: tag, Self.message("info"))
        Self.logger?.warning(tag: tag, Self.message("warning"))
        Self.logger?.error(tag: tag, Self.message("error"))
    }
}
```