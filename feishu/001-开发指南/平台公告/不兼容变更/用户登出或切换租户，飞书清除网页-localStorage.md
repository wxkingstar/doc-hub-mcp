---
title: "用户登出或切换租户，飞书清除网页 localStorage"
source_url: https://open.feishu.cn/document/faq/breaking-change/clear-webview-localstorage
---
最后更新于 2023-08-29

# 开启用户登出或切换租户时飞书清除网页 localStorage能力
### 变更事项
为了在安全方面更好地保护用户数据，从飞书V5.23.0版本开始支持配置用户登出或者切换租户时清除网页的 localStorage,具体场景如下:

1. 用户从租户 A 切换到租户 B

2. 用户退出当前租户

<br>
是否跟版：是<br>
预计生效版本：Android & iOS & PC 飞书 V5.23.0<br>
预计生效时间：2022-10-27<br>

### 潜在影响
客户端版本升级至 V5.23.0 并且开启清除配置后，如果相关代码没有对 localStorage 做判空处理，可能会影响程序正常运行。

> 相关配置需开通灰度能力才可使用，如需开通，可联系企业 CSM 进行灰度能力开通。

### 解决方案

请开发者检查自己的代码对 localStorage 是否做了判空处理

### 申请流程
加入[飞书网页容器开发者交流群](https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=30ema508-ab08-4023-9773-a51611ff6df5)，按照群公告中的提示发起审批，并提供企业编号，企业编号可咨询企业管理员获取。

<br>
如需适配协助，请联系[技术支持](https://applink.feishu.cn/T8wyfQh9cT2Q)。
