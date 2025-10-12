---
title: "togglePadFullScreen"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/pad/togglepadfullscreen
last_remote_update: 2022-03-08
last_remote_update_timestamp: 1646734357000
---
最后更新于 2022-03-08

# togglePadFullScreen()

在当前Pad小程序窗口可以全屏缩放的前提下， 进行全屏缩放状态的切换。
**Notice**：注意事项：
- 全屏放大的状态取决于上一次全屏时候的状态，可被窗口拖拽条改变，有保留和不保留导航栏的两种形态。 **目前仅iPad侧支持该功能**。 
- 需配合 [getPadDisplayScaleMode](https://open.feishu.cn/document/uYjL24iN/uUTOuUTOuUTO/pad/getpaddisplayscalemode) API使用，获取当前的窗口状态，**仅 `fullScreen`和`allVisible`状态下可进行切换**

## 支持说明

应用能力 | Android | iOS | PC | 预览效果
--- | --- | --- | --- | ---
小程序 | V4.10.0+ | V4.10.0+ | **X** | 预览
网页应用 | V4.10.0+ | V4.10.0+ | **X** | /

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
displayScaleMode | string | 是 | '' | 目标的全屏状态，fullScreen（全屏，可以缩小至多栏） ，allVisible （多栏，可以放大至全屏）。 Android端不支持  
**示例值**：allVisible

## 输出

各 callback 参数均无额外属性

## 示例代码

```js
tt.togglePadFullScreen({
    displayScaleMode: "allVisible",
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`togglePadFullScreen fail: ${JSON.stringify(res)}`);
    }
});
```

返回对象示例：
```js
{
    "errMsg": "togglePadFullScreen:ok"
}
```
