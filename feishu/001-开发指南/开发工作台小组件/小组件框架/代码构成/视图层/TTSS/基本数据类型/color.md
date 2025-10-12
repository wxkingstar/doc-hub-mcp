---
title: "color"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/basic-data-type/color
---
最后更新于 2022-07-15

# color

`<color>`表示一种标准 RGB 色彩空间（sRGB color space）的颜色。一个颜色可以包括一个`alpha`通道透明度值，来表明颜色如何与它的背景色混合（composite）。

一个`<color>`可以以如下方式定义：

使用一个关键字（比如`blue`或`transparent`）

使用 RGB 立体坐标（RGB cubic-coordinate）系统（以“#”加十六进制或者`rgb()`和`rgba()`函数表达式的形式）

使用 HSL 圆柱坐标（HSL cylindrical-coordinate）系统（以`hsl()`和`hsla()`函数表达式的形式）

## 语法

`<color>`可以以以下方式指定。

### 颜色关键字

颜色关键字（color keywords）是不区分大小写的标识符，它表示一个具体的颜色，例如`red`、`blue`、`brown`或者`lightseagreen`。

### RGB 颜色

颜色可以使用红-绿-蓝（red-green-blue (RGB)）模式的两种方式被定义：

#### 语法

RGB 颜色可以通过以`#`为前缀的十六进制字符和函数（`rgb()`、`rgba()`）标记表示。

-   十六进制符号：`#RRGGBB[AA]`

R（红）、G（绿）、B （蓝）和 A （alpha）是十六进制字符（0–9、A–F）。A 是可选的。比如，`#ff0000`等价于`#ff0000ff`。

-   十六进制符号：`#RGB`

R（红）、G（绿）、B （蓝）是十六进制字符（0–9、A–F）。三位数符号（`#RGB`）是六位数形式（`#RRGGBB`）的减缩版。比如，`#f09`和`#ff0099`表示同一颜色。

-   函数符：`rgb[a](R, G, B[, A])`

R（红）、G（绿）、B （蓝）可以是`<number>`，或者`<percentage>`，`255`相当于`100%`。A（alpha）可以是`0`到`1`之间的`<number>`或者`<percentage>`，数字`1`相当于`100%`（完全不透明）。

### HSL 颜色

颜色也可以使用`hsl()`函数符被定义为色相-饱和度-亮度（Hue-saturation-lightness）模式。HSL 相比 RGB 的优点是更加直观：你可以估算你想要的颜色，然后微调。它也更易于创建相称的颜色集合。（通过保持相同的色相并改变亮度/暗度和饱和度）。

#### 语法

HSL 颜色可以使用`hsl()`和`hsla()`函数来表示。

函数符: `hsl[a](H, S, L[, A])`

-   H (色相) 是个`<angle>`。当你写为无单位的`<number>`时，它将会被解释为`deg`角度单位，根据定义`red = 0deg = 360deg`，其他颜色则分布在圆周围，所以有`green = 120deg`，`blue = 240deg`等等。

-   S (饱和度) and L (亮度) 都是`<percentage>`。`100%`的饱和度是完全饱和的，`0%`则为完全不饱和（灰色）。`100%`亮度是白色，`0%`则是黑色，`50%`则是“正常”。

-   A (透明度) 是个`0`和`1`之间的`<number>`或者`<percentage>`, 数字`1`相当于`100%`（完全不透明）。
