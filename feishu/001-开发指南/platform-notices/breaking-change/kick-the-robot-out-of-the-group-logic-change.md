<!--
title: 将机器人踢出群逻辑变更
id: 7231017223799537666
fullPath: /uAjLw4CM/ugTN1YjL4UTN24CO1UjN/breaking-change/kick-the-robot-out-of-the-group-logic-change
updatedAt: 1683713942000
source: https://open.feishu.cn/document/faq/breaking-change/kick-the-robot-out-of-the-group-logic-change
-->
# 将机器人移除群聊逻辑变更
### 变更事项
为了防止网络攻击，提高服务的安全性，我们将调整[将用户或机器人移出群聊](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-members/delete)踢机器人出群的逻辑。变更为操作者必须在群内才可以踢机器人出群，否则将返回错误码232011，提示Operator can NOT be out of the chat。


是否跟版：不跟版<br> 
预计生效时间：2023-5-24<br> 

### 潜在影响
若你有操作者不在群但踢机器人出群的场景，会收到错误信息。


### 解决方案
可以在飞书客户端上拉操作者进群 或者 让已经在群的成员通过[用户或机器人主动加入群聊
](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-members/me_join)接口拉操作者进群。
<br><br><br>

若你未能及时确认并调整，凭证变更生效后，可能会导致数据丢失或产生报错。<br>
我们预计在 **2023年5月24日** 完成升级，请于 **2023年5月24日前** 确认以上信息，并根据情况做好相应适配。<br>
<br> 如需适配协助，请洽客服支持。