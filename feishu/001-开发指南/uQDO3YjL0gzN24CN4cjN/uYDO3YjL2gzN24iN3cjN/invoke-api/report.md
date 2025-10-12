<!--
title: 举报文档
id: 6913736809786408961
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/invoke-api/report
updatedAt: 1753959787000
source: https://open.feishu.cn/document/common-capabilities/web-components/uYDO3YjL2gzN24iN3cjN/invoke-api/report
-->
# 举报文档
## 示例
```js
// npm
myComponent.invoke(DocComponentEvent.REPORT_ABUSE).then(function(response) {
  const { code, msg } = response;
  // ...
});

// sdk
myComponent.invoke('REPORT_ABUSE').then(function(response) {
  const { code, msg } = response;
  // ...
});
```

## 返回
|属性|	类型|	说明|
| ---|----- | ------- | 
|code|	Number |	0：成功 、 -1：失败 |
|msg|	String |	信息 |