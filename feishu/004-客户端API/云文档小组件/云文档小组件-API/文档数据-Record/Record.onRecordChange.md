---
title: "Record.onRecordChange"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/record/Record.onRecordChange
---
最后更新于 2025-07-31

# Record.onRecordChange
监听云文档小组件的 Record 数据变化，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | - 正文小组件  
- 全屏视图  
- 模态框视图  
- 弹窗视图 | - PC  
- 移动端 | 演示模式

## 输入

Record 数据变化监听器
| **名称**  | **数据类型**            | **是否必填** | **描述**         |
| ------- | ------------------- | -------- | -------------- |
| handler | RecordChangeHandler | 是        | Record 数据变化监听器 |

### RecordChangeHandler

```js
type RecordChangeHandler = (record: RecordData) => void;
```
| **名称**     | **数据类型**   | **是否必填** | **描述**       |
| ---------- | ---------- | -------- | ------------ |
| recordData | RecordData | 是        | 变更的Record 数据 |

## 输出

无

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const docRef = await DocMiniApp.getActiveDocumentRef();

const recordChangehandler = (recordData: RecordData) => {
        //对recordData做处理
   };
useEffect(() => {
    DocMiniApp.Record.onRecordChange(recordChangehandler);
    return () => {
        DocMiniApp.Record.offRecordChange(recordChangehandler);    
    };
});
```
