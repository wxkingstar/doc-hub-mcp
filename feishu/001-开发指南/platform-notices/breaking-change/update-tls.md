<!--
title: 旧版审批 API TLS 版本升级通知
id: 7213254546478481411
fullPath: /uAjLw4CM/ugTN1YjL4UTN24CO1UjN/breaking-change/update-tls
updatedAt: 1698893380000
source: https://open.feishu.cn/document/faq/breaking-change/update-tls
-->
# 旧版审批 API TLS 升级通知
### 变更事项

为提升传输安全性，飞书将在 3 月 30 日晚 10 点进行域名（www.feishu.cn）的 TLS 版本升级变更操作，升级后 TLS 1.0及 1.1 版本请求将无法连接，仅支持 TLS1.2 及以上版本的客户端发起请求。部分使用旧版审批 OpenAPI 的应用需升级本地客户端 TLS 版本。

### 受影响范围

具体受影响 OpenAPI：[发送审批 Bot 消息](/ssl:ttdoc/ukTMukTMukTM/ugDNyYjL4QjM24CO0IjN)、[更新审批 Bot 消息](/ssl:ttdoc/ukTMukTMukTM/uAjNyYjLwYjM24CM2IjN)、[查询审批 ID（专用）](/ssl:ttdoc/ukTMukTMukTM/uEDN5UjLxQTO14SM0kTN) 等使用 www.feishu.cn 为域名的 OpenAPI。

### 预计生效时间

预计生效时间： **2023 年 3 月 30 日 22:00** 

### 潜在影响

若你的应用使用了 TLS 1.0、TLS 1.1 发起请求，请尽快升级相应服务端代码。

### 解决方案

1. 对于使用代码编写的应用，则可以通过升级本地代码 TLS 版本来完成升级。可参考[Java 版本升级指南](https://feishu.feishu.cn/docx/QlBvdiRtlonhCKxAEZOcfsNJnDe)、[Golang 版本升级指南](https://feishu.feishu.cn/docx/X3IdduYzMoIqonxDSBUcxe3Xn0a)、[Python 版本升级指南](https://feishu.feishu.cn/docx/DT32dkfXtosP0NxGhUtclu7nnae)。进行升级。
2. 对于使用低代码平台搭建的应用，则无需单独升级应用。

### 联系方式

如需协助解决，可联系应用的开发人员或你使用的应用搭建平台。


#### 附录：低版本客户端测试方法

**1.浏览器访问**

使用浏览器访问域名：[测试域名](https://netdetect.feishu-pre.cn)

如果浏览器为高版本，访问测试域名有正常内容返回；如果浏览器为低版本，浏览器将反馈“不兼容高版本TLS”的报错信息，请将浏览器升级至最新版本（或更换浏览器）

**2.调用API访问**

代码 GET 调用接口：https://netdetect.feishu-pre.cn


如果客户端TLS为高（安全）版本，访问测试域名有正常内容返回；如果客户端TLS为低版本，访问测试域名返回信息如下：

```
curl: (35) error:141E70BF:SSL routines:tls_construct_client_hello:no protocols available
```