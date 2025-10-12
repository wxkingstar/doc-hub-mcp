---
title: "获取 Offer 信息"
source_url: https://open.feishu.cn/document/server-docs/hire-v1/candidate-management/delivery-process-management/offer/offer
---
最后更新于 2025-07-30

# 获取 Offer 信息

根据投递 ID 获取 Offer 信息。

**注意事项**：注意：该接口暂时不支持查询实习Offer

## 请求

基本 | 
--- | ---
HTTP URL | https://open.feishu.cn/open-apis/hire/v1/applications/:application_id/offer
HTTP Method | GET
接口频率限制 | [20 次/秒](https://open.feishu.cn/document/ukTMukTMukTM/uUzN04SN3QjL1cDN)
支持的应用类型 | 自建应用、商店应用
权限要求  
            **调用该 API 所需的权限。开启其中任意一项权限即可调用**  
            开启任一权限即可 | 更新投递信息(hire:application)  
            获取投递信息(hire:application:readonly)
字段权限要求 | **注意事项**：该接口返回体中存在下列敏感字段，仅当开启对应的权限后才会返回；如果无需获取这些字段，则不建议申请  
        获取用户 user ID(contact:user.employee_id:readonly)

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
application_id | string | 投递ID，可通过[获取投递列表](https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/application/list)获取  
**示例值**："6949805467799537964"

### 查询参数

名称 | 类型 | 必填 | 描述
--- | --- | --- | ---
user_id_type | string | 否 | 用户 ID 类型  
**示例值**：open_id  
**可选值有**：  
- open_id：标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。[了解更多：如何获取 Open ID](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-openid)  
- union_id：标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。[了解更多：如何获取 Union ID？](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-union-id)  
- user_id：标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。[了解更多：如何获取 User ID？](https://open.feishu.cn/document/uAjLw4CM/ugTN1YjL4UTN24CO1UjN/trouble-shooting/how-to-obtain-user-id)  
**默认值**：`open_id`  
**当值为 `user_id`，字段权限要求**：  
获取用户 user ID(contact:user.employee_id:readonly)
department_id_type | string | 否 | 此次调用中使用的部门 ID 类型。  
**示例值**："open_department_id"  
**可选值有**：  
- open_department_id：【飞书】用来在具体某个应用中标识一个部门，同一个department_id 在不同应用中的 open_department_id 相同  
- department_id：【飞书】用来标识租户内一个唯一的部门  
**默认值**：`open_department_id`
job_level_id_type | string | 否 | 此次调用中使用的「职级 ID」的类型  
**示例值**："people_admin_job_level_id"  
**可选值有**：  
- people_admin_job_level_id：「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。  
- job_level_id：「飞书管理后台」适用的职级 ID，通过[获取租户职级列表](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_level/list)接口获取  
**默认值**：`people_admin_job_level_id`
job_family_id_type | string | 否 | 此次调用中使用的「序列 ID」的类型  
**示例值**："people_admin_job_category_id"  
**可选值有**：  
- people_admin_job_category_id：「人力系统管理后台」适用的序列 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。  
- job_family_id：「飞书管理后台」适用的序列 ID，通过[获取租户序列列表](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/job_family/list)接口获取  
**默认值**：`people_admin_job_category_id`
employee_type_id_type | string | 否 | 此次调用中使用的「人员类型 ID」的类型  
**示例值**："people_admin_employee_type_id"  
**可选值有**：  
- people_admin_employee_type_id：「人力系统管理后台」适用的人员类型 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。  
- employee_type_enum_id：「飞书管理后台」适用的人员类型 ID，通过[查询人员类型](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/list)接口获取  
**默认值**：`people_admin_employee_type_id`

## 响应

### 响应体

名称 | 类型 | 描述
--- | --- | ---
code | int | 错误码，非 0 表示失败
msg | string | 错误描述
data | \- | \-
offer | application_offer | Offer数据
id | string | Offer ID
application_id | string | 投递ID
basic_info | application_offer_basic_info | 基础信息
offer_type | int | Offer 类型，废弃字段  
**可选值有**：  
- 1：社招offer  
- 2：校招offer  
- 3：实习offer  
- 4：实习生转正offer
remark | string | 备注
expire_time | int | Offer 过期时间，毫秒级时间戳
owner_user_id | string | Offer 负责人 ID，与入参`user_id_type`类型一致
creator_user_id | string | Offer 创建人 ID，与入参`user_id_type`类型一致
employee_type | base_bilingual_with_id | Offer 人员类型
id | string | 人员类型 ID，与入参`employee_type_id_type` 类型一致
zh_name | string | 人员类型中文名称
en_name | string | 人员类型英文名称
create_time | string | 创建时间，毫秒级时间戳
leader_user_id | string | 直属上级 ID，与入参`user_id_type`类型一致
onboard_date | string | 入职日期，格式为YYYY-MM-DD
department_id | string | 入职部门，与入参中的`department_id_type`类型一致
probation_month | int | 试用期, 比如试用期6个月
contract_year | int | 合同期(年)，推荐使用「contract_period」
contract_period | contract_period_info | 合同期（年/月）
period_type | int | 合同周期类型  
**可选值有**：  
- 1：月  
- 2：年
period | int | 合同时长
recruitment_type | base_bilingual_with_id | 雇员类型
id | string | 职位雇佣类型ID，详情请参考：[枚举常量介绍](https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/enum)中「职位性质/雇佣类型（recruitment_type）枚举定义」
zh_name | string | 雇员类型中文名称
en_name | string | 雇员类型英文名称
sequence | base_bilingual_with_id | 序列
id | string | 序列 ID，与入参`job_family_id_type` 类型一致
zh_name | string | 序列中文名称
en_name | string | 序列英文名称
level | base_bilingual_with_id | 级别
id | string | 级别 ID，与入参`job_level_id_type` 类型一致
zh_name | string | 级别中文名称
en_name | string | 级别英文名称
onboard_address | base_address | 入职地点
id | string | 入职地点 ID，详情请参考：[获取地址列表](https://open.larkoffice.com/document/server-docs/hire-v1/recruitment-related-configuration/location/list)
zh_name | string | 入职地点中文名称
en_name | string | 入职地点英文名称
district | base_district | 区域信息
zh_name | string | 区域中文名称
en_name | string | 区域英文名称
code | string | 区域编码
location_type | int | 地址类型
city | base_city | 城市信息
zh_name | string | 城市中文名称
en_name | string | 城市英文名称
code | string | 城市编码
location_type | int | 地址类型  
**可选值有**：  
- 1：COUNTRY（国家）  
- 2：STATE（省份/州）  
- 3：CITY（市）  
- 4：DISTRICT（区/县）  
- 5：ADDRESS（地址）
state | base_city | 省信息
zh_name | string | 省中文名称
en_name | string | 省英文名称
code | string | 省编码
location_type | int | 地址类型  
**可选值有**：  
- 1：COUNTRY（国家）  
- 2：STATE（省份/州）  
- 3：CITY（市）  
- 4：DISTRICT（区/县）  
- 5：ADDRESS（地址）
country | base_country | 国家信息
zh_name | string | 国家中文名称
en_name | string | 国家英文名称
code | string | 国家编码
location_type | int | 地址类型  
**可选值有**：  
- 1：COUNTRY（国家）  
- 2：STATE（省份/州）  
- 3：CITY（市）  
- 4：DISTRICT（区/县）  
- 5：ADDRESS（地址）
work_address | base_address | 工作地点
id | string | 工作地点 ID，详情请参考：[获取地址列表](https://open.larkoffice.com/document/server-docs/hire-v1/recruitment-related-configuration/location/list)
zh_name | string | 工作地点中文名称
en_name | string | 工作地点英文名称
district | base_district | 区域信息
zh_name | string | 区域中文名称
en_name | string | 区域英文名称
code | string | 区域编码
location_type | int | 地址类型
city | base_city | 城市信息
zh_name | string | 城市中文名称
en_name | string | 城市英文名称
code | string | 城市编码
location_type | int | 地址类型  
**可选值有**：  
- 1：COUNTRY（国家）  
- 2：STATE（省份/州）  
- 3：CITY（市）  
- 4：DISTRICT（区/县）  
- 5：ADDRESS（地址）
state | base_city | 省信息
zh_name | string | 省中文名称
en_name | string | 省英文名称
code | string | 省编码
location_type | int | 地址类型  
**可选值有**：  
- 1：COUNTRY（国家）  
- 2：STATE（省份/州）  
- 3：CITY（市）  
- 4：DISTRICT（区/县）  
- 5：ADDRESS（地址）
country | base_country | 国家信息
zh_name | string | 国家中文名称
en_name | string | 国家英文名称
code | string | 国家编码
location_type | int | 地址类型  
**可选值有**：  
- 1：COUNTRY（国家）  
- 2：STATE（省份/州）  
- 3：CITY（市）  
- 4：DISTRICT（区/县）  
- 5：ADDRESS（地址）
customize_info_list | application_offer_custom_value\[\] | 自定义字段信息
object_id | string | 自定义字段 ID，详情请参考：[获取 Offer 申请表信息](https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/offer_application_form/get)
customize_value | string | 自定义字段 value （值为人员ID的自定义字段 value 暂不支持ID转换，会以 people_admin_id 类型返回）
position_id | string | 岗位 ID，可通过[查询岗位信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/position/query) 获取（仅限飞书人事租户使用，若链接无法打开，则说明飞书人事未启用岗位，请联系[技术支持](https://applink.feishu.cn/TLJpeNdW)开通）
job_offered | string | 入职职位
job_grade_id | string | 职等 ID，可通过[查询职等](https://open.larkoffice.com/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/job_grade/query) 获取（仅限飞书人事租户使用）
common_attachment_id_list | string\[\] | 通用附件 ID 列表，可通过[获取附件信息](https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/attachment/get)接口获取附件的详细信息
pathway_id | string | 通道 ID
salary_plan | application_offer_salary_plan | 薪酬计划
currency | string | 币种
basic_salary | string | 基本薪资，为JSON 格式，amount 代表基本薪资的金额，peroid 代表基本薪资的周期单位，如：`{"amount":"10000","period":2}`。  
**peroid 可选值有:**  
- 1 :  日薪  
- 2 :  月薪
probation_salary_percentage | string | 试用期百分比
award_salary_multiple | string | 年终奖月数
option_shares | string | 期权股数
quarterly_bonus | string | 季度奖金额
half_year_bonus | string | 半年奖金额
total_annual_cash | string | 年度现金总额(数量，非公式)
customize_info_list | application_offer_custom_value\[\] | 自定义字段的 value 信息，详情可参考：[获取 Offer 申请表信息](https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/offer_application_form/get) 中的自定义字段
object_id | string | 自定义字段 ID
customize_value | string | 自定义字段 value
schema_id | string | 当前 Offer 使用的 schema ID，详情可参考：[获取 Offer 申请表信息](https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/offer_application_form/get)
offer_status | int | Offer 状态  
**可选值有**：  
- 0：所有  
- 1：未申请  
- 2：审批中  
- 3：审批已撤回  
- 4：审批通过  
- 5：审批不通过  
- 6：Offer 已发出  
- 7：候选人已接受  
- 8：候选人已拒绝  
- 9：Offer 已失效  
- 10：未审批  
- 11：实习待入职（仅实习 Offer 具有）  
- 12：实习已入职（仅实习 Offer 具有）  
- 13：实习已离职（仅实习 Offer 具有）
job_info | offer_job_info | 职位信息
job_id | string | Offer 职位 ID
job_name | string | Offer 职位名称
customized_module_list | application_offer_custom_module\[\] | offer自定义模块列表
ID | string | 自定义模块ID
object_list | application_offer_custom_value\[\] | 自定义模块下字段的值
object_id | string | 自定义字段ID
customize_value | string | 自定义字段Value（值为人员ID的自定义字段 value 暂不支持ID转换，会以 people_admin_id 类型返回）
job_requirement_id | string | 招聘需求ID，详情请查看：[获取招聘需求信息](https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/job_requirement/list_by_id)
offer_send_record_list | offer_send_record\[\] | offer 发送记录列表（灰度中，如需使用请联系客户经理申请灰度）
offer_send_record_id | string | offer 发送记录 id
operator_user_id | string | 操作人 ID，与入参`user_id_type`类型一致
send_time | string | offer 发送时间，毫秒时间戳
offer_letter_status | int | offer 状态  
**可选值有**：  
- 1：已创建  
- 2：已接受  
- 3：已拒绝  
- 4：已过期  
- 5：已作废
email_info | offer_email_info | offer 邮件信息
cc_email_list | string\[\] | 抄送人邮件列表
receiver_email_list | string\[\] | 接收人邮件列表
content | string | 邮件内容
acceptance_list | acceptance\[\] | Offer 跟进记录
operator_type | int | 操作类型  
**可选值有**：  
- 1：HR 操作  
- 2：候选人操作
conclusion | int | offer 接受或拒绝的结果  
**可选值有**：  
- 1：接受  
- 2：拒绝
memo | string | 备注，如果是拒绝，则展示拒绝原因
operate_time | string | 操作时间，毫秒时间戳
offer_file_list | offer_file\[\] | offer 文件列表
id | string | 文件 id，可通过[获取附件信息](https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/attachment/get)接口获取，查询参数 type 传枚举值 3，通用附件
file_template_id | string | 文件模板 id，暂无接口可通过该 ID 获取对应信息
file_template_name | string | 文件模板名称
file_template_type_id | string | 文件模板类型 id，暂无接口可通过该 ID 获取对应信息
file_template_type_name | string | 文件模板类型名称
offer_signature_info | offer_signature_info | offer 签署信息
id | string | 电子签信息 id，暂无接口可通过该 ID 获取对应信息
signature_status | int | 电子签签署状态  
**可选值有**：  
- 1：未签署  
- 2：所有签署人已签署  
- 3：部分签署人已签署  
- 4：已拒绝  
- 5：已失效
attachment_list | signature_attachment\[\] | 电子签附件列表
id | string | 文件 id，可通过[获取附件信息](https://open.feishu.cn/document/ukTMukTMukTM/uMzM1YjLzMTN24yMzUjN/hire-v1/attachment/get)接口获取，查询参数 type 传枚举值 3，通用附件
file_name | string | 文件名称
file_template_id | string | 文件模板 id，暂无接口可通过该 ID 获取对应信息
file_template_name | string | 文件模板名称
file_template_type_id | string | 文件模板类型 id，暂无接口可通过该 ID 获取对应信息
file_template_type_name | string | 文件模板类型名称

### 响应体示例
```json
{
    "code": 0,
    "msg": "ok",
    "data": {
        "offer": {
            "id": "7057802493489285412",
            "application_id": "7020661401874614564",
            "basic_info": {
                "offer_type": 1,
                "remark": "10",
                "expire_time": 1653383498000,
                "owner_user_id": "ou_99be8e24ad1ad390b6cd3b8916940df1",
                "creator_user_id": "ou_99be8e24ad1ad390b6cd3b8916940df1",
                "employee_type": {
                    "id": "1",
                    "zh_name": "正式",
                    "en_name": "Regular"
                },
                "create_time": "1628512038000",
                "leader_user_id": "ou_99be8e24ad1ad390b6cd3b8916940df1",
                "onboard_date": "2021-05-20",
                "department_id": "od-6b394871807047c7023ebfc1ff37cd3a",
                "probation_month": 1,
                "contract_year": 3,
                "contract_period": {
                    "period_type": 1,
                    "period": 3
                },
                "recruitment_type": {
                    "id": "1",
                    "zh_name": "正式",
                    "en_name": "Regular"
                },
                "sequence": {
                    "id": "1",
                    "zh_name": "正式",
                    "en_name": "Regular"
                },
                "level": {
                    "id": "1",
                    "zh_name": "正式",
                    "en_name": "Regular"
                },
                "onboard_address": {
                    "id": "6932753007915206919",
                    "zh_name": "名字",
                    "en_name": "name",
                    "district": {
                        "zh_name": "伦敦",
                        "en_name": "London",
                        "code": "400700",
                        "location_type": 1
                    },
                    "city": {
                        "zh_name": "中文",
                        "en_name": "eng",
                        "code": "400700",
                        "location_type": 1
                    },
                    "state": {
                        "zh_name": "中文",
                        "en_name": "eng",
                        "code": "400700",
                        "location_type": 1
                    },
                    "country": {
                        "zh_name": "中文",
                        "en_name": "eng",
                        "code": "400700",
                        "location_type": 1
                    }
                },
                "work_address": {
                    "id": "6932753007915206919",
                    "zh_name": "名字",
                    "en_name": "name",
                    "district": {
                        "zh_name": "伦敦",
                        "en_name": "London",
                        "code": "400700",
                        "location_type": 1
                    },
                    "city": {
                        "zh_name": "中文",
                        "en_name": "eng",
                        "code": "400700",
                        "location_type": 1
                    },
                    "state": {
                        "zh_name": "中文",
                        "en_name": "eng",
                        "code": "400700",
                        "location_type": 1
                    },
                    "country": {
                        "zh_name": "中文",
                        "en_name": "eng",
                        "code": "400700",
                        "location_type": 1
                    }
                },
                "customize_info_list": [
                    {
                        "object_id": "key",
                        "customize_value": "value"
                    }
                ],
                "position_id": "123",
                "job_offered": "入职职位",
                "job_grade_id": "6897079709306259720",
                "common_attachment_id_list": [
                    "7483412052430997804"
                ],
                "pathway_id": "123456"
            },
            "salary_plan": {
                "currency": "CNY",
                "basic_salary": "{\"amount\":\"10000\",\"period\":2}",
                "probation_salary_percentage": "10%",
                "award_salary_multiple": "12",
                "option_shares": "11",
                "quarterly_bonus": "11111",
                "half_year_bonus": "11111",
                "total_annual_cash": "11111",
                "customize_info_list": [
                    {
                        "object_id": "key",
                        "customize_value": "value"
                    }
                ]
            },
            "schema_id": "6963562624677398823",
            "offer_status": 0,
            "job_info": {
                "job_id": "7080891505426925854",
                "job_name": "xx"
            },
            "customized_module_list": [
                {
                    "ID": "6930815272790114324",
                    "object_list": [
                        {
                            "object_id": "6930815272790114324",
                            "customize_value": "value"
                        }
                    ]
                }
            ],
            "job_requirement_id": "1231231232312312",
            "offer_send_record_list": [
                {
                    "offer_send_record_id": "1718959426734",
                    "operator_user_id": "ou_ce613028fe74745421f5dc320bb9c709",
                    "send_time": "1718959426734",
                    "offer_letter_status": 1,
                    "email_info": {
                        "cc_email_list": [
                            "123@test.com"
                        ],
                        "receiver_email_list": [
                            "123@test.com"
                        ],
                        "content": "This is a test email."
                    },
                    "acceptance_list": [
                        {
                            "operator_type": 1,
                            "conclusion": 1,
                            "memo": "Abort",
                            "operate_time": "1718959426734"
                        }
                    ],
                    "offer_file_list": [
                        {
                            "id": "12345678901",
                            "file_template_id": "1718959426734",
                            "file_template_name": "offer 文件",
                            "file_template_type_id": "1718959426734",
                            "file_template_type_name": "offer 文件"
                        }
                    ],
                    "offer_signature_info": {
                        "id": "1718959426734",
                        "signature_status": 1,
                        "attachment_list": [
                            {
                                "id": "12345678901",
                                "file_name": "offer 文件",
                                "file_template_id": "1718959426734",
                                "file_template_name": "offer 文件",
                                "file_template_type_id": "1718959426734",
                                "file_template_type_name": "offer 文件"
                            }
                        ]
                    }
                }
            ]
        }
    }
}
```

### 错误码

HTTP状态码 | 错误码 | 描述 | 排查建议
--- | --- | --- | ---
500 | 1002001 | 系统错误 | 请根据实际报错信息定位或咨询[技术支持](https://applink.feishu.cn/TLJpeNdW)
400 | 1002002 | 参数错误 | 检查参数是否正确，例如类型，大小
