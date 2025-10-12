<!--
title: TTSS
id: 6907569524101120001
fullPath: /uYjL24iN/uYDOuYDOuYDO
updatedAt: 1692954148000
source: https://open.feishu.cn/document/client-docs/gadget/framework/ui-layer/ttss
-->
# TTSS

TTSS 是一套样式语言，用于描述 TTML 的组件样式。TTSS 具备 CSS 大部分特性，同时 TTSS 对 CSS 进行了扩充以及修改。与 CSS 相比，TTSS 扩展的特性如下：

* 尺寸单位
* 样式导入

## 尺寸单位

rpx（responsive pixel）: 该尺寸单位可以根据屏幕宽度进行自适应。规定屏幕宽为 750rpx。例如在 iPhone 6 上，屏幕宽度为 375 px，共有 750 个物理像素，则 750 rpx = 375 px = 750 物理像素，即 1 rpx = 0.5 px = 1 物理像素。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:15%">设备</md-th>
<md-th style="width:30%">rpx 换算 px (屏幕宽度 / 750)</md-th>
<md-th style="width:30%">px 换算 rpx (750 / 屏幕宽度)</md-th>
<md-th style="width:30%">备注</md-th>
</md-tr>
</md-thead>
<md-tbody>
	
<md-tr>
<md-td>iPhone 5</md-td>
<md-td>1 rpx = 0.42 px</md-td>
<md-td>1 px = 2.34 rpx</md-td>
<md-td>\-</md-td>
</md-tr>

<md-tr>
<md-td>iPhone 6</md-td>
<md-td>1 rpx = 0.5 px</md-td>
<md-td>1 px = 2 rpx</md-td>
<md-td>\-</md-td>
</md-tr>

<md-tr>
<md-td>iPhone 6 Plus</md-td>
<md-td>1 rpx = 0.552 px</md-td>
<md-td>1 px = 1.81 rpx</md-td>
<md-td>\-</md-td>
</md-tr>

<md-tr>
<md-td>Pad</md-td>
<md-td>1 rpx = 0.5 px</md-td>
<md-td>1 px = 2 rpx</md-td>
<md-td>iPad 版本从 3.29 开始，android Pad 从 4.10 开始。rpx 按照宽度 375 px 进行换算。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

::: warning
- 在 Pad 场景下，为了防止 rpx 换算后的 px 结果过大，导致页面样式需要重新适配，开放平台小程序将 Pad 下 1 rpx 固定为 0.5 px，但 Pad 屏幕尺寸不止 375 px，此时会导致 750 rpx（375 px） 未占满屏幕。该场景中如需做宽度适配，建议你使用 vw、宽度百分比、flex 等方式。 

- 你可以用 iPhone 6 作为视觉稿的标准。
:::

## 样式导入

使用 `@import` 语句可以导入外联样式表，`@import` 后跟需要导入的外联样式表的相对路径，用 `;` 表示语句结束。

示例代码如下：

```css
/** common.ttss **/
.small-p {
  padding:5px;
}
```

```css
/** app.ttss **/
@import "common.ttss";
.middle-p {
  padding:15px;
}
```

## 内联样式

框架组件上支持使用 `style`、`class` 属性来控制组件的样式。

* `style`：静态的样式统一写到 `class` 中。`style` 接收动态的样式，在运行时会进行解析。因此，请尽量避免将静态的样式写进 `style` 中，以免影响渲染速度。

    ```html
    <view style="color:{{color}};" />
    ```

* `class`：用于指定样式规则，其属性值是样式规则中，类选择器名（样式类名）的集合，样式类名不需要带上`.`，样式类名之间用空格分隔。

    ```html
    <view class="normal_view" />
    ```

## 选择器

目前支持的选择器如下表所示。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">选择器</md-th>
<md-th style="width:20%">样例</md-th>
<md-th style="width:60%">样例描述</md-th>
</md-tr>
</md-thead>
<md-tbody>
	
<md-tr>
<md-td>.class</md-td>
<md-td>.intro</md-td>
<md-td>选择所有拥有 `class="intro"` 的组件。</md-td>
</md-tr>

<md-tr>
<md-td>#id</md-td>
<md-td>#firstname</md-td>
<md-td>选择拥有 `id="firstname"` 的组件。</md-td>
</md-tr>

<md-tr>
<md-td>element</md-td>
<md-td>view</md-td>
<md-td>选择所有 `view` 组件。</md-td>
</md-tr>

<md-tr>
<md-td>element, element</md-td>
<md-td>view, checkbox</md-td>
<md-td>选择所有文档的 `view` 组件和所有的 `checkbox` 组件。</md-td>
</md-tr>

<md-tr>
<md-td>::after</md-td>
<md-td>view::after</md-td>
<md-td>在 `view` 组件后边插入内容。</md-td>
</md-tr>

<md-tr>
<md-td>::before</md-td>
<md-td>view::before</md-td>
<md-td>在 `view` 组件前边插入内容。</md-td>
</md-tr>


</md-tbody>
</md-table>
:::

## 全局样式与局部样式

- 定义在 app.ttss 中的样式为全局样式，作用于每一个页面。

- 在 page 的 ttss 文件中定义的样式为局部样式，只作用在对应的页面，并会覆盖 app.ttss 中相同的选择器。
