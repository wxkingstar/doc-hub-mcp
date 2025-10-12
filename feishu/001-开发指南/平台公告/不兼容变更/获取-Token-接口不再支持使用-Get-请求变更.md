---
title: "获取 Token 接口不再支持使用 Get 请求变更"
source_url: https://open.feishu.cn/document/faq/breaking-change/the-get-token-api-no-longer-supports-using-get-requests
---
最后更新于 2022-12-26

# 获取 Token 接口不再支持使用 Get 请求变更

## 变更事项

为了防止网络攻击，提高服务的安全性，我们将调整获取 Token 相关接口，将不再支持使用 GET 方法请求来获取 Token，仅支持使用 POST 方法发起请求。

变更接口：

- [自建应用获取 tenant_access_token](https://open.feishu.cn/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal)
- [自建应用获取 app_access_token](https://open.feishu.cn/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/app_access_token_internal)
- [商店应用获取 app_access_token](https://open.feishu.cn/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/app_access_token)
- [商店应用获取 tenant_access_token](https://open.feishu.cn/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token)

## 生效日期

2023 年 2 月 28 日

## 潜在影响

平台升级结束后，若相关获取 Token 接口调用没有进行更新，则无法获取 Token。

## 解决方案

根据 API 接口文档，对接口调用方式进行调整，将使用 GET 请求的方式替换为使用 POST 请求。

如需适配协助，请洽客服支持
