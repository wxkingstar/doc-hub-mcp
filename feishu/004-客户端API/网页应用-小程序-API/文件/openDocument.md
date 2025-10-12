---
title: "openDocument"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/file/opendocument
---
最后更新于 2025-03-12

# openDocument

openDocument(Object object) 用于在新页面中打开文件。

## 注意事项

仅当文件名有 `fileType` 字段中的合法后缀时，文件可正常打开。

## 支持说明

该接口支持小程序和网页应用调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V2.6.0+ | V2.6.0+ | V2.6.0+ | V7.39.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Ffile%2Ffile)
网页应用 | V3.44.0+ | V3.44.0+ | V3.44.0+ | V7.39.0+ | 预览

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性如下所示。

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
filePath | string | 是 | \- | 文件路径。最小长度：`1` 字符。
fileType | string | 否 | \- | 文件类型。指定打开文件的类型，如果 `filePath` 为云空间文档链接，则需要声明为 `cloudFile`。  
**可选值**：  
- `doc`：doc 格式。  
- `docx`：docx 格式。  
- `xls`：xls 格式。  
- `xlsx`：xlsx 格式。  
- `ppt`：ppt 格式。  
- `pptx`：pptx 格式。  
- `pdf`：pdf 格式。  
- `zip`: zip 格式。  
  	- Android 端：飞书 [V5.2.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持该值。  
  	- iOS 端：飞书 [V5.1.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持该值。  
  - PC 端：暂不支持该值。  
- `cloudFile`：云空间文档。支持打开云空间内的所有文档类型，包括文件夹。  
  - 小程序：飞书 [V3.12.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持该值。  
  - 网页应用：飞书 [V3.44.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持该值。  
- `eml`: eml 格式。飞书 [V5.14.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持该值。  
**Notice**：**注意**：  
- Harmony 端：目前仅支持 pdf 和 cloudFile 值。
showMenu | boolean | 否 | true | 是否显示右上角菜单，以及底部的 **使用外部应用打开** 按钮。  
   **Notice**：**注意**：  
- Android/iOS 端  
  - 小程序：飞书 [V3.35.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持设置该字段。  
  - 网页应用：飞书 [V3.44.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持设置该字段。  
- PC 端：暂不支持设置该字段。  
- Harmony 端：暂不支持设置该字段。
padFullScreen | boolean | 否 | false | 在 Pad 设备上是否全屏打开文件。  
  **Notice**：**注意**：  
- iOS 端：飞书 [V5.12.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持设置该字段。  
- Android 端：暂不支持设置该字段。

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性。

## 示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Ffile%2Ffile)
          预览网页应用

</div> 

```js
// 打开本地文件
tt.filePicker({
  success(res) {
    const filePath = res.list[0].path;
    tt.openDocument({
      filePath,
      showMenu: true,
      success(res) {
        console.log(JSON.stringify(res));
      },
      fail(res) {
        console.log(`openDocument fail: ${JSON.stringify(res)}`);
      },
    });
  },
});

// 打开云空间文档
tt.openDocument({ 
  filePath: "cloudFilePath", // 云空间文档链接
  fileType: "cloudFile",
  success(res) {
    console.log(JSON.stringify(res)); 
  },
  fail(res) { 
    console.log(`openDocument fail: ${JSON.stringify(res)}`); 
  },
})
```

`success`返回对象示例：

```json
{ "errMsg": "openDocument:ok" }
```

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
