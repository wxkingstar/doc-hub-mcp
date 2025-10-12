---
title: "addAction"
source_url: https://open.feishu.cn/document/base-extension/base-automation-extensions/api/addaction
---
最后更新于 2025-08-04

# addAction
添加自动化插件。

## 输入
```js
 addAction(action: Action)
 interface Action {
    description?: TResult;
    actionText?: string;
    permission?: {
        type: 0 | 1 | 2;
    };
    useTenantAccessToken?: boolean;
    authorization?: {
        type: 'OAuth2' | 'APIKey';
        formItem?: ComponentAuthorization;
    };
    /** 扩展的配置表单 */
    formItems: FormItems;
    /** 扩展调用apiHub接口的顺序和参数 */
    execute: (args: {
        [key: string]: any;
    }, context: Context) => Promise<object>;
    /** 扩展出参，用于给后续Action消费 */
    resultType: ResultType;
    /** 新增自动化流程时，需要同步新增的节点 */
    nextSteps?: Array<NextStep>;
}

```
名称                   | 类型                                                                           | 是否必填 | 说明                                                                                                                                                            |
| -------------------- | ---------------------------------------------------------------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| description          | string                                                                       | 否    | 自动化插件的描述文案，展示在插件名右侧的图标处，需要hover展示。                                                                                                                             |
| formItems            | [FormItem](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/base-extensions/base-automation-extensions/data-type/formitem) | 是    | 自动化表单的UI，用于接收用户传入的参数。                                                                                                                                          |
| execute              | function                                                                     | 是    | 定义自动化插件的运行逻辑。                                                                                                                                                  |
| resultType           | object                                                                       | 是    | 定义自动化插件返回结果的类型。                                                                                                                                                |
| useTenantAccessToken | boolean                                                                      | 否    | 设为`true`则会在execute函数的第二个参数`context`注入`tenantAccessToken`，然后插件就可以应用身份调用[开平的OpenAPI](https://open.feishu.cn/document/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/server-api-list)，如新建任务、翻译等 |
| permission           | {<br> &nbsp;type:0 \| 1 \| 2<br> }                                                                       | 否    | 为对象则会在启用插件时，将插件所属的应用添加到文档内，插件则有[文档权限](https://open.feishu.cn/document/ukTMukTMukTM/uczNzUjL3czM14yN3MTN#2431c595)访问文档的数据，如下载文档的附件、查询文档的记录等。                    |
| actionText           | string                                                                       | 否    | 默认值：“就执行该操作”。插件的行动文案，会显示在配置表单下方。                                                                                                                                |
| authorization        | {type: 'OAuth2' \| 'APIKey'}                                                 | 否    | 渲染对应的授权组件，授权后可在`context.authorization`拿到对应的`token`，多维表格会自动续期保证`token`有效。目前只接入了与microsoft的授权，此项暂无法用于其他第三方授权。                                                                                       |
| nextSteps            | Array< 'LarkMessage'<br> \| 'AddRecord'<br> \| 'SetRecord'<br>\| 'FindRecord'<br> \| 'HTTPClient'>                                                             | 否    | 优化操作体验的字段。<br>新增自动化操作步骤的时候，选择一个操作步骤即增加一个操作步骤，可以通过配置本字段，在新增本自动化插件的时候，同时新增多个操作步骤。<br> - LarkMessage: 发送飞书消息。<br> - AddRecord:新增记录。<br> - SetRecord:修改记录。 <br> - FindRecord:查找记录。 <br>- HTTPClient:发送http请求。 

## 示例代码
### 返回字符串的插件

```js
import { basekit, Component, ParamType } from '@lark-opdev/block-basekit-server-api';
basekit.addAction({
  formItems: [
    {
      itemId: 'text',
      label: '文本',
      required: true,
      component: Component.Input,
      componentProps: {
        placeholder: '请输入文本或选择引用列',
      },
    },
  ],
  execute: async function (args, context) {
    const { text = '' } = args;
    return {
      text: `Hello ${text}`,
    };
  },
  resultType: {
    type: ParamType.Object,
    properties: {
      text: {
        type: ParamType.String,
        label: '结果',
      },
    },
  },
});
export default basekit;
```

### 请求外部数据的插件
```js
import { basekit, Component, ParamType } from '@lark-opdev/block-basekit-server-api';
basekit.addAction({
  formItems: [
    {
      itemId: 'text',
      label: '文本',
      required: true,
      component: Component.Input,
      componentProps: {
        placeholder: '请输入文本或选择引用列',
      },
    },
  ],
  execute: async function (args, context) {
    const { text = '' } = args;
    const { fetch } = context;
    const query = new URLSearchParams({
        foo: 'bar',
    });
    const data = await fetch(`https://your.api.com?${query.toString()}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            text,
        }),
    }).then(res => res.json());
    return {
      text: data,
    };
  },
  resultType: {
    type: ParamType.Object,
    properties: {
      text: {
        type: ParamType.String,
        label: '结果',
      },
    },
  },
});
export default basekit;
```

### 使用OAuth2
```js
  import { basekit, Component, ParamType } from '@lark-opdev/block-basekit-server-api';
basekit.addAction({
  authorization: {
    type: "OAuth2",
  },
  execute: async function (args, context) {
    // 拿到用户授权后的 token 调用第三方服务
    const { token, type } = context.authorization;
  },
  // ...
});
export default basekit;
 ```
