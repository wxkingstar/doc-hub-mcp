---
title: "RecordData"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/06-data-structure/Record/RecordData
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960931000
---
最后更新于 2025-07-31

# RecordData
RecordData 采用Map结构，key为string | number类型， value可以为任意类型。
```js
export interface RecordData {
    [key: string | number]: any;
}
```
