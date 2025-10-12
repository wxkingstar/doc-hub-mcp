<!--
title: 文档高度变化
id: 7472308462216970268
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/old-docs-component/old-event-listener/old-document-height-change
updatedAt: 1739789379000
source: https://open.feishu.cn/document/web-components/uYDO3YjL2gzN24iN3cjN/old-docs-component/old-event-listener/old-document-height-change
-->
# 文档高度变化
例如实现平铺效果：将云文档组件的容器设置成 position sticky，并禁止云文档组件滚动，外部容器滚动时动态设置云文档组件的滚动高度，这样看着是滚动的外部容器，但可以模拟出云文档组件滚动的效果。
## 示例
```js
myComponent.config.setFeatureConfig({
  CONTENT: {
    unscrollable: true, // 禁止云文档组件滚动
  },
});

// 监听一下文档高度，把你的容器内的内容高度设置成和文档高度一样，用来模拟同样的滚动条高度
myComponent.event.onDocumentHeightChange(function(docHeight) {
   yourFakeScrollContent.style.height = docHeight;
});

// 监听你的滚动容器
yourScrollContainer.addEventListener('scroll', (e) => {
  // 手动滚动云文档组件
  myComponent.invoke.scrollTo(e.target.scrollTop).then(function(response) {
    console.log(response);
  });
});
```


## 返回
|属性|	类型|	说明|
| ---|----- | ------- | 
|height|String |文档高度|