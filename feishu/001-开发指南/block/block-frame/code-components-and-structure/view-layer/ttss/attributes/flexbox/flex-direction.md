<!--
title: flex-direction
id: 6989248828935962626
fullPath: /uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/flexbox/flex-direction
updatedAt: 1657871781000
source: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/flexbox/flex-direction
-->
# flex-direction

## 介绍

定义`flex`容器中的元素排列方式，该方向作为`flex`容器的排版主轴，另外一个方向称为侧轴。

## 语法

```css
flex-direction: row;

flex-direction: row-reverse;

flex-direction: column;

flex-direction: column-reverse;
```

### 取值

-   `row`

**默认值。** `flex`容器中的元素按照文本方向进行排版。主轴的方向和文本方向一致。

-   `row-reverse`

和`row`的表现一致，但是方向相反。

-   `column`

`flex`容器中的元素按照书写模式的方向进行排版，主轴的方向和书写模式的方向一致

-   `column-reverse`

和`column`表现一致，但是方向相反

## 标准化语法

```css
flex-direction: row | row-reverse | column | column-reverse;
```

## 注意事项

-   此属性不具备继承关系。