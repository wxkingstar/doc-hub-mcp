---
title: "share"
source_url: https://open.feishu.cn/document/client-docs/gadget/-web-app-api/open-ability/share/thirdShare
---
最后更新于 2025-06-04

# share(Object object)

分享内容到三方应用。
**Notice**：注意事项：
- 微信朋友圈仅支持图片分享。
- 本接口不支持 iPad 上使用。

## 支持说明

应用能力 | Android | iOS | PC | Harmony | 预览效果
--- | --- | --- | --- | --- | ---
小程序 | V3.47.0+ | V3.47.0+ | **x** | **x** | 预览
网页应用 | V5.14.0+ | V5.14.0+ | **x** | **x** | 预览

## 输入

继承[标准对象输入](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM)，扩展属性描述：

名称 | 数据类型 | 必填 | 默认值 | 描述
--- | --- | --- | --- | ---
channelType | string[] | 否 | 飞书：  
["wx", "wx_timeline"]  
Lark：  
["system"] | 指定分享的渠道  
**示例值**：["wx", "wx_timeline"]  
**可选值**：  
- `wx`：微信分享  
- `wx_timeline`：微信朋友圈分享  
- `system`：系统分享  
  - 飞书[V4.5.0](https://open.feishu.cn/document/uYjL24iN/uAjMuAjMuAjM/version-compatibility)及以上版本支持  
wx、wx_timeline 仅飞书支持，Lark 请使用 system 渠道。  
**Notice**：**注意:** 如果分享渠道数等于 1，则直接发起分享到渠道，不需要经过分享面板。
contentType | string | 是 |  | 指定内容的类型。目前支持文本、图片、URL 分享。  
**示例值**：text  
**可选值**：  
- `text`：文本  
- `image`：图片  
- `url`：在线链接
title | string | 否 |  | 分享标题。  
**示例值**：share message title  
**Notice**：**注意:** 仅在 contentType = "url" 下生效，且为必选参数。
content | string | 否 |  | 分享的内容。  
**示例值**：share this message to your friends.  
**Notice**：**注意:** 如果 contentType = "text" 则该字段不能为空。
image | string | 否 |  | 分享的图片的 Base64 编码。  
**Notice**：**注意**:  
- 如果 contentType = "image" 则该字段不能为空。  
- 如果使用前端转换工具将图片转成base64编码时，可能会在base64编码开头携带图片格式信息(**例如**:data:image/png;base64,)。对于这种情况，需要在为image参数赋值时去掉图片格式信息。
url | string | 否 |  | 在线 URL。  
**示例值**：https://www.feishu.cn/  
**Notice**：**注意:** 如果 contentType = "url" 则该字段不能为空。

## 输出

继承[标准对象输出](https://open.feishu.cn/document/uYjL24iN/ukzNy4SO3IjL5cjM#8c92acb8)，无扩展属性

## 示例代码

```js
tt.share({
    channelType: [
        "wx",
        "wx_timeline",
        "system"
    ],
    contentType: "url",
    title: "飞书官网",
    url: "https://www.feishu.cn/",
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`share fail: ${JSON.stringify(res)}`);
    }
});
```

`success`返回对象示例：
```json
{
    "errMsg": "share:ok"
}
```

## 错误码

`fail`返回对象中会包含errCode属性，代表错误码，具体错误码列表参见：

错误码 | 描述 | 排查建议
--- | --- | ---
101 | 应用未安装 | /

## 注意
为image参数赋值时，通过转换工具将图片转换的base64编码开头如果带有图片格式信息(**例如**：data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABZCAY...)。需要**去掉图片格式信息**，image参数赋值为：iVBORw0KGgoAAAANSUhEUgAAAGUAAABZCAY... ，例如：
```js

tt.share({
    channelType: [
        "wx",
        "wx_timeline",
        "system"
    ],
    contentType: "image",
    image: "iVBORw0KGgoAAAANSUhEUgAAAGUAAABZCAY...",
    success(res) {
      console.log(JSON.stringify(res));
    },
    fail(res) {
      console.log(`share fail: ${JSON.stringify(res)}`);
    }
});

```
