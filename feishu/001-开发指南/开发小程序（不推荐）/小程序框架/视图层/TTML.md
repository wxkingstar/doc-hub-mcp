---
title: "TTML"
source_url: https://open.feishu.cn/document/client-docs/gadget/framework/ui-layer/ttml
last_remote_update: 2023-08-17
last_remote_update_timestamp: 1692243639000
---
最后更新于 2023-08-17

# TTML

TTML 是用于编写页面结构的标签语言。本文主要介绍 TTML 包含的特性。

## 数据绑定

示例配置如下，详细的语法介绍，参见[数据绑定](https://open.feishu.cn/document/uYjL24iN/uADOuADOuADO)。

```html
<view> {{message}} </view>
```

```js
// page.js
Page({
  data: {
    message: 'Hello World!'
  }
})
```

## 列表渲染

示例配置如下，详细的语法介绍，参见[列表渲染](https://open.feishu.cn/document/uYjL24iN/uEDOuEDOuEDO)。

```html
<view tt:for="{{array}}"> {{item}} </view>
```

```js
// page.js
Page({
  data: {
    array: [1, 2, 3, 4, 5]
  }
})
```

## 条件渲染

示例配置如下，详细的语法介绍，参见[条件渲染](https://open.feishu.cn/document/uYjL24iN/uIDOuIDOuIDO)。

```html
<view tt:if="{{view == 'A'}}"> A </view>
<view tt:elif="{{view == 'B'}}"> B </view>
<view tt:else> C </view>
```

```js
// page.js
Page({
  data: {
    view: 'A'
  }
})
```

## 模版

示例配置如下，详细的语法介绍，参见[模版](https://open.feishu.cn/document/uYjL24iN/uMDOuMDOuMDO)。

```html
<template name="staffName">
  <view>
    FirstName: {{firstName}}, LastName: {{lastName}}
  </view>
</template>

<template is="staffName" data="{{...staffA}}"></template>
<template is="staffName" data="{{...staffB}}"></template>
<template is="staffName" data="{{...staffC}}"></template>
```

```js
// page.js
Page({
  data: {
    staffA: {firstName: '大林', lastName: '斯'},
    staffB: {firstName: '吉尔', lastName: '丘'},
    staffC: {firstName: '福', lastName: '罗思'}
  }
})
```

## 事件

示例配置如下，详细的语法介绍，参见[事件](https://open.feishu.cn/document/uYjL24iN/uQDOuQDOuQDO)。

```html
<view bindtap="add"> {{count}} </view>
```

```js
// page.js
Page({
  data: {
    count: 1
  },
  add: function(e) {
    this.setData({
      count: this.data.count + 1
    })
  }
})
```
