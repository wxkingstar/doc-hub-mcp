---
title: "Animation.scale3d"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/interface/animation/animation/animation_scale3d
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737431466000
---
最后更新于 2025-01-21

# Animation.scale3d(number sx, number sy, number sz)
缩放

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Fanimation%2Fanimation)
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
sx | number | 是 | / | x 轴的缩放倍数
sy | number | 是 | / | y 轴的缩放倍数
sz | number | 是 | / | z 轴的缩放倍数

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

animation.scale3d(2, 2, 2).step();
  ```
