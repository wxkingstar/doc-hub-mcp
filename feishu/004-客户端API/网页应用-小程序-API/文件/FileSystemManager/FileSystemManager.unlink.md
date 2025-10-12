---
title: "FileSystemManager.unlink"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/file/file_system_manager/file_system_manager_unlink
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737433835000
---
最后更新于 2025-01-21

# FileSystemManager.unlink(Object object)

删除本地文件。

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V5.23.0+ | V5.23.0+ | V5.23.0+ | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Ffile%2Ffile)
网页应用 | V5.23.0+ | V5.23.0+ | V5.23.0+ | V7.35.0+ | 预览

## 输入
继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
filePath | string | 是 |  | 要删除的文件路径 (本地路径)

## 输出
继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性

## 代码示例

```js
const fileSystemManager = tt.getFileSystemManager();

tt.chooseImage({
  success(res) {
    // 保存临时文件到 用户目录
    const savedFilePath = fileSystemManager.saveFileSync(res.tempFilePaths[0]);

// 删除文件
    fileSystemManager.unlink({
      filePath: savedFilePath,
      success(_res) {
        console.log("删除成功");
      },
      fail(res) {
        console.log("删除失败", res.errMsg);
      },
    });
  },
});
```
