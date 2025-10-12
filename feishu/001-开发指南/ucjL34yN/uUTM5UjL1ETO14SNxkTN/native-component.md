<!--
title: 原生组件与同层渲染
id: 7207624157053386753
fullPath: /uYjL24iN/uUTM5UjL1ETO14SNxkTN/native-component
updatedAt: 1693277065000
source: https://open.feishu.cn/document/client-docs/gadget/component-component/native-component
-->
# 原生组件与同层渲染

小程序的部分组件是由客户端创建的原生组件，根据是否开启了同层渲染，这些原生组件的使用可能会受到一些限制。本文将介绍同层渲染的作用，并提供在未开启同层渲染时原生组件的使用限制。

:::note
- 原生组件包括：[input](/ssl:ttdoc/uYjL24iN/uUjNuUjNuUjN)、[textarea](/ssl:ttdoc/uYjL24iN/uIzNuIzNuIzN)、[video](/ssl:ttdoc/uYjL24iN/uYzNuYzNuYzN)、[map](/ssl:ttdoc/uYjL24iN/uEDM5UjLxATO14SMwkTN)、[camera](/ssl:ttdoc/uYjL24iN/uYTNuYTNuYTN/camera)。
- 原生组件与同层渲染只适用于移动端，PC 端的上述组件均为前端实现，不涉及同层渲染。
:::

## 同层渲染介绍

同层渲染的主要目的是解决原生组件与前端组件共同渲染时，产生的层级问题。

- 在未开启同层渲染时，组件总是覆盖在小程序 WebView 上方，且无法通过指定 `z-index` 的方式被其他组件覆盖。
- 开启同层渲染后，原生组件的层级表现将与前端组件一致。

## 原生组件使用限制

在未开启同层渲染时，原生组件有以下使用限制：

- 无论是否设置 `z-index`，原生组件的层级总是最高的，无法被其他页面元素覆盖。

  不同原生组件间可通过 `z-index` 调整层级关系。
  
- 无法在 [scroll-view](/ssl:ttdoc/uYjL24iN/uAjNuAjNuAjN)、[swiper](/ssl:ttdoc/uYjL24iN/uEjNuEjNuEjN)、[picker-view](/ssl:ttdoc/uYjL24iN/ugjNugjNugjN) 中使用原生组件。

  如果使用，可能会导致错位、无法滚动等问题。
  
- 部分 CSS 样式无法生效或会导致渲染异常，包括但不限于：

  - CSS 动画
  - `display:none`
  - `overflow: hidden`

:::note
在开启同层渲染后，不存在以上限制，但仍需注意：

- 在开发者工具上，原生组件使用前端组件模拟实现，不能完全还原真机表现。因此，建议你在使用原生组件时，通过真机进行调试。
- 原生组件本质上是客户端创建的组件，其支持的属性与 API 可参考相关组件文档，请勿与前端同名组件混淆。
:::

## 常见问题

### 我开启了同层渲染后，为什么没有生效？

当前原生组件均已支持同层渲染（`input` 组件 focus 状态除外），但由于 Android 端自研浏览器内核的覆盖率限制，原生组件有很低的概率退化为非同层渲染。此时，你需要按照上文的原生组件使用限制，对组件使用方式进行调整。

### 如何判断同层渲染是否开启？

你可以使用 `tt.canIUse('isRenderInSameLayer.组件名')` API 判断特定组件是否支持同层渲染。

- API 调用示例：

```javascript
// 获取 textarea 是否支持同层渲染
const component = 'textarea';
const isRenderInSameLayer = tt.canIUse('isRenderInSameLayer.' + component);
console.log(component, 'support render in same layer:', isRenderInSameLayer);
```

- `tt.canIUse` 支持情况：

:::html
<md-table>
  <md-thead>
    <md-tr>
      <md-th style="width: 25%;">应用能力</md-th>
      <md-th style="width: 25%;">Android</md-th>
      <md-th style="width: 25%;">iOS</md-th>
      <md-th style="width: 25%;">PC</md-th>
    </md-tr>
  </md-thead>
  <md-tbody>
    <md-tr>
      <md-td>小程序</md-td>
      <md-td><md-version>V5.28.0+</md-version></md-td>
      <md-td><md-version>V5.28.0+</md-version></md-td>
      <md-td>**X**</md-td>
    </md-tr>
  </md-tbody>
</md-table>
:::