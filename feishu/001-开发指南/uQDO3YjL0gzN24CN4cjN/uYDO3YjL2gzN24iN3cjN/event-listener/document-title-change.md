<!--
title: 文档标题变化
id: 6913736809786376193
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/event-listener/document-title-change
updatedAt: 1753959811000
source: https://open.feishu.cn/document/common-capabilities/web-components/uYDO3YjL2gzN24iN3cjN/event-listener/document-title-change
-->
# 文档标题变化
## 示例
```js
// npm
myComponent.register(DocComponentEvent.SUITE_TITLE_CHANGE, function(title) {
  // ...
});

// sdk
myComponent.register('SUITE_TITLE_CHANGE', function(title) {
  // ...
});
```


## 返回
|属性|	类型|	说明|
| ---|----- | ------- | 
|title|	String |文档标题|
