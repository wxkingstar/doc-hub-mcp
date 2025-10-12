---
title: "mailto"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/open-ability/mail/mailto
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737430704000
---
最后更新于 2025-01-21

# mailto(Object object)

调用系统发送邮件，调用邮件程序后会立即返回结果。后续登录账户、切换账户、发送、编辑、取消、失败等流程不会有回调。

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V2.2.0+ | V2.2.0+ | **X** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fmailto%2Fmailto)
网页应用 | V3.44+ | V3.44+ | **X** | V7.35.0+ | 预览

## 输入
继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
to | string[] | 否 |  | 收件人邮箱列表  
**示例值**：["test@gmail.com"]
cc | string[] | 否 |  | 抄送邮箱列表  
**示例值**：["test.cc@gmail.com", "test.cc2@gmail.com"]
bcc | string[] | 否 |  | 密送邮箱列表  
**示例值**：["test.bcc@gmail.com"]
subject | string | 否 |  | 主题  
**示例值**：测试
body | string | 否 |  | 邮件内容  
**示例值**：测试

## 输出

继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fmailto%2Fmailto)
          预览网页应用

</div> 

```js
tt.mailto({
    to: [
        "test@gmail.com"
    ],
    cc: [
        "test.cc@gmail.com",
        "test.cc2@gmail.com"
    ],
    bcc: [
        "test.bcc@gmail.com"
    ],
    subject: "测试",
    body: "测试",
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`mailto fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：
```json
{
    "errMsg": "mailto:ok"
}
```
