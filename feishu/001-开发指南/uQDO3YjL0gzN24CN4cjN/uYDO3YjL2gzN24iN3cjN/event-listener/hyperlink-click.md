<!--
title: 超链接点击
id: 7043614424987566081
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/event-listener/hyperlink-click
updatedAt: 1753959823000
source: https://open.feishu.cn/document/common-capabilities/web-components/uYDO3YjL2gzN24iN3cjN/event-listener/hyperlink-click
-->
# 超链接点击

:::html
<md-alert type="error">需要设置extensions.content.hyperlinkHandler为outer [功能配置](/ssl:ttdoc/uYjL24iN/uYDO3YjL2gzN24iN3cjN/feature-config)</md-alert>
:::

监听用户点击正文中的超链接，并且拦截超链接的跳转打开。
## 示例
```js
// npm
myComponent.register(DocComponentEvent.HYPERLINK_CLICK, function(url) {
  // ...
});

// sdk
myComponent.register('HYPERLINK_CLICK', function(url) {
  // ...
});
```


## 返回
|属性|	类型|	说明|
| ---|----- | ------- | 
|url|String |超链接地址

