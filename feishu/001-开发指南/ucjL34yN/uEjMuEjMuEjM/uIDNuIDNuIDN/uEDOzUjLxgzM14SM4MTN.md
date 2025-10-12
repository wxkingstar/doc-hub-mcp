<!--
title: 逻辑层概述
id: 6907569745299505154
fullPath: /uYjL24iN/uEDOzUjLxgzM14SM4MTN
updatedAt: 1731565888000
source: https://open.feishu.cn/document/client-docs/gadget/framework/logic-layer/overview
-->
# 概述

当你在开发小程序时上传的 JavaScript 代码会合并成一个文件。逻辑层会将这部分 JavaScript 代码运行在定制的 JavaScript 引擎中，由引擎提供小程序的运行环境，同时引擎通过调用宿主（指飞书）的能力，为小程序提供与宿主交互的功能。

## 功能说明

逻辑层提供的功能如下：

- 提供 JavaScript 的原生能力。
- 提供 App 对象，用于注册小程序。
- 提供 Page 对象，用于注册页面。
- 增加 getApp 和 getCurrentPages 方法，分别用来获取 App 实例和当前页面栈。
- 提供丰富的 API 以增强小程序的能力。
- 提供模块化能力，每个页面有独立的作用域。

## 注意事项

小程序框架的逻辑层并非运行在浏览器中，因此 JavaScript 在 Web 中一些能力无法使用。例如，window、document 等。