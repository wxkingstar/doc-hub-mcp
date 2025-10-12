---
title: "云文档组件旧版 SDK 升级说明"
source_url: https://open.feishu.cn/document/platform-notices/breaking-change/upgrade-old-version-of-the-cloud-documents-sdk
last_remote_update: 2024-12-05
last_remote_update_timestamp: 1733381552000
---
最后更新于 2024-12-05

# 旧版文档升级说明
## 变更事项

为了进一步优化性能并提升使用体验，云文档组件计划于 **2025 年 3 月 1 日** 起将通过 **CDN 覆盖** 的方式，对 **<1.2.1** 版本的旧版 SDK 分批次升级为 **1.2.21** 版本。升级版本后，旧版功能配置保持不变，开发者无需额外操作。

**是否跟随客户端版本：不跟版**<br>
**预计生效时间：2025-03-01**

## 潜在影响
- 如果存在加载不同租户文档的场景，需要将原来replace的逻辑改成重新请求signature+render的形式。
- 旧版本的云文档组件，加载出来的文档带一个固定的 /component 路径。升级 SDK 后，docx（新文档类型）会去掉这个路径，接入方需要注意现有业务逻辑是否对路径有判断依赖。可参考[旧版 SDK 升级事项](https://bytedance.larkoffice.com/docx/TRA7dIuSGom5oUxdvUIchHQ0nFb)

## 解决方案

如果您需要提前进行升级，可以在 [SDK接入文档](https://open.feishu.cn/document/uYjL24iN/uYDO3YjL2gzN24iN3cjN/introduction) 中找到最新版本的 SDK，进行升级和测试。

## 联系方式

如需适配协助，请联系开放平台技术支持。
