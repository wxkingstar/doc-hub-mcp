---
title: "获取附件 PDF 格式下载链接"
source_url: https://open.feishu.cn/document/server-docs/hire-v1/attachment/preview
---
最后更新于 2024-07-11

# 获取人才简历附件 PDF 格式下载链接

根据人才简历附件 ID 获取该简历附件对应的 PDF 文件的下载地址。

## 注意事项
- 本接口仅支持转换人才简历类型的附件，不支持作品附件和通用附件。
- 飞书招聘系统支持将文件后缀名为 `.doc`、`.docx`、`.ppt`、`.pptx` 和 `.txt`的人才简历附件转换为 PDF 格式。若转换 PDF 失败，该接口会返回附件原文件的下载地址。

## 请求

基本 | 
--- | ---
HTTP URL | https://open.feishu.cn/open-apis/hire/v1/attachments/:attachment_id/preview
HTTP Method | GET
接口频率限制 | [20 次/秒](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 上传招聘相关附件(hire:attachment)

### 请求头

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
Authorization | string | 是 | `tenant_access_token`  
**值格式**："Bearer `access_token`"  
**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"  
[了解更多：如何选择与获取 access token](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)

### 路径参数

名称 | 类型 | 描述
--- | --- | ---
attachment_id | string | 附件 ID，可通过[获取人才信息](https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/talent/get)接口返回数据中获取人才简历附件 ID。  
**示例值**："64352523512563462"

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
url | string | PDF 文件下载链接，有效期为 30 分钟

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "url": "https://xxx.feishu.cn/hire/file/blob/ZXlKaGJHY2lPaUpJVXpJMU5pS3==/"
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
500 | 1002001 | 系统错误 | 请根据实际报错信息定位或咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)
400 | 1002002 | 参数错误 | 检查参数是否正确，例如类型，大小
