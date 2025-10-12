---
title: "ResultType"
source_url: https://open.feishu.cn/document/base-extension/base-automation-extensions/data-type/resulttype
last_remote_update: 2024-09-06
last_remote_update_timestamp: 1725594704000
---
最后更新于 2024-09-06

# ResultType
自动化插件返回类型的数据类型。
| 字段         | 类型     | 是否必填 | 说明                                                                                                                                              |
| ---------- | ------ | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| type       | string | 是    | 说明该字段的类型，支持 `Object`, `String`, `Number`, `Boolean`, `Array`。                                                                                    |
| properties | object | 否    | 对象的属性，其中的 key 需要与 `execute` 中返回值的 key 一致。                                                                                                        |
| label      | string | 是    | 显示在自动化中的文案。                                                                                                                                      |
| displayBy  | string | 否    | 控制组件是否显示，语法为由`key:value`组成的字符串，支持`&&` `||` `!` 和`  () ` 运算符，当表达式为`true`时显示。其中`key`为`SingleSelect`、`MultipleSelect`组件的`itemId`，`value`值为组件选择的值。 |
其中不同 `type` 字段支持回写的字段类型如下：
| 类型        | 支持回写的字段类型               |
| --------- | ----------------------- |
| `String`  | 多行文本、多选、单选、超链接的文本。       |
| `Number`  | 多行文本、多选、单选、数字、超链接的文本、进度。 |
| `Boolean` | 复选框。                     |
| `Array`   | 附件、多选。                   |

# 示例代码

## 返回附件

由于上传附件依赖[上传素材](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_all)接口，所以需要
1. 在你的应用内申请「查看、评论、编辑和管理多维表格」，如何开通权限见[申请 API 权限](https://open.feishu.cn/document/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN)。
1. 调用[addAction](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/base-extensions/base-automation-extensions/api/addaction)时 permission.type 设置为2

```js
import { basekit, Component, uploadAttachments, ParamType, StructureType } from '@lark-opdev/block-basekit-server-api';
import fs from 'fs';
import path from 'path';
basekit.addAction({
  execute: async function (args, context) {
    const name = 'demo.png';
    const file = await fs.readFileSync(path.join(__dirname, name));
    const attachments = await uploadAttachments([
      {
        name,
        file,
      }
    ], {
      context,
      env: 'feishu',
    });
    return {
      attachments,
    };
  },
  resultType: {
    type: ParamType.Object,
    properties: {
      attachments: {
        type: ParamType.Array,
        structureType: StructureType.Attachment,
        label: '附件',
      }
    },
  },
  // ...
});
// ...
```
