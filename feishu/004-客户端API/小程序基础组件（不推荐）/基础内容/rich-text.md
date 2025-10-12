---
title: "rich-text"
source_url: https://open.feishu.cn/document/client-docs/gadget/component-component/basic-component/basic-content/rich-text
last_remote_update: 2022-03-22
last_remote_update_timestamp: 1647952264000
---
最后更新于 2022-03-22

# rich-text

富文本。

|属性名|类型|默认值|必填|说明|
|----|--|--|--|--|
|nodes|Array/String|[ ]|否|节点列表 / HTML String| warnning
nodes 属性推荐使用 Array 类型，由于组件会将 String 类型转换为 Array 类型，因而性能会有所下降。

## nodes 类型

目前 rich-text 组件内部支持两种节点：元素节点和文本节点。节点类型利用 type 字段区分，默认为元素节点。

### 元素节点

|属性名|类型|默认值|必填|描述|
|----|--|--|--|--|
|type|String|"node"|否|节点类型，元素节点为 node|
|name|String||是|标签名，支持受信任的 HTML 节点，具体见下文|
|attrs|Object||否|属性，支持该 HTML 节点下受信任的属性，键值对的形式描述一个该元素的属性，具体见下文|
|children|Array|[]|否|子节点列表，结构与 **nodes** 一致|

### 文本节点

|属性名|类型|默认值|必填|描述|
|----|--|--|--|--|
|type|String|"node"|是|类型，文本节点为 text，故此处需要改成 “text”|
|text|String||是|文本内容，支持 entities|

## 受信任的 HTML 节点及其受信任的属性
默认所有受信任的 HTML 节点支持 class 和 style 属性，不支持 **id** 属性。

|节点名|属性名|最低版本|
|----|----|---|
|a|||
|abbr|||
|b|||
|blockquote|||
|br|||
|code|||
|col|span, width||
|colgroup|span, width||
|dd|||
|del|||
|div|||
|dl|||
|dt|||
|em|||
|fieldset|||
|h1|||
|h2|||
|h3|||
|h4|||
|h5|||
|h6|||
|hr|||
|i|||
|img|alt, src, height, width||
|ins|||
|label|||
|legend|||
|li|||
|ol|start, type||
|p|||
|q|||
|span|||
|strong|||
|sub|||
|sup|||
|table|width||
|tbody|||
|td|colspan, height, rowspan, width||
|tfoot|||
|th|colspan, height, rowspan, width||
|thead|||
|tr|||
|ul|||
|pre|||
|video|src, poster||

## 示例代码

```html
<rich-text nodes="{{nodes}}"></rich-text>
```

```js
Page({
  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }]
  }
})
```
<br>![图片名称](http://sf3-cn.feishucdn.com/obj/website-img/37f6e3d1748e8b9e49e5baa2e78d93a4_2.png)
