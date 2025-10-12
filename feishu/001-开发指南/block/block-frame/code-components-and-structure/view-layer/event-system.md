<!--
title: 事件系统
id: 6989248828935405570
fullPath: /uAjLw4CM/uYjL24iN/block/block-frame/view-layer/event-system
updatedAt: 1657871784000
source: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/event-system
-->
# 事件


## 什么是事件

- 事件是视图层到逻辑层的通讯方式。
- 事件可以将用户的行为反馈到逻辑层进行处理。
- 事件可以绑定在组件上，当达到触发事件，就会执行逻辑层中对应的事件处理函数。
- 事件对象可以携带额外信息，如 `id`, `dataset`, `touches`。

## 事件分类

事件分为冒泡事件和非冒泡事件：

1. 冒泡事件：当一个组件上的事件被触发后，该事件会向父节点传递，父节点也会收到一样的事件。冒泡事件列表如下：

| 类型             | 触发条件                        |
| -------------- | --------------------------- |
| touchstart     | 手指触摸动作开始                    |
| touchmove      | 手指触摸后移动                     |
| touchend       | 手指触摸动作结束                    |
| tap            | 手指触摸后马上离开                   |
| transitionend  | 会在 TTSS transition动画结束后触发   |
| animationstart | 会在一个 TTSS animation 动画开始时触发 |
| animationend   | 会在一个 TTSS animation 动画完成时触发 |

2. 非冒泡事件：当一个组件上的事件被触发后，该事件不会向父节点传递。

## 绑定事件

事件绑定的写法类似于组件的属性，如：

```html
<view id="tapTest" data-hi="world" bindtap="tapName">
  <text>Click me!</text>
</view>
```
```javaScript
Block({
  methods: {
    tapName: function(event) { console.log(event) }
  }
})
```

如果用户点击这个 view ，则页面的 `handleTap` 会被调用。

可以看到在组件上以 `bind` 开头的属性都是用于绑定事件监听的。例如 `bindtap` 绑定 `tap` 事件，而 `bindtouchmove` 则绑定 `touchmove` 事件。属性所设置的值为接受此事件的实例上的方法名称。如 `tapName`。

上面的 `console.log` 打印出来的 event 对象的信息大致如下：

```javaScript
{
  "type":"tap",
  "timeStamp":895,
  "target": {
    "id": "tapTest",
    "dataset": { "hi":"world" }
  },
  "currentTarget": {
    "id": "tapTest",
    "dataset": { "hi":"world" }
  },
  "detail": { "x":53, "y":14},
  "touches":[{
      "identifier":0,
      "pageX":53,
      "pageY":14,
      "clientX":53,
      "clientY":14
  }],
  "changedTouches":[{
    "identifier":0,
    "pageX":53,
    "pageY":14,
    "clientX":53,
    "clientY":14
  }]
}
```

同时事件绑定的值也可以是一个数据绑定，如：

```html
<view bindtap="{{handlerName}}">
  <text>Click me!</text>
</view>
```

此时，页面的 `this.data.handlerName` 必须是一个字符串，指定事件处理函数名；如果它是个空字符串，则这个绑定会失效（可以利用这个特性来暂时禁用一些事件）。

### 绑定并阻止事件冒泡

除 `bind` 外，也可以用 `catch` 来绑定事件。与 `bind` 不同， `catch` 会阻止事件向上冒泡。

例如在下边这个例子中，点击 inner view 会先后调用`handleTap3`和`handleTap2`(因为tap事件会冒泡到 middle view，而 middle view 阻止了 tap 事件冒泡，不再向父节点传递)，点击 middle view 会触发`handleTap2`，点击 outer view 会触发`handleTap1`。

```html
<view id="outer" bindtap="handleTap1">
  <text>outer view</text>
  <view id="middle" catchtap="handleTap2">
    <text>middle view</text>
    <view id="inner" bindtap="handleTap3">
      <text>inner view</text>
    </view>
  </view>
</view>
```

## 事件详解

### 事件对象

如无特殊说明，当组件触发事件时，逻辑层绑定该事件的处理函数会收到一个事件对象。

#### BaseEvent 基础事件对象属性列表：

| 属性            | 类型      | 说明              |
| ------------- | ------- | --------------- |
| type          | String  | 事件类型            |
| timeStamp     | Integer | 事件生成时的时间戳       |
| target        | Object  | 触发事件的组件的一些属性值集合 |
| currentTarget | Object  | 当前组件的一些属性值集合    |

#### CustomEvent 自定义事件对象属性列表

> 继承 BaseEvent

| 属性     | 类型     | 说明    |
| ------ | ------ | ----- |
| detail | Object | 额外的信息，不同事件所对应的值不同 |

#### TouchEvent 触摸事件对象属性列表

> 继承 BaseEvent

| 属性             | 类型    | 说明                     |
| -------------- | ----- | ---------------------- |
| touches        | Array | 触摸事件，当前停留在屏幕中的触摸点信息的数组 |
| changedTouches | Array | 触摸事件，当前变化的触摸点信息的数组     |

> PC浏览器模式下，会基于鼠标事件模拟 `touch` 事件

### 事件对象属性

#### `target`

触发事件的组件的一些属性值集合;

| 属性      | 类型     | 说明                         |
| ------- | ------ | -------------------------- |
| id      | String | 事件源组件的 id                  |
| dataset | Object | 事件源组件上由 data-开头的自定义属性组成的集合 |

#### `currentTarget`

绑定事件处理函数的组件的一些属性值集合;

| 属性      | 类型     | 说明                         |
| ------- | ------ | -------------------------- |
| id      | String | 当前组件的 id                   |
| dataset | Object | 当前组件上由 data- 开头的自定义属性组成的集合 |

#### `dataset`

在组件中可以自定义数据，这些数据可通过事件对象的 `dataset` 属性获取。 书写方式： 以 `data-` 开头，多个单词由连字符-连接，不能有大写(大写会自动转成小写)如 `data-element-type`，最终在 `event.currentTarget.dataset` 中会将连字符转成驼峰 `elementType`。

示例代码：

```html
<!-- index.ttml -->
<view data-alpha-beta="1" data-alphaBeta="2" bindtap="bindViewTap">
  <text>DataSet Test </text>
</view>
```
```javaScript
Block({
  methods: {
    bindViewTap:function(event){
      // - 会转为驼峰写法 event.currentTarget.dataset.alphabeta === 2
      // 大写会转为小写
      event.currentTarget.dataset.alphaBeta === 1
    }
  }
})
```

#### `detail`

自定义事件所携带的数据，如表单组件的提交事件会携带用户的输入，详见组件定义中各个事件的定义。


#### `touches`

touches 是一个数组，每个元素为一个 Touch 对象（canvas 触摸事件中携带的 touches 是 CanvasTouch 数组）。 表示当前停留在屏幕上的触摸点。

##### Touch 对象

| 属性               | 类型     | 说明                                      |
| ---------------- | ------ | --------------------------------------- |
| identifier       | String | 触摸点的标识符                                 |
| pageX, pageY     | Number | 距离文档左上角的距离，文档的左上角为原点 ，横向为 X 轴，纵向为 Y 轴   |
| clientX, clientY | Number | 距离页面可显示区域（屏幕除去导航条）左上角距离，横向为 X 轴，纵向为 Y 轴 |

##### CanvasTouch 对象

| 属性         | 类型     | 说明                                               |
| ---------- | ------ | ------------------------------------------------ |
| identifier | String | 触摸点的标识符                                          |
| x, y       | Number | 距离 Canvas 左上角的距离，Canvas 的左上角为原点 ，横向为 X 轴，纵向为 Y 轴 |

##### changedTouches

changedTouches 数据格式同 touches。 表示有变化的触摸点，如从无变有（touchstart），位置变化（touchmove），从有变无（touchend、touchcancel）。
