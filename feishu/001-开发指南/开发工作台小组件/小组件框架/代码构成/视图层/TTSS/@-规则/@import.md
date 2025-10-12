---
title: "@import"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/rules/import
last_remote_update: 2022-07-15
last_remote_update_timestamp: 1657871780000
---
最后更新于 2022-07-15

# @import

`@import`规则，用于从其他样式表导入样式规则。这些规则必须先于所有其他类型的规则，它不是一个嵌套语句，`@import`不能在条件组的规则中使用。

## 语法

```css
@import <string>;
```

其中，`<string>`表示[字符串](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/basic-data-type/string)数据类型。

## 示例

```css
@import 'custom.ttss';
@import './custom.ttss';
@import '/pages/vard/index.ttss';
```
