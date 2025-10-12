---
title: "SJS 语句"
source_url: https://open.feishu.cn/document/client-docs/gadget/framework/ui-layer/sjs/sjs-statement
last_remote_update: 2023-08-25
last_remote_update_timestamp: 1692954160000
---
最后更新于 2023-08-25

# SJS 语句

本文介绍 SJS 的语句，包括 If 语句、Switch 语句、For 语句以及 While 语句。

## If 语句

你可以使用以下格式的 If 语句。

- **if** **(** *expression* **)** *statement*
- **if** **(** *expression* **)** *statement1* **else** *statement2*

If 语句之间可以互相嵌套。示例代码如下：

```javascript
// if ...
if (表达式) 语句;

if (表达式) 语句;

if (表达式) {
  代码块;
}

// if ... else
if (表达式) 语句;
else 语句;

if (表达式) 语句;
else 语句;

if (表达式) {
  代码块;
} else {
  代码块;
}

// if ... else if ... else ...
if (表达式) {
  代码块;
} else if (表达式) {
  代码块;
} else if (表达式) {
  代码块;
} else {
  代码块;
}
```

## Switch 语句

示例语法如下所示。其中：

- `default` 分支可以省略不写。
- `case` 关键词后面只能使用：变量、数字、字符串。

```javascript
 switch (表达式) {
  case 变量:
    语句;
  case 数字:
    语句;
    break;
  case 字符串:
    语句;
  default:
    语句;
}
```

## For 语句

示例语法如下所示，其中，支持使用 **break**、 **continue** 关键字。

```javascript
for (语句; 语句; 语句) 语句;

for (语句; 语句; 语句) {
  代码块;
}
```

## While 语句

示例语法如下所示。其中：

- 当表达式为 `true` 时，循环执行语句或代码块。
- 支持使用 **break**、 **continue** 关键字。

```javascript
while (表达式) 语句;

while (表达式) {
  代码块;
}

do {
  代码块;
} while (表达式);
```
