---
title: "h5sdk.config"
source_url: https://open.feishu.cn/document/web-app/gadget-api/open-ability/authentication/h5sdkconfig
last_remote_update: 2025-04-15
last_remote_update_timestamp: 1744683273000
---
最后更新于 2025-04-15

# h5sdk.config

用于对使用到的网页应用JSAPI进行鉴权，具体鉴权操作方法参见[步骤二：JSAPI 调用（可选）](https://open.feishu.cn/document/uYjL24iN/uEzM4YjLxMDO24SMzgjN)。

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **X** | **X** | **X** | **X** | /
网页应用 | V5.1.0+ | V5.1.0+ | V5.1.0+ | V7.35.0+ | /

## 输入

| 名称        | 数据类型   | 必填 | 描述                                                                              |
| --------- | ------ | -- | ------------------------------------------------------------------------------- |
| appId     | string | 是  | 应用的唯一标识，可在[开发者后台](https://open.feishu.cn/app?lang=zh-CN) > 应用详情页面 > 凭证与基础信息 内查看 |
| timestamp | long | 是  | 生成签名的毫秒级时间戳                                                                        |
| nonceStr  | string | 是  | 随机字符串                                                                           |
| signature | string | 是  | JSAPI 鉴权签名。内容必须小写。                                                                      |
| jsApiList | Array  | 是  | 需要调用的JSAPI列表                                                                    |
说明：appId、timestamp、nonceStr、signature 等鉴权参数来自接入方服务端，接入方服务端先获取 access_token，再获取 jsapi_ticket，最后生成 signature 并返回鉴权参数。

## 输出

`onSuccess`返回对象的属性：

| 名称          | 数据类型   | 描述           |
| ----------- | ------ | ------------ |
| session_key | string | 会话密钥，表明鉴权通过。 | 

## 示例代码

```
window.h5sdk.config({
    appId: appId,
    timestamp: timestamp,
    nonceStr: noncestr,
    signature: signature,
    jsApiList: jsApiList,
    //成功回调
    onSuccess: (res) => {
        console.log(`config success: ${JSON.stringify(res)}`);
    },
    //失败回调
    onFail: (err) => {
        console.log(`config failed: ${JSON.stringify(err)}`);
    },
});
```

## 错误码

`onFail` 返回对象中可能包含 errCode 属性和 errno 属性，均代表错误码。

**errCode 错误码**

错误码 | 描述 | 排查建议
--- | --- | ---
1012 | 参数类型错误 | 根据本文输入参数说明进行自检。
1014 | 网络异常错误 | 检查设备网络。
10001 | 网络请求失败 | 稍后重试。
10002 | 网络请求返回数据格式错误 | \-
333430 | userId 或者 appId 不合法 | \-
333440 | app 不存在 | 前往 **开发者后台 > 应用详情页 > 凭证与基础信息** 检查 appId 是否正确。
333441 | 签名错误 | 签名错误是指客户端将用户构造的 signature 字段传递至服务端验证时，与服务端构造的 signature 不一致，所以服务端会认为该签名不合法。  
![image.png](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/fe6c7b09105c16b704c444ce9ff634bf_eA2pblbx9M.png?height=393&lazyload=true&width=1113)  
实际报错时会返回开放平台服务端的 `signature`、`jsticket`、`nonce_str`、`url`、`timestamp` 信息，这些信息与你开发的项目中构造的鉴权参数有不一致的问题。  
```json  
{  
	"errorCode": 333441,  
	"errorMessage": "invalid signature: signature: c872b****, jsticket: g1014****, nonce_str: zdcW****, url: https://www.example.com, timestamp: %!s(int64=1234)"  
}  
```  
原因与排查方案：  
- 构建的参数不一致。排查方案：  
  	- 确认 config 接口内的 nonceStr 参数名为驼峰写法。  
    - 确认 config 接口内的 nonceStr、timestamp 参数与服务端生成签名时的 noncestr、timestamp 参数一致。  
    - 确认 config 接口内的 appid 参数与获取 access_token 时的 appid 参数一致。  
    - 确认 URL 是页面完整的 URL（请在当前页面`alert(location.href.split('#')[0])`确认），包括`http(s)://`部分，以及`?`后面的 GET 参数部分，但不包括`'#'(hash)`后面的部分。  
    - 确保使用的 access_token 和 jsapi_ticket 没有过期。  
    - 如果是单页面应用，且使用 react-router 或 vue-router 等（类似 pushState、replaceState）进行页面跳转时（即 vue-router 的 history 模式或者 react-router 的 browserHistory），可以尝试将最后一次不用 vue-router 或者 react-router 跳转的页面 URL 传到当前页面进行鉴权，该方式需要根据实际情况进行处理。  
- sha1 算法出错。需确认签名算法是否为 sha1。  
- 生成 verifyStr 规则错误。生成 verifyStr 字符串时，必须按照 jsapi_ticket、noncestr、timestamp、url 顺序进行拼接。
333442 | app 没找到有效的 jsapi_ticket | 检查 config 中的 app_id 与获取 jsapi_ticket 的 app_id 是否一致，或者所使用的 jsapi_ticket 是否已过期。如何获取 jsapi_tocket 参见[获取 JSAPI 临时授权凭证](https://open.feishu.cn/document/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/h5_js_sdk/authorization)。
333443 | 签名重复 | 10 分钟内再次验签，请 10 分钟后重试。
333444 | 签名过期 | 签名有效期为 10 分钟，每次调用 config 前重新计算签名，不建议缓存签名。
333445 | JSAPI 未授权 | 调用 Config 接口时，在参数 jsApiList 里添加相应 API。
333446 | JSAPI 不存在 | 前往 [H5 JSAPI 总览](https://open.feishu.cn/document/uYjL24iN/uMTMuMTMuMTM/) 查阅 JSAPI，确认是否写错。
333447 | 安全域名未设置 | 应用开发者需要在 **开发者后台 > 应用详情页 > 安全设置 > H5可信域名** 中设置需要调用 JSAPI 接口的页面所在域名。
333448 | 页面不在安全域名内 | 应用开发者需要在 **开发者后台 > 应用详情页 > 安全设置 > H5可信域名** 中检查需要调用 JSAPI 接口的页面所在域名。
333449 | 应用不可见 | 应用对该用户没有可见性，应用开发者需要在 **开发者后台 > 应用详情页 > 版本管理与发布 > 创建版本 > 可用范围** 中配置可见性。
333450 | 用户 open_id 不正确 | 需要检查传入的用户 open_id 是否正确。获取方式参考[如何获取 Open ID](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)。
9999169x | invalid session 用户登录态校验失败，x=[1-4] | \-

**errno 错误码**

关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
