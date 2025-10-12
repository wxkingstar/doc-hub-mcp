---
title: "创建 BlockEntity"
source_url: https://open.feishu.cn/document/client-docs/block/api/block-v2/create
---
最后更新于 2024-10-10

# 创建 BlockEntity

开发者可以通过该接口将部分或全部数据存放于 BlockEntity。

## 请求

基本 | 
--- | ---
HTTP URL | https://open.feishu.cn/open-apis/block/v2/entities
HTTP Method | POST
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

### 请求体

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
title | string | 是 | 标题  
**示例值**："已阅block"  
**数据校验规则**：  
- 最大长度：`255` 字符
block_type_id | string | 是 | block 类型 ID。该 ID 可在 [开发者后台](https://open.feishu.cn/app) > **应用详情页** > **应用能力** > **工作台小组件** > **BlockTypeID** 获取。  
**示例值**："blk_614c1c952f800014b27f87d6"  
**数据校验规则**：  
- 最大长度：`128` 字符
source_data | string | 是 | 内容  
**示例值**："{"data":"业务数据"}"
source_meta | string | 是 | 元数据  
**示例值**："{"id":7090084015725608979}"
version | string | 是 | 版本号(自增值)  
**示例值**："1"
source_link | string | 否 | block原链接  
**示例值**："{"_data":"https://docs.feishu.cn/block/78","_version":1}"
owner | string | 否 | 所有者  
**示例值**："ou_fa7aa170f92d1615de63371ac425a767"
extra | string | 否 | 扩展字段  
**示例值**："{}"
i18n_summary | string | 否 | 国际化概括  
**示例值**："{"cn":"这是一个block","va": "this is a block"}"
i18n_preview | string | 否 | 国际化预览  
**示例值**："{"cn":"这是一个block","va": "this is a block"}"
summary | string | 否 | 概括  
**示例值**："{"cn":"这是一个block"}"
preview | string | 否 | 预览  
**示例值**："{"cn":"这是一个block"}"

### 请求体示例
```json
{
    "title": "已阅block",
    "block_type_id": "blk_614c1c952f800014b27f87d6",
    "source_data": "{"data":"业务数据"}",
    "source_meta": "{"id":7090084015725608979}",
    "version": "1",
    "source_link": "{"_data":"https://docs.feishu.cn/block/78","_version":1}",
    "owner": "ou_fa7aa170f92d1615de63371ac425a767",
    "extra": "{}",
    "i18n_summary": "{"cn":"这是一个block","va": "this is a block"}",
    "i18n_preview": "{"cn":"这是一个block","va": "this is a block"}",
    "summary": "{"cn":"这是一个block"}",
    "preview": "{"cn":"这是一个block"}"
}
```

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
entity | entity | 返回对象实体
block_id | string | block 唯一标识。  
- 该 ID 对应的是定制化工作台添加工作台小组件时，页面右上角组件名称下方的 **BlockID**。  
- 同一个工作台小组件在同一个定制化工作台中添加的位置不同时，block_id 也会不同。
title | string | 标题
block_type_id | string | block 类型ID
source_data | string | 业务数据 json
source_meta | string | 元数据 json
version | string | 版本号(自增)
source_link | string | 链接
summary | string | 总括
preview | string | 预览
i18n_summay | string | 综述 json
i18n_preview | string | 预览 json
owner | string | 所有者
extra | string | 扩展字段 json

### 响应体示例
```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "entity": {
            "block_id": "7794641623571830467",
            "title": "已阅 block",
            "block_type_id": "blk_6204893fee000013739f5359",
            "source_data": "{"data":"业务数据"}",
            "source_meta": "{"bizId":"7094067849152430100"}",
            "version": "1651716489253602",
            "source_link": "{}",
            "summary": "{"cn":"这是一个block"}",
            "preview": "{"cn":"这是一个block"}",
            "i18n_summay": "{"cn":"这是一个block","va": "this is a block"}",
            "i18n_preview": "{"cn":"这是一个block","va": "this is a block"}",
            "owner": "ou_fa7aa170f92d1615de63371ac425a767",
            "extra": "{}"
        }
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
500 | 1850001 | invalid parameters | 检查参数是否遗漏
500 | 1850002 | size exceeded | 传入数据超长
500 | 1850003 | no permission | 检查tenant-access-token是否有该block权限
500 | 1850004 | system error | 服务端错误，联系oncall
