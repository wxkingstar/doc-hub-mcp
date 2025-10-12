---
title: "onResize"
source_url: https://open.feishu.cn/document/client-docs/gadget/open-capabilities/autorotate/onresize
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737431226000
---
最后更新于 2025-01-21

# onResize(function callback)

监听页面尺寸变化事件
**Notice**：屏幕旋转或者窗口尺寸变化时, 会被调用.

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V5.26.0+ | V5.26.0+ | V5.26.0+ | V7.35.0+ | 预览
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
callback | function | 是 |  | 该事件的回调函数

## 输出
回调函数返回对象的属性：

名称 | 数据类型 | 描述
--- | --- | ---
pageOrientation | string | 页面方向 (PC不支持该参数)  
portrait：竖屏  
landscape：横屏正方向, 以HOME键在屏幕右侧为正方向  
landscapeReverse：横屏反方向, 以HOME键在屏幕左侧为反方向
size | object | 尺寸信息
&emsp;  
                    ∟  
                &nbsp;  
                    screenWidth | number | 屏幕宽度
&emsp;  
                    ∟  
                &nbsp;  
                    screenHeight | number | 屏幕高度
&emsp;  
                    ∟  
                &nbsp;  
                    windowWidth | number | 可使用窗口宽度
&emsp;  
                    ∟  
                &nbsp;  
                    windowHeight | number | 可使用窗口高度

## 示例代码

```js
Page({
   onResize: function(res) {
    console.log(JSON.stringify(res));
  }
})
```

回调函数返回对象示例：
```json
{
	"pageOrientation": "landscape",
	"size": {
	   "windowWidth": 812,
	   "windowHeight": 375,
	   "screenWidth": 812,
	   "screenHeight": 375
	}
}
```
