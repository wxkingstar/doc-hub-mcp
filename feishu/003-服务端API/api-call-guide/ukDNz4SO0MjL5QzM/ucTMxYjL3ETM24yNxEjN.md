<!--
title: 设置 IP 白名单
id: 6907569742384824322
fullPath: /ukTMukTMukTM/ucTMxYjL3ETM24yNxEjN
updatedAt: 1698376549000
source: https://open.feishu.cn/document/server-docs/api-call-guide/calling-process/set-ip-allowlist
-->
# 设置 IP 白名单

## 功能简介

为了提高应用访问的安全性，开发者可以通过 IP 白名单功能设置能够合法访问飞书服务端 API 的 IP 列表，不在白名单列表中的 IP 地址的请求会被拒绝，并返回错误提示信息。错误码为 99991401，有关该错误码的详细介绍，参考[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)。

:::note
- IP 白名单对 API 访问凭证（access_token）相关接口不生效。
- 配置 IP 白名单后，立即生效。
- 支持配置多个 IP 地址。
-  IP 白名单功能默认不开启，如需配置，则需手动配置以开启相关能力。
:::

## 使用限制

- IP 地址只能为 IPv4 地址，不支持 IPv6 地址，且必须是公网 IP 地址。

  要了解如何获取公网 IP 地址，参考[通用错误码](/ssl:ttdoc/ukTMukTMukTM/ugjM14COyUjL4ITN)介绍中对错误码 99991401 给出的排查建议。
- 仅支持配置单个 IP 地址，不支持配置一个 IP 网段。例如不能配置为 172.170.0.0，表示将 172.170.x.x 网段设置为 IP 白名单。


## 操作方式

1. 登录[开发者后台](https://open.feishu.cn/app)。
2. 在应用列表中，点击指定应用，进入应用详情页。
3. 点击 **安全设置**，并定为到 **IP 白名单**部分。

     ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/ad8d06fbb19efd9fb1b18794847aa60f_XLtckUWExP.png?height=481&lazyload=true&maxWidth=650&width=1319)
     
4. 填写有效的 IPv4 地址，点击 **添加**。
