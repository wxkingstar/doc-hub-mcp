---
title: "如何解决 tenant token invalid (99991663) 错误"
source_url: https://open.feishu.cn/document/faq/trouble-shooting/how-to-fix-99991663-error
---
最后更新于 2025-03-03

# 如何解决 tenant token invalid (99991663) 错误

##  问题现象

在调用 OpenAPI 时，有可能会出现 99991663 错误，该报错表现为接口返回体中 Code 为 99991663。

接口报错参考如下：

```json
{
  "code": 99991663,
  "msg": "Invalid access token for authorization. Please make a request with token attached.",
  "error": {
    "log_id": "202408271038458450E8497E60835abcef",
    "message": "Refer to the documentation to fix the error: https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-fix-99991663-error"
  }
}
```

## 可能原因

- 如果在仅支持 user_access_token 的 API 中使用 tenant_access_token 进行身份鉴权，会报该错误。

- 如果 API 支持使用 tenant_access_token 并报该错误，则表示开发者本次调用过程中使用的 tenant_access_token 已经失效或有误，飞书开放平台无法判断当前请求是否来自一个可信的用户，因此拦截了情况。

## 解决方法

查看当前调用的 API 是否支持 tenant_access_token：

- 如果 API 不支持 tenant_access_token，请使用 user_access_token 调用 API。

- 如果接口支持 tenant_access_token，则表示 tenant_access_token 已过期或有误，你需参考以下方式重新获取可用的 tenant_access_token。

### API 调试台场景
**注意事项**：私有化环境不支持 API 调试台。

如果你使用飞书开放平台提供的 API 调试台调用接口，可以通过 API 调试台自带功能刷新 Tenant Access Token，并使用新的 Tenant Access Token 调用 OpenAPI。

进入[API 调试台](https://open.feishu.cn/api-explorer?from=op_doc_tab)，找到需要调用的 API，在 **请求头** > **Authorization** 输入框右侧重新获取 Token。

![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/9bcc24b0c7bbcc2574280ec9f72ecf73_pekb0lH2Oz.png?height=874&lazyload=true&maxWidth=600&width=2942)

### API 调用场景
**注意事项**：飞书开放平台提供了服务端 SDK ，提供了完整的访问凭证（AccessToken）生命周期管理能力，无需开发者自己获取并刷新访问凭证。点击[了解如何使用飞书开放平台服务端 SDK](https://open.feishu.cn/document/ukTMukTMukTM/uETO1YjLxkTN24SM5UjN)。

如果你是自行编写代码获取 Token，则可以自行参考 [获取访问凭证](https://open.feishu.cn/document/ukTMukTMukTM/uMTNz4yM1MjLzUzM#a8683ac2) 提供的方法，再次调用飞书开放平台获取 Tenant Acess Token 的接口，并使用最新的 Tenant Access Token 请求 OpenAPI。
