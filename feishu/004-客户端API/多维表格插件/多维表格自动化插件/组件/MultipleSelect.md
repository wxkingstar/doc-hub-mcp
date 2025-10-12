---
title: "MultipleSelect"
source_url: https://open.feishu.cn/document/base-extension/base-automation-extensions/component/multipleselect
last_remote_update: 2024-09-06
last_remote_update_timestamp: 1725594728000
---
最后更新于 2024-09-06

# MultipleSelect
## componentProps

下拉多选组件，用户手动选择下拉项里的值，`componentProps` 支持以下参数。
| 参数          | 类型                  | 是否必填 | 说明                              |
| ----------- | ------------------- | ---- | ------------------------------- |
| placeholder | string              | 否    | 输入框提示文字                         |
| options     | { label, value }[] | 是    | 选项数据，其中`label`为展示文案，`value`为实际值 |
<br><br><br>
`MultipleSelect`组件传递给`execute`函数入参的数据结构。
| 类型                | 说明                    |
| ----------------- | --------------------- |
| string|number[] | 选中的 options 的 value 值 |

## autocomplete
`formItems`新增了可选项`autocomplete`方法用于异步获取数据，当用户点击`SingleSelect`或`MultipleSelect`组件时，多维表格会发起一个请求调用你定义的`autocomplete`函数，其中`args`为当前表单填写的数据，`context`与`execute`函数的`context`一致，`payload`为`Select`组件的分页或搜索数据。

```js
import { basekit, Component } from '@lark-opdev/block-basekit-server-api';

basekit.addAction({
    formItems: [
        {
            itemId: 'fruits',
            label: '水果',
            component: Component.SingleSelect,
            componentProps: {
                options: []
            },
            autocomplete: async (args, context, payload) => {
                const data = await context.fetch('https://api.example.com', {
                    method: 'POST',
                    body: JSON.stringify({
                        foo: 'bar',
                    }),
                });
                return {
                    // 要求返回必须为Array<{ label, value }>
                    options: [
                        {
                            label: '苹果',
                            value: 'apple',
                        },
                        {
                            label: '香蕉',
                            value: 'banana',
                        }
                    ]
                };
            }
        }
    ]
})
```

本地自测时需要调用 testActionAutocomplete 方法，验证对应autocomplete函数的运行是否符合预期。
```js
// test/index.ts 文件
import { createActionContext, testActionAutocomplete } from '@lark-opdev/block-basekit-server-api';

async function testFruits() {
    const actionContext = await createActionContext({
        tenantAccessToken: '',
    });
    testActionAutocomplete({}, actionContext, {
        itemId: 'fruits', // 需要与声明autocomplete函数的 itemId 一致
        nextPageRequestData: {},
        keyword: '',
        lang: 'zh-CN',
    });
}

testFruits();
```

>  由于预览时插件是未被部署到服务器上，此时异步加载数据会由于找不到函数而失败，所以需要先「保存并启用」一次自动化流程，以触发预览插件的部署。如果发现选项一直在loading中，请关闭自动化流程编辑界面，等待5分钟左右后重新打开即可。

# 示例代码

## 调用示例

```js
import { basekit, Component } from '@lark-opdev/block-basekit-server-api';
basekit.addAction({
    formItems: [
      {
        itemId: 'provinces',
        label: '单选',
        component: Component.MultipleSelect,
        componentProps: {
          options: [
              {
                label: '北京',
                value: 'bj',
              },
              {
                label: '上海',
                value: 'sh'
              }
            ]
        }
      },
    ],
    execute: async function(args, context) {
      const { provinces = [] } = args;
    },
    // ...
});
// ..
```
