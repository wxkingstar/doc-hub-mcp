---
title: "getUserInfo"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/open-ability/userinfo/getuserinfo
---
最后更新于 2025-01-21

# getUserInfo(Object object)

getUserInfo(Object object) 用于获取已登录用户的基本信息或特殊信息。

## 注意事项

- 小程序调用该接口前，需要确保已经调用 [requestAccess](https://open.feishu.cn/document/uYjL24iN/uUzMuUzMuUzM/requestaccess) ( 如需兼容 飞书V6.9.0 以下版本，可使用 [login](https://open.feishu.cn/document/uYjL24iN/uYzMuYzMuYzM) )。
- 网页应用需要在[鉴权](https://open.feishu.cn/document/uYjL24iN/uEzM4YjLxMDO24SMzgjN)后调用该接口。
- 如果你的飞书版本为 [V5.2.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility) 及以上，在调用该接口前需要用户授权 `scope.userInfo`。

- 了解如何授权，可参见 [API 权限](https://open.feishu.cn/document/uYjL24iN/uITMuITMuITM)。
    - 作为应用的开发者，你需要兼容用户拒绝授权的场景。

## 支持说明

该接口支持小程序和网页应用调用，对应的客户端版本支持情况如下所示。

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | **✓** | **✓** | **✓** | V7.35.0+ | [预览](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fget-user-info%2Fget-user-info)
网页应用 | V3.44.0+ | V3.44.0+ | V3.44.0+ | V7.35.0+ | 预览

## 输入
该接口继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性如下所示。

名称 | 数据类型 | 是否必填 | 默认值 | 描述
--- | --- | --- | --- | ---
withCredentials | boolean | 否 | false | 是否需要返回敏感数据。取值：  
- true：需要  
- false：不需要  
**Notice**：网页应用不支持该字段。网页应用获取用户敏感信息的方式，可参见 [网页应用免登](https://open.feishu.cn/document/uYjL24iN/ukTO4UjL5kDO14SO5gTN#6efde855)。

## 输出

该接口继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，`success` 返回对象的扩展属性如下所示。

名称 | 数据类型 | 描述
--- | --- | ---
userInfo | object | 用户信息。
&emsp;  
                    ∟  
                &nbsp;  
                    nickName | string | 用户昵称。
&emsp;  
                    ∟  
                &nbsp;  
                    avatarUrl | string | 用户头像。
&emsp;  
                    ∟  
                &nbsp;  
                    gender | string | 用户性别。可能值：  
- `''`：未知  
- `male`：男性  
- `female`：女性
&emsp;  
                    ∟  
                &nbsp;  
                    country | string | 用户所在国家或地区。
&emsp;  
                    ∟  
                &nbsp;  
                    city | string | 用户所在城市。
&emsp;  
                    ∟  
                &nbsp;  
                    language | string | 所在地区所用的语言。可选值：  
- `en_US`：英文  
- `zh_CN`：中文
rawData | string | userInfo 的 JSON 字符串形式。
signature | string | 用于校验用户信息是否被篡改。  
**Notice**：该字段值为敏感数据，输入的 withCredentials 为 true 时可获取。
encryptedData | string | 包括敏感信息（例如，openId、unionId、email、employee_id、watermark 等）在内的已加密用户数据。  
**Notice**：该字段值为敏感数据，输入的 withCredentials 为 true 时可获取。
iv | string | 加密算法参数。  
**Notice**：该字段值为敏感数据，输入的 withCredentials 为 true 时可获取。

## 示例代码

调用示例：

<md-download-code href="https://open.feishu.cn/document/uYjL24iN/uYDM04iNwQjL2ADN" mobileDisplay="none">下载示例代码</md-download-code>

<div style="display: flex">
          [预览小程序](https://applink.feishu.cn/client/mini_program/open?appId=cli_9dff7f6ae02ad104&path=page%2FAPI%2Fpages%2Fget-user-info%2Fget-user-info)
          预览网页应用

</div> 
```js
tt.getUserInfo({
    withCredentials: true,
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`getUserInfo fail: ${JSON.stringify(res)}`);
    }
});
```
`success`返回对象示例：
```json
{
    "userInfo": {
        "avatarUrl": "https://s1-imfile.feishucdn.com/static-resource/v1/c8a42593-e88f-4fdb-8c70-631xxxxxx~?image_size=72x72&cut_type=&quality=&format=png&sticker_format=.webp",
        "city": "武汉",
        "country": "CN",
        "gender": "male",
        "language": "",
        "nickName": "张三"
    },
    "signature": "383292bbece2bc4d0b7591xxxxxxxxxx",
    "encryptedData": "sJbpFAqEo1xjI+gzhQDLqXxxxxxxxxx",
    "rawData": "{\"nickName\":\"张三\",\"avatarUrl\":\"https://s1-imfile.feishucdn.com/static-resource/v1/c8a42593-e88f-4fdb-8c70-631xxxxxx~?image_size=72x72\\u0026cut_type=\\u0026quality=\\u0026format=png\\u0026sticker_format=.webp\",\"gender\":\"male\",\"city\":\"武汉\",\"country\":\"CN\",\"language\":\"\",\"i18nName\":{\"en_us\":\"Zhang San\",\"ja_jp\":\"\",\"zh_cn\":\"\"}}",
    "iv": "bd49a34ccf1e415da113bxxxxxxx",
    "errMsg": "getUserInfo:ok"
}
```

## 错误码

`fail` 返回对象中可能包含 errno 属性，表示错误码。关于 errno 错误码的详细说明以及通用错误码列表，可参见[Errno 错误码](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/errno)。
