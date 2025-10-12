<!--
title: 评论历史记录
id: 6913781733687296001
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/invoke-api/comment-history
updatedAt: 1753959787000
source: https://open.feishu.cn/document/common-capabilities/web-components/uYDO3YjL2gzN24iN3cjN/invoke-api/comment-history
-->
# 评论历史记录
你可以通过接口显示或隐藏评论历史记录弹窗。
## 示例
```js
// npm
myComponent.invoke(DocComponentEvent.TOGGLE_COMMENT_HISTORY, true).then(function(response) {
   const { code, msg } = response;
   // ...
});

// sdk
myComponent.invoke('TOGGLE_COMMENT_HISTORY', true).then(function(response) {
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