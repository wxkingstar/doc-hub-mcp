---
title: "docsPicker"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/file/docspicker
last_remote_update: 2025-10-21
last_remote_update_timestamp: 1761014057000
---
最后更新于 2025-10-21

# docsPicker(Object object)

打开云文档选择列表

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V3.12.0+ | V3.12.0+ | V3.13.0+ | V7.49.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Ffile%2Ffile)
网页应用 | V3.44.0+ | V3.44.0+ | V3.47.0+ | V7.49.0+ | 预览

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
pickerTitle | string | 否 | Select Docs | 允许开发者自定义组件的标题文案
pickerConfirm | string | 否 | Select | 允许开发者自定义组件的选择按钮文案

## 输出

`success`返回对象的扩展属性：

名称 | 数据类型 | 描述
--- | --- | ---
fileList | object[] | 文件列表
&emsp;  
∟  
&nbsp;  
filePath | string | docs 文件 url
&emsp;  
∟  
&nbsp;  
fileName | string | docs 文件名

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>
  <div style="display: flex">
    [预览小程序 ](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Ffile%2Ffile)
    预览网页应用

</div> 

```js
tt.docsPicker({
  pickerTitle: "Select Docs",
  pickerConfirm: "Select",
  success(res) {
    console.log(JSON.stringify(res));
  },
  fail(res) {
    console.log(`docsPicker fail: ${JSON.stringify(res)}`);
  },
});
```

`success`返回对象示例：

```json
{
  "errMsg": "docsPicker:ok",
  "fileList": [
    {
      "filePath": "https://example.feishu.cn/base/bascn**************",
      "fileName": "示例文档1"
    },
    {
      "filePath": "https://example.feishu.cn/docx/doxcn**************",
      "fileName": "示例文档2"
    }
  ]
}
```
