---
title: "Creator"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/framework-interface/creator
---
最后更新于 2022-07-15

# Creator

Creator 用于创建小组件应用的实体数据（BlockEntity），供后续的 Block 消费。

## 接口定义

```javascript 
Creator(Object object) 
``` 

注册 Creator，接收一个 Object 参数，指定 Creator 的初始数据、生命周期回调、事件处理函数等。
请将自定义方法和事件回调函数定义在 methods 内部。

## 参数说明

| 属性        | 类型       | 说明                                                                |
| --------- | -------- | ----------------------------------------------------------------- |
| data      | object   | 初始化数据。下面会对 Data 进行详细介绍                                                             |
| onLoad    | function | 生命周期函数，Creator 加载时会调用。返回标准生命周期回调数据                                |
| onReady   | function | 生命周期函数，Creator 首次渲染完成后会调用；如果 Creator 无界面，则不触发                     |
| onDestroy | function | 生命周期函数，Creator 销毁时会调用                                             |
| onShow    | function | 生命周期函数，Creator 显示时会调用（依赖宿主策略，默认情况下，宿主页面显示时会触发）；如果 Creator 无界面，则不触发 |
| onHide    | function | 生命周期函数，Creator 隐藏时会调用（依赖宿主策略，默认情况下，宿主页面隐藏时会触发）；如果 Creator 无界面，则不触发； |
| methods   | object   | Creator 实例的方法，包括事件响应函数和任意的自定义方法                                    |

## 初始数据 data

`data` 是页面第一次渲染使用的**初始数据**。

页面加载时，`data` 将会以`JSON`字符串的形式由逻辑层传至渲染层，因此`data`中的数据必须是可以转成`JSON`的类型，包括字符串，数字，布尔值，对象，数组。

渲染层可以通过[TTML](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttml/data-binding)对数据进行绑定。示例代码如下：

```html
<view>{{text}}</view>

<view>{{array[0].msg}}</view>
```

```javaScript
Creator({
  data: {
    text: 'init data',
    array: [{msg: '1'}, {msg: '2'}]
  }
})
```
## 将数据发送到视图层
### 函数形式
`setData` 函数用于将数据从逻辑层发送到视图层（异步），同时改变对应的 `this.data` 的值（同步）。

```javascript 
Creator.prototype.setData(Object data, Function callback)
``` 

### 参数说明

| 参数       | 类型       | 是否必填 | 描述                       |
| -------- | -------- | -- | ------------------------ |
| data     | Object   | 是  | 这次要改变的数据                 |
| callback | Function | 否  | setData 引起的界面更新渲染完毕后的回调函数 |

### 注意事项

- 直接修改 `this.data` 而不调用 `this.setData` 无法改变页面的状态，还会造成数据不一致。
- 仅支持设置可 JSON 化的数据。
- 单次设置的数据不能超过 1024kB，请尽量避免一次设置过多的数据。
- 请不要把 `data` 中任何一项的 `value` 设为 `undefined` ，否则这一项将不被设置并可能遗留一些潜在问题。

## 生命周期回调参数

部分生命周期回调会接收特定的参数。

`onLoad` 回调参数是标准生命周期回调数据，包含内容如下：

| 参数                | 类型     | 说明                                                                                                                        |
| ----------------- | ------ | ------------------------------------------------------------------------------------------------------------------------- |
| host              | string | 宿主环境，飞书文档返回 docs_block                                                                                                    |
| blockInfo         | object | 包含 mode、setting                                                                                                           |
| blockInfo.mode    | string | 模式，Creator 作为创建过程时值为 `create`，作为设置过程时为 `setting`。|
| blockInfo.setting | object | 设置页初始参数。       |

## 调用示例

```javaScript
Creator({
  onLoad(options) {
    // option 1: no need user input, fetch meta by network directly
    tt.request({
      url: '',
      success(res) {
        tt.setBlockInfo({
          sourceMeta: res.meta,
        });
      },
    });
  },
  methods: {
    createBlock() {
      // option 2: user submit some input
      tt.setBlockInfo({
        sourceMeta: meta,
      });
    },
    cancelBlock() {
      tt.cancel();
    },
  },
});
```
