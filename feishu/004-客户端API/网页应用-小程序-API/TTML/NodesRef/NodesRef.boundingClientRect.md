---
title: "NodesRef.boundingClientRect"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/ttml/nodesref/boundingclientrect
---
最后更新于 2025-01-21

# NodesRef.boundingClientRect

调用 NodesRef.boundingClientRect(function callback) 添加节点布局位置的查询请求。相对于显示区域，以像素为单位。其功能类似于 DOM 的 `getBoundingClientRect`。返回 `nodesRef` 对应的 `SelectorQuery`。如果提供 `callback` 回调函数，在执行 `selectQuery.exec` 方法后，节点信息会在 `callback` 中返回。

## 支持说明

该接口仅支持小程序调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V2.2.0+ | V2.2.0+ | V2.2.0+ | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2FcreateSelectorQuery%2FcreateSelectorQuery)
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
callback | function | 是 | \- | 该事件的回调函数。

## 输出

回调函数返回对象的属性如下表。

名称 | 数据类型 | 描述
--- | --- | ---
id | string | 节点 id。
dataset | object | 节点的 dataset。
left | number | 节点的左边界坐标。
right | number | 节点的右边界坐标。
top | number | 节点的上边界坐标。
bottom | number | 节点的下边界坐标。
width | number | 节点的宽度。
height | number | 节点的高度。

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
  }
})
```
