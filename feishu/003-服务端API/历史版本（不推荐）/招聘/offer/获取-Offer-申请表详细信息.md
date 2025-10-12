---
title: "获取 Offer 申请表详细信息"
source_url: https://open.feishu.cn/document/server-docs/historic-version/hire_internal/offer/get
last_remote_update: 2021-05-24
last_remote_update_timestamp: 1621859616000
---
最后更新于 2021-05-24

# 获取 Offer 申请表详细信息

根据 Offer 申请表 ID，获取 Offer 申请表的详细信息

## 请求
名称 | 值
---|---
HTTP URL | https://open.feishu.cn/open-apis/hire/v1/offer_schemas/:offer_schema_id
HTTP Method | GET
权限要求  
 **调用该 API 所需的权限。开启其中任意一项权限即可调用** | 获取 offer 申请表信息

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
offer_schema_id | string | offer申请表的ID *必需属性  
**示例值**："1231231231231"

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | offer_schema | \-
&emsp;∟&nbsp;id | string | offer申请表ID
&emsp;∟&nbsp;scenario | int | offer申请表使用场景  
**可选值有**：  
- `1`：Offer审批表
&emsp;∟&nbsp;version | int | 申请表版本
&emsp;∟&nbsp;object_list | offer_schema_detail\[\] | 字段对象信息
&emsp;&emsp;∟&nbsp;id | string | 字段ID
&emsp;&emsp;∟&nbsp;name | offer_schema_name | 字段名称
&emsp;&emsp;&emsp;∟&nbsp;zh_cn | string | 中文名
&emsp;&emsp;&emsp;∟&nbsp;en_us | string | 英文名
&emsp;&emsp;∟&nbsp;type | string | 字段类型, text=单行文本, long_text=多行文本, select=单选, multi_select=多选, date_select=日期, number=数字
&emsp;&emsp;∟&nbsp;is_customized | boolean | 字段是否为自定义
&emsp;&emsp;∟&nbsp;option_list | offer_schema_detail_option\[\] | 单选/多选可选择字段的选项值
&emsp;&emsp;&emsp;∟&nbsp;name | offer_schema_name | 名字
&emsp;&emsp;&emsp;&emsp;∟&nbsp;zh_cn | string | 中文名
&emsp;&emsp;&emsp;&emsp;∟&nbsp;en_us | string | 英文名
&emsp;&emsp;&emsp;∟&nbsp;index | int | 选项序号
&emsp;&emsp;&emsp;∟&nbsp;active_status | int | 选项当前是否启用  
**可选值有**：  
- `1`：进行中  
- `2`：已终止

### 响应体示例

```json
{
    "code": 0,
    "msg": "success",
    "data": {
        "id": "1213213123123",
        "scenario": 1,
        "version": 121,
        "object_list": [
            {
                "id": "1213213123123",
                "name": {
                    "zh_cn": "名字",
                    "en_us": "name"
                },
                "type": "number",
                "is_customized": true,
                "option_list": [
                    {
                        "name": {
                            "zh_cn": "名字",
                            "en_us": "name"
                        },
                        "index": 121,
                        "active_status": 1
                    }
                ]
            }
        ]
    }
}
```
