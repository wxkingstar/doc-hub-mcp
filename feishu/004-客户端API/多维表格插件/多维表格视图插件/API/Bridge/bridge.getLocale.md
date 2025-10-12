---
title: "bridge.getLocale"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/bridge/bridge_getlocale
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690343000000
---
最后更新于 2023-07-26

# bridge.getLocale
获取当前文档语言配置。

## 输出
Promise 字符串，值为以下语言之一：
```js
export type Locale =
  | 'zh-CN'
  | 'zh-TW'
  | 'zh-HK'
  | 'en-US'
  | 'ja-JP'
  | 'fr-FR'
  | 'hi-IN'
  | 'id-ID'
  | 'it-IT'
  | 'ko-KR'
  | 'pt-BR'
  | 'ru-RU'
  | 'th-TH'
  | 'vi-VN'
  | 'de-DE'
  | 'es-ES';
```
## 示例代码
### 调用示例

```js
const res = await bitable.bridge.getLocale();
```

### 返回示例
res:
```js
'zh-CN'
```
