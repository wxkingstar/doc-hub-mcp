<!--
title: 获取支持翻译语言
id: 7472308462216839196
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/old-docs-component/old-invoke-api/old-get-support-translate-languages
updatedAt: 1739789368000
source: https://open.feishu.cn/document/web-components/uYDO3YjL2gzN24iN3cjN/old-docs-component/old-invoke-api/old-get-support-translate-languages
-->
# 获取支持翻译语言
## 示例
```js
myComponent.invoke.getSupportedTranslateLanguages().then(function(response) {
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

