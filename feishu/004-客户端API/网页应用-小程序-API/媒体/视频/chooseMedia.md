---
title: "chooseMedia"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/video/choosemedia
last_remote_update: 2025-08-01
last_remote_update_timestamp: 1754044336000
---
最后更新于 2025-08-01

# chooseMedia

chooseMedia(Object object) 用于拍摄，或从系统相册中选择图片或视频。

## 支持说明

该接口支持小程序和网页应用调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V4.7.0+ | V4.7.0+ | V4.7.0+ | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fchoose-media%2Fchoose-media)
网页应用 | V4.7.0+ | V4.7.0+ | V4.7.0+ | V7.35.0+ | 预览

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性如下所示。

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
mediaType | string[] | 否 | ["image", "video"] | 文件类型。可选值：  
- `["image"]`：图片。  
- `["video"]`：视频。  
- `["video", "image"]`：视频或图片，不分顺序。
sourceType | string[] | 否 | ["album", "camera"] | 指定视频来源。可选值：  
- `["album"]`：相册。  
- `["camera"]`：相机。  
- `["album", "camera"]`：相册或相机，不分顺序。  
**Notice**：**注意**：PC 端暂不支持设置该字段，默认为本地文件系统。
count | number | 否 | 9 | 最多可以选择的文件数量。  
- 支持选择多个图片或多个视频，在飞书 V5.30 版本之前，最多支持 9 个文件。在 V5.30 版本及以后，最多支持 20 个文件。  
- 使用相机拍照或拍视频时，该字段失效。
sizeType | string[] | 否 | ["original","compressed"] | 选择原图（或原视频），或进行压缩。可选值：  
- `["original"]`：选择原图或原视频。  
- `["compressed"]`：强制对图片或视频质量进行压缩。  
- `["original","compressed"]`：默认开启压缩，但可手动选择原图或原视频。  
**Notice**：**注意**：  
- Android/PC 端：不支持视频压缩。  
- PC 端：不支持 `["original","compressed"]`。默认取值为`["original"]`。  
- Harmony 端：暂不支持该字段。
maxDuration | number | 否 | 60 | 拍摄视频时支持的最长拍摄时间。单位为秒，时间范围为 3s 至 60s 之间。不限制相册。示例值：30  
**Notice**：**注意**：PC/Harmony 端暂不支持此参数。默认不限制最大时长。
cameraDevice | string | 否 | back | 使用相机拍摄时，默认使用的摄像头。可选值：  
- `front`：前置摄像头。  
- `back`：后置摄像头。  
**Notice**：**注意**：PC/Harmony 端暂不支持设置该字段。
isSaveToAlbum | string | 否 | 0 | 使用相机拍摄后图片是否保存到相册。仅 iOS 和 Android 支持，且在 `sourceType`为 `camera`时生效。可选值：  
- `"0"`：不保存。  
- `"1"`：保存。  
**Notice**：**注意**：  
- Android、iOS 端：飞书 [V5.13.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持设置该字段。  
-  Harmony 端：飞书 [V7.47.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持设置该字段。  
- PC 端：暂不支持设置该字段。

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，`success` 返回对象的扩展属性如下所示。

名称 | 数据类型 | 描述
--- | --- | ---
tempFiles | object[] | 临时文件数组。
&emsp;  
                    ∟  
                &nbsp;  
                    tempFilePath | string | 文件地址。
&emsp;  
                    ∟  
                &nbsp;  
                    type | string | 文件类型。可能值有 image（图片）、video（视频）。
&emsp;  
                    ∟  
                &nbsp;  
                    size | number | 视频大小。单位：字节（Bytes）
&emsp;  
                    ∟  
                &nbsp;  
                    duration | number | 视频时长，单位：秒（s）。选取文件类型为 video 时返回该字段。  
**Notice**：**注意**：PC 端暂不支持返回该字段。
&emsp;  
                    ∟  
                &nbsp;  
                    width | number | 视频宽度。选取文件类型为 video 时返回该字段。  
**Notice**：**注意**：PC 端暂不支持返回该字段。
&emsp;  
                    ∟  
                &nbsp;  
                    height | number | 视频高度。选取文件类型为 video 时返回该字段。  
**Notice**：**注意**：PC 端暂不支持返回该字段。

## 示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fchoose-media%2Fchoose-media)
    预览网页应用

</div> 

```js
tt.chooseMedia({
    mediaType: [
        "image",
        "video"
    ],
    sourceType: [
        "album"
    ],
    count: 1,
    sizeType: [
        "compressed",
        "original"
    ],
    maxDuration: 60,
    cameraDevice: "back",
    isSaveToAlbum: '0',
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`chooseMedia fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：
```json
{
    "errMsg": "chooseMedia:ok",
    "tempFiles": [
        {
            "tempFilePath": "ttfile://temp/6abe1c2d-2b78-476f-ad53-f7d4db3b51d3-11bb40a45f41c6cc4ff343c3ddf97c93.jpg",
            "size": 51014,
            "type": "image"
        }
    ]
}
```

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
