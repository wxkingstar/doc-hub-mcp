<!--
title: 基础组件
id: 6907569744331014145
fullPath: /uYjL24iN/ugTNugTNugTN
updatedAt: 1692954173000
source: https://open.feishu.cn/document/client-docs/gadget/framework/ui-layer/basic-components
-->
# 基础组件

小程序框架为开发者提供了一系列基础组件，开发者可以通过组合这些基础组件进行业务开发。

## 组件简介

在 TTML 中使用组件，是视图层的基本组成单元。一个组件通常包括开始标签和结束标签，标签内的属性用来修饰当前组件，组件的内容在两个标签之内填写。示例组件代码如下：

```html
<text prop-name="propValue">hello world</text>
```

::: note
所有组件与属性都是小写，以连字符（-）连接。
:::

你可以在飞书开放平台的客户端 API 手册中阅读[小程序基础组件](/ssl:ttdoc/uYjL24iN/ukTNukTNukTN)文档。

## 属性类型

基础组件支持的属性类型如下表所示。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">类型</md-th>
<md-th style="width:35%">描述</md-th>
<md-th style="width:45%">补充说明</md-th>
</md-tr>
</md-thead>
<md-tbody>
	
<md-tr>
<md-td>Boolean</md-td>
<md-td>布尔值</md-td>
<md-td>组件填写该属性后，无论是什么值都会被当作 true。只有组件上没有该属性时，属性值才为 false。如果属性值为变量，则变量的值会被转换为 Boolean 类型。</md-td>
</md-tr>

<md-tr>
<md-td>Number</md-td>
<md-td>数字</md-td>
<md-td>示例值：1、2.1</md-td>
</md-tr>

<md-tr>
<md-td>String</md-td>
<md-td>字符串</md-td>
<md-td>示例值："string"</md-td>
</md-tr>

<md-tr>
<md-td>Array</md-td>
<md-td>数组</md-td>
<md-td>示例值：[ 1, "string" ]</md-td>
</md-tr>

<md-tr>
<md-td>Object</md-td>
<md-td>对象</md-td>
<md-td>格式：{ key: value }</md-td>
</md-tr>

<md-tr>
<md-td>EventHandler</md-td>
<md-td>事件回调函数名</md-td>
<md-td>指 Page 中定义的事件处理函数名。</md-td>
</md-tr>

<md-tr>
<md-td>Any</md-td>
<md-td>任意类型</md-td>
<md-td>\-</md-td>
</md-tr>

</md-tbody>
</md-table>
:::


## 共有属性

任何组件都可以定义以下属性。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:15%">属性名</md-th>
<md-th style="width:15%">类型</md-th>
<md-th style="width:35%">描述</md-th>
<md-th style="width:35%">补充说明</md-th>
</md-tr>
</md-thead>
<md-tbody>
	
<md-tr>
<md-td>id</md-td>
<md-td>String</md-td>
<md-td>组件的唯一标识。</md-td>
<md-td>\-</md-td>
</md-tr>

<md-tr>
<md-td>class</md-td>
<md-td>String</md-td>
<md-td>组件的样式类。</md-td>
<md-td>在对应的 TTSS 中定义的样式类。</md-td>
</md-tr>

<md-tr>
<md-td>style</md-td>
<md-td>String</md-td>
<md-td>组件的内联样式。</md-td>
<md-td>\-</md-td>
</md-tr>

<md-tr>
<md-td>hidden</md-td>
<md-td>Boolean</md-td>
<md-td>组件是否显示。</md-td>
<md-td>所有组件默认为显示。</md-td>
</md-tr>

<md-tr>
<md-td>data-*</md-td>
<md-td>Any</md-td>
<md-td>组件的自定义数据。</md-td>
<md-td>你可以定义任意类型属性的数据，并可以在事件回调中通过 dataset 获取。</md-td>
</md-tr>

<md-tr>
<md-td>bind* catch*</md-td>
<md-td>EventHandler</md-td>
<md-td>组件的[事件](/ssl:ttdoc/uYjL24iN/uQDOuQDOuQDO)回调。</md-td>
<md-td>部分组件不支持 catch, 以组件文档的详细说明为准。</md-td>
</md-tr>


</md-tbody>
</md-table>
:::

## 特殊属性

一般情况下，组件都有各自定义的属性，可以对该组件的功能或样式进行修饰。具体的属性说明，参见各个[小程序基础组件](/ssl:ttdoc/uYjL24iN/ukTNukTNukTN)文档。