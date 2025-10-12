---
title: "新增接口支持修改用户 ID（user_id）"
source_url: https://open.feishu.cn/document/faq/breaking-change/the-update-member-api-supports-modifying-the-user-id
last_remote_update: 2023-07-20
last_remote_update_timestamp: 1689823301000
---
最后更新于 2023-07-20

# 新增接口支持修改用户ID（user_id）

## 变更事项
为方便用户定义用户 ID，我们将在界面和 Open API 上开放修改用户 ID 的入口，支持不限次数修改用户 ID（仍保持企业内所有成员的用户 ID 唯一）

## 变更接口
[更新用户ID](https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/update_user_id)

## 生效日期
2023 年 3 月 31 日

## 潜在影响
原先获取并存储用户 ID 再做消费的业务可能会受到影响。本来用户 ID 作为用户唯一标识，生成后是不可修改，业务方也默认存下来的 ID 是不会发生变化的。放开修改之后可能会影响存储了用户ID的三方应用，因为查询不到用户导致功能障碍。

## 解决方案
不再存储用户 ID（user_id），需要消费时实时去获取用户 ID；或使用 user open_id、union_id 等不可修改的 id。
如需适配协助，请联系技术支持。
