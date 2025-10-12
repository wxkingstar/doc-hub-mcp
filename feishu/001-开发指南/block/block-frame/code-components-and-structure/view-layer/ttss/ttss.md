<!--
title: TTSS
id: 6989248828936404994
fullPath: /uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/ttss
updatedAt: 1657871765000
source: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/ttss
-->
# TTSS

TTSS 是一套样式语言，用于描述 TTML 的组件样式。

为了适应广大的前端开发者，从语法上来讲，TTSS 是 CSS 的严格子集，但是在部分特性中对其进行了扩充。
> 目前移动端 Native 渲染模式下，CSS 属性都不支持继承能力

## 已支持css列表

> 开发者书写的浏览器标准 css 属性，可能在 PC 环境下效果正常，但是在移动端Native 环境下不符合预期，因此为了确保各端效果一致，请提前参考以下已支持范围的列表

### @规则

-   [@import](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/rules/import)


-   [@font-face](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/rules/font-face)


-   [@keyframes](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/rules/keyframes)

### 选择器列表

-   [类型选择器](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/selector-list)
-   [类选择器](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/selector-list)
-   [ID 选择器](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/selector-list)

-   [通配符选择器](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/selector-list)

-   [分组选择器](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/selector-list)

-   [伪元素](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/selector-list)

### 属性

-   #### 定位

    -   [position](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/position/position)
    -   [left](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/position/left)
    -   [top](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/position/top)
    -   [right](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/position/right)
    -   [bottom](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/position/bottom)

-   #### 文本

    -   [color](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/text/color)
    -   [font-size](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/text/font-size)
    -   [font-weight](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/text/font-weight)
    -   [font-family](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/text/font-family)
    -   [font-style](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/text/font-style)
    -   [white-space](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/text/white-space)
    -   [letter-spacing](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/text/letter-spacing)
    -   [line-height](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/text/line-height)
    -   [text-align](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/text/text-align)
    -   [text-overflow](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/text/text-overflow)
    -   [text-decoration](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/text/text-decoration)
    -   [text-shadow](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/text/text-shadow)

-   #### 变形

    -   [transform](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/transform/transform)
    -   [transform-origin](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/transform/transform-origin)

-   #### 动画

    -   [animation](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/animation)
    -   [animation-name](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/animation-name)
    -   [animation-duration](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/animation-duration)
    -   [animation-timing-function](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/animation-timing-function)
    -   [animation-delay](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/animation-delay)
    -   [animation-iteration-count](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/animation-iteration-count)
    -   [animation-direction](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/animation-direction)
    -   [animation-fill-mode](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/animation-fill-mode)
    -   [animation-play-state](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/animation-play-state)
    -   [transition](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/transition)
    -   [transition-property](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/transition-property)
    -   [transition-duration](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/transition-duration)
    -   [transition-delay](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/transition-delay)
    -   [transition-timing-function](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/transition-timing-function)

-   #### Flexbox

    -   [flex](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/flexbox/flex)
    -   [flex-grow](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/flexbox/flex-grow)
    -   [flex-shrink](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/flexbox/flex-shrink)
    -   [flex-basis](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/flexbox/flex-basis)
    -   [flex-direction](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/flexbox/flex-direction)
    -   [flex-wrap](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/flexbox/flex-wrap)
    -   [align-items](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/flexbox/align-items)
    -   [align-self](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/flexbox/align-self)
    -   [align-content](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/flexbox/align-content)
    -   [justify-content](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/flexbox/justify-content)
    -   [order](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/flexbox/order)

-   #### 边框

    -   [border](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border)
    -   [border-right](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-right)
    -   [border-left](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-left)
    -   [border-top](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-top)
    -   [border-bottom](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-bottom)
    -   [border-radius](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-radius)
    -   [border-top-left-radius](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-top-left-radius)
    -   [border-bottom-left-radius](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-bottom-left-radius)
    -   [border-top-right-radius](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-top-right-radius)
    -   [border-bottom-right-radius](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-bottom-right-radius)
    -   [border-width](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-width)
    -   [border-left-width](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-left-width)
    -   [border-right-width](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-right-width)
    -   [border-top-width](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-top-width)
    -   [border-bottom-width](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-bottom-width)
    -   [border-style](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-style)
    -   [border-left-style](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-left-style)
    -   [border-right-style](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-right-style)
    -   [border-top-style](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-top-style)
    -   [border-bottom-style](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-bottom-style)
    -   [border-color](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-color)
    -   [border-left-color](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-left-color)
    -   [border-right-color](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-right-color)
    -   [border-top-color](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-top-color)
    -   [border-bottom-color](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-bottom-color)

-   #### 背景

    -   [background](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/background/background)
    -   [background-color](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/background/background-color)
    -   [background-image](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/background/background-image)
    -   [background-position](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/background/background-position)
    -   [background-origin](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/background/background-origin)
    -   [background-repeat](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/background/background-repeat)
    -   [background-size](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/background/background-size)
    -   [background-clip](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/background/background-clip)

-   #### 盒模型

    -   [display](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/display)
    -   [box-sizing](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/box-sizing)
    -   [padding](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/padding)
    -   [padding-left](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/padding-left)
    -   [padding-right](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/padding-right)
    -   [padding-top](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/padding-top)
    -   [padding-bottom](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/padding-bottom)
    -   [margin](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/margin)
    -   [margin-left](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/margin-left)
    -   [margin-right](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/margin-right)
    -   [margin-top](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/margin-top)
    -   [margin-bottom](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/margin-bottom)
    -   [height](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/height)
    -   [width](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/width)
    -   [max-width](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/max-width)
    -   [min-width](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/min-width)
    -   [max-height](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/max-height)
    -   [min-height](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/min-height)
    -   [overflow](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/overflow)
    -   [overflow-x](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/overflow-x)
    -   [overflow-y](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/overflow-y)
    -   [outline](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/outline)
    -   [outline-color](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/outline-color)
    -   [outline-style](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/outline-style)
    -   [outline-width](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/outline-width)

-   #### 其它

    -   [visibility](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/other/visibility)
    -   [opacity](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/other/opacity)
    -   [box-shadow](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/other/box-shadow)
    -   [content](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/other/content)

### 基本数据类型

-   `关键字`

-   [<angle>](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/basic-data-type/angle)

-   [<color>](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/basic-data-type/color)

-   [<number>](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/basic-data-type/number)

-   [<length>](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/basic-data-type/length)

-   [<percentage>](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/basic-data-type/percentage)

-   [<string>](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/basic-data-type/string)

-   [<time>](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/basic-data-type/time)

-   [<gradient>](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/basic-data-type/gradient)
