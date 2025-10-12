---
title: "服务台部分 API 接口增加权限点位管控"
source_url: https://open.feishu.cn/document/platform-notices/breaking-change/some-api-of-help-desk-add-permission-control
---
最后更新于 2024-03-06

# 服务台部分 API 接口增加权限点位管控
### 变更事项
为保障产品功能体验的一致性，部分支持 user_access_token 访问的接口内部将增加用户权限检查，与服务台管理后台的权限一致。

> **是否跟随客户端版本**：不跟随特定客户端版本<br>
> **预计生效时间**：2024-03-29

详细的接口列表：
-  [创建客服工作日程](https://open.feishu.cn/document%2FuAjLw4CM%2FukTMukTMukTM%2Fhelpdesk-v1%2Fagent_schedule%2Fcreate)
-  [更新客服工作日程](https://open.feishu.cn/document%2FuAjLw4CM%2FukTMukTMukTM%2Fhelpdesk-v1%2Fagent-schedules%2Fpatch)
-  [删除客服工作日程](https://open.feishu.cn/document%2FuAjLw4CM%2FukTMukTMukTM%2Fhelpdesk-v1%2Fagent-schedules%2Fdelete)
-  [创建客服技能](https://open.feishu.cn/document%2FuAjLw4CM%2FukTMukTMukTM%2Fhelpdesk-v1%2Fagent_skill%2Fcreate)
-  [更新客服技能](https://open.feishu.cn/document%2FuAjLw4CM%2FukTMukTMukTM%2Fhelpdesk-v1%2Fagent_skill%2Fpatch)
-  [删除客服技能](https://open.feishu.cn/document%2FuAjLw4CM%2FukTMukTMukTM%2Fhelpdesk-v1%2Fagent_skill%2Fdelete)
-  [更新工单详情](https://open.feishu.cn/document%2FuAjLw4CM%2FukTMukTMukTM%2Fhelpdesk-v1%2Fticket%2Fupdate)
-  [创建工单自定义字段](https://open.feishu.cn/document%2FuAjLw4CM%2FukTMukTMukTM%2Fhelpdesk-v1%2Fticket_customized_field%2Fcreate-ticket-customized-field)
-  [更新工单自定义字段](https://open.feishu.cn/document%2FuAjLw4CM%2FukTMukTMukTM%2Fhelpdesk-v1%2Fticket_customized_field%2Fupdate-ticket-customized-field)
-  [删除工单自定义字段](https://open.feishu.cn/document%2FuAjLw4CM%2FukTMukTMukTM%2Fhelpdesk-v1%2Fticket_customized_field%2Fdelete)
-  [创建知识库分类](https://open.feishu.cn/document%2FuAjLw4CM%2FukTMukTMukTM%2Fhelpdesk-v1%2Fcategory%2Fcreate)
-  [更新知识库分类详情](https://open.feishu.cn/document%2FuAjLw4CM%2FukTMukTMukTM%2Fhelpdesk-v1%2Fcategory%2Fpatch)
-  [创建知识库](https://open.feishu.cn/document%2FuAjLw4CM%2FukTMukTMukTM%2Fhelpdesk-v1%2Ffaq%2Fcreate)
-  [修改知识库](https://open.feishu.cn/document%2FuAjLw4CM%2FukTMukTMukTM%2Fhelpdesk-v1%2Ffaq%2Fpatch)
-  [删除知识库](https://open.feishu.cn/document%2FuAjLw4CM%2FukTMukTMukTM%2Fhelpdesk-v1%2Ffaq%2Fdelete)

### 潜在影响
开发者如未在生效时间前调整/确认接口使用的用户身份，可能出现接口调用时，提示没有操作权限。

### 解决方案
检查接口使用的用户身份，确保用户是对应服务台管理后台的管理员或负责人。服务台的角色列表可以在“服务台管理后台 > 设置中心 > 角色”中查看。
<br>

若你未能及时确认并调整，相关功能生效后将会导致接口访问失败。<br>
变更预计在 **2024年03月29日** 生效，请于 **2024年03月29日前** 确认以上信息，并根据情况做好相应适配。<br>
<br> 如需适配协助，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)。
