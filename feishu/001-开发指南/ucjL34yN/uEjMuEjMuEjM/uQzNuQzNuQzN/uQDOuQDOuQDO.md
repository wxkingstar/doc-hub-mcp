<!--
title: 事件系统
id: 6907569743420211202
fullPath: /uYjL24iN/uQDOuQDOuQDO
updatedAt: 1692954173000
source: https://open.feishu.cn/document/client-docs/gadget/framework/ui-layer/ttml-events
-->
# 事件系统

本文介绍什么是事件、如何在组件上绑定事件，并提供事件系统的详细说明。

## 什么是事件

* 事件是视图层到逻辑层的通讯方式。
* 事件可以将用户的行为反馈到逻辑层进行处理。
* 事件可以绑定在组件上，当达到触发事件，就会执行逻辑层中对应的事件处理函数。
* 事件对象可以携带额外信息。例如：id、dataset、touches。


## 在组件上绑定事件

以 `bindtap` 组件为例，当该组件被点击时，会在该页面对应的 Page 中找到相应的事件处理函数。示例代码如下：

- index.ttml 中的配置。

```html
<!-- index.ttml -->
<view id="tapTest" data-hi="feishu" bindtap="tapName"> Click me! </view>
```

- 在 Page() 中的事件处理函数。

```js
Page({
  tapName: function(event) {
    console.log(event)
  }
})
```

其中，`console.log` 打印出来的 event 对象信息示例如下：

```json
{
"type":"tap",
"timeStamp":895,
"target": {
  "id": "tapTest",
  "dataset":  {
    "hi":"feishu"
  }
},
"currentTarget":  {
  "id": "tapTest",
  "dataset": {
    "hi":"feishu"
  }
},
"detail": {
  "x":53,
  "y":14
},
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

## 事件详情

事件分为冒泡事件和非冒泡事件。

- 冒泡事件：当一个组件上的事件被触发后，该事件会向父节点传递。
- 非冒泡事件：当一个组件上的事件被触发后，该事件不会向父节点传递。

### 冒泡事件

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:30%">类型</md-th>
<md-th style="width:70%">触发条件</md-th>
</md-tr>
</md-thead>
<md-tbody>
	
<md-tr>
<md-td>touchstart</md-td>
<md-td>手指触摸动作开始。</md-td>
</md-tr>

<md-tr>
<md-td>touchmove</md-td>
<md-td>手指触摸后移动。</md-td>
</md-tr>

<md-tr>
<md-td>touchcancel</md-td>
<md-td>手指触摸动作被打断。例如，来电提醒、弹窗。</md-td>
</md-tr>

<md-tr>
<md-td>touchend</md-td>
<md-td>手指触摸动作结束。</md-td>
</md-tr>

<md-tr>
<md-td>tap</md-td>
<md-td>手指触摸后马上离开。</md-td>
</md-tr>

<md-tr>
<md-td>longpress</md-td>
<md-td>手指触摸后，超过 350ms 再离开。如果指定了事件回调函数并触发了这个事件，tap 事件将不被触发。</md-td>
</md-tr>

<md-tr>
<md-td>longtap</md-td>
<md-td>手指触摸后，超过 350ms 再离开。推荐使用 longpress 事件代替该事件。</md-td>
</md-tr>

<md-tr>
<md-td>transitionend</md-td>
<md-td>会在 TTSS transition 或 tt.createAnimation 动画结束后触发。</md-td>
</md-tr>

<md-tr>
<md-td>animationstart</md-td>
<md-td>	会在一个 TTSS animation 动画开始时触发。</md-td>
</md-tr>

<md-tr>
<md-td>animationiteration</md-td>
<md-td>会在一个 TTSS animation 一次迭代结束时触发。</md-td>
</md-tr>

<md-tr>
<md-td>animationend</md-td>
<md-td>会在一个 TTSS animation 动画完成时触发。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::


### 事件绑定和冒泡

事件绑定的写法同组件的属性，以 key、value 的形式编写。

* key 以 bind 开头，然后跟上事件的类型，如 bindtap。
* value 是一个字符串，需要在对应的 Page 中定义同名的函数，否则在触发事件时会报错。
* 除 bind 之外，你也可以使用 catch 来绑定事件。与 bind 不同的是，catch 会阻止事件向上冒泡。

### 事件对象

如无特殊说明，当组件触发事件时，逻辑层绑定该事件的处理函数会收到一个事件对象。

#### BaseEvent 基础事件对象属性列表

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">属性</md-th>
<md-th style="width:20%">数据类型</md-th>
<md-th style="width:60%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>
	
<md-tr>
<md-td>type</md-td>
<md-td>String</md-td>
<md-td>事件类型。</md-td>
</md-tr>

<md-tr>
<md-td>timeStamp</md-td>
<md-td>Integer</md-td>
<md-td>事件生成时的时间戳。</md-td>
</md-tr>

<md-tr>
<md-td>target</md-td>
<md-td>Object</md-td>
<md-td>触发事件的组件内一些属性值集合。</md-td>
</md-tr>

<md-tr>
<md-td>currentTarget</md-td>
<md-td>Object</md-td>
<md-td>当前组件的一些属性值集合。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::


#### CustomEvent 自定义事件对象属性列表（继承 BaseEvent）

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">属性</md-th>
<md-th style="width:20%">数据类型</md-th>
<md-th style="width:60%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>
	
<md-tr>
<md-td>detail</md-td>
<md-td>Object</md-td>
<md-td>额外的信息。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

#### TouchEvent 触摸事件对象属性列表（继承 BaseEvent）

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">属性</md-th>
<md-th style="width:20%">数据类型</md-th>
<md-th style="width:60%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>
	
<md-tr>
<md-td>touches</md-td>
<md-td>Array</md-td>
<md-td>触摸事件，当前停留在屏幕中的触摸点信息的数组。</md-td>
</md-tr>

<md-tr>
<md-td>changedTouches</md-td>
<md-td>Array</md-td>
<md-td>触摸事件，当前变化的触摸点信息的数组。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

:::note
**特殊事件说明**： `<canvas/>` 中的触摸事件不可冒泡，所以没有 currentTarget。
:::

### 事件对象属性

#### target

触发事件的组件内一些属性值集合。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">属性</md-th>
<md-th style="width:20%">数据类型</md-th>
<md-th style="width:60%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>
	
<md-tr>
<md-td>id</md-td>
<md-td>String</md-td>
<md-td>事件源组件的 id。</md-td>
</md-tr>

<md-tr>
<md-td>dataset</md-td>
<md-td>Object</md-td>
<md-td>事件源组件上由`data-`开头的自定义属性组成的集合。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::


#### currentTarget

事件绑定的当前组件。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">属性</md-th>
<md-th style="width:20%">数据类型</md-th>
<md-th style="width:60%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>
	
<md-tr>
<md-td>id</md-td>
<md-td>String</md-td>
<md-td>当前组件的 id。</md-td>
</md-tr>

<md-tr>
<md-td>dataset</md-td>
<md-td>Object</md-td>
<md-td>当前组件上由`data-`开头的自定义属性组成的集合。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

#### dataset

在组件中你可以自定义数据，这些数据可通过事件对象的 `dataset` 属性获取。

书写方式：以 `data-` 开头，多个单词由连字符（-）连接，不能有大写（大写会自动转成小写）。例如，`data-element-type`，最终在 `event.currentTarget.dataset` 中会将连字符转成驼峰形式 `elementType`。示例代码如下：

- index.ttml 文件中的示例配置。

    ```html
    <!-- index.ttml -->
    <view data-alpha-beta="1" data-alphaBeta="2" bindtap="bindViewTap"> DataSet Test </view>
    ```

- Page() 中的示例配置。

    ```js
    Page({
      bindViewTap:function(event){
        event.currentTarget.dataset.alphaBeta === 1 // - 会转为驼峰写法
        event.currentTarget.dataset.alphabeta === 2 // 大写会转为小写
      }
    })
    ```

### touches

touches 是一个数组，其中的每个元素为一个 Touch 对象（canvas 触摸事件中携带的 touches 是 CanvasTouch 数组），表示当前停留在屏幕上的触摸点。

#### Touch 对象

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">属性</md-th>
<md-th style="width:20%">数据类型</md-th>
<md-th style="width:60%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>
	
<md-tr>
<md-td>identifier</md-td>
<md-td>Number</md-td>
<md-td>触摸点的标识符。</md-td>
</md-tr>

<md-tr>
<md-td>pageX, pageY</md-td>
<md-td>Number</md-td>
<md-td>距离文档左上角的距离，文档的左上角为原点，横向为 X 轴，纵向为 Y 轴。</md-td>
</md-tr>

<md-tr>
<md-td>clientX, clientY</md-td>
<md-td>Number</md-td>
<md-td>距离页面可显示区域（屏幕除去导航条）左上角距离，横向为 X 轴，纵向为 Y 轴</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

#### CanvasTouch 对象

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">属性</md-th>
<md-th style="width:20%">数据类型</md-th>
<md-th style="width:60%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>
	
<md-tr>
<md-td>identifier</md-td>
<md-td>Number</md-td>
<md-td>触摸点的标识符。</md-td>
</md-tr>

<md-tr>
<md-td>x, y</md-td>
<md-td>Number</md-td>
<md-td>距离 Canvas 左上角的距离，Canvas 的左上角为原点 ，横向为 X 轴，纵向为 Y 轴。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::


#### changedTouches

changedTouches 数据格式同 touches，表示有变化的触摸点。例如，从无变有（touchstart）、位置变化（touchmove）、从有变无（touchend、touchcancel）。


#### detail

自定义事件所携带的数据，例如，表单组件的提交事件会携带用户的输入。详见组件定义中各个事件的定义。

点击事件的 detail 带有的 `x, y` 同 `pageX, pageY`，代表距离文档左上角的距离。


### 鼠标事件

#### 兼容性

PC ≥ 5.18


#### 使用事件

在桌面端小程序中，可以监听如下鼠标事件：

- `mousedown`
- `mousemove`
- `mouseup`
- `mouseover`
- `mouseenter`
- `mouseout`
- `mouseleave`

除了基础的事件对象的属性以外，还会有如下属性。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">属性</md-th>
<md-th style="width:20%">数据类型</md-th>
<md-th style="width:60%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>
	
<md-tr>
<md-td>ctrlKey</md-td>
<md-td>boolean</md-td>
<md-td>同 [MouseEvent.ctrlKey](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/ctrlKey) 一致。</md-td>
</md-tr>

<md-tr>
<md-td>shiftKey</md-td>
<md-td>boolean</md-td>
<md-td>同 [MouseEvent.shiftKey](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/shiftKey) 一致。</md-td>
</md-tr>

<md-tr>
<md-td>altKey</md-td>
<md-td>boolean</md-td>
<md-td>同 [MouseEvent.altKey](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/altKey) 一致。</md-td>
</md-tr>

<md-tr>
<md-td>metaKey</md-td>
<md-td>boolean</md-td>
<md-td>同 [MouseEvent.metaKey](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/metaKey) 一致。</md-td>
</md-tr>

<md-tr>
<md-td>button</md-td>
<md-td>number</md-td>
<md-td>同 [MouseEvent.button](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button) 一致。</md-td>
</md-tr>

<md-tr>
<md-td>relatedTarget</md-td>
<md-td>EventTarget</md-td>
<md-td>同 `target` 属性一致，如果不存在则为 null。</md-td>
</md-tr>

<md-tr>
<md-td>clientX</md-td>
<md-td>number</md-td>
<md-td>同 [MouseEvent.clientX](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX) 一致。</md-td>
</md-tr>

<md-tr>
<md-td>clientY</md-td>
<md-td>number</md-td>
<md-td>同 [MouseEvent.clientY](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientY) 一致。</md-td>
</md-tr>

<md-tr>
<md-td>screenX</md-td>
<md-td>number</md-td>
<md-td>同 [MouseEvent.screenX](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/screenX) 一致。</md-td>
</md-tr>

<md-tr>
<md-td>screenY</md-td>
<md-td>number</md-td>
<md-td>同 [MouseEvent.screenY](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/screenY) 一致。</md-td>
</md-tr>

<md-tr>
<md-td>pageX</md-td>
<md-td>number</md-td>
<md-td>同 [MouseEvent.pageX](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageX) 一致。</md-td>
</md-tr>

<md-tr>
<md-td>pageY</md-td>
<md-td>number</md-td>
<md-td>同 [MouseEvent.pageY](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY) 一致。</md-td>
</md-tr>

<md-tr>
<md-td>offsetX</md-td>
<md-td>number</md-td>
<md-td>同 [MouseEvent.offsetX](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetX) 一致。</md-td>
</md-tr>

<md-tr>
<md-td>offsetY</md-td>
<md-td>number</md-td>
<md-td>同 [MouseEvent.offsetY](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetY) 一致。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

当 `target` 为 `canvas` 组件的时候，还会存在 `x`/`y` 属性。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">属性</md-th>
<md-th style="width:20%">数据类型</md-th>
<md-th style="width:60%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>
	
<md-tr>
<md-td>x</md-td>
<md-td>number</md-td>
<md-td>距离 `canvas` 组件左上角的横向距离。</md-td>
</md-tr>

<md-tr>
<md-td>y</md-td>
<md-td>number</md-td>
<md-td>距离 `canvas` 组件左上角的纵向距离。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

:::note
当监听了鼠标事件之后，并不会阻止触摸事件的触发。如果应用程序需要同时运行在移动端和 PC 端，那么需要手动处理两个事件重复触发的情况。
:::

