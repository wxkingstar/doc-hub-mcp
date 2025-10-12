---
title: "border-width"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/border/border-width
---
最后更新于 2022-07-15

# border-width

## 介绍

用于设置四个边框的宽度，该属性可按顺序设置上边框宽度、右边框宽度、下边框宽度、左边框宽度。

## 语法

```css
/* 四个边框都是细边框 */
border-width: thin;
/* 上边框是细边框 | 右边框是中等边框 | 下边框缺省与上边框相同 | 左边框缺省与右边框相同 */
border-width: thin medium;
/* 上边框是细边框 | 右边框是中等边框 | 下边框是粗边框 | 左边框缺省与右边框相同 */
border-width: thin medium thick;
/* 上边框是细边框 | 右边框是中等边框 | 下边框是粗边框 ｜ 左边框是10px宽的边框 */
border-width: thin medium thick 10px;
```

### 取值

-   `thin`

细边框。

-   `medium`

中等边框。

-   `thick`

粗边框。

-   `<length>`

以具体的尺寸定义边框宽度

## 标准化语法

```css
border-width: [thin | medium | thick | <length>]{1, 4}
```

## 例子

```css
border-width: thin;
border-width: thin medium;
border-width: thin medium thick;
border-width: thin medium thick 10px;
border-width: 5px 10px 15px 20px;
```
