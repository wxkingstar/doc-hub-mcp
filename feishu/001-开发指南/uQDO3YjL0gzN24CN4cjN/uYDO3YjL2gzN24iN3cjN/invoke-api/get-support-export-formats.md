<!--
title: 获取支持导出格式
id: 6913781733687132161
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/invoke-api/get-support-export-formats
updatedAt: 1753959799000
source: https://open.feishu.cn/document/common-capabilities/web-components/uYDO3YjL2gzN24iN3cjN/invoke-api/get-support-export-formats
-->
# 获取支持导出格式
## 示例
```js
// npm
myComponent.invoke(DocComponentEvent.GET_SUPPORTED_EXPORT_FORMATS).then(function(response) {
  const { code, msg, data } = response;
  // ...
});

// sdk
myComponent.invoke('GET_SUPPORTED_EXPORT_FORMATS').then(function(response) {
  const { code, msg, data } = response;
  // ...
});
```

## 返回
|属性|	类型|	说明|
| ---|----- | ------- | 
|code|	Number |	0：成功 、 -1：失败 |
|msg|	String |	信息 |
|data|Array|支持导出格式列表|

