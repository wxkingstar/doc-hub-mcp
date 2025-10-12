---
title: "background-image"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/background/background-image
---
最后更新于 2022-07-15

# background-image

## 介绍

`background-image`属性用于为元素设置一个或多个背景图片，可以用逗号分隔的列表来描述一个或多个背景图片。默认情况下，`background-image`被放置在元素的左上角，并在水平和竖直方向上重复。对于一个元素来说，设置`background-image`的范围是元素的总大小，包括填充和边框。

## 语法

```css
background-image: 
	linear-gradient(to bottom, rgba(255, 255, 0, 0.5), rgba(0, 0, 255, 0.5)),
   url('https://mdn.mozillademos.org/files/7693/catfront.png');
```

### 取值

-   `url()`

图像链接地址。

-   `linear-gradient()`

将线性渐变设置为背景图片，至少定义两种颜色，从上到下。

-   `radial-gradient()`

将径向渐变设置为背景图片。至少定义两种颜色，从中心到边缘。

## 标准化语法

```css
background-image: url('URL') | linear-gradient() | radial-gradient()
```

## 例子

```css
background-image: url('https://www.w3school.com.cn/i/bg_flower.gif');

background-image:
	url('https://s3.pstatp.com/ee/bytedance-home/static/img/zh-logo-color.7c750dd6.png'),
	url('https://www.w3school.com.cn/i/bg_flower.gif');

background-image: linear-gradient(red, yellow);

background-image: radial-gradient(red, green);
```

## 注意事项

- 该属性不支持手动指定`none`关键字来覆盖掉原有的背景图片，不设定该属性，则没有背景。
