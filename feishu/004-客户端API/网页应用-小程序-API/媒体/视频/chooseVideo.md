---
title: "chooseVideo"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/video/choosevideo
last_remote_update: 2023-06-09
last_remote_update_timestamp: 1686281375000
---
最后更新于 2023-06-09

# chooseVideo(Object object)
**Notice**：该接口已停止维护，推荐使用 [chooseMedia](https://open.feishu.cn/document/uYjL24iN/uITMx4iMxEjLyETM/choosemedia)

从系统相册中选择视频，或使用相机拍摄视频。

## 支持说明

应用能力 | Android | iOS | PC | 预览效果
--- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fvideo%2Fvideo)
网页应用 | V3.44+ | V3.44+ | V3.47+ | 预览

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
sourceType | string[] | 否 | ['album', 'camera'] | 指定视频来源为相册或/和相机  
**示例值**：['album']  
**可选值有**：  
- `['album']`  
- `['camera']`  
- `['album','camera']`              
**Notice**：PC暂不支持camera
maxDuration | number | 否 | 60 | 选取视频最长时间，单位秒。  
**示例值**：80  
**最大值**：`180`  
**Notice**：- PC 端：不限制最大时长  
- iOS  
	- 当 `compressd` 为 `true` 时，`maxDuration` 默认值为 60s，最大支持选取 180s 视频  
	- 当 `compressd` 为 `false` 时，`maxDuration` 默认值为 60s，不限制最大时长  
- Android  
	- `maxDuration` 默认值为 60s，最大支持选取 180s 视频
compressed | boolean | 否 | true | 是否对选取视频进行压缩  
**示例值**：true  
**Notice**：- iOS 端：飞书[V3.37](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上版本支持,默认为不压缩，iOS 端设置为 `false` 时，不进行压缩转码，但是相册导出可能仍然需要花费一定时间  
- Android/PC 端：暂不支持（不进行压缩）

## 输出

`success`返回对象的扩展属性：

名称 | 数据类型 | 描述
--- | --- | ---
duration | number | 视频时长，单位：秒/s。  
**Notice**：PC 端：暂不支持
tempFilePath | string | 视频地址
size | number | 视频大小，单位：字节/Bytes
width | number | 视频宽度  
**Notice**：PC 端：暂不支持
height | number | 视频高度  
**Notice**：PC 端：暂不支持

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fvideo%2Fvideo)
          预览网页应用

</div> 

```js
tt.chooseVideo({
    sourceType: [
        "album"
    ],
    maxDuration: 80,
    compressed: true,
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`chooseVideo fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：
```json
{
    "duration": 8,
    "height": 600,
    "size": 594655,
    "tempFilePath": "ttfile://temp/1637482384392.mp4",
    "width": 600,
    "errMsg": "chooseVideo:ok"
}
```
