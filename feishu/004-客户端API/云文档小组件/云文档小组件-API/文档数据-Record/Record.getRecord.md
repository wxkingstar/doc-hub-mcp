---
title: "Record.getRecord"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/record/Record.getRecord
---
最后更新于 2025-07-31

# Record.getRecord
获取当前小应用的 Record 数据，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | - 正文小组件  
- 全屏视图  
- 模态框视图  
- 弹窗视图 | - PC  
- 移动端 | 演示模式

## 输入

无需传入参数。

## 输出

当前云文档小组件的 Record 数据

## 示例代码

### 调用示例

```js
 DocMiniApp.Record.getRecord()
     .then((recordData: any) => {
         //对数据做处理
         console.log('debug',recordData);
     })
```

### 返回示例

```json
{ recordData:'xxxxx' }
```
