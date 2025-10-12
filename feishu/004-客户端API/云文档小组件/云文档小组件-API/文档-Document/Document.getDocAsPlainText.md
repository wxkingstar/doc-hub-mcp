---
title: "Document.getDocAsPlainText"
source_url: https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/文档-Document/document_getdocasplaintext
---
最后更新于 2025-07-31

# Document.getDocAsPlainText
获取文档内容的纯文本形式，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入
无需传入参数

## 输出

异步返回文档内容的纯文本形式，它是string类型

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const docAsPlainText = await DocMiniApp.Document.getDocAsPlainText()
console.log('debug', docAsPlainText);
```

### 返回示例

```
测试获取文档能力
测试获取文档能力
```
