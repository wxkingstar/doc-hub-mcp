---
title: "NodesRef.scrollOffset"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/ttml/nodesref/scrolloffset
---
最后更新于 2025-01-21

# NodesRef.scrollOffset

调用 NodesRef.scrollOffset(function callback) 添加节点滚动位置查询请求。以像素为单位。节点必须是 `scroll-view` 或者 `viewport`，返回 `nodesRef` 对应的 `SelectorQuery`。

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
id | string | 节点的 id。
dataset | object | 节点的 dataset。
scrollLeft | number | 节点的水平滚动位置。
scrollTop | number | 节点的垂直滚动位置。

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2FcreateSelectorQuery%2FcreateSelectorQuery)

</div> 
```js
Page({
  getScrollOffset: function(){
    tt.createSelectorQuery().selectViewport().scrollOffset(function(res){
      res.id      // 节点的ID
      res.dataset // 节点的dataset
      res.scrollLeft // 节点的水平滚动位置
      res.scrollTop  // 节点的竖直滚动位置
    }).exec()
  }
});
```
