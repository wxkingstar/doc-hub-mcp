---
title: "getBasekitUrl"
source_url: https://open.feishu.cn/document/base-extension/base-automation-extensions/api/getbasekiturl
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690342953000
---
最后更新于 2023-07-26

# getBasekitUrl
从入参组装多维表格文档链接。

## 输入
```js
getBasekitUrl({
  url: string;
  tableId: string;
  viewId: string;
  recordId?: string;
  fieldId?: string;
})
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
url | string | 是 | 文档的url
tableId | string | 是 | 控制打开文档的时候打开的表格。将覆盖url中原有的tableId
viewId | string | 是 | 控制打开文档时候打开的视图。将覆盖url中原有的viewId
recordId | string | 否 | 将覆盖url中原有的viewId
fieldId | string | 否 | 将覆盖url中原有的fieldId

## 输出
按照入参重新拼接的url字符串。
## 示例代码

```js
const res = getBasekitUrl({ url: 'https://feishu.com', tableId: '123', viewId: '456' })
console.log(res) // https://feishu.com?tableId=123&viewId=456
```
