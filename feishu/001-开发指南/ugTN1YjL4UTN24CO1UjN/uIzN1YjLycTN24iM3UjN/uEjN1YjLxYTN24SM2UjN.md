<!--
title: 授权凭证
id: 6907569523177848833
fullPath: /ugTN1YjL4UTN24CO1UjN/uEjN1YjLxYTN24SM2UjN
updatedAt: 1750819998000
source: https://open.feishu.cn/document/faq/server-side-generic-questions/authorization-credential
-->
# 授权凭证

本文提供授权凭证相关的常见问题与解决方案。

### 我之前获取到的 user_access_token 以 u- 开头，为什么现在不以 u- 开头了？

获取 user_access_token 的接口已迭代更新，现在使用[获取 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/get-user-access-token)、[刷新 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/refresh-user-access-token) 接口获取到的 user_access_token 示例值为 `eyJhbGciOiJFUzI1NiIs**********X6wrZHYKDxJkWwhdkrYg`。

若你仍在使用旧版本的获取 user_access_token 接口，则仍会返回以 `u-` 开头的 token，推荐你更换为 [获取 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/get-user-access-token)、[刷新 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/refresh-user-access-token) 接口获取 user_access_token。

### app_access_token 的返回值一定是 a 开头的吗？tenant_access_token 的返回值一定是 t 开头的吗？

答：以实际返回值为准，开头首字母不一定是 a 或者 t。


### 在API的具体参数说明中，请求 header 部分 Authorization 参数中提到的 Bearer <XXX_access_token> 要怎么输入？

答：将 ==*Bearer <XXX_access_token>*== 填写在请求的 header 里即可，如下图举例。

![图片名称](//sf3-cn.feishucdn.com/obj/website-img/f15975a4f8dc41d2d9640578282855f0_g99R5jB7Om.png?height=48&lazyload=true&width=652)


### 生成了新的 user_access_token 后，原有的 refresh_token 是否有效？

答：生成新的==user_access_token==之后，会返回新的==refresh_token==，原有的==user_access_token==和==refresh_token==都会失效。再次刷新==access_token==时需用新返回的 ==refresh_token==。

### 如何更新 token？

 答：
 
 1. ==app_access_token==和==tenant_access_token==需要重新获取，获取方式参见[获取访问凭证](/ssl:ttdoc/ukTMukTMukTM/uMTNz4yM1MjLzUzM)。
 
 2. ==user_access_token==根据不同的登录方式，更新方式不同：
    
    - 通过网页扫码登录，使用[获取 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/get-user-access-token) 或 [刷新 user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/authentication-management/access-token/refresh-user-access-token) 获取 user_access_token。
    
    - 通过小程序登录，需要在小程序内调用 [requestAccess](/ssl:ttdoc/uYjL24iN/uUzMuUzMuUzM/requestaccess) 获取 code。


### 重定向 URL 支持使用正则表达式或者通配符进行配置吗？

答：出于对安全等方面考虑，目前不支持 URL 使用部分正则表达式符号或通配符来匹配域名。如：不支持以 *. 表示所有域名、不支持以 * .feishu. * .表示一系列域名
