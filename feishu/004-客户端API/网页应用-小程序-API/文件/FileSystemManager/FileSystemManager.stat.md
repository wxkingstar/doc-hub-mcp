---
title: "FileSystemManager.stat"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/file/file_system_manager/file_system_manager_stat
last_remote_update: 2025-03-12
last_remote_update_timestamp: 1741768346000
---
最后更新于 2025-03-12

# FileSystemManager.stat(Object object)

获取本地文件 Stats 对象。

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V4.11.0+ | V4.11.0+ | V5.23.0+ | V7.39.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Ffile%2Ffile)
网页应用 | V4.11.0+ | V4.11.0+ | V5.23.0+ | V7.39.0+ | 预览

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
path | string | 是 |  | 本地文件路径  
**示例值**：ttfile://temp

## 输出

`success`返回对象的扩展属性与方法：
**Notice**：点击下表中的方法名，查看对应API的支持说明、调用方法

名称 | 数据类型 | 描述
--- | --- | ---
stat | object | Stats 对象
&emsp;  
                    ∟  
                &nbsp;  
                    mode | number | 文件的类型和存取的权限，对应 POSIX stat.st_mode
&emsp;  
                    ∟  
                &nbsp;  
                    size | number | 文件大小，单位：B，对应 POSIX stat.st_size
&emsp;  
                    ∟  
                &nbsp;  
                    lastAccessedTime | number | 文件最近一次被存取或被执行的时间，UNIX 时间戳，对应 POSIX stat.st_atime
&emsp;  
                    ∟  
                &nbsp;  
                    lastModifiedTime | number | 文件最后一次被修改的时间，UNIX 时间戳，对应 POSIX stat.st_mtime
&emsp;  
                    ∟  
                &nbsp;  
                    [isDirectory()](https://open.feishu.cn/document/uYjL24iN/uETOuETOuETO/stat/stats_is_directory) | function | 判断当前文件是否一个目录
&emsp;  
                    ∟  
                &nbsp;  
                    [isFile()](https://open.feishu.cn/document/uYjL24iN/uETOuETOuETO/stat/stats_is_file) | function | 判断当前文件是否一个普通文件

## 示例代码

```js
const fileSystemManager = tt.getFileSystemManager();
fileSystemManager.stat({
    path: "ttfile://temp",
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`stat fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：

```json
{
    "stat": {
        "mode": 16889,
        "size": 3488,
        "lastAccessedTime": 1637505688,
        "lastModifiedTime": 1637505688
    },
    "errMsg": "stat:ok",
}
```
