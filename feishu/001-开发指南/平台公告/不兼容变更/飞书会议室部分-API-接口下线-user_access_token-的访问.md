---
title: "飞书会议室部分 API 接口下线 user_access_token 的访问"
source_url: https://open.feishu.cn/document/platform-notices/breaking-change/access-to-uat-offline-meeting-room
---
最后更新于 2024-03-13

# 飞书会议室部分 API 接口下线 user_access_token 的访问
### 变更事项

为提升服务的安全性，我们将下线飞书会议室部分接口通过 user_access_token 调用的能力，以确保调用接口时不会出现越权的问题。若应用涉及到这些接口，请迁移使用 tenant_access_token 进行调用，以确保应用正常运行。

> **是否跟随客户端版本**：不跟随特定客户端版本 
> 
> **预计生效时间**：2024-03-31

### 详细的接口列表
- [查询会议室详情](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/get)
- [批量查询会议室详情](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/mget)
- [查询会议室列表](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/list)
- [搜索会议室](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/search)
- [查询会议室配置](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/scope_config/get)
- [搜索会议室层级](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_level/search)
- [查询会议室预定限制](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve_config/reserve_scope)
- [更新会议室预定限制](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve_config/patch)
- [查询会议室预定表单](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve_config-form/get)
- [查询会议室预定管理员](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve_config-admin/get)
- [查询禁用状态变更通知](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/reserve_config-disable_inform/get)
- [查询会议室配置](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/scope_config/get)
- [删除会议室](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/delete)
- [更新会议室](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/patch)
- [创建会议室](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room/create)
- [创建会议室层级](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_level/create)
- [删除会议室层级](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_level/del)
- [更新会议室层级](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/room_level/patch)

### 潜在影响

开发者如未在生效时间前调整接口使用的用户身份，可能出现接口调用时，提示没有操作权限。

### 解决方案

检查接口使用的用户身份，确保迁移至租户身份（ tenant_access_token ）访问。
若你未能及时确认并调整，相关功能生效后将会导致接口访问失败。 

变更预计在 **2024年3月31日** 生效，请于 **2024年3月31日前** 确认以上信息，并根据情况做好相应适配。 

如需适配协助，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)。
