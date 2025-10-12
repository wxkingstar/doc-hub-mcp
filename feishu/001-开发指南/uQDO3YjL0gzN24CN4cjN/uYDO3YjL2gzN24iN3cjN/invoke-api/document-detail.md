<!--
title: 文档信息
id: 6913781733687361537
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/invoke-api/document-detail
updatedAt: 1753959787000
source: https://open.feishu.cn/document/common-capabilities/web-components/uYDO3YjL2gzN24iN3cjN/invoke-api/document-detail
-->
# 文档信息
你可以通过接口显示或隐藏文档信息弹窗。
## 示例
```js
// npm
myComponent.invoke(DocComponentEvent.TOGGLE_MODAL, 'DETAIL', true).then(function(response) {
  const { code, msg } = response;
  // ...
});

// sdk
myComponent.invoke('TOGGLE_MODAL', 'DETAIL', true).then(function(response) {
  const { code, msg } = response;
  // ...
});
```

## 参数
|属性|	类型|	是否必须	|说明|
| ---|----- | -------|------ | 
|visible|	Boolean	|否|	是否显示

## 返回
|属性|	类型|	说明|
| ---|----- | ------- | 
|code|	Number |	0：成功 、 -1：失败 |
|msg|	String |	信息 |