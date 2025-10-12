---
title: "小程序web-view可信域名配置"
source_url: https://open.feishu.cn/document/faq/breaking-change/web-view-component-update
last_remote_update: 2022-03-03
last_remote_update_timestamp: 1646287338000
---
最后更新于 2022-03-03

# 小程序web-view可信域名配置
### 变更事项
我们正在对开放平台的 [web-view 组件](https://open.feishu.cn/document/uYjL24iN/ukzNukzNukzN#7aa6f0e7)进行升级，以支持校验小程序 web-view 组件中引入的链接。

是否跟版：不跟版<br>
预计生效版本： - <br>
预计生效时间：2021-10-29<br>

### 潜在影响
平台升级结束后，对于 V4.8.0 以上版本的飞书客户端，若开发者后台中仍未配置引入的跳转链接，平台将对链接进行拦截并返回安全提示。
### 解决方案
为了不影响你的正常业务，请及时前往开发者后台配置小程序的 web-view 可信域名，并完成相关校验。
1. 进入[开发者后台 ](https://open.feishu.cn/app/)>应用详情 > 安全设置，在“Web-view 可信域名”模块中填写符合规范的链接；
2. 完成小程序版本发布；
3. 在飞书开发者工具（需升级至 V2.6.0）中调试并校验链接，确认链接可正常跳转。

<br> 如需适配协助，请洽技术支持
