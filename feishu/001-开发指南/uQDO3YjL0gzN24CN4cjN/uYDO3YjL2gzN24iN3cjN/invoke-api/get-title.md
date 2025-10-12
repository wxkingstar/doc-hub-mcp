<!--
title: 获取标题
id: 6935635650448998401
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/invoke-api/get-title
updatedAt: 1753959787000
source: https://open.feishu.cn/document/common-capabilities/web-components/uYDO3YjL2gzN24iN3cjN/invoke-api/get-title
-->
# 获取标题
## 示例
```js
// npm
myComponent.invoke(DocComponentEvent.GET_SUITE_TITLE).then(function(response) {
  const { code, msg, data } = response;
  // ...
});

// sdk
myComponent.invoke('GET_SUITE_TITLE').then(function(response) {
  const { code, msg, data } = response;
  // ...
});
```

## 返回
|属性|	类型|	说明|
| ---|----- | ------- | 
|code|	Number |	0：成功 、 -1：失败 |
|msg|	String |	信息 |
|data|String|标题||
