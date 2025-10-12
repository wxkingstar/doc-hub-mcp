---
title: "View.Action.showMessage"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/view/action/View.Action.showMessage
---
最后更新于 2025-07-31

# View.Action.showMessage
在文档顶部展示提示消息，消息消失后 resolve promise，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
key | string | 否 | 指定消息的 key，可以用于手动 hideMessage
type | string | 否 | 展示的消息类型，可选值有：  
- loading  
- info  
- success  
- warning  
- error
duration | number | 否 | 持续多长时间（单位为 ms）后自动消失，注意设置为 0 时，表示不消失
closable | boolean | 否 | 是否展示关闭按钮，默认为 false，如果 duration 设置为 0 时，该值会强制设置为 true
message | string | 是 | 展示的消息内容
actionText | string | 否 | 展示的消息按钮

onActionClick
消息按钮点击回调
| **名称**        | **数据类型** | **是否必填** | **描述**   |
| ------------- | -------- | -------- | -------- |
| onActionClick | Function | 否        | 消息按钮点击回调 |

## 输出

无

## 示例代码

### 调用示例A

```js
const DocMiniApp = new BlockitClient().initAPI();
await DocMiniApp.View.Action.showMessage({
    type: 'success',
    message: I18n.t('LarkCCM_DocVerse_Directory_Reset_Success'),
    actionText: '按钮'
}, () => console.log('按钮点击回调'));
```

### 返回示例

无
