---
title: "FormItem"
source_url: https://open.feishu.cn/document/base-extension/base-automation-extensions/data-type/formitem
last_remote_update: 2024-09-06
last_remote_update_timestamp: 1725594728000
---
最后更新于 2024-09-06

# FormItem
定义自动化表单的数据结构。
参数             | 类型                                                                        | 是否必填 | 说明                                                                                                                                              |
| -------------- | ------------------------------------------------------------------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| itemId         | string                                                                    | 是    | 表单 id，运行时会作为参数传给 `execute` 函数，其中`stepId`、`tableId`、`blockId`、`fieldId`和`fieldIds`为保留词，请勿用做表单id。                                                 |
| label          | string                                                                    | 是    | 表单文案。                                                                                                                                            |
| component      | Component | 是    | 表单组件，如[Input](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/base-extensions/base-automation-extensions/component/input) 、[SingleSelect](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/base-extensions/base-automation-extensions/component/singleselect)。                                                     |
| componentProps | object                                                                    | 否    | 表单组件的属性。                                                                                                                                         |
| required       | boolean                                                                   | 否    | 该表单项是否必填，默认为 `false`。                                                                                                                            |
| tooltip        | string                                                                    | 否    | 提示信息，展示在label右侧的图标处，需要hover展示。                                                                                                                   |
| help           | string                                                                    | 否    | 帮助信息，展示在组件下方。                                                                                                                                    |
| displayBy      | string                                                                    | 否    | 控制组件是否显示，语法为由`key:value`组成的字符串，支持`&&` `||` `!` 和`  () ` 运算符，当displayBy表达式为`true`时显示。其中`key`为`SingleSelect`、`MultipleSelect`组件的`itemId`，`value`值为用户使用该组件时选择的值。MultipleSelect支持多个值，不区分顺序，值与值之间使用,间隔开即可。

## 示例代码

### 展示链接

`@lark-opdev/block-basekit-server-api@0.0.7`版本的t函数支持param参数，可以用来在文案里插入链接。

名称    | 类型                                             | 是否必填 | 说明                                                                    |
| ----- | ---------------------------------------------- | ---- | --------------------------------------------------------------------- |
| key   | string                                         | 是    | 国际化占位文案                                                               |
| param | {[key: string]: TLink ｜ TIcon ｜ THighlight} | 否    | 在Action的`description`，FormItem的`help`、`tooltip`属性可以使用具名格式插入图片、链接和高亮文案

示例：

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/848c202ae2dd9256430732db0947cb96_RJr7cv3pDA.png?lazyload=true&width=1054&height=380)

```js
import { basekit, t } from '@lark-opdev/block-basekit-server-api';

basekit.setI18n({
  messages: {
    'zh-CN': {
      description: "查看{doc}",
      usage: '说明文档',
      help: '这是图标{icon}',
      tooltip: '这是{highlight}',
    },
  }
});

basekit.addAction({
  description: t('description', {
    // 将文案中 doc 变量替换成可跳转链接
    doc: {
      type: 'link',
      value: t('usage'),
      link: 'https://your.doc.com',
    },
  }),
  formItems: [
    {
      help: t('help', {
        // 将文案中 icon 变量替换成可跳转的图标
        icon: {
          type: 'icon',
          src: 'https://your.img.com',
          link: 'https://your.link.com'
        }
      }),
      tooltip: t('tooltip', {
        // 将文案中的 highlight 变量替换成高亮格式文案
        highlight: {
          type: 'highlight',
          value: '高亮文案',
          color: 'red',
        }
      }),
      // ...
    },
  ],
  // ...
});

```

### displayBy控制组件显示/隐藏
```js
import { basekit, Component } from '@lark-opdev/block-basekit-server-api';

basekit.addAction({
  formItems: [
    {
      itemId: 'transportation',
      label: '交通工具',
      component: Component.SingleSelect,
      componentProps: {
        options: [
          {
            label: '飞机',
            value: 'plane',
          },
          {
            label: '火车',
            value: 'train',
          },
        ],
      },
    },
    {
      itemId: 'flightNumber',
      label: '航班号',
      component: Component.Input,
      // 当交通工具为飞机时才展示该组件
      displayBy: 'transportation:plane',
    },
  ],
  // ...
});
// ...
```
