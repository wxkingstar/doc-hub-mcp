<!--
title: SJS 变量
id: 6988002918667730947
fullPath: /uYjL24iN/uEjMuEjMuEjM/sjs/sjs-variable
updatedAt: 1692954160000
source: https://open.feishu.cn/document/client-docs/gadget/framework/ui-layer/sjs/sjs-variable
-->
# SJS 变量

你可以使用 `var` 关键字声明 SJS 变量。

## 语法规范

- `var` 与 JavaScript 中表现一致，会有变量提升。
- 没有声明的变量直接赋值使用，会被定义为全局变量。
- 只声明变量而不赋值，默认值为 `undefined`。

示例代码如下：

```javascript
var foo = 1;
var bar = "hello world";
var a; // a=== undefined
```

## 变量名

### 命名规则

- 首字符必须是：字母（a-z,A-Z）、下划线（_）
- 首字母以外的字符可以是：字母（a-z,A-Z）、下划线（_）、数字（0-9）

### 保留标识符

SJS 变量和 JavaScript 一致，无法使用以下标识符。

```
arguments
break
case
continue
default
delete
do
else
false
for
function
if
Infinity
NaN
null
require
return
switch
this
true
typeof
undefined
var
void
while
```