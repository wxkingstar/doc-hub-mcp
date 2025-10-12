---
title: "batchUploadFile"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/base/batchuploadfile
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690343201000
---
最后更新于 2023-07-26

# base.batchUploadFile
批量上传文件接口，按序返回当前文件列表对应的 file token 列表。token可以用于设置附件类型的字段值。

## 权限要求
<md-alert type="warn">
查看、评论、编辑和管理多维表格(bitable:app)

## 输入

```
batchUploadFile(file)
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
file | [File对象](https://developer.mozilla.org/zh-CN/docs/Web/API/File)数组或者[FileList](https://developer.mozilla.org/zh-CN/docs/Web/API/FileList)。 | 是 | [File对象](https://developer.mozilla.org/zh-CN/docs/Web/API/File)数组或者[FileList](https://developer.mozilla.org/zh-CN/docs/Web/API/FileList)。

## 输出
Promise字符串数组。
## 示例代码

```js
  const file = new File(['Hello, World!'], 'hello.txt', { type: 'text/plain' });

const tokens =await bitable.base.batchUploadFile([file]); // 拿到的token可以用于设置附件字段

console.log(tokens) // ['BcdqbMmW4ohD7ExUq9rcGtuVn8e']
```
