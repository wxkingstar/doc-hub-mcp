---
title: "bridge.getLanguage"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/bridge/bridge_getlanguage
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690343000000
---
最后更新于 2023-07-26

# bridge.getLanguage
获取当前文档语言。

## 输出
Promise 字符串，值为以下语言之一：
```js
export type Language =
  | 'zh'
  | 'zh-TW'
  | 'zh-HK'
  | 'en'
  | 'ja'
  | 'fr'
  | 'hi'
  | 'id'
  | 'it'
  | 'ko'
  | 'pt'
  | 'ru'
  | 'th'
  | 'vi'
  | 'de'
  | 'es';
```
## 示例代码
### 调用示例

```js
const res = await bitable.bridge.getLanguage();
```

### 返回示例
res:
```js
'zh'
```
