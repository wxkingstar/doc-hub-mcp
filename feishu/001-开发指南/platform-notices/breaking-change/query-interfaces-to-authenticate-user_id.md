<!--
title: 考勤统计 查询相关接口对user_id鉴权
id: 7216247064853315612
fullPath: /uAjLw4CM/ugTN1YjL4UTN24CO1UjN/breaking-change/query-interfaces-to-authenticate-user_id
updatedAt: 1680176555000
source: https://open.feishu.cn/document/faq/breaking-change/query-interfaces-to-authenticate-user_id
-->
# 考勤统计 查询相关接口对user_id鉴权
### 变更事项
1. 查询统计设置接口增加了对操作者身份的校验，如果传入的user_id没有管理员权限，接口返回错误码1220004，提示无权限操作；如果传入的user_id有管理员权限则使用无影响
2. 查询统计数据接口增加了对操作者身份的校验，操作者只可以获取在其管理范围内的成员数据，其他无权限操作的user_id会包装在新增的响应体字段 "invalid_user_list"中返回
### 变更接口
[查询统计设置](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_stats_view/query)

[查询统计数据](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_stats_data/query)
### 预计生效时间
2023年4月25日
### 潜在影响
1. 对于查询统计设置接口，如果传入的操作者user_id没有管理员权限，则接口报错
2. 对于查询统计数据接口，接口只会返回在操作者管理范围内的成员数据，没有权限操作的用户数据获取不到，获取不到数据的user_id会在响应体中返回
### 解决方案
接口传入的user_id需要是一个拥有管理员权限的操作者
### 联系方式
如需适配协助，请联系技术支持。