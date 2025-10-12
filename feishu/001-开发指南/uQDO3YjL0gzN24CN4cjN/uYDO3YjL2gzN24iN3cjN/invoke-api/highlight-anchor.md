<!--
title: 高亮锚点
id: 7003226542982135809
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/invoke-api/highlight-anchor
updatedAt: 1753959799000
source: https://open.feishu.cn/document/common-capabilities/web-components/uYDO3YjL2gzN24iN3cjN/invoke-api/highlight-anchor
-->
# 高亮锚点
## 示例
```js
// npm
myComponent.invoke(DocComponentEvent.HIGHLIGHT_ANCHOR, 'anchor-abc').then(function(response) {
  const { code, msg } = response;
  // ...
});

// sdk
myComponent.invoke('HIGHLIGHT_ANCHOR', 'anchor-abc').then(function(response) {
  const { code, msg } = response;
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
