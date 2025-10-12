<!--
title: 消息加急接口增加“谁可以加急”群设置项管控
id: 7280091864291442692
fullPath: /uAjLw4CM/ugTN1YjL4UTN24CO1UjN/breaking-change/message-buzzing-apis-add-group-setting-control
updatedAt: 1695029629000
source: https://open.feishu.cn/document/platform-notices/breaking-change/message-buzzing-apis-add-group-setting-control
-->
# 消息加急接口增加“谁可以加急”群设置项管控
### 变更事项
为保障产品功能体验的一致性，发送应用内加急、发送短信加急、发送电话加急 接口新增“谁可以加急”群设置项管控。 管控后，若机器人所在群聊开启“仅群主和管理员”可加急，群内非群主、管理员身份的机器人将无法加急用户，接口返回 230052 错误码。


> 是否跟随客户端版本：不跟版<br> 
> 预计生效时间：2023-10-16<br> 

### 潜在影响
若你的机器人有消息加急场景，若群聊开启了“仅群主和管理员”可加急，而你的机器人非群主或管理员，调用上述接口将返回 230052 错误码。

### 解决方案
1. 使用[指定群管理员](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-managers/add_managers)接口以群主身份将机器人设置为管理员；
2. 开启“群内所有成员”可加急。

若你未能及时确认并调整，管控生效后，可能会导致相关场景受损。<br>
开放平台预计在 **2023年10月16日** 完成升级，请于 **2023年10月16日前** 确认以上信息，并根据情况做好相应适配。<br>
<br> 如需适配协助，请联系开放平台技术支持。