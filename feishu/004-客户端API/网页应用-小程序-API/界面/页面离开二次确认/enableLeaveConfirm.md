---
title: "enableLeaveConfirm"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/page_leave_confirm_modal/enable_leave_confirm
last_remote_update: 2025-03-12
last_remote_update_timestamp: 1741768300000
---
最后更新于 2025-03-12

# enableLeaveConfirm(Object object)

当某个页面返回或关闭时设置二次弹窗提示。

使用场景举例：当前页面为编辑页面且用户尚未保存所作更改时，可提示用户是否继续留在当前页面。
**Notice**：当前页面指的是调用tt.enableLeaveConfirm时**小程序栈顶页面**，与API在哪个页面实例调用无关，[tt.disableLeaveConfirm](https://open.feishu.cn/document/uYjL24iN/uUTOuUTOuUTO/page_leave_confirm_modal/disable_leave_confirm)同理。
例如，在页面A的异步接口中执行tt.enableLeaveConfirm操作，但异步接口执行结束后，此时用户已操作跳转至页面B，那么此时该接口生效页面为页面B。故尽量避免异步回调等case下使用，若无法避免，可在执行前对页面名称进行校验。

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V5.17.0+ | V5.16.0+ | V5.13.0+ | V7.39.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fenter-level-back%2Fenter-level-back)
网页应用 | V5.17.0+ | V5.16.0+ | V5.13.0+ | V7.39.0+ | 预览

## 输入
继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
effect | string[] | 是 |  | 指定生效场景:  
- "back": 点击返回(Android支持系统返回键；iOS不支持滑动关闭操作)  
- "close": 点击关闭  
 **Notice**：小程序：飞书[V5.20.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上版本 PC端如果通过快捷键关闭应用，也可以二次弹窗确认。
title | string | 否 |  | 指定弹窗标题，最长**16**个字符。
content | string | 否 |  | 指定弹窗内容，最长**80**个字符。
confirmText | string | 否 | 确定 | 确定按钮的文案，最长**8**个字符。
cancelText | string | 否 | 取消 | 取消按钮的文案，最长**8**个字符。

**Notice**：注意：title和content不能同时为空。

## 输出

继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fenter-level-back%2Fenter-level-back)

</div> 

```js
tt.enableLeaveConfirm({
  effect: ["close", "back"], 
  title: "提示", 
  content: "确认要退出页面吗？",
  confirmText: "确定",
  cancelText: "取消",
  success(res) {
    console.log(JSON.stringify(res));
  },
  fail(res) {
    console.log(`enableLeaveConfirm fail: ${JSON.stringify(res)}`);
  }
})
```

`success`返回对象示例：

```json
{
  errMsg: "enableLeaveConfirm:ok"
}
``` 

## 错误码
`fail`返回对象中会包含[errCode属性](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#a825f4c8)，代表错误码，具体错误码列表参见：

错误码 | 描述 | 排查建议
--- | --- | ---
1000001 | invalid parameter | 请仔细阅读文档，检查入参是否符合预期。
