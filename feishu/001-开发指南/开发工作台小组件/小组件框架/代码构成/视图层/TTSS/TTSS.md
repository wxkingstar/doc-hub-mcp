---
title: "TTSS"
source_url: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/view-layer/ttss/ttss
---
最后更新于 2022-07-15

# TTSS

TTSS 是一套样式语言，用于描述 TTML 的组件样式。

为了适应广大的前端开发者，从语法上来讲，TTSS 是 CSS 的严格子集，但是在部分特性中对其进行了扩充。
> 目前移动端 Native 渲染模式下，CSS 属性都不支持继承能力

## 已支持css列表

> 开发者书写的浏览器标准 css 属性，可能在 PC 环境下效果正常，但是在移动端Native 环境下不符合预期，因此为了确保各端效果一致，请提前参考以下已支持范围的列表

### @规则

-   [@import](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/rules/import)

-   [@font-face](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/rules/font-face)

-   [@keyframes](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/rules/keyframes)

### 选择器列表

-   [类型选择器](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/selector-list)
-   [类选择器](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/selector-list)
-   [ID 选择器](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/selector-list)

-   [通配符选择器](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/selector-list)

-   [分组选择器](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/selector-list)

-   [伪元素](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/selector-list)

### 属性

-   #### 定位

-   [position](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/position/position)
    -   [left](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/position/left)
    -   [top](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/position/top)
    -   [right](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/position/right)
    -   [bottom](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/position/bottom)

-   #### 文本

-   [color](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/text/color)
    -   [font-size](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/text/font-size)
    -   [font-weight](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/text/font-weight)
    -   [font-family](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/text/font-family)
    -   [font-style](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/text/font-style)
    -   [white-space](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/text/white-space)
    -   [letter-spacing](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/text/letter-spacing)
    -   [line-height](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/text/line-height)
    -   [text-align](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/text/text-align)
    -   [text-overflow](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/text/text-overflow)
    -   [text-decoration](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/text/text-decoration)
    -   [text-shadow](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/text/text-shadow)

-   #### 变形

-   [transform](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/transform/transform)
    -   [transform-origin](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/transform/transform-origin)

-   #### 动画

-   [animation](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/animation)
    -   [animation-name](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/animation-name)
    -   [animation-duration](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/animation-duration)
    -   [animation-timing-function](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/animation-timing-function)
    -   [animation-delay](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/animation-delay)
    -   [animation-iteration-count](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/animation-iteration-count)
    -   [animation-direction](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/animation-direction)
    -   [animation-fill-mode](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/animation-fill-mode)
    -   [animation-play-state](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/animation-play-state)
    -   [transition](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/transition)
    -   [transition-property](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/transition-property)
    -   [transition-duration](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/transition-duration)
    -   [transition-delay](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/transition-delay)
    -   [transition-timing-function](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/animation/transition-timing-function)

-   #### Flexbox

-   [flex](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/flexbox/flex)
    -   [flex-grow](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/flexbox/flex-grow)
    -   [flex-shrink](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/flexbox/flex-shrink)
    -   [flex-basis](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/flexbox/flex-basis)
    -   [flex-direction](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/flexbox/flex-direction)
    -   [flex-wrap](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/flexbox/flex-wrap)
    -   [align-items](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/flexbox/align-items)
    -   [align-self](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/flexbox/align-self)
    -   [align-content](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/flexbox/align-content)
    -   [justify-content](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/flexbox/justify-content)
    -   [order](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/flexbox/order)

-   #### 边框

-   [border](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border)
    -   [border-right](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-right)
    -   [border-left](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-left)
    -   [border-top](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-top)
    -   [border-bottom](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-bottom)
    -   [border-radius](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-radius)
    -   [border-top-left-radius](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-top-left-radius)
    -   [border-bottom-left-radius](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-bottom-left-radius)
    -   [border-top-right-radius](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-top-right-radius)
    -   [border-bottom-right-radius](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-bottom-right-radius)
    -   [border-width](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-width)
    -   [border-left-width](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-left-width)
    -   [border-right-width](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-right-width)
    -   [border-top-width](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-top-width)
    -   [border-bottom-width](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-bottom-width)
    -   [border-style](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-style)
    -   [border-left-style](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-left-style)
    -   [border-right-style](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-right-style)
    -   [border-top-style](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-top-style)
    -   [border-bottom-style](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-bottom-style)
    -   [border-color](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-color)
    -   [border-left-color](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-left-color)
    -   [border-right-color](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-right-color)
    -   [border-top-color](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-top-color)
    -   [border-bottom-color](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/border/border-bottom-color)

-   #### 背景

-   [background](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/background/background)
    -   [background-color](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/background/background-color)
    -   [background-image](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/background/background-image)
    -   [background-position](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/background/background-position)
    -   [background-origin](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/background/background-origin)
    -   [background-repeat](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/background/background-repeat)
    -   [background-size](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/background/background-size)
    -   [background-clip](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/background/background-clip)

-   #### 盒模型

-   [display](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/display)
    -   [box-sizing](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/box-sizing)
    -   [padding](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/padding)
    -   [padding-left](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/padding-left)
    -   [padding-right](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/padding-right)
    -   [padding-top](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/padding-top)
    -   [padding-bottom](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/padding-bottom)
    -   [margin](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/margin)
    -   [margin-left](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/margin-left)
    -   [margin-right](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/margin-right)
    -   [margin-top](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/margin-top)
    -   [margin-bottom](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/margin-bottom)
    -   [height](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/height)
    -   [width](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/width)
    -   [max-width](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/max-width)
    -   [min-width](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/min-width)
    -   [max-height](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/max-height)
    -   [min-height](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/min-height)
    -   [overflow](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/overflow)
    -   [overflow-x](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/overflow-x)
    -   [overflow-y](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/overflow-y)
    -   [outline](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/outline)
    -   [outline-color](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/outline-color)
    -   [outline-style](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/outline-style)
    -   [outline-width](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/box-model/outline-width)

-   #### 其它

-   [visibility](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/other/visibility)
    -   [opacity](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/other/opacity)
    -   [box-shadow](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/other/box-shadow)
    -   [content](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/attributes/other/content)

### 基本数据类型

-   `关键字`

-   [<angle>](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/basic-data-type/angle)

-   [<color>](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/basic-data-type/color)

-   [<number>](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/basic-data-type/number)

-   [<length>](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/basic-data-type/length)

-   [<percentage>](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/basic-data-type/percentage)

-   [<string>](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/basic-data-type/string)

-   [<time>](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/basic-data-type/time)

-   [<gradient>](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/block-frame/view-layer/ttss/basic-data-type/gradient)
