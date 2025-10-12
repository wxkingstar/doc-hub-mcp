---
title: "font-family"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/attributes/text/font-family
---
最后更新于 2022-07-15

# font-family

## 介绍

通过给定一个有先后顺序的，由字体名或者字体族名组成的列表来为选定的元素设置字体。

## 语法

```css
.font {
  font-family: 'my-fontface';
}

@font-face {
  font-family: 'my-fontface';
  src: url(data:...;base64base64编码的字体...) local('Monosspace') url('https://www.runoob.com/try/demo_source/Sansation_Light.ttf');
}
```

### 取值

-   `<string>`

引用字体名称，目前不支持`serif`、`sans-serif`等通用字族。
