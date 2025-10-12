---
title: "showPrompt"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/interaction-feedback/showprompt
---
最后更新于 2025-01-21

# showPrompt(Object object)

展示可输入内容的弹窗。

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V3.17.0+ | V3.17.0+ | V3.17.0+ | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fprompt%2Fprompt)
网页应用 | V3.44.0+ | V3.44.0+ | V3.47.0+ | V7.35.0+ | 预览

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
title | string | 否 |  | 标题，中文按照2个字符统计  
**最大长度**：`30`  字符
placeholder | string | 否 | Please enter your content here | 输入框内容为空时的提示文案
maxLength | number | 否 | 140 | 最大输入长度，设置为-1的时候不限制最大长度
confirmText | string | 否 | OK | 确定按钮的文案，中文按照2个字符统计  
**最大长度**：`8`  字符
cancelText | string | 否 | Cancel | 取消按钮的文案，中文按照2个字符统计  
**最大长度**：`8`  字符

## 输出

`success`返回对象的扩展属性：

名称 | 数据类型 | 描述
--- | --- | ---
confirm | boolean | 是否点击了确定按钮
cancel | boolean | 是否点击了取消按钮
inputValue | string | confirm为true时，用户输入的内容

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fprompt%2Fprompt)
          预览网页应用

</div> 

```js
tt.showPrompt({
    "title": "这是个输入弹窗",
    "placeholder": "在这里输入内容",
    "maxLength": 50,
    "confirmText": "确定",
    "cancelText": "取消",
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`showPrompt fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：

```json
{
    "errMsg": "showPrompt:ok",
    "confirm": true,
    "cancel": false,
    "inputValue": "示例内容"
}
```
