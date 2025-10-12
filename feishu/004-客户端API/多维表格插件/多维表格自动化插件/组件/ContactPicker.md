---
title: "ContactPicker"
source_url: https://open.feishu.cn/document/base-extension/base-automation-extensions/component/contactpicker
---
最后更新于 2023-07-26

# ContactPicker

用户选择组件，用户可指定人员，也可引用多维表格中的人员字段，`componentProps` 支持以下参数。
| 参数                | 类型        | 说明                                        |
| ----------------- | --------- | ----------------------------------------- |
| placeholder       | string    | 输入框提示文字                                   |
| supportType       | string[] | 内部人员选择类型，`user`为可选人，`group`为可选群，默认人员和群都可选 |
| supportCrossTypes | string[] | 外部人员选择类型，`user`为可选人，`group`为可选群，默认人员和群都可选 |
| mode              | string    | 选择模式，`single`为单选，`multiple`为多选，默认为多选      |
<br><br><br>
`ContactPicker`传递给`execute`函数入参的数据结构为人员数组，单选模式下元素只有1个，多选模式为多个，结构如下：
```js
{
	id: string,
	type: string,
}[]
```
| 参数        | 类型      | 说明                       |
| --------- | ------- | ------------------------ |
| id   | string  | 人员id                     |
| type | string  | 人员类型，`user`为人员，`group`为群 |

# 示例代码

## 调用示例

```js
import { basekit, Component } from '@lark-opdev/block-basekit-server-api';
basekit.addAction({
    formItems: [
      {
        itemId: 'users',
        label: '用户',
        component: Component.ContactPicker,
        componentProps: {
          placeholder: '请选择用户或群聊',
        }
      },
    ],
    execute: async function(args, context) {
      const { users = [] } = args;
    },
    // ...
});
// ..
```
