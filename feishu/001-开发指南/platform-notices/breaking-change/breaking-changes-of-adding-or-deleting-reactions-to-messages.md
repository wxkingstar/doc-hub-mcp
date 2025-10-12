<!--
title: 添加、删除消息表情回复接口增加多个管理后台权限点位管控
id: 7301514862781808644
fullPath: /uAjLw4CM/ugTN1YjL4UTN24CO1UjN/breaking-change/breaking-changes-of-adding-or-deleting-reactions-to-messages
updatedAt: 1700018551000
source: https://open.feishu.cn/document/platform-notices/breaking-change/breaking-changes-of-adding-or-deleting-reactions-to-messages
-->
# 添加、删除消息表情回复接口增加多个管理后台权限点位管控
### 变更事项
为保障产品功能体验的一致性，[添加消息表情回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/create)、[删除消息表情回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/delete) 接口增加对外沟通权限、沟通协作权限，联系人隐私设置等多个管理后台权限点位管控。


> 是否跟随客户端版本：不跟版<br> 
> 预计生效时间：2023-11-15<br> 

### 潜在影响
若消息的发送者与添加、删除表情回复的操作者不具备对外沟通、沟通协作等权限，将收到`231019` 或 `231020` 错误码。

### 解决方案
 1. 识别并处理`231019` 和 `231020` 错误码，业务无需重试；
 2. 如确有沟通需求，请联系租户管理员或对应用户。

<br>

若你未能及时确认并调整，管控生效后，可能会导致相关场景受损。<br>
开放平台预计在 **2023年11月15日** 完成升级，请于 **2023年11月15日前** 确认以上信息，并根据情况做好相应适配。<br>
<br> 如需适配协助，请联系开放平台技术支持。