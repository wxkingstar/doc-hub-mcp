---
title: "table.getRecords"
source_url: https://open.feishu.cn/document/base-extension/base-view-extensions/api/table/table_getrecords
last_remote_update: 2023-09-15
last_remote_update_timestamp: 1694758503000
---
最后更新于 2023-09-15

# table.getRecords
批量获取记录

## 权限要求
<md-alert type="warn">
查看、评论、编辑和管理多维表格(bitable:app)

## 输入
```
getRecords(param)
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
param.pageSize | number | 是 | 最大获取数量5000
param.pageToken | string | 否 | 记录id,表示分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果
param.viewId | string | 否 | 获取指定视图的 record

## 输出
Promise对象IGetRecordsResponse。

```js
interface IGetRecordsResponse {
    total: number;
    hasMore: boolean;
    records: IRecord[];
    pageToken?: string;
}
interface IRecord {
    recordId: string;
    fields: {
        [fieldId: string]: IOpenCellValue;
    };
}
```

## 示例代码
### 调用示例

```js
  const selection = await bitable.base.getSelection();
  const table = await bitable.base.getTableById(selection.tableId); // 获取当前数据表实例

const res = await table.getRecords({pageSize:100})
  console.log(res)
```
