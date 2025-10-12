---
title: "使用组件行为 behaviors"
source_url: https://open.feishu.cn/document/client-docs/gadget/component-component/custom-components/component-behaviors
last_remote_update: 2023-08-29
last_remote_update_timestamp: 1693277020000
---
最后更新于 2023-08-29

# 使用组件行为 behaviors

`behaviors` 用于组件间代码共享，类似于一些编程语言中的 `mixins`。本文介绍什么是 behaviors 以及如何使用 behaviors。

## behaviors  简介

每个 `behavior` 可以包含一组属性、数据、生命周期函数和方法。当组件引用 `behavior` 时，其包含的属性、数据和方法会被合并到组件中，生命周期函数也会在对应时机被调用。每个组件可以引用多个 `behavior`，`behavior` 也可以引用其他 `behavior`。

## 使用示例

使用 `behavior` 时，需要先通过 `Behavior()` 构造器进行定义，示例代码如下。

```js
module.exports = Behavior({
  behaviors: [],
  properties: {
    myBehaviorProperty: {
      type: String
    }
  },
  data: {
    myBehaviorData: {}
  },
  attached: function(){},
  methods: {
    myBehaviorMethod: function(){}
  }
})
```

定义完成后，即可在指定的组件中引用 `behavior`。组件引用的示例代码如下，在组件中的 `behaviors` 定义段中，将 `behavior` 中的各数据逐个列出即可。

```js
var myBehavior = require('my-behavior')
Component({
  behaviors: [myBehavior],
  properties: {
    myProperty: {
      type: String
    }
  },
  data: {
    myData: {}
  },
  attached: function(){},
  methods: {
    myMethod: function(){}
  }
})
```

在上述示例中，`behavior` 中包含 `myBehaviorProperty` 属性、`myBehaviorData` 数据字段、`myBehaviorMethod` 方法和一个 `attached` 生命周期函数，并且在指定的组件定义中加入了 `behavior`，这将使得组件中也会包含 `myBehaviorProperty`、`myProperty` 两个属性，`myBehaviorData`、`myData` 两个数据字段，以及 `myBehaviorMethod`、`myMethod` 两个方法。

后续当组件触发 `attached` 生命周期时，会依次触发 `behavior` 中定义的 `attached` 生命周期函数、组件中的 `attached` 生命周期函数。

## 字段的覆盖和组合规则

组件和组件引用的 `behavior` 中可以包含同名的字段，这些字段的处理方法说明如下。

- 如果存在同名的属性或方法，组件本身的属性或方法会覆盖 `behavior` 中的属性或方法。如果引用了多个 `behavior` ，则在定义段中，靠后的 `behavior` 中的属性或方法会覆盖靠前的 `behavior` 中的属性或方法。

- 如果存在同名的数据字段，且数据是对象类型，则会进行对象合并。如果是非对象类型的数据字段，则会进行相互覆盖。

- 生命周期函数不会相互覆盖，而是在对应触发时机被逐个调用。如果同一个 `behavior` 被一个组件多次引用，它定义的生命周期函数只会被执行一次。
