<!--
title: 开放能力相关
id: 6907569524100710401
fullPath: /ugTN1YjL4UTN24CO1UjN/ugzN1YjL4cTN24CO3UjN
updatedAt: 1656501958000
source: https://open.feishu.cn/document/faq/server-side-generic-questions/questions-on-open-capabilities
-->
# 开放能力相关
**1. 开放平台文档中，有的“xxxToken”相关介绍中，前面会带有“:”号。在实际操作过程中，这个“：”需不需要添加？**

答：不需要加。

**2. 我开发了一个应用，为什么不能获得人员的全部日历、日程信息？**

答：目前只支持获取由这个应用所创建的日历、日程信息，而不能获取由其他应用创建的全部日历、日程信息。
## 审批
**1. 我是否能够通过接口修改已上传的审批附件？**

答：目前还不支持直接修改已上传的审批附件，可以考虑撤回审批附件，重新发送。
<br>
<br>

**2.  如何获取审批实例中所有审批节点的审批人信息？**

答：可以参考[获取单个审批实例详情](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/get)文档，根据返回的==task_list==获取审批节点的审批人信息。但由于未处理节点的任务还未被创建，无法获取未处理节点相关信息。
<br>
<br>

**3. 为什么审批的事件订阅推送出现了延迟？**

答：可能的原因如下：
- 该审批的推送失败，平台方依照重推机制进行推送导致延迟
- 在该审批前，有审批事件出现了重推的情况，导致其延迟

需要排查网络，或者联系客服进行协助
<br>
<br>

## 安全
**1. 为什么接口返回了99991401错误？**

答：你的应用开启了IP白名单，且这次请求的来源IP在白名单之外，因此被网关拦截并返回了99991401错误码。你可以通过以下方式获取你的服务器出口IP：
1. 请咨询企业内IT部门的运维人员或云服务提供商
2. 登录你的服务器，用命令行执行：```curl ifconfig.me``` 或 ```curl cip.cc``` 或 ```curl myip.ipip.net``` 或 ```curl ipinfo.io```

获取到正确的服务器出口IP后，可以参考[这篇文档](/ssl:ttdoc/ukTMukTMukTM/ucTMxYjL3ETM24yNxEjN)，修改你应用的IP白名单设置。
