<!--
title: 删除文档
id: 6913781733687476225
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/invoke-api/delete
updatedAt: 1754027822000
source: https://open.feishu.cn/document/common-capabilities/web-components/uYDO3YjL2gzN24iN3cjN/invoke-api/delete
-->
# 删除文档
你可以通过接口显示或隐藏删除文档弹窗。
## 示例
```js
// npm
myComponent.invoke(DocComponentEvent.TOGGLE_MODAL, 'DELETE', true).then(function(response) {
  const { code, msg } = response;
  // ...
});

// sdk
myComponent.invoke('TOGGLE_MODAL', 'DELETE', true).then(function(response) {
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