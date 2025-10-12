---
title: "更新 BlockEntity"
source_url: https://open.feishu.cn/document/client-docs/block/api/block-v2/update
last_remote_update: 2022-08-04
last_remote_update_timestamp: 1659616871000
---
最后更新于 2022-08-04

# 更新BlockEntity

开发者通过该接口可以更新存储在BlockEntity中的数据，并实时推送到端侧。

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/block/v2/entities/:block_id
HTTP Method | PUT
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 变更BlockEntity内容(block:entity)

### 请求头

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
Authorization | string | 是 | `tenant_access_token`  
**值格式**："Bearer `access_token`"  
**示例值**："Bearer t-7f1bcd13fc57d46bac21793a18e560"  
[了解更多：获取与使用access_token](https://open.feishu.cn/document/ukTMukTMukTM/uMTNz4yM1MjLzUzM)
Content-Type | string | 是 | **固定值**："application/json; charset=utf-8"

### 路径参数

名称 | 类型 | 描述
--- | --- | ---
block_id | string | block唯一标识  
**示例值**："7794641623571830467"

### 请求体

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
title | string | 否 | 标题  
**示例值**："已阅 block"
block_type_id | string | 是 | block 类型ID  
**示例值**："blk_6204893fee000013739f5359"
source_data | string | 是 | 业务数据 json  
**示例值**："{"data":"业务数据"}"
source_meta | string | 是 | 元数据 json  
**示例值**："{"bizId":"7094067849152430100"}"
version | string | 是 | 版本号(自增)  
**示例值**："1651716489253602"
source_link | string | 否 | 链接  
**示例值**："{}"
summary | string | 否 | 总括  
**示例值**："{"cn":"这是一个block"}"
preview | string | 否 | 预览  
**示例值**："{"cn":"这是一个block"}"
i18n_summay | string | 否 | 综述 json  
**示例值**："{"cn":"这是一个block","va": "this is a block"}"
i18n_preview | string | 否 | 预览 json  
**示例值**："{"cn":"这是一个block","va": "this is a block"}"
owner | string | 否 | 所有者  
**示例值**："ou_fa7aa170f92d1615de63371ac425a767"
extra | string | 否 | 扩展字段 json  
**示例值**："{}"

### 请求体示例
```json
{
  "title": "tttt111",
  "block_type_id": "blk_618cd9c4868000131ba7a3e0",
  "source_data": "{111}",
  "source_meta": "{}",
  "version": "1"
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
400 | 1850001 | invalid parameters | 检查参数是否遗漏
500 | 1850002 | size exceeded | 传入数据超长
500 | 1850003 | no permission | 检查tenant-access-token是否有该block权限
