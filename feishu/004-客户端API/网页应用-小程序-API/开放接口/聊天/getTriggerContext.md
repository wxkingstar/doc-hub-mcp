---
title: "getTriggerContext"
source_url: https://open.feishu.cn/document/web-app/gadget-api/open-ability/chat/gettriggercontext
---
最后更新于 2024-12-04

# getTriggerContext(Object object)

加号菜单场景中，获取当前会话信息

## 支持说明

应用能力 | Android | iOS | PC | 预览效果
--- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | 预览
网页应用 | **✓** | **✓** | **✓** | 预览

## 输入
继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
triggerCode | string | 是 |  | 随机生成的当前会话的code

## 输出
继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，`success`返回对象的扩展属性：

名称 | 数据类型 | 描述
--- | --- | ---
openChatId | string | 业务绑定的会话ID
bizType | string | 业务类型

## 示例代码

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>
  <div style="display: flex">
    预览小程序
    预览网页应用

</div> 

```js
tt.getTriggerContext({
    triggerCode: 'abc',
    success (res) {
        let openChatId = res.openChatId
        console.log(openChatId);
    },
    fail (res) {
        console.log(res);
    }
}) 
```

`success`返回对象示例：

```json
{
    'openChatId': 'xxxxxxxx',
    'bizType': 'xxxxxxxx'
}
```
