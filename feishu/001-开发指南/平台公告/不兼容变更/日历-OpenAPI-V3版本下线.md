---
title: "日历 OpenAPI V3版本下线"
source_url: https://open.feishu.cn/document/faq/breaking-change/calendar-openapi-v3-will-be-offline-soon
last_remote_update: 2023-04-06
last_remote_update_timestamp: 1680779981000
---
最后更新于 2023-04-06

# 日历 OpenAPI V3版本下线
### 变更事项
为了提供更好日历开放能力，日历侧将于 **2023年10月07日** 下线Calendar V3的相关服务，**不再支持Calendar V3相关API发起的请求**。

目前，已经支持[Calendar V4版本API](https://open.feishu.cn/document/ukTMukTMukTM/uETM3YjLxEzN24SMxcjN)，V4版本支持更丰富的能力和拥有更优的性能；为确保应用的正常运行，请根据 API 文档，迁移Calendar V3相关逻辑迁移到V4版本API上。

<br>
是否跟版：否<br>
预计生效时间：2023-10-07<br>

### 潜在影响
Calendar V3服务下线后，V3 API相关请求均会报错，可能会影响程序正常运行。

### 解决方案
检查是否需要继续使用日历 API，如果需要使用，请将依赖日历V3 API逻辑迁移到日历V4 API。

#### 迁移注意事项
1. 【calendar ID】V3的calendar_id可以直接在V4使用，但通过V4创建/生成的calendar_id，无法在V3接口使用。
2. 【event ID】V3的日程ID，加上后缀"_0"就可以在V4接口使用，同理"_0"结尾的V4日程ID，可以去掉"_0"后缀在V3使用。

### 日历V3 API列表
- [获取日历](https://open.feishu.cn/document/ukTMukTMukTM/uMDN04yM0QjLzQDN)
- [获取日历列表](https://open.feishu.cn/document/ukTMukTMukTM/uMTM14yMxUjLzETN)
- [创建日历](https://open.feishu.cn/document/ukTMukTMukTM/uQTM14CNxUjL0ETN)
- [删除日历](https://open.feishu.cn/document/ukTMukTMukTM/uUTM14SNxUjL1ETN)
- [更新日历](https://open.feishu.cn/document/ukTMukTMukTM/uYTM14iNxUjL2ETN)
- [获取日程](https://open.feishu.cn/document/ukTMukTMukTM/ucTM14yNxUjL3ETN)
- [创建日程](https://open.feishu.cn/document/ukTMukTMukTM/ugTM14COxUjL4ETN)
- [获取日程列表](https://open.feishu.cn/document/ukTMukTMukTM/ukTM14SOxUjL5ETN)
- [删除日程](https://open.feishu.cn/document/ukTMukTMukTM/uAjM14CMyUjLwITN)
- [更新日程](https://open.feishu.cn/document/ukTMukTMukTM/uEjM14SMyUjLxITN)
- [邀请/移除日程参与者](https://open.feishu.cn/document/ukTMukTMukTM/uIjM14iMyUjLyITN)
- [获取访问控制列表](https://open.feishu.cn/document/ukTMukTMukTM/uMjM14yMyUjLzITN)
- [创建访问控制](https://open.feishu.cn/document/ukTMukTMukTM/uQjM14CNyUjL0ITN)
- [删除访问控制](https://open.feishu.cn/document/ukTMukTMukTM/uUjM14SNyUjL1ITN)
- [查询日历的忙闲状态](https://open.feishu.cn/document/ukTMukTMukTM/uYjM14iNyUjL2ITN)
- [查询公共日历](https://open.feishu.cn/document/ukTMukTMukTM/ukDMwYjL5ADM24SOwAjN)
- [获取公共日历日程列表](https://open.feishu.cn/document/ukTMukTMukTM/uIzNwYjLycDM24iM3AjN)

<br>
如需适配协助，请联系[技术支持](https://applink.feishu.cn/T8wyfQh9cT2Q)。
