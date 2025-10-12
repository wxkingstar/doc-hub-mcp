---
title: "getUserInfo"
source_url: https://open.feishu.cn/document/client-docs/block/api/user/getuserinfo
---
最后更新于 2022-07-15

# getUserInfo

获取已登录用户的基本信息或特殊信息。
**Notice**：调用前确保已经调用 tt.login 接口成功登录。

## 输入

param 继承自[标准对象输入](https://open.feishu.cn/document/uAjLw4CM/uYjL24iN/block/api/standard-object-input)，扩展属性描述：

| **名称**          | **数据类型**  | **是否必填** | **默认值** | **描述**     |
| --------------- | ------- | ------- | ------ | ---------- | ---------- |
| withCredentials | boolean | 否   | false      | 是否需要返回敏感数据 | PC 端 1.0.0 |

## 输出

success 函数返回对象参数扩展属性：

名称 | 数据类型 | 描述
--- | --- | ---
userInfo | object | 用户信息
&emsp;  
                    ∟  
                &nbsp;  
                    nickName | string | 用户昵称
&emsp;  
                    ∟  
                &nbsp;  
                    avatarUrl | string | 用户头像
&emsp;  
                    ∟  
                &nbsp;  
                    gender | string | 用户性别  
**可选值**：  
- `''`：未知  
- `male`：男性  
- `female`：女性
&emsp;  
                    ∟  
                &nbsp;  
                    country | string | 用户所在国家或地区
&emsp;  
                    ∟  
                &nbsp;  
                    province | string | 用户所在省份  
**Notice**：该字段已下线
&emsp;  
                    ∟  
                &nbsp;  
                    city | string | 用户所在城市
&emsp;  
                    ∟  
                &nbsp;  
                    language | string | 所在地区所用的语言  
**可选值**：  
- `en_US`：英文  
- `zh_CN`：中文
rawData | string | userInfo 的 JSON 字符串形式
signature | string | 用于校验用户信息是否被篡改（withCredentials 需为 true）
encryptedData | string | 包括敏感信息（如 openId）在内的已加密用户数据（withCredentials 需为 true）
iv | string | 加密算法参数（withCredentials 需为 true）

## 示例代码

### 调用示例
```json
{
  "sourceData":{
  	"tab": "api",
  	"item": "getUserInfo"
  },
    "openDetail": 1, 
    "title": "getUserInfo", 
    "list_page_url": "https://applink.feishu.cn/client/block/workplace/open?appId=cli_a00834ec56f8d01b%26blockTypeId=blk_610a40455f800004c32b6bb6%26sourceData=%7B%22tab%22%3A%22api%22%2C%22item%22%3A%22getUserInfo%22%7D", 
    "min_lk_ver": {
        "pc": "5.10.0", 
        "mobile": "5.11.0"
    },
    "blockEntity": {
        "sourceData": {
            "type": "api",
            "item": "getUserInfo",
            "isNew": true
        },
  		"blockID": "mock-block"
    }
}
```

```js
tt.getUserInfo({
  withCredentials: true,
  success (res) {
    console.log('getUserInfo 调用成功', res.userInfo);
  },
  fail (res) {
    console.log('getUserInfo 调用失败');
  },
  complete (res) {
    console.log('getUserInfo 调用结束', res.errMsg);
  } 
});
```

### 返回示例

```json
{
  "errMsg": "getUserInfo:ok",
  "encryptedData": "Otonx45hSc9CnIAOK8jFKfpnvM+oEIti8h9oKIRyeMOmAnmjT5vMEQtK8itF/leoTKefOo6I0gKUj4fkRkGpLSAB5CwAT5FpcX93O7WTcfatZ0G+wecXGIrpNI8tm4KpElNNUSRsXw2fK+ll/wP87S4KsM6HB+uLObEo+3JW7D0WwzyIBZ0Y2OgeQ0lVrZayn66HkEx3+ZQIfR6lqcHYmZHBhMJ4mKXJPgwervA2pTc=",
  "iv": "5ef0f7127289c52cf09f58a078f1f709",
  "rawData": "{"nickName":"潘二铭","avatarUrl":"https://p6-lark-file.byteimg.com/img/lark.avatar/437b7334-de49-40f8-b3e2-69ee357e40bg~72x72.png","gender":"male","city":"","province":"","country":"","language":"","i18nName":{"en_us":"Erming Pan","ja_jp":"","zh_cn":""}}",
  "signature": "afee7903abad25f71d9248467e2202a853ef6a14",
  "userInfo": {
    "avatarUrl": "https://p6-lark-file.byteimg.com/img/lark.avatar/437b7334-de49-40f8-b3e2-69ee357e40bg~72x72.png",
    "city": "",
    "country": "",
    "gender": "male",
    "i18nName": {
      "en_us": "Erming Pan",
      "ja_jp": "",
      "zh_cn": ""
    },
    "language": "",
    "nickName": "潘二铭",
    "province": ""
  }
}
```
