---
title: "删除 OKR 进展记录"
source_url: https://open.feishu.cn/document/server-docs/okr-v1/progress_record/delete
last_remote_update: 2025-07-25
last_remote_update_timestamp: 1753428958000
---
最后更新于 2025-07-25

# 删除 OKR 进展记录

根据 ID 删除 OKR 进展记录。

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/okr/v1/progress_records/:progress_id
HTTP Method | DELETE
接口频率限制 | [100 次/分钟](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用**  
            开启任一权限即可 | 更新 OKR 信息(okr:okr)  
            删除 OKR 进展(okr:okr.progress:delete)

### 请求头

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
Authorization | string | 是 | `tenant_access_token`  
或  
`user_access_token`  
**值格式**："Bearer `access_token`"  
**示例值**："Bearer u-7f1bcd13fc57d46bac21793a18e560"  
[了解更多：如何选择与获取 access token](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)

### 路径参数

名称 | 类型 | 描述
--- | --- | ---
progress_id | string | 待删除的 OKR进展记录 ID，“创建 OKR 进展记录”接口返回值中会提供，也可以通过 OKR 内容相关接口获取。  
**示例值**："7041857032248410131"

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
    "msg": "success"
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
500 | 1009999 | internal server error | 内部错误，请联系飞书助手或您的客户成功经理
500 | 1009998 | system exception | 系统异常，请联系飞书助手或您的客户成功经理
400 | 1001001 | invalid parameters | 无效的参数，请对照文档检查输入的参数
400 | 1001002 | no permission | 您无权访问该接口，请确认您的登录凭证
400 | 1001003 | user not found | 用户不存在
400 | 1001004 | okr data not found | 对应ID的数据不存在
