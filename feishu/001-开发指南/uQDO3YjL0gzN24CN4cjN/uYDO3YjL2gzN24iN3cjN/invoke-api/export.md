<!--
title: 导出文档
id: 6913781733687164929
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/invoke-api/export
updatedAt: 1754027822000
source: https://open.feishu.cn/document/common-capabilities/web-components/uYDO3YjL2gzN24iN3cjN/invoke-api/export
-->
# 导出文档
## 示例
```js
// npm
myComponent.invoke(DocComponentEvent.EXPORT_BY_TYPE, 'pdf').then(function(response) {
  const { code, msg } = response;
  // ...
});

// sdk
myComponent.invoke('EXPORT_BY_TYPE', 'pdf').then(function(response) {
  const { code, msg } = response;
  // ...
});
```

## 参数
|属性|	类型|	是否必须	|说明|
| ---|----- | -------|------ | 
|format|	String	|是|	导出格式

## 返回
|属性|	类型|	说明|
| ---|----- | ------- | 
|code|	Number |	0：成功 、 -1：失败 |
|msg|	String |	信息 |