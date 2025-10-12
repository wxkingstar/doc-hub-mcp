---
title: "Env.Cookie.securityCookieDetect"
source_url: https://open.feishu.cn/document/develop-docs-add-ons/05-api-doc/env/cookie/envCookieSecuritycookiedetect
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960448000
---
最后更新于 2025-07-31

# Env.Cookie.securityCookieDetect
获取当前浏览器是否支持第三方cookie，该方法为异步调用
<md-alert> @lark-opdev/block-docs-addon-api **0.2.41+** 支持

## 可用性说明(0.2.41)

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

无需传入参数。

## 输出
```js
{
  security_detect_3rd_party_cookie: boolean;
};
```

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const data = await DocMiniApp.Env.Cookie.securityCookieDetect();
console.log('debug', data);
```

### 返回示例

```js
{
  security_detect_3rd_party_cookie: true;
};
```
