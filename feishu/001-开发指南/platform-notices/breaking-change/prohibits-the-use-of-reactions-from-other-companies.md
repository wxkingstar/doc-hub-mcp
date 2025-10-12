<!--
title: 添加、删除消息表情回复接口禁止使用其他企业的自定义表情
id: 7312653337198936067
fullPath: /uAjLw4CM/ugTN1YjL4UTN24CO1UjN/breaking-change/prohibits-the-use-of-reactions-from-other-companies
updatedAt: 1702609782000
source: https://open.feishu.cn/document/platform-notices/breaking-change/prohibits-the-use-of-reactions-from-other-companies
-->
# 添加、删除消息表情回复接口禁止使用其他企业的自定义表情
### 变更事项
为保障产品功能体验的一致性，[添加消息表情回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/create)、[删除消息表情回复](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/delete) 接口禁止使用其他企业的自定义表情。


> 是否跟随客户端版本：不跟版<br> 
> 预计生效时间：2023-12-29<br> 

### 潜在影响
若使用其他企业的自定义表情添加、删除消息表情回复，将收到`231001`错误码。

### 解决方案
 1. 识别并处理`231001`错误码，业务无需重试；
 2. 换用操作者所属企业可用的表情。

<br>

若你未能及时确认并调整，管控生效后，可能会导致相关场景受损。<br>
开放平台预计在 **2023年12月29日** 完成升级，请于 **2023年12月29日前** 确认以上信息，并根据情况做好相应适配。<br>
<br> 如需适配协助，请联系开放平台技术支持。