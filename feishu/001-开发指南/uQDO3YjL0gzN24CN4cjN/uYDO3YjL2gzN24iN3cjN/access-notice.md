<!--
title: 接入需知
id: 7316566359952523266
fullPath: /uYjL24iN/uYDO3YjL2gzN24iN3cjN/access-notice
updatedAt: 1739789313000
source: https://open.feishu.cn/document/web-components/uYDO3YjL2gzN24iN3cjN/access-notice
-->
# 接入需知
:::html
<md-alert type="warn">
  在飞书在线文档嵌入业务系统场景中，通过云文档组件提供的**配置能力**，可以轻松定制所嵌入飞书在线文档的基础模块功能。同时也提供了**API调用能力**，可以在运行时来调用飞书在线文档配置显示能力。
当然云文档组件并不是所有能力都支持，此处引入一个**自查手册**，在接入前请认真评估现有能力是否能满足业务场景的接入诉求。
</md-alert>
:::
## 支持环境

| **PC浏览器**                   | **手机浏览器** | **iPad浏览器** | **手机飞书客户端内打开** | **iPad飞书客户端内** |
| --------------------------- | --------- | ----------- | -------------- | -------------- |
| ✅ （Chrome最佳，Safari部分功能兼容不好） | ✅         | ✅           | ✅              | ❌              |
## 产品能力

目前飞书在线文档管理主要包括三部分：`飞书云文档`、`飞书Sheet表格`、`飞书多维表格`，针对这些能力的支持情况说明：
**产品**        | **配置能力**                         | **API调用能力** | **迭代**                    |
| ------------- | -------------------------------- | ----------- | ------------------------- |
| **飞书云文档**     | ✅                                | ✅           | 维护                        |
| **飞书wiki文档**  | ❌                                | ❌           | 可通过[获取知识空间节点信息](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/wiki-v2/space/get_node) 调用将 wiki 转成云文档来支持 |
| **飞书Sheet表格** | **仅支持** **`PC Header`** **配置能力** | ❌           | 不再更新                      |
| **飞书多维表格**    | ❌                                | ❌           | ❌
## 配置能力
详细请参见[云文档组件功能配置](/ssl:ttdoc/uYjL24iN/uYDO3YjL2gzN24iN3cjN/feature-config)。

## API能力
详细请参见[API能力](/ssl:ttdoc/uYjL24iN/uYDO3YjL2gzN24iN3cjN/api-capabilities)。

## 用户身份

Chrome计划2024年开始禁用三方Cookie，具体见 [Chrome禁用三方Cookie计划](https://privacysandbox.com/intl/en_us/open-web/#the-privacy-sandbox-timeline)
如果业务系统身份鉴权走的是Cookie身份鉴权会有影响。
![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/84f474daef4433c1a472705c86b54b78_gDsrNs7jsA.png?height=492&lazyload=true&width=1280)
**解决方案：**
1. 接入云文档组件前，需要完成[组件SDK鉴权流程](/ssl:ttdoc/uYjL24iN/uUDO3YjL1gzN24SN4cjN)。
1. 正确接入鉴权流程后，系统默认采用的是 `jssdk-session Header`身份鉴权，即不走Cookie身份鉴权，在Chrome禁用三方Cookie场景中将不受影响。