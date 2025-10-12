<!--
title: 获取目录数据
id: 7472308462216396828
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/old-docs-component/old-invoke-api/old-get-directory
updatedAt: 1739789368000
source: https://open.feishu.cn/document/web-components/uYDO3YjL2gzN24iN3cjN/old-docs-component/old-invoke-api/old-get-directory
-->
# 获取目录数据
:::note
- 在初始化阶段调用该接口时，可能会遇到获取到的数据为空的情况，即使文档已经加载完成。
- 因此，建议使用[文档目录变化](/ssl:ttdoc/uYjL24iN/uYDO3YjL2gzN24iN3cjN/event-listener/document-directory-change)接口，以确保能够完整获取数据。
:::


## 示例
```js
myComponent.invoke.getDirectoryData().then(function(response) {
  const { code, msg, data } = response;
  // ...
});
```

## 返回
|属性|	类型|	说明|
| ---|----- | ------- | 
|code|	Number |	0：成功 、 -1：失败 |
|msg|	String |	信息 |
|data|Array|目录列表|


### data item
|属性|	类型|	说明|
| ---|----- | ------ | 
|anchor|	String  |	锚点 hash 值 (初始化时获取的数据不包含此项)
|text|	String| 目录标题
|indentLevel|	Number|	缩进等级