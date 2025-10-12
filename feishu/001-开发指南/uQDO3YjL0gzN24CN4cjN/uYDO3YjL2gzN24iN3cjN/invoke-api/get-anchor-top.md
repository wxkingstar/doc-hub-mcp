<!--
title: 获取锚点到顶部距离
id: 7003226542982119425
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/invoke-api/get-anchor-top
updatedAt: 1753959799000
source: https://open.feishu.cn/document/common-capabilities/web-components/uYDO3YjL2gzN24iN3cjN/invoke-api/get-anchor-top
-->
# 获取锚点到顶部距离
## 示例
```js
// npm
myComponent.invoke(DocComponentEvent.GET_ANCHOR_TOP, 'anchor-abc').then(function(response) {
  const { code, msg, data } = response;
  // ...
});

// sdk
myComponent.invoke('GET_ANCHOR_TOP', 'anchor-abc').then(function(response) {
  const { code, msg, data } = response;
  // ...
});
```

## 参数
|属性|	类型|	是否必须	|说明|
| ---|----- | -------|------ | 
|anchor|	String	|是|	锚点|

## 返回
|属性|	类型|	说明|
| ---|----- | ------- | 
|code|	Number |	0：成功 、 -1：失败 |
|msg|	String |	信息 |
|data|Number | 距离文档顶部距离 |
