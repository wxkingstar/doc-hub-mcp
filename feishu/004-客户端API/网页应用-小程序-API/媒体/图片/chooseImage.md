---
title: "chooseImage"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/image/chooseimage
---
最后更新于 2025-08-01

# chooseImage

调用 chooseImage(Object object) 可以从系统相册中选择图片，或使用相机拍摄图片。

## 支持说明

该接口支持小程序和网页应用调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fimage%2Fimage)
网页应用 | V3.44.0+ | V3.44.0+ | V3.47.0+ | V7.35.0+ | 预览

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性如下所示。

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
sourceType | string[] | 否 | ["album", "camera"] | 指定图片来源。可选值：  
- `["album"]`：相册。  
- `["camera"]`：相机。  
- `["album", "camera"]`: 相册或相机。  
**Notice**：**注意**：PC 端仅支持本地相册（即`album`）。
count | number | 否 | 9 | 最多可以选择的文件数量，可支持选择多个图片。  
- 最小值：`1`  
- 最大值：`20`  
**Notice**：**注意**：使用相机拍照时该字段失效。
sizeType | string[] | 否 | ["original","compressed"] | 选择原图，或是对图片质量进行压缩。可选值：  
- `["original"]`：选择原图。  
- `["compressed"]`：强制对图片质量进行压缩。  
- `["original","compressed"]`: 默认开启压缩，但可手动选择原图。  
**Notice**：**注意**：  
- Android/iOS/PC 端：飞书[V3.38.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上版本支持设置该字段。  
- PC 端：不支持`["original","compressed"]`，默认为`["original"]`。  
- Harmony 端：暂不支持该字段。
cameraDevice | string | 否 | back | 使用相机拍摄的默认摄像头，仅 iOS 和 Android 支持，且在 `sourceType` 为 `camera` 时生效。可选值：  
- `front`：前置摄像头。  
- `back`：后置摄像头。  
**Notice**：**注意**：  
- iOS 端：飞书[V3.8.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上版本支持设置该字段。  
-  Android 端：飞书[V5.9.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上版本支持设置该字段。  
- PC 端：暂不支持设置该字段。  
- Harmony 端：暂不支持设置该字段。
isSaveToAlbum | string | 否 | 0 | 使用相机拍摄后图片是否保存到相册。仅 iOS 和 Android 支持，且在 `sourceType` 为 `camera` 时生效。可选值：  
- `"0"`：不保存。  
- `"1"`：保存。  
**Notice**：**注意**：  
- iOS 端：飞书[V5.13.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上版本支持设置该字段。  
-  Android 端：飞书[V5.13.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上版本支持设置该字段。  
-  Harmony 端：飞书[V7.47.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上版本支持设置该字段。  
- PC 端：暂不支持设置该字段。

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，`success` 返回对象的扩展属性如下所示。

名称 | 数据类型 | 描述
--- | --- | ---
tempFiles | object[] | 图片对象数组。
&emsp;  
                    ∟  
                &nbsp;  
                    path | string | 图片路径。
&emsp;  
                    ∟  
                &nbsp;  
                    size | number | 图片大小。单位：byte
tempFilePaths | string[] | 图片路径数组。

## 示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fimage%2Fimage)
          预览网页应用

</div> 

```js
tt.chooseImage({
  sourceType: ['album', 'camera'], // PC端无效
  count: 10,
  sizeType:['compressed'],
  cameraDevice: 'front',
  isSaveToAlbum: '0',
  success (res) {
    console.log(res.tempFilePaths, res.tempFiles);
  },
  fail (res) {
    console.log(`chooseImage 调用失败`);
  }
});
```

`success`返回对象示例：

```json
{
  "tempFilePaths": ["ttfile://temp/1637489223734.jpg"],
  "tempFiles": [
    {
      "path": "ttfile://temp/1637489223734.jpg",
      "size": 14247
    }
  ],
  "errMsg": "chooseImage:ok"
}

``` 

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
