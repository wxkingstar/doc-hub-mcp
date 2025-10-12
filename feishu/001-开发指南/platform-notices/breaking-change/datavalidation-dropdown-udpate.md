<!--
title: 表格数据校验下拉列表相关接口变更
id: 7538351770684358658
fullPath: /uAjLw4CM/ugTN1YjL4UTN24CO1UjN/breaking-change/datavalidation-dropdown-udpate
updatedAt: 1755253141000
source: https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/breaking-change/datavalidation-dropdown-udpate
-->
# 表格数据校验下拉列表相关接口变更
### 变更事项

为了进一步优化表格性能，数据校验相关接口将于**2025年9月20日**起不再提供根据下拉列表 ID 操作的能力，转而提供根据 Range 操作的能力。根据 Range 操作的能力已经上线，请用户及时完成接口新参数的适配。

影响接口：
- [查询下拉列表设置](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/datavalidation/query-datavalidation)
- [更新下拉列表设置](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/datavalidation/update-datavalidation)
- [删除下拉列表设置](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/datavalidation/delete-datavalidation) 
### 潜在影响

**2025年9月20日**起，查询下拉列表设置接口将不会返回下拉列表的 ID，更新下拉列表设置接口和删除下拉列表设置接口将不允许使用下拉列表 ID 作为入参进行相关操作。如果用户不进行适配，使用下拉列表 ID 作为入参调用更新下拉列表设置接口或删除下拉列表设置接口，接口将会返回失败。

### 解决方案

更新下拉列表设置接口和删除下拉列表设置接口由基于下拉列表 ID 操作变更为基于 Range 进行操作。用户可从查询下拉列表设置接口查询到下拉列表对应的 Range，并调用更新下拉列表设置接口和删除下拉列表设置接口进行 Range 维度的操作。

新旧接口文档和变更如下：

| **新接口（Range）** | **旧接口（dataValidationId)** | **请求参数或响应体变更**                                                                                                                           |
| ----------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------ |
| [查询下拉列表设置](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/datavalidation/query-datavalidation)              |  [查询下拉列表设置](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/historic-version/docs/sheets/datavalidation/query-datavalidation)|响应体不再返回 `dataValidationId`，新增加返回 `ranges`|
| [更新下拉列表设置](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/datavalidation/update-datavalidation)               | [更新下拉列表设置](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/historic-version/docs/sheets/datavalidation/update-datavalidation) |请求路径参数删除 `dataValidationId`，请求体增加 `ranges`。响应体不再返回 `dataValidationId`
| [删除下拉列表设置](/ssl:ttdoc/ukTMukTMukTM/uATMzUjLwEzM14CMxMTN/datavalidation/delete-datavalidation)               | [删除下拉列表设置](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/historic-version/docs/sheets/datavalidation/delete-datavalidation) |请求体删除 `dataValidationIds`

特别注意，旧版更新下拉列表设置接口仅根据下拉列表 ID 进行更新，作用域是整个子表，即将整个子表设置了该数据校验的所有 Range 进行更新。如想使用新版更新下拉列表设置接口实现该能力，可通过多次调用查询下拉列表设置接口查询出整个子表的下拉列表和其对应的 Range，将 Range 数组进行合并，然后调用新版下拉列表设置接口，该接口支持多个 Range 批量操作。

**请使用了数据校验相关接口的应用及时完成接口参数变更的适配。若未在2025年9月20日前完成适配，应用的相关功能会不可用。**

### 联系方式

如需适配协助，请联系开放平台技术支持。