---
title: "saveVideoToPhotosAlbum"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/video/savevideotophotosalbum
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737434006000
---
最后更新于 2025-01-21

# saveVideoToPhotosAlbum(Object object)

保存视频到系统相册。
**Notice**：注意事项：
- **iOS和Android**调用前需要用户授权 `scope.writePhotosAlbum`。了解如何授权，可查看[API 权限](https://open.feishu.cn/document/uYjL24iN/uITMuITMuITM)。

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fvideo%2Fvideo)
网页应用 | V3.44.0+ | V3.44.0+ | V3.47.0+ | V7.35.0+ | 预览

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
filePath | string | 是 |  | 视频文件路径。不支持网络地址。  
**示例值**：ttfile://temp/1637482384392.mp4

## 输出

继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fvideo%2Fvideo)
    预览网页应用

</div> 

```js

tt.saveVideoToPhotosAlbum({
  filePath: 'ttfile://temp/uHQa5KPuS4tzOAK.MP4',//本地视频文件
  success(res) {
    console.log(res);
  },
  fail(res) {
    console.log(`saveVideoToPhotosAlbum failed`);
  }
});

```

`success`返回对象示例：
```json
{
    "errMsg": "saveVideoToPhotosAlbum:ok"
}
```
