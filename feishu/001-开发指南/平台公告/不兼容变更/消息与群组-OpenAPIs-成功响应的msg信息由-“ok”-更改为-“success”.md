---
title: "消息与群组 OpenAPIs 成功响应的msg信息由 “ok” 更改为 “success”"
source_url: https://open.feishu.cn/document/platform-notices/breaking-change/the-msg-of-successfully-response-of-apis-are-changed
last_remote_update: 2023-09-19
last_remote_update_timestamp: 1695125732000
---
最后更新于 2023-09-19

# 消息与群组 OpenAPIs 成功响应的msg信息由 “ok” 更改为 “success”
### 变更事项
为保障产品功能体验的一致性，消息与群组内的OpenAPI（历史版本除外）成功响应的msg信息由 “ok” 统一更改为 “success” 。

> 是否跟随客户端版本：不跟版<br> 
> 预计生效时间：2023-03-08<br> 

### 潜在影响
若依赖 `msg`字段来判断接口调用是否成功，将会出现判断错误进而影响业务场景。

### 解决方案
开放平台 **强烈建议** 您不要使用 `msg` 判断接口是否成功，请根据 `code`来判断接口响应状态。如果是成功响应，`code` 取值为 0，详见：[调用 API — 响应结果](https://open.feishu.cn/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/get-)。

<br>

若你未能及时确认并调整，管控生效后，可能会导致相关场景受损。<br>
开放平台预计在 **2023年03月08日** 完成升级，请于 **2023年03月08日前** 确认以上信息，并根据情况做好相应适配。<br>
<br> 如需适配协助，请联系开放平台技术支持。
