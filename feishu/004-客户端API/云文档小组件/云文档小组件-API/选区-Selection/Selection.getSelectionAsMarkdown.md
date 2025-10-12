---
title: "Selection.getSelectionAsMarkdown"
source_url: https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/docs-add-on/05-api-doc/选区-Selection/selection_getselectionasmarkdown
---
最后更新于 2025-07-31

# Selection.getSelectionAsMarkdown
获取文档选区内容的markdown形式，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入
无需传入参数

## 输出

异步返回文档选区内容的markdown形式，它是string类型

## 示例代码

### 调用示例
当文档选区内容改变时，输出文档选区内容的markdown形式

```js
const DocMiniApp = new BlockitClient().initAPI();
const docRef = DocMiniApp.getActiveDocumentRef();

const selectionChangeCb = () => {
      const selectionAsMarkdown = await DocMiniApp.Selection.getSelectionAsMarkdown()
	    console.log('debug', selectionAsMarkdown);
}

useEffect(() => {
    DocMiniApp.Selection.onSelectionChange(docRef, selectionChangeCb);
    return () => {
        DocMiniApp.Selection.offSelectionChange(docRef, selectionChangeCb);    
    };
});
```

### 返回示例

```
# 测试获取文档能力
- [ ] 这是todo
> 这是quote
这是quote
1. 这是li
```
