---
title: "getChatInfo"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/open-ability/chat/getchatinfo
---
最后更新于 2025-01-21

# getChatInfo(Object object)

获取某个会话的信息
**Notice**：小程序调用该接口前，需要确保已经调用 [requestAccess](https://open.feishu.cn/document/uYjL24iN/uUzMuUzMuUzM/requestaccess) ( 如需兼容 飞书V6.9.0 以下版本，可使用 [login](https://open.feishu.cn/document/uYjL24iN/uYzMuYzMuYzM) )

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V3.10.0+ | V3.10.0+ | V3.10.0+ | V7.35.0+ | 预览
网页应用 | V3.44.0+ | V3.44.0+ | V3.44.0+ | V7.35.0+ | 预览

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
openChatId | string | 是 |  | 获取会话信息的会话[open_chat_id](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-id-description)  
**示例值**：oc_1965ed81fc91d3b73d68c4ca4cfc110a
chatType | number | 是 |  | 会话的类型  
**示例值**：0  
**可选值**：  
- `0`：单聊  
- `1`：群聊
userType | number | 否 |  | 单聊用户类型  
**示例值**：0  
**可选值**：  
- `0`：用户  
- `1`：bot  
**Notice**：chatType为0时，必须传该参数

## 输出

`success`返回对象的扩展属性：

名称 | 数据类型 | 描述
--- | --- | ---
i18nNames | object | 国际化会话名(可能为空)  
**字段权限要求**：  
读取群信息(im:chat.group_info:readonly)
&emsp;  
                    ∟  
                &nbsp;  
                    zh_cn | string | 中文名，可能为空
&emsp;  
                    ∟  
                &nbsp;  
                    en_us | string | 英文名，可能为空
&emsp;  
                    ∟  
                &nbsp;  
                    ja_jp | string | 日文名，可能为空
name | string | 会话名称  
**字段权限要求**：  
读取群信息(im:chat.group_info:readonly)
avatarUrls | string[] | 会话的头像url数组，包含多种图片分辨率  
**字段权限要求**：  
读取群信息(im:chat.group_info:readonly)
atCount | number | 被at数量  
**字段权限要求**：  
读取群信息(im:chat.group_info:readonly)  
**Notice**：飞书[V3.12.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上版本支持
badge | number | 未读消息数  
**字段权限要求**：  
读取群信息(im:chat.group_info:readonly)

## 示例代码

```js
tt.getChatInfo(
  {
    openChatId: 'oc_1965ed81fc91d3b73d68c4ca4cfc110a',
    chatType:  0,
    userType:  0,
    success (res) {
        console.log(JSON.stringify(res));
    },
    fail (res) {
        console.log(`getChatInfo fail:${JSON.stringify(res)}`);
    }
  }
)
```

`success`返回对象示例：

```json
{
  "atCount": 0,
  "avatarUrls": [
    "https://s3-imfile.feishucdn.com/static-resource/v1/f8836d60-07cb-4fd4-92ce-01e54952f79g~?image_size=72x72&cut_type=&quality=&format=png&sticker_format=.webp",
    "https://s3-imfile.feishucdn.com/static-resource/v1/f8836d60-07cb-4fd4-92ce-01e54952f79g~?image_size=240x240&cut_type=&quality=&format=png&sticker_format=.webp",
    "https://s3-imfile.feishucdn.com/static-resource/v1/f8836d60-07cb-4fd4-92ce-01e54952f79g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp",
    "https://s3-imfile.feishucdn.com/static-resource/v1/f8836d60-07cb-4fd4-92ce-01e54952f79g~?image_size=640x640&cut_type=&quality=&format=png&sticker_format=.webp"
  ],
  "badge": 0,
  "i18nNames": {
    "en_us": "飞书会议",
    "zh_cn": "飞书会议"
  },
  "name": "飞书会议",
  "errMsg": "getChatInfo:ok"
}
``` 

*(关键词：chatid, chat_id, chat id, 群id)*
