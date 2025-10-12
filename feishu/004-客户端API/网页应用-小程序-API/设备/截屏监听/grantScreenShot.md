---
title: "grantScreenShot"
source_url: https://open.feishu.cn/document/web-app/gadget-api/device/user-screenshot-event/grantscreenshot
last_remote_update: 2025-03-12
last_remote_update_timestamp: 1741768323000
---
最后更新于 2025-03-12

# grantScreenShot

grantScreenShot(Object object) 用于开启/禁用截屏，仅在Android设备上生效。
## 注意事项

- 该接口只对应用当前页面生效。如果在应用中通过调用  [openSchema](https://open.feishu.cn/document/uYjL24iN/ukzN4IjL5cDOy4SO3gjM) 或 Applink 打开新页面，你需再次调用该接口才能对新页面开启或禁用截屏功能。
- 飞书提供了截屏保护功能，作为飞书的全局统一开关。详情参考飞书帮助中心文档 [管理员如何开启截屏录屏保护？ ](https://www.feishu.cn/hc/zh-CN/articles/428390929435-%E7%AE%A1%E7%90%86%E5%91%98%E5%A6%82%E4%BD%95%E5%BC%80%E5%90%AF%E6%88%AA%E5%B1%8F%E5%BD%95%E5%B1%8F%E4%BF%9D%E6%8A%A4)。一旦开启，所有在飞书内的页面都将禁止截屏。grantScreenShot 接口受到此开关的限制。管理员启用截屏保护后，小程序或网页应用将无法通过 grantScreenShot 再次启用截屏，并返回 1510001 错误。

## 支持说明

该接口支持小程序和网页应用调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V7.7.0+ | **X** | **X** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fon-user-capture-screen%2Fon-user-capture-screen)
网页应用 | V7.7.0+ | **X** | **X** | V7.35.0+ | 预览

## 输入
该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性如下所示。

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
status | number | 是 | 0 | 开启/禁用截屏。可选值：：  
- `0`：禁用截屏。  
- `1`：开启截屏。

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性。

## 示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fopen-location%2Fopen-location)
          预览网页应用

</div> 

```js
tt.grantScreenShot({
    "status": 0,
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`grantScreenShot fail: ${JSON.stringify(res)}`);
    }
});
```
`success`返回对象示例：
```json
{
    "errMsg": "grantScreenShot:ok"
}
``` 

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
