---
title: "compressImage"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/image/compressimage
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737433984000
---
最后更新于 2025-01-21

# compressImage

compressImage(Object object) 为压缩图片接口，压缩时可选压缩质量。

## 支持说明

该接口支持小程序和网页应用调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V2.0.0+ | V2.0.0+ | V2.0.0+ | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fimage%2Fimage)
网页应用 | V3.44.0+ | V3.44.0+ | V3.47.0+ | V7.35.0+ | 预览

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性如下所示。

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
src | string | 是 | \- | 图片路径。可以是相对路径、临时文件路径、存储文件路径。示例值：ttfile://temp/1637489223734.jpg
quality | number | 否 | 80 | 压缩质量。取值范围 (0,100]，数值越小，质量越低，压缩率越高（仅对 jpg 有效）。  
- 最小值：1  
- 最大值：100

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，`success` 返回对象的扩展属性如下所示。

名称 | 数据类型 | 描述
--- | --- | ---
tempFilePath | string | 压缩后的图片路径。三端输出的图片格式差异说明：  
- iOS 端：统一返回压缩后的 jpeg 图片。  
- Android/PC 端：仅当输入图片为 jpg/jpeg 时压缩，其余格式不做压缩，并按原始图片返回。

## 示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fimage%2Fimage)
          预览网页应用

</div> 

```js
tt.chooseImage({
  count: 1,
  sourceType: ['album', 'camera'],
  success: (result) => {
    tt.compressImage({
      src: result.tempFilePaths[0],
      quality: 50,
      success: (res) => {
        console.log(res);
      },
      fail: (res) => {
        console.error('compressImage failed')
      }
    })
  }
});
```

`success`返回对象示例：

```json
{
  "errMsg": "compressImage:ok",
  "tempFilePath": "ttfile://temp/668fbc22-638f-42f3-8e15-cadcbe1bc8d0-e95788e6-2949-4fde-b253-14b6b4c57e15-f9c3d20d141d0e6f32eea6c240b59544.png"
}
``` 

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
