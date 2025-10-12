<!--
title: 搜索打开时
id: 7312640957543137282
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/event-listener/on-searchbox-open
updatedAt: 1753959799000
source: https://open.feishu.cn/document/web-components/uYDO3YjL2gzN24iN3cjN/event-listener/on-searchbox-open
-->
# 搜索打开时

## 示例
```js
// npm
myComponent.register(DocComponentEvent.SEARCH_BOX_OPEN, function(data) {
});

// sdk
myComponent.register('SEARCH_BOX_OPEN', function(data) {
});
```


## 返回
|属性|	类型|	说明|
| ---|----- | ------- | 
|data|	Object | 响应数据 参数参见下表 **data** |

### data
|属性|	类型|	说明|
| ---|----- | ------ | 
|duration|	Number|	用户第一次按下打开按钮，到搜索面板打开的间隔时间（如果这个期间内按下很多次，也只记录第一次)
|openTimes|	Number|	用户第几次打开面板