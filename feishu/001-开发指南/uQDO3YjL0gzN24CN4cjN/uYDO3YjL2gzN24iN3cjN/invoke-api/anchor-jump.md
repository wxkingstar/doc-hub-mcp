<!--
title: 锚点跳转
id: 6913781733687394305
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/invoke-api/anchor-jump
updatedAt: 1753959787000
source: https://open.feishu.cn/document/common-capabilities/web-components/uYDO3YjL2gzN24iN3cjN/invoke-api/anchor-jump
-->
# 锚点跳转
## 示例
```js
// npm
myComponent.invoke(DocComponentEvent.ANCHOR_JUMP, 'XLoPru', true).then(function(response) {
  const { code, msg } = response;
  // ...
});

// sdk
myComponent.invoke('ANCHOR_JUMP', 'XLoPru', true).then(function(response) {
  const { code, msg } = response;
  // ...
});
```

## 参数
|属性|	类型|	是否必须	|说明|
| ---|----- | -------|------ | 
|anchor|	String	|是|	锚点 hash 值
|animate(doc1.0支持)|	Boolean	|否|	是否有动画

## 返回
|属性|	类型|	说明|
| ---|----- | ------- | 
|code|	Number |	0：成功 、 -1：失败 |
|msg|	String |	信息 |