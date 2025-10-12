<!--
title: 获取是否存在未完成的任务
id: 7472308462216675356
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/old-docs-component/old-invoke-api/old-has-un-finished-task
updatedAt: 1739789357000
source: https://open.feishu.cn/document/web-components/uYDO3YjL2gzN24iN3cjN/old-docs-component/old-invoke-api/old-has-un-finished-task
-->
# 获取是否存在未完成的任务

## 示例
```js
myComponent.invoke.hasUnFinishedTask().then(function(response) {
});
```

## 返回
|属性|	类型|	说明|
| ---|----- | ------- | 
|code|	Number |	0：成功 、 -1：失败 |
|msg|	String |	成功返回**Success** 失败返回错误信息 |
|data|	Object |	响应数据 参数参见下表 **data** |

## data
|属性|	类型|	说明|
| ---|----- | ------- | 
|hasUnFinishedTask|	Boolean |	是否有任务未完成 |
|hasUnFinishedFileTask|	Boolean |	是否有文件任务未完成 |