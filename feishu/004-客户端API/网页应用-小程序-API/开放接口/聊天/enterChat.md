---
title: "enterChat"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/open-ability/chat/enterchat
---
最后更新于 2025-05-13

# enterChat(Object object)

打开指定会话
**Notice**：小程序调用该接口前，需要确保已经调用 [requestAccess](https://open.feishu.cn/document/uYjL24iN/uUzMuUzMuUzM/requestaccess) ( 如需兼容 飞书V6.9.0 以下版本，可使用 [login](https://open.feishu.cn/document/uYjL24iN/uYzMuYzMuYzM) )

网页应用调用该接口前，需要确保已经调用 [requestAccess](https://open.feishu.cn/document/uYjL24iN/uUzMuUzMuUzM/requestaccess) ( 如需兼容 飞书V6.9.0 以下版本，可使用 [requestAuthCode](https://open.feishu.cn/document/uYjL24iN/uUzMuUzMuUzM/20220308) )

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | 预览
网页应用 | **✓** | **✓** | **✓** | V7.35.0+ | 预览

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
openid | string | 否 |  | 用户 [open_id](https://open.feishu.cn/document/home/user-identity-introduction/open-id)  
**示例值**：ou_f096d8391d54fab99895d34519eb9e79
openChatId | string | 否 |  | 会话[open_chat_id](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-id-description)  
**示例值**：oc_1965ed81fc91d3b73d68c4ca4cfc110a  
**Notice**：- 飞书[V3.10](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上版本支持  
- [open_chat_id](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-id-description) 和[open_id](https://open.feishu.cn/document/home/user-identity-introduction/open-id)都传的时候，[open_id](https://open.feishu.cn/document/home/user-identity-introduction/open-id)优先  
- [open_chat_id](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-id-description)和[open_id](https://open.feishu.cn/document/home/user-identity-introduction/open-id) 必须传入一个
needBadge | boolean | 否 | true | 是否需要展示会话页面左上角badge数  
**Notice**：- Android/iOS 端：飞书[V3.10.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上版本支持  
- PC 端：暂不支持

## 输出

继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性

## 示例代码

```js
tt.enterChat({
    openChatId: 'oc_1965ed81fc91d3b73d68c4ca4cfc110a',
    success (res) {
        console.log(JSON.stringify(res));
    },
    fail (res) {
        console.log(`enterChat fail:${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：

```json
{"errMsg":"enterChat:ok"}
```
