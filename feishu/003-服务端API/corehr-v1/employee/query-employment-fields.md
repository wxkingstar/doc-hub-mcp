<!--
title: 查询员工信息字段下钻列表
id: 7405194305036845057
fullPath: /uAjLw4CM/ukTMukTMukTM/corehr-v2/employee/query-employment-fields
updatedAt: 1748591931000
source: https://open.feishu.cn/document/corehr-v1/employee/query-employment-fields
-->
# 查询员工信息的字段格式参考

本文中列举出 [【搜索员工信息】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/corehr-v2/employee/search)和[【批量查询员工信息】](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/corehr-v2/employee/batch_get)中 fields 参数支持的字段。

大多数响应体字段路径就是 fields 中需要传递的值。
- 个别字段有多个对应的查询方式。
- 多值（数组）基本无需下钻，会返回列表内的所有字段。

> 持续完善，如有问题请联系[技术支持](https://applink.feishu.cn/T8NjPznGe61S)

| 响应体字段路径| fields 传参|字段描述|
|--|--|--|
| ats_application_id| ats_application_id|招聘投递id           
| avatar_url| avatar_url|头像链接      
| company_id| company_id|公司id  
| compensation_type| compensation_type|薪资类型        
| contract_end_date| contract_end_date|合同结束日期          
| contract_expected_end_date| contract_expected_end_date|预计合同结束日期
| contract_start_date | contract_start_date|合同开始日期            
| custom_fields| custom_fields，custom_fields.xxx|自定义分组/字段 
| custom_org| custom_org_01，custom_org_02，custom_org_03，custom_org_04，custom_org_05 |自定义组织
| department.department_name| department.name;department.department_name|部门名称
| department.id| department_id|部门id
| department.id_v2| department_id|部门id_v2          
| department_id| department_id|部门id           
| department_id_v2| department_id |部门id_v2             
| direct_manager.email_address |direct_manager.email_address|直属上级工作邮箱
| direct_manager.employment_id_v2| direct_manager_id|直属上级员工id_v2
| direct_manager.employment_id| direct_manager_id|直属上级员工id
| direct_manager.employee_number|direct_manager.employee_number|直属上级工号
| direct_manager.person_info.person_id| 不支持单独下钻，查询以下 direct_manager.person_info 字段时会一起返回 |直属上级个人信息id               
| direct_manager.person_info.preferred_english_full_name|direct_manager.person_info.preferred_english_full_name|直属上级常用姓名（英文）             
|direct_manager.person_info.preferred_local_full_name|direct_manager.person_info.preferred_local_full_name|直属上级常用姓名（本地）              
|direct_manager.person_info.preferred_name|direct_manager.person_info.preferred_name|直属上级常用姓名  
| direct_manager_id| direct_manager_id|直属上级id               
| direct_manager_id_v2| direct_manager_id|直属上级id_v2              
| dotted_line_manager.email_address| dotted_line_manager.email_address|虚线上级工作邮箱  
|dotted_line_manager.employee_number| dotted_line_manager.employee_number| 虚线上级工号
| dotted_line_manager.employment_id| dotted_line_manager_id|虚线上级员工id
| dotted_line_manager.employment_id_v2| dotted_line_manager_id|虚线上级员工id_v2
| dotted_line_manager.person_info.person_id| 不支持单独下钻，查询以下dotted_line_manager.person_info 字段时会一起返回|虚线上级个人信息id                   
| dotted_line_manager.person_info.preferred_english_full_name | dotted_line_manager.person_info.preferred_english_full_name | 虚线上级常用姓名（英文）                    
| dotted_line_manager.person_info.preferred_local_full_name   | dotted_line_manager.person_info.preferred_local_full_name             |虚线上级常用姓名（本地）                                     
| dotted_line_manager.person_info.preferred_name              | dotted_line_manager.person_info.preferred_name                        | 虚线上级常用姓名                                      
| dotted_line_manager_id                                      | dotted_line_manager_id                                                | 虚线上级id                   
| dotted_line_manager_id_v2                                   | dotted_line_manager_id                                                | 虚线上级id_v2                   
| effective_date                                              | effective_date                                                        |员工生效日期
| email_address                                               | email_address                                                         | 工作邮箱                   
| employee_number                                             | employee_number                                                       |工号               
| employee_type_id                                            | employee_type_id                                                      | 人员类型id                   
| employment_id                                               | employment_id                                                         | 员工id           
| employment_id_v2                                            | employment_id                                                         |  员工id_v2                  
| employment_status                                           | employment_status                                                     | 雇佣状态                   
| employment_type                                             | employment_type                                                       | 用工类型               
| expiration_date                                             | expiration_date                                                       | 员工离职日期            
| external_id                                                 | external_id                                                           | 外键 ID                  
| international_assignment                                    | international_assignment                                              |外派记录                   
| job.active                                                  | job.active                                                            | 职务启用状态                  
| job.code                                                    | job.code                                                     |职务编码              
| job.description                                             | job.description                                                       |职务描述                    
| job.effective_time                                          | job.effective_time                                                    |职务生效日期                    
| job.expiration_time                                         | job.expiration_time                                                   |职务失效日期                    
| job.id                                                      | job.id                                                                |职务id   
| job_id                                                      | job_id、job.id                                                         | 职务id 
| job.job_family_id_list                                      | job.job_family_id_list                                                | 职务关联序列id列表                
| job.job_level_id_list                                       | job.job_level_id_list                                                 |职务关联职级id列表                                    
| job.job_title                                               | job.job_title                                                         |职务头衔                  
| job.name                                                    | job.name                                                              |职务名称                   
| job.working_hours_type_id                                   | job.working_hours_type_id                                             | 职务工时制度id                   
| job.custom_fields                                           | job.custom_fields                                                     |职务自定义字段 
| job_family.active                                           | job_family.active                                                     |序列启用状态                    
| job_family.code                                             | job_family.code                                                       | 序列编码                   
| job_family.custom_fields                                    | job_family.custom_fields                                              | 序列自定义字段                   
| job_family.effective_time                                   | job_family.effective_time                                             | 序列生效日期                   
| job_family.expiration_time                                  | job_family.expiration_time                                            | 序列失效日期                   
| job_family.id                                               | job_family.id                                                         |  序列id      
| job_family.name                                             | job_family.name                                                       |序列名称                    
| job_family.parent_id                                        | job_family.parent_id                                                  |  序列父级id                  
| job_family_id                                               | job_family_id，job_family.id                                           |  序列id                  
| job_grade_id                                                | job_grade_id                                                          | 职等id                    
| job_level.active                                            | job_level.active                                                      |职级启用状态                    
| job_level.code                                              | job_level.code                                                        |  职级编码                  
| job_level.custom_fields                                     | job_level.custom_fields                                               | 职级自定义字段                   
| job_level.description                                       | job_level.description                                                 | 职级描述                 
| job_level.id                                                | job_level.id                                                          |   职级id                 
| job_level.level_order                                       | job_level.level_order                                                 | 职级数值                  
| job_level.name                                              | job_level.name                                                        | 职级名称                  
| job_level_id                                                | job_level_id，job_level.id                                             | 职级id                   
| noncompete_status                                           | noncompete_status                                                     |竞业状态                  
| on_probation                                                | on_probation                                                          |  是否试用中                  
| past_offboarding                                            | past_offboarding                                                      |是否历史离职人员                    
| pay_group_id                                                | pay_group_id                                                          |薪资组id                
| person_info.age                                             | person_info.age                                                       |年龄                    
| person_info.born_country_region                             | person_info.born_country_region                                       | 出生国家/地区                   
| person_info.custom_fields                                   | person_info.custom_fields，person_info.custom_fields.xxx               | 个人信息自定义分组/字段                  
| person_info.date_entered_workforce                          | person_info.date_entered_workforce                                    | 参加工作日期                   
| person_info.date_of_birth                                   | person_info.date_of_birth                                             | 出生日期                    
| person_info.disable_card_number                             | person_info.disable_card_number                                       | 残疾证号                   
| person_info.email_address                                   | person_info.email_address                                             | 个人邮箱                   
| person_info.family_address                                  | person_info.family_address                                            |  家庭住址                  
| person_info.first_entry_time                                | person_info.first_entry_time                                          | 首次入境日期                   
| person_info.gender                                          | person_info.gender                                                    | 性别                   
| person_info.highest_degree_of_education                     | person_info.highest_degree_of_education                               | 最高学位                   
| person_info.highest_level_of_education                      | person_info.highest_level_of_education                                | 最高学历                   
| person_info.hukou_location                                  | person_info.hukou_location                                            | 户口所在地                   
| person_info.hukou_type                                      | person_info.hukou_type                                                | 户口类型                   
| person_info.is_disabled                                     | person_info.is_disabled                                               |是否残疾                  
| person_info.is_martyr_family                                | person_info.is_martyr_family                                          | 是否烈属                   
| person_info.is_old_alone                                    | person_info.is_old_alone                                              | 是否孤老                   
| person_info.leave_time                                      | person_info.leave_time                                                | 离境日期                   
| person_info.legal_name                                      | person_info.legal_name                                                | 法定姓名                   
| person_info.marital_status                                  | person_info.marital_status                                            | 婚姻状况                  
| person_info.martyr_card_number                              | person_info.martyr_card_number                                        | 烈属证号                   
| person_info.national_id_number                              | person_info.national_id_number                                        |居民身份证件号码                    
| person_info.native_region                                   | person_info.native_region                                             |籍贯                    
| person_info.person_id                                       | person_info.person_id                                                 | 个人信息id                   
| person_info.phone_number                                    | person_info.phone_number                                              | 个人电话                   
| person_info.political_affiliations                          | person_info.political_affiliations                                    | 政治面貌                   
| person_info.preferred_english_full_name                     | person_info.preferred_english_full_name                               | 个人常用名（英文）                  
| person_info.preferred_local_full_name                       | person_info.preferred_local_full_name                                 | 个人常用名（本地）                                     
| person_info.preferred_name                                  | person_info.preferred_name                                            |   个人常用名                                 
| person_info.profile_image_id                                | person_info.profile_image_id                                          | 头像资源id                   
| person_info.race                                            | person_info.race                                                      | 民族                   
| person_info.religion                                        | person_info.religion                                                  | 宗教信仰                   
| person_info.talent_id                                       | person_info.talent_id                                                 | 招聘人才id                   
| person_info.working_years                                   | person_info.working_years                                             | 工龄                    
| person_info.working_years_v2                                | person_info.working_years                                             |工龄v2                   
| position.active                                             | position.active                                                       |岗位启用状态                    
| position.code                                               | position.code                                                         | 岗位编码   
| position.descriptions                                       | position.descriptions                                                 |岗位描述                    
| position.names                                              | position.names                                                        | 岗位名称                   
| position.position_id                                        | position.id                                                           |  岗位id                  
| position_id                                                 | position.id                                                           |岗位id                    
| prehire_id                                                  | prehire_id                                                            | 待入职id                   
| primary_contract_id                                         | primary_contract_id                                                   | 主合同id                   
| primary_employment                                          | primary_employment                                                    | 是否是主雇佣信息                   
| probation_end_date                                          | probation_end_date                                                    | 试用期结束日期                   
| probation_period                                            | probation_period                                                      |试用期时长                   
| reason_for_offboarding                                      | reason_for_offboarding                                                | 离职原因                   
| recruitment_type                                            | recruitment_type                                                      | 招聘类型                   
| regular_employee_start_date                                 | regular_employee_start_date                                           |转正式员工日期                    
| rehire                                                      | rehire                                                                |是否离职重聘                  
| rehire_employment_id                                        | rehire_employment_id                                                  |重聘员工id                   
| seniority_date                                              | seniority_date                                                        | 司龄起算日期                   
| service_company                                             | service_company                                                       |任职公司                    
| tenure                                                      | tenure                                                                |司龄                  
| time_zone                                                   | time_zone                                                             |员工所在时区    
| times_employed                                              | times_employed                                                        |入职次数                   
| work_calendar_id                                            | work_calendar_id                                                      |工作日历id                    
| work_location_id                                            | work_location_id                                                      | 工作地点id                   
| work_shift                                                  | work_shift                                                            | 排班                   
| working_hours_type_id                                       | working_hours_type_id                                                 | 工时制度id                   
| cost_center_list.cost_center_id                             | cost_center_list                                                      |成本中心              
| cost_center_list.rate                                       | cost_center_list                                                      |成本中心                    
| person_info.additional_nationalities                        | person_info.additional_nationalities                                  |其他国籍                    
| person_info.address_list                                    | person_info.address_list                                              |联系地址                    
| person_info.bank_account_list                               | person_info.bank_account_list                                         |银行账号                    
| person_info.citizenship_status                              | person_info.citizenship_status                                        |公民身份                    
| person_info.dependent_list                                  | person_info.dependent_list                                            |家庭成员                  
| person_info.education_list                                  | person_info.education_list                                            |教育经历                   
| person_info.email_list                                      | person_info.email_list                                                |个人邮箱                   
| person_info.emergency_contact_list                          | person_info.emergency_contact_list                                    |紧急联系人                    
| person_info.name_list                                       | person_info.name_list                                                 |个人姓名列表                    
| person_info.national_id_list                                | person_info.national_id_list                                          |证件号码列表                    
| person_info.personal_profile                                | person_info.personal_profile                                          |个人资料                    
| person_info.phone_list                                      | person_info.phone_list                                                |个人电话                   
| person_info.resident_taxes                                  | person_info.resident_taxes                                            |纳税身份信息                   
| person_info.work_experience_list                            | person_info.work_experience_list                                      |工作经历  
| person_info.nationality_id_v2                            | person_info.nationality_id_v2                                      |国籍v2                        
| work_email_list                                             | work_email_list                                                       |工作邮箱列表                                     

