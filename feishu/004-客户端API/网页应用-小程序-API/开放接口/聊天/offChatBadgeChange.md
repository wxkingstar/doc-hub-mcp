---
title: "offChatBadgeChange"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/open-ability/chat/offchatbadgechange
---
最后更新于 2024-02-02

# offChatBadgeChange(Object object)

取消监听某个群未读消息数变化
**Notice**：注意事项：
- 小程序调用该接口前，需要确保已经调用 [requestAccess](https://open.feishu.cn/document/uYjL24iN/uUzMuUzMuUzM/requestaccess) ( 如需兼容 飞书V6.9.0 以下版本，可使用 [login](https://open.feishu.cn/document/uYjL24iN/uYzMuYzMuYzM) )
- 需要读取群信息权限，接口才能调用 读取群信息(im:chat.group_info:readonly)

## 支持说明

应用能力 | Android | iOS | PC | 预览效果
--- | --- | --- | --- | ---
小程序 | V3.10.0+ | V3.10.0+ | V3.10.0+ | 预览
网页应用 | V7.10.0+ | V7.10.0+ | V7.10.0+ | /

## 输入

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
[openChatId](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-id-description) | string | 是 |  | 获取会话信息的会话Id
onChange | function | 否 |  | 回调函数  
**Notice**：如果不传 `onChange` 回调函数，则会取消[openChatId](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-id-description)对应的所有监听，传onChange则会取消指定监听

## 输出
无

## 示例代码

```js
tt.offChatBadgeChange(
  {
    openChatId: 'oc_7dab8a3d3cdcc9da365777c7ad535d64',
    onChange: (res) => {
      console.log(JSON.stringify(res))
    }
  }
)
```
