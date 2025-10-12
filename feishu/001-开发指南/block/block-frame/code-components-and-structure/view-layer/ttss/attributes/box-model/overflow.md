<!--
title: overflow
id: 6989248889124126722
fullPath: /uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/overflow
updatedAt: 1657871783000
source: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/box-model/overflow
-->
# overflow

## 介绍

当元素的内容太大而无法适应`块级格式化上下文`时候该做什么。它是`overflow-x`和`overflow-y`的简写属性。

## 语法

```css
overflow: visible;

overflow: hidden;

overflow: visible hidden;
```

### 取值

-   `hidden`  

**默认值** 超出元素框的内容默认会被裁剪。

-   `visible`

内容不会被修剪，可以呈现在元素框之外。

### 标准化语法

```css
overflow: [hidden | visible]{1,2}
```

## 注意事项

-   移动端Native渲染引擎为了保证高效的渲染性能，`overflow`的默认值被设置为`hidden`
-   PC渲染行为和浏览器标准一致，`overflow`的默认值被设置为`visible`