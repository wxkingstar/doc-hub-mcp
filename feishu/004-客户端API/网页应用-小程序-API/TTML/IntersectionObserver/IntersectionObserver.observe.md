---
title: "IntersectionObserver.observe"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/ttml/intersectionobserver/observe
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737434647000
---
最后更新于 2025-01-21

# IntersectionObserver.observe

调用 IntersectionObserver.observe(string targetSelector,function callback) 指定目标节点并开始监听相交状态变化情况。

## 支持说明

该接口仅支持小程序调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V2.3.0+ | V2.3.0+ | V2.3.0+ | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2FcreateIntersectionObserver%2FcreateIntersectionObserver)
网页应用 | **✕** | **✕** | **✕** | **X** | /

## 输入

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
targetSelector | string | 是 | \- | 选择器。
callback | function | 是 | \- | 回调函数。

## 输出

名称 | 数据类型 | 描述
--- | --- | ---
param | object | 回调函数接受的参数。
&emsp;  
                    ∟  
                &nbsp;  
                    intersectionRatio | number | 相交比例。
&emsp;  
                    ∟  
                &nbsp;  
                    intersectionRect | object | 相交区域的边界。
&emsp;&emsp;  
                    ∟  
                &nbsp;  
                    left | number | 左边界。
&emsp;&emsp;  
                    ∟  
                &nbsp;  
                    right | number | 右边界。
&emsp;&emsp;  
                    ∟  
                &nbsp;  
                    top | number | 上边界。
&emsp;&emsp;  
                    ∟  
                &nbsp;  
                    bottom | number | 下边界。
&emsp;  
                    ∟  
                &nbsp;  
                    boundingClientRect | object | 目标边界。
&emsp;&emsp;  
                    ∟  
                &nbsp;  
                    left | number | 左边界。
&emsp;&emsp;  
                    ∟  
                &nbsp;  
                    right | number | 右边界。
&emsp;&emsp;  
                    ∟  
                &nbsp;  
                    top | number | 上边界。
&emsp;&emsp;  
                    ∟  
                &nbsp;  
                    bottom | number | 下边界。
&emsp;  
                    ∟  
                &nbsp;  
                    relativeRect | object | 参照区域的边界。
&emsp;&emsp;  
                    ∟  
                &nbsp;  
                    left | number | 左边界。
&emsp;&emsp;  
                    ∟  
                &nbsp;  
                    right | number | 右边界。
&emsp;&emsp;  
                    ∟  
                &nbsp;  
                    top | number | 上边界。
&emsp;&emsp;  
                    ∟  
                &nbsp;  
                    bottom | number | 下边界。
&emsp;  
                    ∟  
                &nbsp;  
                    time | number | 相交检测时的时间戳。

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2FcreateIntersectionObserver%2FcreateIntersectionObserver)

</div> 

```js
//也可以使用 this.createIntersectionObserver({selectAll}) 来创建
tt.createIntersectionObserver(this, {
    selectAll: true
})
.relativeTo('.container')
.observe('.ball', res => {
    res.intersectionRect  // 相交区域
    res.intersectionRect.left  // 相交区域的左边界坐标
    res.intersectionRect.top  // 相交区域的上边界坐标
    res.intersectionRect.width  // 相交区域的宽度
    res.intersectionRect.height  // 相交区域的高度
});
```
