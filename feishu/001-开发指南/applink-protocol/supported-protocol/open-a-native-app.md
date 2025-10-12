<!--
title: 打开原生集成应用
id: 7327485085434445825
fullPath: /uAjLw4CM/uYjL24iN/applink-protocol/supported-protocol/open-a-native-app
updatedAt: 1706092843000
source: https://open.feishu.cn/document/applink-protocol/supported-protocol/open-a-native-app
-->
# 打开原生集成应用
::: note 
从飞书 6.1.0 版本开始支持。
:::
## 使用场景
打开一个原生集成应用。如需接入原生集成应用，请参考：
- [Android](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/native-integrated-application/andr)
- [iOS](/ssl:ttdoc/uAjLw4CM/ukzMukzMukzM/native-integration/open-scene-introduction/protocol-components/native-integrated-application/ios-)

## 协议
`https://applink.feishu.cn/client/native_app/open`

## 参数
::: note 
每一个参数都应当编码。
:::
| 字段         | 必填           | 说明        | 
| --------- | --------------- | -------   | 
|**appId** |    是      | 原生应用 appId(可从「开发者后台-凭证与基础信息」获取) | 