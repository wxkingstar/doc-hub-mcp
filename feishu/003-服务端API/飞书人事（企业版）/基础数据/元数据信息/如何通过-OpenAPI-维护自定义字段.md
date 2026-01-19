---
title: "如何通过 OpenAPI 维护自定义字段"
source_url: https://open.feishu.cn/document/corehr-v1/basic-infomation/custom_field/how-to
last_remote_update: 2026-01-05
last_remote_update_timestamp: 1767611792000
---
最后更新于 2026-01-05

# 如何通过 OpenAPI 维护自定义字段
## 如何获取自定义字段的元数据？
### 1.调用方式
**Step 1:** 调用「[获取飞书人事对象列表](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom_field/list_object_api_name)」，查询自定义字段所属对象的 `object_api_name`
> 说明：该接口中会返回系统预置对象和自定义对象
>
> - 系统预置对象：飞书人事开箱时预置生成，不需要租户再创建
> - 自定义对象：当用户在[「人员档案配置」](https://people.feishu.cn/people/hr-settings/profile)页面添加自定义分组时，默认会创建一个与分组同名的自定义对象
>
![Xnip2024-07-12_17-57-55_副本.jpg](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/6baa837a34731827c311cb0e3bf11b67_IHtEOsKG1T.jpg?lazyload=true&width=3558&height=1822)

**Step 2:** 根据对象的 `object_api_name` 调用「[获取自定义字段列表](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom_field/query)」接口，获取字段的 API name

常见系统对象：

| 对象名称     | object_api_name      |
|--------------|----------------------|
| 个人信息     | person               |
| 证件         | national_id          |
| 地址         | address              |
| 银行账户     | bank_account         |
| 紧急联系人   | emergency_contact    |
| 家庭成员     | dependent            |
| 公民身份信息 | citizenship_status   |
| 教育经历     | education            |
| 工作经历     | work_experience      |
| 资料附件     | personal_profile     |
| 个人附加信息 | person_info_chn      |
| 工作信息     | employment           |
| 任职记录     | job_data             |
| 离职信息     | offboarding_info     |
| 试用期信息   | probation_management |
| 部门         | department           |

**Step 3:** 根据 `object_api_name`, `custom_api_name` 调用「[获取字段详情](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom_field/get_by_param)」接口，获得字段详情

### 2.示例
场景：「个人信息」对象下创建了一个自定义分组「个人证书」，需要查询「个人证书」下「职业证书等级」字段的枚举值有哪些。

![Xnip2024-07-12_17-49-15.jpg](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/587162a2834ff2d38107caae89ad2700_L8FMa8v1b8.jpg?height=1828&lazyload=true&width=3570)

## 怎么维护自定义字段的数据？
### 1. 自定义字段的数据
飞书人事对外提供的很多 OpenAPI 都支持写入自定义字段的数据，以[创建个人信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/person/create)为例：
- 设置请求体 **`custom_fields`**，以 `custom_api_name`、`value` 的结构写入具体数据
![](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/fe107bf84a430ca5e17deef80099ebb3_6cLkpKeoGR.png?height=1334&lazyload=true&width=2852)

- **传参示例：**
> - 写入一个字段编码为 `custom_field_1__c` 的自定义字段的值
> - 注意不同的接口参数名称可能不同，如 `custom_api_name`、`field_name` 等

```json 
{
	"custom_fields": [
		{
			"custom_api_name": "custom_field_1__c",
			"value": "\"这是一段单行文本\""
		}
	]
}
``` 

#### 不同字段类型的数据传输格式
字段值是 JSON 转义后的字符串，根据元数据定义不同，字段格式不同，参考如下：

类型 | Type 值 | 传入 Value 格式 | 说明
--- | --- | --- | ---
文本 | 1 | 单语单行：<code>"field__c": "\"这是一段单行文本\""</code>  
    单语多行：<code>"field__c": "\"这是多行文本第一行\\n这是多行文本第二行\""</code>  
    多语单行：<code>"field__c": "{\"en-US\":\"这是英文\",\"zh-CN\":\"这是中文\"}"</code>  
    多语多行：<code>"field__c": "{\"en-US\":\"这是英文第一行\\n这是英文第二行\",\"zh-CN\":\"这是中文第一行\\n这是中文第二行\"}"</code> | 文本属性（是否多语、是否多行等）可通过[获取字段详情](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom_field/get_by_param)接口获得
是否 | 2 | `"field__c": "\"true\""`
数字 | 3 | `"field__c": "\"2334.00\""`
选项 | 4 | 单选：<code>"field__c": "\"enum_api_name\""</code>  
    多选：<code>"field__c": "[\"enum_api_name_1\",\"enum_api_name_2\"]"</code> | 传入选项的 API name，可通过[获取字段详情](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/custom_field/get_by_param)接口获得
查找 | 5 | 人员（单选）：<code>"field__c": "\"7050076802819163661\""</code>  
    人员（多选）：<code>"field__c": "[\"6976524804564321805\",\"6976446378482484773\"]"</code>  
    自定义分组：<code>"field__c": "[{\"wk_id\":\"7251542212374136358\",\"field_api_name_1\":\"文本1\",\"field_api_name_2\":\"enum_api_name_1\",\"field_api_name_3\":\"文本2\"}]"</code> | 人员（单选）和人员（多选）组件传入雇佣 ID，且只能用 <code>people_corehr_id</code> 类型的 `user_id_type`  
      自定义分组中的数据要更新时，需要输入 <code>wk_id</code>，可通过查询接口获得，不传 <code>wk_id</code> 认为是新增
自动编码 | 6 | `"field__c": "\"ABC123456XYZ\""` | 只能查询，不可修改
日期时间 | 7 | 日期：<code>"field__c": "\"2023-01-24\""</code>  
    日期时间：<code>"field__c": "\"2024-01-23 05:06:07\""</code>
附件 | 8 | 附件单选：<code>"field__c": [{"field_name": "field_api_name","value": "\"[{\\\"file_id\\\":\\\"64489fc45cc11e4688d3daf1_d80d327756bd4140ad292fc94d9e9e0f\\\"}]\""}]</code>  
    附件多选：<code>"field__c": [{"field_name": "field_api_name","value": "\"[{\\\"file_id\\\":\\\"64489fc716ba39874c68c077_6fc1ba59668a4fae8a7f045816a18ecc\\\"},{\\\"file_id\\\":\\\"63eb3433fb14e3de87ac7f78_8f74c25f2e85401fbea1d787feea041b\\\"}]\""}]</code>
图片 | 9 | - | 只能查询，不可修改
计算字段 | 10 | - | 只能查询，不可修改
反向查找 | 11 | - | 只能查询，不可修改

### 2. 自定义分组的数据
目前飞书人事仅支持在[「人员档案配置」](https://people.feishu.cn/people/hr-settings/profile)功能下创建自定义分组，因此仅人员相关的 OpenAPI（如：[创建个人信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/person/create)、[更新个人信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/person/patch)等）支持更新自定义分组的数据。以[更新个人信息](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/person/patch)为例：

-   **传参示例：**
    > -   更新 2 条「个人证书」数据，第一条是更新数据；第二条是新建一条数据
        > -   自定义分组「个人证书」对应的 `object_api_name` 为 `custom_obj_6__c`
        > -   自定义分组内包含的 2 个自定义字段「职业证书名称」、「职业证书类型」，对应的 `custom_api_name` 分别为 `custom_field_1__c`、`custom_field_2__c`

```json 
{
	"custom_fields": [
		{
			"field_name": "custom_obj_6__c",
			"value": "[{\"custom_field_1__c\":\"证书名称一\",\"custom_field_2__c\":\"enum_api_name_1\",\"wk_id\":\"6863326262618752111\"},{\"custom_field_1__c\":\"证书名称二\",\"custom_field_2__c\":\"enum_api_name_2\"}]"
		}
	]
}
``` 

-   **实现效果：**
-  
| **更新前**    | **更新后**   |
| ------------ | ----------- |
| 一条证书数据：1.  职业证书名称：证书名称一、职业证书等级：中级证书![Xnip2024-07-12_17-50-19.jpg](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/4d7baaabbdd5e653fe945315d2ee9277_lthTC2Wvv8.jpg?height=1830&lazyload=true&width=3566)| 两条证书数据：1.  职业证书名称：证书名称一、职业证书等级：高级证书；2.职业证书名称：证书名称二、职业证书等级：中级证书![Xnip2024-07-12_17-49-55.jpg](https://sf3-cn.feishucdn.com/obj/open-platform-opendoc/e6a48003211e8286ebe8cf6c4d9cedb9_Fg7UGGmjSK.jpg?height=1834&lazyload=true&width=3550)
