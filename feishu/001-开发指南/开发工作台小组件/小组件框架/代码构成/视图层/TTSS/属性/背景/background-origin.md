---
title: "background-origin"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/background/background-origin
---
最后更新于 2022-07-15

# background-origin

## 介绍

`background-origin`属性指定背景图像的原点位置（背景定位区域）。可以用逗号分隔的列表来描述一个或多个背景图片的原点位置。

## 语法

```css
background-origin: border-box;
background-origin: padding-box;
background-origin: content-box;
```

### 取值

-   `padding-box`

**默认值。** 背景图片设置为不重复的情况下其绘制范围是包含 padding 在内的矩形，背景图像从填充边缘的左上角开始。

-   `border-box`

背景图片设置为不重复的情况下其绘制范围是包含边框在内的整个元素，背景图像从边框的左上角开始。

-   `content-box`

背景图片设置为不重复的情况下其绘制范围是除边框和填充外的矩形，背景图像从内容边缘的左上角开始。

## 标准化语法

```css
background-origin: border-box | padding-box | content-box
```

## 例子

```html
<view
  class="container"
  style="background-image: url('https://www.w3school.com.cn/i/bg_flower.gif');
background-origin:content-box;"
>
</view>

<view
  class="container"
  style="background-image: url('https://www.w3school.com.cn/i/bg_flower.gif');
    background-origin:padding-box"
>
</view>

<view
  class="container"
  style="background-image: url('https://www.w3school.com.cn/i/bg_flower.gif');
    background-origin:border-box;"
>
</view>

<view
  class="container"
  style="background-image:url('https://s3.pstatp.com/ee/bytedance-home/static/img/zh-logo-color.7c750dd6.png'),
    url('https://www.w3school.com.cn/i/bg_flower.gif');
    background-origin:content-box,border-box;"
>
</view>
```
