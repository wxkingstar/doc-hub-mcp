<!--
title: 关于部分网页应用 API 下线的适配 FAQ
id: 7156846472206123012
fullPath: /uAjLw4CM/ugTN1YjL4UTN24CO1UjN/breaking-change/faqs-on-removal-of-4-deprecated-web-app-apis
updatedAt: 1666339132000
source: https://open.feishu.cn/document/faq/breaking-change/faqs-on-removal-of-4-deprecated-web-app-apis
-->
# 关于部分网页应用 API 下线的适配 FAQ

## Q1: 有哪些网页应用 API 即将下线？

我们本次将对`device.geolocation.get`，`device.geolocation.start`，`device.geolocation.stop`，`biz.user.getUserInfo` 4 个 API 进行下线操作。
  

## Q2: 下线的时间是什么时候？将会有什么表现？

我们将在 2022/05/30 开始进行分批下线，如果您近期仍在使用相关 API，仍可使用至 2022/12/30，2022/12/30 之后将全部下线。
下线后，如果仍然使用相关 API，将收到调用失败的返回结果。
  

## Q3：如果仍然需要使用相关能力，应该怎么适配？

本次下线的 API 均为历史版本 API。如果仍需使用相关能力，可按照下列表格映射进行适配。
**注：网页应用在使用新版** **API** **时，需进行鉴权操作，可按照「****[网页应用鉴权流程](https://open.feishu.cn/document/uYjL24iN/uEzM4YjLxMDO24SMzgjN)****」进行鉴权。**
| **已废弃** **API**            | **可替换** **API**                                                                                            |
| -------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `device.geolocation.get`   | `tt.getLocation`([文档](https://open.feishu.cn/document/uYjL24iN/uUTOz4SN5MjL1kzM))                          |
| `device.geolocation.start` | `tt.startLocationUpdate` ([文档](https://open.feishu.cn/document/uYjL24iN/uMTOuMTOuMTO/startlocationupdate)) |
| `device.geolocation.stop`  | `tt.stopLocationUpdate` ([文档](https://open.feishu.cn/document/uYjL24iN/uMTOuMTOuMTO/stoplocationupdate))   |
| `biz.user.getUserInfo`     | `tt.getUserInfo` ([文档](https://open.feishu.cn/document/uYjL24iN/ucjMx4yNyEjL3ITM))