<!--
title: 正文图片点击时
id: 7312640957543153666
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/event-listener/on-image-view
updatedAt: 1753959811000
source: https://open.feishu.cn/document/web-components/uYDO3YjL2gzN24iN3cjN/event-listener/on-image-view
-->
# 正文图片点击时
:::html
<md-alert type="error">需要设置IMAGE.viewer为outer [功能配置](/ssl:ttdoc/uYjL24iN/uYDO3YjL2gzN24iN3cjN/feature-config)</md-alert>
:::

## 示例
```js
// npm
myComponent.register(DocComponentEvent.IMAGE_VIEW, function(data) {
});

// sdk
myComponent.register('IMAGE_VIEW', function(data) {
});
```


## 返回
|属性|	类型|	说明|
| ---|----- | ------- | 
|data|	Object | 响应数据 参数参见下表 **data** |


### data
|属性|	类型|	说明|
| ---|----- | ------ | 
|key|	String|	图片id
|url|	String|	图片地址
|blob|	Blob|	图片blob类型数据 需要设置needBlob为true