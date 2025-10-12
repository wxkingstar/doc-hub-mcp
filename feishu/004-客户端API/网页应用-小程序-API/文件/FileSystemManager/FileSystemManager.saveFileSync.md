---
title: "FileSystemManager.saveFileSync"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/file/file_system_manager/file_system_manager_save_file_sync
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737433770000
---
最后更新于 2025-01-21

# FileSystemManager.saveFileSync

FileSystemManager.saveFileSync(string tempFilePath, string filePath) 用于保存临时文件到本地用户目录。

## 注意事项

- 该 API 会把临时文件移动到本地用户目录，所以在调用成功后原文件路径将访问失败。
- iOS 和 Android 的本地用户目录存储大小限制为 200 MB。

## 支持说明

该接口支持小程序和网页应用调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V5.23.0+ | V5.23.0+ | **X** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Ffile%2Ffile)
网页应用 | **X** | **X** | **X** | **X** | 预览

## 输入

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
tempFilePath | string | 是 | \- | 临时文件路径。
filePath | string | 否 | \- | 本地用户文件路径。

## 输出

名称 | 数据类型 | 描述
--- | --- | ---
savedFilePath | string | 保存后的文件路径。

## 代码示例

```js
const fileSystemManager = tt.getFileSystemManager();

tt.chooseImage({
  success(res) {
    // 获取图片, chooseImage 获取的文件在临时文件目录内
    const tempFilePaths = res.tempFilePaths;
    if (tempFilePaths[0]) {
      // 保存到用户目录
      const savedFilePath = fileSystemManager.saveFileSync(tempFilePaths[0]);
      console.log(`文件已经从 ${tempFilePaths[0]} 移动到 ${savedFilePath}`);
    }
  },
});
```
