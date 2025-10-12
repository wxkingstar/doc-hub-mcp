---
title: "NodesRef.fields"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/ttml/nodesref/fields
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737434625000
---
最后更新于 2025-01-21

# NodesRef.fields

调用 NodesRef.fields(Object object, function callback) 获取节点的相关信息。需要获取的字段在 `fields` 中指定。返回值是 `nodesRef` 对应的 `selectorQuery`。

## 支持说明

该接口仅支持小程序调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V2.2.0+ | V2.2.0+ | V2.2.0+ | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2FcreateSelectorQuery%2FcreateSelectorQuery)
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
fields | object | 是 | \- | fields 配置。
&emsp;  
                    ∟  
                &nbsp;  
                    id | boolean | 否 | \- | 是否返回节点 id。
&emsp;  
                    ∟  
                &nbsp;  
                    dataset | boolean | 否 | \- | 是否返回节点 dataset。
&emsp;  
                    ∟  
                &nbsp;  
                    rect | boolean | 否 | \- | 是否返回节点布局位置（left right top bottom）。
&emsp;  
                    ∟  
                &nbsp;  
                    size | boolean | 否 | \- | 是否返回节点尺寸（width height）。
callback | function | 是 | \- | callback function。

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
});
```
