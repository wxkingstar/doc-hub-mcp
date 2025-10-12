---
title: "VChart 图表组件"
source_url: https://open.feishu.cn/document/develop-gadgets-(not-recommended)/gadget-components/extension/vcharts-component
---
最后更新于 2023-08-31

# VChart 图表组件

开放平台新增了 VChart 图表组件，通过本文你可以了解什么是 VChart 图表组件、VChart 与已有的 ChartSpace 图表组件的关系，以及如何使用 VChart。

## 什么是 VChart

VChart 是 [VisActor](https://www.visactor.io/) 可视化体系中的图表组件库，它基于可视化语法库 VGrammar 进行图表的逻辑封装，基于可视化渲染引擎 VRender 进行组件封装及图形渲染。VChart 在提供基础的图表渲染能力之外，专注于图表叙事能力的打磨与沉淀，其核心特性如下：

- 一码多端：VChart 可以自动适配桌面、H5、多个小程序环境，这意味着应用的开发者只需要编写一次代码，就可以在多个平台上运行，大大提高了开发效率。
- 面向叙事：VChart 提供了一系列增强功能，如标注、动画、流程控制和叙事模板，使得应用的用户可以更方便地进行叙事可视化创作，提高了可视化的表达力。
- 场景沉淀：VChart 面向最终用户沉淀可视化能力，解放应用开发者的生产力，使得开发者可以更专注于业务逻辑的开发，而不是图表的绘制。

## VChart 和 ChartSpace 的关系

VChart 可以理解为 ChartSpace 的重构版本，开放平台在保证 ChartSpace 的基础功能的同时，对其进行了大量的优化和改进，使得 VChart 在性能、功能和易用性上都有了大幅度的提升。另外，相比于 ChartSpace 的闭源模式，VChart 采用了开源的方式，可以让你更好地了解 VChart 的内部实现，从而更好地使用或者进行二次开发，开放平台也提供了更加详细的文档和示例，方便你进行参考。
- 后续开放平台会逐步停止对 ChartSpace 的维护，但是会继续提供 ChartSpace 的技术支持，如果你有任何 ChartSpace 的问题，可以通过飞书 oncall 的方式提问，开放平台技术支持将会尽快回复。
- 针对新的图表需求建议你使用 VChart 进行开发，开放平台针对飞书小程序封装了对应的图表组件库：`@visactor/lark-vchart`，该组件库是开源的，你可以通过 `npm` 的方式安装使用。

## 在飞书小程序上使用 VChart

`@visactor/lark-vchart` 是 VChart 为飞书小程序封装的图表组件库，用于支持飞书小程序上的图表渲染。你可以在飞书小程序内，使用 `npm` 方式引入 `@visactor/lark-vchart`。具体的使用方式可参见 [npm 支持](https://open.feishu.cn/document/uYjL24iN/uEzMzUjLxMzM14SMzMTN/npm-support)。
该组件库只是做了环境的封装，配置项以及 API 同 VChart 完全一致，详情参见 [VChart](https://www.visactor.io/vchart)。

VChart 的使用教程与示例，可参见：

- [VChart 使用教程](https://www.visactor.io/vchart/guide/tutorial_docs/Cross-terminal_and_Developer_Ecology/mini-app/lark)
- [VChart 使用示例](https://github.com/VisActor/lark-vchart-example)

## 相关链接

- [VChart 官网](https://www.visactor.io/vchart)
- [VChart GitHub](https://github.com/VisActor/VChart)
- 如果在使用组件的过程中发现问题，可通过 [GitHub issue](https://github.com/VisActor/VChart/issues/new/choose) 向开放平台提交反馈。
