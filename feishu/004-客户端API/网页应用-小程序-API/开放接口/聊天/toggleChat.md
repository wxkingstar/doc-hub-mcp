---
title: "toggleChat"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/open-ability/chat/toggleChat
last_remote_update: 2025-04-15
last_remote_update_timestamp: 1744683294000
---
最后更新于 2025-04-15

# toggleChat(Object object)

侧边栏形式打开或关闭会话，重复调用可以控制侧边栏的打开和关闭。
**Notice**：如果需要兼容 [V4.1.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 之前的版本，切换聊天对象时，可以通过调用两次`tt.toggleChat({ openChatId: newOpenChatId, isKeep: true })`保证功能不受影响
  - [V4.1.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 之前会是关闭侧边栏，再打开 `newOpenChatId` 对应的新聊天对象窗口
  - [V4.1.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及之后是不关闭侧边栏，直接切换聊天对象，相同 `openChatId` 连调两次不会有闪烁

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **X** | **X** | **✓** | **X** | 预览
网页应用 | **X** | **X** | V4.1.0+ | **X** | 预览

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
openChatId | string | 是 |  | 会话 [open_chat_id](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-id-description)  
**示例值**：oc_7dab8a3d3cdcc9da365777c7ad535d64
width | number | 否 | 400 | 侧边栏宽度
needSidebar | boolean | 否 | true | 是否需要侧边菜单栏
isKeep | boolean | 否 | false | 保持侧边栏不关闭，切换聊天对象  
- 当侧边栏关闭时：isKeep 无论是 true、false 还是没有传参，都是打开侧边栏  
- 当侧边栏打开时：isKeep 只有为 true 才是保持侧边栏不关闭，其他情况都是关闭侧边栏  
**Notice**：- Android/iOS 端：暂不支持  
- PC 端：飞书[V4.1.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上版本支持

## 输出

继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性

## 示例代码

```js
tt.chooseChat({
  success(res) {
    const openChatId = res.data[0].id;
    tt.toggleChat({
      openChatId,
      width: 400,
      needSidebar: true,
      isKeep: false,
      success(res) {
        console.log(JSON.stringify(res));
      },
      fail(res) {
        console.log(`toggleChat fail: ${JSON.stringify(res)}`);
      },
    });
  },
});
```

`success`返回对象示例：

```json
{
  "errMsg": "toggleChat:ok"
}
```
