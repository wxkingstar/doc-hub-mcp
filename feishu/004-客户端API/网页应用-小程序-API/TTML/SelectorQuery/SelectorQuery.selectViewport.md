---
title: "SelectorQuery.selectViewport"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/ttml/selectorquery/selectviewport
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737434583000
---
最后更新于 2025-01-21

# SelectorQuery.selectViewport

调用 SelectorQuery.selectViewport() 选择显示区域。可用于获取显示区域的尺寸、滚动位置等信息。

## 支持说明

该接口仅支持小程序调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V2.2.0+ | V2.2.0+ | V2.2.0+ | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2FcreateSelectorQuery%2FcreateSelectorQuery)
网页应用 | **X** | **X** | **X** | **X** | /

## 输入
无

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

const query = tt.createSelectorQuery();
query.select('#the-id').boundingClientRect();
const nodesRef = query.selectViewport();
nodesRef.scrollOffset();
query.exec(function(res){
  res[0].top       // #the-id 节点的上边界坐标
  res[1].scrollTop // 显示区域的竖直滚动位置
});
```
