<!--
title: 权限分享
id: 6913781733687377921
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/invoke-api/share
updatedAt: 1753959787000
source: https://open.feishu.cn/document/common-capabilities/web-components/uYDO3YjL2gzN24iN3cjN/invoke-api/share
-->
# 权限分享
你可以通过接口显示或隐藏权限分享弹窗。
## 示例
```js
// npm
myComponent.invoke(DocComponentEvent.TOGGLE_SHARE_MENU, true, {
   top: '50px',
   right: '10px',
}).then(function(response) {
   const {code, msg} = response;
   // ...
});

// sdk
myComponent.invoke('TOGGLE_SHARE_MENU', true, {
   top: '50px',
   right: '10px',
}).then(function(response) {
   const {code, msg} = response;
   // ...
});
```

## 参数
|属性|	类型|	是否必须	|说明|
| ---|----- | -------|------ | 
|visible|	Boolean	|否|	是否显示|
|style| Object|否|分享弹窗样式|

## 返回
|属性|	类型|	说明|
| ---|----- | ------- | 
|code|	Number |	0：成功 、 -1：失败 |
|msg|	String |	信息 |