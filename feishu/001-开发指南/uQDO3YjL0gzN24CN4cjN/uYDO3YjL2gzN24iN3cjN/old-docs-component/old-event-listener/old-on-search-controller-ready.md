<!--
title: 搜索首次可用时
id: 7472308462216855580
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/old-docs-component/old-event-listener/old-on-search-controller-ready
updatedAt: 1739789368000
source: https://open.feishu.cn/document/web-components/uYDO3YjL2gzN24iN3cjN/old-docs-component/old-event-listener/old-on-search-controller-ready
-->
# 搜索首次可用时

## 示例
```js
myComponent.event.onSearchControllerReady(function(data) {
});
```


## 返回
|属性|	类型|	说明|
| ---|----- | ------- | 
|data|	Object | 响应数据 参数参见下表 **data** |


### data
|属性|	类型|	说明|
| ---|----- | ------ | 
|searchReadyTime|	Number|	加载完成时间
|trigger_before_didmount|	Boolean|	用户是否先于默认生命周期点击触发搜索面板