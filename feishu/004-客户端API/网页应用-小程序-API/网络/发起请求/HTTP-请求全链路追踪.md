---
title: "HTTP 请求全链路追踪"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/network/initiating-request/http-request-full-link-tracing
last_remote_update: 2023-08-31
last_remote_update_timestamp: 1693474210000
---
最后更新于 2023-08-31

# HTTP 请求全链路追踪

HTTP 请求全链路追踪是小程序内，所有 HTTP 请求的端到端链路追踪方式。

## 功能简介

小程序在使用 [tt.request](https://open.feishu.cn/document/uYjL24iN/uIDMx4iMwEjLyATM)、[tt.uploadFile](https://open.feishu.cn/document/uYjL24iN/uYDMx4iNwEjL2ATM)、[tt.downloadFile](https://open.feishu.cn/document/uYjL24iN/ucDMx4yNwEjL3ATM) 时，引擎会自动生成一个唯一的请求 ID，并设置到请求头（header）的 `x-request-id`、`x-tt-logid` 内，发送到服务端。

在上述接口的 `SuccessCallback`、`FailCallback`、`Result` 中，均会新增 `trace` 字段，字段值（value）为请求 ID。

## 注意事项

- 飞书客户端 V4.7 及以上的版本支持 HTTP 请求全链路追踪。

- `x-request-id`、`x-tt-logid` 作为小程序的保留 header，如果使用，可能会导致 header 内容被覆盖。

## 应用场景

- 场景一：对于接收小程序 request 请求的后端服务，将 header 内的 `x-request-id` 作为上下文，用于问题的诊断和全链路追踪。

- 场景二：对于小程序业务，在自建的网络请求埋点或日志中，加入返回的 `trace`，用于问题的诊断和全链路追踪。

- 场景三：当问题发生时，可根据客户端日志、埋点，或业务日志、埋点，或后端日志、埋点进行请求 ID 的查询与诊断。
