<!--
title: 用户权限变化
id: 7472308462216331292
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/old-docs-component/old-event-listener/old-user-permission-change
updatedAt: 1739789379000
source: https://open.feishu.cn/document/web-components/uYDO3YjL2gzN24iN3cjN/old-docs-component/old-event-listener/old-user-permission-change
-->
# 用户权限变化
## 示例
```js
myComponent.event.onAuthChange(function(auth) {
  // ...
});
```


## 返回
|属性|	类型|	说明|
| ---|----- | ------- | 
|auth|	Object |用户权限|


### auth
|属性|	类型|	说明|
| ---|----- | ------ | 
|owner|	Boolean|	是否为文档所有者
|readable|	Boolean|	是否有文档阅读权限
|editable|	Boolean|	是否有文档编辑权限
|commentable|	Boolean|	是否有文档评论权限
|shareable|	Boolean|	是否有文档分享权限
|copyable|	Boolean|	是否有文档复制权限
|printable|	Boolean|	是否有文档打印权限
|exportable|	Boolean|	是否有文档导出权限