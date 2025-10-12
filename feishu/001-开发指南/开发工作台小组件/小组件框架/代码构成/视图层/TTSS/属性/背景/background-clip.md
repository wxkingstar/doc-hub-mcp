---
title: "background-clip"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/background/background-clip
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657871782000
---
最后更新于 2022-07-15

# background-clip

## 介绍

`background-clip`属性指定背景图像在元素上的渲染范围，默认情况下会绘制包含边框在内的整个元素。

## 语法

```css
background-clip: content-box;
background-clip: padding-box;
background-clip: border-box;
background-clip: content-box, padding-box;
```

### 取值

-   `padding-box`

**默认值。** 背景图片设置为不重复的情况下其绘制范围是包含`padding`在内的矩形，背景图像从填充边缘的左上角开始。

-   `border-box`

背景图片设置为不重复的情况下其绘制范围是包含边框在内的整个元素，背景图像从边框的左上角开始。

-   `content-box`

背景图片设置为不重复的情况下其绘制范围是除边框和填充外的矩形，背景图像从内容边缘的左上角开始。

### 标准化语法

```css
background-clip: border-box | padding-box | content-box
```
