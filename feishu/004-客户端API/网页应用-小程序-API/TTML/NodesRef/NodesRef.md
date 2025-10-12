---
title: "NodesRef"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/ttml/nodesref/nodesref
---
最后更新于 2025-01-21

# NodesRef

NodesRef 是 `ttml` 节点信息的对象。

## 支持说明

该接口仅支持小程序调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V2.2.0+ | V2.2.0+ | V2.2.0+ | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2FcreateSelectorQuery%2FcreateSelectorQuery)
网页应用 | **X** | **X** | **X** | **X** | /

## 方法

### [NodesRef.boundingClientRect](https://open.feishu.cn/document/uYjL24iN/uUjN24SN2YjL1YjN/nodesref/boundingclientrect)

添加节点布局位置的查询请求。相对于显示区域，以像素为单位。其功能类似于 DOM 的 `getBoundingClientRect`。返回 `nodesRef` 对应的 `SelectorQuery`。如果提供 `callback` 回调函数，在执行 `selectQuery.exec` 方法后，节点信息会在 `callback` 中返回。

### [NodesRef.scrollOffset](https://open.feishu.cn/document/uYjL24iN/uUjN24SN2YjL1YjN/nodesref/scrolloffset)

添加节点的滚动位置查询请求。以像素为单位。节点必须是 `scroll-view` 或者 `viewport`，返回 `nodesRef` 对应的 `SelectorQuery`。

### [NodesRef.fields](https://open.feishu.cn/document/uYjL24iN/uUjN24SN2YjL1YjN/nodesref/fields)

获取节点的相关信息。需要获取的字段在 `fields` 中指定。返回值是 `nodesRef` 对应的 `selectorQuery`。

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2FcreateSelectorQuery%2FcreateSelectorQuery)

</div> 

```js
Page({
  getRect () {
    tt.createSelectorQuery().select('#the-id').boundingClientRect(function(rect){
      rect.id      // 节点的ID
      rect.dataset // 节点的dataset
      rect.left    // 节点的左边界坐标
      rect.right   // 节点的右边界坐标
      rect.top     // 节点的上边界坐标
      rect.bottom  // 节点的下边界坐标
      rect.width   // 节点的宽度
      rect.height  // 节点的高度
    }).exec()
  },
  getAllRects () {
    tt.createSelectorQuery().selectAll('.class-name').boundingClientRect(function(rects){
      rects.forEach(function(rect){
        rect.id      // 节点的ID
        rect.dataset // 节点的dataset
        rect.left    // 节点的左边界坐标
        rect.right   // 节点的右边界坐标
        rect.top     // 节点的上边界坐标
        rect.bottom  // 节点的下边界坐标
        rect.width   // 节点的宽度
        rect.height  // 节点的高度
      })
    }).exec()
  },
  getScrollOffset: function(){
    tt.createSelectorQuery().selectViewport().scrollOffset(function(res){
      res.id      // 节点的ID
      res.dataset // 节点的dataset
      res.scrollLeft // 节点的水平滚动位置
      res.scrollTop  // 节点的竖直滚动位置
    }).exec()
  },
  getFields: function(){
    tt.createSelectorQuery().select('#the-id').fields({
      id: true,
      dataset: true,
      size: true,
    }, (res) => {
      res.id         //节点的ID
      res.dataset    // 节点的dataset
      res.width      // 节点的宽度
      res.height     // 节点的高度
    }).exec()
  }
})
```
