---
title: "Input"
source_url: https://open.feishu.cn/document/base-extension/base-automation-extensions/component/input
---
最后更新于 2023-07-26

# Input

文本输入组件，用户可手动输入，也可引用多维表格中的多行文本等字段，`componentProps` 支持以下参数。
| 参数          | 类型     | 说明                             |
| ----------- | ------ | ------------------------------ |
| placeholder | string | 输入框提示文字                        |
| mode        | string | 输入组件模式，默认为单行，`textarea` 为成多行模式 |
<br><br><br>
`Input`组件传递给`execute`函数入参的数据结构。
| 类型     | 说明      |
| ------ | ------- |
| string | 用户输入的文本 |

# 示例代码

## 调用示例

```js
import { basekit, Component } from '@lark-opdev/block-basekit-server-api';
basekit.addAction({
    formItems: [
      {
        itemId: 'text',
        label: '文本',
        component: Component.Input,
        componentProps: {
          mode: 'textarea',
          placeholder: '请输入源文本或选择引用列',
        }
      },
    ],
    execute: async function(args, context) {
      const { text } = args;
    },
    // ...
});
// ...
```
