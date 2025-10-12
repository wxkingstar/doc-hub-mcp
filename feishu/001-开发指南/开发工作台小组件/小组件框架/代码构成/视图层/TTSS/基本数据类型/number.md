---
title: "number"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/basic-data-type/number
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657871783000
---
最后更新于 2022-07-15

# number

## 介绍

`<number>`数据类型代表一个数字，可为整数或小数，它没有任何单位，并不是一个`TTSS`尺寸。

## 实例

### 有效数字

```
12          正整数
4.01        正小数
-456.8      负小数
0.0         零
+0.0        带正号的零
-0.0        带符号的零
.60         点前的数字可以省略
10e3        科学计数法
-3.4e-2     科学计数法最复杂的情况
```

### 非法数字

```
12.         点后需有数字
+-12.2      只能有一个符号
12.1.1      只能有一个点
```
