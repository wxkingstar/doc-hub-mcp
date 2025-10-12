---
title: "Block消息推送"
source_url: https://open.feishu.cn/document/client-docs/block/api/block-v2/create-2
---
最后更新于 2022-07-15

# Block消息推送

根据BlockID向指定用户列表推送消息。

## 请求

基本 | 
--- | ---
HTTP URL | https://open.feishu.cn/open-apis/block/v2/message
HTTP Method | POST
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用** | block协同消息推送(block:message)

### 请求头

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
Authorization | string | 是 | `tenant_access_token`  
**值格式**："Bearer `access_token`"  
**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"  
[了解更多：获取与使用access_token](https://open.feishu.cn/document/ukTMukTMukTM/uMTNz4yM1MjLzUzM)
Content-Type | string | 是 | **固定值**："application/json; charset=utf-8"

### 请求体

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
body | string | 是 | 消息体  
**示例值**："{"id":"7094066727704592403","token":"test_123456789"}"  
**数据校验规则**：  
- 最大长度：`8000` 字符
version | string | 是 | 版本号(自增)  
**示例值**："1637565292196"  
**数据校验规则**：  
- 最大长度：`13` 字符
block_id | string | 是 | entity实体ID  
**示例值**："8116040162664047375"
resource | string | 否 | 业务来源  
**示例值**："read_block"
open_ids | string\[\] | 是 | 推送用户列表  
**示例值**：["ou_fa7aa170f92d1615de63371ac425a767"]  
**数据校验规则**：  
- 长度范围：`1` ～ `10`

### 请求体示例
```json
{
  "block_id": "7109221747380305940",
  "body": "user-push",
  "open_ids": [
    "ou_6ea16981b05ec64d59342790b4c22fb4"
  ],
  "version": "50"
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
    "data": {},
    "msg": "success"
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
500 | 1850001 | invalid parameters | 检查参数是否遗漏
500 | 1850002 | size exceeded | 传入数据超长
500 | 1850003 | no permission | 检查tenant-access-token是否有该block权限
500 | 1850004 | system error | 服务端错误，联系oncall
