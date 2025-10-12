---
title: "disableLeaveConfirm"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/page_leave_confirm_modal/disable_leave_confirm
---
最后更新于 2025-03-12

# disableLeaveConfirm(Object object)

取消当前页面离开二次确认弹框。
**Notice**：说明：当前页面指的是调用tt.disableLeaveConfirm时**小程序栈顶页面**，与API在哪个页面实例调用无关，**tt.enableLeaveConfirm同理**。

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V5.17.0+ | V5.16.0+ | V5.13.0+ | V7.39.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fenter-level-back%2Fenter-level-back)
网页应用 | V5.17.0+ | V5.16.0+ | V5.13.0+ | V7.39.0+ | /

## 输入
继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，无属性描述

## 输出

继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fenter-level-back%2Fenter-level-back)

</div> 

```js
tt.disableLeaveConfirm({       
  success(res) {
    console.log(JSON.stringify(res));
  },
  fail(res) {
    console.log(`disenableLeaveConfirm fail: ${JSON.stringify(res)}`);
  }
})
```

`success`返回对象示例：

```json
{
  errMsg: "disableLeaveConfirm:ok"
}
```
