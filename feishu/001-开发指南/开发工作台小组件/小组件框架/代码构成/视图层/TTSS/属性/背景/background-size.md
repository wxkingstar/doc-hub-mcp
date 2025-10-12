---
title: "background-size"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/background/background-size
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657871782000
---
最后更新于 2022-07-15

# background-size

## 介绍

`background-size`属性设定背景图片的大小。可以用逗号分隔的列表来描述多个背景图片的大小。

## 语法

```css
background-size: 50%;
background-size: 40px, 30px;
background-size: cover;
background-size: 50% 50%, contain;
```

### 取值

-   `auto`

**默认值。** 背景图片保留其原始的尺寸。

-   `<length>`

设置背景图片的宽和高，如果只给出一个值，那么另一个值自动设为`auto`。

-   `<percentage>`

以绘制范围百分比的形式设置背景图片的宽高。同理，如果只给出一个值，另一个值为`auto`。

-   `cover`

重设图片大小以保证图片可以完全覆盖整个边框，超出的部分会被裁掉。

-   `contain`

重设背景图片的大小且保证图片完全可见（某一边完全贴合）。

### 标准化语法

```css
background-size: [<length> | <percentage> | auto ]{1,2} | cover | contain
```
