---
title: "Record.setRecord"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/record/Record.setRecord
last_remote_update: 2025-07-31
last_remote_update_timestamp: 1753960306000
---
最后更新于 2025-07-31

# Record.setRecord
修改当前云文档小组件的 Record 数据，该方法为异步调用。
<md-alert>
API支持批量参数，会按顺序执行调用。

如果参数里同时有replace和remove，请确认执行remove后要操作的数据是否还存在。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可写 | - 正文小组件  
- 全屏视图  
- 模态框视图  
- 弹窗视图 | - PC  
- 移动端 | 编辑模式

## 输入

Record 变更数据
| **名称**     | **数据类型**                                                                                                                                           | **是否必填** | **描述**        |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------- |
| changesets | [RecordChangeset](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/basic-data-reference---base/RecordChangeset) | 是        | 要变更的Record 数据 |

## 输出

变更后的Record数据
| **名称** | **数据类型** | **是否必填** | **描述**        |
| ------ | -------- | -------- | ------------- |
| data   | any      | 是        | 变更后的Record 数据 |

## 示例代码

### 调用示例

- insert 类型，在某个路径下插入新的数据
```js
const newData = await DocMiniApp.Record.setRecord([
    {
      type: 'insert',
      data: {
        path: [],
        value: { a:1 }
      }
    }
  ]);
console.log('debug', newData);//{ a:1 }
```
- remove 类型，将某个路径下的数据删除
```js
const newData =await DocMiniApp.Record.setRecord([
    {
      type: 'remove',
      data: {
        path: [],
      }
    }
  ]);
console.log('debug', newData);//{}
```
- remove 类型，将数组某个数据删除(示例：删除data的第1项数据)
```js
const newData =await DocMiniApp.Record.setRecord([
    {
      type: 'remove',
      data: {
        path: ['data', 1],
      }
    }
  ]);
console.log('debug', newData);//{}
```
- replace 类型，将某个路径下的数据替换成新数据
```js
const newData = await DocMiniApp.Record.setRecord([
    {
      type: 'replace',
      data: {
        path: [], 
        value: { a:2 }
      }
    }
  ]);
console.log('debug', newData);//{ a:2 }
```
