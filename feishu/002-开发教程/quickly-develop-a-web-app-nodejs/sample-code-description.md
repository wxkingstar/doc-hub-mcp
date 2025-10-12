<!--
title: 示例代码说明
id: 7241497122184216577
fullPath: /home/quickly-develop-a-web-app-nodejs/sample-code-description
updatedAt: 1714099871000
source: https://open.feishu.cn/document/quickly-develop-a-web-app-nodejs/sample-code-description
-->
# 示例代码说明

教程提供的[示例代码](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b411101a8db9b626c056c4945bfc9256_6AKzAKSTdY.zip)完成了网页应用的免登和鉴权的前后端处理，本文主要介绍实现免登和鉴权处理的原理。

## 代码结构

以下为示例代码的目录结构与部分核心代码文件说明：

```
|web_app_quick_start
     |public
         |index.html         -- 前端入口index.html
     |server
         |server_config.js   -- 服务端配置文件，主要存AppID和AppSecret等，由npm run config生成
         |server_util.js     -- 服务端工具类
         |server.js          -- 核心后代代码：请求处理，路由注册等
     |src
         |components         
             |useapi         -- 使用JSAPI示范 React组件
             |userinfo       -- 显示用户信息 React组件
         |pages         
             |home           -- 主页组件
             |notfound       -- notfound页组件
         |utils        
             |auth_access_util.js   -- 处理免登和鉴权的核心处理
         |config        
             |client_config.js      -- 前端配置文件，主要存AppID和AppSecret等，由npm run config生成
             
         |App.css
         |App.js              -- App组件，前端路由注册
         |index.css
         |index.js            -- 前端的入口JS文件
     |package.json            -- 依赖配置文件
     |README.md               -- 说明文件
```

## 代码流程

本[示例代码](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/b411101a8db9b626c056c4945bfc9256_6AKzAKSTdY.zip)作为应用的前端和服务端，建设了免登和鉴权处理，具体处理流程如下图所示：
- **免登流程**
  
  先获取应用授权凭证 [app_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/app_access_token_internal)，再综合去获取用户授权凭证 [user_access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/authen-v1/access_token/create)。
  
  ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fbb50e70795fcef72a8dc4a198a7505c_6T6suyu3ks.png?height=634&lazyload=true&width=924)

- **鉴权流程**

  先获取自建应用授权凭证 [tenant_access_token](/ssl:ttdoc/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal)，再据此获取 [jsapi_ticket](/ssl:ttdoc/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/h5_js_sdk/authorization)，然后计算签名 signature，最后通过 window.h5sdk.config 进行鉴权。
  
  ![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/5cf59e28706562dce73c38f89b6aa15d_SQkXrAcxsu.png?height=794&lazyload=true&width=914)

## server.js 介绍

### 定义服务端免登处理

```JavaScript
//处理免登请求，返回用户的user_access_token
async function getUserAccessToken(ctx) {
    console.log("\n-------------------[接入服务端免登处理 BEGIN]-----------------------------")
    serverUtil.configAccessControl(ctx)
    console.log(`接入服务方第① 步: 接收到前端免登请求`)
    const accessToken = ctx.session.userinfo
    const lkToken = ctx.cookies.get(LJ_TOKEN_KEY) || ''
    if (accessToken && accessToken.access_token && lkToken.length > 0 && accessToken.access_token == lkToken) {
        console.log("接入服务方第② 步: 从Session中获取user_access_token信息，用户已登录")
        ctx.body = serverUtil.okResponse(accessToken)
        console.log("-------------------[接入服务端免登处理 END]-----------------------------\n")
        return
    }
    let code = ctx.query["code"] || ""
    console.log("接入服务方第② 步: 获取登录预授权码code")
    if (code.length == 0) { //code不存在
        ctx.body = serverUtil.failResponse("登录预授权码code is empty, please retry!!!")
        return
    }
    //【请求】app_access_token：https://open.feishu.cn/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/app_access_token_internal
    console.log("接入服务方第③ 步: 根据AppID和App Secret请求应用授权凭证app_access_token")
    const internalRes = await axios.post("https://open.feishu.cn/open-apis/auth/v3/app_access_token/internal", {
        "app_id": serverConfig.config.appId,
        "app_secret": serverConfig.config.appSecret
    }, { headers: { "Content-Type": "application/json" } })
    if (!internalRes.data) {
        ctx.body = serverUtil.failResponse("app_access_token request error")
        return
    }
    if (internalRes.data.code != 0) { //非0表示失败
        ctx.body = serverUtil.failResponse(`app_access_token request error: ${internalRes.data.msg}`)
        return
    }
    console.log("接入服务方第④ 步: 获得颁发的应用授权凭证app_access_token")
    const app_access_token = internalRes.data.app_access_token || ""
    console.log("接入服务方第⑤ 步: 根据登录预授权码code和app_access_token请求用户授权凭证user_access_token")
    //【请求】user_access_token: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/authen-v1/access_token/create
    const authenv1Res = await axios.post("https://open.feishu.cn/open-apis/authen/v1/access_token", { "grant_type": "authorization_code", "code": code }, {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + app_access_token
        }
    })
    if (!authenv1Res.data) {
        ctx.body = serverUtil.failResponse("access_toke request error")
        return
    }
    if (authenv1Res.data.code != 0) {  //非0表示失败
        ctx.body = serverUtil.failResponse(`access_toke request error: ${authenv1Res.data.msg}`)
        return
    }
    console.log("接入服务方第⑥ 步: 获取颁发的用户授权码凭证的user_access_token, 更新到Session，返回给前端")
    const newAccessToken = authenv1Res.data.data
    if (newAccessToken) {
        ctx.session.userinfo = newAccessToken
        serverUtil.setCookie(ctx, LJ_TOKEN_KEY, newAccessToken.access_token || '')
    } else {
        serverUtil.setCookie(ctx, LJ_TOKEN_KEY, '')
    }
    ctx.body = serverUtil.okResponse(newAccessToken)
    console.log("-------------------[接入服务端免登处理 END]-----------------------------\n")
}
```

代码说明：

- 以上代码块的 8~13 行，演示了从 Session 中获取 user_access_token，并提前返回。

- 以上代码块的 53~59 行，演示了获取到新的 user_access_token，并更新到 Session。

- 时效性说明：用户信息中的 user_access_token 具有一定的时效性，最大有效期为 2 小时左右，而服务端许多 API（例如，[文档类](/ssl:ttdoc/ukTMukTMukTM/uUDN04SN0QjL1QDN/document-docx/docx-overview)）需要 user_access_token 作为访问凭证之一。如果你需要调用这类 API，服务端 Session 存储 user_access_token 保证在有效期内均可直接使用。如果期望刷新 user_access_token，可以参考[刷新 access_token](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/authen-v1/authen/refresh_access_token)。

:::note
优化建议：获取已登录用户信息后，可以使用服务端 Session 缓存，从而可以避免反复向认证中心发出请求，造成不必要的网页加载延迟，或者因为突破服务端 API 的调用频率限制而失败。
:::

### 定义服务端鉴权处理

```JavaScript
//处理鉴权参数请求，返回鉴权参数
async function getSignParameters(ctx) {
    console.log("\n-------------------[接入方服务端鉴权处理 BEGIN]-----------------------------")
    serverUtil.configAccessControl(ctx)
    console.log(`接入服务方第① 步: 接收到前端鉴权请求`)
    const url = ctx.query["url"] ||""
    const tickeString = ctx.cookies.get(LJ_JSTICKET_KEY) || ""
    if (tickeString.length > 0) {
        console.log(`接入服务方第② 步: Cookie中获取jsapi_ticket，计算JSAPI鉴权参数，返回`)
        const signParam = calculateSignParam(tickeString, url)
        ctx.body = serverUtil.okResponse(signParam)
        console.log("-------------------[接入方服务端鉴权处理 END]-----------------------------\n")
        return
    }
    console.log(`接入服务方第② 步: 未检测到jsapi_ticket，根据AppID和App Secret请求自建应用授权凭证tenant_access_token`)
    //【请求】tenant_access_token：https://open.feishu.cn/document/ukTMukTMukTM/ukDNz4SO0MjL5QzM/auth-v3/auth/tenant_access_token_internal
    const internalRes = await axios.post("https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal", {
        "app_id": serverConfig.config.appId,
        "app_secret": serverConfig.config.appSecret
    }, { headers: { "Content-Type": "application/json" } })
    if (!internalRes.data) {
        ctx.body = serverUtil.failResponse('tenant_access_token request error')
        return
    }
    if (internalRes.data.code != 0) {
        ctx.body = serverUtil.failResponse(`tenant_access_token request error: ${internalRes.data.msg}`)
        return
    }
    console.log(`接入服务方第③ 步: 获得颁发的自建应用授权凭证tenant_access_token`)
    const tenant_access_token = internalRes.data.tenant_access_token ||""
    console.log(`接入服务方第④ 步: 请求JSAPI临时授权凭证`)
    //【请求】jsapi_ticket：https://open.feishu.cn/document/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/h5_js_sdk/authorization
    const ticketRes = await axios.post("https://open.feishu.cn/open-apis/jssdk/ticket/get", {}, {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Bearer " + tenant_access_token
        }
    })
    if (!ticketRes.data) {
        ctx.body = serverUtil.failResponse('get jssdk ticket request error')
        return
    }
    if (ticketRes.data.code != 0) { //非0表示失败
        ctx.body = serverUtil.failResponse(`get jssdk ticket request error: ${ticketRes.data.msg}`)
        return
    }
    console.log(`接入服务方第⑤ 步: 获得颁发的JSAPI临时授权凭证，更新到Cookie`)
    const newTicketString = ticketRes.data.data.ticket || ""
    if (newTicketString.length > 0) {
        serverUtil.setCookie(ctx, LJ_JSTICKET_KEY, newTicketString)
    }
    console.log(`接入服务方第⑥ 步: 计算出JSAPI鉴权参数，并返回给前端`)
    const signParam = calculateSignParam(newTicketString, url)
    ctx.body = serverUtil.okResponse(signParam)
    console.log("-------------------[接入方服务端鉴权处理 END]-----------------------------\n")
}
//计算鉴权参数
function calculateSignParam(tickeString, url) {
    const timestamp = (new Date()).getTime()
    const verifyStr = `jsapi_ticket=${tickeString}&noncestr=${serverConfig.config.signRandomString}&timestamp=${timestamp}&url=${url}`
    let signature = CryptoJS.SHA1(verifyStr).toString(CryptoJS.enc.Hex)
    const signParam = {
        "app_id": serverConfig.config.appId,
        "signature": signature,
        "noncestr": serverConfig.config.signRandomString,
        "timestamp": timestamp,
    }
    return signParam
}
```

代码说明：

- 以上代码块的 7~14 行，演示了从 Cookie 中获取 jsapi_ticket ，且提前计算鉴权参数并返回。

- 以上代码块的 48~51 行，演示了获取到新的 jsapi_ticket，并更新到 Cookie。

:::note
优化建议：jsapi_ticket（JSAPI 临时授权凭证）具备有效期，有效期为 2 小时。开发者可以缓存 jsapi_ticket （缓存过期时间为 2 小时）到 Cookie。在有效期内，能减少短时间内频繁请求开放平台 jsapi_ticket，提升业务后台处理效率。
:::

### API 服务注册

```JavaScript
router.get(serverConfig.config.getUserAccessTokenPath, getUserAccessToken)
router.get(serverConfig.config.getSignParametersPath, getSignParameters)
```

代码说明：

以上代码使用了 Node.js 的 Koa 框架，通过 koa-router 路由中间件提供的 get() 方法来处理两个不同的 HTTP GET 请求：getUserAccessToken 和 getSignParameters。

- 当有 GET 请求访问 serverConfig.config.getUserAccessTokenPath 时，koa-router 会调用 getUserAccessToken 函数来处理请求。

- 当有 GET 请求访问 serverConfig.config.getSignParametersPath 时，koa-router 会调用 getSignParameters 函数来处理请求。

## auth_access_util.js 介绍

### 定义前端免登处理

```JavaScript
/// ---------------- 应用免登 部分 核心JS -------------------------
const LJ_TOKEN_KEY = 'lk_token'
//处理用户免登逻辑
export async function handleUserAuth(complete) {
    console.log("\n----------[接入方网页免登处理 BEGIN]----------")
    let lj_tokenString = Cookies.get(LJ_TOKEN_KEY) || ""
    if (lj_tokenString.length > 0) {
        console.log("接入方前端[免登处理]第① 步: 用户已登录，请求后端验证...")
        requestUserAccessToken("", complete)
    } else {
        if (!window.h5sdk) {
            console.log('invalid h5sdk')
            complete()
            return
        }
        console.log("接入方前端[免登处理]第① 步: 依据App ID调用JSAPI tt.requestAuthCode 请求免登授权码")
        //依据App ID调用JSAPI tt.requestAuthCode 请求登录预授权码code
        window.h5sdk.ready(() => {
            console.log("window.h5sdk.ready");
            window.tt.requestAuthCode({
                appId: clientConfig.appId,
                success: (info) => {
                    const code = info.code
                    if (code.length <= 0) {
                        console.error('auth code为空')
                        complete()
                    } else {
                        requestUserAccessToken(code, complete)
                    }
                },
                fail: (error) => {
                    complete()
                    console.error("window.tt.requestAuthCode", error)
                }
            });
        });
    }
}
function requestUserAccessToken(code, complete) {
   
    // 获取user_access_token信息
    console.log("接入方前端[免登处理]第② 步: 去接入方服务端获取user_access_token信息")
    axios.get(`${getOrigin(clientConfig.apiPort)}${clientConfig.getUserAccessTokenPath}?code=${code}`,
        { withCredentials: true }   //调用时设置 请求带上cookie
    ).then(function (response) {  // ignore_security_alert
        if (!response.data) {
            console.error(`${clientConfig.getUsee} response is null`)
            complete()
            return
        }
        const data = response.data.data
        if (data) {
            console.log("接入方前端[免登处理]第③ 步: 获取user_access_token信息")
            complete(data)
            localStorage.setItem(LJ_TOKEN_KEY, data.access_token)
            console.log("----------[接入网页方免登处理 END]----------\n")
        } else {
            console.error("接入方前端[免登处理]第③ 步: 未获取user_access_token信息")
            complete()
            console.log("----------[接入网页方免登处理 END]----------\n")
        }
    }).catch(function (error) {
        console.log(`${clientConfig.getSignParametersPath} error:`, error)
        complete()
        console.log("----------[接入网页方免登处理 END]----------\n")
    })
}
```

### 定义 JSAPI 鉴权处理

```JavaScript
/// ---------------- JSAPI鉴权 部分 -------------------------
export async function handleJSAPIAccess(complete) {
    console.log("\n----------[接入方网页JSAPI鉴权处理 BEGIN]----------")
    const url = encodeURIComponent(window.location.href.split("#")[0]);
    console.log("接入方前端[JSAPI鉴权处理]第① 步: 请求JSAPI鉴权参数")
    // 向接入方服务端发起请求，获取鉴权参数（appId、timestamp、nonceStr、signature）
    const res = await axios.get(`${getOrigin(clientConfig.apiPort)}${clientConfig.getSignParametersPath}?url=${url}`,
        { withCredentials: true }
    )
    if (!res.data) {
        console.error(`${clientConfig.get_auth_parameters} fail`)
        complete(false)
        return
    }
    const data = res.data.data
    console.log("接入方前端[JSAPI鉴权处理]第② 步: 获得鉴权参数")
    if (!data) {
        console.error('获取参数失败')
        complete(false)
        return
    }
    console.log("接入方前端[JSAPI鉴权处理]第③ 步: 通过window.h5sdk.config进行鉴权")
    configJSAPIAccess(data, complete)
}
//config JSAPI鉴权
function configJSAPIAccess(data, complete) {
    //配置要使用的jsapi列表
    let jsApiList = [
        "tt.getSystemInfo",
        "tt.showActionSheet",
        "tt.previewImage",
        "tt.showToast",
    ]
    // 调用config接口进行鉴权
    window.h5sdk.config({
        appId: data.app_id,
        timestamp: data.timestamp,
        nonceStr: data.noncestr,
        signature: data.signature,
        jsApiList: jsApiList,
        //成功回调
        onSuccess: (res) => {
            console.log(`鉴权成功: ${JSON.stringify(res)}`);
            window.tt.showToast({
                title: "鉴权成功",
                icon: "success",
                duration: 2000
            });
            complete(true)
            console.log("\n----------[接入方网页鉴权处理 END]----------")
        },
        //失败回调
        onFail: (err) => {
            window.tt.showToast({
                title: "鉴权失败",
                icon: "error",
                duration: 2000
            });
            complete(false)
            console.error(`鉴权失败原因: ${JSON.stringify(err)}`);
        },
    });
}
```

### 调用鉴权处理

```JavaScript
//鉴权处理
handleJSAPIAccess((isSucces) => {
   //...
})
```

### 调用免登处理

```JavaScript
//免登处理
handleUserAuth((userInfo) => {
    //...
})
```