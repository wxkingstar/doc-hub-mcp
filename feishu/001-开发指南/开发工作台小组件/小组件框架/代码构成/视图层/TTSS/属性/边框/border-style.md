---
title: "border-style"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/border/border-style
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657871782000
---
最后更新于 2022-07-15

# border-style

## 介绍

用于设置四个边框的样式，该属性可按顺序设置上边框样式、右边框样式、下边框样式、左边框样式。

## 语法

```css
/* 四个边框都是点状 */

border-style: dotted;

/* 上边框是点状 | 右边框是实线 | 下边框缺省与上边框相同 | 左边框缺省与右边框相同 */

border-style: dotted solid;

/* 上边框是点状 | 右边框是实线 | 下边框是双线 | 左边框缺省与右边框相同 */

border-style: dotted solid double;

/* 上边框是点状 | 右边框是实线 | 下边框是双线 ｜ 左边框是虚线 */

border-style: dotted solid double dashed;
```

### 取值

-   `none`

无边框。无边框属性时，边框宽度（无论宽度设置多少）将变为 0。

-   `hidden`

与`"none"`相同。不过应用于表时除外，对于表，`hidden`用于解决边框冲突。

-   `dotted`

点状边框。在大多数浏览器中呈现为实线。

-   `dashed`

虚线。在大多数浏览器中呈现为实线。

-   `solid`

实线。

-   `double`

双线。两条线的宽度再加上这两条线之间的空间等于`border-width`。`TTSS`规范并没有说其中一条线是否比另一条粗或者两条线是否应该是一样的粗，也没有指出线之间的空间是否应当比线粗，所有这些都由用户决定。

-   `groove`

3D 凹槽边框。其效果取决于`border-color`的值。

-   `ridge`

3D 垄状边框。其效果取决于`border-color`的值。

-   `inset`

3D inset 边框。其效果取决于`border-color`的值。

-   `outset`

3D outset 边框。其效果取决于`border-color`的值。

## 标准化语法

```css
border-style: [none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset]{1, 4}
```
