---
title: "SJS 数据类型"
source_url: https://open.feishu.cn/document/client-docs/gadget/framework/ui-layer/sjs/sjs-data-type
---
最后更新于 2023-08-25

# SJS 数据类型

SJS 中支持的数据类型如下所示。

- 数值 `number`
- 字符串 `string`
- 布尔值 `boolean`
- 对象 `object`
- 函数 `function`
- 数组 `array`
- 日期 `date`
- 正则 `regexp`

以上数据类型的属性和方法与 ES5（ECMAScript 5.0）基本相同，具体请参考 JavaScript 的用法。

## 判断数据类型

### 根据 constructor 判断

准确判断数据类型的方法是根据 `constructor` 属性来判断。

```javascript
var number = 10;
console.log("Number" === number.constructor);

var string = "str";
console.log("String" === string.constructor);

var boolean = true;
console.log("Boolean" === boolean.constructor);

var object = {};
console.log("Object" === object.constructor);

var func = function(){};
console.log("Function" === func.constructor);

var array = [];
console.log("Array" === array.constructor);

var date = getDate();
console.log("Date" === date.constructor);

var regexp = getRegExp();
console.log("RegExp" === regexp.constructor);
```

### 根据 typeof 判断

使用 `typeof` 可以进行数据类型的部分判断。

```javascript
var number = 10;
var boolean = true;
var object = {};
var func = function () {};
var array = [];
var date = getDate();
var regexp = getRegExp();

console.log("number" === typeof number);
console.log("boolean" === typeof boolean);
console.log("object" === typeof object);
console.log("function" === typeof func);
console.log("object" === typeof array);
console.log("object" === typeof date);
console.log("object" === typeof regexp);

console.log("undefined" === typeof undefined);
console.log("object" === typeof null);
```

## Date 和 RegExp 说明

SJS 不支持 new 关键字（new 运算），所以无法通过以下方式创建 `date` 和 `regexp` 类型。

```javascript
new Date();
new RegExp("/d+/");
```

你需要通过 `getDate` 和 `getRegExp` 方法进行获取。

```javascript
getDate();
getDate(milliseconds);
getDate(datestring);
getDate(year, month[, date[, hours[, minutes[, seconds[, milliseconds]]]]]);

getRegExp(pattern[, flags]);
```
