---
title: "SelectorQuery.select"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/ttml/selectorquery/select
---
最后更新于 2025-01-21

# SelectorQuery.select

调用 SelectorQuery.select(string selector) 在当前页面下选择第一个匹配选择器 `selector` 的节点，返回一个 `NodesRef` 对象实例，可以用于获取节点信息。

`selector` 类似于 CSS 的选择器，其中移动端只支持 ID 选择器。

## 支持说明

该接口仅支持小程序调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V2.2.0+ | V2.2.0+ | V2.2.0+ | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2FcreateSelectorQuery%2FcreateSelectorQuery)
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
selector | string | 是 | \- | selector 名称。

## 输出

名称 | 数据类型 | 描述
--- | --- | ---
NodesRef | object | 参见 [NodesRef](https://open.feishu.cn/document/uYjL24iN/uUjN24SN2YjL1YjN/nodesref/nodesref) 对象。

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2FcreateSelectorQuery%2FcreateSelectorQuery)

</div> 

```js
const nodesRef = tt.createSelectorQuery().select('#cid');
nodesRef.boundingClientRect((rect) => {
  {
    rect.id      // 节点的ID
    rect.dataset // 节点的dataset
    rect.left    // 节点的左边界坐标
    rect.right   // 节点的右边界坐标
    rect.top     // 节点的上边界坐标
    rect.bottom  // 节点的下边界坐标
    rect.width   // 节点的宽度
    rect.height  // 节点的高度
  }
}).exec();
```
