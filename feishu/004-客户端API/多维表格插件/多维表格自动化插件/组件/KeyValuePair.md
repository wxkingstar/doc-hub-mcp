---
title: "KeyValuePair"
source_url: https://open.feishu.cn/document/base-extension/base-automation-extensions/component/keyvaluepair
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690342953000
---
最后更新于 2023-07-26

# KeyValuePair
键值对组件，componentProps 支持以下参数。

参数         | 类型     | 是否必填 | 说明                   |
| ---------- | ------ | ---- | -------------------- |
| itemsLimit | number | 否    | 最大键值对数量。              |
| addText    | string | 否    | 添加按钮的文案。              |
| keyText    | string | 否    | key输入框的placeholder。   |
| valueText  | string | 否    | value输入框的placeholder。
<br><br>
`KeyValuePair`组件传递给`execute`函数入参的数据结构。

| 类型                               | 说明                       |
| -------------------------------- | ------------------------ |
array<{key:string,value:string}> | key和value分别为用户所填写键值对的键和值。

## 示例代码
```js
import { basekit, Component } from '@lark-opdev/block-basekit-server-api';
basekit.addAction({
    formItems: [
      {
        itemId: 'keyValuePairs',
        label: '键值对',
        component: Component.KeyValuePair,
      },
    ],
    execute: async function(args, context) {
      const { keyValuePairs } = args;
    },
    // ...
});
// ..
```
