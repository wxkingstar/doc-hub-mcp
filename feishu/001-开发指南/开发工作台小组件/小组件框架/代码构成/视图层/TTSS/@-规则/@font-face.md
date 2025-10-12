---
title: "@font-face"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/rules/font-face
---
最后更新于 2022-07-15

# @font-face

`@font-face`规则，用于指定显示文本的自定义字体，字体能从远程服务器或者用户本地安装的字体加载。

## 语法

```css
@font-face {
  [ font-family: <string>; ] ||
  [ src: url(<string>) | local(<string>); ]
}
```

## 声明取值

### `font-family`

使用字符串指定字体名称，并且指定的字体名字将会被用于`font`或`font-family`属性。

### `src`

使用逗号分割排列出所有可用的字体，可以使用`url`函数来指定远程字体，也可以使用`local`函数来制定本地计算机上的字体名称。

### 示例

```css
@font-face {
    font-family: "font-Sansation_Light2";
    src: 
       url("https://2"),
       url("https://22"),
       url("https://222"),
       url("data:font/xxx...."),
       url("https://www.runoob.com/try/demo_source/Sansation_Light.ttf");
}
```
