---
title: "飞书开放平台事件与回调新增出口 IP"
source_url: https://open.feishu.cn/document/platform-notices/breaking-change/new-outbound-ips-events-and-callbacks
---
最后更新于 2024-12-05

# 飞书开放平台事件与回调新增出口 IP
## 变更事项

**事件与回调**将于 **2024年12月12日** 在原出口 IP 不变的前提下，新增三个出口 IP：
- 101.126.59.7
- 101.126.59.8
- 101.126.59.9

## 潜在影响

已配置[事件订阅](https://open.feishu.cn/document/ukTMukTMukTM/uUTNz4SN1MjL1UzM)或者[回调订阅](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/event-subscription-guide/callback-subscription/callback-overview)的应用。已经在本地配置了网络安全组的应用，可能会因为网络拦截导致丢失部分事件与回调的请求。

## 解决方案

飞书开放平台向订阅应用事件或者回调的服务器发送请求时，是通过特定 IP 发送出去的，已经在本地配置了网络安全组的开发者，请提前修改安全组策略，放行以上新增的出口 IP，以避免事件或回调被防火墙拦截。可以从[获取事件出口 IP](https://open.feishu.cn/document/ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/event-v1/outbound_ip/list)接口获取飞书开放平台所有的出口 IP。
