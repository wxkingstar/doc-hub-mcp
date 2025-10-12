<!--
title: transferMessage 接口升级
id: 7070743055918383106
fullPath: /uAjLw4CM/ugTN1YjL4UTN24CO1UjN/breaking-change/upgrade-transfermessage-api
updatedAt: 1699862219000
source: https://open.feishu.cn/document/faq/breaking-change/upgrade-transfermessage-api
-->
# transferMessage接口升级
### 变更事项
我们正在对开放平台的 [web-view 组件](/ssl:ttdoc/uYjL24iN/ukzNukzNukzN) 相关的 transferMessage API 进行升级，以对齐三端消息格式，提升接口一致性。

是否跟版：跟版<br>
预计生效版本：5.6 <br>
预计生效时间：2022-3-8<br>

### 潜在影响
平台升级结束后，若小程序 transferMessage API 仍未完成适配，可能会导致调用该 API 时不能正常发送或获取消息，进而对业务造成影响。

### 解决方案
1. 根据 [transferMessage 不一致梳理 及 对齐方案](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/breaking-change/transfermessage-inconsistency-sorting-and-alignment-solution) 进行适配；
2. 完成小程序版本发布；
3. 在飞书开发者工具（需升级为 IDE2.10 版本）中调试并校验链接，确认消息格式适配无误。

<br> 如需适配协助，请洽客服支持