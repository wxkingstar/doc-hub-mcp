---
title: "line-height"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/text/line-height
---
最后更新于 2022-07-15

# line-height

## 介绍

用于设置多行元素的空间量，如多行文本的间距。

## 语法

```css
line-height: 30px;

line-height: 2;
```

### 取值

-   `<length>`

指定长度用于计算 line box 的高度。

-   `<number>`

该属性的应用值是这个无单位数字乘以该元素的字体大小。

## 标准化语法

```css
line-height: <length> | <number>
```

## 例子

```html
<text style="line-height:30px;">
    家乡雪雨弃苍黄，素果公孙金面場。

老朽梧桐抛旧裤，云灰雾暗盖村庄。

菊残草翠偶装备，皓首扬杯诗友镶。

浅纳鸡图多苦难，苍头盼庶众安康。

（2019年12月18日12时02分作）…
</text>

<text style="font-size:16px; line-height:2">
    家乡雪雨弃苍黄，素果公孙金面場。

老朽梧桐抛旧裤，云灰雾暗盖村庄。

菊残草翠偶装备，皓首扬杯诗友镶。

浅纳鸡图多苦难，苍头盼庶众安康。

（2019年12月18日12时02分作）…
</text>
```
