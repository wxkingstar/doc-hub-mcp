---
title: "获取日程参与群成员列表API加强鉴权"
source_url: https://open.feishu.cn/document/platform-notices/breaking-change/calendar-obtain-group-members-to-enhance-uat-authentication
last_remote_update: 2024-03-13
last_remote_update_timestamp: 1710320347000
---
最后更新于 2024-03-13

# 获取日程参与群成员列表API加强鉴权
### 变更事项

为提升服务的安全性，我们将加强参与群成员列表token调用的鉴权能力，以确保调用接口时不会出现越权的问题，与客户端的权限保持一致。本次变更加强了`调用接口的身份必须在群成员列表中`的判断，如果不在群里，则接口报错。若应用涉及到这个接口，且报错影响了应用，请进行改造，以确保应用正常运行。

> **是否跟随客户端版本**：不跟随特定客户端版本 
> 
> **预计生效时间**：2024-04-20

### 涉及接口
- [获取日程参与群成员列表](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event-attendee-chat_member/list)

### 潜在影响

开发者如未在生效时间前调整接口，发生越权行为时，可能出现接口调用报错，提示没有操作权限。

### 解决方案

1. 检查接口使用的用户身份，在访问参与群成员的时候，请确保该用户身份在参与群成员列表里。
2. 针对错误码`194001`（no permission to list event attendees）进行处理，表示用户没有权限查看群参与人。 

变更预计在 **2024年4月20日** 生效，请于 **2024年4月20日前** 确认以上信息，并根据情况做好相应适配。 

如需适配协助，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)。
