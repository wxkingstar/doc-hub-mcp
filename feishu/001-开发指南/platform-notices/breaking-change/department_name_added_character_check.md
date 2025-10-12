<!--
title: 部门名称新增不允许斜杠”/“字符校验
id: 7195112934205046812
fullPath: /uAjLw4CM/ugTN1YjL4UTN24CO1UjN/breaking-change/department_name_added_character_check
updatedAt: 1679629386000
source: https://open.feishu.cn/document/faq/breaking-change/department_name_added_character_check
-->
# 部门名称新增不允许斜杠 “/” 字符的校验

## 变更事项
将调整通讯录中部门相关的接口，新增部门名称（name）字段的字符校验，不允许填写“/”字符。如果部门名称字段中包含“/”字符，将触发创建部门或修改部门失败报错。请及时修改相关接口字段。

## 变更接口
[创建部门](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/create)

[修改部门部分信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/patch)

[更新部门所有信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/update)

## 生效日期
2023 年 2 月 17 日

## 潜在影响
平台升级结束后，若接口传入的部门名称字段中包含“/”字符，将触发创建部门或修改部门失败报错。

## 解决方案
根据 API 接口文档，对接口字段传参进行调整。

如需适配协助，请联系技术支持。