---
title: "offWindowResize"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/window/offwindowresize
---
最后更新于 2025-01-21

# offWindowResize(function callback)

取消监听窗口尺寸变化事件
## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | V3.13.0+ | V7.35.0+ | 预览
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
callback | function | 是 |  | 该事件的回调函数

如果不传递，不会取消所有windowResize事件

## 输出
无

## 代码示例

```js
const callback = function (res) {
  const size = res.size;
  const windowWidth = size.windowWidth;
  const windowHeight = size.windowHeight; 
  console.log(JSON.stringify(size))
};

tt.offWindowResize(callback);
```
