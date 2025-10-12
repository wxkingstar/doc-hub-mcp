<!--
title: 创建/更新成员的接口新增工号唯一和直属上级不能成环的校验
id: 7213570651935686658
fullPath: /uAjLw4CM/ugTN1YjL4UTN24CO1UjN/breaking-change/api-for-creating-or-updating-members-adds-validation
updatedAt: 1680508918000
source: https://open.feishu.cn/document/faq/breaking-change/api-for-creating-or-updating-members-adds-validation
-->
# 创建成员/更新成员的接口增加工号唯一和直属上级不能成环的校验

## 变更事项

对用户的工号、直属上级增加以下校验：
- 工号：企业内在职成员的工号必须唯一
- 直属上级：不能成环、不能超过 50 层
  - 比如，A 的直属上级是 B，B 的直属上级是 A，这种成环汇报是不可以的；以及 A 最多只能有 49 层上级

如果创建成员/更新成员时，工号、直属上级不满足校验规则，将触发接口调用失败或成员数据不符合预期。

## **变更接口**
[创建用户](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/create)

[修改用户部分信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/patch)

[更新用户所有信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/update)

## 生效日期
2023 年 4 月 14 日

## 潜在影响
平台升级结束后，如果你的应用通过 API 在维护在职成员工号或直属上级字段，请关注 API 报错信息，及时调整代码逻辑，否则可能会导致创建成员/更新成员报错

## 解决方案
根据 API 接口文档，对接口调用方式进行调整。
如需适配协助，请联系技术支持。