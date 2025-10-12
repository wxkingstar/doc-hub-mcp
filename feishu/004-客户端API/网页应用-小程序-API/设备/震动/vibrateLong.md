---
title: "vibrateLong"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/device/vibrate/vibratelong
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737433257000
---
最后更新于 2025-01-21

# vibrateLong(Object object)

使手机发生较长时间的振动。
**Notice**：iOS需要在【设置】-【声音与触感】中打开【振动】

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **X** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fvibrate%2Fvibrate)
网页应用 | V3.44.0+ | V3.44.0+ | **X** | V7.35.0+ | 预览

## 输入
继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，无扩展属性

## 输出
继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fvibrate%2Fvibrate)
          预览网页应用

</div> 

```js
tt.vibrateLong({ 
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`vibrateLong fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：
```json
{
    "errMsg": "vibrateLong:ok"
}
```
