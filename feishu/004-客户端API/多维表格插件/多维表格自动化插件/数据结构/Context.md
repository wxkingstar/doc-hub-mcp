---
title: "Context"
source_url: https://open.feishu.cn/document/base-extension/base-automation-extensions/data-type/context
---
最后更新于 2025-08-04

# Context

每次 `execute` 函数被调用时， `context`对象将作为`execute`函数第二个参数。`context`对象中拥有如下属性。
| 字段                   | 类型       | 说明                                                                                                                                  |
| -------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| app                  | object   | 当前文档的相关信息。                                                                                                                           |
| app.token            | string   | 文档 base token。                                                                                                                       |
| app.timeZone         | string   | 文档的时区，如 `Asia/Shanghai`                                                                                                             |
| app.url              | string   | 文档的地址。                                                                                                                               |
| app.trigger          | object   | 自动化的 trigger 信息。                                                                                                                     |
| app.trigger.type     | string   | 自动化 trigger 的类型，'AddRecordTrigger' \| 'SetRecordTrigger' \| 'ChangeRecordTrigger' \| 'TimerTrigger' \| 'ReminderTrigger' \| ButtonTrigger。     |
| app.trigger.recordID | string   | 触发自动化时的 recordID，trigger为「定时触发」时该属性为null。                                                                                            |
| app.trigger.tableID  | string   | 触发自动化时的 tableID，trigger为「定时触发」时该属性为空字符串。                                                                                             |
| authorization        | object   | 授权相关数据。在addAction中添加了authorization字段之后，此属性有值                                                                                                                              |
| authorization.type   | string   | 授权类型。                                                                                                                                |
| authorization.token  | string   | 授权的token。                                                                                                                            |
| packID               | string   | 应用id。                                                                                                                                |
| extensionID          | string   | 插件id。                                                                                                                                |
| tenantAccessToken    | string   | 插件可以应用身份调用[开平的OpenAPI](https://open.feishu.cn/document/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/server-api-list)，如新建任务、翻译等。需要在addAction中配置useTenantAccessToken为true才可使用。                 |
| tenantKey            | string   | 当前文档的租户信息。                                                                                                                           |
| fetch                | function | 用于请求外部资源的函数，语法同[node-fetch](https://github.com/node-fetch/node-fetch/tree/2.x#readme)，**请勿使用axios、got等三方类库请求**，由于安全限制，这些类库在线上是无法使用的。
