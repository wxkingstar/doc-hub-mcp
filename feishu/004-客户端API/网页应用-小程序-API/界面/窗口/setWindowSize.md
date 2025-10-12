---
title: "setWindowSize"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/window/setwindowsize
---
最后更新于 2024-01-16

# setWindowSize(Object object)

小程序在 window 和 window-semi 模式下调整独立窗口的大小和位置
**Notice**：无论是否有外接屏幕，x、y 都是基于飞书所在屏幕定位，当飞书和小程序不在一个屏幕时，设置 x、y 中的任意一个属性都会使小程序跳到飞书所在屏幕上

## 支持说明

应用能力 | Android | iOS | PC | 预览效果
--- | --- | --- | --- | ---
小程序 | **X** | **X** | V4.3.0+ | 预览
网页应用 | **X** | **X** | V7.10.0+ | /

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
windowWidth | number | 否 |  | 窗口宽度。默认值: 当前窗口宽度  
**示例值**：800
windowHeight | number | 否 |  | 窗口高度。默认值: 当前窗口高度  
**示例值**：1000
x | number | 否 |  | 窗口(以屏幕左上角为原点的) x 坐标。默认值: 当前窗口 x 坐标  
**示例值**：100
y | number | 否 |  | 窗口(以屏幕左上角为原点的) x 坐标。默认值: 当前窗口 y 坐标  
**示例值**：100

## 输出

继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性

## 示例代码

```js
tt.setWindowSize({
  windowWidth: 800,
  windowHeight: 1000,
  x: 100,
  y: 100,
  success(res) {
    console.log(JSON.stringify(res));
  },
  fail(res) {
    console.log(`setWindowSize fail: ${JSON.stringify(res)}`);
  },
});
```

`success`返回对象示例：

```json
{
  "errMsg": "setWindowSize:ok"
}
```
