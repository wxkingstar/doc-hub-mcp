---
title: "VideoContext.playbackRate"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/media/video/videocontext/playbackrate
---
最后更新于 2025-07-04

# VideoContext.playbackRate(number rate)

设置视频倍速播放

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V6.1.0+ | V6.1.0+ | V6.1.0+ | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2Fcomponent%2Fpages%2Fvideo%2Fvideo)
网页应用 | **X** | **X** | **X** | **X** | 预览

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
rate | number | 是 |  | 倍速值，范围[0.5, 2]。  
若传入值小于0.5，则为0.5；若传入值大于2，则为2；向下取整保留1位小数

## 输出
无
