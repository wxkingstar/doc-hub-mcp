---
title: "shareWebContent"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/open-ability/share/sharewebcontent
last_remote_update: 2025-06-04
last_remote_update_timestamp: 1749004341000
---
最后更新于 2025-06-04

# shareWebContent(Object object)

分享应用内网页内容

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V5.23.0+ | V5.23.0+ | V5.23.0+ | V7.39.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fshare%2Fshare)
网页应用 | V5.23.0+ | V5.23.0+ | V5.23.0+ | V7.39.0+ | 预览

## 输入
继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
title | string | 否 |  | 分享组件的标题
url | string | 是 |  | 需要分享的网页链接

## 输出
继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性
## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>
  <div style="display: flex">
    [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fshare%2Fshare)
    预览网页应用

</div> 

```js
tt.shareWebContent({
  title: '我是分享标题',
  url: 'https://www.feishu.cn/',
  success(res) {
    console.log(JSON.stringify(res));
  },
  fail(res) {
    console.log(`share fail: ${JSON.stringify(res)}`);
  }
})
```
## 注意
success 回调的触发时机为唤起分享组件成功。
