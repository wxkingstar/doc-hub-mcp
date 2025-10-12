---
title: "getPadDisplayScaleMode"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/pad/getpaddisplayscalemode
---
最后更新于 2022-03-08

# getPadDisplayScaleMode()

获取当前Pad的小程序窗口缩放状态，当前显示状态 能否进行全屏缩放的切换。

## 支持说明

应用能力 | Android | iOS | PC | 预览效果
--- | --- | --- | --- | ---
小程序 | V4.10.0+ | V4.10.0+ | **X** | 预览
网页应用 | V4.10.0+ | V4.10.0+ | **X** | /

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，无扩展属性。

## 输出

`success`返回对象参数的扩展属性：

名称 | 数据类型 | 描述
--- | --- | ---
displayScaleMode | string | 当前Pad上的显示状态，可能的取值包括disableScale （不可全屏缩放），fullScreen（全屏，可以缩小至多栏） ，allVisible （多栏，可以放大至全屏）。 Android端仅支持 disableScale 。

## 示例代码

```js
tt.getPadDisplayScaleMode({ 
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`getPadDisplayScaleMode fail: ${JSON.stringify(res)}`);
    }
});
```

返回对象示例：
```js
{
    "displayScaleMode": "allVisible",
    "errMsg": "getPadDisplayScaleMode:ok"
}
```
