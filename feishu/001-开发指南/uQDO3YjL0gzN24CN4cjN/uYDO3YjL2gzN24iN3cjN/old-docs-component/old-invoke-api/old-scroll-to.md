<!--
title: 滚动到指定距离
id: 7472308462216527900
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/old-docs-component/old-invoke-api/old-scroll-to
updatedAt: 1739789357000
source: https://open.feishu.cn/document/web-components/uYDO3YjL2gzN24iN3cjN/old-docs-component/old-invoke-api/old-scroll-to
-->
# 滚到到指定距离

## 示例
```js
myComponent.invoke.scrollTo(value).then(function(response) {
});
```

## 参数
|属性|	类型|	是否必须	|说明|
| ---|----- | -------|------ | 
|value|	Number	|是|	距离

## 返回
|属性|	类型|	说明|
| ---|----- | ------- | 
|code|	Number |	0：成功 、 -1：失败 |
|msg|	String |	成功返回**Success** 失败返回错误信息 |