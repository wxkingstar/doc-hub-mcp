---
title: "getVideoInfo"
source_url: https://open.feishu.cn/document/web-app/gadget-api/media/video/getvideoinfo
---
最后更新于 2025-04-15

# getVideoInfo

获取视频详细信息。 
注意事项：
- 仅支持 mp4、mov、m4v 视频格式

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V6.5.0+ | V6.5.0+ | V6.5.0+ | V7.35.0+ | 预览
网页应用 | V6.5.0+ | V6.5.0+ | V6.5.0+ | V7.35.0+ | 预览

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
src | string | 是 | 无 | 视频的路径，支持本地文件系统（用户目录、临时目录、包目录）下的路径，参考 [getFileSystemManager](https://open.feishu.cn/document/uYjL24iN/uETOuETOuETO/tt_get_file_system_manager)  
**示例值**：  
ttfile://temp/test-video.mp4

## 输出

`success`返回对象的扩展属性：

| 名称       | 数据类型   | 描述           |
| -------- | ------ | ------------ |
| type     | string | 视频格式         |
| duration | number | 视频长度，单位：秒（s） |
| size     | number | 视频大小，单位 kB   |
| width    | number | 视频的宽，单位 px   |
| height   | number | 视频的长，单位 px   |
| path     | string | 视频的本地路径      |

## 示例代码

```js
tt.getVideoInfo({
  src: "ttfile://temp/test-video.mp4",
  success(res) {
    console.log(res);
  },
  fail (res) {
    console.log(`getVideoInfo fail`);
  }
})
```
`success`返回对象示例：
```json
{
  "type": "video/mp4",
  "duration": 18,
  "size": 5343,
  "width": 720,
  "height": 1280,
  "path": "ttfile://temp/test-video.mp4"
}
```
