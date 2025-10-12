<!--
title: 文档选区变化
id: 7312631960518508547
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/event-listener/document-selection-change
updatedAt: 1753959811000
source: https://open.feishu.cn/document/common-capabilities/web-components/uYDO3YjL2gzN24iN3cjN/event-listener/document-selection-change
-->
# 文档选区变化
通过该接口，可以监听用户访问文档时，鼠标选择选区的变化，接口会返回选区的recordId，range等信息。

示例

```js
// 监听一下文档选区的变化

// npm
myComponent.register(DocComponentEvent.SELECTION_CHANGE, function(selections: Selection[]) {
  console.log('selections', selections);
});

// sdk
myComponent.register('SELECTION_CHANGE', function(selections: Selection[]) {
  console.log('selections', selections);
});
```
selection的属性
| 属性       | 数据类型           | 描述        |
| --------- | --------------- | --------- |
|id | string| block的recodId |------｜
|range | [number, number]| 选区的区间 |

