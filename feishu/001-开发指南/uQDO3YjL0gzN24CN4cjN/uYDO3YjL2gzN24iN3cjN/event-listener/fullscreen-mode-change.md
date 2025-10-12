<!--
title: 全屏模式变化
id: 6913781733687443457
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/event-listener/fullscreen-mode-change
updatedAt: 1753959811000
source: https://open.feishu.cn/document/common-capabilities/web-components/uYDO3YjL2gzN24iN3cjN/event-listener/fullscreen-mode-change
-->
# 全屏模式变化
## 示例
```js
// npm
myComponent.register(DocComponentEvent.FULL_SCREEN_MODE, function(isFullScreen) {
  // ...
});

// sdk
myComponent.register('FULL_SCREEN_MODE', function(isFullScreen) {
  // ...
});
```


## 返回
|属性|	类型|	说明|
| ---|----- | ------- | 
|isFullScreen|	Boolean |是否全屏|
