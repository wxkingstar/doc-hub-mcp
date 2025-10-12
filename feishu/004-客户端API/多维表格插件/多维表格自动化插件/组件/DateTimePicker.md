---
title: "DateTimePicker"
source_url: https://open.feishu.cn/document/base-extension/base-automation-extensions/component/datetimepicker
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690342953000
---
最后更新于 2023-07-26

# DateTimePicker

选择时间的组件，可引用多维表格中的时间字段，无需传入参数，`componentProps` 无需传入参数。<br>

`DateTimePicker`组件传递给`execute`函数入参的数据结构。
| 类型     | 说明       |
| ------ | -------- |
| number | 用户选择的时间戳 |

# 示例代码

## 调用示例

```js
import { basekit, Component } from '@lark-opdev/block-basekit-server-api';
basekit.addAction({
    formItems: [
      {
        itemId: 'date',
        label: '日期',
        component: Component.DateTimePicker,
      },
    ],
    execute: async function(args, context) {
      const { date } = args;
    },
    // ...
});
// ..
```
