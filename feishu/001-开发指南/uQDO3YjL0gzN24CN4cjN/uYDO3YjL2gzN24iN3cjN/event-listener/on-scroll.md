<!--
title: 文档滚动时
id: 7312640957543186434
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/event-listener/on-scroll
updatedAt: 1753959799000
source: https://open.feishu.cn/document/web-components/uYDO3YjL2gzN24iN3cjN/event-listener/on-scroll
-->
# 文档滚动时

## 示例
```js
// npm
myComponent.register(DocComponentEvent.DOC_EDITOR_SCROLL, function(scrollTop) {
});

// sdk
myComponent.register('DOC_EDITOR_SCROLL', function(scrollTop) {
});
```


## 返回
|属性|	类型|	说明|
| ---|----- | ------- | 
|scrollTop|	Number |滚动距离|