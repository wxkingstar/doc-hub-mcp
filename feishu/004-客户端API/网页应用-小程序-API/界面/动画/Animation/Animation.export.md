---
title: "Animation.export"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/animation/animation/animation_export
---
最后更新于 2025-01-21

# Animation.export

Animation.export() 用于导出动画队列。`export` 方法每次调用后，会清掉之前的动画操作。
每次 `export` 只会导出 **尚未被导出** 的动画组，如果某动画组已经被导出过，则会被清除。如果在调用 `export` 时存在尚未完成的 **动画组**，则未进入 **动画组** 的视觉变换不会生效（但也不会被删除，在下次调用 `step` 方法后会继续生效）。

## 支持说明

该接口仅支持小程序调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fanimation%2Fanimation)
网页应用 | **X** | **X** | **X** | **X** | /

## 输入
无

## 输出

名称 | 数据类型 | 描述
--- | --- | ---
actions | string | 动画队列。

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fanimation%2Fanimation)

</div> 

```js
const animation = tt.createAnimation();

animation.background('#FFFFFF').bottom(20).step();
animation.export();
```
