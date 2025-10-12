---
title: "saveImageToPhotosAlbum"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/image/saveimagetophotosalbum
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737433920000
---
最后更新于 2025-01-21

# saveImageToPhotosAlbum

saveImageToPhotosAlbum(Object object) 用于保存图片到系统相册。

## 注意事项

iOS 和 Android 调用前需要用户授权 `scope.writePhotosAlbum`。了解如何授权，可参见[API 权限](https://open.feishu.cn/document/uYjL24iN/uITMuITMuITM)。

## 支持说明

该接口支持小程序和网页应用调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | 预览
网页应用 | V3.44.0+ | V3.44.0+ | V3.47.0+ | V7.35.0+ | 预览

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性如下所示。

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
filePath | string | 是 | \- | 图片文件路径。示例值：ttfile://temp/1637489221234.jpg  
**Notice**：**注意**：  
- 不支持网络地址。  
- 文件后缀名需要是图片格式，各端支持的图片格式有所差异，具体可参考：  
  - PC 端：png、jpg、jpeg、gif、bmp、webp  
  - iOS 端：png、jpg、jpeg、gif  
  - Android 端：png、jpg、jpeg、gif、webp

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性。

## 示例代码

调用示例：

```js
tt.chooseImage({
  sourceType: ['album'],
  sizeType: ['compressed'],
  count: 10,
  success(res) {
    tt.saveImageToPhotosAlbum({
      filePath: res.tempFilePaths[0],
      success(res) {
        console.log(res);
      },
      fail(res) {
        console.log(`saveVideoToPhotosAlbum failed`);
      }
    });
  },
  fail(res) {
    console.log(`chooseImage failed`);
  }
});
```

`success`返回对象示例：
```json
{
    "errMsg": "saveImageToPhotosAlbum:ok"
}
```

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
