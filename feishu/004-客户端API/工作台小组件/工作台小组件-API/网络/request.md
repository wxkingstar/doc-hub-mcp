---
title: "request"
source_url: https://open.feishu.cn/document/client-docs/block/api/network/request
---
最后更新于 2023-11-24

# request

发起一个 HTTP 请求。
**Notice**：- 以下header key作为小程序的保留header，如果使用，可能导致header内容的覆盖。
	- `x-request-id`
	- `x-request-id-op`
	- `x-tt-log-id`

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
url | string | 是 |  | 请求地址  
**示例值**：http://open.feishu.cn
header | object | 否 | {'content-type': 'application/json'} | 请求 Header  
**示例值**：{'content-type': 'application/json'}
method | string | 否 | GET | 请求方法  
**示例值**：GET  
**可选值**：  
- `GET`  
- `POST`  
- `PUT`  
- `OPTIONS`  
- `HEAD`  
- `DELETE`
data | string｜object｜arraybuffer | 否 |  | 请求数据  
**示例值**：{"noncestr":123}  
**Notice**：最终发送至服务器的数据是 string 类型，如果 data 不为 string 类型，发送请求时会做相应转换：  
- 对于 GET 方法，会将 data 对象转换为 Query string，并拼接至 url 的 Query 部分  
- 对于 POST 方法，如果 header 未指定 content-type，或 header['content-type'] 为 'application/json'，则会将 data 进行 JSON 序列化  
- 对于 POST 方法，如果 header['content-type'] 为 'application/x-www-form-urlencoded'，则会将 data 对象转换为 Query string，放入请求体中
dataType | string | 否 | json | 请求数据类型  
**示例值**：json
responseType | string | 否 | text | 响应数据类型，参数值可以是 text 或 arraybuffer  
**示例值**：text  
**可选值**：  
- `text`  
- `arraybuffer`

## 输出

`success`返回对象的扩展属性：

名称 | 数据类型 | 描述
--- | --- | ---
statusCode | number | 返回 HTTP 状态码
header | object | 返回 HTTP Header
data | string｜object｜arraybuffer | 返回数据

返回值：`RequestTask`，该对象的方法列表如下：

方法 | 介绍
--- | ---
abort() | 中断请求任务

## 示例代码
```json
{
  "sourceData":{
  	"tab": "api",
  	"item": "request"
  },
    "openDetail": 1, 
    "title": "request", 
    "list_page_url": "https://applink.feishu.cn/client/block/workplace/open?appId=cli_a00834ec56f8d01b%26blockTypeId=blk_610a40455f800004c32b6bb6%26sourceData=%7B%22tab%22%3A%22api%22%2C%22item%22%3A%22login%22%7D", 
    "min_lk_ver": {
        "pc": "5.10.0", 
        "mobile": "5.11.0"
    },
    "blockEntity": {
        "sourceData": {
            "type": "api",
            "item": "request",
            "isNew": true
        },
  		"blockID": "mock-block"
    }
}
```

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
if (someReason) {
  requestTask.abort();
}
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

## 已知问题

1. header 的部分关键字应当遵守标准，如 Cookie，具体请参考 [HTTP Headers](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers)，同时 header 字段不支持设置 referer。
2. 单个 Block 并发请求的最高数量为 5 个。
3. 开发者服务端需要开启 CORS 以允许 <https://example.feishu.cn> 跨域访问。其中，Access-Control-Allow-Origin 的值不能包含星号，需要设置为确定的域名，可根据请求头部中的 Origin 字段确定。例如：

```
	Access-Control-Allow-Credentials: true
	Access-Control-Allow-Headers: Content-Type
	Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS
	Access-Control-Allow-Origin: https://example.feishu.cn
	```

如果需要获取到响应头中某个字段（常用于登录场景），还需要服务端配置：

```
	Access-Control-Expose-Headers: 字段名
	``` 
4. 请求不会携带 Cookie，因此开发者不能通过 Cookie 鉴权。请选择通过 Authorization 等在请求头携带 Token 的方式鉴权。
