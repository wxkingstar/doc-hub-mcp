---
title: "redirectTo"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/navigation/redirectto
last_remote_update: 2025-05-14
last_remote_update_timestamp: 1747188566000
---
最后更新于 2025-05-14

# redirectTo(Object object)

关闭当前页面，跳转到指定页面
**Notice**：**不能**跳转到 TabBar 页面。

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fnavigator%2Fnavigator)
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
url | string | 是 |  | 需要跳转的应用内非 tabBar 的页面的路径, 路径后可以带参数。可以以这种形式带上参数 "path?key1=value1&key2=value2"。参数在指定页面的 onLoad 参数以对象形式传递。  
**示例值**：path?key1=value1&key2=value2

## 输出

继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fnavigator%2Fnavigator)

</div> 

```js
tt.redirectTo({
    "url": "/pages/navigateTo/index",
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`redirectTo fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：
```json
{
    "errMsg": "redirectTo:ok"
}
```
