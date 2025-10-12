<!--
title: 配置组件扩展
id: 6907569743420145666
fullPath: /uYjL24iN/uUDMx4SNwEjL1ATM
updatedAt: 1693277043000
source: https://open.feishu.cn/document/client-docs/gadget/component-component/custom-components/component-extension
-->
# 配置组件扩展

自定义组件的扩展本质是提供了修改自定义组件定义段的能力，本文将通过示例配置为你介绍组件扩展的方式。


## 版本限制

组件扩展功能要求飞书客户端版本为 V1.19.0 及以上。

## 示例配置

在本示例配置中，修改了自定义组件中的 `data` 定义段里的内容，以实现组件扩展。

- 在 `behavior.js` 中的配置。

```js
module.exports = Behavior({
  definitionFilter(defFields) {
    defFields.data.from = 'behavior'
  },
})
```

- 在 `component.js` 中的配置。
```
Component({
  data: {
    from: 'component'
  },
  behaviors: [require('behavior.js')],
  ready() {
    // 此处会发现输出 behavior 而不是 component
    console.log(this.data.from)
  }
})
```