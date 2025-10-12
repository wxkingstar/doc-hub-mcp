---
title: "text-overflow"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/text/text-overflow
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657871780000
---
最后更新于 2022-07-15

# text-overflow

## 介绍

设定如何显示溢出内容。

## 语法

```css
text-overflow: clip;

text-overflow: ellipsis;
```

### 取值

-   `clip`

**默认值。** 在内容区域的极限处截断文本，在字符的中间可能会发生截断。

-   `ellipsis`

用省略号表示被截断的文本，如果空间太小到连省略号都容纳不下，那么这个省略号也会被截断。

## 标准化语法

```css
text-overflow: clip | ellipsis
```
