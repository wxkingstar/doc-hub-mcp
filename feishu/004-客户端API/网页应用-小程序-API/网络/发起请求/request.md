---
title: "request"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/network/initiating-request/request
last_remote_update: 2025-01-21
last_remote_update_timestamp: 1737434049000
---
最后更新于 2025-01-21

# request

调用 request 发起一个 HTTP 请求。

## 注意事项

- header 的部分关键字应当遵守标准，如 Cookie。具体可参见 [HTTP Headers](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers)（PC 端不支持主动携带 cookie 字段，开放平台会自动带上）。
- 以下 header key 作为小程序的保留 header，如果使用，可能导致 header 内容被覆盖。
	- `x-request-id`
	- `x-request-id-op`
	- `x-tt-log-id`
	- `referer`(默认值为 `https://tmaservice.developer.toutiao.com/?appid=${appid}&version={appversion}`)
- PC 以及开发者工具上无法查看 cookie，如需调试 cookie 请在移动端操作。
- 该接口的最大并发限制为 10 个。

## 支持说明

该接口仅支持小程序调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Frequest%2Frequest)
网页应用 | **X** | **X** | **X** | **X** | /

## 输入

该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性如下所示。

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
url | string | 是 | \- | 请求地址。示例值：http://open.feishu.cn
header | object | 否 | {'content-type': 'application/json'} | 请求头（Header）。示例值：{'content-type': 'application/json'}  
**Notice**：**注意**：`header` 不支持设置 `referer`。
method | string | 否 | GET | 请求方法。可选值：  
- `GET`  
- `POST`  
- `PUT`  
- `HEAD`  
- `DELETE`  
示例值：GET
data | string｜object｜arraybuffer | 否 | \- | 请求数据。示例值：{"noncestr":123}  
**Notice**：**注意**：  
最终发送至服务器的数据是 string 类型，如果 data 不为 string 类型，发送请求时会做相应转换：  
- 对于 GET 方法，会将 data 对象转换为 Query string，并拼接至 url 的 Query 部分。  
- 对于 POST 方法，如果 header 未指定 `content-type`，或 header['content-type'] 为 `'application/json'`，则会将 data 进行 JSON 序列化。  
- 对于 POST 方法，如果 header['content-type'] 为 `'application/x-www-form-urlencoded'`，则会将 data 对象转换为 Query string，放入请求体中。
dataType | string | 否 | json | 请求数据类型。示例值：json
responseType | string | 否 | text | 响应数据类型。可选值：  
- `text`  
- `arraybuffer`  
示例值：text

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，`success` 返回对象的扩展属性如下所示。

名称 | 数据类型 | 描述
--- | --- | ---
statusCode | number | 返回 HTTP 状态码。
header | object | 返回 HTTP Header。
data | string｜object｜arraybuffer | 返回数据。
trace | string | 请求 ID，用于请求问题的诊断和全链路追踪。  
**Notice**：**注意**：飞书 [V4.7.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持返回该字段。

`fail` 返回对象的扩展属性：

名称 | 数据类型 | 描述
--- | --- | ---
trace | string | 请求 ID，用于请求问题的诊断和全链路追踪。  
**Notice**：**注意**：飞书 [V4.7.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上版本支持返回该字段。

返回值 `RequestTask`，该对象的方法列表如下：
点击下表中的方法名，查看对应API的支持说明、调用方法。

方法 | 介绍
--- | ---
[abort()](https://open.feishu.cn/document/uYjL24iN/ugDNugDNugDN/requesttask/abort) | 中断请求任务。

## 示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=%2Fpage%2FAPI%2Fpages%2Frequest%2Frequest)

</div> 

```js
	const requestTask = tt.request({
    "url": "https://www.toutiao.com",
    "data": {
        "noncestr": Date.now()
    },
    "header": {
        "content-type": "application/json"
    },
    "method": "GET",
    "dataType": "json",
    "responseType": "text",
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`request fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：
```json
{
    "statusCode": 200,
    "trace": "021637463063659f7c4bc2bf0cd6d8391a154dc31cf5e62bbbbbe",
    "header": {
        "status": "200",
        "server": "Tengine",
        "content-type": "text/html",
        "date": "Sun, 21 Nov 2021 02:51:02 GMT",
        "vary": "Accept-Encoding",
        "set-cookie": "__ac_nonce=06199b416006255ab57c1; Path=/; Max-Age=1800",
        "server-timing": "inner; dur=9,cdn-cache;desc=MISS,edge;dur=0,origin;dur=135",
        "x-tt-trace-host": "011d2aece4e92d84a85d7fcea0cc3f2c027b31de29296ecf91fdc235ecdc68b13696f60959c09c485e35660c121656222b2eae610b80d07f266a4c49a1c2611c57a24c2f641bc4e3f3534f19f29108ad6475941944ca55afeca5d20a723beb6b5c",
        "x-tt-trace-tag": "id=3;cdn-cache=miss",
        "x-tt-trace-id": "00-40677dfb0df306001cc1ab774f000489-40677dfb0df30600-01",
        "content-encoding": "identity",
        "via": "cache2.cn3641[135,0]",
        "timing-allow-origin": "*",
        "eagleid": "6f30441616374630628026648e",
        "x-net-info.remoteaddr": "111.48.68.224:443",
        "x-protocol": "CronetTcp+h2",
        "EENet-Request-Http-Channel": "rustChannel",
        "EENet-Request-Server-Ip": "",
        "EENet-Request-Dns-Cost": "0",
        "EENet-Request-Tls-Cost": "0",
        "EENet-Request-Tcp-Cost": "0",
        "EENet-XRequest-Id": "112",
        "request-id": ""
    },
    "data": "<html><head><meta charset=\"UTF-8\" /></head><body></body><script src='https://sf1-ttcdn-tos.pstatp.com/obj/rc-web-sdk/acrawler.js'></script><script>function _f1(e,t){if(\"string\"!=typeof t)return;var o,n=e+\"=\",r=t.split(/[;&]/);for(var e=0;e<r.length;e++){for(o=r[e];\" \"===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(n))return o.substring(n.length,o.length)}return\"\"}function _f2(e){return _f1(e,document.cookie)}function _f3(e,t,o){try{o&&(window.sessionStorage&&window.sessionStorage.setItem(e,t),window.localStorage&&window.localStorage.setItem(e,t));var n=31536e6;document.cookie=e+\"=; expires=Mon, 20 Sep 1970 00:00:00 UTC; path=/;\",document.cookie=e+\"=\"+t+\"; expires=\"+new Date((new Date).getTime()+n).toGMTString()+\"; path=/;\"}catch(e){}}window.byted_acrawler.init({aid:99999999,dfp:!0});var __ac_nonce=_f2(\"__ac_nonce\"),__ac_signature=window.byted_acrawler.sign(\"\",__ac_nonce);_f3(\"__ac_signature\",__ac_signature),_f3(\"__ac_referer\",document.referrer||\"__ac_blank\",!0);try{sessionStorage.setItem(\"__ac_ns\",performance.timing.navigationStart)}catch(e){};window.location.reload();</script></html>",
    "errMsg": "request:ok"
}
```
`fail`返回对象示例：

```json
{
    "errMsg": "request:fail CronetError(\"Cronet Error: code=1 / internal_code=-105 / None\")",
    "trace": "xxxxx"
}
``` 

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
