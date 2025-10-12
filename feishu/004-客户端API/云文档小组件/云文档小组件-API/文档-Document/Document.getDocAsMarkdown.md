---
title: "Document.getDocAsMarkdown"
source_url: https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/文档-Document/document_getdocasmarkdown
---
最后更新于 2025-07-31

# Document.getDocAsMarkdown
获取文档内容的markdown形式，该方法为异步调用。
<md-alert> @lark-opdev/block-docs-addon-api **0.0.9+** 支持

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入
无需传入参数

## 输出

异步返回文档内容的markdown形式，它是string类型

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const docAsMarkdown = await DocMiniApp.Document.getDocAsMarkdown()
console.log('debug', docAsMarkdown);
```

### 返回示例

```
`# 测试获取文档能力
- [ ] 这是todo
> 这是quote
这是quote
1. 这是li
```
