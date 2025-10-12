---
title: "创建群owner_id可用性校验变更"
source_url: https://open.feishu.cn/document/faq/breaking-change/create-group-owner_id-availability-check-change
last_remote_update: 2023-05-10
last_remote_update_timestamp: 1683713954000
---
最后更新于 2023-05-10

# 创建群API应用与owner_id可用性逻辑校验变更
### 变更事项
为了防止网络攻击，提高服务的安全性，我们将调整[创建群](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/create)设置owner_id的可用性检测逻辑。具体的调整为当应用于此owner_id对应的用户无可用性时，会返回错误码232043，提示信息Your request contains unavailable ids, ext=bot is invisible to user ids: [***]。

是否跟版：不跟版<br> 
预计生效时间：2023-5-24<br> 

### 潜在影响
若你的应用创建群传入owner_id，且应用对于owner_id对应用户无可用性时，创建群会失败。

### 解决方案
请在开发者后台[开启用户的可见性](https://open.feishu.cn/document/home/introduction-to-scope-and-authorization/availability)。
<br><br><br>

若你未能及时确认并调整，凭证变更生效后，可能会导致数据丢失或产生报错。<br>
我们预计在 **2023年5月24日** 完成升级，请于 **2023年5月24日前** 确认以上信息，并根据情况做好相应适配。<br>
<br> 如需适配协助，请洽客服支持。
