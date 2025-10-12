<!--
title: 逻辑层简介
id: 6989248828936732674
fullPath: /uAjLw4CM/uYjL24iN/block/block-frame/logic-layer/logic-layer
updatedAt: 1657871784000
source: https://open.feishu.cn/document/client-docs/block/block-frame/code-components-and-structure/logic-layer/logic-layer
-->
# 逻辑层简介

小组件（Block）开发框架的逻辑层使用 `JavaScript` 引擎，为开发者上传的 `JavaScript` 代码提供运行环境以及小组件的特有功能。<br>
- 开发者上传的所有代码最终将会打包成一份 `JavaScript` 文件，并在小组件启动的时候运行，直到小组件销毁。运行时，逻辑层将数据进行处理后发送给视图层，同时接受视图层的事件反馈。
- 在 `JavaScript` 的基础上，我们增加了一些功能，以方便小组件的开发：
	-   提供 Creator 方法来注册 Creator。
	-   提供 Block 方法来注册 Block。
	-   提供丰富的 API 来增强能力。

:::note
用于运行逻辑层代码的`JavaScript`容器仅能保证在[Javascript全局内置对象列表](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)内的能力，不能保证[标准浏览器API列表](https://developer.mozilla.org/en-US/docs/Web/API)中的能力，且不能保证 API 的具体实现细节与某个特定浏览器（如 Chrome）完全一致。
:::