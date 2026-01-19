---
title: "Harmony网页能力"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/capability-components/web-capabilities/harmony-web-capability
last_remote_update: 2025-12-12
last_remote_update_timestamp: 1765507258000
---
最后更新于 2025-12-12

# alchemy_webview_api - Harmony WebView 能力 - 能力组件

| 组件名称 | 组件类型 | 组件版本 | 生效基线 |
| --- | --- | --- | --- |
| alchemy_webview_api | 能力组件 | 1.0.0 | 7.32.0 |

## 功能简介
提供 WebView 相关能力，包括 Cookie 设置与 UserAgent 注入

### 更新日志
- 新增 IAlchemyWebView 接口，支持设置 Cookie 与追加 UserAgent

## 示例代码
完整示例请查看 [SamplApp](https://github.com/larksuite/alchemy_app_demo/tree/main/alchemy_app_demo_harmony)

```ets
import { IAlchemyWebView } from '@ohos/alchemy_webview_api'

export class KARuntimeManager {
  private alchemyWebView?: IAlchemyWebView;

public loadModule(runtime: TrimisContainerWrapperInterface) {
    this.alchemyWebView = runtime.getAlchemyWebView();
    this.alchemyWebView?.setCookie('https://example.com', 'token=abc123');
    this.alchemyWebView?.appendUserAgent('AlchemyApp/1.0.0');
  }
}
```

## INTERFACE
### IAlchemyWebView
提供 WebView 相关能力，包括 Cookie 设置与 UserAgent 注入

```ets
interface IAlchemyWebView {
  setCookie(url: string, value: string): void // 设置Cookie
  appendUserAgent(userAgent: string): void // 添加UserAgent
}
```

#### 方法列表
#### `setCookie(url: string, value: string): void`
设置 Cookie

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| url | string | 是 | 链接地址 |
| value | string | 是 | cookie值 |

#### `appendUserAgent(userAgent: string): void`
添加 UserAgent

| 参数名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| userAgent | string | 是 | 要注入的userAgent相关字段（建议启动时直接注入，确保一次性注入完全，多次调用注入不同的值会造成覆盖） |
