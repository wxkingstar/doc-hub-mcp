---
title: "table.getCellAttactmentUrls"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_getcellattachmenturls
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690343083000
---
最后更新于 2023-07-26

# table.getCellAttachmentUrls
获取附单元格件的 url，需要传入 附件token， fieldId 和 recordId 来获取 attachment url。

## 权限要求
**Notice**：开启以下任一权限
查看、评论、编辑和管理多维表格(bitable:app)
查看、评论和导出多维表格(bitable:app:readonly)

## 输入
```
getCellAttachmentUrls(token, fieldId, recordId)
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
token | string[] | 是 | 单元格内某些文件的token；一般是table.batchUploadFile的返回值，或者从某个附件字段获取
fieldId | string | 是 | 字段Id
recordId | string | 是 | 记录id

## 输出
Promise字符串数组：token对应的url数组。
## 调用示例

```js

const file = new File(['Hello, World!'], 'hello.txt', { type: 'text/plain' });
const file2 = new File(['Hello, World!2'], 'hello2.txt', { type: 'text/plain' }); //创建文件
const tokens = await bitable.base.batchUploadFile([file,file2]);// 上传文件
const field = await table.getFieldByName('附件');
const records =await table.getRecordIdList();

await table.setCellValue(field.id,records[0],[ // 设置单元格的值
    {
        type:file.type,
        name: file.name,
        size: file.size,
        token: tokens[0],
        timeStamp: new Date().getTime(),
    },
    {
        type:file2.type,
        name: file2.name,
        size: file2.size,
        token: tokens[1],
        timeStamp: new Date().getTime(),
    }
])

console.log('tokens',tokens) // 查看文件上传的token

const res = await table.getCellAttachmentUrls(tokens,field.id,records[0])

console.log(res); // ['https://internal.....', 'https://internal.....']

```
