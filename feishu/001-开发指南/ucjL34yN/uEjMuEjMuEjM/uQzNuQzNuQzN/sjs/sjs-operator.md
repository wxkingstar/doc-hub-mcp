<!--
title: SJS 运算符
id: 6988002918667763715
fullPath: /uYjL24iN/uEjMuEjMuEjM/sjs/sjs-operator
updatedAt: 1692954160000
source: https://open.feishu.cn/document/client-docs/gadget/framework/ui-layer/sjs/sjs-operator
-->
# SJS 运算符

本文介绍 SJS 运算符的种类，所有运算符的优先级与 JavaScript 中的规则一致。

## 算术运算符

```javascript
var a = 1;
var b = 1;

a + b; // 加法运算符
a - b; // 减法运算符
a * b; // 乘法运算符
a / b; // 除法运算符
a % b; // 取模运算符
```

## 比较运算符

```javascript
var a = 1;
var b = 2;

a > b;
a < b;
a >= b;
a <= b;
a != b;
a == b;
a !== b;
a === b;
```

## 二元逻辑运算符

```javascript
var a = 1;
var b = 0;

a && b;
a || b;
!b;
```

## 位运算符

```javascript
var a = 2;
var b = 4;

a & b;
a | b;
a ^ b;

a >> 1;
b << 1;
b >>> 1;
```

## 赋值运算符

```javascript
var a = 2;

a += 10;
a -= 10;
a *= 1;
a /= 1;
a %= 2;

a <<= 1;
a >>= 1;
a >>>= 1;

a &= 1;
a |= 1;
a ^= 1;
```

## 一元运算符

```javascript
var a = 1;

a++;
++a;

a--;
--a;

+a;
-a;

~a;

delete a; // delete 运算
void 0; // void 运算
typeof a; // typeof 运算
```

## 三元运算符

```javascript
var a = 2;
var b = a > 1 ? "hello" : "bye";
```

## 逗号运算符

```javascript
var a = (1, "hello");
```