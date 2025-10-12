---
title: "bridge.getTheme"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/bridge/bridge_gettheme
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690343000000
---
最后更新于 2023-07-26

# bridge.getTheme
获取当前主题。

## 输出
Promise 字符串，主题色，值为以下值之一：
```js
export enum ThemeModeType {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}
```
## 示例代码
### 调用示例

```js
const res = await bitable.bridge.getTheme();
```

### 返回示例
res:
```js
'LIGHT'
```
