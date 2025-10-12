<!--
title: length
id: 6989248889124241410
fullPath: /uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/basic-data-type/length
updatedAt: 1657871784000
source: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/basic-data-type/length
-->
# length

长度`<length>`是用于表示距离尺寸的数据类型。

## 语法

`<length>`数据类型由一个`<number>`和一个长度单位构成。 与所有`TTSS`单位一样，单位的字面值与数字之间没有空格。 数字为`0`时，长度单位是可选的。

### 单位

#### 相对长度单位

相对长度代表着以其它距离为单位的一种尺寸。这个单位可以是指定字符的大小，行高，或者是`viewport`的大小。

-   `rem`

这个单位代表根元素的`font-size`大小。当用在根元素的`font-size`上面时 ，它代表了它的初始值。

-   `em`

这个单位表示元素的`font-size`的计算值。如果用在`font-size`属性本身，它则表示元素继承的`font-size`值。

-   `vh`

视口的初始包含块的高度的`1%`。

-   `vw`

视口的初始包含块的宽度的`1%`。

#### 绝对长度单位

当输出介质的物理性质已知时，绝对长度单位代表一个物理度量单位。这是通过将一个单元锚定到一个物理单元，并将其定义为相对于它的另一个来实现的。对于低分辨率的设备和高分辨率设备，该锚定是不同的。

-   `px`

一像素（pixel），等于一物理像素乘以像素密度，相当于 iOS 的 pt 或 Android 的 dp。

对于高分辨率屏幕，一个`TTSS`像素往往占多个设备像素。一般来说，每英寸的像素的数量保持在`96`左右，`1px = 1in`的`96`分之一。