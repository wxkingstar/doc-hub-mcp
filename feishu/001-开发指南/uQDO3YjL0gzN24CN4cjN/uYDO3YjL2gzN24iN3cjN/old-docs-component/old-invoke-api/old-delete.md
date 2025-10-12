<!--
title: 删除文档
id: 7472308462216691740
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/old-docs-component/old-invoke-api/old-delete
updatedAt: 1739789357000
source: https://open.feishu.cn/document/web-components/uYDO3YjL2gzN24iN3cjN/old-docs-component/old-invoke-api/old-delete
-->
# 删除文档
你可以通过接口显示或隐藏删除文档弹窗。
## 示例
```js
myComponent.invoke.delete(true).then(function(response) {
  const { code, msg } = response;
  // ...
});
```

## 参数
|属性|	类型|	是否必须	|说明|
| ---|----- | -------|------ | 
|visible|	Boolean	|否|	是否显示

## 返回
|属性|	类型|	说明|
| ---|----- | ------- | 
|code|	Number |	0：成功 、 -1：失败 |
|msg|	String |	信息 |