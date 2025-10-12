<!--
title: VChart 图表组件
id: 7271088962857123868
fullPath: /uAjLw4CM/uYjL24iN/block/component/extend/vchart-component
updatedAt: 1697436623000
source: https://open.feishu.cn/document/block/extend/vchart-component
-->
# VChart 图表组件

##  什么是 VChart

  
VChart 是 [VisActor](https://www.visactor.io/) 可视化体系中的图表组件库，它基于可视化语法库 [VGrammar](https://www.visactor.io/vgrammar) 进行图表的逻辑封装，基于可视化渲染引擎 [VRender](https://www.visactor.io/vrender) 进行组件封装及图形渲染。VChart 在提供基础的图表渲染能力之外，专注于图表叙事能力的打磨与沉淀，其核心特性如下：
  
- 一码多端：VChart 可以自动适配桌面、H5、多个小程序环境，这意味着开发者只需要编写一次代码，就可以在多个平台上运行，大大提高了开发效率。
- 面向叙事：VChart 提供了一系列增强功能，如标注、动画、流程控制和叙事模板，使得用户可以更方便地进行叙事可视化创作，提高了可视化的表达力。
- 场景沉淀：VChart 面向最终用户沉淀可视化能力，解放开发者生产力，使得开发者可以更专注于业务逻辑的开发，而不是图表的绘制。
  

## VChart 和内置 ChartSpace 的关系

  
VChart 可以理解为目前飞书小组件内置 ChartSpace 的完整版，覆盖了 ChartSpace 的所有功能，同时在其基础上新增了大量的图表类型及功能组件，无论是性能、功能还是易用性，VChart 都做了大幅度的优化和提升。另外 VChart 采用了开源的方式，可以让开发者更好地了解 VChart 的内部实现，从而更好地使用或者进行二次开发，我们也提供了更加详细的文档和示例，方便开发者进行参考。
  
虽然 VChart 在功能上覆盖了目前 ChartSpace 的所有功能，但是在配置项以及 API 上还是存在些许差异，因为我们在开发迭代的过程中进行了一些优化，主要表现在：
1. 部分配置项的命名及结果变化
1. VChart 构造参数的变化
1. 事件派发的变化
具体的差异详见[VChart 升级文档](./how-to-upgrade-to-vchart)，在该文档中我们将向您详细介绍如何进行升级。
  
**另外后续我们会逐步停止对** **ChartSpace** **的维护，但是会继续提供 ChartSpace 的技术支持，如果您有任何 ChartSpace 的问题，仍然可以通过飞书 oncall 的方式提问，我们会尽快回复。针对新的图表需求我们建议您使用** **VChart** **进行开发，具体的使用方式详见我们的教程文档，同时我们也在我们的仓库中提供了现成的[示例](https://github.com/VisActor/VChart/tree/main/packages/block-vchart/)。**
  

##  如何在飞书小组件上使用 VChart

  
- 使用教程：https://www.visactor.io/vchart/guide/tutorial_docs/Cross-terminal_and_Developer_Ecology/mini-app/block
- 示例： https://github.com/VisActor/VChart/tree/main/packages/block-vchart
  

## 已有 ChartSpace 图表如何升级至 VChart

  
详见[VChart 升级文档](./how-to-upgrade-to-vchart)，在该文档中我们将向您详细介绍如何进行升级。
  

## 如何咨询

  
- 飞书 oncall 技术支持
- [VChart GitHub issue](https://github.com/VisActor/VChart/issues/new/choose): 如果在使用过程中发现问题，欢迎在 GitHub issues 中向我们反馈，非常感谢！
  

## 相关链接

  
- [VChart 官网](https://www.visactor.io/vchart)
- [VChart GitHub](https://github.com/VisActor/VChart)