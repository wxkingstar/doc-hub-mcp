---
title: "更新 URL 预览"
source_url: https://open.feishu.cn/document/im-v1/url_preview/batch_update
---
最后更新于 2024-08-23

# 更新 URL 预览

该接口用于主动更新 [URL 预览](https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/development-link-preview/link-preview-development-guide)，调用后会重新触发一次客户端拉取，需要回调服务返回更新后的数据。

**注意事项**：**注意**：更新链接预览时需要注意更新频率，如果更新时不指定用户，则可能会造成链接预览请求放大。例如，群聊中的链接预览，所有群成员均会尝试重新拉取预览请求。

## 请求

基本 | 
--- | ---
HTTP URL | https://open.feishu.cn/open-apis/im/v2/url_previews/batch_update
HTTP Method | POST
接口频率限制 | [5 次/秒](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 更新 URL 预览(im:url_preview.update)

### 请求头

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
Authorization | string | 是 | `tenant_access_token`  
**值格式**："Bearer `access_token`"  
**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"  
[了解更多：如何选择与获取 access token](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)
Content-Type | string | 是 | **固定值**："application/json; charset=utf-8"

### 请求体

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
preview_tokens | string\[\] | 是 | URL 预览的 preview_tokens 列表。需要通过[拉取链接预览数据](https://open.feishu.cn/document/uAjLw4CM/ukzMukzMukzM/development-link-preview/pull-link-preview-data-callback-structure)回调获取 preview_tokens。  
**注意**：单个 token 限制更新频率为 1次/5秒。  
**示例值**：["952te0c8-9ccf-463d-ad73-593f8f768a5c"]  
**数据校验规则**：  
- 长度范围：`1` ～ `10`
open_ids | string\[\] | 否 | 需要更新 URL 预览的用户 open_id。若不传，则默认更新 URL 预览所在会话的所有成员；若用户不在 URL 所在会话，则无法触发更新该用户对应的 URL 预览结果。获取方式参见[如何获取 Open ID](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)。  
**示例值**：["ou_xxx"]  
**数据校验规则**：  
- 长度范围：`0` ～ `100`

### 请求体示例
```json
{
    "preview_tokens": [
        "952te0c8-9ccf-463d-ad73-593f8f768a5c"
    ],
    "open_ids": [
        "ou_xxx"
    ]
}
```

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {}
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
400 | 230001 | param is invalid | 参数错误，请根据接口返回的错误信息并参考文档检查输入参数。
