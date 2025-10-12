---
title: "Animation.step"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/animation/animation/animation_step
---
最后更新于 2025-01-21

# Animation.step(Object object)
表示一组动画完成。可以在一组动画中调用任意多个动画方法，一组动画中的所有动画会同时开始，一组动画完成后才会进行下一组动画。

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fanimation%2Fanimation)
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
duration | number | 否 | 400 | 动画持续时间，单位 ms
timingFunction | string | 否 | linear | 动画的效果  
**可选值**：  
- `linear`：动画从头到尾的速度是相同的  
- `ease`：动画以低速开始，然后加快，在结束前变慢  
- `ease-in`：动画以低速开始  
- `ease-in-out`：动画以低速开始和结束  
- `ease-out`：动画以低速结束  
- `step-start`：动画第一帧就跳至结束状态直到结束  
- `step-end`：动画一直保持开始状态，最后一帧跳到结束状态
delay | number | 否 | 0 | 动画延迟时间，单位 ms
transformOrigin | string | 否 | 50% 50% 0 | 元素变形的原点

## 输出

返回值：  

`Animation` 实例

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fanimation%2Fanimation)

</div> 

```js
  const animation = tt.createAnimation();

animation.background('#FFFFFF').step({ duration: 300, timingFunction: 'linear', delay: 0 });
  ```
