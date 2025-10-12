<!--
title: 文档翻译变化
id: 6913736809786392577
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/event-listener/translate-language-change
updatedAt: 1753959812000
source: https://open.feishu.cn/document/common-capabilities/web-components/uYDO3YjL2gzN24iN3cjN/event-listener/translate-language-change
-->
# 文档翻译变化
## 示例
```js
// npm
myComponent.register(DocComponentEvent.TRANSLATE_CHANGE, function(language) {
  // ...
});

// sdk
myComponent.register('TRANSLATE_CHANGE', function(language) {
  // ...
});
```


## 返回
|属性|	类型|	说明|
| ---|----- | ------- | 
|language|	String |当前翻译语言|
