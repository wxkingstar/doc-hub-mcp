<!--
title: webhook v2 机器人超出限频治理
id: 7070743057523703809
fullPath: /uAjLw4CM/ugTN1YjL4UTN24CO1UjN/breaking-change/webhook-v2-robot-exceeds-frequency-limit-management
updatedAt: 1646287328000
source: https://open.feishu.cn/document/faq/breaking-change/webhook-v2-robot-exceeds-frequency-limit-management
-->
# webhook v2 机器人超出限频治理
### 变更事项
自定义机器人的频控策略为 100 次/分钟，原先的频控策略实施预留了一定的空间，允许偶尔超过这一限制。<br>
我们将调整自定义机器人的频控策略实施方式，从 2022年1月5日 起，严格按照 100 次/分钟执行。调整之后，超出这一调用频率的消息将会发送失败。

是否跟版：不跟版<br>
预计生效版本：- <br>
预计生效时间：2022-1-5<br>

### 潜在影响
当自定义机器人持续较长时间以超过 100 次/分钟的频率向群组发送消息时，可能会导致用户遗漏重要消息、阅读体验变差等问题。

### 解决方案
为了不影响业务的正常运行，请尽快修改自定义机器人的 webhook 调用频率。

<br> 如需适配协助，请洽客服支持