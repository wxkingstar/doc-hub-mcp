---
title: "Block"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/framework-interface/block
---
最后更新于 2023-04-13

# Block

Block 消费 Creator 创建的 Block 应用实体数据（BlockEntity），进行展示、交互。

## 接口定义

```javascript
Block(Object object) 
``` 

注册 Block，接收一个 Object 参数，指定初始数据、生命周期回调、事件处理函数等。
自定义方法和事件回调必须定义在 methods 内部。

## 参数说明

| 属性                                                                            | 类型       | 说明                                                                                      |
| ----------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------- |
| data                                                                          | object   | 初始化数据                                                                                   |
| onLoad                                                                        | function | 生命周期函数，Block 加载时会调用。返回标准生命周期回调数据                                                        |
| onReady                                                                       | function | 生命周期函数，Block 首次渲染完成后会调用                                                                 |
| onDestroy                                                                     | function | 生命周期函数，Block 销毁时会调用                                                                     |
| onShow                                                                        | function | 生命周期函数，Block 显示时会调用（依赖宿主策略，默认情况下，宿主页面显示时会触发）                                            |
| onHide                                                                        | function | 生命周期函数，Block 隐藏时会调用（依赖宿主策略，默认情况下，宿主页面隐藏时会触发）                                            |
| onResourceChange                                                              | function | 用于接收协同数据的变化，应用服务端主动推送必要的信息给 Block 实例时触发                                                 |
| methods                                                                       | object   | Block实例的方法，包括事件响应函数和任意的自定义方法                                                            |
| onInactivate | function | Block框架检测到Block逻辑层无运行需求时，会自动进行失活操作，释放内存数据降低内存消耗，开发者需要在此生命周期中利用`tt.saveState`保存数据，以免数据丢失。 |
| onActivate  | function | Block框架检测到Block逻辑层存在运行需求时，会自动进行激活，开发者可以在该生命周期获取到`tt.saveState`保存的数据，进行相关状态的恢复操作。        |

## 初始数据 data

`data` 是页面第一次渲染使用的**初始数据**。

页面加载时，`data` 将会以`JSON`字符串的形式由逻辑层传至渲染层，因此`data`中的数据必须是可以转成`JSON`的类型：字符串，数字，布尔值，对象，数组。

渲染层可以通过[TTML]([数据绑定](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttml/data-binding))对数据进行绑定。示例代码如下：

```html
<view>{{text}}</view>
<view>{{array[0].msg}}</view>
```

```javaScript
Block({
  data: {
    text: 'init data',
    array: [{msg: '1'}, {msg: '2'}]
  }
})
```

## 将数据发送到视图层
### 函数形式

```javascript 
Block.prototype.setData(Object data, Function callback)

``` 

`setData` 函数用于将数据从逻辑层发送到视图层（异步），同时改变对应的 `this.data` 的值（同步）。

### 参数说明

| 字段       | 类型       | 必填 | 描述                       |
| -------- | -------- | -- | ------------------------ |
| data     | Object   | 是  | 这次要改变的数据                 |
| callback | Function | 否  | setData引起的界面更新渲染完毕后的回调函数 |

### 注意事项

- 直接修改 `this.data` 而不调用 `this.setData` 是无法改变页面的状态的，还会造成数据不一致。
- 仅支持设置可 JSON 化的数据。
- 单次设置的数据不能超过 1024kB，请尽量避免一次设置过多的数据。
- 请不要把 `data` 中任何一项的 `value` 设为 `undefined` ，否则这一项将不被设置并可能遗留一些潜在问题。

## 生命周期回调参数

部分生命周期回调会接收特定的参数。
### onLoad 回调参数

`onLoad` 回调参数是标准生命周期回调数据，包含内容如下：

| 属性                   | 类型     | 说明                                                    |
| -------------------- | ------ | ----------------------------------------------------- |
| host                 | string | 宿主环境，比如飞书文档返回 docs_block                              |
| blockInfo            | object | 开发者的在 Creator 中设置的 blockInfo，包括 sourceMeta、sourceData |
| blockInfo.sourceMeta | object | 用于描述Block应用的元信息                                       |
| blockInfo.sourceData | object | Block应用的数据源                                           |
| blockInstanceInfo    | string | 当前block应用的blockId                                     |
### onResourceChange 回调参数
`onResourceChange` 回调参数是一个对象，当此 Block 对应的资源有变化时，开发者的服务器通过开放平台将变更后的数据通过协同机制推送到 Block。

| 参数         | 类型     | 说明        |
| ---------- | ------ | --------- |
| sourceData | object | 协同变化推送的数据 |
### onActivate 回调参数

`onActivate` 回调参数来自于开发者基于`tt.saveState` 保存的数据。

| 参数          | 类型     | 说明                        |
| ----------- | ------ | ------------------------- |
| activeState | object | tt.saveState 保存的`state`数据|

## 调用示例

```javaScript
Block({
  data: {
    point: 1,
  },
  onLoad(options) {
    // invoked when block loaded
    console.log(options.host)
    console.log(options.blockInfo)
  },
  onDestroy() {
    // invoked when block destroied
  },

onResourceChange(sourceData) {
    // do some render by sourceData
  },
  methods: {
    onButtonClick(e) {
      // invoked when user do some action
    }
  },
  onActivate(activeState){
    this.setData(activeState);
  },
  onInactivate(){
    tt.saveState({
      state: this.data,
    });
  }
});
```
