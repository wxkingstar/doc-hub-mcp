<!--
title: display
id: 6989248828928131073
fullPath: /uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/display
updatedAt: 1657871782000
source: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/box-model/display
-->
# display

## 介绍

规定了元素应该生成的框的类型。

## 语法

```css
display: flex;

display: none;
```

### 取值

-   `flex`

**默认值。** 指定容器采用 `flex` 布局。`flex` 容器的子元素会自动成为容器成员，遵循 `flex` 布局。

-   `none`

此元素不会显示。

### 标准化语法

```css
display: flex | none
```

## 注意事项
- 移动端Native布局，元素默认使用flex，PC端使用block或inline，为确保一致性，业务可以显示声明基于flex来进行布局