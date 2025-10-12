<!--
title: 终端用户授权概述
id: 7330871628166397980
fullPath: /common-capabilities/sso/end-user-consent-overview
updatedAt: 1706851852000
source: https://open.feishu.cn/document/sso/web-application-end-user-consent/end-user-consent-overview
-->
# 概述
在 OAuth 2.0 协议中，scope 字段为应用定义所请求资源的[访问权限](/ssl:ttdoc/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN)。为了支持在您需要时向用户请求资源的授权，飞书 user_access_token 的授权接口当前具备增量授权的能力。借助该能力，您可以在发起授权时根据需要传入相应的权限点位，并在用户同意授权后获得一个包含已授权权限的 user_access_token。用户可以通过飞书帐号安全中心的[应用授权管理模块](https://accounts.feishu.cn/accounts/security/page/apply_authorization/)查看自己对应用的授权记录并可以选择解除已授权应用的权限，最大程度地保障用户的数据安全。

开放平台当前支持[浏览器应用](/ssl:ttdoc/common-capabilities/sso/web-application-end-user-consent/guide)，[端内网页应用](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/development-guide/webapp-incremental-authorization-access-guide)和[小程序](/ssl:ttdoc/uYjL24iN/ukzMzUjL5MzM14SOzMTN/gadget-incremental-authorization-access-guide)的终端用户授权流程。

# 适用场景

当您的应用需要使用 user_access_token 代表用户去获取资源或执行操作时，需要使用增量授权流程以获取用户的许可，应用无法代表用户对未授权的资源进行越权访问与操作。

# 对接建议

1. 在申请权限开通与请求用户进行授权的过程中，建议遵循最小权限原则。仅申请开通应用所需的权限点位，对于已开通但是不再需要的权限点位，建议及时取消开通。在请求用户授权的流程中，建议仅申请当前需要的权限点位。对于暂时不需要的权限点位，可以在用户的后续使用过程中使用增量授权流程来获得授权。
2. 建议您针对用户拒绝授权的场景设计相应的产品降级流程，并在 redirect uri 收到相应错误码时引导用户依旧能够平顺的使用您的应用。
3. 在用户撤销授权后，存量的 user_access_token 以及 refresh_token 将失效，建议设计相应产品流程重新向用户发起授权。
