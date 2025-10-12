---
title: "View.Action.showChooseChat"
source_url: https://open.feishu.cn/document/client-docs/docs-add-on/05-api-doc/view/action/View.Action.showChooseChat
---
最后更新于 2025-07-31

# View.Action.showChooseChat
展示聊天会话选择器，用户选择之后将结果返回，该方法为异步调用。

## 可用性说明

权限要求 | 视图可用说明 | 平台可用 | 场景
--- | --- | --- | ---
可读 | 所有视图 | - PC  
- 移动端 | 演示模式

## 输入

聊天会话选择器配置选项

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
title | string | 否 | 聊天会话选择器的标题
description | string | 否 | 聊天会话选择器的描述
multiSelect | boolean | 否 | 是否支持选择多个聊天会话
maxSelectedNum | number | 否 | 支持最多选择多少个聊天会话
selectType | string | 否 | 可以选择的聊天会话的类型，可选择：  
  - all_chats：全部聊天会话  
- group_chats：多人聊天  
- p2p_chats：私聊  
- bot：机器人  
- without_cross_tenant_chats：非跨租户聊天

## 输出

聊天会话选择器的返回结果

名称 | 数据类型 | 是否必填 | 描述
--- | --- | --- | ---
type | string | 是 | 聊天会话选择器结果类型，可选值：  
- confirm：确认  
- cancel：取消
chats | object[] | 是 | 已选择的聊天会话
∟id | string | 是 | 聊天会话的 id
∟name | string | 是 | 聊天会话的名称
∟chatType | string | 是 | 聊天会话的类型，可选值：  
- P2P：单聊  
- GROUP：群聊  
- TOPIC_GROUP：话题群  
- UNKNOWN：未知

## 示例代码

### 调用示例

```js
const DocMiniApp = new BlockitClient().initAPI();
const res = await DocMiniApp.View.Action.showChooseChat({
    title: '选择要发送的会话',
    selectType: 'group_chats',
    multiSelect: true,
    maxSelectedNum: 10,
});
console.log('debug', res);
```

### 返回示例

```json
{
    "type": "confirm",
    "chats": [
        {
            "id": "会话id",
            "name": "会话名称",
            "chatType": "GROUP"
        }
    ]
}
```
