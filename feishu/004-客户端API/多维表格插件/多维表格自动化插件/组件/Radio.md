---
title: "Radio"
source_url: https://open.feishu.cn/document/base-extension/base-automation-extensions/component/radio
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690342953000
---
最后更新于 2023-07-26

# Radio
单选框组件，`componentProps` 支持以下参数。
| 参数           | 类型                  | 是否必填 | 说明                              |
| ------------ | ------------------- | ---- | ------------------------------- |
| placeholder  | string              | 否    | 提示文字。                            |
| defaultValue | string              | 否    | 默认值。                             |
| options      | { label, value }[] | 是    | 选项数据，其中`label`为展示文案，`value`为实际值。 |
<br><br>
`Radio`组件传递给`execute`函数入参的数据结构。
| 类型     | 说明                   |
| ------ | -------------------- |
 | string | 选中的 option 的 value 值。 |

# 示例代码

## 调用示例

```js
import { basekit, Component } from '@lark-opdev/block-basekit-server-api';
basekit.addAction({
    formItems: [
      {
        itemId: 'radio',
        label: 'Radio',
        component: Component.Radio,
        componentProps: {
            options: [
                {
                    label: 'A',
                    value: 'A',
                },
                {
                    label: 'B',
                    value: 'B',
                }
            ]
        }
      },
    ],
    execute: async function(args, context) {
      const { radio } = args;
    },
    // ...
});
// ..
```
