<!--
title: 获取支持翻译语言
id: 6913781733687197697
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/invoke-api/get-support-translate-languages
updatedAt: 1753959799000
source: https://open.feishu.cn/document/common-capabilities/web-components/uYDO3YjL2gzN24iN3cjN/invoke-api/get-support-translate-languages
-->
# 获取支持翻译语言
## 示例
```js
// npm
myComponent.invoke(DocComponentEvent.GET_TRANSLATE_LANG).then(function(response) {
  const { code, msg, data } = response;
  // ...
});

// sdk
myComponent.invoke('GET_TRANSLATE_LANG').then(function(response) {
  const { code, msg, data } = response;
  // ...
});
```

## 返回
|属性|	类型|	说明|
| ---|----- | ------- | 
|code|	Number |	0：成功 、 -1：失败 |
|msg|	String |	信息 |
|data|Array|支持翻译语言列表|

