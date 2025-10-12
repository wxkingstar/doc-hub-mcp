---
title: "testAction"
source_url: https://open.feishu.cn/document/base-extension/base-automation-extensions/api/testaction
last_remote_update: 2023-07-26
last_remote_update_timestamp: 1690342965000
---
最后更新于 2023-07-26

# testAction
用于在本地模拟调用 addAction 的execute函数的方法。在test/index中，模板已经写好此函数示范用例。使用时在终端使用`npm run test`即可使用test/index中的模拟输入。

## 输入
```js
testAction(args, context)
```

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
args | {  
    [key: string]: any;  
} | 是 | 模拟运行用户的入参
context | Context | 否 | 模拟运行时上下文入参

## 输出
一个对象。本地运行`execute`函数的出参。
## 示例代码
### 调用示例
```js
import { testAction, createActionContext } from '@lark-opdev/block-basekit-server-api';

async function test() {
    const actionContext = await createActionContext({
      tenantAccessToken: '',
    });

testAction({
        text: 'hello world',
        transformType: 'toUpperCase',
    },
    actionContext);
}

test();

basekit.addAction({
  // 定义运行逻辑
  execute: async function (args, context) {
    // npm run test的时候，args的值:{ text: 'hello world', transformType: 'toUpperCase', }
    const { text = '', transformType } = args;
    // 根据转换类型将源文本做大小写转换
    const outputText = transformType === 'toUpperCase'
      ? text.toUpperCase()
      : text.toLowerCase();
    // 返回转换后的数据
    return {
      text: outputText,
    };
  },
  //....

```
### 返回示例
将在终端看到如下模拟输入的运行结果：
```js
{
    text: 'HELLO WORLD'
}
