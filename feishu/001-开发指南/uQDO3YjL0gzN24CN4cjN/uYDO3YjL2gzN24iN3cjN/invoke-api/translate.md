<!--
title: 翻译文档
id: 6913781733687312385
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/invoke-api/translate
updatedAt: 1753959787000
source: https://open.feishu.cn/document/common-capabilities/web-components/uYDO3YjL2gzN24iN3cjN/invoke-api/translate
-->
# 翻译文档
## 示例
```js
// npm
myComponent.invoke(DocComponentEvent.TOGGLE_TRANSLATE, true, 'en').then(function(response) {
  const { code, msg } = response;
  // ...
});

// sdk
myComponent.invoke('TOGGLE_TRANSLATE', true, 'en').then(function(response) {
  const { code, msg } = response;
  // ...
});
```

## 参数
|属性|	类型|	是否必须	|说明|
| ---|----- | -------|------ | 
|language|	String	|否|	翻译语言（传空为退出翻译）

## 返回
|属性|	类型|	说明|
| ---|----- | ------- | 
|code|	Number |	0：成功 、 -1：失败 |
|msg|	String |	信息 |