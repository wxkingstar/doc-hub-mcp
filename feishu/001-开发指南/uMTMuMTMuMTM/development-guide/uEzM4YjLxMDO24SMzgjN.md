<!--
title: 步骤二（可选）：鉴权调用 JSAPI
id: 6911313297018093570
fullPath: /uYjL24iN/uEzM4YjLxMDO24SMzgjN
updatedAt: 1740553580000
source: https://open.feishu.cn/document/client-docs/h5/development-guide/step-2:-call-jsapi(optional)
-->
# 步骤二（可选）：鉴权调用 JSAPI

在开放平台创建好自建应用后，即可在本地开发相应的 Web 项目。如果你的 Web 项目需要调用 [H5 JSAPI ](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/)，则需要先通过鉴权。JSAPI 鉴权是指飞书验证网页应用有权限访问的 JSAPI 范围。本文主要介绍 JSAPI 鉴权的工作流程，以及各飞书版本的鉴权策略。

:::note
**示例代码**
<br>
关于如何在 Web 项目中实现 JSAPI 鉴权，开放平台提供了相应的网页应用开发教程。开发教程包含完整的网页应用示例代码，你可以查看代码介绍、体验开发流程，从而帮助你了解和使用 JSAPI 鉴权。详情参见[快速开发网页应用](/ssl:ttdoc/home/integrating-web-apps-in-5-minutes/debug-and-release)。
:::


## 鉴权流程

网页应用的 JSAPI 鉴权是从应用页面发起的，如果前端页面调用需要鉴权的 JSAPI 方法，则在页面加载时需要向服务端发起请求，获取鉴权参数（appId、timestamp、nonceStr、signature）。通过这些参数，前端页面调用 [config](/ssl:ttdoc/uYjL24iN/uQjMuQjMuQjM/authentication/h5sdkconfig) 接口进行鉴权，鉴权成功后即可调用 JSAPI。

![](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/a70b9c4432edaaeac1eb3b6e84284758_qVERoslVhF.png?height=794&lazyload=true&maxWidth=750&width=914)


## 注意事项

- 获取 **access_token**、**jsapi_ticket** 等鉴权流程的详细介绍，可参见[示例代码介绍](/ssl:ttdoc/home/integrating-web-apps-in-5-minutes/debug-and-release)。

- 网页应用 JSAPI 列表可参见 [H5 JSAPI 总览](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/)。 除了 [requestAuthCode](/ssl:ttdoc/uYjL24iN/uUzMuUzMuUzM/20220308)、[closeWindow](/ssl:ttdoc/uYjL24iN/uYTOuYTOuYTO/closewindow)、[requestAccess](/ssl:ttdoc/uYjL24iN/uUzMuUzMuUzM/requestaccess) API，其它所有 JSAPI 在页面被调用时，均需要先完成鉴权。

- 接入方前端调用 JSAPI 前的鉴权过程，需要接入方服务端配合完成。建议你合理安排前端和服务端开发人员共同参与业务代码的编写。

- 接入方前端只能调用 JSAPI，如果你需要调用服务端 API，请在接入方服务端调用，详情参见 [如何调用服务端API](/ssl:ttdoc/ukTMukTMukTM/uITNz4iM1MjLyUzM)。

## 鉴权策略

为了兼顾安全性和便捷性，网页应用的鉴权策略经过了多个版本的迭代。

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:45%">版本</md-th>
<md-th style="width:55%">说明</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>容器级别的鉴权策略（飞书版本 <  V4.0）</md-td>
<md-td>网页容器简单来说是网页所在的环境，从客户端视角来看：

- Android 端：一个 Activity 对应一个容器。
- iOS 端：一个 ViewController 对应一个容器。鉴权信息作用域为网页应用容器，即容器内只需要鉴权一次，便可在应用容器的生命周期内有效。</md-td>
</md-tr>

<md-tr>
<md-td>URL 级别的鉴权策略（V4.0 <= 飞书版本 < V5.1）</md-td>
<md-td>鉴权信息作用域为 URL，URL 改变后需要重新鉴权。</md-td>
</md-tr>

<md-tr>
<md-td>染色级别的鉴权策略（飞书版本 >= V5.1 ）</md-td>
<md-td>在 URL 的基础上，增加了染色机制，即只要在当前页面的回退页面栈中出现过当前页面的父路径，且该父路径鉴权通过包含应用鉴权信息，则该页面就可以被染上同样的应用鉴权信息。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

### 示例一

假设打开 pathA 后获得了应用鉴权信息 a1，接着打开 pathB 的鉴权情况如下表所示。
- pathA 指 http://open.feishu.cn/home
- pathB 指 http://open.feishu.cn/detail
  
:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">鉴权策略</md-th>
<md-th style="width:25%">打开 pathA</md-th>
<md-th style="width:55%">打开 pathB</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>容器级别</md-td>
<md-td>获得鉴权信息 a1</md-td>
<md-td>仍可获得鉴权信息 a1。

原因：在同一容器生命周期内，因此仍然可以获得鉴权信息。</md-td>
</md-tr>

<md-tr>
<md-td>URL 级别</md-td>
<md-td>获得鉴权信息 a1</md-td>
<md-td>不能获得鉴权，需要重新对页面鉴权。

原因：页面 URL 发生了变化，因此需要重新鉴权。</md-td>
</md-tr>

<md-tr>
<md-td>染色级别</md-td>
<md-td>获得鉴权信息 a1</md-td>
<md-td>不能获得鉴权，需要重新对页面鉴权。

原因：pathB 的回退页面栈中不包含 pathB 的父路径，不满足染色条件，因此需要重新鉴权。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::


### 示例二

假设打开 pathA 后获得了应用鉴权信息 a1，接着打开 pathC 的鉴权情况如下：
- pathA 指 http://open.feishu.cn/home
- pathC 指 http://open.feishu.cn/home/route

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:20%">鉴权策略</md-th>
<md-th style="width:25%">打开 pathA</md-th>
<md-th style="width:55%">打开 pathC</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>容器级别</md-td>
<md-td>获得鉴权信息 a1</md-td>
<md-td>仍可获得鉴权信息 a1。

原因：在同一个容器生命周期内，因此仍然可以获得鉴权信息。</md-td>
</md-tr>

<md-tr>
<md-td>URL 级别</md-td>
<md-td>获得鉴权信息 a1</md-td>
<md-td>不能获得鉴权，需要重新对页面鉴权。

原因：页面 URL 发生了变化，因此需要重新鉴权。</md-td>
</md-tr>

<md-tr>
<md-td>染色级别</md-td>
<md-td>获得鉴权信息 a1</md-td>
<md-td>仍可获得鉴权信息 a1。

原因：pathC 的回退页面栈中包含 pathC 的父路径 pathA，因此仍然可以获得 pathA 的鉴权信息。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

:::note
所有鉴权策略均需确认容器是否唯一，即在网页应用内是否又开启了新容器。若开启了新容器，则需重新调用 config 接口进行鉴权。
:::
  
开启新的网页容器是指在客户端上新打开一个网页容器承载网页展现，即网页所在的环境与之前不一致。常见的开启新容器的场景如下所示。
  
- 使用 [openSchema](/ssl:ttdoc/uAjLw4CM/uYjL24iN/block/api/navigator/openschema) 方式打开新链接 ：openSchema 是一个 JSAPI，用于在新窗口打开网页、文档、小程序等。
- 使用 [AppLink](/ssl:ttdoc/uYjL24iN/ucjN1UjL3YTN14yN2UTN) 打开新链接：AppLink 是一个 URL 协议，用于打开飞书或者其中的一个功能。
- 前端通过 `window.open(xxx , '_self')` 打开新页面时，iOS 端按照浏览器标准实现新容器的开启。Android 端在旧的网页容器中渲染页面，不会开启新容器。
    
  其中，`window.open` 是 JavaScript 函数，用于打开一个新窗口或改变原窗口，`_self`表示在原窗口打开。


## Config 接口错误码

本章节提供了 Config 接口可能产生的错误码。无论你使用什么方式（例如，前端 console、端侧日志等），都需要先得到 Config 接口的 Response，然后根据 Response 中的错误码，采取相应的处理措施。

### [Errno错误码](/ssl:ttdoc/uYjL24iN/uAjMuAjMuAjM/errno)

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:15%">errno</md-th>
<md-th style="width:40%">errString</md-th>
<md-th style="width:45%">描述</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>102</md-td>
<md-td>Internal error</md-td>
<md-td>内部错误，通常是应用容器发生了某些异常。请咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)。</md-td>
</md-tr>

<md-tr>
<md-td>104</md-td>
<md-td>Invalid parameter</md-td>
<md-td>参数错误，参考下文 errorCode 错误码表中的 1012 错误码。</md-td>
</md-tr>

<md-tr>
<md-td>305</md-td>
<md-td>Network failure</md-td>
<md-td>网络失败。</md-td>
</md-tr>

<md-tr>
<md-td>2601001</md-td>
<md-td>Server-side data exception</md-td>
<md-td>服务端数据异常，常见于服务端宕机等场景。</md-td>
</md-tr>

<md-tr>
<md-td>2601002</md-td>
<md-td>Authentication failed. %s (error code: %s)</md-td>
<md-td>鉴权失败，按照下文 errorCode 错误码表，进一步排查。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::

### errorCode 错误码

:::html
<md-table>
<md-thead>
<md-tr>
<md-th style="width:15%">错误码</md-th>
<md-th style="width:25%">描述</md-th>
<md-th style="width:60%">排查建议</md-th>
</md-tr>
</md-thead>
<md-tbody>

<md-tr>
<md-td>1012</md-td>
<md-td>参数类型错误</md-td>
<md-td>根据下面的参数校验规则，包括类型校验与值校验，进行自检。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/6fee21a7237ef2c0a7ee5531736d4a14_P81ZwOh2sW.png?height=488&lazyload=true&width=1172)
</md-td>
</md-tr>

<md-tr>
<md-td>1014</md-td>
<md-td>网络异常错误</md-td>
<md-td>检查设备网络。</md-td>
</md-tr>

<md-tr>
<md-td>10001</md-td>
<md-td>网络请求失败</md-td>
<md-td>稍后重试。</md-td>
</md-tr>

<md-tr>
<md-td>10002</md-td>
<md-td>网络请求返回数据格式错误</md-td>
<md-td>\-</md-td>
</md-tr>

<md-tr>
<md-td>333430</md-td>
<md-td>userId 或者 appId 不合法</md-td>
<md-td>\-</md-td>
</md-tr>

<md-tr>
<md-td>333440</md-td>
<md-td>app 不存在</md-td>
<md-td>前往 **开发者后台 > 应用详情页 > 凭证与基础信息** 检查 appId 是否正确。</md-td>
</md-tr>

<md-tr>
<md-td>333441</md-td>
<md-td>签名错误</md-td>
<md-td>签名错误是指用户构造的 signature 字段传递至飞书服务端验证时，与飞书服务端构造的 signature 不一致，所以飞书服务端会认为该签名不合法。

![image.png](//sf3-cn.feishucdn.com/obj/open-platform-opendoc/fe6c7b09105c16b704c444ce9ff634bf_eA2pblbx9M.png?height=393&lazyload=true&width=1113)
  
实际报错时会返回飞书服务端的 `signature`、`jsticket`、`nonce_str`、`url`、`timestamp` 信息，这些信息与你开发的项目中构造的鉴权参数有不一致的问题。
  
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
    - 确认 URL 是页面完整的 URL（请在当前页面`alert(location.href.split('#')[0])`确认），包括`http(s)://`部分，以及`?`后面的 GET 参数部分，但不包括`'#'(hash)`后面的部分。**建议代码编写就用 `location.href.split('#')[0]` 方式获取，不要手写，以免和实际使用不一致**。
    - 如果是单页面应用，且使用 react-router 或 vue-router 等（类似 pushState、replaceState）进行页面跳转时（即 vue-router 的 history 模式或者 react-router 的 browserHistory），可以尝试将最后一次不用 vue-router 或者 react-router 跳转的页面 URL 传到当前页面进行鉴权，该方式需要根据实际情况进行处理。
    - 确保使用的 access_token 和 jsapi_ticket 没有过期。
  
- sha1 算法出错。需确认签名算法是否为 sha1。
- 生成 verifyStr 规则错误。生成 verifyStr 字符串时，必须按照 jsapi_ticket、noncestr、timestamp、url 顺序进行拼接。
</md-td>
</md-tr>

<md-tr>
<md-td>333442</md-td>
<md-td>app 没找到有效的 jsapi_ticket</md-td>
<md-td>检查 config 中的 app_id 与获取 jsapi_ticket 的 app_id 是否一致，或者所使用的 jsapi_ticket 是否已过期。如何获取 jsapi_tocket 参见[获取 JSAPI 临时授权凭证](/ssl:ttdoc/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/h5_js_sdk/authorization)。</md-td>
</md-tr>

<md-tr>
<md-td>333443</md-td>
<md-td>签名重复</md-td>
<md-td>10 分钟内再次验签，请 10 分钟后重试。</md-td>
</md-tr>

<md-tr>
<md-td>333444</md-td>
<md-td>签名过期</md-td>
<md-td>签名有效期为 10 分钟，每次调用 config 前重新计算签名，不建议缓存签名。</md-td>
</md-tr>

<md-tr>
<md-td>333445</md-td>
<md-td>JSAPI 未授权</md-td>
<md-td>调用 Config 接口时，在参数 jsApiList 里添加相应 API。</md-td>
</md-tr>

<md-tr>
<md-td>333446</md-td>
<md-td>JSAPI 不存在</md-td>
<md-td>前往 [H5 JSAPI 总览](/ssl:ttdoc/uYjL24iN/uMTMuMTMuMTM/) 查阅 JSAPI，确认是否写错。</md-td>
</md-tr>

<md-tr>
<md-td>333447</md-td>
<md-td>安全域名未设置</md-td>
<md-td>应用开发者需要在 **开发者后台 > 应用详情页 > 安全设置 > H5可信域名** 中设置需要调用 JSAPI 接口的页面所在域名。</md-td>
</md-tr>

<md-tr>
<md-td>333448</md-td>
<md-td>页面不在安全域名内</md-td>
<md-td>应用开发者需要在 **开发者后台 > 应用详情页 > 安全设置 > H5可信域名** 中检查需要调用 JSAPI 接口的页面所在域名。</md-td>
</md-tr>

<md-tr>
<md-td>333449</md-td>
<md-td>应用不可见</md-td>
<md-td>应用对该用户没有可见性，应用开发者需要在 **开发者后台 > 应用详情页 > 版本管理与发布 > 创建版本 > 可用范围** 中配置可见性。</md-td>
</md-tr>
  
<md-tr>
<md-td>333450</md-td>
<md-td>用户 open_id 不正确</md-td>
<md-td>需要检查传入的用户 open_id 是否正确。获取方式参考[如何获取 Open ID](/ssl:ttdoc/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)。</md-td>
</md-tr>

<md-tr>
<md-td>9999169x</md-td>
<md-td>invalid session 用户登录态校验失败，x=[1-4]</md-td>
<md-td>\-</md-td>
</md-tr>

<md-tr>
<md-td>\-</md-td>
<md-td>Android 无法调用相关API，提示 find no handler 等</md-td>
<md-td>飞书 V4.0 版本之前（不包含 V4.0）仅支持在工作台打开网页应用，如果在非工作台打开网页应用需在 URL 后增加`app_id=xxx`参数信息。</md-td>
</md-tr>

</md-tbody>
</md-table>
:::
