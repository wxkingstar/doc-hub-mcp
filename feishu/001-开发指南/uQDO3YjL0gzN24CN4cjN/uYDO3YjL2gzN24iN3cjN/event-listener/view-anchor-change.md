<!--
title: 浏览锚点变化
id: 6954189564119941124
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/event-listener/view-anchor-change
updatedAt: 1753959811000
source: https://open.feishu.cn/document/common-capabilities/web-components/uYDO3YjL2gzN24iN3cjN/event-listener/view-anchor-change
-->
# 浏览锚点变化
## 示例
```js
// npm
myComponent.register(DocComponentEvent.CURR_ANCHOR, function(anchor) {
  // ...
});

// sdk
myComponent.register('CURR_ANCHOR', function(anchor) {
  // ...
});
```


## 返回
|属性|	类型|	说明|
| ---|----- | ------- | 
|anchor|	String |锚点 hash 值

