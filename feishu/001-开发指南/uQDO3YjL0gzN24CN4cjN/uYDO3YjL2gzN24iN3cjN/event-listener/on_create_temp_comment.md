<!--
title: 创建临时评论时
id: 7497866841776504834
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/event-listener/on_create_temp_comment
updatedAt: 1753959799000
source: https://open.feishu.cn/document/uYjL24iN/uYDO3YjL2gzN24iN3cjN/event-listener/on_create_temp_comment
-->
# 创建临时评论时



点击工具栏上的“评论按钮” 时触发该事件。
:::html
<md-alert type="warn">临时评论属于本地状态，如果未创建为真实评论，刷新页面后该评论会消失。</md-alert>
:::
## 示例
```js
// npm
myComponent.register(DocComponentEvent.ON_CREATE_TEMP_COMMENT, function(eventData) {
   const {
       quote, // 对应正文的划线内容
       tempCommentId //临时评论 id
   } = eventData;
});

// sdk
myComponent.register('ON_CREATE_TEMP_COMMENT', function(eventData) {
   const {
       quote, // 对应正文的划线内容
       tempCommentId //临时评论 id
   } = eventData;
});
```


## 返回
|属性|	类型|	说明|
| ---|----- | ------- | 
|quote|String |对应正文的划线内容
|tmpCommentId|String |临时评论的唯一标识符，用于关联评论内容。

