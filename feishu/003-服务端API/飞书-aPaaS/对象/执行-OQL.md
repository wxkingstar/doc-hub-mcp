---
title: "执行 OQL"
source_url: https://open.feishu.cn/document/apaas-v1/application-object-record/oql_query
---
最后更新于 2024-09-23

# 执行 OQL

在应用内执行 OQL 语句

## 请求

基本 | 
--- | ---
HTTP URL | https://open.feishu.cn/open-apis/apaas/v1/applications/:namespace/objects/oql_query
HTTP Method | POST
接口频率限制 | [1000 次/分钟、50 次/秒](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用**  
            开启任一权限即可 | 查看对象记录数据(app_engine:object.record:read)  
            创建、更新、删除对象记录数据(app_engine:object.record:write)

### 请求头

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
Authorization | string | 是 | `tenant_access_token`  
**值格式**："Bearer `access_token`"  
**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"  
[了解更多：如何选择与获取 access token](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)
Content-Type | string | 是 | **固定值**："application/json; charset=utf-8"

### 路径参数

名称 | 类型 | 描述
--- | --- | ---
namespace | string | 应用命名空间  
**示例值**："package_test__c"  
**数据校验规则**：  
- 长度范围：`0` ～ `256` 字符

### 请求体

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
query | string | 是 | 待执行的 OQL 语句  
**示例值**："SELECT _id, _name FROM _user WHERE _type = $1 AND _accountStatus = $user_status LIMIT 10"
args | string | 否 | 用于指定 OQL 语句中匿名参数的具体值  
**示例值**："[\"_employee\"]"
named_args | string | 否 | 用于指定 OQL 语句中具名参数的具体值  
**示例值**："{\"user_status\" : \"_used\"}"

### 请求体示例
```json
{
    "query": "SELECT _id, _name FROM _user WHERE _type = $1 AND _accountStatus = $user_status LIMIT 10",
    "args": "[\"_employee\"]",
    "named_args": "{\"user_status\" : \"_used\"}"
}
```

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
columns | string\[\] | 每一列的标题
rows | string | 每一行的值，以「key-value」的形式返回

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "columns": [
            "_id"
        ],
        "rows": "[       {         \"_name\": \"Sample Text\",         \"_id\": 1234567890       }     ]"
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
400 | 2320001 | param is invalid | 请检查输入参数
