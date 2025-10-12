---
title: "Attachment"
source_url: https://open.feishu.cn/document/base-extension/base-automation-extensions/component/attachment
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690342953000
---
最后更新于 2023-07-26

# Attachment

附件选择组件，可引用多维表格中的附件字段，`componentProps` 支持以下参数。
| 参数          | 类型     | 说明      |
| ----------- | ------ | ------- |
| placeholder | string | 输入框提示文字 |
<br><br><br>
`Attachment`组件传递给`execute`函数入参的数据结构为附件信息对象数组，结构如下。
```js
{
	attachmentToken:string;
	extra:string;
	id:string;
	mimeType:string;
	name:string;
	size:string;
	timeStamp:string;
}[]

```
| 参数                            | 类型            | 说明                                      |
| ----------------------------- | ------------- | --------------------------------------- |
| attachmentToken | string        | 附件的token，可用于获取附件下载地址                    |
| extra           | string        | 附件的额外信息                                 |
| id              | string        | 附件id，同attachmentToken                   |
| mimeType        | string        | 附件类型，由附件的类型决定，常见图片类型如 image/png                        |
| name            | string        | 附件名称                                    |
| size            | number        | 附件体积大小                                  |
| timeStamp       | number        | 附件的时间戳                                  |

# 示例代码

## 调用示例

```js
import { basekit, Component } from '@lark-opdev/block-basekit-server-api';
basekit.addAction({
    formItems: [
      {
        itemId: 'attachments',
        label: '附件',
        component: Component.Attachment,
        componentProps: {
            placeholder: '请选择附件列',
        }
      },
    ],
    execute: async function(args, context) {
      const { attachments = [] } = args;
    },
    // ...
});
// ..
```
