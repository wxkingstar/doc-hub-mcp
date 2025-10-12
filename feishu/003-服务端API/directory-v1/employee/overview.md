<!--
title: 员工管理概述
id: 7359428154233585668
fullPath: /uAjLw4CM/ukTMukTMukTM/directory-v1/employee/overview
updatedAt: 1747972122000
source: https://open.feishu.cn/document/directory-v1/employee/overview
-->
# 员工管理概述

员工管理资源提供以下接口。







## 方法

**[创建员工](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/directory-v1/employee/create)**

&emsp;&emsp;本接口用于在企业下创建员工，可以理解为员工入职。
员工指飞书企业内身份为「Employee」的成员，等同于通讯录OpenAPI中的「User」。

**[更新员工](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/directory-v1/employee/patch)**

&emsp;&emsp;本接口用于更新在职/离职员工的信息、冻结/恢复员工。未传递的参数不会进行更新。
员工指飞书企业内身份为「Employee」的成员，等同于通讯录OpenAPI中的「User」。

**[离职员工](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/directory-v1/employee/delete)**

&emsp;&emsp;本接口用于离职员工。

**[恢复离职员工](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/directory-v1/employee/resurrect)**

&emsp;&emsp;该接口用于恢复已离职的成员。

**[更新在职员工为待离职](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/directory-v1/employee/to_be_resigned)**

&emsp;&emsp;本接口用于为在职员工办理离职，将其更新为「待离职」状态。「待离职」员工不会自动离职，需要使用「离职员工」API操作离职和资源转交。

**[更新待离职成员为在职](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/directory-v1/employee/regular)**

&emsp;&emsp;本接口用于为待离职员工取消离职，将其更新为「在职」状态。取消离职时会清空离职信息。

**[批量获取员工信息](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/directory-v1/employee/mget)**

&emsp;&emsp;本接口用于批量根据员工的ID查询员工的详情。
员工指飞书企业内身份为「Employee」的成员，等同于通讯录OpenAPI中的「User」。

**[批量查询员工列表](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/directory-v1/employee/filter)**

&emsp;&emsp;本接口用于依据指定条件，批量获取符合条件的员工详情列表。
员工指飞书企业内身份为「Employee」的成员，等同于通讯录OpenAPI中的「User」。

**[搜索员工](/ssl:ttdoc/uAjLw4CM/ukTMukTMukTM/directory-v1/employee/search)**

&emsp;&emsp;本接口用于搜索员工信息。
员工指飞书企业内身份为「Employee」的成员，等同于通讯录OpenAPI中的「User」。









