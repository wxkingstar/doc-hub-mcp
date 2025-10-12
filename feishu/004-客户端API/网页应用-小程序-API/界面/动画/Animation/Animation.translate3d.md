---
title: "Animation.translate3d"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/animation/animation/animation_translate3d
---
最后更新于 2025-01-21

# Animation.translate3d(number tx, number ty, number tz)
对 xyz 坐标进行平移变换

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fanimation%2Fanimation)
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
tx | number | 是 | / | 在 X 轴平移的距离，单位为 px
ty | number | 否 | / | 在 Y 轴平移的距离，单位为 px
tz | number | 否 | / | 在 Z 轴平移的距离，单位为 px

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

animation.translate3d(10, 10, 10).step();
  ```
