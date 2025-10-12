---
title: "startPullDownRefresh"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/pull-down-to-refresh/startpulldownrefresh
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737431269000
---
最后更新于 2025-01-21

# startPullDownRefresh(Object object)

下拉刷新。
调用该方法与用户手动触发下拉刷新效果一致。 warnning
只有在页面的`page.json`中配置了`enablePullDownRefresh: true`才能够开启下拉刷新。

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **X** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fpull-down-refresh%2Fpull-down-refresh)
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，无扩展属性

## 输出

继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fpull-down-refresh%2Fpull-down-refresh)

</div> 

```js
tt.startPullDownRefresh({
    success (res) {
        console.log(`startPullDownRefresh 调用成功`);
    },
    fail (res) {
        console.log(`startPullDownRefresh 调用失败`);
    }
});
```

`success`返回对象示例：
```json
{
    "errMsg": "startPullDownRefresh:ok"
}
```
