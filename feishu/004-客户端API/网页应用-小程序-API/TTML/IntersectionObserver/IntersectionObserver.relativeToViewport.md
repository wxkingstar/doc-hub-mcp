---
title: "IntersectionObserver.relativeToViewport"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/ttml/intersectionobserver/relativetoviewport
---
最后更新于 2025-01-21

# IntersectionObserver.relativeToViewport

调用 IntersectionObserver.relativeToViewport(object margins) 指定页面显示区域作为参照区域之一。

## 支持说明

该接口仅支持小程序调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V2.3.0+ | V2.3.0+ | V2.3.0+ | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%E8%BF%99%E9%87%8C%E4%B8%80%E5%AE%9A%E8%A6%81%E4%BF%AE%E6%94%B9%E6%88%90%E5%85%B7%E4%BD%93%E7%9A%84%E8%B7%AF%E5%BE%84)
网页应用 | **✕** | **✕** | **X** | **✕** | /

## 输入

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
margins | object | 是 | \- | 用来扩展（或收缩）参照节点布局区域的边界。
&emsp;  
                    ∟  
                &nbsp;  
                    left | number | 否 | 0 | 节点布局区域的左边界。
&emsp;  
                    ∟  
                &nbsp;  
                    right | number | 否 | 0 | 节点布局区域的右边界。
&emsp;  
                    ∟  
                &nbsp;  
                    top | number | 否 | 0 | 节点布局区域的上边界。
&emsp;  
                    ∟  
                &nbsp;  
                    bottom | number | 否 | 0 | 节点布局区域的下边界。

## 输出
无

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2FcreateIntersectionObserver%2FcreateIntersectionObserver)

</div> 

```js
tt.createIntersectionObserver(this, {
    selectAll: true
})
.relativeToViewport({top:10})
```
