---
title: "Checkbox"
source_url: https://open.feishu.cn/document/base-extension/base-automation-extensions/component/checkbox
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690342953000
---
最后更新于 2023-07-26

# Checkbox

复选框组件，`componentProps` 无需传入参数。<br><br>

`Checkbox`组件传递给`execute`函数入参的数据结构。
| 类型      | 说明                  |
| ------- | ------------------- |
| boolean | 用户选中时为true，否则为false |

# 示例代码

## 调用示例

```js
import { basekit, Component } from '@lark-opdev/block-basekit-server-api';
basekit.addAction({
    formItems: [
      {
        itemId: 'checkbox',
        label: '是否启用',
        component: Component.Checkbox,
      },
    ],
    execute: async function(args, context) {
      const { checkbox } = args;
    },
    // ...
});
// ..
```
