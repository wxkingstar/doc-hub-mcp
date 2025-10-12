<!--
title: 获取用户权限
id: 6913781733687181313
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/invoke-api/get-user-permission
updatedAt: 1753959787000
source: https://open.feishu.cn/document/common-capabilities/web-components/uYDO3YjL2gzN24iN3cjN/invoke-api/get-user-permission
-->
# 获取用户权限
## 示例
```js
// npm
myComponent.invoke(DocComponentEvent.GET_CURRENT_AUTH).then(function(response) {
  const { code, msg, data } = response;
  // ...
});

// sdk
myComponent.invoke('GET_CURRENT_AUTH').then(function(response) {
  const { code, msg, data } = response;
  // ...
});
```


## 返回
|属性|	类型|	说明|
| ---|----- | ------- | 
|code|	Number |	0：成功 、 -1：失败 |
|msg|	String |	信息 |
|data|Object|用户权限|


### data
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