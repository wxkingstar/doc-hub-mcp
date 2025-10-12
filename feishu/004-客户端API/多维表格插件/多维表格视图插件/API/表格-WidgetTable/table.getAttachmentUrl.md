---
title: "table.getAttachmentUrl"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_getattachmenturl
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690343119000
---
最后更新于 2023-07-26

# table.getAttachmentUrl
获取附件的 url，在开启高级权限的文档下，需要传入 fieldId 和 recordId 来获取 attachment url, 普通文档这两个参数可传可不传都可以获取对应的 url。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输入
```
getAttachmentUrl(token, fieldId, recordId)
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
token | string | 是 | 文件的token，table.batchUploadFile的返回值，或者从某个附件字段获取
fieldId | string | 高级权限文档下必传；普通文档可以不传 | 字段Id
recordId | string | 高级权限文档下必传；普通文档可以不传 | 记录id

## 输出
Promise字符串
## 示例代码
### 调用示例

```js
const file = new File(['Hello, World!'], 'hello.txt', { type: 'text/plain' }); //创建文件
const tokens = await bitable.base.batchUploadFile([file]);// 上传文件

const res = await table.getAttachmentUrl(tokens[0])
```

### 返回示例
res:
```
'https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=MWM2MWQ3NDA5MGE0ZGMyMmY2ZDI5NzFjNGRiZWE3ZjhfMzJiMzBhYzZlMDdjNmRkZDAxYzU1MjE5YmQyNTBiNjhfSUQ6NzI1NDkwMDIxMTc3OTQyMDE2Ml8xNjg5MTYzMDkwOjE2ODkyNDk0OTBfVjM'
```
