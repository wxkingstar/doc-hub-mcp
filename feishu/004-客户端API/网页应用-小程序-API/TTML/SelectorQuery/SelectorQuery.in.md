---
title: "SelectorQuery.in"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/ttml/selectorquery/in
---
最后更新于 2025-01-21

# SelectorQuery.in

调用 SelectorQuery.in(object component) 将选择器的选取范围更改为自定义组件 `component` 内（初始时，选择器仅选取页面范围的节点，不会选取任何自定义组件中的节点）。

## 支持说明

该接口仅支持小程序调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V2.2.0+ | V2.2.0+ | V2.2.0+ | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2FcreateSelectorQuery%2FcreateSelectorQuery)
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
component | object | 是 | \- | 自定义组件实例。

## 输出

名称 | 数据类型 | 描述
--- | --- | ---
selectorQuery | object | 参见 [SelectorQuery](https://open.feishu.cn/document/uYjL24iN/uUjN24SN2YjL1YjN/selectorquery/selectorquery) 实例。

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2FcreateSelectorQuery%2FcreateSelectorQuery)

</div> 
```js
Component({
  queryMultipleNodes (){
    const query = tt.createSelectorQuery().in(this)
    query.select('#the-id').boundingClientRect(function(res){
      res.top // 这个组件内 #the-id 节点的上边界坐标
    }).exec()
  }
})
```
