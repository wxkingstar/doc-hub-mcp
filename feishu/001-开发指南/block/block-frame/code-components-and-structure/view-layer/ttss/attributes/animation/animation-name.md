<!--
title: animation-name
id: 6989248889124257794
fullPath: /uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/animation-name
updatedAt: 1657871781000
source: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/animation/animation-name
-->
# animation-name

## 介绍

用于设置播放动画的`Keyframe`的名字。

## 语法

```css
/* string */
animation-name: KeyframeName;
```

### 取值

-   `<string>`

定义动画的名称，默认为空字符串。

## 标准化语法

```css
animation-name: <string>
```

## 例子

```css
@keyframes good {
  0% {
    top: 0;
    left: 0;
  }
  30% {
    top: 50px;
  }
  68%,
  72% {
    left: 50px;
  }
  100% {
    top: 100px;
    left: 100%;
  }
}

.test {
    animation-name: good;
}
```