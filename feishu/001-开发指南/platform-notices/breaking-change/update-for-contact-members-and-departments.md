<!--
title: 通讯录成员与部门 OpenAPI 的不兼容变更
id: 7347737609986457602
fullPath: /uAjLw4CM/ugTN1YjL4UTN24CO1UjN/breaking-change/update-for-contact-members-and-departments
updatedAt: 1710830509000
source: https://open.feishu.cn/document/platform-notices/breaking-change/update-for-contact-members-and-departments
-->
# 通讯录成员与部门 OpenAPI 的不兼容变更
### 变更事项

1.  创建成员、更新成员时，写入成员的 city（工作城市）、job_title（职务）若不存在，则系统会自动创建新的数据
    1. 如果成员创建/更新失败，city/job_title 的数据可能会被创建出来
    1. 如果 city/job_title 的数据创建失败，则不会影响成员的创建/更新，但对应的值会写失败，且返回对应的错误码：
        - ErrorCreateUserSuccessCreateCityFail= 44054
        - ErrorCreateUserSuccessCreateJobTitleFail= 44055
        - ErrorCreateUserSuccessCreateCityAndCreateJobTileFail= 44056
        - ErrorUpdateUserSuccessCreateCityFail = 44057
        - ErrorUpdateUserSuccessCreateJobTitleFail = 44058
        - ErrorUpdateUserSuccessCreateCityAndCreateJobTileFail = 44059
1. 创建部门、修改部门信息时，部门的名称具有「同一个父部门下的同级子部门名称唯一」的限制。但过去并未校验多语言之间的唯一性。如A部门的默认名可以与其他同级部门的英文名相同。
  
  	功能上线后，同一个父部门下的同级子部门，所有语言的名称均不可重复。则**A部门的多语言名称就不可以与其他同级部门的多语言名称相同。**
1. 工号「employee_no」添加长度限制 255，性别「gender」不可写入当前已支持的枚举（0、1、2、3）以外的值

**是否跟随客户端版本**：不跟版

**预计生效时间**：2024-04-08

### 潜在影响
若你的应用使用了通讯录 v3 版本以下的接口，可能会受到上述变更的影响：
- 创建用户
- 修改用户部门信息
- 更新用户所有信息
- 创建部门
- 修改部门部分信息
- 更新部门所有信息

:::html
<md-alert type="tip">
如何识别我使用的接口是否是 v3 版本？

你可通过 HTTP 请求地址判断。例如，通讯录 OpenAPI [创建用户](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/create) 的 HTTP 请求地址为 `https://open.feishu.cn/open-apis/contact/v3/users`，其中的 v3 即标识 v3 版本。
</md-alert>
:::



### 解决方案
针对以上变更，对通讯录接口的调用方式进行调整。

### 联系方式

如需协助解决，可联系应用的开发人员或你使用的应用搭建平台开发人员。