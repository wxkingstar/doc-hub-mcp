<!--
title: position
id: 6989248889123586050
fullPath: /uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/position/position
updatedAt: 1657871780000
source: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/position/position
-->
# position

## 介绍

`position`属性用于指定一个元素在文档中的定位方式。

`top`、`right`、`bottom`、`left`属性则决定了该元素的最终位置。

## 语法

```css
position: relative;
position: fixed;
position: absolute;
position: sticky;
```

### 取值

-   `relative`

**默认值。** 当前 view 将参与父节点排版，top 等属性将在排版所得基础上添加相对偏移。

-   `absolute`

当前 view 将**不**参与父节点排版，当前 view 会在子元素的 `content bound` 中进行绝对布局，即由 top 等属性决定其位置。

`top`、`left`、`right`、`top`、`bottom`属性分别表示该元素的`complete bound`与父节点的`content bound`间的距离。

当处于绝对布局下的元素 left, right, width 都不为 auto 时，忽略 right。

当处于绝对布局下的元素 top, bottom, height 都不为 auto 时，忽略 bottom。

-   `fixed`

当前 view 将**不**参与父节点排版，当前 view 将被视为根节点的子元素进行绝对布局，即由 top 等属性决定其位置。

-   `sticky`

当前 view 将参与父节点排版，当该元素的父节点为 scroll view 的时候该属性才有意义。当该节点因父节点的 scroll 产生位移时，该节点会与父节点的 view port 至少保持 top 等属性所规定的距离。

## 标准化语法

```css
position: relative | absolute | fixed | sticky
```

### 标准化定义

| 定义   | 描述       |
| ---- | -------- |
| 默认值  | relative |
| 适用元素 | 所有元素     |

## 注意事项

-   移动端Native模式下，`position`默认为`relative`，PC 模式下，`position`默认为`static`
-   移动端Native模式下，元素会自动截断溢出内容，表现类似为overflow: hidden