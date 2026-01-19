---
title: "执行SQL"
source_url: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/apaas-v1/workspace/sql_commands
last_remote_update: 2025-12-01
last_remote_update_timestamp: 1764571100000
---
最后更新于 2025-12-01

# 执行 SQL

在工作空间下执行 SQL 语句

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/apaas/v1/workspaces/:workspace_id/sql_commands
HTTP Method | POST
接口频率限制 | [10 次/秒](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 在工作空间下执行 SQL 语句(app_engine:workspace.sql_commands:write)

### 请求头

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
Authorization | string | 是 | `user_access_token`  
**值格式**："Bearer `access_token`"  
**示例值**："Bearer u-7f1bcd13fc57d46bac21793a18e560"  
[了解更多：如何选择与获取 access token](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-choose-which-type-of-token-to-use)
Content-Type | string | 是 | **固定值**："application/json; charset=utf-8"

### 路径参数

名称 | 类型 | 描述
--- | --- | ---
workspace_id | string | 工作空间id，可以从数据平台的 URL 中获取，如 `https://apaas.feishu.cn/suda/workspace/workspace_aadimx5uzpsls/table-manage/main?tableId=table_1846786627963081&tab=objectManage` 中的 workspace_aadimx5uzpsls 就是 workspace_id  
**示例值**："workspace_aadimx5uzpsls"

### 请求体

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
sql | string | 是 | 要执行的 SQL 语句  
**示例值**："SELECT name FROM student"

### 请求体示例
```json
{
    "sql": "SELECT name FROM student"
}
```

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
result | string | 如果是 SELECT 命令，返回的是查询结果的 JSON 序列化字符串。如果是其他无返回的命令，如 DELETE 等，result 为空。

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "result": "[{\"name\":\"王一一\"}]"
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
400 | 2320001 | param is invalid | 请检查请求参数的类型、格式或值是否符合接口要求，具体可参考请求参数说明中的数据校验规则。
